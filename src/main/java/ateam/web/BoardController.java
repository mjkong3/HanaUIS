package ateam.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import ateam.dto.BoardDTO;
import ateam.dto.ProfessorDTO;
import ateam.service.BoardService;
import ateam.service.ProfessorService;

@Controller
@RequestMapping(value="/notice")
public class BoardController {
	@Autowired
	private BoardService boardService;
	@Autowired
	public ProfessorService professorService;
	
	@RequestMapping(value="/notice.do")
	public String noticeView(Model model) {
		ProfessorDTO professor = professorService.selectProfessor(241111);
		model.addAttribute("professor", professor);

		List<BoardDTO> board = boardService.boardList();
		model.addAttribute("notice",board);
		return "hana/notice";
	}
	
	// 게시물 상세 페이지로 이동
	@RequestMapping(value="/noticeDetail.do")
	public String noticeDetail(@RequestParam("selectedNo") int no,
								Model model) {
		System.out.println("Controller noticeDetail 실행");	
		
		BoardDTO boardDTO = boardService.selectBoard(no);
		model.addAttribute("board", boardDTO);
		
		return "hana/noticeDetail";
	}
}
