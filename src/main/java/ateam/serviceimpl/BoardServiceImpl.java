package ateam.serviceimpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import ateam.dto.BoardDTO;
import ateam.dto.FileDTO;
import ateam.mapper.BoardMapper;
import ateam.service.BoardService;


@Service("BoardService")
public class BoardServiceImpl implements BoardService{

	@Autowired
	public BoardMapper mapper;

	@Override
	public int getBoardCount(String searchKeyword) {
		Map<String, Object> param = new HashMap<>();
		param.put("searchKeyword",searchKeyword);
		return mapper.getBoardCount(param);
	}

	@Override
	public List<Map<String, Object>> boardList(int page, int pageSize) {
	      int offset = (page - 1) * pageSize;

	      Map<String, Object> params = new HashMap<>();
	      params.put("pageSize", pageSize);
	      params.put("offset", offset);

	      
	      return mapper.boardList(params);
  	}
	

	public Map<String, Object> selectBoardAndFile(int id){
		
		BoardDTO board = mapper.selectBoard(id);
		
		List<FileDTO> fileList = mapper.selectFile(id);
	
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("board",board);
		map.put("fileList", fileList);
		
		return map;
	}

	@Override
	public List<Map<String, Object>> searchNoticeByTitle(String searchKeyword, int pageSize, int page) {
	      int offset = (page - 1) * pageSize;

	      Map<String, Object> params = new HashMap<>();
	      params.put("pageSize", pageSize);
	      params.put("offset", offset);
	      params.put("searchKeyword",searchKeyword);
		return mapper.boardList(params);
	}

	



}
