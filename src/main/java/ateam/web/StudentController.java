package ateam.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import ateam.dto.BoardDTO;
import ateam.dto.ClassDTO;
import ateam.dto.DepartmentDTO;
import ateam.dto.EnrollmentDTO;
import ateam.dto.ProfessorDTO;
import ateam.dto.StudentDTO;
import ateam.service.BoardService;
import ateam.service.ClassService;
import ateam.service.DepartmentService;
import ateam.service.MailSendService;
import ateam.service.StudentService;

@Controller
@RequestMapping(value = "/std")
public class StudentController {
	
	@Inject

	@Autowired
	private MailSendService mailService; // 메일 서비스
	@Autowired
	private StudentService studentService;
	@Autowired
	private ClassService classService;
	@Autowired
	private BoardService boardService;
	@Autowired
	private DepartmentService departmentService;

	
	
	
	// 공지사항 ################################################################################################## //
	@RequestMapping(value="/notice.do")
	public String noticeView(@RequestParam(value = "page", defaultValue = "1") int page, 
											@RequestParam(value ="searchKeyword", defaultValue = "ALL") String searchKeyword, 
											Model model, HttpSession session, HttpServletRequest request) {
		// 세션 만료시 로그인 페이지로 이동
		HttpSession sessionPage = request.getSession();
		StudentDTO studentTemp = (StudentDTO) sessionPage.getAttribute("student");
		if (studentTemp == null) {
			return "redirect:/login.do"; 
		}
		
		// 공지사항 총 게시물 수
		int totalCnt = boardService.getBoardCount(searchKeyword); 
		int pageSize = 10;
		PageHandler pageHandler = new PageHandler(totalCnt, pageSize, page);
		model.addAttribute("pageHandler", pageHandler);
		
		// 페이징 처리된 게시물 목록 가져오기
		List<Map<String, Object>> board = boardService.boardList(page, pageSize);

		model.addAttribute("notice", board);
		
		return "hana/notice";
	}

	// 공지사항 검색
    @RequestMapping(value = "/noticeSearch.do", method = RequestMethod.GET)
    public String searchNotice(@RequestParam("searchKeyword") String searchKeyword,
					    	   @RequestParam(value = "page", defaultValue = "1") int page,
					    	   Model model,HttpSession session) {
    	
		// 페이징 처리
		int totalCnt = boardService.getBoardCount(searchKeyword); // 공지사항 총 개수 가져오는 메서드 필요
		int pageSize = 10;
		
		PageHandler pageHandler = new PageHandler(totalCnt, pageSize, page);
		model.addAttribute("pageHandler", pageHandler);
        List<Map<String, Object>> noticeList = boardService.searchNoticeByTitle(searchKeyword, pageSize, page);
        model.addAttribute("notice", noticeList);
        
        return "hana/notice";
    }
	
    // 공지사항 상세보기
	@RequestMapping(value="/noticeDetail.do")
	public String noticeDetail(@RequestParam("boardNo") int no, Model model, HttpSession session) {	
		
		Map<String, Object> selectBoard = boardService.selectBoardAndFile(no);

		BoardDTO board = (BoardDTO) selectBoard.get("board");
		Object fileList = selectBoard.get("fileList");

		model.addAttribute("board", board);
		model.addAttribute("boardFile", fileList);

		return "hana/noticeDetail";
	}
	
	
	
	
	// 마이페이지 ################################################################################################## //
	@RequestMapping(value = "/myPage.do")
	public String myPageView(HttpSession session, Model model) {
		StudentDTO student = (StudentDTO) session.getAttribute("student");
		// 세션만료시 로그인 페이지로 이동
		if (student == null) {
			return "redirect:/login.do"; 
		}
		String departmentName = studentService.studentDepartment(student.getStudentId());
		
		int studentId= student.getStudentId();
		//session.getAttribute("studentId");
		Map<String, Object> studentDetail = studentService.selectStudent(studentId);
		
		model.addAttribute("departmentName", departmentName);
		model.addAttribute("studentDetail", studentDetail);
		
		return "hana/myPage";
	}
	
