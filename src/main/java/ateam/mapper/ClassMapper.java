package ateam.mapper;

import java.util.List;
import java.util.Map;

import ateam.dto.ClassDTO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface ClassMapper {
	
	public List<ClassDTO> selectClassList(int id);

	public List<Map<String, Object>> selectSchedule(Map<String, Object> id);

	public Map<String, Object> selectClass(int classCode);

	public List<Map<String, Object>> selectClassTime(int classCode);

	public List<Map<String, Object>> selectClassStudent(int no);

	public List<Map<String, Object>> allClass(Map map);

	public int updateGrade(Map<String, Object> paramMap);

	public int updateClassInfo(Map<String, Object> map);
	
	// 차트 작성을 위한
	public Map<String, Integer> totalScoreChart(int no);
	public Map<String, Integer> middleTestScoreChart(int no);
	public Map<String, Integer> finalTestScoreChart(int no);
	public Map<String, Integer> reportScoreChart(int no);
	
	public String getClassName(int no);

	public int getTotalStudents(int no);

	public List<Map<String, Object>> selectClassGrade(Map<String, Object> paramMap);

	public int getTotalStudentsBySearchKeyword(Map<String, Object> params);

	public List<Map<String, Object>> searchClassStudentByKeyword(Map<String, Object> param);

	public List<Map<String, Object>> selectClassStudent(Map<String, Object> paramMap);

	public List<Map<String, Object>> searchStudentByKeyword(Map<String, Object> param);

	public int countAllClass(Map<String, Object> map);

	public Map<String, Integer> getGradeStats(int no);


	
}
