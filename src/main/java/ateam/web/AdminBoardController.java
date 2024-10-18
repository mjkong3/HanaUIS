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
	
	@RequestMapping(value = "/selectBoardList.do")
	public NexacroResult selectBoardList(@ParamDataSet(name = "search_ds", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		
		try {
			List<Map<String, Object>> boardList_ds = service.selectBoardList(param);
					
			result.addDataSet("boardList_ds", boardList_ds);
		} catch(Exception ee) {
			result.setErrorCode(01);
			result.setErrorMsg("catch 조회 오류");
		}
		
		return result;
	}
	
	@RequestMapping(value = "/selectBoard.do")
	public NexacroResult selectBoard(@ParamVariable(name = "id", required = false) String param) {
		NexacroResult result = new NexacroResult();

		Map<String, Object> ds_board = service.selectBoard(param);
		
		Object File_Name = ds_board.get("FILES");
		Object IMAGE = ds_board.get("IMAGE");
		
		result.addDataSet("ds_board", ds_board);
		result.addDataSet("ds_file", File_Name);
		result.addDataSet("ds_contentFile", IMAGE);
		
		return result;
	}
}
