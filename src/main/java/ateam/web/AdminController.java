package ateam.web;

import java.text.SimpleDateFormat;
import java.util.Date;
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
import org.springframework.web.bind.annotation.RequestParam;

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
    	System.out.println("selectLogin.do");
    	NexacroResult result = new NexacroResult();
    	System.out.println(param);
    	
    	try {
    		// 이메일 인증번호를 보내는 로직
    		Map<String, Object> Certificate_Ds = service.selectLogin(param);
    		//Map<String, Object> welcome = service.welcome(param);
    		System.out.println("dkdkdkddkefewa"+ Certificate_Ds);

    		if(Certificate_Ds.get("LoginCheck").equals("Y")) {
    			
    			// DB로부터 받은 email 주소를 변수에 대입
    			Object check = Certificate_Ds.get("email");
    			// object타입을 String으로 변환
    			String email = check.toString();
    			// 인증번호 생성
    			String email_Check = mailService.joinEmail(email);
    			// 인증번호 ds에 저장
    			Certificate_Ds.put("Check", email_Check);
    			// 등록일 생성 및 ds에 저장
    			String regDate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
    		    System.out.println("현재 날짜?" + regDate);
    			Certificate_Ds.put("REGDATE", regDate);
    			System.out.println(Certificate_Ds.get("email"));
    			System.out.println(Certificate_Ds.get("ADMIN_CODE"));
    		}
    		
    		result.addDataSet("Certificate_Ds", Certificate_Ds);
    		
    	}catch(Exception ee) {
    		System.out.println(ee);
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
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}

		return result;

	}

	@RequestMapping(value = "/addSession.do")
	public NexacroResult addSession(@ParamVariable(name = "ADMIN_CODE", required = false)String adminCode, HttpServletRequest request) {
		
		NexacroResult result = new NexacroResult();
		HttpSession session = request.getSession();
		System.out.println("받아온 ad코드 = " + adminCode);
		session.setAttribute("ADMIN_CODE", adminCode);
		System.out.println("세션값은 : " + session.getAttribute("ADMIN_CODE"));
		return result;
	}
	
	
	@RequestMapping(value = "/selectCodeMst.do")
	public NexacroResult selectCodMst(@ParamDataSet(name = "ds_Search", required = false) Map<String, Object> param) {

		NexacroResult result = new NexacroResult();

		System.out.println(param);

		try {
			List<Map<String, Object>> ds_CodeMstList = service.selectCodeMst(param);

			result.addDataSet("ds_CodeMstList", ds_CodeMstList);
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(01);
			result.setErrorMsg("catch 조회 오류");
		}

		return result;
	}
}
