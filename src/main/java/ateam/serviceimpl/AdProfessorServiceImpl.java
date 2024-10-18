package ateam.serviceimpl;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ateam.dto.ProfessorDTO;
import ateam.mapper.AdProfessorMapper;
import ateam.service.AdProfessorService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service
public class AdProfessorServiceImpl extends EgovAbstractServiceImpl implements AdProfessorService {

	@Autowired
	private AdProfessorMapper mapper;
	
	@Inject
	LoginDAO loginDao;
	
	@Override
	public List<Map<String, Object>> selectAdProList(Map<String, Object> param) {
		return mapper.selectAdProList(param);
	}

	@Override
	public void insertAdPro(Map<String, Object> param) {
			mapper.insertAdPro(param);
	}
	
	@Override
	public void updateAdPro(Map<String, Object> param) {
		mapper.updateAdPro(param);
	}

	@Override
	public Map<String, Object> selectAdProInfo(String ProId) {
		return mapper.selectAdProInfo(ProId);
	}

	@Override
	public void deleteAdPro(Map<String, Object> param) {
		   mapper.deleteAdPro(param);
		
	}

	@Override
	public String dupCheckId(String ProId) {
		
		String checkId;
		int check = mapper.dupCheckId(ProId);
		if (check > 0) {
			checkId = "N";
		} else {
			checkId = "Y";
		}
		
		return checkId;
	}

	@Override
	public String dupCheckEm(Map<String, Object>param) {
		
		String checkEm;
		int check = mapper.dupCheckEm(param);
		if (check > 0 ) {
			checkEm = "N";
		} else {
			checkEm = "Y";
		}
		return checkEm;
	}

	@Override
	public ProfessorDTO proLoginCheck(ProfessorDTO dto, HttpSession session) {
		ProfessorDTO professorDTO = mapper.proLoginCheck(dto);
		if (professorDTO != null) {
			session.setAttribute("professorId", dto.getProfessorId());
		}
		return professorDTO;
		
	}

	@Override
	public List<Map<String, Object>> checkProfessorExcel(List<Map<String, Object>> param) {
		return mapper.checkProfessorExcel(param);
	}

	@Override
	public void insertexcelPro(List<Map<String, Object>> param) {
		for(int i=0; i<param.size(); i++) {
			mapper.insertexcelPro(param.get(i));
		}
	}
	

}
