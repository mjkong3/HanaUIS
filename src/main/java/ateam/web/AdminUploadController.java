package ateam.web;

import java.io.File;
import java.io.IOException;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
@ComponentScan
public class AdminUploadController {
	 @PostMapping("/AdminFileUpload.do")
	    public String handleFileUpload(@RequestParam("file") MultipartFile file) {
	        try {
	            String uploadDir = "D:/upload";  // 파일 저장 경로
	            File targetFile = new File(uploadDir, file.getOriginalFilename());
	            file.transferTo(targetFile);
	            return "File uploaded successfully";
	        } catch (IOException e) {
	            return "File upload failed: " + e.getMessage();
	        }
	    }
}
