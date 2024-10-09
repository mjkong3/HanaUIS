(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("select_Professor_Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pro", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROFESSOR_ID\" type=\"INT\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_USR\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_PART\" type=\"STRING\" size=\"256\"/><Column id=\"DOMAIN_PART\" type=\"STRING\" size=\"256\"/><Column id=\"ZIPCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">M</Col><Col id=\"data\">남성</Col></Row><Row><Col id=\"code\">W</Col><Col id=\"data\">여성</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">재직중</Col><Col id=\"data\">재직중</Col></Row><Row><Col id=\"code\">휴직중</Col><Col id=\"data\">휴직중</Col></Row><Row><Col id=\"code\">퇴직</Col><Col id=\"data\">퇴직</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resetPro", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resetDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_address", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ZIPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"MAINADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FULLADDR\" type=\"STRING\" size=\"256\"/><Column id=\"EXTRAADDR\" type=\"STRING\" size=\"256\"/><Column id=\"REMAINADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reAdr", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_03_01_00_00_00_01","506","397","532","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00","778","250","260","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00","778","299","260","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00","506","250","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","778","201","260","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","778","152","260","50",null,null,null,null,null,null,this);
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

            obj = new Static("Static00_03_00","778","103","260","50",null,null,null,null,null,null,this);
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

            obj = new Static("Static00_01","681","103","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   비밀번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","681","152","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   담당학과");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","681","299","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이메일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","681","250","98","50",null,null,null,null,null,null,this);
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

            obj = new Static("Static00_00_01_00_00","681","201","98","50",null,null,null,null,null,null,this);
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

            obj = new Edit("edt_ProPw","789","113","239","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_password("false");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProName","517","162","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Dept","789","162","239","31",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EmailPt","789","309","119","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_Gender","517","208","153","36",null,null,null,null,null,null,this);
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

            obj = new Edit("edt_Phone","789","260","239","30",null,null,null,null,null,null,this);
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

            obj = new Calendar("cal_Birth","789","211","239","31",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Adr","516","407","512","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_cssclass("edt_Adr");
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

            obj = new Button("btn_Update","889","511","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Retrun","730","511","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("되돌아가기");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DomainPt","907","309","119","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wb_Adress","190","450","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01_00","409","446","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   상세주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_01_00","506","446","532","50",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DtlAdr","516","456","512","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_02_00","409","348","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   우편번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_02_00","506","348","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ZipCode","518","358","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_cssclass("edt_Adr");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Adr","690","354","80","38",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("주소검색");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ImageViewer00","text","ds_list","PHOTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_ProId","value","ds_pro","PROFESSOR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_ProPw","value","ds_pro","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_ProName","value","ds_pro","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cmb_Dept","value","ds_pro","DEPARTMENT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","rdo_Gender","value","ds_pro","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_Phone","value","ds_pro","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cmb_Status","value","ds_pro","STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cal_Birth","value","ds_pro","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_EmailPt","value","ds_pro","EMAIL_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_DomainPt","value","ds_pro","DOMAIN_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_Admin","value","ds_pro","UPD_USR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_Adr","value","ds_address","FULLADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_DtlAdr","value","ds_address","REMAINADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_ZipCode","value","ds_address","ZIPCODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("select_Professor_Popup.xfdl", function() {
        // 필요한 기능
        // 1. 화면호출 - param받아와서 pro info 띄우고 readonly 설정
        // 2. 수정버튼 - readonly 해제
        // 3. 수정완료 - update문 실행시키기 + EMAIL / ADDR 합쳐서 넣기
        // 4. 초기화버튼
        // 5. 기타기능 - 이메일 + 주소검색

        // 1. 화면호출
        this.select_Professor_Popup_onload = function(obj,e)
        {
        	/* 필요한 기능
        	* param 받아오기
        	* gds 받아오기
        	* readonly 설정해놓기
        	* 초기화용 ds copy
        	*/

        	var objParam1 = this.parent.param1;
        	var objParam2 = this.parent.param2;

         	this.ds_pro.copyData(objParam1);
        	this.ds_dept.copyData(objParam2);

        	trace("set컬럼 가능한지1" + this.ds_pro.saveXML());

        	// 이메일 받아오기
        	var email = this.ds_pro.getColumn(0, "EMAIL");
        	var fPart = email.split("@");
        	var ePart = fPart[0];
        	var dPart = fPart[1];
        	this.ds_pro.addColumn("EMAIL_PART", "STRING");
        	this.ds_pro.addColumn("DOMAIN_PART", "STRING");
        	this.ds_pro.setColumn(0, "EMAIL_PART", ePart);
        	this.ds_pro.setColumn(0, "DOMAIN_PART", "@" + dPart);


        	// 주소값 받아오기
        	var addr = this.ds_pro.getColumn(0, "ADDRESS");
        	var pAddr = addr.split("/");
        	var fAddr = pAddr[0];
        	var rAddr = pAddr[1];
        	trace("각각의 값은? = " + addr + " || " + fAddr + " || " + rAddr);
        	this.ds_address.setColumn(0, "FULLADDR", fAddr);
        	this.ds_address.setColumn(0, "REMAINADDR", rAddr);
        	this.ds_address.setColumn(0, "ZIPCODE", this.ds_pro.getColumn(0, "ZIPCODE"));

        	// 초기화용 ds 카피해두기
        	this.ds_resetDept.clearData();
        	this.ds_resetDept.clearData();
        	this.ds_reAdr.clearData();
        	this.ds_resetPro.copyData(this.ds_pro);
        	this.ds_resetDept.copyData(this.ds_dept);
        	this.ds_reAdr.copyData(this.ds_address);

        	// gds 호출 함수
        	this.fn_getGds();

        	// readonly 설정하기
        	this.fn_setReadOnly(true);
        	this.btn_Adr.set_enable(false);
        	this.btn_Retrun.set_visible(false);
        };

        // 2. 수정버튼 - readonly 해제(입력필드 제공)
        this.btn_Update_onclick = function(obj,e)
        {
        	this.fn_setReadOnly(false);

        	this.btn_Update.set_visible(false);
        	this.btn_Retrun.set_visible(true);
        	this.btn_Adr.set_enable(true);
        };

        // 3. 작성완료 - update문 실행

        this.btn_Add_onclick = function(obj,e)
        {
        	// 이메일 파트 합치기
        	var ePart = this.ds_pro.getColumn(0, "EMAIL_PART");
        	var dPart = this.ds_pro.getColumn(0, "DOMAIN_PART");
        	this.ds_pro.setColumn(0, "EMAIL", ePart + dPart);
        	trace("이메일은? " + this.ds_pro.getColumn(0, "EMAIL"));

        	// 주소 파트 합치기
        	var fAddr = this.ds_address.getColumn(0, "FULLADDR");
        	var rAddr = this.ds_address.getColumn(0, "REMAINADDR");
        	this.ds_pro.setColumn(0, "ADDRESS", fAddr + "/" + rAddr);
        	this.ds_pro.setColumn(0, "ZIPCODE", this.ds_address.getColumn(0, "ZIPCODE"));
        	this.fn_updatePro();

        };

        // update 함수 호출
        this.fn_updatePro = function ()
        {
        	var strSvcId    = "updatePro";
        	var strSvcUrl   = "svc::updateAdPro.do";
        	var inData      = "ds_pro=ds_pro";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 4. 초기화버튼 - 초기 상태로 되돌림
        this.btn_Retrun_onclick = function(obj,e)
        {
        	this.ds_pro.copyData(this.ds_resetPro);
        	this.ds_dept.copyData(this.ds_resetDept);
        	this.ds_address.copyData(this.ds_reAdr);
        	trace("set컬럼 가능한지2" + this.ds_pro.saveXML());
        	this.fn_getGds();

        	this.fn_setReadOnly(true);
        	this.btn_Retrun.set_visible(false);
        	this.btn_Update.set_visible(true);
        	this.btn_Adr.set_enable(false);
        };

        // readOnly 제어함수
        this.fn_setReadOnly = function (isReadonly)
        {
        	this.edt_ProId.set_readonly(isReadonly);
        	this.edt_ProPw.set_readonly(isReadonly);
        	this.edt_ProName.set_readonly(isReadonly);
        	this.cmb_Dept.set_readonly(isReadonly);
        	this.rdo_Gender.set_readonly(isReadonly);
        	this.cal_Birth.set_readonly(isReadonly);
        	this.edt_Phone.set_readonly(isReadonly);
        	this.cmb_Status.set_readonly(isReadonly);
        	this.edt_DomainPt.set_readonly(isReadonly);
        	this.edt_DtlAdr.set_readonly(isReadonly);
        };
        // gds 호출 함수
        this.fn_getGds = function ()
        {
        	// transaction 결과값으로 데이터를 받은 ds는 select 결과가 null인 경우 해당 col 자체가 없다
        	// 따라서 gds를 받아올 column을 만들어야 한다
        	// this.ds_pro.addColumn("UPD_USR", "string");
        	// IFNULL 처리로 필요없어짐

        	// gds 호출로 등록일, 등록자 넣기
        	var gdsApp = nexacro.getApplication();
        	var adCode = gdsApp.gds_adminInfo.getColumn(0, "ADMIN_CODE");
        	trace("set컬럼 가능?? " + this.ds_pro.getRowCount());
        	this.ds_pro.setColumn(0, "UPD_USR", adCode);
        	trace("아이디 제대로 들어갔나? " + this.ds_pro.getColumn(0, "UPD_USR"));
        };

        this.fnCallback = function (svcID, errCD, errMsg)
        {
        	if (svcID == "updatePro" && errCD == 0) {
        		trace("수정완료");
        		alert("수정이 완료되었습니다");
        		this.close("success");

        	}
        };

        // 4. 기타기능 - 이메일 + 주소검색
        // 4-1) 이메일
        // 이메일 입력파트 - @없이 작성시 맨 앞에 @ 추가
        this.edt_DomainPt_onchanged = function(obj,e)
        {
        	var cVal = obj.value;

        	if(cVal.indexOf("@") !== 0){
        		obj.set_value("@" + cVal.replace("@", ""));
        	}

        };

        // 이메일 입력파트 - 공백일 경우 @를 맨 앞에 추가한 후 커서를 그 뒤로
        this.edt_DomainPt_oneditclick = function(obj,e)
        {
        	var cVal = obj.value;
        	if (cVal == "") {
        		obj.set_value("@");
        		obj.setCaretPos(1);
        	}
        };

        // 4-2) 주소검색
        // 주소검색 버튼
        this.btn_Adr_onclick = function(obj,e)
        {
        	this.wb_Adress.set_url("http://localhost:8082/HanaUIS/postcode.jsp");
        };

        // 주소검색 - 카카오API
        this.wb_Adress_onusernotify = function(obj,e)
        {
        	// 주소검색 결과 받아오기
        	var receivedData = e.userdata;
        	trace("받아온 값은? = " + receivedData);
            var dataObj = JSON.parse(receivedData);

            // 우편번호, 도로명 주소, 지번 주소, 참고 주소 ds에 넣기
            this.ds_address.setColumn(0, "ZIPCODE", dataObj.zonecode);
            this.ds_address.setColumn(0, "MAINADDR", dataObj.selectedAddress);
            this.ds_address.setColumn(0, "EXTRAADDR", dataObj.extraAddress);
            trace(this.ds_address.saveXML());
            // 알림이나 추가 작업 수행
            /*alert("주소 검색이 완료되었습니다.");*/

        	// 도로명(지번)주소 + 참고주소 합치기
        	var mAddr = this.ds_address.getColumn(0, "MAINADDR");
        	var eAddr = this.ds_address.getColumn(0, "EXTRAADDR");
        	this.ds_address.setColumn(0, "FULLADDR", mAddr + "" + eAddr);
        	trace(this.ds_address.getColumn(0, "FULLADDR"));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.select_Professor_Popup_onload,this);
            this.Static00_01_00.addEventHandler("onclick",this.Static00_01_00_onclick,this);
            this.FileUpload00.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.btn_Update.addEventHandler("onclick",this.btn_Update_onclick,this);
            this.btn_Retrun.addEventHandler("onclick",this.btn_Retrun_onclick,this);
            this.edt_DomainPt.addEventHandler("onchanged",this.edt_DomainPt_onchanged,this);
            this.edt_DomainPt.addEventHandler("oneditclick",this.edt_DomainPt_oneditclick,this);
            this.wb_Adress.addEventHandler("onusernotify",this.wb_Adress_onusernotify,this);
            this.btn_Adr.addEventHandler("onclick",this.btn_Adr_onclick,this);
        };
        this.loadIncludeScript("select_Professor_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
