package ateam.web;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.dto.StudentDTO;
import ateam.service.AdminService;
import ateam.service.MailCheckService;

@Controller
public class AdminController {
	private Logger logger = LoggerFactory.getLogger(AdminController.class);
	
	// 트랜잭션 DI
	@Resource(name="txManager")
	PlatformTransactionManager transationManager;
	
	// 서비스 DI
	@Resource(name = "AdminService")
	private AdminService service;
	
	// 메일인증 DI
	@Resource(name = "MailCheckService")
    private MailCheckService mailService;
	
	// 로그인 + 이메일인증
	@RequestMapping(value = "/selectLogin.do")
    public NexacroResult selectLogin(@ParamDataSet(name = "Login_Ds", required = false) Map<String, Object> param, HttpServletRequest request, StudentDTO dto) {
    	NexacroResult result = new NexacroResult();
    	
    	try {
    		// 이메일 인증번호를 보내는 로직
    		Map<String, Object> Certificate_Ds = service.selectLogin(param);

    		if(Certificate_Ds.get("LoginCheck").equals("Y")) {
    			HttpSession session = request.getSession();
    			
    			
    			// DB로부터 받은 email 주소를 변수에 대입
    			Object check = Certificate_Ds.get("email");
    			// object타입을 String으로 변환
    			String email = check.toString();
    			// 인증번호 생성
    			String email_Check = mailService.joinEmail(email);
    			// 로그인정보 + 인증번호 세션에 저장
    			session.setAttribute("check", email_Check);
    			session.setAttribute("admin", Certificate_Ds.get("ADMIN_CODE"));
    			session.setAttribute("name", Certificate_Ds.get("NAME"));
    			// 등록일 생성 및 ds에 저장
    			
    		}
    		Map<String, Object> checkDs = new HashMap<>();
    		checkDs.put("LoginCheck", Certificate_Ds.get("LoginCheck"));
    		result.addDataSet("Certificate_Ds", checkDs);
    		
    	}catch(Exception ee) {
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
    }
	
	// onloadEvent - dept grd에 바인딩된 ds에 data 전달
	@RequestMapping(value = "/selectAdDept.do")
	public NexacroResult selectAdDept() {
		NexacroResult result = new NexacroResult();

		try {
			// dept list를 받아온다
			List<Map<String, Object>> ds_dept = service.selectAdDept();
			result.addDataSet("ds_dept", ds_dept);

		} catch (Exception ee) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}

		return result;

	}

	@RequestMapping(value = "/addSession.do")
	public NexacroResult addSession(@ParamVariable(name = "EMAIL_CHECK", required = false)String email, HttpServletRequest request) {
		NexacroResult result = new NexacroResult();
		
		Map<String, Object> Certificate_Ds = new HashMap<>();
		
		HttpSession session = request.getSession();
		
		String sessCode = (String) session.getAttribute("check");
		
		try {
			if(sessCode.equals(email)) {
				String regDate = new SimpleDateFormat("yyyy-MM-dd-HH:mm").format(new Date());
				Certificate_Ds.put("ADMIN_CODE", session.getAttribute("admin"));
				Certificate_Ds.put("NAME", session.getAttribute("name"));
				Certificate_Ds.put("REGDATE", regDate);
				Certificate_Ds.put("Check", "Y");
				
			} else {
				Certificate_Ds.put("Check", "N");
				
			}
		} catch(Exception ee){
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		
		result.addDataSet("Certificate_Ds", Certificate_Ds);
		return result;
	}
	
	
	
	
}