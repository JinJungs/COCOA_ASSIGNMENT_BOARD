package kh.cocoa.dto;

public class Std_ViewDTO {
	private String us_id;
	private String name;
	private String email;
	private String class_code;
	private int std_submit;
	private int list_seq;
	public Std_ViewDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Std_ViewDTO(String us_id, String name, String email, String class_code, int std_submit, int list_seq) {
		super();
		this.us_id = us_id;
		this.name = name;
		this.email = email;
		this.class_code = class_code;
		this.std_submit = std_submit;
		this.list_seq = list_seq;
	}
	public int getList_seq() {
		return list_seq;
	}
	public void setList_seq(int list_seq) {
		this.list_seq = list_seq;
	}
	public String getUs_id() {
		return us_id;
	}
	public void setUs_id(String us_id) {
		this.us_id = us_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getClass_code() {
		return class_code;
	}
	public void setClass_code(String class_code) {
		this.class_code = class_code;
	}
	public int getStd_submit() {
		return std_submit;
	}
	public void setStd_submit(int std_submit) {
		this.std_submit = std_submit;
	}	
	
}
