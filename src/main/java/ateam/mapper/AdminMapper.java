package ateam.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("AdminMapper")
public interface AdminMapper {

	Map<String, Object> selectLogin(Map<String, Object> param);
	
	List<Map<String, Object>> selectAdDept();
}
