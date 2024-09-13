package ateam.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("AdStudentMapper")
public interface AdStudentMapper {
	
	List<Map<String, Object>> selectDepartment();
	
	List<Map<String, Object>> selectAdStudent(Map<String, Object> param);
	
	void insertAdStudent(Map<String, Object> param);
	
	Map<String, Object> selectAdStudentdtl(Map<String, Object> param);

}
