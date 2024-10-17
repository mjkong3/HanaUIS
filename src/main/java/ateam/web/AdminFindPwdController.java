package ateam.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.Session;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.service.FindPwdService;
import ateam.service.MailSendService;

@Controller
public class AdminFindPwdController {
	
	@Autowired
	private FindPwdService service;
	@Autowired
	private MailSendService mailService;
	
	// 메일 보내기 
	@RequestMapping(value = "/userCheck.do")
	public NexacroResult userCheck(@ParamDataSet(name = "ds_check", required = false) Map<String, Object> param, HttpServletRequest request) {
		NexacroResult result = new NexacroResult();
		
		// 로그인 체크
		String tosID = (String) param.get("id");
		param.put("id", tosID);
		
		System.out.println(param);
		
		String adEmail = service.selectAdmin(param);
		
		System.out.println(adEmail + "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
		
		Map <String, Object> vali = new HashMap<>();
		
		
		try {
			if (adEmail != null) {
				HttpSession session = request.getSession();
				// 이메일로 인증번호 발송
				String verificationCode = mailService.joinEmail(adEmail);
				session.setAttribute("verificationCode",verificationCode);
				System.out.println(verificationCode);
				
				System.out.println(result);
				
				vali.put("usercheck", "Y");
			} else {
				vali.put("usercheck", "N");
			}
		} catch(Exception ee) {
			System.out.println(ee);
			result.setErrorCode(01);
			result.setErrorMsg("catch 조회 오류");
		}
		
		result.addDataSet("ds_valicheck", vali);

		return result;

	}
	
	@RequestMapping(value = "/matchCode.do")
	public NexacroResult matchCode(@ParamDataSet(name = "ds_vericheck", required = false) Map<String, Object> param, HttpSession session) {
		NexacroResult result = new NexacroResult();
		System.out.println(param);

		String sessCode = (String) session.getAttribute("verificationCode");
		String check = (String) param.get("OK");
		
		System.out.println(sessCode + "@@@@@@@@@@2" + check);
		
		Map <String, Object> code = new HashMap<>();
		
		try{
			if (sessCode.equals(check)) {
				session.removeAttribute("verificationCode"); // 인증코드 삭제

				System.out.print("매치 성공!!!");
				
				code.put("codecheck", "Y");
				}
			else {
				code.put("codecheck", "N");
			}
		} catch(Exception ee) {
			System.out.println(ee);
			result.setErrorCode(01);
			result.setErrorMsg("catch 조회 오류");
		}
		
		result.addDataSet("ds_valicheck", code);
		
		return result;
	
	}
	
	@RequestMapping(value = "/updatePwd.do")
	public NexacroResult updatePwd(@ParamDataSet(name = "ds_check", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		System.out.println(param);
		
		Map<String, Object> params = new HashMap<>();
		params.put("id", param.get("id")); // 예: 3001
		params.put("password", param.get("PASSWORD1"));  // 예: "ABCD1234!"
		
		System.out.println(params);
		
		try {
			service.updateAdmin(params);
		} catch(Exception ee) {
			System.out.println(ee);
			result.setErrorCode(01);
			result.setErrorMsg("catch 조회 오류");
		}
		
		
		return result;
	
	}
}