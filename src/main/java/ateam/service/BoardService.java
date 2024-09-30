package ateam.service;

import java.util.List;
import java.util.Map;

import ateam.dto.BoardDTO;
import ateam.dto.FileDTO;


public interface BoardService {

	public List<BoardDTO> boardList(int page, int pageSize);
	

	public int getBoardCount();
	
	//공지사항 가져오기
	public Map<String, Object> selectBoardAndFile( int no);
	

}
