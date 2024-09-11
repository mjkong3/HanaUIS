package ateam.mapper;

import java.util.List;
import java.util.Map;

import ateam.dto.ClassDTO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface ClassMapper {
	
	public List<ClassDTO> selectClassList(int id);
	
	public List<Map<String, Object>> professorClassTimeList(int id);
	
	public List<Map<String, Object>> studentClassTimeList(int id);
	
	public Map<String, Object> selectClass(int classCode);
	public List<Map<String, Object>> selectClassTime(int classCode);

	
}
