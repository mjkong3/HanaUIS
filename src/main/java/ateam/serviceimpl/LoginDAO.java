package ateam.serviceimpl;

import ateam.dto.ProfessorDTO;
import ateam.dto.StudentDTO;

public interface LoginDAO {
	
	// 학생 로그인
    public StudentDTO loginCheck(StudentDTO dto);
    
    // 교수 로그인
    public ProfessorDTO proLoginCheck(ProfessorDTO dto);
}