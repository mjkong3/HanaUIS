package ateam.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface AdClassInfoMapper {

	List<Map<String, Object>> selectAdClsList(Map<String, Object> param);
	
	void deleteAdClsInfo(Map<String, Object> param);
	
	Map<String, Object> selectAdClsInfo(String clsCd);
	
	List<Map<String, Object>> selectProId(Map<String, Object>param);
	
	void insertAdClsInfo(Map<String, Object> param);
	
	void updateAdClsInfo(Map<String, Object> param);
}
