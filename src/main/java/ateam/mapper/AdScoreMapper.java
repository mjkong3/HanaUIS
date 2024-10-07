package ateam.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("AdScoreMapper")
public interface AdScoreMapper {

	List<Map<String, Object>> selectScDept();

	List<Map<String, Object>> searchScClass(Map<String, Object> map);

	List<Map<String, Object>> selectScStudent(Map<String, Object> map);

	void updateScore(Map<String, Object> param);

}
