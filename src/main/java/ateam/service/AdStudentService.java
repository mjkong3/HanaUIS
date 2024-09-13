package ateam.service;

import java.util.List;
import java.util.Map;

public interface AdStudentService {
	
	List<Map<String, Object>> selectDepartment();

	List<Map<String, Object>> selectAdStudent(Map<String, Object> param);

	void saveAdStudent(Map<String, Object> param);

	Map<String, Object> selectAdStudentdtl(Map<String, Object> param);

}
