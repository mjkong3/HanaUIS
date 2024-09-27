package ateam.service;

import java.util.List;
import java.util.Map;

public interface AdProfessorService {
	
	List<Map<String, Object>> selectAdProList(Map<String, Object> param);
	
	void saveAdPro(Map<String, Object> param);
	
	Map<String, Object> selectAdProInfo(String ProId);
	
	void deleteAdPro(Map<String, Object> param);
}
