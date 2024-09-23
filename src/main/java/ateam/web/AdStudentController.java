package ateam.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.service.AdStudentService;

@Controller
public class AdStudentController {
	
	@Resource(name = "AdStudentService")
	private AdStudentService service;
	
	
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
	
	@RequestMapping(value = "/saveAdStudent.do")
    public NexacroResult saveAdStudent(@ParamDataSet(name = "save_ds", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
    	System.out.println(param);

    	try {
    		service.saveAdStudent(param);
    	}catch(Exception ee) {
    		System.out.println(ee);
    	}
    	System.out.println("뭘 리턴하지? " + result);
    	return result;
    	
    }
	

}
