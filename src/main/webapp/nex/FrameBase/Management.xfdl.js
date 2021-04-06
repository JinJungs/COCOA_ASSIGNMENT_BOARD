(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Management");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"withdraw\" type=\"STRING\" size=\"256\"/><Column id=\"role\" type=\"INT\" size=\"256\"/><Column id=\"class_code\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdUsers","0","50","800","280",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsGrid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"seq\"/><Cell col=\"2\" text=\"pw\"/><Cell col=\"3\" text=\"name\"/><Cell col=\"4\" text=\"email\"/><Cell col=\"5\" text=\"phone\"/><Cell col=\"6\" text=\"withdraw\"/><Cell col=\"7\" text=\"role\"/><Cell col=\"8\" text=\"class_code\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:seq\"/><Cell col=\"2\" text=\"bind:pw\"/><Cell col=\"3\" text=\"bind:name\"/><Cell col=\"4\" text=\"bind:email\"/><Cell col=\"5\" text=\"bind:phone\"/><Cell col=\"6\" text=\"bind:withdraw\"/><Cell col=\"7\" text=\"bind:role\"/><Cell col=\"8\" text=\"bind:class_code\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staLogo","0","3","185","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("회원관리");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Management.xfdl", function() {
        this.fn_callback = function(result)
        {
        	trace("OK");
        }

        this.Management_onload = function(obj,e)
        {
        	this.transaction(
          		"getUsers" // id
          		, "/admin/getUsers.nex" // url
        		, "" // inData
          		, "dsGrid=out_ds" // outData
         		, ""// strArg
          		, "fn_callback" // callback
          	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Management_onload,this);
        };

        this.loadIncludeScript("Management.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
