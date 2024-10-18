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
    	NexacroResult result = new NexacroResult();
    	
    	try {
    		List<Map<String, Object>> classroom_ds = service.SelectAdminClassroom();
    		
    		List<Map<String, Object>> ds_classyear = service.SelectAdminclassyear();
    		
    		List<Map<String, Object>> ds_classsem = service.SelectAdminclasssem();
    		
    		
            // 조회된 데이터를 넥사크로 데이터셋에 추가
            result.addDataSet("classroom_ds", classroom_ds);
            result.addDataSet("ds_classyear", ds_classyear);
            result.addDataSet("ds_classsem", ds_classsem);
    		
    	}catch(Exception ee) {
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
    }
	
	@RequestMapping(value = "/SelectAdminClassroom2.do")
    public NexacroResult SelectAdminClassroom2() {
    	NexacroResult result = new NexacroResult();
    	
    	try {
    		List<Map<String, Object>> ds_classroom = service.SelectAdminClassroom();
            // 조회된 데이터를 넥사크로 데이터셋에 추가
            result.addDataSet("ds_classroom", ds_classroom);
    		
    	}catch(Exception ee) {
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
    }
	
	@RequestMapping(value = "/SelectAdminClasscourse.do")
    public NexacroResult SelectAdminClasscourse(@ParamDataSet(name = "ds_insrtcourse", required = false) Map<String, Object> param) {
    	NexacroResult result = new NexacroResult();

    	try {
    		List<Map<String, Object>> classcourse_ds = service.SelectAdminClasscourse(param);
    		result.addDataSet("classcourse_ds", classcourse_ds);
    		
    	}catch(Exception ee) {
    		ee.printStackTrace();
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
    }
	
	@RequestMapping(value = "/saveAdminClasscourse.do")
    public NexacroResult saveAdminClasscourse(@ParamDataSet(name = "ds_classcourein", required = false) List<Map<String, Object>> param) {
    	NexacroResult result = new NexacroResult();

    	try {
    		service.saveAdminClasscourse(param);
    		
    	}catch(Exception ee) {
    		ee.printStackTrace();
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
    }
	
	@RequestMapping(value = "/deleteAdminClasscourse.do")
    public NexacroResult deleteAdminClasscourse(@ParamDataSet(name = "classcoursedelete_ds", required = false) List<Map<String, Object>> param) {
    	NexacroResult result = new NexacroResult();

    	try {
    		service.deleteAdminClasscourse(param);
    		
    	}catch(Exception ee) {
    		ee.printStackTrace();
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
    }
	
	@RequestMapping(value = "/saveAdminClassroom.do")
    public NexacroResult saveAdminClassroom(@ParamDataSet(name = "ds_trans", required = false) Map<String, Object> param) {
    	NexacroResult result = new NexacroResult();

    	try {
    		service.saveAdminClassroom(param);
    		
    	}catch(Exception ee) {
    		ee.printStackTrace();
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
    }
	
	@RequestMapping(value = "/deleteAdminClassroom.do")
    public NexacroResult deleteAdminClassroom(@ParamDataSet(name = "ds_trans", required = false) Map<String, Object> param) {
    	NexacroResult result = new NexacroResult();

    	try {
    		service.deleteAdminClassroom(param);
    		
    	}catch(Exception ee) {
    		ee.printStackTrace();
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
    }
	
}
