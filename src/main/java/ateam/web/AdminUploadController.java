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
	public NexacroResult insertBoard(@ParamDataSet(name = "ds_board", required = false) Map<String, Object> param) {
		System.out.println("컨트롤러-");
		NexacroResult result = new NexacroResult();
		try {
			System.out.println(param);
			System.out.println("컨트롤러-123123123");
			
    		service.insertBoard(param);
    		
    		result.addVariable("board_code","");;
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	return result;
	}
	
	@RequestMapping(value = "/insertFile.do")
	public NexacroResult insertFile(@ParamDataSet(name = "ds_fileInsert", required = false) List<Map<String, Object>> listParam) {
		NexacroResult result = new NexacroResult();
		System.out.println("@222222222222222222222222222222222222222222222222222222222222222222222"+listParam);
		
		for(Map<String, Object> param : listParam) {
			service.insertFile(param);
		}
		
			
		return result;
	}
}