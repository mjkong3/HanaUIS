package ateam.service;

import java.util.List;
import java.util.Map;

public interface AdminClassroomService {

	List<Map<String, Object>> SelectAdminClassroom();

	List<Map<String, Object>> SelectAdminClasstime(String param);

	List<Map<String, Object>> SelectAdminClasscourse(Map<String, Object> param);

	List<Map<String, Object>> SelectAdminClasstimeid(String param);

	void saveAdminClasscourse(List<Map<String, Object>> param);

	void deleteAdminClasscourse(List<Map<String, Object>> param);

	List<Map<String, Object>> SelectAdminclassyear();

	List<Map<String, Object>> SelectAdminclasssem();

	void saveAdminClassroom(Map<String, Object> param);

	void deleteAdminClassroom(Map<String, Object> param);
	

}
