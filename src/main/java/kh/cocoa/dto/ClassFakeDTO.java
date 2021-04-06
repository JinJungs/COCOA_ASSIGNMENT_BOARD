package kh.cocoa.dto;

public class ClassFakeDTO {
	private int code;
	private String name;
	private String start_date;
	private String end_date;
	public ClassFakeDTO() {}
	public ClassFakeDTO(int code, String name, String start_date, String end_date) {
		super();
		this.code = code;
		this.name = name;
		this.start_date = start_date;
		this.end_date = end_date;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getStart_date() {
		return start_date;
	}
	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}
	public String getEnd_date() {
		return end_date;
	}
	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}
}
