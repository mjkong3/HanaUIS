package ateam.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.annotations.Param;

import ateam.dto.EnrollmentDTO;
import ateam.dto.StudentDTO;

public interface StudentService {
	
	
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 로그인
    public StudentDTO loginCheck(StudentDTO dto, HttpSession session);

	public String studentDepartment(int studentId);

    public void logout(HttpSession session);
    
    
    

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 성적조회
	public List<Map<String, Object>> myGradeList(Map<String, Object> map);
	
	public List<Map<String, Object>> myTotalGradeList(int studentId);
	
	public List<Map<String, Object>> selectClass(int studentId);
	
	public int totalGrades(int studentId);
	
	public int countAllClass(Map<String, Object> map);
	

	
	
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 수강신청
	public void enrollClass(EnrollmentDTO enrollmentDTO);

   public List<Map<String, Object>> selectClasses(@Param("studentId") int studentId, @Param("departmentCode") int departmentCode);
   // 6.기존 수강신청 + 학과별 수강목록 조회
   public List<Map<String, Object>> selectedClasses(@Param("studentId") int studentId,
         @Param("departmentCode") int departmentCode);
   
   
   
   
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 휴복학 
    // 학생 휴학/복학 신청 & 정보 조회하기
    public StudentDTO stuStatus(int studentId);
    
	//학생 휴학/복학 신청현황 리스트
	public List<Map<String, Object>> statusList(int studentId);

    // 학색 휴학/복학 신규정보 기입
	public void insertStatus(Map<String, Object> map);

	
	
	
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 마이페이지 수정
	public int updatePhone(Map<String, Object> param);
	public int updateEmail(Map<String, Object> param);

	public Map<String, Object> selectStudent(int studentId);

	







}
