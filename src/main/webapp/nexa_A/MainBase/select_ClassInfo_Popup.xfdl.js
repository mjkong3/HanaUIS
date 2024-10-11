(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("select_ClassInfo_Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_class", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_START\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_END\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSROOM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROFESSOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_USR\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_semester", this);
            obj._setContents("<ColumnInfo><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEMESTER\">1</Col><Col id=\"DATA\">1학기</Col></Row><Row><Col id=\"SEMESTER\">2</Col><Col id=\"DATA\">2학기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_proId", this);
            obj._setContents("<ColumnInfo><Column id=\"PROFESSOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_clstype", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CLASS_TYPE\">전공필수</Col><Col id=\"data\">전공필수</Col></Row><Row><Col id=\"CLASS_TYPE\">전공선택</Col><Col id=\"data\">전공선택</Col></Row><Row><Col id=\"CLASS_TYPE\">교양필수</Col><Col id=\"data\">교양필수</Col></Row><Row><Col id=\"CLASS_TYPE\">교양선택</Col><Col id=\"data\">교양선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_clsgrade", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CLASS_GRADE\">1</Col><Col id=\"DATA\">1학점</Col></Row><Row><Col id=\"CLASS_GRADE\">2</Col><Col id=\"DATA\">2학점</Col></Row><Row><Col id=\"CLASS_GRADE\">3</Col><Col id=\"DATA\">3학점</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reClass", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_getDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Add","759","601","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","319","277","590","313",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#e7e7e8");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00","690","179","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00","416","179","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","690","131","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","690","82","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00","416","131","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","416","82","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","690","33","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","416","33","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","319","33","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   강의명");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","319","82","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","592","33","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   교수명");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","592","82","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   개설학과");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","592","179","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   종강일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","319","131","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이수학점");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","319","179","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   개강일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","592","131","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이수구분");
            this.addChild(obj.name, obj);

            obj = new Edit("etd_ClassName","427","43","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Dept","701","91","195","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Update","759","601","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_LastDay","701","189","195","31",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_FirstDay","427","189","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_ClsInfo","330","315","569","255",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("auto auto");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00_00_00","330","277","569","39",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("강의 상세");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ClsType","701","141","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("CLASS_TYPE");
            obj.set_datacolumn("CLASS_TYPE");
            obj.set_innerdataset("ds_clstype");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ClsGrade","427","141","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_codecolumn("CLASS_GRADE");
            obj.set_datacolumn("DATA");
            obj.set_innerdataset("ds_clsgrade");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Semester","427","92","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_semester");
            obj.set_datacolumn("DATA");
            obj.set_codecolumn("SEMESTER");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ProId","701","43","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_proId");
            obj.set_codecolumn("PROFESSOR_ID");
            obj.set_datacolumn("NAME");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Return","602","601","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("되돌아가기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01","319","228","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   등록ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01_00","592","228","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   강의실");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_01","416","228","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00_00","690","228","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Admin","427","238","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ClassRoom","701","238","195","31",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProId","701","43","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","etd_ClassName","value","ds_class","CLASS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmb_ProId","value","ds_class","PROFESSOR_ID");
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

            obj = new BindItem("item8","edt_Admin","value","ds_class","UPD_USR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","txt_ClsInfo","value","ds_class","CLASS_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_ClassRoom","value","ds_class","CLASSROOM_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("select_ClassInfo_Popup.xfdl", function() {
        // 필요한 기능
        // 1. 화면호출 - param받아와서 pro info 띄우고 readonly 설정
        // 2. 수정버튼 - readonly 해제
        // 3. 수정완료 - update문 실행시키기
        // 4. 초기화버튼
        // 5. 기타기능 - 이메일 + 주소검색
        // 6. 유효성검사
        // 7. 콜백함수

        // 1. 화면호출
        this.select_ClassInfo_Popup_onload = function(obj,e)
        {
        	var objParam1 = this.parent.param1;
        	var objParam2 = this.parent.param2;
        	var proNm = this.parent.proNm;

        	this.edt_ProId.set_value(proNm);
        	trace("교수 = " + proNm);

         	this.ds_class.copyData(objParam1);
        	console.log(this.ds_class.saveXML());
        	this.ds_dept.copyData(objParam2);

        	trace("set컬럼 가능한지1" + this.ds_class.saveXML());

        	// 초기화용 ds 카피해두기
        	this.ds_reClass.clearData();
        	this.ds_reDept.clearData();
        	this.ds_reClass.copyData(this.ds_class);
        	this.ds_reDept.copyData(this.ds_dept);

        	// readonly 설정하기
        	this.fn_setReadOnly(true);
        	this.btn_Return.set_visible(false);
        };

        // readOnly 제어함수
        this.fn_setReadOnly = function (isReadonly)
        {
        	this.etd_ClassName.set_readonly(isReadonly);
        	this.edt_ProId.set_readonly(isReadonly);
        	this.cmb_Semester.set_readonly(isReadonly);
        	this.cmb_Dept.set_readonly(isReadonly);
        	this.cmb_ClsGrade.set_readonly(isReadonly);
        	this.cmb_ClsType.set_readonly(isReadonly);
        	this.cal_FirstDay.set_readonly(isReadonly);
        	this.cal_LastDay.set_readonly(isReadonly);
        	this.txt_ClsInfo.set_readonly(isReadonly);
        };


        // gds 호출 함수
        this.fn_getGds = function ()
        {
        	// gds 호출로 등록일, 등록자 넣기
        	var gdsApp = nexacro.getApplication();
        	var adCode = gdsApp.gds_adminInfo.getColumn(0, "ADMIN_CODE");
        	trace("set컬럼 가능?? " + this.ds_class.getRowCount());
        	this.ds_class.setColumn(0, "UPD_USR", adCode);
        	trace("아이디 제대로 들어갔나? " + this.ds_class.getColumn(0, "UPD_USR"));
        };

        // 2. 수정버튼
        this.btn_Update_onclick = function(obj,e)
        {
        	this.fn_setReadOnly(false);

        	this.btn_Update.set_visible(false);
        	this.btn_Return.set_visible(true);

        	this.edt_ProId.sendToBack();
        	this.fn_getGds();
        };

        // 교수호출
        this.cmb_Dept_onitemchanged = function(obj,e)
        {
        	var deptCd = obj.value;
        	trace("무슨 값 선택했어? " + deptCd);
        	this.ds_getDept.setColumn(0, "DEPARTMENT_CODE", deptCd)
        	trace("뭔가요?" + this.ds_getDept.getColumn(0, "DEPARTMENT_CODE"));
        	this.fn_selectProId();
        };

        // 교수호출 함수
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

        // 3. 수정완료
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
        	trace("교수들어가있나? " + proId);
        	if (proId == null || proId == '' || proId == 'undefined'){
        		alert("교수를 선택해주세요1");
        		return;
        }
        	this.fn_updateAdClsInfo();

        };

        // update 함수 호출
        this.fn_updateAdClsInfo = function ()
        {
        	var strSvcId    = "updateAdClsInfo";
        	var strSvcUrl   = "svc::updateAdClsInfo.do";
        	var inData      = "ds_class=ds_class";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 초기화버튼
        this.btn_Return_onclick = function(obj,e)
        {
        	// 초기 ds 다시 가져오기
        	this.ds_class.copyData(this.ds_reClass);
        	this.ds_dept.copyData(this.ds_reDept);

        	this.fn_setReadOnly(true);
        	this.btn_Update.set_visible(true);
        	this.btn_Return.set_visible(false);
        	this.edt_ProId.bringToFront();
        };

        this.fnCallback = function (svcID, errCD, errMsg)
        {
        	if(errCD == -1) {
        		alert(errMsg);
        		return
        	}

        	switch(svcID) {
        	// 등록버튼
        	case "updateAdClsInfo":
        		trace("수정완료")
        		alert("수정이 완료되었습니다!");
        		this.close("success");
        		break;

        		}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.select_ClassInfo_Popup_onload,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.cmb_Dept.addEventHandler("onitemchanged",this.cmb_Dept_onitemchanged,this);
            this.btn_Update.addEventHandler("onclick",this.btn_Update_onclick,this);
            this.btn_Return.addEventHandler("onclick",this.btn_Return_onclick,this);
        };
        this.loadIncludeScript("select_ClassInfo_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
