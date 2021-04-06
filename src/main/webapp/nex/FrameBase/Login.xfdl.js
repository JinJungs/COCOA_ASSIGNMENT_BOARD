(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Login");
            this.set_titletext("New Form");
            this.set_background("#3C62A8");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1024);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divLogin","31.25%","30.96%","480","390",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_borderRadius("7px");
            obj.set_background("white");
            obj.set_boxShadow("2px 2px 10px #19149d");
            this.addChild(obj.name, obj);

            obj = new Static("staLogo","94","63","290","55",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_text("관리자 로그인");
            obj.set_textAlign("center");
            obj.set_font("bold 16px/normal \"Gulim\"");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtID","39","143","400","51",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("ID를 입력하세요.");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtPW","39","202","400","53",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("PW를 입력하세요.");
            obj.set_password("true");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","40","263","398","54",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_text("로그인");
            obj.set_cssclass("btn_WF_Add");
            obj.set_background("#3A6CCA");
            obj.set_font("18px/normal \"Malgun Gothic\"");
            this.divLogin.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,1024,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Login.xfdl", function() {
        this.fn_callback = function(state)
        {
        	/* state :
        	 * -1 -> 로그인 실패
        	 * 1 -> 로그인 성공
        	 * 그 이외 -> 오류
        	 */
        	if(nexacro.getApplication().state == -1){
        		this.alert("Login Fail");
        		this.reload();
        	}
        	else if(nexacro.getApplication().state == 1){
        		trace("Success");
        		var objApp = nexacro.getApplication();
        		objApp.mainframe.VFrameSet00.set_separatesize("0,*");
        		this.reload();
        	}
        	else{
        		trace("error");
        		this.alert("Error");
        		this.reload();
        	}
        }

        this.divLogin_btnLogin_onclick = function(obj,e)
        {
        	let id = this.divLogin.form.edtID.value;
        	let pw = this.divLogin.form.edtPW.value;

          	this.transaction(
          		"login" // id
          		, "/admin/login.nex" // url
        		, "" // inData
          		, "" // outData
         		, "id="+id+" pw="+pw // strArg
          		, "fn_callback" // callback
          	);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Login_onload,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
        };

        this.loadIncludeScript("Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
