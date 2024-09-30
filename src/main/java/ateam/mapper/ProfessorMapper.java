package ateam.mapper;

import java.util.Map;

import ateam.dto.ProfessorDTO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface ProfessorMapper {
	//교수 로그인
	public ProfessorDTO login_check(ProfessorDTO professorDTO);

	public ProfessorDTO selectProfessor(int id);

	public int updatePhone(Map<String, Object> paramMap);

	public int updateEmail(Map<String, Object> paramMap);
	
	
}
