package ateam.serviceimpl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;

import ateam.mapper.AdminMapper;
import ateam.service.AdminService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("AdminService")
public class AdminServiceImpl extends EgovAbstractServiceImpl implements AdminService {

   @Resource(name="txManager")
   PlatformTransactionManager transationManager;
   
   @Resource(name = "AdminMapper")
   private AdminMapper mapper;
   
   @Override
   public List<Map<String, Object>> selectCodeMst(Map<String, Object> param) {
      return mapper.selectCodeMst(param);
   }
   
   @Override
	public Map<String, Object> selectLogin(Map<String, Object> param) {
		return mapper.selectLogin(param);
	}

}