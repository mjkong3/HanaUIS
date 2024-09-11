package ateam.web;

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
import org.springframework.web.servlet.ModelAndView;

import ateam.dto.ClassDTO;
import ateam.dto.ProfessorDTO;
import ateam.service.ClassService;
import ateam.service.MailSendService;
import ateam.service.ProfessorService;

@Controller
@RequestMapping(value = "/pfs")
public class ProfessorController {

	@Inject

	// 메일 서비스
	@Autowired
	private MailSendService mailService;

	@Autowired
	public ProfessorService professorService;
	
	@Autowired
	public ClassService classService;

	@RequestMapping(value = "/myPage.do")
	public String mainView(HttpSession session, Model model) {

		int professorId = 241111;
		ProfessorDTO professor = professorService.selectProfessor(professorId);
		System.out.println(session.getId());

		List<ClassDTO> classList = professorClassList(professor.getProfessorId());

		model.addAttribute("professor", professor);
		model.addAttribute("professorClass", classList);

		return "hana/myPage";
	}

	// 교수의 수업 목록을 가져오는 메서드
	public List<ClassDTO> professorClassList(int id) {
		List<ClassDTO> classList = classService.selectClassList(id);

		return classList;
	}

	@RequestMapping(value="/classInfo.do")
	public String classInfoView(@RequestParam("selectedNo") int no, Model model) {
		ProfessorDTO professor = professorService.selectProfessor(241111);
		model.addAttribute("professor", professor);
		
		 Map<String, Object> selectClass = classService.selectClass(no);
		 model.addAttribute("classInfo", selectClass);
		 System.out.println(selectClass);
        List<Map<String, Object>> timetable = classService.selectClassTime(no);
        model.addAttribute("timetable", timetable);
		 
		return "hana/classInfo";
	}

	@RequestMapping(value = "/studentInfo.do")
	public String studentInfoView() {

		return "hana/professor/studentInfo";
	}

	@RequestMapping(value = "/schedule.do")
	public String scheduleView(Model model) {
		int professorId = 241111;
		ProfessorDTO professor = professorService.selectProfessor(professorId);

		// 시간표 조회
		List<Map<String, Object>> timetable = classService.professorClassTimeList(professorId);

		// 데이터를 JSP로 전달
		model.addAttribute("timetable", timetable);

		return "hana/schedule";
	}


	// 메일 보내기 + 로그인
	@RequestMapping(value = "/sign.do", method = RequestMethod.POST)
	public ModelAndView loginView(@RequestParam("id") int professorId, @RequestParam("password") String password,
			HttpServletRequest request, ProfessorDTO dto) {
		ModelAndView view = new ModelAndView();

		// 얻은 값 설정
		dto.setProfessorId(professorId);
		dto.setPassword(password);

		// 로그인 체크
		ProfessorDTO professorDTO = professorService.proLoginCheck(dto, request.getSession());

		if (professorDTO != null) {
			// 로그인 성공 시 처리
			HttpSession session = request.getSession();
			session.setAttribute("studentTemp", professorDTO); // 임시 사용자 정보 세션 저장
			session.setMaxInactiveInterval(1800); // 로그인 세션 만료 시간 = 30분

			// 이메일로 인증번호 발송
			String verificationCode = mailService.joinEmail(professorDTO.getEmail());
			session.setAttribute("verificationCode", verificationCode); // 인증코드 세션 저장

			// 응답 데이터 설정
			view.addObject("result", "success");
			view.addObject("verificationCode", verificationCode); // 인증코드 전달
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
			// 인증번호가 맞으면 로그인 완료 처리
			ProfessorDTO professor = (ProfessorDTO) session.getAttribute("professorTemp");
			session.setAttribute("professor", professor); // 실제 사용자 정보 세션 저장
			session.removeAttribute("professorTemp"); // 임시 정보 삭제
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
