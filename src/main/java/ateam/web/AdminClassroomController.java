package ateam.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.service.AdStudentService;
import ateam.service.AdminClassroomService;

@Controller
public class AdminClassroomController {
	@Resource(name = "AdminClassroomService")
	private AdminClassroomService service;
	
	
	@RequestMapping(value = "/SelectAdminClassroom.do")
    public NexacroResult SelectAdminClassroom() {
    	System.out.println("SelectAdminClassroom.do");
    	NexacroResult result = new NexacroResult();
    	
    	try {
    		List<Map<String, Object>> classroom_ds = service.SelectAdminClassroom();
    		//Map<String, Object> welcome = service.welcome(param);
    		System.out.println("dkdkdkddkefewa"+ classroom_ds);
    		
            // 조회된 데이터를 넥사크로 데이터셋에 추가
            result.addDataSet("classroom_ds", classroom_ds);
    		
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
    }
	
	@RequestMapping(value = "/SelectAdminClasstime.do")
    public NexacroResult SelectAdminClasstime(@ParamVariable(name = "CLASSROOM_ID", required = false) String param) {
    	System.out.println(param);
    	NexacroResult result = new NexacroResult();

    	try {
    		List<Map<String, Object>> classtime_ds = service.SelectAdminClasstime(param);
    		
    		System.out.println("dkdkdkddkefewa"+ classtime_ds);

    		result.addDataSet("classtime_ds", classtime_ds);
    		
    	}catch(Exception ee) {
    		ee.printStackTrace();
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
    }
	
	@RequestMapping(value = "/SelectAdminClasstimeid.do")
    public NexacroResult SelectAdminClasstimeid(@ParamVariable(name = "CLASSROOM_ID", required = false) String param) {
    	System.out.println(param);
    	NexacroResult result = new NexacroResult();

    	try {
    		List<Map<String, Object>> ds_classtimeid = service.SelectAdminClasstimeid(param);
    		
    		System.out.println("ds_classtimeid"+ ds_classtimeid);

    		result.addDataSet("ds_classtimeid", ds_classtimeid);
    		
    	}catch(Exception ee) {
    		ee.printStackTrace();
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
    }
	
	@RequestMapping(value = "/SelectAdminClasscourse.do")
    public NexacroResult SelectAdminClasscourse() {
    	System.out.println("아니 진짜");
    	NexacroResult result = new NexacroResult();

    	try {
    		List<Map<String, Object>> classcourse_ds = service.SelectAdminClasscourse();
    		
    		System.out.println("dkdkdkddkefewa"+ classcourse_ds);

    		result.addDataSet("classcourse_ds", classcourse_ds);
    		
    	}catch(Exception ee) {
    		ee.printStackTrace();
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
    }
	
	@RequestMapping(value = "/saveAdminClasscourse.do")
    public NexacroResult saveAdminClasscourse(@ParamDataSet(name = "classcourse_ds", required = false) List<Map<String, Object>> param) {
    	System.out.println("??");
    	NexacroResult result = new NexacroResult();

    	try {
    		System.out.println(param);
    		for(int i =0; i < param.size(); i++) {
        		System.out.println(param.get(i));
        		service.saveAdminClasscourse(param.get(i));
        	}
    		
    	}catch(Exception ee) {
    		ee.printStackTrace();
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
    }
	
}
