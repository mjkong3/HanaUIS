package ateam.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.service.AdClassInfoService;

@Controller
public class AdClassInfoController {

	@Autowired
	private AdClassInfoService service;
	
	// 조회
	@RequestMapping(value = "/selectAdClsList.do")
	public NexacroResult selectList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		
		try {
			List<Map<String, Object>> ds_list = service.selectAdClsList(param);
			result.addDataSet("ds_list", ds_list);

		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		
		return result;
	}
	
	// 삭제
	@RequestMapping(value = "/deleteAdClsInfo.do")
	public NexacroResult deleteAdClsInfo(@ParamDataSet(name = "ds_delete", required = false) List<Map<String, Object>> param) {
		NexacroResult result = new NexacroResult();
		
		try {
			for (int i = 0; i < param.size(); i++) {
				service.deleteAdClsInfo(param.get(i));
			}
			
		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}

		return result;
	}
	
	@RequestMapping(value = "selectAdClsInfo.do")
	public NexacroResult selectAdClsInfo(@ParamVariable(name = "CLASS_CODE", required = false) String clsCd) {
		NexacroResult result = new NexacroResult();
		
		try {
			
			Map<String, Object> ds_list = service.selectAdClsInfo(clsCd);
			result.addDataSet("ds_list", ds_list);
			
		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
			
		}
		return result;
		
	}
	
	@RequestMapping(value = "selectProId.do")
	public NexacroResult selectProId(@ParamDataSet(name = "ds_getDept", required = false) Map<String, Object>param) {
		NexacroResult result = new NexacroResult();
		
		try {
			List<Map<String, Object>> ds_proId = service.selectProId(param);
			result.addDataSet("ds_proId", ds_proId);
			
		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
			
		}
		return result;
	}
	
	@RequestMapping(value = "insertAdClsInfo.do")
	public NexacroResult insertAdClsInfo(@ParamDataSet(name = "ds_class", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		try {
			// 반환할 ds가 없으므로 service 로직만 실행
			service.insertAdClsInfo(param);
			
		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		// 반환값이 없어도 null은 안된다 - 빈 nexacro 객체를 반환!
		return result;
	}
	
	@RequestMapping(value = "/updateAdClsInfo.do")
	public NexacroResult updateAdClsInfo(@ParamDataSet(name = "ds_class", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();

		try {
			service.updateAdClsInfo(param);
			
		} catch (Exception ee) {
			
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		return result;
	}	
}
