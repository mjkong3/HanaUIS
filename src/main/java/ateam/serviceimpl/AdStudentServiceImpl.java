package ateam.serviceimpl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

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

}
