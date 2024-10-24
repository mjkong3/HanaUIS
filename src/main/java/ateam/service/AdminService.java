package ateam.service;

import java.util.List;
import java.util.Map;

public interface AdminService {
	
	
	Map<String, Object> selectLogin(Map<String, Object> param);
	
	List<Map<String, Object>> selectAdDept();

}
