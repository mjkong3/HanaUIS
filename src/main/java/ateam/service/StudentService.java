package ateam.service;

import javax.servlet.http.HttpSession;

import ateam.dto.StudentDTO;

public interface StudentService {
	
    public StudentDTO loginCheck(StudentDTO dto, HttpSession session);

    public void logout(HttpSession session);

}
