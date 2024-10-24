package ateam.service;

import java.util.Map;

import javax.servlet.http.HttpSession;

import ateam.dto.ProfessorDTO;

public interface ProfessorService {
	
	////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 로그인 처리
	public ProfessorDTO proLoginCheck(ProfessorDTO dto, HttpSession session);
	
    public void logout(HttpSession session);
	
	public Map<String, Object> selectProfessor(int id);
	
	
	////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 마이페이지 수정
	public int updatePhone(Map<String, Object> param);
	
	public int updateEmail(Map<String, Object> param);
	
	

}
