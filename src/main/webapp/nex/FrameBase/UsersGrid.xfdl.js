(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UsersGrid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1118,1024);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUsers", this);
            obj._setContents("<ColumnInfo><Column id=\"us_id\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"withdraw\" type=\"STRING\" size=\"256\"/><Column id=\"role\" type=\"INT\" size=\"256\"/><Column id=\"class_code\" type=\"INT\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnDelete","990","580","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("회원삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpdate","889","580","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","30","1040","61",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("회원관리");
            obj.set_font("bold 18px/normal \"Malgun Gothic\"");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Tab("tabUsers","40","110","1040","450",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_selectchangetype("up");
            obj.set_tabbuttonwidth("100");
            obj.set_border("1px solid #c0c0c0");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabUsers);
            obj.set_text("강사");
            this.tabUsers.addChild(obj.name, obj);

            obj = new Grid("grdUsers","0","0","1000","350",null,null,null,null,null,null,this.tabUsers.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsUsers");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"chk\"/><Cell col=\"1\" text=\"us_id\"/><Cell col=\"2\" text=\"seq\"/><Cell col=\"3\" text=\"pw\"/><Cell col=\"4\" text=\"name\"/><Cell col=\"5\" text=\"email\"/><Cell col=\"6\" text=\"phone\"/><Cell col=\"7\" text=\"withdraw\"/><Cell col=\"8\" text=\"role\"/><Cell col=\"9\" text=\"class_code\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:us_id\"/><Cell col=\"2\" text=\"bind:seq\"/><Cell col=\"3\" text=\"bind:pw\"/><Cell col=\"4\" text=\"bind:name\"/><Cell col=\"5\" text=\"bind:email\"/><Cell col=\"6\" text=\"bind:phone\"/><Cell col=\"7\" text=\"bind:withdraw\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:role\" edittype=\"mask\" maskeditformat=\"0\"/><Cell col=\"9\" text=\"bind:class_code\" edittype=\"mask\" maskeditformat=\"0000\"/></Band></Format></Formats>");
            this.tabUsers.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnUnreg","10","370","90","40",null,null,null,null,null,null,this.tabUsers.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("미등록");
            this.tabUsers.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tabUsers);
            obj.set_text("학생");
            this.tabUsers.addChild(obj.name, obj);

            obj = new Grid("grdUsers","0","0","1020","350",null,null,null,null,null,null,this.tabUsers.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsUsers");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"us_id\"/><Cell col=\"2\" text=\"seq\"/><Cell col=\"3\" text=\"pw\"/><Cell col=\"4\" text=\"name\"/><Cell col=\"5\" text=\"email\"/><Cell col=\"6\" text=\"phone\"/><Cell col=\"7\" text=\"withdraw\"/><Cell col=\"8\" text=\"role\"/><Cell col=\"9\" text=\"class_code\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:us_id\"/><Cell col=\"2\" text=\"bind:seq\"/><Cell col=\"3\" text=\"bind:pw\"/><Cell col=\"4\" text=\"bind:name\"/><Cell col=\"5\" text=\"bind:email\"/><Cell col=\"6\" text=\"bind:phone\"/><Cell col=\"7\" text=\"bind:withdraw\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:role\" edittype=\"mask\" maskeditformat=\"0\"/><Cell col=\"9\" text=\"bind:class_code\" edittype=\"mask\" maskeditformat=\"0000\"/></Band></Format></Formats>");
            this.tabUsers.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btnUnreg","10","370","90","40",null,null,null,null,null,null,this.tabUsers.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("미등록");
            this.tabUsers.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tabUsers);
            obj.set_text("전체");
            this.tabUsers.addChild(obj.name, obj);

            obj = new Grid("grdUsers","0","0","1020","350",null,null,null,null,null,null,this.tabUsers.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsUsers");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"us_id\"/><Cell col=\"2\" text=\"seq\"/><Cell col=\"3\" text=\"pw\"/><Cell col=\"4\" text=\"name\"/><Cell col=\"5\" text=\"email\"/><Cell col=\"6\" text=\"phone\"/><Cell col=\"7\" text=\"withdraw\"/><Cell col=\"8\" text=\"role\"/><Cell col=\"9\" text=\"class_code\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:us_id\"/><Cell col=\"2\" text=\"bind:seq\"/><Cell col=\"3\" text=\"bind:pw\"/><Cell col=\"4\" text=\"bind:name\"/><Cell col=\"5\" text=\"bind:email\"/><Cell col=\"6\" text=\"bind:phone\"/><Cell col=\"7\" text=\"bind:withdraw\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:role\" edittype=\"mask\" maskeditformat=\"0\"/><Cell col=\"9\" text=\"bind:class_code\" edittype=\"mask\" maskeditformat=\"0000\"/></Band></Format></Formats>");
            this.tabUsers.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btnUnreg","10","370","90","40",null,null,null,null,null,null,this.tabUsers.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("미등록");
            this.tabUsers.Tabpage3.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1118,1024,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("UsersGrid.xfdl", function() {
        this.fn_callback = function(result)
        {
        	trace("OK");
        }

        this.fn_callback2 = function(result)
        {
        	trace("OK");
        	this.reload();
        }

        this.UsersGrid_onload = function(obj,e)
        {
        	this.transaction(
          		"getUsers" // id
          		, "/admin/getProf.nex" // url
        		, "" // inData
          		, "dsUsers=out_ds" // outData
         		, ""// strArg
          		, "fn_callback" // callback
          	);
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	let arr = this.dsUsers.extractRows("chk==1");
        	if(arr.length == 0 || arr == -1) {alert("선택된 항목이 없습니다.");return}

        	this.transaction(
           		"usersDelete" // id
           		, "/admin/usersDelete.nex" // url
         		, "in_ds=dsUsers:U" // inData
           		, "" // outData
          		, ""// strArg
           		, "fn_callback2" // callback
           	);
        };

        this.btnUpdate_onclick = function(obj,e)
        {
        	this.transaction(
          		"usersUpdate" // id
          		, "/admin/usersUpdate.nex" // url
        		, "in_ds=dsUsers:U" // inData
          		, "" // outData
         		, ""// strArg
          		, "fn_callback" // callback
          	);
        };

        this.tabUsers_onchanged = function(obj,e)
        {
        	if(this.tabUsers.tabindex == 0)
        	{
        		this.transaction(
        			"getProf" // id
        			, "/admin/getProf.nex" // url
        			, "" // inData
        			, "dsUsers=out_ds" // outData
        			, ""// strArg
        			, "fn_callback" // callback
        		);
        	}
        	else if(this.tabUsers.tabindex == 1)
        	{
        		this.transaction(
        			"getStud" // id
        			, "/admin/getStud.nex" // url
        			, "" // inData
        			, "dsUsers=out_ds" // outData
        			, ""// strArg
        			, "fn_callback" // callback
        		);
        	}
        	else if(this.tabUsers.tabindex == 2)
        	{
        		this.transaction(
        			"getUsers" // id
        			, "/admin/getUsers.nex" // url
        			, "" // inData
        			, "dsUsers=out_ds" // outData
        			, ""// strArg
        			, "fn_callback" // callback
        		);
        	}
        };

        this.tabUsers_Tabpage1_btnUnreg_onclick = function(obj,e)
        {
        	this.transaction(
          		"getUnregProf" // id
          		, "/admin/getUnregProf.nex" // url
        		, "" // inData
          		, "dsUsers=out_ds" // outData
         		, ""// strArg
          		, "fn_callback" // callback
          	);
        };

        this.tabUsers_Tabpage2_btnUnreg_onclick = function(obj,e)
        {
        	this.transaction(
          		"getUnregStud" // id
          		, "/admin/getUnregStud.nex" // url
        		, "" // inData
          		, "dsUsers=out_ds" // outData
         		, ""// strArg
          		, "fn_callback" // callback
          	);
        };

        this.tabUsers_Tabpage3_btnUnreg_onclick = function(obj,e)
        {
        	this.transaction(
          		"getUnregUsers" // id
          		, "/admin/getUnregUsers.nex" // url
        		, "" // inData
          		, "dsUsers=out_ds" // outData
         		, ""// strArg
          		, "fn_callback" // callback
          	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.UsersGrid_onload,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnUpdate.addEventHandler("onclick",this.btnUpdate_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.tabUsers.addEventHandler("onchanged",this.tabUsers_onchanged,this);
            this.tabUsers.Tabpage1.form.btnUnreg.addEventHandler("onclick",this.tabUsers_Tabpage1_btnUnreg_onclick,this);
            this.tabUsers.Tabpage2.form.btnUnreg.addEventHandler("onclick",this.tabUsers_Tabpage2_btnUnreg_onclick,this);
            this.tabUsers.Tabpage3.form.btnUnreg.addEventHandler("onclick",this.tabUsers_Tabpage3_btnUnreg_onclick,this);
        };

        this.loadIncludeScript("UsersGrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
