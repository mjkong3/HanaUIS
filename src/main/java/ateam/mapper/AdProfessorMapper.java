package ateam.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface AdProfessorMapper {
	
	List<Map<String, Object>> selectAdProList(Map<String, Object> param);
	
	int checkAdPro(Map<String, Object> param);
	
	void insertAdPro(Map<String, Object> param);
	
	int dupCheckId(Map<String, Object> param);
	
	int dupCheckEm(Map<String, Object> param);
	
	void updateAdPro(Map<String, Object> param);
	
	Map<String, Object> selectAdProInfo(String ProId);
	
	void deleteAdPro(Map<String, Object> param);

	
}
