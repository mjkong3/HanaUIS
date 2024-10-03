package ateam.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.service.AdScoreChartService;

@Controller
public class AdScoreChartController {

	@Autowired
	private AdScoreChartService service;
	
	// 학과별 강의목록 cmb 출력
	@RequestMapping(value = "/selectAdClass.do")
	public NexacroResult selectAdClass(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		System.out.println("받아왔는지1? " + param);
		try {
			List<Map<String, Object>> ds_class = service.selectAdClass(param);
			System.out.println("받아왔는지2? " + ds_class);
			result.addDataSet("ds_class", ds_class);
		
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		System.out.println("넣어졌는지2? " + result);
		return result;
	}
	


	// 조회시 chart 출력용 데이터 전송
	@RequestMapping(value = "/selectAdScoreChart.do")
	public NexacroResult selectAdScoreChart(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {
	System.out.println(param);
	NexacroResult result = new NexacroResult();

	try {

		List<Map<String, Object>> ds_chart = service.selectAdScoreChart(param);

		System.out.println("리스트생성?" + ds_chart);
		result.addDataSet("ds_chart", ds_chart);

	} catch (Exception ee) {
		System.out.println(ee);
		result.setErrorCode(-1);
		result.setErrorMsg("catch 조회 오류");
	}
	System.out.println("리스트 넘겨지나" + result);
	return result;
}
	}