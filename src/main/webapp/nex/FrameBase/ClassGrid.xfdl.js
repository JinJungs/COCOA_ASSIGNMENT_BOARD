(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ClassGrid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1118,1024);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsClass", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"start_date\" type=\"DATE\" size=\"256\"/><Column id=\"end_date\" type=\"DATE\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("dsGrid","40","110","1030","450",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsClass");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"chk\"/><Cell col=\"1\" text=\"code\"/><Cell col=\"2\" text=\"name\"/><Cell col=\"3\" text=\"start_date\"/><Cell col=\"4\" text=\"end_date\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:code\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:name\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:start_date\" displaytype=\"date\" edittype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\"/><Cell col=\"4\" text=\"bind:end_date\" displaytype=\"date\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","980","570","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","140","570","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("수업 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpdate","40","570","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","30","1040","61",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("수업관리");
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
        this.registerScript("ClassGrid.xfdl", function() {
        this.fn_callback = function(result)
        {
        	trace("OK");
        }
        this.fn_callback2 = function(result)
        {
        	trace("OK");
        	//this.alert("추가 성공");
        	this.reload();
        }

        this.ClassGrid_onload = function(obj,e)
        {
        	this.transaction(
          		"getClass" // id
          		, "/admin/getClass.nex" // url
        		, "" // inData
          		, "dsClass=out_ds" // outData
         		, ""// strArg
          		, "fn_callback" // callback
          	);
        };

        this.btnAdd_onclick = function(obj,e)
        {
        	let x = this.width/2 -150;
        	let y = this.height/2 -200;

        	var objCF = new ChildFrame();
        	objCF.init("insertpop", x, y, 300, 400);
        	objCF.set_formurl("FrameBase::ClassInsertPop.xfdl");

        	objCF.showModal(
        		this.getOwnerFrame()
        		,{}
        		,this
        		, "fn_callback_insertpop"
        	);
        };

        this.fn_callback_insertpop = function(id, sRtn)
        {
        	var arrRtn = sRtn.split("|");
        	var code = arrRtn[0];
        	var name = arrRtn[1];
        	var start_date = arrRtn[2];
        	var end_date = arrRtn[3];

         	this.transaction(
           		"insertClass" // id
           		, "/admin/insertClass.nex" // url
         		, "" // inData
           		, "" // outData
          		, "pcode="+code+" pname="+name+" pstart_date="+start_date+" pend_date="+end_date // strArg
           		, "fn_callback2" // callback
           	);
        }

        this.fn_callback_insertpop = function(id, sRtn)
        {
        	var arrRtn = sRtn.split("|");
        	var code = arrRtn[0];
        	var name = arrRtn[1];
        	var start_date = arrRtn[2];
        	var end_date = arrRtn[3];

         	this.transaction(
           		"insertClass" // id
           		, "/admin/insertClass.nex" // url
         		, "" // inData
           		, "" // outData
          		, "pcode="+code+" pname="+name+" pstart_date="+start_date+" pend_date="+end_date // strArg
           		, "fn_callback2" // callback
           	);
        }

        this.btnDelete_onclick = function(obj,e)
        {
        	let arr = this.dsClass.extractRows("chk==1");
        	if(arr.length == 0 || arr == -1) {alert("선택된 항목이 없습니다.");return}

         	this.dsClass.deleteMultiRows(arr);
         	this.transaction(
           		"classDelete" // id
           		, "/admin/classDelete.nex" // url
         		, "in_ds=dsClass:U" // inData
           		, "" // outData
          		, ""// strArg
           		, "fn_callback" // callback
           	);
        };

        this.btnUpdate_onclick = function(obj,e)
        {
        	this.transaction(
          		"classUpdate" // id
          		, "/admin/classUpdate.nex" // url
        		, "in_ds=dsClass:U" // inData
          		, "" // outData
         		, ""// strArg
          		, "fn_callback" // callback
          	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ClassGrid_onload,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnUpdate.addEventHandler("onclick",this.btnUpdate_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
        };

        this.loadIncludeScript("ClassGrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
