package ateam.serviceimpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ateam.dto.ClassDTO;
import ateam.mapper.ClassMapper;
import ateam.service.ClassService;


@Service("ClassService")
public class ClassServiceImpl implements ClassService{

	@Autowired
	public ClassMapper mapper;
	
	@Override
	public List<ClassDTO> selectClassList(int id) {
		return mapper.selectClassList(id);
	}

	@Override
	public List<Map<String, Object>> professorClassTimeList(int id) {
		return mapper.professorClassTimeList(id);
	}

	@Override
	public List<Map<String, Object>> studentClassTimeList(int id) {
		return mapper.studentClassTimeList(id);
	}

	@Override
	public  Map<String, Object> selectClass(int classCode) {
		return mapper.selectClass(classCode);
	}

	@Override
	public List<Map<String, Object>> selectClassTime(int classCode) {
		return mapper.selectClassTime(classCode);
	}



	

}
