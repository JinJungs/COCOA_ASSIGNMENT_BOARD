(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CreateIDCode");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1118,1024);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"auth_id\" type=\"STRING\" size=\"256\"/><Column id=\"users_id\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnAdd","990","580","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Auth ID 생성");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAuth","40","110","1030","450",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsAuth");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"320\"/><Column size=\"480\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"auth_id\"/><Cell col=\"1\" text=\"users_id\"/></Band><Band id=\"body\"><Cell text=\"bind:auth_id\"/><Cell col=\"1\" text=\"bind:users_id\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","30","1040","61",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("강사 Auth_ID 생성");
            obj.set_font("bold 18px/normal \"Malgun Gothic\"");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            this.addChild(obj.name, obj);

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
        this.registerScript("CreateIDCode.xfdl", function() {
        this.fn_callback = function(result)
        {
        	trace("OK");
        }

        this.fn_callback2 = function(result)
        {
        	trace("OK");
        	this.reload();
        }

        this.CreateIDCode_onload = function(obj,e)
        {
        	this.transaction(
          		"getAuth" // id
          		, "/admin/getAuth.nex" // url
        		, "" // inData
          		, "dsAuth=out_ds" // outData
         		, ""// strArg
          		, "fn_callback" // callback
          	);
        };

        this.btnAdd_onclick = function(obj,e)
        {
        	this.transaction(
          		"insertAuth" // id
          		, "/admin/insertAuth.nex" // url
        		, "" // inData
          		, "" // outData
         		, ""// strArg
          		, "fn_callback2" // callback
          	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CreateIDCode_onload,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
        };

        this.loadIncludeScript("CreateIDCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
