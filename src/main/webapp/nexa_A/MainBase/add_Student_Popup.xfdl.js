(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_Work");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(960,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ger", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">M</Col><Col id=\"data\">남자</Col></Row><Row><Col id=\"code\">F</Col><Col id=\"data\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_static", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">재학중</Col><Col id=\"data\">재학중</Col></Row><Row><Col id=\"code\">휴학중</Col><Col id=\"data\">휴학중</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("save_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENT_ID\" type=\"INT\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIV_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"INT\" size=\"256\"/><Column id=\"PHOTO\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_PART\" type=\"STRING\" size=\"256\"/><Column id=\"DOMAIN_PART\" type=\"STRING\" size=\"256\"/><Column id=\"ZIPCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">1학년</Col></Row><Row><Col id=\"data\">2학년</Col><Col id=\"code\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resetStu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_domain", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">직접입력</Col><Col id=\"data\">직접입력</Col></Row><Row><Col id=\"code\">@hnu.ac.kr</Col><Col id=\"data\">@hnu.ac.kr</Col></Row><Row><Col id=\"code\">@naver.com</Col><Col id=\"data\">@naver.com</Col></Row><Row><Col id=\"code\">@gmail.com</Col><Col id=\"data\">@gmail.com</Col></Row><Row><Col id=\"code\">@daum.com</Col><Col id=\"data\">@daum.com</Col></Row><Row><Col id=\"code\">@hanmail.net</Col><Col id=\"data\">@hanmail.net</Col></Row><Row><Col id=\"code\">@icloud.com</Col><Col id=\"data\">@icloud.com</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_address", this);
            obj._setContents("<ColumnInfo><Column id=\"ZIPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"MAINADDR\" type=\"STRING\" size=\"256\"/><Column id=\"EXTRAADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FULLADDR\" type=\"STRING\" size=\"256\"/><Column id=\"REMAINADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reAdr", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_vali", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECK_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_EM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_03_00_00_00_00","671","209","257","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00","671","258","257","49",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00","399","258","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","671","160","257","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","671","111","257","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00","399","209","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00","399","160","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","399","111","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","671","62","257","50",null,null,null,null,null,null,this);
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
            obj.set_text("   학번");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","411","72","152","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","411","121","152","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","302","111","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","574","62","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   비밀번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_password","683","72","233","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","574","111","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학과");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","302","160","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학년");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","574","160","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   핸드폰");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone","683","170","233","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","574","209","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이메일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","302","209","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   성별");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","66","62","177","236",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","302","258","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   상태");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","574","258","98","49",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   생년월일");
            this.addChild(obj.name, obj);

            obj = new Button("Stu_Add_btn","383","520","77","38",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","412","216","150","36",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_ger");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_direction("vertical");
            obj.set_text("남자");
            obj.set_value("M");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","684","121","231","31",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_static","411","268","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_innerdataset("ds_static");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_birthday","681","267","236","31",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_univ","411","170","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_grade");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("1학년");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addfile","203","307","43","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_filename","64","307","136","21",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reset","494","520","77","38",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_02_00_00","399","356","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_01_00_01","399","405","534","50",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01_00_01","302","405","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   주소");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Email","683","219","119","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_cssclass("edt_Adr");
            obj.set_displaynulltext("학번이 필요합니다");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Adr","410","415","512","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_displaynulltext("주소검색 버튼으로 검색하세요");
            obj.set_cssclass("edt_Adr");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_02_01_00","399","307","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_02_00_01","302","307","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   등록ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Admin","411","317","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Domain","801","219","119","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Domain","801","219","119","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_innerdataset("ds_domain");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Adr","580","362","80","38",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("주소검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01_00_00_00","302","454","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   상세주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_01_00_00_00","399","454","534","50",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DtlAdr","410","464","512","30",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_displaynulltext("상세주소를 입력하세요");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ZipCd","411","366","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_displaynulltext("우편번호");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_Adr");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_02_00_00_00","302","356","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   우편번호");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wb_Adress","130","404","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",960,610,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_id","value","save_ds","STUDENT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_name","value","save_ds","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_password","value","save_ds","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_phone","value","save_ds","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","rdo_gender","value","save_ds","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cmb_dept","value","save_ds","DEPARTMENT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cmb_static","value","save_ds","STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_birthday","value","save_ds","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cmb_univ","value","save_ds","UNIV_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_Email","value","save_ds","EMAIL_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cmb_Domain","value","save_ds","DOMAIN_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_Domain","value","save_ds","DOMAIN_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_ZipCd","value","ds_address","ZIPCODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_Adr","value","ds_address","FULLADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_DtlAdr","value","ds_address","REMAINADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edt_Admin","value","save_ds","ADMIN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("add_Student_Popup.xfdl", function() {
        // this.Popup_Work_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
        // {
        // /*   this.insert_ds.setColumn(0,"DEPARTMENT_CODE",this.insert_ds.getColumn(0,1));*/
        //
        //     var objParam  = this.parent.param1;
        //     console.log("DEPARTMENT_CODE: " + this.ds_de.getColumn(0, "DEPARTMENT_CODE"));
        //     this.ds_de.copyData(objParam);
        //     console.log("selected_DeptCode" + this.ds_de.getColumn(0, "DEPARTMENT_CODE"));
        //
        //    var departmentCode = this.ds_de.getColumn(0, "DEPARTMENT_CODE");
        //
        //     if (departmentCode == "00") {
        //         // 전체학과가 선택된 경우 콤보박스에서 전체학과를 선택
        //         this.de.set_index(0);  // 콤보박스의 첫 번째 항목(전체학과)을 선택
        //        console.log("Selected index: 0 (전체학과)");
        //     } else {
        //         // 일반 학과가 선택된 경우 해당 학과의 DEPARTMENT_CODE 설정
        //         this.de.set_value(departmentCode);
        //        console.log("Selected value: " + departmentCode);
        //     }
        //
        //    this.save_ds.setColumn(0,"UNIV_YEAR","1");
        //    this.save_ds.setColumn(0,"GENDER","M");
        //    this.save_ds.setColumn(0,"STATUS","재학");
        //    this.save_ds.setColumn(0, "DEPARTMENT_CODE", this.ds_de.getColumn(0, "DEPARTMENT_CODE"));
        // };


        // 이메일 중복 체크

        // 그거 말고 더 찾아보기



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
        		case "insertAdStudent":
        			this.FileUpTransfer00.upload('http://localhost:8082/HanaUIS/fileupload.jsp');
        			this.alert("성공적으로 등록을 하였습니다.");
        			this.close();
        			break;
        		case "studCheckId":
        			trace("전체값은? " + this.ds_vali.saveXML());
        			var chkId = this.ds_vali.getColumn(0, "CHECK_ID");
        			trace("값은? " + chkId);
        			if (chkId == "Y"){
        				alert("사용가능한 교번입니다");
        				this.edt_Email.set_readonly(false);
        			}else {
        				alert("중복된 교번입니다");
        			}
        			break;
        		// 이메일 중복체크
        		case "stuCheckEm":
        			var chkEm = this.ds_vali.getColumn(0, "CHECK_EM");
        			trace("이메일값?" + chkEm);
        			if (chkEm == "Y") {
        				// 연락처 유효성 정규식
        				this.fn_valiPhChk();
        			} else {
        				alert("중복된 email 입니다");
        			}
        			break;
        		default:
        			break;
        	}

        };


        // 자식(팝업) 폼 코드 (팝업 로드 시 호출되는 함수)
        this.Popup_Work_onload = function(obj, e) {
            // 부모 폼에서 넘겨받은 param1 (데이터셋)과 선택된 학과 코드
            var objParam = this.parent.param1;                // 부모 폼에서 넘긴 데이터셋
            var selectedDepartmentCode = this.parent.selectedDepartmentCode; // 부모 폼에서 넘긴 선택된 학과 코드

            // 데이터셋 복사: 부모 폼에서 넘겨받은 데이터셋을 ds_de에 복사
            this.ds_dept.copyData(objParam);

        	var gdsApp = nexacro.getApplication();
        	var adCode = gdsApp.gds_adminInfo.getColumn(0, "ADMIN_CODE");
        	var regdt = gdsApp.gds_adminInfo.getColumn(0, "REGDATE");
        	this.save_ds.setColumn(0, "ADMIN_CODE", adCode);
        	this.save_ds.setColumn(0, "REGDATE", regdt);
        	trace("아이디 제대로 들어갔나? " + this.save_ds.getColumn(0, "ADMIN_CODE"));
        	trace("일시 제대로 들어갔나? " + this.save_ds.getColumn(0, "REGDATE"));
        	trace(selectedDepartmentCode);

            // 데이터셋에 다른 초기 값 설정 (예시)
            this.save_ds.setColumn(0, "UNIV_YEAR", "1");
            this.save_ds.setColumn(0, "GENDER", "M");
            this.save_ds.setColumn(0, "STATUS", "재학중");
            this.save_ds.setColumn(0, "DEPARTMENT_CODE", selectedDepartmentCode);  // 선택한 학과 코드 설정
        	trace(selectedDepartmentCode);

        	this.cmb_dept.set_value(selectedDepartmentCode);

        	// 초기화용 ds 카피해두기
        	this.ds_resetStu.clearData();
        	this.ds_reAdr.clearData();
        	this.ds_resetStu.copyData(this.save_ds);
        	this.ds_reAdr.copyData(this.ds_address);

        	this.ImageViewer00.set_text("500KB 이하");
        };

        // 등록 시 이벤트
        this.Stu_Add_btn_onclick = function(obj,e)
        {

        	// 이메일 파트 합치기
        	var ePart = this.save_ds.getColumn(0, "EMAIL_PART");
        	var dPart = this.save_ds.getColumn(0, "DOMAIN_PART");
        	this.save_ds.setColumn(0, "EMAIL", ePart + dPart);
        	trace("이메일은? " + this.save_ds.getColumn(0, "EMAIL"));

        	// 주소 파트 합치기
        	var fAddr = this.ds_address.getColumn(0, "FULLADDR");
        	var rAddr = this.ds_address.getColumn(0, "REMAINADDR");
        	this.save_ds.setColumn(0, "ZIPCODE", this.ds_address.getColumn(0, "ZIPCODE"));
        	trace("우편주소는?" + this.save_ds.getColumn(0, "ZIPCODE"));
        	this.save_ds.setColumn(0, "ADDRESS", fAddr + "/" + rAddr);

        	// id null 검사
        	var stuId = this.save_ds.getColumn(0, "STUDENT_ID");
        	if (stuId == null || stuId == '' || stuId == 'undefined'){
        		alert("아이디를 입력하세요");
        		return;
        	}
        	// pw null 검사
        	var stuPw = this.save_ds.getColumn(0, "PASSWORD");
        	if (stuPw == null || stuPw == '' || stuPw == 'undefined'){
        		alert("비밀번호를 입력하세요");
        		return;
        	}
        	// 우편번호 null 검사
        	var zipCd = this.save_ds.getColumn(0, "ZIPCODE");
        	if (zipCd == null || zipCd == '' || zipCd == 'undefined'){
        		alert("주소를 입력하세요");
        		return;
        	}
        	// 이름 null 검사
        	var name = this.save_ds.getColumn(0, "NAME");
        	if (name == null || name == '' || name == 'undefined'){
        		alert("이름을 입력하세요");
        		return;
        	}


        	// 학과 선택 했는지?
        	var dept = this.cmb_dept.value; // 수정
        	if (dept == 0){
        		alert("학과를 선택해주세요");
        	} else {
        		this.fn_valiEmChk();
        	}

        };

        // 등록 트랜젝션
        this.insertstudent = function()
        {
           var strSvcId    = "insertAdStudent";
           var strSvcUrl   = "svc::insertAdStudent.do";
           var inData      = "save_ds = save_ds";
           var outData     = "";
           var strArg      = "";
           var callBackFnc = "fnCallback";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };
        // 확인 해보고 수정
        this.btn_Reset_onclick = function(obj,e)
        {
        	// 초기 ds 다시 가져오기
        // 	this.save_ds.copyData(this.ds_resetStu);
        // 	this.ds_address.copyData(this.ds_reAdr);
        	if(this.confirm("닫으시겠습니까?")){
        		this.close();
        	}

        };


        //도메인주소 cmb에 넣기 + 직접입력 설정해두기
        this.cmb_Domain_onitemchanged = function(obj,e)
        {
        	var dPart = obj.value

        	// 직접입력 선택시
        	if (dPart == "직접입력") {
                // 입력가능한 상태 만들기
        		this.edt_Domain.set_value("");
        		// edit박스 맨 앞으로
        		this.edt_Domain.bringToFront();
        		// @를 맨 앞에 추가되도록 이벤트 강제호출
        		this.edt_Domain_oneditclick(this.edt_Domain, null);
            } else {
        		// 직접입력 아닐시 선택값 사용
                this.save_ds.setColumn(0, "DOMAIN_PART", dPart);
            }

        };

        // 도메인 직접입력시 esc 누르면 다시 콤보박스 선택
        this.edt_Domain_onkeyup = function(obj,e)
        {
        	if (e.keycode == 27) {
        		this.cmb_Domain.bringToFront();
        	}
        };

        // 이메일 입력파트 - @없이 작성시 맨 앞에 @ 추가
        this.edt_Domain_onchanged = function(obj,e)
        {
        	var cVal = obj.value;

        	if(cVal.indexOf("@") !== 0){
        		obj.set_value("@" + cVal.replace("@", ""));
        	}
        };

        // 이메일 입력파트 - 공백일 경우 @를 맨 앞에 추가한 후 커서를 그 뒤로
        this.edt_Domain_oneditclick = function(obj,e)
        {
        	var cVal = obj.value;
        	if (cVal == "") {
        		obj.set_value("@");
        		obj.setCaretPos(1);
        	}

        };


        // 주소 버튼 클릭 시
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

        	// 도로명(지번)주소 + 참고주소 합치기
        	var mAddr = this.ds_address.getColumn(0, "MAINADDR");
        	var eAddr = this.ds_address.getColumn(0, "EXTRAADDR");
        	this.ds_address.setColumn(0, "FULLADDR", mAddr + "" + eAddr);
        	trace(this.ds_address.getColumn(0, "FULLADDR"));
        };




        // 5-1) 이메일 - 정규식 + 중복확인
        this.edt_id_onchanged = function(obj,e)
        {
        	var stuId = obj.value;
        	//trace(this.save_ds.getRowType(0));
        	if(isNaN(stuId)){
        		alert("숫자만 입력 가능합니다");
        		obj.set_value("");
        		obj.setFocus();
        	} else if(stuId.length !=6) {
        		alert("학번은 여섯자리 입니다")
        		obj.set_value("");
        		obj.setFocus();
        	} else {
        	trace("실행되었나?");
        	this.fn_dupIdChk(stuId);
        	}
        };

        // 5-4) 이메일 정규식
        this.fn_valiEmChk = function ()
        {
        	var email = this.save_ds.getColumn(0, "EMAIL");
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

        // 5-5) 이메일 중복체크
        this.fn_dupEmChk = function ()
        {
        	var strSvcId    = "stuCheckEm";
        	var strSvcUrl   = "svc::stuCheckEm.do";
        	var inData      = "save_ds=save_ds";
        	var outData     = "ds_vali=ds_vali";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        // 이거 수정해야함 ---> 수정함
        this.fn_dupIdChk = function (stuId){

        	var strSvcId    = "studCheckId";
        	var strSvcUrl   = "svc::studCheckId.do";
        	var inData      = "";
        	var outData     = "ds_vali=ds_vali";
        	var strArg      = "STUDENT_ID="+stuId;
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }

        // 5-2) 비밀번호 유효성 검사

        this.edt_password_onchanged = function(obj,e)
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


        // 5-6) 연락처 정규식
        this.fn_valiPhChk = function ()
        {
        	var phone = this.save_ds.getColumn(0, "PHONE");
        	var regph = /^(01[016789]{1})-[0-9]{3,4}-[0-9]{4}$/;
        	if(!regph.test(phone)){
        		alert("연락처는 다음과 같이 입력해주세요 : 01x-xxxx-xxxx");
        		this.edt_Phone.set_value("");
        		this.edt_Phone.setFocus();
        	} else {
        		this.insertstudent();
        	}
        };







        // 필요없는 함수
        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	this.ImageViewer00.set_image("URL('file://" + this.FileUpload00.value + "')");


         	var filePath = this.FileUpload00.value;
         	var fileName = filePath.split("\\").pop();

        	trace(filePath);

        	//this.FileUpTransfer00.upload('http://localhost:8082/HanaUIS/fileupload.jsp');
        };

        // 이미지 등록 이벤트
        this.btn_addfile_onclick = function(obj,e)
        {
        	this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };

        // 이미지 등록 시 확장자 확인
        this.gfnIsImageFile = function(fileTxt) {
        trace("여기 오나?");
            var imageExt = ["png", "jpg", "jpeg"];
            var extNm = fileTxt.substr(fileTxt.lastIndexOf(".") + 1).toLowerCase(); // 확장자를 소문자로 변환
            return imageExt.includes(extNm);
        };

        // 파일 올릴 때 함수
        this.FileDialog00_onclose = function(obj, e) {
        	var filetype = e.virtualfiles[0].filename;
        	if(e.virtualfiles.length > 1){
        		alert("파일이 두개 이상입니다.");
        	}
         	else if(!this.gfnIsImageFile(filetype)){
        		alert("png, "+ "jpg, "+ "jpeg" + "가 아닙니다.");
         	}
        	else{
        		this.addFileList(e.virtualfiles);
        		trace(this.dsList.getColumn(0, "FILE_SIZE"));


        		if(this.dsList.getColumn(0, "FILE_SIZE") < 500000){
        			var name;
        			for (var i = 0; i < e.virtualfiles.length; i++) {
        				this.save_ds.setColumn(0, "PHOTO", e.virtualfiles[i].filename);

        				name = e.virtualfiles[i].filename;

        				// 파일을 서버에 업로드하는 함수 호출
        				this.uploadFileToServer(e.virtualfiles[i]);

        			}
        			this.edt_filename.set_value(name);
        			this.dsList.setColumn(0,"FILE_NAME", name);
        		/*	this.showImagePreview(name);*/

        			setTimeout(function(){
        				this.aftereventFunction();
        			}.bind(this), 100);

        		}else{
        			alert("용량이 너무 큽니다. 500KB이하로 해주세요.");
        			var fileName = e.virtualfiles[0].filename;
        			this.dsList.clearData();
        			this.dsList.addRow();

        			setTimeout(function(){
        				this.deleteFile(fileName);
        			}.bind(this), 100);
        		}
        	}

        };

        // 이미지 미리보기 이벤트
        this.aftereventFunction = function(){
        	trace("이벤트 후에 실행되는 작업입니다.");
        	var filename = this.dsList.getColumn(0,"FILE_NAME");
        	trace(filename);
        	this.showImagePreview(filename); // 이미지 미리보기 함수

        }

        // 파일 추가 처리 함수
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

        // 파일 업로드 함수
        this.uploadFileToServer = function(vFile) {
        	this.FileUpTransfer00.clearFileList();
            this.FileUpTransfer00.addFile(vFile.filename, vFile);
            this.FileUpTransfer00.upload("http://localhost:8082/HanaUIS/showfileupload.jsp"); // JSP 파일 경로
        };

        // 이미지 미리보기 함수
        this.showImagePreview = function(fileName) {
            var encodedFileName = encodeURIComponent(fileName); // 파일 이름 URL 인코딩
            var imagePath = "http://localhost:8082/HanaUIS/showFile.jsp?filename=" + encodedFileName +"&type=view"; // 업로드한 파일 경로
            this.ImageViewer00.set_image("url('" + imagePath + "')"); // ImageViewer에 이미지 설정

        	// 이미지가 없을 때 나오는 text
        	if(this.save_ds.getColumn(0, "PHOTO") == null || this.save_ds.getColumn(0, "PHOTO") == "" || this.save_ds.getColumn(0, "PHOTO") == "undefined"){
        		this.ImageViewer00.set_text("500KB 이하");
        	}else {
        		this.ImageViewer00.set_text("");
        	}

        	setTimeout(function(){
        		this.deleteFile(fileName);
        	}.bind(this), 10000);

        };

        // 파일 삭제 요청 함수
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

        // 콜백 함수 정의
        this.callbackDeleteFile = function(svcID, errorCode, errorMsg) {
            if (errorCode == 0) {
                trace("파일 삭제 성공");
            } else {
                trace("파일 삭제 실패: " + errorMsg);
                // 추가적인 디버깅 정보 출력
                trace("서비스 ID: " + svcID);
            }
        };


        // virtualfile의 성공 실패
        this.FileList_onsuccess = function(obj, e) {
            switch (e.reason) {
                case 1:
                    obj.getFileSize();
                    break;
                case 9: // 들어와졌을 때
                    this.FileUpTransfer00.addFile(obj.filename, obj);
        			this.dsList.setColumn(0, "FILE_SIZE", e.filesize);
        			//this.FileUpTransfer00.upload("http://localhost:8082/HanaUIS/fileupload.jsp");
                    break;
            }
        };

        // 파일 추가 에러시 발동 함수
        this.FileList_onerror = function(obj, e)
        {
            trace("errortype: "+e.errortype);
            trace("errormsg: "+e.errormsg);
            trace("statuscode: "+e.statuscode);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Popup_Work_onload,this);
            this.edt_id.addEventHandler("onchanged",this.edt_id_onchanged,this);
            this.edt_name.addEventHandler("onchanged",this.edt_name_onchanged,this);
            this.edt_password.addEventHandler("onchanged",this.edt_password_onchanged,this);
            this.Stu_Add_btn.addEventHandler("onclick",this.Stu_Add_btn_onclick,this);
            this.btn_addfile.addEventHandler("onclick",this.btn_addfile_onclick,this);
            this.btn_Reset.addEventHandler("onclick",this.btn_Reset_onclick,this);
            this.edt_Domain.addEventHandler("onkeyup",this.edt_Domain_onkeyup,this);
            this.edt_Domain.addEventHandler("onchanged",this.edt_Domain_onchanged,this);
            this.edt_Domain.addEventHandler("oneditclick",this.edt_Domain_oneditclick,this);
            this.cmb_Domain.addEventHandler("onitemchanged",this.cmb_Domain_onitemchanged,this);
            this.btn_Adr.addEventHandler("onclick",this.btn_Adr_onclick,this);
            this.wb_Adress.addEventHandler("onusernotify",this.wb_Adress_onusernotify,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("add_Student_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
