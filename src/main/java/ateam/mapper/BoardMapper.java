package ateam.mapper;

import java.util.List;
import java.util.Map;

import ateam.dto.BoardDTO;
import ateam.dto.FileDTO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("BoardMapper")
public interface BoardMapper {

	public List<BoardDTO> boardList(Map<String, Object> params);
	
	public BoardDTO selectBoard(int id);

	public int getBoardCount();
	
	public List<FileDTO> selectFile(String fileCode);
}