	// 연락처 수정
	@RequestMapping("/updatePhone.do")
	public String updatePhone(@RequestParam Map<String, Object> param, RedirectAttributes redirectAttributes) {
		studentService.updatePhone(param);
		redirectAttributes.addFlashAttribute("updateStatus", "success");

		return "redirect:myPage.do";
	}

	// 이메일을 수정
	@RequestMapping("/updateEmail.do")
	public String updateEmail(@RequestParam Map<String, Object> param, RedirectAttributes redirectAttributes) {
		int result = studentService.updateEmail(param);
		
		if(result != 1) {
			redirectAttributes.addFlashAttribute("updateStatus", "false");
		}else {
			redirectAttributes.addFlashAttribute("updateStatus", "success");
		}

		return "redirect:myPage.do";
	}

	


	// 휴학복학신청 ################################################################################################## //
	@RequestMapping(value = "/leave.do")
	public String leaveView(StudentDTO dto, Model model, HttpServletRequest request) {
		// 세션 불러옴
		HttpSession session = request.getSession();
		StudentDTO studentTemp = (StudentDTO) session.getAttribute("student");
		// 세션 만료시 로그인 페이지로 이동
		if (studentTemp == null) {
			return "redirect:/login.do"; 
		}
		
		// 학생 정보 가져옴
		StudentDTO student = studentService.stuStatus(studentTemp.getStudentId());
		List<Map<String, Object>> statusList = studentService.statusList(studentTemp.getStudentId());

		model.addAttribute("student", student);
		model.addAttribute("statusList", statusList);
		
		return "hana/student/takeTime";
	}

	// 휴학&재학 처리
	@RequestMapping(value = "/leaveReturn.do", method = RequestMethod.POST)
	public String studentStatus(@RequestParam Map<String, Object> map, RedirectAttributes redirectAttributes) {

		studentService.insertStatus(map); // status_date 테이블에 insert
		
		redirectAttributes.addFlashAttribute("leaveComplete", "success");
		
		return "redirect:/std/leave.do";
	}

	
	
	
	// 강의정보 보기 ################################################################################################## //
	@RequestMapping(value = "/classList.do")
	public String classListView(@RequestParam Map<String, Object> map, Model model) {

		// 페이지 번호와 페이지 크기 기본 값 설정
		int page = map.get("page") != null ? Integer.parseInt((String) map.get("page")) : 1;
		int pageSize = 10; // 페이지당 표시할 항목 수
		// offset 계산
		int offset = (page - 1) * pageSize;
		map.put("offset", offset);
		map.put("pageSize", pageSize);

		// 학과 목록 조회
		List<DepartmentDTO> departmentList = departmentService.allDepartment();
		model.addAttribute("department", departmentList);

		// 강의 목록 조회
		List<Map<String, Object>> classList = classService.allClass(map);
		model.addAttribute("classList", classList);

		// 총 강의 수 조회 및 페이지 처리
		int totalClassCount = classService.countAllClass(map);
		PageHandler pageHandler = new PageHandler(totalClassCount, pageSize, page);
		model.addAttribute("pageHandler", pageHandler);

		return "hana/student/classList";
	}

