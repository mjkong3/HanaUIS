package ateam.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

 @Mapper("AdminBoardMapper") 
 public interface AdminBoardMapper {
	 
	 Map<String, Object> selectBoard (String param); 
	 
	 List<Map<String, Object>> selectBoardList(Map<String, Object> param);
 }
