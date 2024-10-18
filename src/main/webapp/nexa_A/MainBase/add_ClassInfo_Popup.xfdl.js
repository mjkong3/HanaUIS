(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("add_ClassInfo_Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(960,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_proId", this);
            obj._setContents("<ColumnInfo><Column id=\"PROFESSOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_semester", this);
            obj._setContents("<ColumnInfo><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEMESTER\">1</Col><Col id=\"data\">1학기</Col></Row><Row><Col id=\"SEMESTER\">2</Col><Col id=\"data\">2학기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_clsgrade", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CLASS_GRADE\">1</Col><Col id=\"data\">1학점</Col></Row><Row><Col id=\"CLASS_GRADE\">2</Col><Col id=\"data\">2학점</Col></Row><Row><Col id=\"CLASS_GRADE\">3</Col><Col id=\"data\">3학점</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_clstype", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CLASS_TYPE\">전공필수</Col><Col id=\"data\">전공필수</Col></Row><Row><Col id=\"CLASS_TYPE\">전공선택</Col><Col id=\"data\">전공선택</Col></Row><Row><Col id=\"CLASS_TYPE\">교양필수</Col><Col id=\"data\">교양필수</Col></Row><Row><Col id=\"CLASS_TYPE\">교양선택</Col><Col id=\"data\">교양선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_START\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_END\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSROOM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROFESSOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CRE_USR\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_USR\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reClass", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_getProId", this);
            obj._setContents("<ColumnInfo><Column id=\"PROFESSOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_getDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","169","257","590","293",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("#e7e7e8");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00","540","159","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00","266","159","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","540","111","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","540","62","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00","266","111","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","266","62","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","540","13","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","266","13","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","169","13","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   강의명");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","169","62","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","442","13","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   교수명");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","442","62","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   개설학과");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","442","159","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   종강일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","169","111","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이수학점");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","169","159","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   개강일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","442","111","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이수구분");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ClassName","277","23","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_displaynulltext("강의명을 입력하세요");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Dept","551","71","195","31",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_readonly("false");
            obj.set_displaynulltext("학과를 선택해주세요");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","370","560","77","38",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_LastDay","551","169","195","31",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_FirstDay","277","169","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_ClsInfo","180","295","569","235",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_wordWrap("english");
            obj.set_scrollbartype("auto auto");
            obj.set_scrolltype("vertical");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00_00_00","180","257","569","39",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("강의 상세");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ClsType","551","121","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_clstype");
            obj.set_codecolumn("CLASS_TYPE");
            obj.set_datacolumn("data");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ClsGrade","277","121","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_clsgrade");
            obj.set_codecolumn("CLASS_GRADE");
            obj.set_datacolumn("data");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Semester","277","72","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_semester");
            obj.set_datacolumn("data");
            obj.set_codecolumn("SEMESTER");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ProId","551","23","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_proId");
            obj.set_codecolumn("PROFESSOR_ID");
            obj.set_datacolumn("NAME");
            obj.set_displaynulltext("교수를 선택해주세요");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01","169","208","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   등록ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01_00","442","208","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   강의실");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_01","266","208","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00_00","540","208","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Admin","277","218","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_cssclass("edt_Adr");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ClsRoom","551","218","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_displaynulltext("강의실 관리에서 배정 필요");
            obj.set_cssclass("cmb_readonly");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close","473","560","77","38",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",960,620,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt_ClassName","value","ds_class","CLASS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cmb_Semester","value","ds_class","SEMESTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cmb_Dept","value","ds_class","DEPARTMENT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cmb_ClsGrade","value","ds_class","CLASS_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cmb_ClsType","value","ds_class","CLASS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cal_FirstDay","value","ds_class","CLASS_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cal_LastDay","value","ds_class","CLASS_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_Admin","value","ds_class","CRE_USR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","txt_ClsInfo","value","ds_class","CLASS_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cmb_ProId","value","ds_class","PROFESSOR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("add_ClassInfo_Popup.xfdl", function() {
        // 필요한 기능
        // 1. 화면호출 - default 값 설정 + param 받기 + 초기화용 ds 카피
        // 2. 등록 - insert문 실행
        // 3. 초기화버튼
        // 4. 유효성 검사
        // 6. 콜백함수

        // 1. 화면호출
        this.add_ClassInfo_Popup_onload = function(obj,e)
        {
        	// dept ds 받아오기
        	var objParam1 = this.parent.param1;

        	// 부모폼에서 현재 선택한 dept grd의 rowposition을 기반으로 dept값 받아오기
            var deptCode = this.parent.deptCode;

        	// dept 정보를 해당폼 dept ds에 복사 - ds가 서로 동일해야 가능!
        	this.ds_dept.copyData(objParam1);

        	// 콤보박스에 받아온 부모폼의 사용자 선택 dept code 넣기
        	// ds의 setColum으로는 rowposition 문제로 전체학과는 출력이 안됨
        	this.cmb_Dept.set_value(deptCode);

        	// gds 호출로 등록일, 등록자 넣기
        	this.fn_getGds();

        	// cmb box 기본값 설정
        	this.ds_class.setColumn(0, "SEMESTER", "1");
        	this.ds_class.setColumn(0, "CLASS_GRADE", "3");
        	this.ds_class.setColumn(0, "CLASS_TYPE", "전공필수");

        	// 초기화용 ds 카피해두기
        	this.ds_reClass.clearData();
        	this.ds_reDept.clearData();
        	this.ds_reClass.copyData(this.ds_class);
        	this.ds_reDept.copyData(this.ds_dept);
        };

        // gds 호출 함수
        this.fn_getGds = function ()
        {
        	// gds 호출로 등록자 넣기
        	var gdsApp = nexacro.getApplication();
        	var adCode = gdsApp.gds_adminInfo.getColumn(0, "ADMIN_CODE");
        	this.ds_class.setColumn(0, "CRE_USR", adCode);
        	this.ds_class.setColumn(0, "UPD_USR", adCode);
        };

        // 2. 등록
        this.btn_Add_onclick = function(obj,e)
        {
        	// 강의명 null 검사
        	var clsName = this.ds_class.getColumn(0, "CLASS_NAME");
        	if (clsName == null || clsName == '' || clsName == 'undefined'){
        		alert("강의명을 입력하세요");
        		return;
        	}

        	// dept null 검사
        	var dept = this.cmb_Dept.value;
        	if (dept == 0){
        		alert("학과를 선택해주세요");
        		return;
        	}

        	// 교수 null 검사
        	var proId = this.ds_class.getColumn(0, "PROFESSOR_ID");
        	var proId2 = this.ds_class.getColumn(1, "PROFESSOR_ID");
        	if (proId == null || proId == '' || proId == 'undefined'){
        		alert("교수를 선택해주세요1");
        		return;
        }
        	this.fn_insertAdClsInfo();

        };

        this.fn_insertAdClsInfo = function ()
        {
        	var strSvcId    = "insertAdClsInfo";
        	var strSvcUrl   = "svc::insertAdClsInfo.do";
        	var inData      = "ds_class=ds_class";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };
        // 학과별 교수목록 호출
        this.cmb_Dept_onitemchanged = function(obj,e)
        {
        	var deptCd = obj.value;
        	this.ds_getDept.setColumn(0, "DEPARTMENT_CODE", deptCd)
        	this.fn_selectProId();
        };

        this.fn_selectProId = function ()
        {
        	var strSvcId    = "selectProId";
        	var strSvcUrl   = "svc::selectProId.do";
        	var inData      = "ds_getDept=ds_getDept";
        	var outData     = "ds_proId=ds_proId";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };


        //3.초기화버튼
        this.btn_Reset_onclick = function(obj,e)
        {
        	// 초기 ds 다시 가져오기
        	this.ds_class.copyData(this.ds_reClass);
        	this.ds_dept.copyData(this.ds_reDept);
        };


        // 4. 콜백함수
        this.fnCallback = function (svcID, errCD, errMsg)
        {
        	if(errCD == -1) {
        		alert(errMsg);
        		return
        	}

        	switch(svcID) {
        	// 등록버튼
        	case "insertAdClsInfo":
        		alert("등록에 성공하였습니다!");
        		this.close("success");
        		break;
        	// 교수선택
        	case "selectProId":
        		break;
        	}
        };

        this.btn_Close_onclick = function(obj,e)
        {
        		if(this.confirm("닫으시겠습니까?")){
        		this.close();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.add_ClassInfo_Popup_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.cmb_Dept.addEventHandler("onitemchanged",this.cmb_Dept_onitemchanged,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
        };
        this.loadIncludeScript("add_ClassInfo_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
