(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
            // global dataset
            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">비밀번호 변경</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">FrameBase::UpdatePw.xfdl</Col></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">수업관리</Col></Row><Row><Col id=\"MENU_ID\">30</Col><Col id=\"MENU_NAME\">강사 Auth_ID 생성</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">40</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">회원관리</Col></Row><Row><Col id=\"MENU_ID\">50</Col><Col id=\"MENU_NAME\">로그아웃</Col><Col id=\"MENU_LEVEL\">0</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("state","0");
            this._addVariable("result","0");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","1024",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("코코아 관리자");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        

            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,this);
            frame0.set_showtitleicon("false");
            frame0.set_showtitlebar("false");
            frame0.set_separatesize("*,0");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("LoginFrame",null,null,null,null,null,null,"FrameBase::Login.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("FrameBase::Login.xfdl");


            var frame2 = new HFrameSet("HFrameSet00",null,null,null,null,null,null,frame0);
            frame2.set_showtitlebar("false");
            frame2.set_separatesize("160,*");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("LeftBarFrame",null,null,null,null,null,null,"FrameBase::LeftBar.xfdl",frame2);
            frame3.set_showtitlebar("false");
            frame3.set_showtitleicon("false");
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("FrameBase::LeftBar.xfdl");


            var frame4 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,frame2);
            frame4.set_showtitlebar("false");
            frame4.set_showtitleicon("false");
            frame4.set_separatesize("*,0,0,0");
            frame2.addChild(frame4.name, frame4);

            var frame5 = new ChildFrame("ChildFrame00",null,null,null,null,null,null,"FrameBase::UpdatePw.xfdl",frame4);
            frame5.set_showtitlebar("false");
            frame5.set_showtitleicon("false");
            frame4.addChild(frame5.name, frame5);
            frame5.set_formurl("FrameBase::UpdatePw.xfdl");


            var frame6 = new ChildFrame("ChildFrame01",null,null,null,null,null,null,"FrameBase::UsersGrid.xfdl",frame4);
            frame6.set_showtitlebar("false");
            frame6.set_showtitleicon("false");
            frame4.addChild(frame6.name, frame6);
            frame6.set_formurl("FrameBase::UsersGrid.xfdl");


            var frame7 = new ChildFrame("ChildFrame02",null,null,null,null,null,null,"FrameBase::ClassGrid.xfdl",frame4);
            frame7.set_showtitlebar("false");
            frame7.set_showtitleicon("false");
            frame4.addChild(frame7.name, frame7);
            frame7.set_formurl("FrameBase::ClassGrid.xfdl");


            var frame8 = new ChildFrame("ChildFrame03",null,null,null,null,null,null,"FrameBase::CreateIDCode.xfdl",frame4);
            frame8.set_topmost("false");
            frame8.set_showtitlebar("false");
            frame8.set_showtitleicon("false");
            frame4.addChild(frame8.name, frame8);
            frame8.set_formurl("FrameBase::CreateIDCode.xfdl");
        };
        
        this.on_initEvent = function()
        {

        };
        
        // script Compiler


        this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
