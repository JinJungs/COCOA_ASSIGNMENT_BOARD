(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LeftBar");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(160,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grdLeft","0","30","160","870",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("gds_menu");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"148\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\" cssclass=\"expr:MENU_LEVEL ==&quot;1&quot; ? &quot;cell_LF_Level1&quot; : &quot;&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staMenu","0","0","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Menu");
            obj.set_textAlign("center");
            obj.set_background("#2754A7");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",160,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("LeftBar.xfdl", function() {
        this.objApp = nexacro.getApplication;

        this.grdLeft_oncelldblclick = function(obj,e)
        {
        	var menuId = nexacro.getApplication().gds_menu.getColumn(e.row, "MENU_ID");

        	this.fn_openForm(menuId);
        };

        this.fn_openForm = function(menuId)
        {
        	var objApp = nexacro.getApplication();
        	// 비밀번호 변경
        	if(menuId == 10)
        	{
        		objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("*,0,0,0");
        	}
        	// 수업 관리
        	else if(menuId == 20)
        	{
        		objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("0,0,*,0");
        	}
        	// 강사관리
        	else if(menuId == 30)
        	{
        		objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("0,0,0,*");
        	}
        	// 학생관리
        	else if(menuId == 40)
        	{
        		objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("0,*,0,0");
        	}
        	// 로그아웃
        	else if(menuId == 50)
        	{
        		var result;
        		result = objApp.confirm("로그아웃 하시겠습니까", "LogOut", "error");
        		if(result == true)
        		{
        			objApp.mainframe.VFrameSet00.set_separatesize("*,0");
        			objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("*,0,0,0");
        			this.transaction(
        				"logout" // id
        				, "/admin/logout.nex" // url
        				, "" // inData
        				, "" // outData
        				, "" // strArg
        				, "fn_callback" // callback
        			);
        		}else if(result == false)
        		{
        			return;
        		}
        	}
        }

        this.fn_callback = function(ErrorCode)
        {
        	if(ErrorCode == -1)
        	{
        		this.alert("Error");
        	}
        }

        this.grdLeft_oncellclick = function(obj,e)
        {
        	var menuId = nexacro.getApplication().gds_menu.getColumn(e.row, "MENU_ID");

        	this.fn_openForm(menuId);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grdLeft.addEventHandler("oncelldblclick",this.grdLeft_oncelldblclick,this);
            this.grdLeft.addEventHandler("oncellclick",this.grdLeft_oncellclick,this);
        };

        this.loadIncludeScript("LeftBar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
