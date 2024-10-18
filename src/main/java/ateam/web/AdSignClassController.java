package ateam.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.service.AdSignClassService;

@Controller
public class AdSignClassController {

	@Autowired
	private AdSignClassService adSignClassService;

	// 수강신청 분류하기
	@RequestMapping(value = "/selectDeptListForSign.do")
	public NexacroResult selectAdDept(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		
		try {
			List<Map<String, Object>> ds_dept = adSignClassService.selectDeptList(param);
			result.addDataSet("ds_dept", ds_dept);
			
		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		return result;
	}
	
	// 수강신청 수정 조회하기
	@RequestMapping(value = "/selectAdSignClass.do")
	public NexacroResult selectList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult(); 
		
		try {
			List<Map<String, Object>> ds_list = adSignClassService.selectAdSignClass(param);
			result.addDataSet("ds_list", ds_list);
			
		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		
		return result;
	}

	// 수강신청 목록 삭제하기
	@RequestMapping(value = "/deleteAdSignClass.do")
	public NexacroResult deleteAdSignClass(@ParamDataSet(name = "ds_delete", required = false) List<Map<String, Object>> param) {
		NexacroResult result = new NexacroResult();
		
		try {
	        // List에 담아온 수강신청 리스트들을 순차적으로 보내 삭제시킨다
			for(int i = 0; i < param.size(); i++) {
				adSignClassService.deleteAdSignClass(param.get(i));
	          }
			
    	}catch(Exception ee) {
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
		
		return result;
	}

	
	// <↓ 팝업> @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
	
	// 수강신청 팝업 데이터 조회하기
	@RequestMapping(value = "/selectAdSignUserInfo.do")
	public NexacroResult selectAdInfo() {
		NexacroResult result = new NexacroResult();
		
		try {
			List<Map<String, Object>> ds_deptPopup = adSignClassService.selectDeptUserList();
			result.addDataSet("ds_deptPopup", ds_deptPopup);
			
		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		return result;
	}
	
	// 모든 수강목록 리스트 조회
	@RequestMapping(value = "/selectAdSignFullList.do")
	public NexacroResult selectClassFullList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		
		try {
			List<Map<String, Object>> ds_listPopup = adSignClassService.selectClassFullList(param);
			result.addDataSet("ds_listPopup", ds_listPopup);
			
		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		
		return result;
	}
	
	// 누적학점 조회하기
	@RequestMapping(value = "/selectAdTotalGrade.do")
	public NexacroResult selectAdTotalGrade(@ParamVariable(name = "studentId", required = false) String param) {
		NexacroResult result = new NexacroResult(); 
		
		try {
			List<Map<String, Object>> ds_totalGrade = adSignClassService.totalGrades(param);
			result.addDataSet("ds_totalGrade", ds_totalGrade);
			
		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		
		return result;
	}
	
	// 수강신청한 강의 보기
	@RequestMapping(value = "/selectAdConfirmed.do")
	public NexacroResult selectAdConfirmed(@ParamVariable(name = "studentId", required = false) String param) {
		NexacroResult result = new NexacroResult(); 
		
		try {
			List<Map<String, Object>> ds_confirmed = adSignClassService.confirmedClasses(param);
			result.addDataSet("ds_confirmed", ds_confirmed);
			
		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		
		return result;
	}
	
	// 수강신청하기
	@RequestMapping(value = "/insertAdSignClass.do")
	public NexacroResult insertAdSign(@ParamDataSet(name = "ds_enroll", required = false) List<Map<String, Object>> param) {
		NexacroResult result = new NexacroResult();
		
		try {
			for(int i = 0; i < param.size(); i++) {
				adSignClassService.insertClasses(param.get(i));
			}
			
		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		
		return result;
	}
	
}
