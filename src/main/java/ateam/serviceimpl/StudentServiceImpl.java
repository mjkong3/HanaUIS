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

	// 학생 로그인 (이름 대신 StudentDTO 전체 반환)
    public StudentDTO loginCheck(StudentDTO dto, HttpSession session) {
        StudentDTO studentDTO = loginDao.loginCheck(dto);
        if (studentDTO != null) {
            session.setAttribute("studentId", dto.getStudentId());
        }
        return studentDTO;
    }

    //로그아웃
    public void logout(HttpSession session) {
        session.invalidate(); // 세션 초기화
    }

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


	@Override
	public List<Map<String, Object>> myGradeList(Map<String, Object> map) {
		return mapper.myGradeList(map);
	}
	
	@Override
	public List<Map<String, Object>> myTotalGradeList(int studentId) {
		List<Map<String, Object>> totalGrade = mapper.myTotalGradeList(studentId);
		return totalGrade;
	}
	
	
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

	@Override
	public int updatePhone(String studentId, String phone) {
	      Map<String, Object> map = new HashMap<>();
	      map.put("studentId", studentId);
	      map.put("phone", phone);
	      return mapper.updatePhone(map);		
	}

	@Override
	public int updateEmail(String studentId, String email) {
		Map<String, Object> map = new HashMap<>();
		map.put("studentId", studentId);
		map.put("email", email);
	      return mapper.updateEmail(map);		
	}

	@Override
	public String studentDepartment(int studentId) {
		return mapper.studentDepartment(studentId);
	}

	@Override
	public int countAllClass(Map<String, Object> map) {
		return mapper.countAllClass(map);
	}





}
