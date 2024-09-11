package ateam.serviceimpl;

import javax.inject.Inject;
import org.springframework.stereotype.Repository;

import ateam.dto.ProfessorDTO;
import ateam.dto.StudentDTO;
import ateam.mapper.ProfessorMapper;
import ateam.mapper.StudentMapper;


@Repository
public class LoginDAOImpl implements LoginDAO {

	@Inject
    private StudentMapper studentMapper;
	
	@Inject
    private ProfessorMapper professorMapper;

	// 학생 로그인
    @Override
    public StudentDTO loginCheck(StudentDTO dto) {
        // 매퍼 인터페이스를 사용해 로그인 체크
        return studentMapper.login_check(dto);
    }

    // 교수 로그인
	@Override
	public ProfessorDTO proLoginCheck(ProfessorDTO dto) {
		// 매퍼 인터페이스를 사용해 로그인 체크
        return professorMapper.login_check(dto);
	}
}
