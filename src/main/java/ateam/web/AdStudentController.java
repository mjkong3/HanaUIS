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
       System.out.println("selectDepartment.do");
       NexacroResult result = new NexacroResult();
       
       try {
          List<Map<String, Object>> DEPARTMENT_List = service.selectDepartment();
          //Map<String, Object> welcome = service.welcome(param);
          System.out.println("dkdkdkddkefewa"+ DEPARTMENT_List);
          
            Map<String, Object> allDept = new HashMap<>();
            allDept.put("DEPARTMENT_CODE", "00");  // 학과 코드 공백 (전체 의미)
            allDept.put("DEPARTMENT_NAME", "전체학과");  // 학과 이름 "전체학과"로 설정
            
            // "전체학과"를 리스트의 첫 번째 행에 추가
            DEPARTMENT_List.add(0, allDept);

            // 조회된 데이터를 넥사크로 데이터셋에 추가
            result.addDataSet("DEPARTMENT_List", DEPARTMENT_List);
          
       }catch(Exception ee) {
          System.out.println(ee);
          result.setErrorCode(-1);
          result.setErrorMsg("catch 조회 오류");
       }
       
       return result;
    }
   @RequestMapping(value = "/selectAdStudent.do")
    public NexacroResult selectAdStudent(@ParamDataSet(name = "Search", required = false) Map<String, Object> param) {
       System.out.println(param);
       NexacroResult result = new NexacroResult();

       try {
          System.out.println("0번");
          List<Map<String, Object>>  DEPARTMENT_DTL_List = service.selectAdStudent(param);
          //Map<String, Object> welcome = service.welcome(param);
          System.out.println("1번");
          
   
          System.out.println("dkdkdkddkefewa"+ DEPARTMENT_DTL_List);

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
       System.out.println(param);
       NexacroResult result = new NexacroResult();

       try {
          Map<String, Object> student_dtl_list = service.selectAdStudentdtl(param);
          //Map<String, Object> welcome = service.welcome(param);
          System.out.println("dkdkdkddkefewa"+ student_dtl_list);

          result.addDataSet("student_dtl_list", student_dtl_list);
          
       }catch(Exception ee) {
          System.out.println(ee);
          result.setErrorCode(-1);
          result.setErrorMsg("catch 조회 오류");
       }
       
       return result;
    }
   
   @RequestMapping(value = "/insertAdStudent.do")
    public NexacroResult insertAdStudent(@ParamDataSet(name = "save_ds", required = false) Map<String, Object> param) {
      NexacroResult result = new NexacroResult();
       System.out.println(param);

       try {
          service.insertAdStudent(param);
       }catch(Exception ee) {
          System.out.println(ee);
       }
       System.out.println("뭘 리턴하지? " + result);
       return result;
       
    }
   
   @RequestMapping(value = "/updateAdStudent.do")
   public NexacroResult updateAdStudent(@ParamDataSet(name = "save_ds", required = false) Map<String, Object> param) {
     NexacroResult result = new NexacroResult();
      System.out.println(param);

      try {
         service.updateAdStudent(param);
      }catch(Exception ee) {
         System.out.println(ee);
      }
      System.out.println("뭘 리턴하지? " + result);
      return result;
      
   }
   
   
   
   @RequestMapping(value = "/deleteAdStudent.do")
    public NexacroResult deleteAdStudent(@ParamDataSet(name = "dlt_ds", required = false) List<Map<String, Object>> param) {
      NexacroResult result = new NexacroResult();
       System.out.println(param);
       

       try {
          
          for(int i =0; i < param.size(); i++) {
              System.out.println(param.get(i));
              service.deletAdStudent(param.get(i));
           }
       }catch(Exception ee) {
          System.out.println(ee);
       }
       System.out.println("뭘 리턴하지? " + result);
       return result;
       
    }
   @RequestMapping(value = "/AdStudentgo.do")
   public NexacroResult AdStudentgo(@ParamDataSet(name = "ds_mydata", required = false) Map<String, Object> param,
		   HttpServletRequest request, StudentDTO dto) {
     NexacroResult result = new NexacroResult();
      System.out.println(param);
      HttpSession session = request.getSession();
      session.invalidate();
      Object studentIdObj = param.get("studentid");
      int id = 0;
      if (studentIdObj instanceof Integer) {
          id = (Integer) studentIdObj;
      } else if (studentIdObj instanceof String) {
          id = Integer.parseInt((String) studentIdObj);  // String인 경우 변환
      }
      String ps = (String) param.get("studentps");
      System.out.println("efnwkjgnewkjnewkjgnewkgnewkjgnewkjgnewkngwk"+id + ps);
   // 얻은 값 설정
   		dto.setStudentId(id);
   		dto.setPassword(ps);
   		
   		StudentDTO studentDTO = service.stdchecklogin(dto, request.getSession());
   		System.out.println("efnwkjgnewkjnewkjgnewkgnewkjgnewkjgnewkngwk"+studentDTO);
      try {
    	  
    	  session = request.getSession();

    	  session.setAttribute("student", studentDTO); // 임시 사용자 정보 세션 저장
    	  session.setMaxInactiveInterval(1800); // 로그인 세션 만료 시간 = 30분

    	  
    	  
      }catch(Exception ee) {
         System.out.println(ee);
      }
      System.out.println("뭘 리턴하지? " + result);
      return result;
      
   }
  

}
