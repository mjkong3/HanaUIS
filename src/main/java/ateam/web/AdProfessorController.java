package ateam.web;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.service.AdProfessorService;

@Controller
public class AdProfessorController {

	@Autowired
	private AdProfessorService service;

	// onloadEvent - dept grd에 바인딩된 ds에 data 전달
	@RequestMapping(value = "/selectAdProDept.do")
	public NexacroResult selectAdProDept() {

		NexacroResult result = new NexacroResult();

		try {
			// dept list를 받아온다
			List<Map<String, Object>> ds_dept = service.selectAdProDept();

			// dept grd에 전체검색용 row 추가
			// 넥사크로에서 하나의 row는 하나의 맵 객체에 들어간다
			Map<String, Object> dept = new HashMap<>();
			// dept code는 00
			dept.put("DEPARTMENT_CODE", "00");
			// dept name은 전체학과
			dept.put("DEPARTMENT_NAME", "전체학과");
			// dept grd의 최상단에 전체학과 표시를 위해 0번 인덱스에 맵 객체 추가
			ds_dept.add(0, dept);
			System.out.println("DEPARTMENT_CODE: " + dept.get("DEPARTMENT_CODE"));
			// 위에서 만들어진 list 객체 ds_dept를 데이터셋에 추가 및 반환
			result.addDataSet("ds_dept", ds_dept);

		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}

		return result;

	}
	
	// onclickEvent - list grd에 바인딩된 ds에 data 전달
	@RequestMapping(value = "/selectAdProList.do")
	public NexacroResult selectList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {
		System.out.println(param);
		NexacroResult result = new NexacroResult();

		try {

			List<Map<String, Object>> ds_list = service.selectAdProList(param);

			System.out.println("리스트생성?"+ ds_list);
			result.addDataSet("ds_list", ds_list);
		
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		System.out.println("리스트 넘겨지나"+ result);
		return result;
	}

	// onclickEvent - 등록 btn 누를 시 관리자 정보 넘겨주기
	@RequestMapping(value = "/getAdminInfo")
	public NexacroResult getAdminInfo () {
		NexacroResult result = new NexacroResult();
		
		// 로그인 시 관리자 id 받아오기
//		HttpSession session = request.getSession();
		
		// 세션에 관리자 id를 string으로 변환  - nexacro에서 단일 변수는 string으로 처리
//	    Integer adminId = (Integer) request.getSession().getAttribute("adminId");
//	    String adminCode = (adminId != null) ? String.valueOf(adminId) : null;
	    
	    // 현재 날짜 가져오기
	    String regDate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
	    System.out.println("현재 날짜?" + regDate);
	  
	    Map<String, Object> ds_admin = new HashMap<>();
	    ds_admin.put("regDate", regDate);
	    // NexacroResult에 추가 (String으로 보내기)
	    
//	    result.addVariable("adminCode", adminCode);
	    result.addDataSet("ds_admin", ds_admin);
	    System.out.println("데이터셋 : " + ds_admin);
	    System.out.println("결과는? " + result);
	    return result;
	}
	
	// popup - onclickEvent - 작성완료 버튼 누를 시  pro_id에 따라 insert or update
	@RequestMapping(value = "/saveAdPro.do")
	public NexacroResult saveAdPro(@ParamDataSet(name = "ds_pro", required = false) Map<String, Object> param) {
		
		NexacroResult result = new NexacroResult();
		
		try {

			// 반환할 ds가 없으므로 service 로직만 실행
			service.saveAdPro(param);
		
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		// 반환값이 없어도 null은 안된다 -  빈 nexacro 객체를 반환!
		return result;
	}
	
	// onclickEvent - 수정용 popup에 필요한 정보 넘겨주기
	@RequestMapping(value = "/selectAdProInfo")
	public NexacroResult selectAdProInfo(@ParamVariable(name = "PROFESSOR_ID", required = false) String ProId) {
		NexacroResult result = new NexacroResult();
		
		System.out.println(ProId);
		
		try {
    		Map<String, Object> ds_list = service.selectAdProInfo(ProId);
    		
    		result.addDataSet("ds_list", ds_list);
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	
    	return result;
	}
}