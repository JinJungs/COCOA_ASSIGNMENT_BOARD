(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ClassInsertPop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staLogo","34","44","234","52",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("수업 추가");
            obj.set_font("bold 18px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staCode","30","100","64","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("수업코드");
            this.addChild(obj.name, obj);

            obj = new Static("staName","30","144","64","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("수업이름");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","94","146","156","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("이름을 입력하세요");
            this.addChild(obj.name, obj);

            obj = new Static("staStart","30","190","64","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("시작일");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.addChild(obj.name, obj);

            obj = new Static("staEnd","30","233","64","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("종료일");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","79","305","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Ok");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","160","305","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Cancel");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCode","94","104","156","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displaynulltext("코드입력");
            obj.set_type("string");
            obj.set_format("####");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskStart","94","192","156","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_format("####-##-##");
            obj.set_displaynulltext("YYYYMMDD");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskEnd","94","235","156","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_format("####-##-##");
            obj.set_displaynulltext("YYYYMMDD");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ClassInsertPop.xfdl", function() {

        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnOk_onclick = function(obj,e)
        {
        	var code = this.mskCode.value;
        	var name = this.edtName.value;
        	var start = this.mskStart.value;
        	var end = this.mskEnd.value;

        	if(code!=null && name!=null && start!=null && end!=null)
        	{
        		var sRtn = code + "|" + name + "|" + start + "|" + end;
        		this.close(sRtn);
        	}
        	else
        	{
        		this.alert("모든 항목을 입력해야합니다.")
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };

        this.loadIncludeScript("ClassInsertPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
