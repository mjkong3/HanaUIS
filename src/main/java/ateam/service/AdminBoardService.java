package ateam.service;

import java.util.List;
import java.util.Map;

public interface AdminBoardService {
	
	Map<String, Object> selectBoard (String param);

	List<Map<String, Object>> selectBoardList(Map<String, Object> param);
	
}
