package ateam.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface AdScoreChartMapper {

	List<Map<String, Object>> selectAdClass(Map<String, Object> param);
	
	List<Map<String, Object>> selectAdScoreChart(Map<String, Object> param);
}
