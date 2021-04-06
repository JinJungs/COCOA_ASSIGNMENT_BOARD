(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UpdatePw");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1118,1024);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divModfPw","40","100","500","126",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPW","0","25","360","70",null,null,null,null,null,null,this.divModfPw.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("변경할 PW를 입력하세요.");
            obj.set_password("true");
            this.divModfPw.addChild(obj.name, obj);

            obj = new Button("btnModf","370","25","80","70",null,null,null,null,null,null,this.divModfPw.form);
            obj.set_taborder("1");
            obj.set_text("변경");
            obj.set_background("#2856AA");
            obj.set_font("18px/normal \"Malgun Gothic\"");
            this.divModfPw.addChild(obj.name, obj);

            obj = new Static("Static00","40","30","1040","61",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("비밀번호 변경");
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
        this.registerScript("UpdatePw.xfdl", function() {
        this.fn_callback = function(result)
        {
        	trace(result);
        	this.alert("비밀번호가 변경되었습니다.");
        }
        this.divModfPw_btnModf_onclick = function(obj,e)
        {
        	let pw = this.divModfPw.form.edtPW.value;

        	this.transaction(
          		"updatePw" // id
          		, "/admin/updatePw.nex" // url
        		, "" // inData
          		, "" // outData
         		, "pw="+pw// strArg
          		, "fn_callback" // callback
          	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divModfPw.form.btnModf.addEventHandler("onclick",this.divModfPw_btnModf_onclick,this);
        };

        this.loadIncludeScript("UpdatePw.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
