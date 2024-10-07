package ateam.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.service.AdStudentStatusService;

@Controller
public class AdStudentStatusController {
	
	@Resource(name = "AdStudentStatusService")
	private AdStudentStatusService service;
	
	@RequestMapping(value = "/statusApprovedList.do")
    public NexacroResult statusApprovedList(@ParamDataSet(name = "ds_Search", required = false) Map<String, Object> param) {
       System.out.println("statusApprovedList.do");
       
       NexacroResult result = new NexacroResult();
       
       try {
    	   List<Map<String, Object>> studentList = service.statusApprovedList(param);
    	   result.addDataSet("ds_StudentList", studentList);
    	   
       }catch(Exception ee) {
           System.out.println(ee);
           result.setErrorCode(-1);
           result.setErrorMsg("catch 조회 오류");
        }
       return result;
	}
	
	@RequestMapping(value="/statusApprovedDetail.do")
	public NexacroResult statusApprovedDetail(@ParamVariable(name = "STATUS_CODE", required = false) String statusCode) {
		NexacroResult result = new NexacroResult();
		System.out.println("받아왔는지1? " + statusCode);
		try {
			Map<String, Object> statusDetail = service.statusDetail(statusCode);
			System.out.println("받아왔는지2? " + statusDetail);
			result.addDataSet("ds_StudentDetail", statusDetail);
			System.out.println("넣어졌는지1? " + result);
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		System.out.println("넣어졌는지2? " + result);
		return result;
	}
	
	@RequestMapping(value="/statusUpdate.do")
	public NexacroResult statusApprovedUpdate(@ParamDataSet(name = "ds_StudentDetail", required = false) Map<String, Object> param) {
	       System.out.println(param);
	       System.out.println("statusUpdate.do");
	       
	       NexacroResult result = new NexacroResult();

	       try {
	    	   if(param.get("STATUS_CODE") != null) {
		    	   service.statusApprovedUpdate(param);

	    	   }else {
	    		   service.statusApprovedInsert(param);

	    	   }
	       }catch(Exception ee) {
	           System.out.println(ee);
	           result.setErrorCode(-1);
	           result.setErrorMsg("catch 조회 오류");
	        }
	       return result;
	}
	
	@RequestMapping(value="/statusApprovedInsert.do")
	public NexacroResult statusApprovedInsert(@ParamDataSet(name = "", required = false) Map<String, Object> param) {
	       System.out.println(param);
	       System.out.println("statusApprovedInsert.do");
	       
	       NexacroResult result = new NexacroResult();

	       try {
	    	   service.statusApprovedInsert(param);
	       }catch(Exception ee) {
	           System.out.println(ee);
	           result.setErrorCode(-1);
	           result.setErrorMsg("catch 조회 오류");
	        }
	       return result;
	}
}
