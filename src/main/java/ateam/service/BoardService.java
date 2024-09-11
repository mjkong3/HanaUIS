package ateam.service;

import java.util.List;
import ateam.dto.BoardDTO;


public interface BoardService {

	public List<BoardDTO> boardList();
	
	public BoardDTO selectBoard(int id);

}
