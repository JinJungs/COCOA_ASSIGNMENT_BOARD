package kh.cocoa.controller;

import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import kh.cocoa.dto.BoardDTO;
import kh.cocoa.service.BoardService;
import kh.cocoa.service.CommentsService;


@Controller
public class HomeController {
	@Autowired
	HttpSession session;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home() {
		
		String us_id = (String)session.getAttribute("login");
		System.out.println(us_id);
		if(us_id!=null) {
			return "redirect:/users/stillLogin.users";
		}
		return "member/login";
	}

	
}