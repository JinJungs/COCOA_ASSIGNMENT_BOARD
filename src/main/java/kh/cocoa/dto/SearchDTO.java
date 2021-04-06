package kh.cocoa.dto;

public class SearchDTO {
	// if s = s : searched list / x : all list
		private String s = "x";
		private String searchBy;
		private String search;
		public SearchDTO() {
			super();
		}
		public SearchDTO(String s, String searchBy, String search) {
			super();
			this.s = s;
			this.searchBy = searchBy;
			this.search = search;
		}
		public String getS() {
			return s;
		}
		public void setS(String s) {
			this.s = s;
		}
		public String getSearchBy() {
			return searchBy;
		}
		public void setSearchBy(String searchBy) {
			this.searchBy = searchBy;
		}
		public String getSearch() {
			return search;
		}
		public void setSearch(String search) {
			this.search = search;
		}	
}
