package ateam.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ateam.dto.BoardDTO;
import ateam.mapper.BoardMapper;
import ateam.service.BoardService;


@Service("BoardService")
public class BoardServiceImpl implements BoardService{

	@Autowired
	public BoardMapper mapper;
	
	@Override
	public List<BoardDTO> boardList() {
		return mapper.boardList();
	}

	@Override
	public BoardDTO selectBoard(int id) {
		return mapper.selectBoard(id);
	}

}
