package ateam.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.dto.ProfessorDTO;
import ateam.dto.StudentDTO;
import ateam.service.AdStudentService;
import ateam.service.StudentService;

@Controller
public class AdStudentController {
   
   @Resource(name = "AdStudentService")
   private AdStudentService service;
   
	@Autowired
	private StudentService studentService;
   
   
   @RequestMapping(value = "/selectDepartment.do")
    public NexacroResult selectDepartment() {
       NexacroResult result = new NexacroResult();
       
       try {
          List<Map<String, Object>> DEPARTMENT_List = service.selectDepartment();
          result.addDataSet("DEPARTMENT_List", DEPARTMENT_List);
          
       }catch(Exception ee) {
          result.setErrorCode(-1);
          result.setErrorMsg("catch 조회 오류");
       }
       
       return result;
    }
   
   
   @RequestMapping(value = "/selectAdStudent.do")
    public NexacroResult selectAdStudent(@ParamDataSet(name = "Search", required = false) Map<String, Object> param) {
       NexacroResult result = new NexacroResult();

       try {
          List<Map<String, Object>>  DEPARTMENT_DTL_List = service.selectAdStudent(param);
          result.addDataSet("DEPARTMENT_DTL_List", DEPARTMENT_DTL_List);
          
       }catch(Exception ee) {
          ee.printStackTrace();
          result.setErrorCode(-1);
          result.setErrorMsg("catch 조회 오류");
       }
       
       return result;
    }
   
   @RequestMapping(value = "/selectAdStudentdtl.do")
    public NexacroResult selectAdStudentdtl(@ParamDataSet(name = "DTL_onrow_ds", required = false) Map<String, Object> param) {
       NexacroResult result = new NexacroResult();

       try {
          Map<String, Object> student_dtl_list = service.selectAdStudentdtl(param);
          result.addDataSet("student_dtl_list", student_dtl_list);
          
       }catch(Exception ee) {
          result.setErrorCode(-1);
          result.setErrorMsg("catch 조회 오류");
       }
       
       return result;
    }
   
   @RequestMapping(value = "/studCheckId.do")
   public NexacroResult studCheckId(@ParamVariable(name = "STUDENT_ID", required = false) String STUDENT_ID) {
      NexacroResult result = new NexacroResult();

      try {
         Map<String, Object> ds_vali = service.studCheckId(STUDENT_ID);
         result.addDataSet("ds_vali", ds_vali);
         
      }catch(Exception ee) {
         result.setErrorCode(-1);
         result.setErrorMsg("catch 조회 오류");
      }
      
      return result;
   }
   
   @RequestMapping(value = "/stuCheckEm.do")
   public NexacroResult stuCheckEm(@ParamDataSet(name = "save_ds", required = false) Map<String, Object> param) {
      NexacroResult result = new NexacroResult();

      try {
         Map<String, Object> ds_vali = service.stuCheckEm(param);
         result.addDataSet("ds_vali", ds_vali);
         
      }catch(Exception ee) {
         result.setErrorCode(-1);
         result.setErrorMsg("catch 조회 오류");
      }
      
      return result;
   }
   
   @RequestMapping(value = "/insertAdStudent.do")
    public NexacroResult insertAdStudent(@ParamDataSet(name = "save_ds", required = false) Map<String, Object> param) {
      NexacroResult result = new NexacroResult();

       try {
          service.insertAdStudent(param);
          
       }catch(Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
       }
       
       return result;
       
    }
   
   @RequestMapping(value = "/updateAdStudent.do")
   public NexacroResult updateAdStudent(@ParamDataSet(name = "save_ds", required = false) Map<String, Object> param) {
     NexacroResult result = new NexacroResult();

      try {
         service.updateAdStudent(param);
         
      }catch(Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
      }
      
      return result;
      
   }
   
   
   
   @RequestMapping(value = "/deleteAdStudent.do")
    public NexacroResult deleteAdStudent(@ParamDataSet(name = "dlt_ds", required = false) List<Map<String, Object>> param) {
      NexacroResult result = new NexacroResult();

       try {
          for(int i =0; i < param.size(); i++) {
              System.out.println(param.get(i));
              service.deletAdStudent(param.get(i));
           }
       }catch(Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
       }
       
       return result;
       
    }

	@RequestMapping(value = "/AdStudentgo.do")
	public NexacroResult AdStudentgo(@ParamDataSet(name = "ds_mydata", required = false) Map<String, Object> param,
										HttpServletRequest request, StudentDTO dto) {
		NexacroResult result = new NexacroResult();
		HttpSession session = request.getSession();

		session.invalidate();
		Object studentIdObj = param.get("studentid");

		int id = 0;
		if (studentIdObj instanceof Integer) {
			id = (Integer) studentIdObj;
		} else if (studentIdObj instanceof String) {
			id = Integer.parseInt((String) studentIdObj); // String인 경우 변환
		}
		String ps = (String) param.get("studentps");
		// 얻은 값 설정
		dto.setStudentId(id);
		dto.setPassword(ps);

		StudentDTO studentDTO = service.stdchecklogin(dto, request.getSession());

		try {
			session = request.getSession();
			session.setAttribute("student", studentDTO); // 임시 사용자 정보 세션 저장
			session.setMaxInactiveInterval(1800); // 로그인 세션 만료 시간 = 30분

		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		return result;

	}


   @RequestMapping(value = "/checkstudentexcel.do")
    public NexacroResult checkstudentexcel(@ParamDataSet(name = "ds_test", required = false) List<Map<String, Object>> param) {
      NexacroResult result = new NexacroResult();

      try {
    	  List<Map<String, Object>> list = null;
    	  list = service.checkStudentExcel(param);
    	  System.out.println(list);
    	  result.addDataSet("ds_check", list);
    	  
      }catch(Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
      }
       return result;
    }
   
   @RequestMapping(value = "/insertexcelStu.do")
   public NexacroResult insertexcelStu(@ParamDataSet(name = "ds_test", required = false) List<Map<String, Object>> param) {
     NexacroResult result = new NexacroResult();

      try {
         service.insertexcelStu(param);
         
      }catch(Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
      }
      return result;
      
   }
  

}
