package ateam.mapper;

import java.util.List;
import java.util.Map;

import ateam.dto.DepartmentDTO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface DepartmentMapper {

	public List<DepartmentDTO> allDepartment();
}
