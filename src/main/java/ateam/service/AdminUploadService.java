package ateam.service;

import java.util.List;
import java.util.Map;


public interface AdminUploadService {
	int insertBoard(Map<String, Object> param);

	int insertFile(Map<String, Object> param);

	void updateBoard(Map<String, Object> param);

	void updateFile(Map<String, Object> param);

	void deleteBoard(Map<String, Object> param);
	
}
