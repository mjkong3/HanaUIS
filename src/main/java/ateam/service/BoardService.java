package ateam.service;

import java.util.List;
import java.util.Map;

import ateam.dto.BoardDTO;
import ateam.dto.FileDTO;


public interface BoardService {

	public List<Map<String, Object>> boardList(int page, int pageSize);
	
	public int getBoardCount(String searchKeyword);
	
	//공지사항 가져오기
	public Map<String, Object> selectBoardAndFile( int no);


	public List<Map<String, Object>> searchNoticeByTitle(String searchKeyword, int pageSize, int page);



	

}
