(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("add_Professor_Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">M</Col><Col id=\"data\">남성</Col></Row><Row><Col id=\"code\">W</Col><Col id=\"data\">여성</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">재직</Col><Col id=\"data\">재직</Col></Row><Row><Col id=\"code\">휴직</Col><Col id=\"data\">휴직</Col></Row><Row><Col id=\"code\">퇴직</Col><Col id=\"data\">퇴직</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pro", this);
            obj._setContents("<ColumnInfo><Column id=\"PROFESSOR_ID\" type=\"INT\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CRE_USR\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_PART\" type=\"STRING\" size=\"256\"/><Column id=\"DOMAIN_PART\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resetPro", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_domain", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">직접입력</Col><Col id=\"data\">직접입력</Col></Row><Row><Col id=\"code\">HANA</Col><Col id=\"data\">@hnu.ac.kr</Col></Row><Row><Col id=\"code\">NAVER</Col><Col id=\"data\">@naver.com</Col></Row><Row><Col id=\"code\">GMAIL</Col><Col id=\"data\">@gmail.com</Col></Row><Row><Col id=\"code\">DAUM</Col><Col id=\"data\">@daum.com</Col></Row><Row><Col id=\"code\">HANMAIL</Col><Col id=\"data\">@hanmail.net</Col></Row><Row><Col id=\"code\">ICLOUD</Col><Col id=\"data\">@icloud.com</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_03_01_00_00_00_02_00","506","348","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_01","506","397","534","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00","780","250","260","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00","780","299","260","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00","506","250","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","780","201","260","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","780","152","260","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00","506","201","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","506","152","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","780","103","260","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","506","103","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","409","103","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   교번");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","409","152","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   성명");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","682","103","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   비밀번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","682","152","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   담당학과");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","682","299","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이메일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","682","250","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   연락처");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","409","201","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   성별");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","163","103","177","236",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","409","250","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   재직여부");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","682","201","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   생년월일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01","409","397","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   주소");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProId","517","113","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProPw","791","113","239","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_password("false");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProName","517","162","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Dept","791","161","239","31",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Email","791","309","119","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_Gender","517","211","153","36",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_gender");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_direction("vertical");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("M");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Phone","791","260","239","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Status","517","260","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_innerdataset("ds_status");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Birth","791","211","239","31",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Adr","518","407","512","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","163","359","177","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","889","511","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("작성완료");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_02","506","299","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_02","409","299","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   등록ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Admin","517","309","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reset","730","511","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Domain","910","309","119","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Domain","910","309","119","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_innerdataset("ds_domain");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Adr","690","354","80","38",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("주소검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01_00","409","446","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   상세주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_01_00","506","446","534","50",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DtlAdr","518","456","512","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wb_Adress","190","437","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","517","358","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_02_00","409","348","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   우편번호");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_ProId","value","ds_pro","PROFESSOR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_ProPw","value","ds_pro","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_ProName","value","ds_pro","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ImageViewer00","text","ds_pro","PHOTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","rdo_Gender","value","ds_pro","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cmb_Dept","value","ds_pro","DEPARTMENT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cal_Birth","value","ds_pro","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_Phone","value","ds_pro","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_Adr","value","ds_pro","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cmb_Status","value","ds_pro","STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_Admin","value","ds_pro","CRE_USR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_Email","value","ds_pro","EMAIL_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cmb_Domain","value","ds_pro","DOMAIN_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_Domain","value","ds_pro","DOMAIN_PART");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("add_Professor_Popup.xfdl", function() {
        // 필요한 기능
        // 1. 화면호출 - default 값 설정 + param 받기 + 초기화용 ds 카피
        // 2. 등록 - insert문 실행
        // 3. 초기화버튼
        // 4. 기타기능 - 이메일 + 주소검색

        // 1. 화면호출
        this.add_Professor_Popup_onload = function(obj,e)
        {
        	/* 필요한 기능
        	* 1. 부모폼에서 필요한 ds 밑 var 받아오기
        	* 2. 컴포넌트 default 설정하기
        	*/

        	// dept ds 받아오기
        	var objParam1 = this.parent.param1;

        	// 부모폼에서 현재 선택한 dept grd의 rowposition을 기반으로 dept값 받아오기
            var deptCode = this.parent.deptCode;

        	// dept 정보를 해당폼 dept ds에 복사 - ds가 서로 동일해야 가능!
        	this.ds_dept.copyData(objParam1);
        	// admin 정보를 해당폼 admin ds에 복사
        	/*	this.ds_admin.copyData(objParam2); */

        	// 콤보박스에 받아온 부모폼의 사용자 선택 dept code 넣기
        	// ds의 setColum으로는 rowposition 문제로 전체학과는 출력이 안됨
        	this.cmb_Dept.set_value(deptCode);


        	// gds 호출로 등록일, 등록자 넣기
        	this.fn_getGds();

        	// cmb box 기본값 설정
        	this.ds_pro.setColumn(0, "GENDER", "M");
        	this.ds_pro.setColumn(0, "STATUS", "재직");

        	// 초기화용 ds 카피해두기
        	this.ds_resetPro.copyData(this.ds_pro);
        };

        // 2. 등록 - 작성완료 btn 누를 시 insert문 실행
        this.btn_Add_onclick = function(obj,e)
        {
        	var ePart = this.ds_pro.getColumn(0, "EMAIL_PART");
        	var dPart = this.ds_pro.getColumn(0, "DOMAIN_PART");

        	this.ds_pro.setColumn(0, "EMAIL", ePart + dPart);
        	trace("이메일은? " + this.ds_pro.getColumn(0, "EMAIL"));
        	this.fn_insertPro();
        };

        // 교수정보 입력 함수
        this.fn_insertPro = function ()
        {
        	var strSvcId    = "insertPro";
        	var strSvcUrl   = "svc::insertAdPro.do";
        	var inData      = "ds_pro=ds_pro";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        // insert 함수 콜백처리
        this.fnCallback = function (svcID, errCD, errMsg)
        {
        	// 콜백이 호출 되는가?
        	trace("콜백 실행됨");
        	// 삭제후 검색
        	if(svcID == "insertPro" && errCD == 0){
        		trace("등록완료")
        		alert("등록에 성공하였습니다!");
        		this.close("success");
        	} else {
        		trace(errMsg);
        	}
        };

        // gds 호출 함수
        this.fn_getGds = function ()
        {
        	// gds 호출로 등록자 넣기
        	var gdsApp = nexacro.getApplication();
        	var adCode = gdsApp.gds_adminInfo.getColumn(0, "ADMIN_CODE");
        	this.ds_pro.setColumn(0, "CRE_USR", adCode);
        	trace("아이디 제대로 들어갔나? " + this.ds_pro.getColumn(0, "CRE_USR"));
        };

        // 3. 초기화버튼
        this.btn_Reset_onclick = function(obj,e)
        {
        	this.ds_pro.copyData(this.ds_resetPro);
        };

        // 4. 기타기능 - 이메일 + 주소검색
        // 도메인주소 cmb에 넣기 + 직접입력 설정해두기
        this.cmb_Domain_onitemchanged = function(obj,e)
        {
        	// 직접입력 선택시
        	if (obj.value == "직접입력") {
                // 입력가능한 상태 만들기
        		this.edt_Domain.set_value("");
        		// edit박스 맨 앞으로
        		this.edt_Domain.bringToFront();
        		// @를 맨 앞에 추가되도록 이벤트 강제호출
        		this.edt_Domain_oneditclick(this.edt_Domain, null);
            } else {
        		// 직접입력 아닐시 선택값 사용
                this.ds_pro.setColumn(0, "DOMAIN_PART", obj.value);
            }
        };

        // 도메인 직접입력시 esc 누르면 다시 콤보박스 선택
        this.edt_Domain_onkeyup = function(obj,e)
        {
        	if (e.keycode == 27) {
        		this.cmb_Domain.bringToFront();
        	}
        };

        // 만약 @없이 입력할 경우 @를 무조건 앞에 추가
        this.edt_Domain_onchanged = function(obj,e)
        {
        	var cVal = obj.value;

        	if(cVal.indexOf("@") !== 0){
        		obj.set_value("@" + cVal.replace("@", ""));
        	}
        };

        // 입력값 없을 시 무조건 맨 앞에 @를 추가
        this.edt_Domain_oneditclick = function(obj,e)
        {
        	var cVal = obj.value;
        	if (cVal == "") {
        		obj.set_value("@");
        		obj.setCaretPos(1);
        	}

        };

        this.btn_Adr_onclick = function(obj,e)
        {
        	this.wb_Adress.set_url("http://localhost:8082/HanaUIS/postcode.jsp");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.add_Professor_Popup_onload,this);
            this.Static00_01_00.addEventHandler("onclick",this.Static00_01_00_onclick,this);
            this.FileUpload00.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.btn_Reset.addEventHandler("onclick",this.btn_Reset_onclick,this);
            this.edt_Domain.addEventHandler("onkeyup",this.edt_Domain_onkeyup,this);
            this.edt_Domain.addEventHandler("onchanged",this.edt_Domain_onchanged,this);
            this.edt_Domain.addEventHandler("oneditclick",this.edt_Domain_oneditclick,this);
            this.cmb_Domain.addEventHandler("onitemchanged",this.cmb_Domain_onitemchanged,this);
            this.btn_Adr.addEventHandler("onclick",this.btn_Adr_onclick,this);
        };
        this.loadIncludeScript("add_Professor_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
