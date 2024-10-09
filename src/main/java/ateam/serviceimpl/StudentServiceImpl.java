package ateam.serviceimpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ateam.dto.EnrollmentDTO;
import ateam.dto.StudentDTO;
import ateam.mapper.StudentMapper;
import ateam.service.StudentService;



@Service("StudentService")
public class StudentServiceImpl implements StudentService {

	@Inject
	LoginDAO loginDao;
	
	@Autowired
	public StudentMapper mapper;

	
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 로그인
	// 학생 로그인 (이름 대신 StudentDTO 전체 반환)
    public StudentDTO loginCheck(StudentDTO dto, HttpSession session) {
        StudentDTO studentDTO = loginDao.loginCheck(dto);
        if (studentDTO != null) {
            session.setAttribute("studentId", dto.getStudentId());
        }
        return studentDTO;
    }
	@Override
	public String studentDepartment(int studentId) {
		return mapper.studentDepartment(studentId);
	}

    //로그아웃
    public void logout(HttpSession session) {
        session.invalidate(); // 세션 초기화
    }
    
    
    
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 마이페이지 수정
	//연락처 수정
    @Override
    public int updatePhone(Map<String, Object> param) {
       return mapper.updatePhone(param);
    }

    //이메일 수정
    @Override
    public int updateEmail(Map<String, Object> param) {
       return mapper.updateEmail(param);
    }
    
	@Override
	public Map<String, Object> selectStudent(int studentId) {
		return mapper.selectStudent(studentId);
	}
    

    
    
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 휴복학 신청
	// 학생 휴학/복학 신청 & 정보 조회하기
	public StudentDTO stuStatus(int studentId) {
		// DB에서 학생 상태를 조회하여 반환
		return mapper.stuStatus(studentId);
	}
	
	//학생 휴학/복학 신청현황 리스트
	@Override
	public List<Map<String, Object>> statusList(int studentId) {
		return mapper.statusList(studentId);
	}

	 // 학색 휴학/복학 신규정보 기입
	@Override
	public void insertStatus(Map<String, Object> map) {
		mapper.insertStatus(map);
	}


	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 성적조회
	@Override
	public List<Map<String, Object>> myGradeList(Map<String, Object> map) {
		return mapper.myGradeList(map);
	}
	
	@Override
	public List<Map<String, Object>> myTotalGradeList(int studentId) {
		List<Map<String, Object>> totalGrade = mapper.myTotalGradeList(studentId);
		return totalGrade;
	}
	@Override
	public int countAllClass(Map<String, Object> map) {
		return mapper.countAllClass(map);
	}
	
	
	
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 수강신청
	// 수업신청 1.수강목록 조회
	@Override
	public List<Map<String, Object>> selectClass(int studentId) {
		return mapper.selectClass(studentId);
	}

	// 수강신청 2.신청
	@Override
	public void enrollClass(EnrollmentDTO enrollmentDTO) {
		mapper.enrollClass(enrollmentDTO);
	}


	// 수강신청 4.학과별 수강목록 조회
	@Override
	public List<Map<String, Object>> selectClasses(@Param("studentId") int studentId,
			@Param("departmentCode") int departmentCode) {
		return mapper.selectClasses(departmentCode, studentId);
	}

	// 수강신청 5. insert전 총 신청 학점
	@Override
	public int totalGrades(int studentId) {
		return mapper.totalGrades(studentId);
	}
	// 6.기존 수강신청 + 학과별 수강목록 조회
	   @Override
	   public List<Map<String, Object>> selectedClasses(@Param("studentId") int studentId,
	         @Param("departmentCode") int departmentCode) {
	      return mapper.selectedClasses(departmentCode, studentId);
	   }










    



}
