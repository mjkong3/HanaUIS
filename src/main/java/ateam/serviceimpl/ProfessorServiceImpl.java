package ateam.serviceimpl;

import javax.inject.Inject;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ateam.dto.ProfessorDTO;
import ateam.mapper.ProfessorMapper;
import ateam.service.ProfessorService;

@Service("ProfessorService")
public class ProfessorServiceImpl implements ProfessorService{

	@Autowired
	public ProfessorMapper mapper;
	@Inject
	LoginDAO loginDao;
	
	// 학생 로그인 (이름 대신 StudentDTO 전체 반환)
    @Override
    public ProfessorDTO proLoginCheck(ProfessorDTO dto, HttpSession session) {
    	ProfessorDTO professorDTO = loginDao.proLoginCheck(dto);
        if (professorDTO != null) {
            session.setAttribute("professorId", dto.getProfessorId());
        }
        return professorDTO;
    }

    @Override
    public void logout(HttpSession session) {
        session.invalidate(); // 세션 초기화
    }
    
	
	@Override
	public ProfessorDTO selectProfessor(int id) {
		return mapper.selectProfessor(id);
	}

}
