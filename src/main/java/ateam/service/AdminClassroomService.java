package ateam.service;

import java.util.List;
import java.util.Map;

public interface AdminClassroomService {

	List<Map<String, Object>> SelectAdminClassroom();

	List<Map<String, Object>> SelectAdminClasstime(String param);

	List<Map<String, Object>> SelectAdminClasscourse();

	List<Map<String, Object>> SelectAdminClasstimeid(String param);

	void saveAdminClasscourse(Map<String, Object> param);
	

}
