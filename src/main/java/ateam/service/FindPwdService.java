package ateam.service;

import java.util.Map;

public interface FindPwdService {

	public String selectUser(String id, String name);
	public int updatePwd(String id, String password);
}
