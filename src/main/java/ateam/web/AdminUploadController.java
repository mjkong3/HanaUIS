package ateam.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.service.AdminUploadService;

@Controller
public class AdminUploadController { 
	
	@Resource(name = "AdminUploadService")
    private AdminUploadService service;
	
	@RequestMapping(value = "/insertBoard.do")
	public NexacroResult insertBoard(@ParamDataSet(name = "ds_board", required = false) Map<String, Object> param,
									 @ParamDataSet(name = "ds_contentFile", required = false) Map<String, Object> image) {
		NexacroResult result = new NexacroResult();
		
		// image에서 "IMAGE"라는 키로 저장된 값만 추출
		String imageName = (String) image.get("IMAGE");
		param.put("IMAGE", imageName);
		
		try {
    		service.insertBoard(param);
    		result.addDataSet("ds_board",param);
    		result.addVariable("board_code","");
    		
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
		
    	return result;
	}
	
	@RequestMapping(value = "/insertFile.do")
	public NexacroResult insertFile(@ParamDataSet(name = "ds_fileInsert", required = false) List<Map<String, Object>> listParam, @ParamDataSet(name = "ds_board", required = false) Map<String, Object> boardParam) {
		NexacroResult result = new NexacroResult();
		
		for(Map<String, Object> param : listParam) {
			param.put("BOARD_CODE", boardParam.get("BOARD_CODE"));
			service.insertFile(param);
			
		}
		
		return result;
	}
	
	
	
	@RequestMapping(value = "/updateBoard.do")
	public NexacroResult updateBoard(@ParamDataSet(name = "ds_board", required = false) Map<String, Object> param){
		NexacroResult result = new NexacroResult();
		
		try {
    		service.updateBoard(param);
    		result.addVariable("board_code","");;
    		
    	}catch(Exception ee) {
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
		
    	return result;
	}
	
	
	@RequestMapping(value = "/updateFile.do")
	public NexacroResult updateFile(@ParamDataSet(name = "ds_file", required = false) List<Map<String, Object>> listParam,@ParamDataSet(name = "ds_board", required = false) Map<String, Object> boardParam) {
		NexacroResult result = new NexacroResult();
		
		for(Map<String, Object> param : listParam) {
			
			param.put("BOARD_CODE", boardParam.get("BOARD_CODE"));
			service.updateFile(param);
			
		}
		
		return result;
	}
	
	@RequestMapping(value = "/deleteBoard.do")
	public NexacroResult deleteBoard(@ParamDataSet(name = "ds_copyCat", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		
		service.deleteBoard(param);
		
		return result;
	}
}