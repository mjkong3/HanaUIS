package ateam.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import ateam.dto.EnrollmentDTO;
import ateam.dto.StudentDTO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface StudentMapper {

	// 로그인, 정보가져오기
	public StudentDTO login_check(StudentDTO studentDTO);
	// 학생학과 조회
	public String studentDepartment(int studentId);
	// 학생 휴학/복학 신청 & 정보 조회하기
	public StudentDTO stuStatus(int studentId);
	
	
	// 마이페이지 수정 (전화번호, 이메일)
	public int updatePhone(Map<String, Object> map);
	public int updateEmail(Map<String, Object> map);
	public Map<String, Object> selectStudent(int studentId);

	
	
	// 휴학, 복학 신청 페이지
	// 학생 휴학/복학 신청현황 리스트
	public List<Map<String, Object>> statusList(int studentId);
	// 학생 휴학/복학 신규정보 기입
	public void insertStatus(Map<String, Object> map);

	
	// 성적조회 페이지
	public List<Map<String, Object>> myGradeList(Map<String, Object> map);
	public List<Map<String, Object>> myTotalGradeList(int studentId);
	public Map<String, Object> myTotalAvgGrade(int studentId);
	public int countAllClass(Map<String, Object> map);

	
	
	// 수강신청 페이지
	// 수강신청 1.수강목록 조회
	public List<Map<String, Object>> selectClass(int studentId);
	// 수강신청 2.신청
	public void enrollClass(EnrollmentDTO enrollmentDTO);
	// 수강신청 3.학과별 수강목록 조회
	public List<Map<String, Object>> selectClasses(@Param("studentId") int studentId,
			@Param("departmentCode") int departmentCode);
	// 수강신청 4. insert전 총 신청 학점
	public int totalGrades(int studentId);
	// 수강신청 5.기존 수강신청 + 학과별 수강목록 조회
	public List<Map<String, Object>> selectedClasses(@Param("studentId") int studentId,
         @Param("departmentCode") int departmentCode);
	// 수강신청 6. 학년 보내주기
	public int stuWhatYear(int studentId);

}
