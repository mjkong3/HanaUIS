package ateam.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.service.AdminBoardService;


@Controller
public class AdminBoardController {
	
	@Resource(name = "AdminBoardService")
    private AdminBoardService service;
	
	@RequestMapping(value = "/selectBoard.do")
	public NexacroResult selectBoard(@ParamVariable(name = "id", required = false) String param) {
		NexacroResult result = new NexacroResult();

		System.out.println("@@@@@@@@@@@@@@@@@222" + param);		
		
		Map<String, Object> ds_board = service.selectBoard(param);
		
		Object File_Name = ds_board.get("FILES");
		
		result.addDataSet("ds_board", ds_board);
		result.addDataSet("ds_file", File_Name);
		
		return result;
	}
}
