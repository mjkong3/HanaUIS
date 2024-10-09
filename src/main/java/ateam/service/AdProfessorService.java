package ateam.service;

import java.util.List;
import java.util.Map;

public interface AdProfessorService {
	
	List<Map<String, Object>> selectAdProList(Map<String, Object> param);
	
	void insertAdPro(Map<String, Object> param);
	
	void updateAdPro(Map<String, Object>param);
	
	Map<String, Object> selectAdProInfo(String ProId);
	
	void deleteAdPro(Map<String, Object> param);
	
	String dupCheckId(String ProId);
	
	String dupCheckEm(String email);
}
