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
	public int getBoardCount() {
		return mapper.getBoardCount();
	}

	@Override
	public List<BoardDTO> boardList(int page, int pageSize) {
	      int offset = (page - 1) * pageSize;

	      Map<String, Object> params = new HashMap<>();
	      params.put("pageSize", pageSize);
	      params.put("offset", offset);
	      List<BoardDTO> board = mapper.boardList(params);
	      
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


}
