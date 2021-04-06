package kh.cocoa.dto;

public class AuthDTO {
	private String chk = "0";
	private String auth_id;
	private String users_id;
	public AuthDTO() {}
	public AuthDTO(String chk, String auth_id, String users_id) {
		super();
		this.chk = chk;
		this.auth_id = auth_id;
		this.users_id = users_id;
	}
	public AuthDTO(String auth_id, String users_id) {
		super();
		this.auth_id = auth_id;
		this.users_id = users_id;
	}
	public String getChk() {
		return chk;
	}
	public void setChk(String chk) {
		this.chk = chk;
	}
	public String getAuth_id() {
		return auth_id;
	}
	public void setAuth_id(String auth_id) {
		this.auth_id = auth_id;
	}
	public String getUsers_id() {
		return users_id;
	}
	public void setUsers_id(String users_id) {
		this.users_id = users_id;
	}
}