	//강의 정보 조회
	@RequestMapping(value="/classInfo.do")
	public String classInfoView(@RequestParam("selectedNo") int no, Model model, HttpSession session) {
		
		StudentDTO student = (StudentDTO) session.getAttribute("student");
		// 세션만료시 로그인 페이지로 이동
		if (student == null) {
			return "redirect:/login.do"; 
		}
		List<ClassDTO> classList = classService.selectClassList(student.getStudentId());
		model.addAttribute("professorClass", classList);
		
		Map<String, Object> selectClass = classService.selectClass(no);
		model.addAttribute("classInfo", selectClass);
		
        List<Map<String, Object>> timetable = classService.selectClassTime(no);
        model.addAttribute("timetable", timetable);
		 
		return "hana/classInfo";
	}
	
	
	
	
	// 수강신청 ################################################################################################## //
	@RequestMapping(value = "/signForClass.do")
	public String signForClassView(@RequestParam(defaultValue = "0") int departmentCode, Model model, HttpServletRequest request) {
		HttpSession session = request.getSession();
		StudentDTO student = (StudentDTO) session.getAttribute("student");
		if (student == null) {
			// 세션이 만료된 경우 로그인 페이지로 리다이렉트
			return "redirect:/login.do";
		}
		// 선택된 학과 코드 세션에 저장 (select 유지)
		session.setAttribute("selectedDepartment", departmentCode);
		// studentId 세션에 저장
		session.setAttribute("studentId", student.getStudentId());
		// 학과 조회
		List<DepartmentDTO> department = departmentService.allDepartment();
		// 전체 or 해당 학과
		List<Map<String, Object>> classItem;
		
		if (departmentCode == 0) {
			classItem = studentService.selectClass(student.getStudentId());
		} else {
			classItem = studentService.selectClasses(departmentCode, student.getStudentId());
		}
		
		// 이전에 신청한 총 학점
		int totalGrades = studentService.totalGrades(student.getStudentId());
		
		// 신청해둔 수강목록 리스트
		List<Map<String, Object>> selectedClass = studentService.selectedClasses(departmentCode,
				student.getStudentId());
		model.addAttribute("classItem", classItem); // 조회 결과를 모델에 추가
		model.addAttribute("department", department); // 조회 결과를 모델에 추가
		model.addAttribute("totalGrades", totalGrades); // 누적학점 보내기
		model.addAttribute("selectedClass", selectedClass); // 신청했던 수강목록 리스트 보내기
		model.addAttribute("studentYear", studentService.stuWhatYear(student.getStudentId())); // 학년 보내기

		return "hana/student/signForClass";
	}

