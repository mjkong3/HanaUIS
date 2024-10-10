package ateam.service;

import java.util.List;
import java.util.Map;

public interface AdScoreService {

	List<Map<String, Object>> selectScDept();

	List<Map<String, Object>> searchScClass(Map<String, Object> map);

	List<Map<String, Object>> selectScStudent(Map<String, Object> map);

	void updateScore(List<Map<String, Object>> map);

}
