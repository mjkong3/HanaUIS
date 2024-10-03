package ateam.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("AdStudentStatusMapper")
public interface AdStudentStatusMapper {

	List<Map<String, Object>> statusApprovedList(Map<String, Object> param);

	void statusApprovedUpdate(Map<String, Object> param);

	void statusApprovedInsert(Map<String, Object> param);

	Map<String, Object> statusDetail(String statusCode);


}
