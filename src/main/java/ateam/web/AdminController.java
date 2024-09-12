package ateam.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.dto.StudentDTO;
import ateam.service.AdminService;
import ateam.service.MailCheckService;

@Controller
public class AdminController {
	private Logger logger = LoggerFactory.getLogger(AdminController.class);
	
	@Resource(name="txManager")
	PlatformTransactionManager transationManager;
	
	@Resource(name = "AdminService")
	private AdminService service;
	
	@Resource(name = "MailCheckService")
    private MailCheckService mailService;
	
	@RequestMapping(value = "/selectLogin.do")
    public NexacroResult selectLogin(@ParamDataSet(name = "Login_Ds", required = false) Map<String, Object> param, HttpServletRequest request, StudentDTO dto) {
    	System.out.println("selectLogin.do");
    	NexacroResult result = new NexacroResult();
    	System.out.println(param);
    	
    	try {
    		Map<String, Object> Certificate_Ds = service.selectLogin(param);
    		//Map<String, Object> welcome = service.welcome(param);
    		System.out.println("dkdkdkddkefewa"+ Certificate_Ds);

    		if(Certificate_Ds.get("LoginCheck").equals("Y")) {
    			
    			Object check = Certificate_Ds.get("email");
    			String email = check.toString();
    			String email_Check = mailService.joinEmail(email);
    			
    			Certificate_Ds.put("Check", email_Check);
    			
    			System.out.println(Certificate_Ds.get("email"));
    		}
    		
    		result.addDataSet("Certificate_Ds", Certificate_Ds);
    		
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
    }

	
	
	@RequestMapping(value = "/selectCodeMst.do")
	public NexacroResult selectCodMst(@ParamDataSet(name = "ds_Search", required = false) Map<String, Object>param) {
		
		NexacroResult result = new NexacroResult();
		
		System.out.println(param);
		
		try {
			List<Map<String, Object>> ds_CodeMstList = service.selectCodeMst(param);
					
			result.addDataSet("ds_CodeMstList", ds_CodeMstList);
		} catch(Exception ee) {
			System.out.println(ee);
			result.setErrorCode(01);
			result.setErrorMsg("catch 조회 오류");
		}
		
		return result;
	}
}
