package ateam.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.service.AdClassInfoService;

@Controller
public class AdClassInfoController {

	@Autowired
	private AdClassInfoService service;
	
	@RequestMapping(value = "/selectAdClsList.do")
	public NexacroResult selectList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		
		try {

			List<Map<String, Object>> ds_classinfo = service.selectAdClsList(param);

			System.out.println("리스트생성?" + ds_classinfo);
			result.addDataSet("ds_classinfo", ds_classinfo);

		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		System.out.println("리스트 넘겨지나" + result);
		return result;
	}
	
}
