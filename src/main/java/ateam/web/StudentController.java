package ateam.web;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import ateam.dto.StudentDTO;
import ateam.service.MailSendService;
import ateam.service.StudentService;

@Controller
@RequestMapping(value = "/std")
public class StudentController {
	@Inject

	// 메일 서비스
	@Autowired
	private MailSendService mailService;

	@Autowired
	private StudentService studentService;

	@RequestMapping(value = "/main.do")
	public String mainView() {
		return "hana/main";
	}

	@RequestMapping(value = "/myPage.do")
	public String myPageView() {
		return "hana/myPage";
	}

	@RequestMapping(value = "/login.do")
	public String loginView() {
		return "hana/login";
	}

	@RequestMapping(value = "/notice.do")
	public String noticeView() {
		return "hana/notice";
	}

	@RequestMapping(value = "/schedule.do")
	public String scheduleView() {
		return "hana/schedule";
	}

	@RequestMapping(value = "/noticeDetail.do")
	public String noticeDetailView() {
		return "hana/noticeDetail";
	}

	@RequestMapping(value = "/leave.do")
	public String leaveView() {
		return "hana/student/takeTime";
	}

	@RequestMapping(value = "/back.do")
	public String backView() {
		return "hana/student/takeTime";
	}

	@RequestMapping(value = "/signForClass.do")
	public String signForClassView() {
		return "hana/student/signForClass";
	}

	@RequestMapping(value = "/classList.do")
	public String classListView() {
		return "hana/student/classList";
	}

	@RequestMapping(value = "/classInfo.do")
	public String classInfoView() {
		return "hana/classInfo";
	}

	@RequestMapping(value = "/myGrade.do")
	public String myGradeView() {
		return "hana/student/myGrade";
	}

	// 메일 보내기 + 로그인
	@RequestMapping(value = "/sign.do", method = RequestMethod.POST)
	public ModelAndView loginView(@RequestParam("id") int studentId, @RequestParam("password") String password,
			HttpServletRequest request, StudentDTO dto) {
		ModelAndView view = new ModelAndView();

		// 얻은 값 설정
		dto.setStudentId(studentId);
		dto.setPassword(password);

		// 로그인 체크
		StudentDTO studentDTO = studentService.loginCheck(dto, request.getSession());

		if (studentDTO != null) {
			// 로그인 성공 시 처리
			HttpSession session = request.getSession();
			session.setAttribute("studentTemp", studentDTO); // 임시 사용자 정보 세션 저장
			session.setMaxInactiveInterval(1800); // 로그인 세션 만료 시간 = 30분

			// 이메일로 인증번호 발송
			String verificationCode = mailService.joinEmail(studentDTO.getEmail());
			session.setAttribute("verificationCode", verificationCode); // 인증코드 세션 저장

			// 응답 데이터 설정
			view.addObject("result", "success");
			view.addObject("verificationCode", verificationCode); // 인증코드 전달
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
			// 인증번호가 맞으면 로그인 완료 처리
			StudentDTO student = (StudentDTO) session.getAttribute("studentTemp");
			session.setAttribute("student", student); // 실제 사용자 정보 세션 저장
			session.removeAttribute("studentTemp"); // 임시 정보 삭제
			session.removeAttribute("verificationCode"); // 인증코드 삭제

			// 성공 응답 데이터 추가
			view.addObject("result", "success");
			System.out.print("로그인 성공!!!");
			
		} else {
			// 실패 응답 데이터 추가
			view.addObject("result", "failure");
		}

		// JSON 응답을 위한 jsonView 설정
		view.setViewName("jsonView");
		
		return view;
	}

}
