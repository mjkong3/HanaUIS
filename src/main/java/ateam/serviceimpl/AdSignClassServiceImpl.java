package ateam.serviceimpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ateam.mapper.AdSignClassMapper;
import ateam.service.AdSignClassService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service
public class AdSignClassServiceImpl extends EgovAbstractServiceImpl implements AdSignClassService {

	@Autowired
	private AdSignClassMapper mapper;

	// 수강신청 수정 조회하기
	@Override
	public List<Map<String, Object>> selectAdSignClass(Map<String, Object> param) {
		return mapper.selectAdSignClass(param);
	}

	// 수강신청 목록 삭제하기
	@Override
	public void deleteAdSignClass(Map<String, Object> param) {	
		mapper.deleteAdSignClass(param);
	}

	// 수강신청 분류하기
	@Override
	public List<Map<String, Object>> selectDeptList() {
		return mapper.selectDeptList();
	}
	
	// <팝업> @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

	// 수강신청 분류하기(팝업)
	@Override
	public List<Map<String, Object>> selectDeptUserList() {
		return mapper.selectDeptUserList();
	}

	// 모든 수강목록 리스트 조회(팝업)
	@Override
	public List<Map<String, Object>> selectClassFullList(Map<String, Object> param) {
		return mapper.selectClassFullList(param);
	}

	// 누적학점 보기 (팝업)
	@Override
	public List<Map<String, Object>> totalGrades(String param) {
		return mapper.totalGrades(param);
	}

	// 수강신청한 강의 보기 (팝업) 
	@Override
	public List<Map<String, Object>> confirmedClasses(String param) {
		return mapper.confirmedClasses(param);
	}

	// 수강신청 하기 (팝업
	@Override
	public void insertClasses(Map<String, Object> param) {
		mapper.insertClasses(param);
	}

}