	// 수강 신청 적용 // 데이터 받을 땐 String 자료형으로 변환되어서 옴
	@PostMapping("/enrollClass.do")
	public String insertClass(@RequestParam("studentId") String studentId, @RequestParam("studentYear") String studentYear,
			@RequestParam("chk") List<String> classCodes, RedirectAttributes redirectAttributes) {
		// 각 수업에 대해 DB에 저장
		for (String classCode : classCodes) {
			EnrollmentDTO enrollmentDTO = new EnrollmentDTO();
			enrollmentDTO.setStudentId(Integer.parseInt(studentId)); // String -> int 변환
			enrollmentDTO.setStudentYear(Integer.parseInt(studentYear)); // String -> int 변환
			enrollmentDTO.setClassCode(Integer.parseInt(classCode)); // String -> int 변환
			studentService.enrollClass(enrollmentDTO); // 서비스 호출
		}
		redirectAttributes.addFlashAttribute("signComplete", "success");
		// 수강 신청 후 수강 목록 페이지로 리다이렉트
		return "redirect:/std/signForClass.do";
	}
			
			
	
	
	// 성적조회 하기 ################################################################################################## //
	@RequestMapping(value = "/myGrade.do")
	public String myGradeView(@RequestParam Map<String, Object> param, HttpSession session, Model model) {
		Map<String, Object> map = new HashMap<>();
		StudentDTO student = (StudentDTO) session.getAttribute("student");
		// 세션만료시 로그인 페이지로 이동
		if (student == null) {
			return "redirect:/login.do"; 
		}
		map.put("studentId", student.getStudentId());

		// yearSemester 파라미터 처리
		String yearSemester = (String) param.getOrDefault("yearSemester", "0");
		if (!yearSemester.equals("0")) {
			String[] yearSemesterArr = yearSemester.split("-");
			int year = Integer.parseInt(yearSemesterArr[0]);
			int semester = Integer.parseInt(yearSemesterArr[1]);
			map.put("year", year);
			map.put("semester", semester);
			model.addAttribute("selectedYear", year);
			model.addAttribute("selectedSemester", semester);
		}
		model.addAttribute("yearSemester", yearSemester);

		
		// 페이징 작업
		int page = param.get("page") != null ? Integer.parseInt((String) param.get("page")) : 1;

		int pageSize = 5; // 페이지당 표시할 항목 수
		int offset = (page - 1) * pageSize;
		map.put("offset", offset);
		map.put("pageSize", pageSize);

		// 성적 조회 로직
		List<Map<String, Object>> gradeList = studentService.myGradeList(map);
		model.addAttribute("grade", gradeList);

		List<Map<String, Object>> totalGradeList = studentService.myTotalGradeList(student.getStudentId());
		model.addAttribute("totalGrade", totalGradeList);

		Map<String, Object> totalAvgGrade = studentService.myTotalAvgGrade(student.getStudentId());
		model.addAttribute("totalAvgGrade", totalAvgGrade);
		
		int totalClassCount = studentService.countAllClass(map);
		PageHandler pageHandler = new PageHandler(totalClassCount, pageSize, page);
		model.addAttribute("pageHandler", pageHandler);

		return "hana/student/myGrade";
	}
	
	
	
	
	// 시간표 보기 ################################################################################################## //
	@RequestMapping(value = "/schedule.do")
	public String scheduleView(Model model, HttpSession session) {
	    StudentDTO student = (StudentDTO) session.getAttribute("student");
	    Map<String, Object> map = new HashMap<>();
	    // 세션 만료시 로그인 페이지로 이동
 		if (student == null) {
 			return "redirect:/login.do"; 
 		}
	    map.put("studentId", student.getStudentId());
	    
		// 시간표 조회
		List<Map<String, Object>> timetable = classService.selectSchedule(map);

		// 데이터를 JSP로 전달
		model.addAttribute("timetable", timetable);
		return "hana/schedule";
	}

	
	
	
	// 로그인 기능 ################################################################################################## //
	// 메일 보내기 + 로그인
	@RequestMapping(value = "/sign.do", method = RequestMethod.POST)
	public ModelAndView loginView(@RequestParam("id") int studentId, @RequestParam("password") String password,
										HttpServletRequest request, StudentDTO dto) {
		HttpSession session = request.getSession();
		session.invalidate();
		ModelAndView view = new ModelAndView();

		// 얻은 값 설정
		dto.setStudentId(studentId);
		dto.setPassword(password);

		// 로그인 체크
		StudentDTO studentDTO = studentService.loginCheck(dto, request.getSession());

		if (studentDTO != null) {
			// 로그인 성공 시 처리
			session = request.getSession();
			session.setAttribute("student", studentDTO); // 임시 사용자 정보 세션 저장
			session.setMaxInactiveInterval(1800); // 로그인 세션 만료 시간 = 30분

			// 이메일로 인증번호 발송
			String verificationCode = mailService.joinEmail(studentDTO.getEmail());
			session.setAttribute("verificationCode", verificationCode); // 인증코드 세션 저장

			// 응답 데이터 설정
			view.addObject("result", "success");
			
		} 
		else {
			// 로그인 실패 시 처리
			view.addObject("result", "failure");
		}
		// 뷰 설정 (JSON 응답을 위한 jsonView 사용)
		view.setViewName("jsonView");
		return view;
	}
	
	// 인증번호 확인 및 로그인 완료
		@RequestMapping(value = "/signIn.do", method = RequestMethod.POST)
		public ModelAndView verifyCode(@RequestParam String inputCode, HttpSession session) {
			ModelAndView view = new ModelAndView();

			// 세션에서 저장된 인증번호를 가져옴
			String savedCode = (String) session.getAttribute("verificationCode");

			if (inputCode.equals(savedCode)) {
				
				session.removeAttribute("verificationCode"); // 인증코드 삭제

				// 성공 응답 데이터 추가
				view.addObject("result", "success");
				System.out.print("로그인 성공!!!");

			} else {
				// 실패 응답 데이터 추가
				view.addObject("result", "failure");
				view.addObject("message", "인증번호가 일치하지 않습니다.");
			}

			// JSON 응답을 위한 jsonView 설정
			view.setViewName("jsonView");
			return view;
		}
}
