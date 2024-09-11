package ateam.service;

public interface MailCheckService {
	
	String joinEmail(String email);
	
	void makeRandomNumber();
	
	void mailSend(String setFrom, String toMail, String title, String content);


}
