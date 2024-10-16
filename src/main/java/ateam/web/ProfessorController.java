package ateam.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import ateam.dto.BoardDTO;
import ateam.dto.ClassDTO;
import ateam.dto.DepartmentDTO;
import ateam.dto.ProfessorDTO;
import ateam.dto.StudentDTO;
import ateam.service.BoardService;
import ateam.service.ClassService;
import ateam.service.DepartmentService;
import ateam.service.MailSendService;
import ateam.service.ProfessorService;

@Controller
@RequestMapping(value = "/pfs")
public class ProfessorController {

	@Inject

	@Autowired
	private MailSendService mailService; // 메일 서비스
	@Autowired
	private BoardService boardService;
	@Autowired
	public ProfessorService professorService;
	@Autowired
	public ClassService classService;
	@Autowired
	private DepartmentService departmentService;

	
	
	
	// 공지사항 ################################################################################################## //
	@RequestMapping(value = "/notice.do")
	public String noticeView(@RequestParam(value = "page", defaultValue = "1") int page,
							 @RequestParam(value ="searchKeyword", defaultValue = "ALL") String searchKeyword,
							 Model model, HttpSession session, HttpServletRequest request) {

		// 교수, 교수 강의 정보 가져오기
		ProfessorDTO professor = (ProfessorDTO) session.getAttribute("professor");
		// 세션 만료시 로그인 페이지로 이동
		if (professor == null) {
			return "redirect:/login.do"; 
		}
	
		List<ClassDTO> classList = classService.selectClassList(professor.getProfessorId());
		model.addAttribute("professorClass", classList);

		// 페이징 처리
		int totalCnt = boardService.getBoardCount(searchKeyword); // 공지사항 총 개수 가져오는 메서드 필요
		int pageSize = 10;
		PageHandler pageHandler = new PageHandler(totalCnt, pageSize, page);
		model.addAttribute("pageHandler", pageHandler);
		List<Map<String, Object>> board = boardService.boardList(page, pageSize);

		model.addAttribute("notice", board);

		return "hana/notice";
	}
	
	// 공지사항 검색
    @RequestMapping(value = "/noticeSearch.do", method = RequestMethod.GET)
    public String searchNotice(@RequestParam("searchKeyword") String searchKeyword,
					    	   @RequestParam(value = "page", defaultValue = "1") int page,
					    	   Model model,HttpSession session) {
    	
		// 교수, 교수 강의 정보 가져오기
		ProfessorDTO professor = (ProfessorDTO) session.getAttribute("professor");
		List<ClassDTO> classList = classService.selectClassList(professor.getProfessorId());
		model.addAttribute("professorClass", classList);
		
		// 페이징 처리
		int totalCnt = boardService.getBoardCount(searchKeyword); // 공지사항 총 개수 가져오는 메서드 필요
		int pageSize = 10;
		
		PageHandler pageHandler = new PageHandler(totalCnt, pageSize, page);
		model.addAttribute("pageHandler", pageHandler);
        List<Map<String, Object>> noticeList = boardService.searchNoticeByTitle(searchKeyword, pageSize, page);
        model.addAttribute("notice", noticeList);
        
        return "hana/notice";
    }

	// 공지사항 상세 페이지
	@RequestMapping(value = "/noticeDetail.do")
	public String noticeDetail(@RequestParam("boardNo") int no, Model model, HttpSession session) {

		ProfessorDTO professor = (ProfessorDTO) session.getAttribute("professor");
		// 세션 만료시 로그인 페이지로 이동
		if (professor == null) {
			return "redirect:/login.do"; 
		}
		List<ClassDTO> classList = classService.selectClassList(professor.getProfessorId());
		model.addAttribute("professorClass", classList);

		Map<String, Object> selectBoard = boardService.selectBoardAndFile(no);

		BoardDTO board = (BoardDTO) selectBoard.get("board");
		Object fileList = selectBoard.get("fileList");

		model.addAttribute("board", board);
		model.addAttribute("boardFile", fileList);

		return "hana/noticeDetail";
	}

	
	

	// 마이페이지 ################################################################################################## //
	@RequestMapping(value = "/myPage.do")
	public String mainView(HttpSession session, Model model) {

		ProfessorDTO professor = (ProfessorDTO) session.getAttribute("professor");
		// 세션 만료시 로그인 페이지로 이동
		if (professor == null) {
			return "redirect:/login.do"; 
		}
		List<ClassDTO> classList = classService.selectClassList(professor.getProfessorId());
		model.addAttribute("professorClass", classList);

		int professorId = (int)session.getAttribute("professorId");
		System.out.println(professorId);
		Map<String, Object> professorDetail = professorService.selectProfessor(professorId);
		model.addAttribute("professor", professor);
		model.addAttribute("professorDetail", professorDetail);

		return "hana/myPage";
	}

