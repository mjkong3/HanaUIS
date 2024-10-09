package ateam.service;

import java.util.List;
import java.util.Map;


public interface AdStudentStatusService {

	public List<Map<String, Object>> statusApprovedList(Map<String, Object> param);

	public void statusApprovedUpdate(Map<String, Object> param);
	
	public void statusApprovedInsert(Map<String, Object> param);

	public Map<String, Object> statusDetail(String statusCode);

	public void statusDelete(String statusCode);

	public Map<String, Object> studentInfo(String studentId);


}
