package kh.cocoa.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.cocoa.dto.SubjectDTO;
import kh.cocoa.service.HwService;

@Controller
@RequestMapping("/sidebar")
public class SidebarController {

	@Autowired
	HttpSession session;

	@Autowired
	HwService hservice;

	@RequestMapping(value = "getSubjectName.sidebar", produces = "application/text; charset=UTF-8")
	@ResponseBody
	public String getSubjectName(String no) {
		System.out.println(no);
		JSONArray jArray = new JSONArray();
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		HashMap<String,Object> param = null;

		// 1. subject_seq와 subejct_name을 같이 가져와야한다.
		// 지금은 subject_name만 있음
		List<SubjectDTO> list = hservice.getSubjectInfo(us_id);

		// 2. list를 JSON Array로 바꿔준다.
		if(list.size()==0) {
			param = new HashMap<>();
			param.put("role", role);
			jArray.put(param);
		}else {
			for (int i = 0; i < list.size(); i++) {
				param = new HashMap<>();
				param.put("seq", list.get(i).getSeq());
				param.put("name", list.get(i).getName());
				jArray.put(param);
			}
			param.put("role", role);
			jArray.put(param);
		}

		return jArray.toString();
	}
}