	// 연락처 수정
	@RequestMapping("/updatePhone.do")
	public String updatePhone(@RequestParam Map<String, Object> param, HttpSession session, RedirectAttributes redirectAttributes) {
		
		ProfessorDTO professor = (ProfessorDTO) session.getAttribute("professor");
		param.put("professorId", professor.getProfessorId());
		
		professorService.updatePhone(param);
		redirectAttributes.addFlashAttribute("updateStatus", "success");

		return "redirect:myPage.do";
	}

	// 이메일을 수정
	@RequestMapping("/updateEmail.do")
	public String updateEmail(@RequestParam Map<String, Object> param, HttpSession session, RedirectAttributes redirectAttributes) {

		ProfessorDTO professor = (ProfessorDTO) session.getAttribute("professor");
		param.put("professorId", professor.getProfessorId());
		
		professorService.updateEmail(param);
		redirectAttributes.addFlashAttribute("updateStatus", "success");

		return "redirect:myPage.do";
	}

	
	
	
	// 강의정보 ################################################################################################## //
	@RequestMapping(value = "/classInfo.do")
	public String classInfoView(@RequestParam("selectedNo") int no, Model model, HttpServletRequest request) {
		HttpSession session = request.getSession();
		ProfessorDTO professor = (ProfessorDTO) session.getAttribute("professor");
		// 세션 만료시 로그인 페이지로 이동
		if (professor == null) {
			return "redirect:/login.do"; 
		}
		List<ClassDTO> classList = classService.selectClassList(professor.getProfessorId());
		model.addAttribute("professorClass", classList);

		Map<String, Object> selectClass = classService.selectClass(no);
		model.addAttribute("classInfo", selectClass);

		List<Map<String, Object>> timetable = classService.selectClassTime(no);
		model.addAttribute("timetable", timetable);

		return "hana/classInfo";
	}

