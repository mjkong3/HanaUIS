package ateam.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import ateam.dto.ProfessorDTO;

public interface AdProfessorService {
	
	List<Map<String, Object>> selectAdProList(Map<String, Object> param);
	
	void insertAdPro(Map<String, Object> param);
	
	void updateAdPro(Map<String, Object>param);
	
	Map<String, Object> selectAdProInfo(String ProId);
	
	void deleteAdPro(Map<String, Object> param);
	
	String dupCheckId(String ProId);
	
	String dupCheckEm(Map<String, Object>param);

	ProfessorDTO proLoginCheck(ProfessorDTO dto, HttpSession session);
	
	List<Map<String, Object>> checkProfessorExcel(List<Map<String, Object>> param);
	
	   void insertexcelPro(List<Map<String, Object>> param);
}
