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
	
	
	//휴복학 신청 리스트를 반환
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
	
	
	//신청 상세 정보를 반환
	@RequestMapping(value="/statusApprovedDetail.do")
	public NexacroResult statusApprovedDetail(@ParamVariable(name = "STATUS_CODE", required = false) String statusCode) {
		NexacroResult result = new NexacroResult();

		try {
			Map<String, Object> statusDetail = service.statusDetail(statusCode);
			result.addDataSet("ds_StudentDetail", statusDetail);
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		return result;
	}
	
	
	//신청 상세 정보를 반환
	@RequestMapping(value="/studentInfo.do")
	public NexacroResult studentInfo(@ParamVariable(name = "STUDENT_ID", required = false) String studentId) {
		NexacroResult result = new NexacroResult();
		try {
			Map<String, Object> studentInfo = service.studentInfo(studentId);
			result.addDataSet("ds_StudentDetail", studentInfo);
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		return result;
	}
	
	
	//등록하거나 : insert
	//신청 내용에 대한 승인 여부 : update
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
	
	
	//신청 내용을 삭제
	@RequestMapping(value="/statusApprovedDelete.do")
	public NexacroResult statusApprovedDelete(@ParamVariable(name = "STATUS_CODE", required = false) String studentId) {
	       System.out.println("statusApprovedDelete.do");

	       NexacroResult result = new NexacroResult();
		try {
			service.statusDelete(studentId);
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		return result;
	}
}