	// 강의 정보 수정
	@ResponseBody
	@RequestMapping(value = "/updateClassInfo.do", method = RequestMethod.POST)
	public String updateClassInfo(@RequestParam Map<String, Object> param,HttpServletRequest request) {
		HttpSession session = request.getSession();
		ProfessorDTO professor = (ProfessorDTO) session.getAttribute("professor");
		int professorId = professor.getProfessorId();
		String classInfo = (String) param.get("classInfo");
		int classCode = Integer.parseInt((String) param.get("classCode"));

		Map<String, Object> map = new HashMap<>();
		map.put("classInfo", classInfo);
		map.put("classCode", classCode);
		map.put("professorId", professorId);

		int result = classService.updateClassInfo(map);

		String message = "";
		if (result == 1) {
			message = "ok";
		}

		return message;
	}

	
	
	
	// 학생정보 조회 ################################################################################################## //
	@RequestMapping(value = "/studentInfo.do")
	public String studentInfoView(@RequestParam Map<String, Object> map, HttpSession session, Model model) {

		ProfessorDTO professor = (ProfessorDTO) session.getAttribute("professor");
		// 세션 만료시 로그인 페이지로 이동
		if (professor == null) {
			return "redirect:/login.do"; 
		}
		List<ClassDTO> classList = classService.selectClassList(professor.getProfessorId());
		model.addAttribute("professorClass", classList);

		int no = Integer.parseInt((String) map.get("selectedNo"));
		Map<String, Object> selectClass = classService.selectClass(no);
		String className = (String) selectClass.get("className");
		String searchKeyword = (String) map.get("searchKeyword");
		String searchType = (String) map.get("searchType");
		String pageStr = (String) map.get("page");
		String departmentCode = (String) map.get("departmentCode");
		int page = (pageStr == null || pageStr.isEmpty()) ? 1 : Integer.parseInt(pageStr);

		model.addAttribute("classCode", no);
		model.addAttribute("className", className);

		List<DepartmentDTO> departmentList = departmentService.allDepartment();
		model.addAttribute("department", departmentList);

		// 검색어가 있을 경우에만 검색 수행
		if (departmentCode != null && !departmentCode.isEmpty()) {
			// 검색어에 맞는 학생 수와 목록 가져오기
			int totalCnt = classService.getTotalStudentsBySearchKeyword(no, searchType, searchKeyword, departmentCode);
			List<Map<String, Object>> selectClassStudent = classService.searchStudentByKeyword(no, searchType,
					 searchKeyword , page, 10, departmentCode);
			System.out.println(selectClassStudent);
			if (selectClassStudent.isEmpty()) {
				model.addAttribute("errorMessage", "해당 검색어는 존재하지 않습니다. 전체 학생 목록으로 돌아갑니다.");
				totalCnt = classService.getTotalStudents(no);
				selectClassStudent = classService.selectClassStudent(no, page, 10);
			}

			model.addAttribute("pageHandler", new PageHandler(totalCnt, 10, page));
			model.addAttribute("selectClassStudent", selectClassStudent);
			model.addAttribute("searchKeyword", searchKeyword);
			model.addAttribute("searchType", searchType);
		} else {
			// 검색어가 없는 경우 전체 학생 목록 조회

			int totalCnt = classService.getTotalStudents(no);
			List<Map<String, Object>> selectClassStudent = classService.selectClassStudent(no, page, 10);

			model.addAttribute("pageHandler", new PageHandler(totalCnt, 10, page));
			model.addAttribute("selectClassStudent", selectClassStudent);
		}

		return "hana/professor/studentInfo";
	}
	
	
	
	
	// 학생성적 조회 ################################################################################################## //
	@RequestMapping(value = "/gradeInfo.do")
	public String gradeInfoView(@RequestParam Map<String, Object> map, HttpSession session, Model model) {

		// 세션에서 교수 정보 가져오기
		ProfessorDTO professor = (ProfessorDTO) session.getAttribute("professor");
		// 세션 만료시 로그인 페이지로 이동
		if (professor == null) {
			return "redirect:/login.do"; 
		}
		List<ClassDTO> classList = classService.selectClassList(professor.getProfessorId());
		model.addAttribute("professorClass", classList);

		int classCode = Integer.parseInt((String) map.get("selectedNo"));
		Map<String, Object> selectClass = classService.selectClass(classCode);
		String className = (String) selectClass.get("className");
		String departmentCode = (String) map.get("departmentCode");

		model.addAttribute("classCode", classCode);
		model.addAttribute("className", className);

		List<DepartmentDTO> departmentList = departmentService.allDepartment();
		model.addAttribute("department", departmentList);


		String searchKeyword = (String) map.get("searchKeyword");
		String searchType = (String) map.get("searchType");
		String pageStr = (String) map.get("page");
		int page = (pageStr == null || pageStr.isEmpty()) ? 1 : Integer.parseInt(pageStr);

		if (departmentCode != null && !departmentCode.isEmpty()) {
			// 검색어에 맞는 학생 수와 목록 가져오기
			int totalCnt = classService.getTotalStudentsBySearchKeyword(classCode, searchType, searchKeyword, departmentCode);
			List<Map<String, Object>> selectClassStudent = classService.searchClassStudentByKeyword(classCode,
					searchType, searchKeyword, page, 10, departmentCode);

			if (selectClassStudent.isEmpty()) {
				// 검색 결과가 없을 경우 메시지 출력 후 전체 학생 목록 조회
				model.addAttribute("errorMessage", "해당 검색어는 존재하지 않습니다. 전체 학생 목록으로 돌아갑니다.");
				totalCnt = classService.getTotalStudents(classCode);
				selectClassStudent = classService.selectClassGrade(classCode, page, 10);
			}

			model.addAttribute("pageHandler", new PageHandler(totalCnt, 10, page));
			model.addAttribute("selectClassStudent", selectClassStudent);
			model.addAttribute("searchKeyword", searchKeyword);
			model.addAttribute("searchType", searchType);

		} else {
			// 검색어가 없는 경우 전체 학생 목록 조회
			int totalCnt = classService.getTotalStudents(classCode);
			List<Map<String, Object>> selectClassStudent = classService.selectClassGrade(classCode, page, 10);

			model.addAttribute("pageHandler", new PageHandler(totalCnt, 10, page));
			model.addAttribute("selectClassStudent", selectClassStudent);
		}

		return "hana/professor/gradeInfo";
	}

