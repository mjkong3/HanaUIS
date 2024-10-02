package ateam.mapper;

import java.util.List;
import java.util.Map;

import ateam.dto.ClassDTO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface ClassMapper {
	
	
	// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 접속 교수의 강의 목록
	public List<ClassDTO> selectClassList(int id);

	
	
	
	// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 시간표
	public List<Map<String, Object>> selectSchedule(Map<String, Object> id);

	
	
	
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 강의 정보
	
	//모든 강의
	public List<Map<String, Object>> allClass(Map map);
	public int countAllClass(Map<String, Object> map);
	

	
	//강의 정보
	public Map<String, Object> selectClass(int classCode);

	//강의의 강의 시간
	public List<Map<String, Object>> selectClassTime(int classCode);

	//강의 정보를 수정
	public int updateClassInfo(Map<String, Object> map);
	
	
	
	
	
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 학생정보
	//강의를 듣는 학생 정보
	public List<Map<String, Object>> selectClassStudent(Map<String, Object> paramMap);

	public List<Map<String, Object>> selectClassStudent(int no);

	public int getTotalStudentsBySearchKeyword(Map<String, Object> params);
	public List<Map<String, Object>> searchClassStudentByKeyword(Map<String, Object> param);
	public List<Map<String, Object>> searchStudentByKeyword(Map<String, Object> param);


	

	
	
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 성적 정보
	//강의를 듣는 학생의 성적 정보
	public List<Map<String, Object>> selectClassGrade(Map<String, Object> paramMap);
	//학생 성적 수정
	public int updateGrade(Map<String, Object> paramMap);







	
	// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 차트 작성을 위한
	public Map<String, Integer> totalScoreChart(int no);
	public Map<String, Integer> middleTestScoreChart(int no);
	public Map<String, Integer> finalTestScoreChart(int no);
	public Map<String, Integer> reportScoreChart(int no);

	//강의를 듣는 학생 수 
	public int getTotalStudents(int no);
	//강의명 
	public String getClassName(int no);
	











	
}
