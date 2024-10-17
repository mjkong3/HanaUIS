package ateam.web;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import ateam.dto.ProfessorDTO;
import ateam.dto.StudentDTO;
import ateam.service.AdSignClassService;
import ateam.service.FindPwdService;
import ateam.service.MailSendService;

@Controller
public class findpwdController {

		@Autowired
		private FindPwdService FindPwdService;
		@Autowired
		private MailSendService mailService;
		
		// 메일 보내기 
		@RequestMapping(value = "/selectUser.do", method = RequestMethod.POST)
		public ModelAndView FindPwdView(@RequestParam("id") String id, @RequestParam("name") String name,
											HttpServletRequest request) {
			
			ModelAndView view = new ModelAndView();

			// 로그인 체크
			String Pwdemail= FindPwdService.selectUser(id, name);

			if (Pwdemail != null) {
				HttpSession session = request.getSession();
				// 이메일로 인증번호 발송
				String verificationCode = mailService.joinEmail(Pwdemail);
				System.out.println(verificationCode);
				session.setAttribute("verificationCode", verificationCode); // 인증코드 세션 저장
		
				// 응답 데이터 설정
				view.addObject("result", "success");
			} 
			else {
				// 비밀번호 찾기 실패 시 처리
				view.addObject("result", "failure");
			}

			// 뷰 설정 (JSON 응답을 위한 jsonView 사용)
			view.setViewName("jsonView");
			return view;

		}
		
		// 인증번호 확인 완료
		@RequestMapping(value = "/veriCode.do", method = RequestMethod.POST)
		public ModelAndView verifyCode(@RequestParam("inputCode") String inputCode, HttpSession session) {
			ModelAndView view = new ModelAndView();

			// 세션에서 저장된 인증번호를 가져옴
			String savedCode = (String) session.getAttribute("verificationCode");
			System.out.println(savedCode + "@@@@@@!!!@@@");


			if (inputCode.equals(savedCode)) {
				// 인증번호가 맞으면 로그인 완료 처리
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
		
		// 인증번호 확인 완료
			@RequestMapping(value = "/changepwd.do", method = RequestMethod.POST)
			public ModelAndView changepwd(@RequestParam("pwd") String password,
										  @RequestParam("id") String id, HttpSession session) {
				ModelAndView view = new ModelAndView();

				int asdf = FindPwdService.updatePwd(id, password);
	
				if (asdf == 1) {
					view.addObject("result", "success");
				} else {
					view.addObject("message", "업데이트에 실패하였습니다");
				}
				// JSON 응답을 위한 jsonView 설정
				view.setViewName("jsonView");
			
				return view;
			}

}
