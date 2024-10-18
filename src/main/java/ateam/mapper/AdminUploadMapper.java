/**
 * 
 */
package ateam.mapper;

import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("AdminUploadMapper")
public interface AdminUploadMapper {
	
	int insertBoard(Map<String, Object> param);

	int insertFile(Map<String, Object> param);

	String newFileCode();
	
	void updateBoard(Map<String, Object> param);
	
	void deleteFile(Map<String, Object> param);
	
	void updateFile(Map<String, Object> param);

	String selectCreDtm(int boardCode);

	void deleteBoard(Map<String, Object> param);


}
