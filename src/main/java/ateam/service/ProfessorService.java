package ateam.service;

import javax.servlet.http.HttpSession;

import ateam.dto.ProfessorDTO;

public interface ProfessorService {
	
	//로그인 처리
	public ProfessorDTO proLoginCheck(ProfessorDTO dto, HttpSession session);
    public void logout(HttpSession session);
	
	public ProfessorDTO selectProfessor(int id);
	
	
	//마이페이지 수정
	public int updatePhone(String professorId, String phone);
	public int updateEmail(String professorId, String email);
	
	

}
