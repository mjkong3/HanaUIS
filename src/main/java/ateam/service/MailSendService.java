package ateam.service;


public interface MailSendService{

	
	void makeRandomNumber();

	String joinEmail(String email);
	 public void mailSend(String setFrom, String toMail, String title, String content);
}
