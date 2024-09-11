package ateam.serviceimpl;

import javax.inject.Inject;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;

import ateam.dto.StudentDTO;
import ateam.service.StudentService;



@Service("StudentService")
public class StudentServiceImpl implements StudentService {

	@Inject
	LoginDAO loginDao;

	// 학생 로그인 (이름 대신 StudentDTO 전체 반환)
    public StudentDTO loginCheck(StudentDTO dto, HttpSession session) {
        StudentDTO studentDTO = loginDao.loginCheck(dto);
        if (studentDTO != null) {
            session.setAttribute("studentId", dto.getStudentId());
        }
        return studentDTO;
    }

    public void logout(HttpSession session) {
        session.invalidate(); // 세션 초기화
    }
}
