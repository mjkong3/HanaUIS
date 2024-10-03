(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("classroomadd");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(516,340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_classroom", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASSROOM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSROOM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_PEOPLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_trans", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASSROOM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSROOM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_PEOPLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_classroom","0","0","516","291",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_classroom");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"132\"/><Column size=\"241\"/><Column size=\"134\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"강의실 코드\"/><Cell col=\"1\" text=\"강의실\"/><Cell col=\"2\" text=\"정원\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" displaytype=\"expr:CLASSROOM_ID==null ? &apos;imagecontrol&apos; : &apos;text&apos;\" text=\"expr:CLASSROOM_ID ==null ? &apos;image::plusbtn.png&apos; : CLASSROOM_ID\" imagestretch=\"fixaspectratio\"/><Cell col=\"1\" text=\"bind:CLASSROOM_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MAX_PEOPLE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","380","300","60","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","450","300","60","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_maxpeople","280","300","84","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_classname","112","300","158","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_classcode","10","300","90","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",516,340,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_classcode","value","ds_trans","CLASSROOM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_classname","value","ds_trans","CLASSROOM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_maxpeople","value","ds_trans","MAX_PEOPLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("classroomadd.xfdl", function() {

        this.classroomadd_onload = function(obj,e)
        {
        // 	var objParam1 = this.parent.param1;
        // 	this.ds_classroom.copyData(objParam1);
        	this.fn_classroom();
        };

        this.ds_classroom_onrowposchanged = function(obj,e)
        {
        	this.edt_classcode.set_value(this.ds_classroom.getColumn(this.ds_classroom.rowposition,"CLASSROOM_ID"));
        	this.edt_classname.set_value(this.ds_classroom.getColumn(this.ds_classroom.rowposition,"CLASSROOM_NAME"));
        	this.edt_maxpeople.set_value(this.ds_classroom.getColumn(this.ds_classroom.rowposition,"MAX_PEOPLE"));
        	if(this.ds_classroom.getColumn(this.ds_classroom.rowposition,"CLASSROOM_ID") == null){
        		this.edt_classcode.set_readonly(false);
        	}
        	else{
        		this.edt_classcode.set_readonly(true);
        	}
        };

        this.btn_insert_onclick = function(obj,e)
        {
        	if(this.edt_classcode.value == null || this.edt_classname.value == null || this.edt_maxpeople == null){
        		this.alert("빈 값이 존재합니다.");
        	}
        	else{
        		this.fn_save();
        	}
        };

        this.btn_delete_onclick = function(obj,e)
        {
        	if(this.edt_classcode.value == null || this.edt_classname.value == null || this.edt_maxpeople == null){
        		this.alert("빈 값이 입니다.");
        	}
        	else if(confirm("삭제하시겠습니까?")){
        		this.fn_delete();
        	}
        	else{
        		alert("예상치 못한 오류가 발생했습니다.");
        	}
        };

        /****************************************************/
        /*                    콜백함수                     */
        /****************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode == -1)
        	{
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        		case "SelectAdminClassroom2":
        			this.ds_classroom.addRow();
        			//this.grd_classroom.set
        			//this.grd_classroom.setCellProperty("body", this.ds_classroom.rowcount-1, "displaytype", "imagecontrol");
        			break;
        		case "saveAdminClassroom":
        			this.fn_classroom();
        			break;
        		case "deleteAdminClassroom":
        			this.fn_classroom();
        			break;
        		default:
        	}
        };


        /****************************************************/
        /*                    트랜젝션                     */
        /****************************************************/
        this.fn_save = function(){

        	var strSvcId    = "saveAdminClassroom";
        	var strSvcUrl   = "svc::saveAdminClassroom.do";
        	var inData      = "ds_trans = ds_trans";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }
        this.fn_delete = function(){

        	var strSvcId    = "deleteAdminClassroom";
        	var strSvcUrl   = "svc::deleteAdminClassroom.do";
        	var inData      = "ds_trans = ds_trans";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }
        this.fn_classroom = function(){
        	var strSvcId    = "SelectAdminClassroom2";
        	var strSvcUrl   = "svc::SelectAdminClassroom2.do";
        	var inData      = "";
        	var outData     = "ds_classroom=ds_classroom";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.classroomadd_onload,this);
            this.btn_insert.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.ds_classroom.addEventHandler("onrowposchanged",this.ds_classroom_onrowposchanged,this);
        };
        this.loadIncludeScript("classroomadd.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
