package ateam.mapper;

import java.util.List;
import java.util.Map;

import ateam.dto.ProfessorDTO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface AdProfessorMapper {
	
	List<Map<String, Object>> selectAdProList(Map<String, Object> param);
	
	void insertAdPro(Map<String, Object> param);
	
	int dupCheckId(String ProId);
	
	int dupCheckEm(Map<String, Object> param);
	
	void updateAdPro(Map<String, Object> param);
	
	Map<String, Object> selectAdProInfo(String ProId);
	
	void deleteAdPro(Map<String, Object> param);

	ProfessorDTO proLoginCheck(ProfessorDTO dto);
	
	List<Map<String, Object>> checkProfessorExcel(List<Map<String, Object>> param);
	
	void insertexcelPro(Map<String, Object>param);

	
}
