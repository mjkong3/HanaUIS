package ateam.service;

import java.util.List;
import java.util.Map;


public interface AdminUploadService {
	int insertBoard(Map<String, Object> param);

	int insertFile(Map<String, Object> param);
}
