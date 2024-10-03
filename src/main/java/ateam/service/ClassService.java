package ateam.service;

import java.util.List;
import java.util.Map;

import ateam.dto.ClassDTO;

public interface ClassService {

	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 접속 교수의 강의 목록
	// 교수의 강의목록
	public List<ClassDTO> selectClassList(int id);

	
	
	// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@시간표
	public List<Map<String, Object>> selectSchedule(Map<String, Object> id);

	
	
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 강의 정보
	// 전체 강의 목록
	public List<Map<String, Object>> allClass(Map<String, Object> map);
	public int countAllClass(Map<String, Object> map);


	// 강의 정보
	public Map<String, Object> selectClass(int classCode);

	public List<Map<String, Object>> selectClassTime(int classCode);

	// 강의 정보 수정
	public int updateClassInfo(Map<String, Object> map);
	
	
	
	
	
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 성적 정보
	// 학생 성적 수정
	public int updateGrade(Map<String, Object> paramMap);

	// 강의를 듣는 학생의 성적 조회
	public List<Map<String, Object>> selectClassGrade(int no, int page, int pageSize);



	
	
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 학생 정보


	public int getTotalStudentsBySearchKeyword(int no, String searchType, String searchKeyword, String departmentCode);

	public List<Map<String, Object>> searchClassStudentByKeyword(int classCode, String searchType, String string,
			int page, int i, String departmentCode);


	public List<Map<String, Object>> searchStudentByKeyword(int classCode, String searchType, String string, int page,
			int i, String departmentCode);
	public List<Map<String, Object>> selectClassStudent(int classCode, int page, int i);


	List<Map<String, Object>> selectClassStudent(int no);

	
	
	
	// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 차트용
	public Map<String, Integer> totalScoreChart(int no);

	public Map<String, Integer> middleTestScoreChart(int no);

	public Map<String, Integer> finalTestScoreChart(int no);

	public Map<String, Integer> reportScoreChart(int no);

	// 차트 작성을 위한
	String getClassName(int no);

	int getTotalStudents(int no);
	
}
