(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Code");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ALL</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">CODE</Col><Col id=\"CODE_NM\">코드</Col></Row><Row><Col id=\"CODE\">CODE_NM</Col><Col id=\"CODE_NM\">코드명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeMstList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeMst", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchDTL", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"PT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeDTLList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeDTL", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Search","430","52","35","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","25","52","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_SearchType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","185","52","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst","25","88","475","174",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_CodeMstList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save","410","279","40","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","470","52","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Code","56","278","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Code_NM","255","278","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Code","29","272","27","43",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("코드");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Code_NM","200","275","55","39",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("코드명");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","460","278","49","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search00","958","52","35","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search00","553","52","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_SearchType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search00","713","52","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save00","938","279","40","31",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add00","998","52","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Code00","584","278","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Code_NM00","783","278","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Code00","557","272","27","43",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("코드");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Code_NM00","728","275","55","39",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("코드명");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete00","988","278","49","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst00","553","88","475","174",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_CodeDTLList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Title");
            obj.set_usedecorate("true");
            obj.set_font("24px/normal \"Arial Black\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("bind_01","cmb_Search","value","ds_Search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_02","edt_Search","value","ds_Search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_03","edt_Code","value","ds_CodeMst","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_04","edt_Code_NM","value","ds_CodeMst","CODE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cmb_Search00","value","ds_SearchDTL","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_Search00","value","ds_SearchDTL","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_Code00","value","ds_CodeDTL","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_Code_NM00","value","ds_CodeDTL","CODE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("student.xfdl", function() {
        /*************************************/
        /*******마스터 코드 이벤트  *******/
        /*************************************/
        this.Combo00_onitemchanged = function(obj,e)
        {

        };

        //처리콜백 함수
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
        		case "selectCodeMst":
        			break;
        		case "saveCodeMst":
        			this.fnSearch();
        			break;
        		case "deleteCodeMst":
        			this.fnSearch();
        			break;
        		case "saveCodeDTL":
        			this.fnSearchDTL();
        			break;
        		case "deleteCodeDTL":
        			this.fnSearchDTL();
        			break;
        		default :
        			break;
        	}
        };

        this.fnSearch = function(){
        	// 	console.log("cmb_Search =" + this.cmb_Search.value);
        	// 	console.log("edt_Search =" + this.edt_Search.value);

        	console.log("cmb_Search =" + this.ds_Search.getColumn(0,"SEARCH_TYPE"));
        	console.log("edt_Search =" + this.ds_Search.getColumn(0,"SEARCH_WORD"));
        	//alert("조회 버튼 클릭");

        	var strSvcId    = "selectCodeMst";
        	var strSvcUrl   = "svc::selectCodeMst.do";
        	var inData      = "ds_Search=ds_Search";
        	var outData     = "ds_CodeMstList=ds_CodeMstList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }

        this.btn_Search_onclick = function(obj,e)
        {
        	this.fnSearch();
        };


        this.Form_Code_onload = function(obj,e)
        {
        	this.ds_Search.setColumn(0,"SEARCH_TYPE","ALL");
        	this.ds_Search.setColumn(0,"SEARCH_TYPE","CODE");
        	this.ds_Search.setColumn(0,"SEARCH_TYPE","CODE_NM");

        	this.ds_Search.setColumn(0,"SEARCH_TYPE",this.ds_SearchType.getColumn(0,"CODE"));
        	this.edt_Code.set_readonly(true);
        	this.edt_Code_NM.set_readonly(true);
        	this.btn_Save.set_enable(false);
        	this.btn_Delete.set_enable(false);
        };

        this.btn_Add_onclick = function(obj,e)
        {
        	this.ds_CodeMst.setColumn(0,"CODE","");
        	this.ds_CodeMst.setColumn(0,"CODE_NM","");

        	this.edt_Code.set_readonly(false);
        	this.edt_Code_NM.set_readonly(false);
        	this.btn_Save.set_enable(true);
        	this.btn_Delete.set_enable(false);
        };

        this.btn_Save_onclick = function(obj,e)
        {

        	if(this.ds_CodeMst.getColumn(0,"CODE") == ''
        	 || this.ds_CodeMst.getColumn(0,"CODE") == 'undefined'
        	 || this.ds_CodeMst.getColumn(0,"CODE") == null) {
        		alert("코드를 입력해주세요.");
        		return;
        	}
        	if(this.ds_CodeMst.getColumn(0,"CODE_NM") == ''
        	 || this.ds_CodeMst.getColumn(0,"CODE_NM") == 'undefined'
        	 || this.ds_CodeMst.getColumn(0,"CODE_NM") == null) {
        		alert("코드명를 입력해주세요.");
        		return;
        	}
        	var strSvcId    = "saveCodeMst";
        	var strSvcUrl   = "svc::saveCodeMst.do";
        	var inData      = "ds_CodeMst=ds_CodeMst";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        this.btn_Delete_onclick = function(obj,e)
        {
        	var strSvcId    = "deleteCodeMst";
        	var strSvcUrl   = "svc::deleteCodeMst.do";
        	var inData      = "ds_CodeMst=ds_CodeMst";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        /*************************************/
        /*******   DATASET 이벤트     *******/
        /*************************************/

        this.ds_CodeMstList_onrowposchanged = function(obj,e)
        {
        	this.edt_Code.set_readonly(true);
        	this.edt_Code_NM.set_readonly(false);
        	this.btn_Save.set_enable(true);
        	this.btn_Delete.set_enable(true);

        	this.ds_CodeMst.setColumn(0,"CODE",obj.getColumn(obj.rowposition,"CODE"));
        	this.ds_CodeMst.setColumn(0,"CODE_NM",obj.getColumn(obj.rowposition,"CODE_NM"));

        	this.ds_SearchDTL.setColumn(0,"PT_CODE",obj.getColumn(obj.rowposition,"CODE"));
        	this.ds_CodeDTL.setColumn(0,"PT_CODE",obj.getColumn(obj.rowposition,"CODE"));

        	this.fnSearchDTL();
        };




        this.ds_CodeDTLList_onrowposchanged = function(obj,e)
        {
        	this.ds_CodeDTL.setColumn(0,"CODE",obj.getColumn(obj.rowposition,"CODE"));
        	this.ds_CodeDTL.setColumn(0,"CODE_NM",obj.getColumn(obj.rowposition,"CODE_NM"));
        };
        /*************************************/
        /*******세부 코드 이벤트     *******/
        /*************************************/


        this.btn_Search00_onclick = function(obj,e)
        {
        	this.fnSearchDTL();
        };

        this.btn_Add00_onclick = function(obj,e)
        {
        	this.ds_CodeDTL.setColumn(0,"CODE","");
        	this.ds_CodeDTL.setColumn(0,"CODE_NM","");

        	this.edt_Code.set_readonly(false);
        	this.edt_Code_NM.set_readonly(false);
        	this.btn_Save.set_enable(true);
        	this.btn_Delete.set_enable(false);
        };

        this.btn_Save00_onclick = function(obj,e)
        {
        	if(this.ds_CodeDTL.getColumn(0,"CODE") == ''
        	 || this.ds_CodeDTL.getColumn(0,"CODE") == 'undefined'
        	 || this.ds_CodeDTL.getColumn(0,"CODE") == null) {
        		alert("코드를 입력해주세요.");
        		return;
        	}
        	if(this.ds_CodeDTL.getColumn(0,"CODE_NM") == ''
        	 || this.ds_CodeDTL.getColumn(0,"CODE_NM") == 'undefined'
        	 || this.ds_CodeDTL.getColumn(0,"CODE_NM") == null) {
        		alert("코드명를 입력해주세요.");
        		return;
        	}
        	var strSvcId    = "saveCodeDTL";
        	var strSvcUrl   = "svc::saveCodeDTL.do";
        	var inData      = "ds_CodeDTL=ds_CodeDTL";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.btn_Delete00_onclick = function(obj,e)
        {
        	var strSvcId    = "deleteCodeDTL";
        	var strSvcUrl   = "svc::deleteCodeDTL.do";
        	var inData      = "ds_CodeDTL=ds_CodeDTL";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        this.fnSearchDTL = function(){
        	// 	console.log("cmb_Search =" + this.cmb_Search.value);
        	// 	console.log("edt_Search =" + this.edt_Search.value);

        	console.log("cmb_Search00 =" + this.ds_SearchDTL.getColumn(0,"SEARCH_TYPE"));
        	console.log("edt_Search00 =" + this.ds_SearchDTL.getColumn(0,"SEARCH_WORD"));

        	if(this.ds_SearchDTL.getColumn(0,"PT_CODE") == ''
        	 || this.ds_SearchDTL.getColumn(0,"PT_CODE") == 'undefined'
        	 || this.ds_SearchDTL.getColumn(0,"PT_CODE") == null) {
        		alert("마스터 코드를를 입력해주세요.");
        		return;

        	}

        	//alert("조회 버튼 클릭");

        	var strSvcId    = "selectCodeDTL";
        	var strSvcUrl   = "svc::selectCodeDTL.do";
        	var inData      = "ds_SearchDTL = ds_SearchDTL";
        	var outData     = "ds_CodeDTLList = ds_CodeDTLList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);



        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Code_onload,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.cmb_Search.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.edt_Search.addEventHandler("onchanged",this.edt_Search_onchanged,this);
            this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);
            this.btn_Search00.addEventHandler("onclick",this.btn_Search00_onclick,this);
            this.cmb_Search00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.edt_Search00.addEventHandler("onchanged",this.edt_Search00_onchanged,this);
            this.btn_Save00.addEventHandler("onclick",this.btn_Save00_onclick,this);
            this.btn_Add00.addEventHandler("onclick",this.btn_Add00_onclick,this);
            this.btn_Delete00.addEventHandler("onclick",this.btn_Delete00_onclick,this);
            this.ds_CodeMstList.addEventHandler("onrowposchanged",this.ds_CodeMstList_onrowposchanged,this);
            this.ds_CodeDTLList.addEventHandler("onrowposchanged",this.ds_CodeDTLList_onrowposchanged,this);
        };
        this.loadIncludeScript("student.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
