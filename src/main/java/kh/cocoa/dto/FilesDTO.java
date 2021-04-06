package kh.cocoa.dto;

import java.sql.Date;

public class FilesDTO {
	private int seq;
	private String oriname;
	private String savedname;
	private Date uploadeddate;
	private String users_id; //프로필 외래키
	private int sub_hw_seq; //숙제 외래키, 게시판 외래키
	
	public FilesDTO() {
	}
	//파일-프로필 테이블 생성자.
	public FilesDTO(int seq, String oriname, String savedname, Date uploadeddate, String users_id) {
		super();
		this.seq = seq;
		this.oriname = oriname;
		this.savedname = savedname;
		this.uploadeddate = uploadeddate;
		this.users_id = users_id;
	}
	//숙제 , 게시판 테이블 생성자.
	public FilesDTO(int seq, String oriname, String savedname, Date uploadeddate, int sub_hw_seq) {
		super();
		this.seq = seq;
		this.oriname = oriname;
		this.savedname = savedname;
		this.uploadeddate = uploadeddate;
		this.sub_hw_seq = sub_hw_seq;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getOriname() {
		return oriname;
	}
	public void setOriname(String oriname) {
		this.oriname = oriname;
	}
	public String getSavedname() {
		return savedname;
	}
	public void setSavedname(String savedname) {
		this.savedname = savedname;
	}
	public Date getUploadeddate() {
		return uploadeddate;
	}
	public void setUploadeddate(Date uploadeddate) {
		this.uploadeddate = uploadeddate;
	}
	public String getUsers_id() {
		return users_id;
	}
	public void setUsers_id(String users_id) {
		this.users_id = users_id;
	}
	public int getSub_hw_seq() {
		return sub_hw_seq;
	}
	public void setSub_hw_seq(int sub_hw_seq) {
		this.sub_hw_seq = sub_hw_seq;
	}
	
	
}
