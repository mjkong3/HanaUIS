package ateam.mapper;

import ateam.dto.StudentDTO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface StudentMapper {

	public StudentDTO login_check(StudentDTO studentDTO);

}
