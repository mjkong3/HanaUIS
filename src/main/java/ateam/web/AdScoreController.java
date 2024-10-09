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
		System.out.println("@@"+ds_dept+"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@!!!!!##########");
		result.addDataSet("ds_dept",ds_dept);

		return result;
	}
	
	@RequestMapping(value="/searchScClass.do")
	public NexacroResult searchScClass(@ParamDataSet(name="ds_searchClass", required = false) Map<String, Object> map) {
		
		NexacroResult result = new NexacroResult();
		System.out.println(map+"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
		List<Map<String, Object>> ds_class = service.searchScClass(map);
		
		result.addDataSet("ds_class",ds_class);
		return result;
	}
	
	@RequestMapping(value="/selectScStudent.do")
	public NexacroResult selectScStudent(@ParamDataSet(name="ds_searchSttudent", required = false) Map<String, Object> map) {
		
		NexacroResult result = new NexacroResult();
		System.out.println(map+"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
		List<Map<String, Object>> ds_scoreList = service.selectScStudent(map);
		
		result.addDataSet("ds_scoreList",ds_scoreList);
		return result;
	}
	
	
	
	@RequestMapping(value="/updateScStudent.do")
	public NexacroResult updateScStudent(@ParamDataSet(name="ds_updateScore", required = false) List<Map<String, Object>> map) {
		
		System.out.println(map);
		NexacroResult result = new NexacroResult();
		
		try {

			service.updateScore(map);
			System.out.println("실행완료");
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("업데이트에 실패하였습니다.");
		}
		
		System.out.println("트라이캐치문 완료");
		return result;
	}

	
	
	
	
	
	/*int middleTest = Integer.parseInt((String) param.get("middleTest"));
		int finalTest = Integer.parseInt((String) param.get("finalTest"));
		int report = Integer.parseInt((String) param.get("report"));
		double score = (middleTest / 100.0 * 40) + (finalTest / 100.0 * 40) + (report / 100.0 * 20);
		int classCode = Integer.parseInt((String) param.get("classCode"));
		System.out.println("============================================" + score);

		System.out.println(score);
		String grade = "";
		if (score >= 90) {
			grade = "A";
		} else if (score >= 80) {
			grade = "B";
		} else if (score >= 70) {
			grade = "C";
		} else if (score >= 60) {
			grade = "D";
		} else {
			grade = "F";
		}
		System.out.println(grade);

		param.put("grade", grade);
		param.put("score", score);
		param.put("classCode", classCode);
		param.put("professorId", professor.getProfessorId());

		int result = classService.updateGrade(param);
		System.out.println("result : " + result);*/
}
