package ateam.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import ateam.dto.ProfessorDTO;
import ateam.dto.StudentDTO;
import ateam.service.AdProfessorService;

@Controller
public class AdProfessorController {

	@Autowired
	private AdProfessorService service;

	// onclickEvent - list grd에 바인딩된 ds에 data 전달
	@RequestMapping(value = "/selectAdProList.do")
	public NexacroResult selectList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {
		System.out.println(param);
		NexacroResult result = new NexacroResult();

		try {

			List<Map<String, Object>> ds_list = service.selectAdProList(param);

			System.out.println("리스트생성?" + ds_list);
			result.addDataSet("ds_list", ds_list);

		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		System.out.println("리스트 넘겨지나" + result);
		return result;
	}

	// popup - onclickEvent - 작성완료 버튼 누를 시 pro_id에 따라 insert or update
	@RequestMapping(value = "/insertAdPro.do")
	public NexacroResult insertAdPro(@ParamDataSet(name = "ds_pro", required = false) Map<String, Object> param) {

		NexacroResult result = new NexacroResult();
		System.out.println("param1 = " + param);
		try {
			// 반환할 ds가 없으므로 service 로직만 실행
			service.insertAdPro(param);
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		// 반환값이 없어도 null은 안된다 - 빈 nexacro 객체를 반환!
		return result;
	}

	@RequestMapping(value = "/updateAdPro.do")
	public NexacroResult updateAdpro(@ParamDataSet(name = "ds_pro", required = false) Map<String, Object> param) {

		NexacroResult result = new NexacroResult();
		System.out.println("param1 = " + param);
		try {
			service.updateAdPro(param);
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}

		return result;
	}

	// onclickEvent - 수정용 popup에 필요한 정보 넘겨주기
	@RequestMapping(value = "/selectAdProInfo")
	public NexacroResult selectAdProInfo(@ParamVariable(name = "PROFESSOR_ID", required = false) String ProId) {
		NexacroResult result = new NexacroResult();
		System.out.println("받아왔는지1? " + ProId);
		try {
			Map<String, Object> ds_list = service.selectAdProInfo(ProId);
			System.out.println("받아왔는지2? " + ds_list);
			result.addDataSet("ds_list", ds_list);
			System.out.println("넣어졌는지1? " + ds_list);
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		System.out.println("넣어졌는지2? " + result);
		return result;
	}

	// onclickEvent - list grd에서 체크한 그리드 삭제
	@RequestMapping(value = "/deleteAdPro.do")
	public NexacroResult deleteAdPro(
			@ParamDataSet(name = "ds_delete", required = false) List<Map<String, Object>> param) {

		NexacroResult result = new NexacroResult();
		try {
			// List에 담아온 교수id들을 순차적으로 보내 삭제시킨다
			for (int i = 0; i < param.size(); i++) {
				service.deleteAdPro(param.get(i));
			}
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}

		return result;
	}
	
	@RequestMapping(value ="/dupCheckId.do")
	public NexacroResult dupCheckId(@ParamVariable(name = "PROFESSOR_ID", required = false) String ProId) {
		NexacroResult result = new NexacroResult();
		
		try {
			Map<String, Object> ds_vali =  new HashMap<>();
			String checkId = service.dupCheckId(ProId);
			System.out.println("proId는?" + ProId);
			ds_vali.put("CHECK_ID", checkId);
			System.out.println("들어갔나?" + ds_vali);
			result.addDataSet("ds_vali", ds_vali);
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		System.out.println("result는? " + result);
		return result;
	}
	
	@RequestMapping(value ="/dupCheckEm.do")
	public NexacroResult dupCheckEm(@ParamDataSet(name = "ds_pro", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		System.out.println("왔냐? : " + param);
		try {
			Map<String, Object> ds_vali =  new HashMap<>();
			String CheckEm = service.dupCheckEm(param);
			System.out.println("email은?" + CheckEm);
			ds_vali.put("CHECK_EM", CheckEm);
			System.out.println("들어갔나?" + ds_vali);
			result.addDataSet("ds_vali", ds_vali);
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		System.out.println("result는? " + result);
		return result;
	}
	
	   @RequestMapping(value = "/AdProMypage.do")
	   public NexacroResult AdProMypage(@ParamDataSet(name = "ds_mydata", required = false) Map<String, Object> param,
			   HttpServletRequest request, ProfessorDTO dto) {
	     NexacroResult result = new NexacroResult();
	      System.out.println(param);
	      HttpSession session = request.getSession();
	      // 기존 세션 삭제
	      session.invalidate();
	      Object proId = param.get("PROFESSOR_ID");
	      int id = 0;
	      if (proId instanceof Integer) {
	          id = (Integer) proId;
	      } else if (proId instanceof String) {
	          id = Integer.parseInt((String) proId);  // String인 경우 변환
	      }
	      String ps = (String) param.get("PASSWORD");
	      System.out.println("@@@@@@@"+id + ps);
	   // 얻은 값 설정
	   		dto.setProfessorId(id);
	   		dto.setPassword(ps);
	   		
	   		ProfessorDTO professorDTO = service.proLoginCheck(dto, request.getSession());
	   		System.out.println("!!!!!!!!!!!!!!"+dto);
	   		System.out.println(professorDTO.getProfessorId());
	   		System.out.println(professorDTO.getPhone());
	   		System.out.println(professorDTO.getAddress());
	   		
	      try {
	    	  
	    	  session = request.getSession();

	    	  session.setAttribute("professor", professorDTO); // 임시 사용자 정보 세션 저장
	    	  session.setMaxInactiveInterval(1800); // 로그인 세션 만료 시간 = 30분

	    	  
	    	  
	      }catch(Exception ee) {
	         System.out.println(ee);
	      }
	      System.out.println("뭘 리턴하지? " + result);
	      return result;
	      
	   }	
}
