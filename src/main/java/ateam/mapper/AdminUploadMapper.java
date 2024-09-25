/**
 * 
 */
package ateam.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("AdminUploadMapper")
public interface AdminUploadMapper {
	int insertBoard(Map<String, Object> param);

	int insertFile(Map<String, Object> param);

	int newBoardCode();
}
