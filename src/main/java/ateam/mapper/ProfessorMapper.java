package ateam.mapper;

import java.util.Map;

import ateam.dto.ProfessorDTO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface ProfessorMapper {
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 로그인
	public ProfessorDTO login_check(ProfessorDTO professorDTO);
	public Map<String, Object> selectProfessor(int id);

	
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 마이페이지
	//연락처 수정
	public int updatePhone(Map<String, Object> paramMap);

	//이메일 수정
	public int updateEmail(Map<String, Object> paramMap);

	
	
}
