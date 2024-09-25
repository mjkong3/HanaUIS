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

		System.out.println(param);		
		
		Map<String, Object> ds_board = service.selectBoard(param);
		result.addDataSet("ds_board", ds_board);
		System.out.println(ds_board);

		return result;
	}
}