	// 학생 성적 수정
	@ResponseBody
	@RequestMapping(value = "/updateGrade.do", method = RequestMethod.POST)
	public String updateGrade(@RequestParam Map<String, Object> param, HttpSession session) throws IOException {

		ProfessorDTO professor = (ProfessorDTO) session.getAttribute("professor");
		param.put("professroId", professor.getProfessorId());

		int middleTest = Integer.parseInt((String) param.get("middleTest"));
		int finalTest = Integer.parseInt((String) param.get("finalTest"));
		int report = Integer.parseInt((String) param.get("report"));
		double score = (middleTest / 100.0 * 40) + (finalTest / 100.0 * 40) + (report / 100.0 * 20);
		int classCode = Integer.parseInt((String) param.get("classCode"));

		System.out.println(score);
		String grade = "";
		if (score >= 90) {
			grade = "A";
		} else if (score >= 80) {
			grade = "B";
		} else if (score >= 70) {
			grade = "C";
		} else if (score >= 60) {
			grade = "D";
		} else {
			grade = "F";
		}

		param.put("grade", grade);
		param.put("score", score);
		param.put("classCode", classCode);
		param.put("professorId", professor.getProfessorId());

		int result = classService.updateGrade(param);

		String message = "";
		
		if (result != 0) {
			message = "ok";
		}
		return message;

	}

	// 성적 차트
	@RequestMapping(value = "/chart.do")
	public String chartView(@RequestParam(value = "classCode") int no, Model model, HttpSession session) {

		ProfessorDTO professor = (ProfessorDTO) session.getAttribute("professor");
		// 세션 만료시 로그인 페이지로 이동
		if (professor == null) {
			return "redirect:/login.do"; 
		}
		List<ClassDTO> classList = classService.selectClassList(professor.getProfessorId());
		model.addAttribute("professorClass", classList);

		String className = classService.getClassName(no);
		int totalStudents = classService.getTotalStudents(no);
		model.addAttribute("className", className);
		model.addAttribute("totalStudents", totalStudents);

		Map<String, Object> map = new HashMap<>();
		map.put("classCode", no);
		List<Map<String, Object>> selectClassStudent = classService.selectClassStudent(no);
		model.addAttribute("selectClassStudent", selectClassStudent);

		Map<String, Integer> totalGrade = classService.totalScoreChart(no);
		model.addAttribute("totalGrade", totalGrade);

		Map<String, Integer> middleTestGrade = classService.middleTestScoreChart(no);
		model.addAttribute("middleTestGrade", middleTestGrade);

		Map<String, Integer> finalTestGrade = classService.finalTestScoreChart(no);
		model.addAttribute("finalTestGrade", finalTestGrade);

		Map<String, Integer> reportGrade = classService.reportScoreChart(no);
		model.addAttribute("reportGrade", reportGrade);

		return "hana/professor/chart";
	}
	
	
	
	
	// 시간표 조회 ################################################################################################## //
	@RequestMapping(value = "/schedule.do")
	public String scheduleView(Model model, HttpSession session) {
		ProfessorDTO professor = (ProfessorDTO) session.getAttribute("professor");
		// 세션 만료시 로그인 페이지로 이동
		if (professor == null) {
			return "redirect:/login.do"; 
		}
		
		List<ClassDTO> classList = classService.selectClassList(professor.getProfessorId());
		model.addAttribute("professorClass", classList);

		Map<String, Object> map = new HashMap<>();
		map.put("professorId", professor.getProfessorId());

		// 시간표 조회
		List<Map<String, Object>> timetable = classService.selectSchedule(map);

		// 데이터를 JSP로 전달
		model.addAttribute("timetable", timetable);

		return "hana/schedule";
	}
	
	
	
	
	
	

	// 로그인 기능 ################################################################################################## //
	// 메일 보내기 + 로그인
	@RequestMapping(value = "/sign.do", method = RequestMethod.POST)
	public ModelAndView loginView(@RequestParam("id") int professorId, @RequestParam("password") String password,
		HttpServletRequest request, ProfessorDTO dto) {
		HttpSession session = request.getSession();
		session.invalidate();
		ModelAndView view = new ModelAndView();

		// 얻은 값 설정
		dto.setProfessorId(professorId);
		dto.setPassword(password);

		// 로그인 체크
		ProfessorDTO professorDTO = professorService.proLoginCheck(dto, request.getSession());

		if (professorDTO != null) {
			// 로그인 성공 시 처리
			session = request.getSession();
			session.setAttribute("professor", professorDTO); // 임시 사용자 정보 세션 저장
			session.setMaxInactiveInterval(1800); // 로그인 세션 만료 시간 = 30분

			// 이메일로 인증번호 발송
			String verificationCode = mailService.joinEmail(professorDTO.getEmail());
			session.setAttribute("verificationCode", verificationCode); // 인증코드 세션 저장

			// 응답 데이터 설정
			view.addObject("result", "success");
		} else {
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
