package ateam.service;

import java.util.List;
import java.util.Map;

public interface AdScoreChartService {

	List<Map<String, Object>> selectAdClass(Map<String, Object> param);
	
	List<Map<String, Object>> selectAdScoreChart(Map<String, Object> param);
}
