package ateam.serviceimpl;

import java.util.Random;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import ateam.service.MailCheckService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("MailCheckService")
public class MailCheckServiceImpl extends EgovAbstractServiceImpl implements MailCheckService{
	
	
	private int authNumber;

    private final JavaMailSender mailSender;

       @Autowired
       public MailCheckServiceImpl(JavaMailSender mailSender) {
           this.mailSender = mailSender;
       }
    
    @Override
    public void makeRandomNumber() {
        // 난수의 범위 111111 ~ 999999 (6자리 난수)
        Random r = new Random();
        int checkNum = r.nextInt(888888) + 111111;
        System.out.println("인증번호 : " + checkNum);
        authNumber = checkNum;
    }

    @Override
    public String joinEmail(String email) {
        makeRandomNumber();
       
        String setFrom = "test231@gmail.com"; // 자신의 이메일 주소를 입력
        String toMail = email;
        String title = "이메일 인증 입니다."; // 이메일 제목
        String content = "홈페이지를 방문해주셔서 감사합니다." + "<br><br>" + 
                         "인증 번호는 " + authNumber + "입니다." + "<br>" + 
                         "해당 인증번호를 인증번호 확인란에 기입하여 주세요."; // 이메일 내용 삽입
       
        mailSend(setFrom, toMail, title, content);
        
        return Integer.toString(authNumber);
    }

    // 이메일 전송 메소드
    @Override
    public void mailSend(String setFrom, String toMail, String title, String content) {
       
        MimeMessage message = mailSender.createMimeMessage();
        try {
           
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "utf-8");
            helper.setFrom(setFrom);
            helper.setTo(toMail);
            helper.setSubject(title);
            helper.setText(content,true); // true 전달 > html 형식으로 전송
            mailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
