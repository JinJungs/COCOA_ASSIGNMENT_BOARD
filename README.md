# 📚 과제 제출 게시판 COCOA ASSIGNMENT



### 프로젝트 소개

학원 홈페이지에 과제 업로드시 느낀 여러가지 불편함을 해소하고자 기획한 게시판입니다. 개발목표는 다음과 같습니다.

- 과제를 제출 / 미제출한 사람을 강사가 쉽게 체크할 수 있다.
- 본인이 제출 한 과제를 쉽게 확인 가능하다.
- 강사와 학생의 게시글이 분리되어 있다.
- 게시판에서 모르는 내용을 서로 질문할 수 있다.



### 맡은 역할

과제제출 파트를 맡아 교사의 경우 과목을 생성, 수정, 삭제할 수 있고, 학생의 경우 과제를 생성, 수정, 삭제하는 파트를 담당하였다.




### 구현 기능

**사용자가 강사일 때**

-	과목 게시판 CRUD 및 색 변경

**사용자가 학생일 때**

-	내가 제출한 과제 목록 보기
-	`SummerNote Editor API`를 활용한 글쓰기(Create), 글 수정(update)
-	사진 `ajax`로 업로드
-	파일 업로드(저장), 리스트 불러오기, 다운로드



### 개발 환경

- Front-end : html, css, js
- Back-end : JAVA Spring Framework MVC2, Ajax
- Library : MyBatis, JSTL, jQuery, Json, Gson, Gmail API, SummerNote Editor API
- DB : Oracle (AWS RDS)
- 협업툴 : Notion
- Hosting : EC2



### 활용한 대표 기술

-	Spring Framework와 Mybatis를 활용한 CRUD
-	Json을 사용한 Ajax
-	SummerNote Editor API



### 개발 후 느낀점

새로운 에디터API를 사용하는 부분에서 어려움을 많이 겪었다. 기존 API를 튜닝(?) 해 가며 쓰는 과정이 머리 아프기도 했지만 한편으로는 재밌었다. 파일 업로드 및 다운로드 부분도 공부해보는 계기가 되었다.
