package ateam.serviceimpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ateam.dto.DepartmentDTO;
import ateam.mapper.DepartmentMapper;
import ateam.service.DepartmentService;

@Service("DepartmentService")
public class DepartmentServiceImpl implements DepartmentService{

	@Autowired
	private DepartmentMapper mapper;
	
	@Override
	public List<DepartmentDTO> allDepartment() {
		return mapper.allDepartment();
	}

}
