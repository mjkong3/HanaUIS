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

		try {
			List<Map<String, Object>> ds_class = service.selectAdClass(param);
			result.addDataSet("ds_class", ds_class);
		
		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		
		return result;
	}
	


	// 조회시 chart 출력용 데이터 전송
	@RequestMapping(value = "/selectAdScoreChart.do")
	public NexacroResult selectAdScoreChart(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();

		try {
			List<Map<String, Object>> ds_chart = service.selectAdScoreChart(param);
			result.addDataSet("ds_chart", ds_chart);

		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}

		return result;
	}
	
	
	
	
}