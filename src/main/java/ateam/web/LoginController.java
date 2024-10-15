package ateam.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {

	
	@RequestMapping(value="/login.do")
	public String loginView() {
		return "hana/login";
	}
	
	@RequestMapping(value="/findPassword.do")
	public String findPasswordView() {
		return "hana/findPassword";
	}
}
