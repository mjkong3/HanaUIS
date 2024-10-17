package ateam.serviceimpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;

import ateam.dto.StudentDTO;
import ateam.mapper.AdStudentMapper;
import ateam.service.AdStudentService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("AdStudentService")
public class AdStudentServiceImpl extends EgovAbstractServiceImpl implements AdStudentService{
   
    @Resource(name = "AdStudentMapper")
      private AdStudentMapper mapper;

   @Override
   public List<Map<String, Object>> selectDepartment() {
      return mapper.selectDepartment();
   }

   @Override
   public List<Map<String, Object>> selectAdStudent(Map<String, Object> param) {
      // TODO Auto-generated method stub
      
      return mapper.selectAdStudent(param);
      
       
   }

   @Override
   public void saveAdStudent(Map<String, Object> param) {
      int check = 0;
      check = mapper.checkAdStudent(param);
      if(check == 0) {
         mapper.insertAdStudent(param);
      }
      else if(check > 0){
         mapper.updateAdStudent(param);
      }
      
   }

   @Override
   public Map<String, Object> selectAdStudentdtl(Map<String, Object> param) {
      // TODO Auto-generated method stub
      return mapper.selectAdStudentdtl(param);
   }

   @Override
   public void deletAdStudent(Map<String, Object> param) {
      mapper.deletAdStudent(param);
      
   }
   @Override
   public StudentDTO stdchecklogin(StudentDTO dto, HttpSession session) {
	   System.out.println(dto);
	   return mapper.stdchecklogin(dto);
   }
   
   @Override
   public void insertAdStudent(Map<String, Object> param) {
	   mapper.insertAdStudent(param);
   }

   @Override
   public void updateAdStudent(Map<String, Object> param) {
	   mapper.updateAdStudent(param);
   }

	@Override
	public Map<String, Object> studCheckId(String STUDENT_ID) {
		// TODO Auto-generated method stub
		return mapper.studCheckId(STUDENT_ID);
	}
	
	@Override
	public Map<String, Object> stuCheckEm(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return mapper.stuCheckEm(param);
	}

	@Override
	public List<Map<String, Object>> checkStudentExcel(List<Map<String, Object>> param) {
		// TODO Auto-generated method stub
		/*
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		for(int i=0;i<9;i++) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("key", i);
			list.add(map);
		}
		return list;
		*/
		return mapper.checkStudentExcel(param);
	}

	@Override
	public void insertexcelStu(List<Map<String, Object>> param) {
		// TODO Auto-generated method stub
		for(int i=0; i<param.size(); i++) {
			//System.out.println(param.get(i));
			mapper.insertexcelStu(param.get(i));
		}
	}
	
}
