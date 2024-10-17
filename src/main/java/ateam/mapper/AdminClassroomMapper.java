package ateam.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("AdminClassroomMapper")
public interface AdminClassroomMapper {
	
	List<Map<String, Object>> SelectAdminClassroom();

	List<Map<String, Object>> SelectAdminClasstime(String param);
	
	List<Map<String, Object>> SelectAdminClasscourse(Map<String, Object> param);

	List<Map<String, Object>> SelectAdminClasstimeid(String param);

	int SelectAdminclasstime(Map<String, Object> param);
	
	void updateAdminClasscourse(Map<String, Object> param);
	
	void insertAdminClasscourse(Map<String, Object> param);
	
	void updateAdminClasscourse2(Map<String, Object> param);
	
	void deleteAdminClasscourse(Map<String, Object> param);

	List<Map<String, Object>> SelectAdminclassyear();

	List<Map<String, Object>> SelectAdminclasssem();

	int checkAdminclassroom(Map<String, Object> param);
	
	void updateAdminclassroom(Map<String, Object> param);
	
	void insertAdminclassroom(Map<String, Object> param);

	void deleteAdminClassroom(Map<String, Object> param);

}
