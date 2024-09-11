package ateam.service;

import java.util.List;
import java.util.Map;

import ateam.dto.ClassDTO;


public interface ClassService {

		//교수의 강의목록
		public List<ClassDTO> selectClassList(int id);
		
		//교수의 강의 시간표
		public List<Map<String, Object>> professorClassTimeList(int id);
		public List<Map<String, Object>> studentClassTimeList(int id);
		
		//강의 정보
		public  Map<String, Object> selectClass(int classCode);
		public List<Map<String, Object>> selectClassTime(int classCode);
}
