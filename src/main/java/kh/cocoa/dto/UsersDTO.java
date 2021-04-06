package kh.cocoa.dto;

public class UsersDTO {
	private String chk = "0";
	private String us_id;
	private int seq;
	private String pw;
	private String name;
	private String email;
	private String phone;
	private String withdraw;
	private int role;
	private int class_code;
	public UsersDTO() {
	}
	
	public UsersDTO(String us_id, int seq, String pw, String name, String email, String phone, String withdraw,
			int role, int class_code) {
		super();
		this.us_id = us_id;
		this.seq = seq;
		this.pw = pw;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.withdraw = withdraw;
		this.role = role;
		this.class_code = class_code;
	}
	
	
	public String getChk() {
		return chk;
	}

	public void setChk(String chk) {
		this.chk = chk;
	}

	public String getUs_id() {
		return us_id;
	}
	public void setUs_id(String us_id) {
		this.us_id = us_id;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
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
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getWithdraw() {
		return withdraw;
	}
	public void setWithdraw(String withdraw) {
		this.withdraw = withdraw;
	}
	public int getRole() {
		return role;
	}
	public void setRole(int role) {
		this.role = role;
	}
	public int getClass_code() {
		return class_code;
	}
	public void setClass_code(int class_code) {
		this.class_code = class_code;
	}
	
	
	

	
}
