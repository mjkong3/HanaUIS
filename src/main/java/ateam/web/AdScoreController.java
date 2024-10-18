package ateam.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.service.AdScoreService;


@Controller
public class AdScoreController {
	
	@Resource(name = "AdScoreService")
	private AdScoreService service;
	
	
	@RequestMapping(value="/selectScDept.do")
	public NexacroResult selectScDept() {
		NexacroResult result = new NexacroResult();
		
		// 넘어온 값 code
		List<Map<String, Object>> ds_dept = service.selectScDept();
		result.addDataSet("ds_dept",ds_dept);

		return result;
	}
	
	@RequestMapping(value="/searchScClass.do")
	public NexacroResult searchScClass(@ParamDataSet(name="ds_searchClass", required = false) Map<String, Object> map) {
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> ds_class = service.searchScClass(map);
		
		result.addDataSet("ds_class",ds_class);
		return result;
	}
	
	@RequestMapping(value="/selectScStudent.do")
	public NexacroResult selectScStudent(@ParamDataSet(name="ds_searchSttudent", required = false) Map<String, Object> map) {
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> ds_scoreList = service.selectScStudent(map);
		
		result.addDataSet("ds_scoreList",ds_scoreList);
		
		return result;
	}
	
	
	
	@RequestMapping(value="/updateScStudent.do")
	public NexacroResult updateScStudent(@ParamDataSet(name="ds_updateScore", required = false) List<Map<String, Object>> map) {
		NexacroResult result = new NexacroResult();
		
		try {
			service.updateScore(map);
			
		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("업데이트에 실패하였습니다.");
		}
		
		return result;
	}

	
}
