package ateam.serviceimpl;

import java.util.Random;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import ateam.service.MailSendService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;



@Service("MailSendService")
public class MailSendServiceImpl extends EgovAbstractServiceImpl implements MailSendService {


    private int authNumber;

	 private final JavaMailSender mailSender;

	    @Autowired
	    public MailSendServiceImpl(JavaMailSender mailSender) {
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
        System.out.println("이메일 발송준비");
        String setFrom = "ush529@gmail.com"; // 발송 이메일 주소
        String toMail = email;
        String title = "[하나대학교] 로그인 인증코드를 확인해주세요."; // 이메일 제목
        String content = "안녕하세요." + "<br><br>" + // 이메일 내용 삽입
        		         "하나대학교 계정보안 서비스를 이용해주셔서 대단히 감사합니다." + "<br>" +
        		         "귀하의 회원가입 이메일로 인증코드를 전달하였으니" + "<br>" +
        				 "하나대학교 로그인 창 아래에 입력하여 주세요." + "<br><br><br>" +
        				 "[인증코드]" + "<br>" + 
                         authNumber + "<br><br><br>" + 
                         "울산광역시 중구 종가로 406-21 하나대학교" + "<br>" +
                         "(406-21 Jongga-ro, Jung-gu, Ulsan 44429. KOREA) TEL: 052-258-7071 " + "<br>" +
                         "COPYRIGHT 2024 HANA UNIVERSITY. ALL RIGHTS RESERVED";

        mailSend(setFrom, toMail, title, content);
        System.out.println("이메인 발송완료");
        return Integer.toString(authNumber);
    }

    // 이메일 전송 메소드
    @Override
    public void mailSend(String setFrom, String toMail, String title, String content) {
        MimeMessage message = mailSender.createMimeMessage();
        System.out.println("메일 전송준비??");
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
