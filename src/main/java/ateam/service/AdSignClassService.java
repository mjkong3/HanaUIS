package ateam.service;

import java.util.List;
import java.util.Map;

public interface AdSignClassService {

	// 수강신청 수정 조회하기
	List<Map<String, Object>> selectAdSignClass(Map<String, Object> param);
	
	// 수강신청 목록 삭제하기
	public void deleteAdSignClass(Map<String, Object> param);

	// 수강신청 분류하기
	List<Map<String, Object>> selectDeptList(Map<String, Object> param);
	
	// <팝업> @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
	
	// 수강신청 분류하기(팝업)
	List<Map<String, Object>> selectDeptUserList();
	
	// 모든 수강목록 리스트 조회(팝업)
	List<Map<String, Object>> selectClassFullList(Map<String, Object> param);
	
	// 누적학점 보기 (팝업) 
	List<Map<String, Object>> totalGrades(String param);
	
	// 수강신청한 강의 보기 (팝업) 
	List<Map<String, Object>> confirmedClasses(String param);
	
	// 수강신청 하기 (팝업)
	public void insertClasses(Map<String, Object> param);
}
