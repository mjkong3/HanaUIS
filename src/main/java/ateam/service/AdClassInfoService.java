package ateam.service;

import java.util.List;
import java.util.Map;

public interface AdClassInfoService {

	List<Map<String, Object>> selectAdClsList(Map<String, Object> param);
	
	void deleteAdClsInfo(Map<String, Object> param);
	
	Map<String, Object> selectAdClsInfo(String clsCd);
	
	List<Map<String, Object>> selectProId(Map<String, Object>param);
	
	void insertAdClsInfo(Map<String, Object> param);
	
	void updateAdClsInfo(Map<String, Object> param);
}
