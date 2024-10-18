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
                this._setFormPosition(960,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pro", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROFESSOR_ID\" type=\"INT\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_USR\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_PART\" type=\"STRING\" size=\"256\"/><Column id=\"DOMAIN_PART\" type=\"STRING\" size=\"256\"/><Column id=\"ZIPCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">M</Col><Col id=\"data\">남성</Col></Row><Row><Col id=\"code\">F</Col><Col id=\"data\">여성</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_vali", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECK_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_EM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mydata", this);
            obj._setContents("<ColumnInfo><Column id=\"PROFESSOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_03_01_00_00_00_01","399","356","532","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00","668","209","260","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00","668","258","260","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00","399","209","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","668","160","260","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","668","111","260","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00","399","160","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","399","111","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","671","62","260","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","399","62","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","302","62","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   교번");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","302","111","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   성명");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","574","62","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   비밀번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","574","111","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   담당학과");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","574","258","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이메일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","574","209","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   연락처");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","302","160","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   성별");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","66","62","177","236",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","302","209","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   재직여부");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","574","160","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   생년월일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01","302","356","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   주소");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProId","411","72","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProPw","682","72","239","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_password("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProName","411","121","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Dept","682","121","239","31",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EmailPt","682","268","119","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_Gender","411","167","153","36",null,null,null,null,null,null,this);
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

            obj = new Edit("edt_Phone","682","219","239","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Status","411","219","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_innerdataset("ds_status");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Birth","682","170","239","31",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Adr","409","366","512","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_cssclass("edt_Adr");
            obj.set_displaynulltext("주소검색 버튼으로 검색하세요");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","443","487","77","38",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_02","399","258","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_02","302","258","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   등록ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Admin","411","268","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Update","443","487","77","38",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Retrun","332","487","77","38",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("리셋");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DomainPt","800","268","119","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wb_Adress","60","450","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01_00","302","405","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   상세주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_01_00","399","405","532","50",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DtlAdr","409","415","512","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_displaynulltext("상세주소를 입력하세요");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_02_00","302","307","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   우편번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_02_00","399","307","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ZipCode","411","317","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_cssclass("edt_Adr");
            obj.set_displaynulltext("우편번호");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Adr","580","314","80","38",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("주소검색");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addfile","203","307","43","20",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_filename","64","307","136","21",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mypage","820","27","107","26",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("사용자 페이지");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close","556","487","77","38",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",960,610,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
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
        // 6. 유효성검사
        // 7. 콜백함수
        // 8. 파일업로드
        // 9. 마이페이지

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
        	this.btn_Retrun.set_enable(false);

        	// 미리보기 처음 실행
        	setTimeout(function(){
        			trace(this.ds_pro.getColumn(0,"PHOTO"));
        			this.showImagePreviewAdd(this.ds_pro.getColumn(0,"PHOTO"));
        		}.bind(this), 10);

        };

        // 이미지 미리보기 함수 -- 수정안할 시
        this.showImagePreviewAdd = function(fileName) {
        	trace(fileName);
            var encodedFileName = encodeURIComponent(fileName); // 파일 이름 URL 인코딩
            var imagePath = "http://localhost:8082/HanaUIS/showFile.jsp?filename=" + encodedFileName; // 업로드한 파일 경로
            this.ImageViewer00.set_image("url('" + imagePath + "')"); // ImageViewer에 이미지 설정

        	// 이미지가 없을 때 나오는 text
        	if(this.ds_pro.getColumn(0, "PHOTO") == null || this.ds_pro.getColumn(0, "PHOTO") == "" || this.ds_pro.getColumn(0, "PHOTO") == "undefined"){
        		this.ImageViewer00.set_text("500KB 이하");
        	}else {
        		this.ImageViewer00.set_text("");
        	}

        };

        // 2. 수정버튼 - readonly 해제(입력필드 제공)
        this.btn_Update_onclick = function(obj,e)
        {
        	this.fn_setReadOnly(false);

        	this.btn_Update.set_visible(false);
        	this.btn_Retrun.set_enable(true);
        	this.btn_Adr.set_enable(true);
        	this.btn_mypage.set_enable(false);
        };

        // 3. 작성완료 - update문 실행 + null check

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

        	// pw null 검사
        	var proPw = this.ds_pro.getColumn(0, "PASSWORD");
        	if (proPw == null || proPw == '' || proPw == 'undefined'){
        		alert("비밀번호를 입력하세요");
        		return;
        	}

        	// 이름 null 검사
        	var name = this.ds_pro.getColumn(0, "NAME");
        	if (name == null || name == '' || name == 'undefined'){
        		alert("이름을 입력하세요");
        		return;
        	}

        	// dept null 검사 - 통과시 email 정규식
        	var dept = this.cmb_Dept.value;
        	if (dept == 0){
        		alert("학과를 선택해주세요");
        	} else {
        		// 이메일 정규식 호출
        		this.fn_valiEmChk();
        	}

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

        	this.btn_mypage.set_enable(true);
        	this.fn_setReadOnly(true);
        	this.btn_Retrun.set_enable(false);
        	this.btn_Update.set_visible(true);
        	this.btn_Adr.set_enable(false);

        	// 재업로드
        	setTimeout(function(){
        			trace(this.ds_pro.getColumn(0,"PHOTO"));
        			this.showImagePreviewAdd(this.ds_pro.getColumn(0,"PHOTO"));
        		}.bind(this), 10);
        };

        // readOnly 제어함수
        this.fn_setReadOnly = function (isReadonly)
        {
        	this.edt_ProPw.set_readonly(isReadonly);
        	this.edt_ProName.set_readonly(isReadonly);
        	this.cmb_Dept.set_readonly(isReadonly);
        	this.rdo_Gender.set_readonly(isReadonly);
        	this.cal_Birth.set_readonly(isReadonly);
        	this.edt_Phone.set_readonly(isReadonly);
        	this.cmb_Status.set_readonly(isReadonly);
        	this.edt_EmailPt.set_readonly(isReadonly);
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


        // 5. 기타기능 - 이메일 + 주소검색
        // 5-1) 이메일
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

        // 5-2) 주소검색
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

        // 6. 유효성 검사
        // 정규식 - email, phone, pw
        // null체크 - pw, 학과, 이름
        // 중복검사 - email
        // 6-1) 비밀번호 정규식
        this.edt_ProPw_onchanged = function(obj,e)
        {
            var password = obj.value;
            var regex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{4,}$/;
        		if (!regex.test(password)) {
        			alert("비밀번호는 최소 4자 이상이며, 특수문자가 포함되어야 합니다.");
        			obj.set_value("");
        			obj.setFocus();
        		} else {
        			trace("비밀번호가 유효합니다.");
        		}
        	};

        	// 6-2) 이메일 정규식
        	this.fn_valiEmChk = function ()
        	{
        		var email = this.ds_pro.getColumn(0, "EMAIL");
        		var regem = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        		if (!regem.test(email)) {
        			alert("유효한 이메일 주소를 입력하세요.");
        			this.edt_Email.set_value("");
        			this.edt_Email.setFocus();
        		} else {
        			trace("이메일값좀 보자1 " + email);
        			this.fn_dupEmChk();
        		}
        	};

        	// 6-3) 이메일 중복체크
        	this.fn_dupEmChk = function ()
        	{
        		var strSvcId    = "dupCheckEm";
        		var strSvcUrl   = "svc::dupCheckEm.do";
        		var inData      = "ds_pro=ds_pro";
        		var outData     = "ds_vali=ds_vali";
        		var strArg      = ""
        		var callBackFnc = "fnCallback";
        		var isAsync     = true;

        		this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	};

        	// 6-4) 연락처 정규식
        	this.fn_valiPhChk = function ()
        	{
        		var phone = this.ds_pro.getColumn(0, "PHONE");
        		var regph = /^(01[016789]{1})-[0-9]{3,4}-[0-9]{4}$/;
        		if(!regph.test(phone)){
        			alert("연락처는 다음과 같이 입력해주세요 : 01x-xxxx-xxxx");
        			this.edt_Phone.set_value("");
        			this.edt_Phone.setFocus();
        		} else {
        			this.fn_updatePro();
        		}
        	};

        	// 7. 콜백함수
        	this.fnCallback = function (svcID, errCD, errMsg)
        	{
        		if(errCD == -1) {
        			alert(errMsg);
        			return
        		}

        		switch(svcID) {
        			// 등록버튼
        		case "updatePro":
        			trace("수정완료")
        			this.FileUpTransfer00.upload('http://localhost:8082/HanaUIS/fileupload.jsp');
        			alert("수정이 완료되었습니다!");
        			this.close("success");
        			break;
        			// 이메일 중복체크
        		case "dupCheckEm":
        			var chkEm = this.ds_vali.getColumn(0, "CHECK_EM");
        			trace("이메일값?" + chkEm);
        			if (chkEm == "Y") {
        				// 연락처 유효성 정규식
        				this.fn_valiPhChk();
        			} else {
        				alert("중복된 email 입니다");
        			}
        			break;
        		case "AdProMypage":
        			window.open("http://localhost:8082/HanaUIS/pfs/notice.do"); // 세션 등록 성공 시 새탭으로 띄우기
        		 break;

        		}
        	};

        	// 8. 파일업로드

        	// dialog 호출
        	this.btn_addfile_onclick = function(obj,e)
        	{
        		this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        	};


        	// 파일 트랜스퍼 및 미리보기 넣는 이벤트 - 유효성
        	this.FileDialog00_onclose = function(obj,e)
        	{
        		var filetype = e.virtualfiles[0].filename;

        		if(e.virtualfiles.length > 1){
        			alert("파일이 두개 이상입니다.");
        		}
        		else if(!this.gfnIsImageFile(filetype)){
        			alert("png, "+ "jpg, "+ "jpeg" + "가 아닙니다.");
        		}
        		else{
        			// 파일 추가시 사이즈 체크용 함수
        			this.addFileList(e.virtualfiles);
        			trace(this.ds_file.getColumn(0, "FILE_SIZE"));


        			if(this.ds_file.getColumn(0, "FILE_SIZE") < 500000){
        				var name;
        				for (var i = 0; i < e.virtualfiles.length; i++) {
        					this.ds_pro.setColumn(0, "PHOTO", e.virtualfiles[i].filename);

        					name = e.virtualfiles[i].filename;

        					// 파일을 서버에 업로드하는 함수 호출
        					this.uploadFileToServer(e.virtualfiles[i]);

        				}
        				this.edt_filename.set_value(name);
        				this.ds_file.setColumn(0,"FILE_NAME", name);

        				setTimeout(function(){
        						this.showImagePreview(name);
        					}.bind(this), 100);

        			}else{
        				alert("용량이 너무 큽니다. 500KB이하로 해주세요.");
        				var fileName = e.virtualfiles[0].filename;
        				this.ds_file.clearData();
        				this.ds_file.addRow();

        				setTimeout(function(){
        						this.deleteFile(fileName);
        					}.bind(this), 100);
        			}
        		}
        	};

        	// 파일 추가시 이벤트 호출 함수 - 커스텀이벤트로 사이즈 체크
        	this.addFileList = function(filelist) {
        		for (var i = 0, len = filelist.length, vFile; i < len; i++) {
        			vFile = filelist[i];
        			trace(vFile.filesize);
        			vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        			vFile.addEventHandler("onerror", this.FileList_onerror, this);
        			trace("여기는 오지");

        			vFile.open(null, 1);
        		}
        	};


        	// 커스텀 이벤트 발동 - 사이즈 체크
        	this.FileList_onsuccess = function(obj, e) {
        		switch (e.reason) {
                case 1:
                    obj.getFileSize();
                    break;
                case 9: // 들어와졌을 때
                    this.FileUpTransfer00.addFile(obj.filename, obj);
        			this.ds_file.setColumn(0, "FILE_SIZE", e.filesize);
                    break;
        		}
        	};

        	// 커스텀 이벤트 발동 - 실패용 이벤트
        	this.FileList_onerror = function(obj, e)
        	{
        		trace("errortype: "+e.errortype);
        		trace("errormsg: "+e.errormsg);
        		trace("statuscode: "+e.statuscode);
        	};

        	// 파일 업로드 함수 - 트랜스퍼에 추가
        	this.uploadFileToServer = function(vFile) {
        		this.FileUpTransfer00.clearFileList();
        		this.FileUpTransfer00.addFile(vFile.filename, vFile);
        		this.FileUpTransfer00.upload("http://localhost:8082/HanaUIS/showfileupload.jsp"); // JSP 파일 경로
        	};

        	// 이미지 미리보기 함수
        	this.showImagePreview = function(fileName) {
        		trace(fileName);
        		var encodedFileName = encodeURIComponent(fileName); // 파일 이름 URL 인코딩
        		var imagePath = "http://localhost:8082/HanaUIS/showFile.jsp?filename=" + encodedFileName +"&type=view"; // 업로드한 파일 경로
        		this.ImageViewer00.set_image("url('" + imagePath + "')"); // ImageViewer에 이미지 설정

        		// 이미지가 없을 때 나오는 text
        		if(this.ds_pro.getColumn(0, "PHOTO") == null || this.ds_pro.getColumn(0, "PHOTO") == "" || this.ds_pro.getColumn(0, "PHOTO") == "undefined"){
        			this.ImageViewer00.set_text("500KB 이하");
        		}else {
        			this.ImageViewer00.set_text("");
        		}
        		// 이미지가 뜬 이후 10초간 미리보기 폴더에 유지 - 이후 삭제
        		setTimeout(function(){
        				this.deleteFile(fileName);
        			}.bind(this), 10000);

        	};

        	// 이미지 등록 시 확장자 확인
        	this.gfnIsImageFile = function(fileTxt) {
        		var imageExt = ["png", "jpg", "jpeg"];
        		var extNm = fileTxt.substr(fileTxt.lastIndexOf(".") + 1).toLowerCase(); // 확장자를 소문자로 변환
        		return imageExt.includes(extNm);
        	};

        	// 미리보기 폴더에서 파일 삭제 함수
        	this.deleteFile = function(fileName) {
        		trace("여기까지 왔나?");
        		var encodedFileName = encodeURIComponent(fileName); // 파일 이름 URL 인코딩
        		var deleteUrl = "http://localhost:8082/HanaUIS/deleteFile.jsp?filename=" + encodedFileName; // 파일 삭제 요청 URL

        		var params = {
        			filename: fileName // 파일 이름을 파라미터로 전달
        		};
        		var xhr = new XMLHttpRequest();
        		xhr.open("POST", deleteUrl, true);
        		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        		xhr.onreadystatechange = function () {
        			if (xhr.readyState === 4) {
        				if (xhr.status === 200) {
        					trace("서버 응답: " + xhr.responseText);
        				} else {
        					trace("오류 발생: " + xhr.status);
        				}
        			}
        		};
        		xhr.send("filename=" + encodeURIComponent(fileName));
        	};

        // 9. 마이페이지
        this.btn_mypage_onclick = function(obj,e)
        {
        	this.ds_mydata.setColumn(0,"PROFESSOR_ID", this.ds_pro.getColumn(0, "PROFESSOR_ID"));
        	this.ds_mydata.setColumn(0,"PASSWORD", this.ds_pro.getColumn(0, "PASSWORD"));

        	this.fn_go();
        };

        // 마이페이지 연결 함수
        this.fn_go = function()
        {
           var strSvcId    = "AdProMypage";
           var strSvcUrl   = "svc::AdProMypage.do";
           var inData      = "ds_mydata=ds_mydata";
           var outData     = "";
           var strArg      = "";
           var callBackFnc = "fnCallback";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

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
            this.addEventHandler("onload",this.select_Professor_Popup_onload,this);
            this.Static00_01_00.addEventHandler("onclick",this.Static00_01_00_onclick,this);
            this.edt_ProPw.addEventHandler("onchanged",this.edt_ProPw_onchanged,this);
            this.rdo_Gender.addEventHandler("onitemchanged",this.rdo_Gender_onitemchanged,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.btn_Update.addEventHandler("onclick",this.btn_Update_onclick,this);
            this.btn_Retrun.addEventHandler("onclick",this.btn_Retrun_onclick,this);
            this.edt_DomainPt.addEventHandler("onchanged",this.edt_DomainPt_onchanged,this);
            this.edt_DomainPt.addEventHandler("oneditclick",this.edt_DomainPt_oneditclick,this);
            this.wb_Adress.addEventHandler("onusernotify",this.wb_Adress_onusernotify,this);
            this.btn_Adr.addEventHandler("onclick",this.btn_Adr_onclick,this);
            this.btn_addfile.addEventHandler("onclick",this.btn_addfile_onclick,this);
            this.btn_mypage.addEventHandler("onclick",this.btn_mypage_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("select_Professor_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
