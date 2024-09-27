(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("select_Student_Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("save_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENT_ID\" type=\"INT\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIV_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ger_type", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">M</Col><Col id=\"data\">남자</Col></Row><Row><Col id=\"code\">F</Col><Col id=\"data\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_de", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("static_type_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">재학</Col><Col id=\"data\">재학</Col></Row><Row><Col id=\"code\">휴학</Col><Col id=\"data\">휴학</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("grade_type", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">1학년</Col></Row><Row><Col id=\"data\">2학년</Col><Col id=\"code\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_03_01_00_00_00_01","426","350","493","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00","700","252","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00","700","301","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00","426","301","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","700","203","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","700","154","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00","426","252","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00","426","203","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","426","154","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","700","105","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","426","105","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","329","105","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학번");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","329","154","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","602","105","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   비밀번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","602","154","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학과");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","329","203","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학년");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","602","203","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   핸드폰");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","602","252","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이메일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","329","252","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   성별");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","83","105","177","236",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","329","301","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   상태");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","602","301","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   생년월일");
            this.addChild(obj.name, obj);

            obj = new Button("Stu_Add_btn","769","423","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01","329","350","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   주소");
            this.addChild(obj.name, obj);

            obj = new Edit("STUDENT_ID","438","115","152","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("PASSWORD","711","115","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_password("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("NAME","438","164","152","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("de","713","163","193","31",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_de");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("UNIV_YEAR","437","213","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_innerdataset("grade_type");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonly("true");
            obj.set_text("1학년");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("PHONE","711","213","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("GENDER","440","260","150","36",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("ger_type");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("M");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Edit("EMAIL","711","262","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("STATUS","437","311","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_innerdataset("static_type_ds");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("BIRTHDAY","710","311","196","31",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("ADDRESS","437","360","469","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("return_btn","630","423","119","39",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("되돌아가기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("save_btn","770","424","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","STUDENT_ID","value","save_ds","STUDENT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","PASSWORD","value","save_ds","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","NAME","value","save_ds","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","de","value","save_ds","DEPARTMENT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","UNIV_YEAR","value","save_ds","UNIV_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","PHONE","value","save_ds","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","GENDER","value","save_ds","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","EMAIL","value","save_ds","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","STATUS","value","save_ds","STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","BIRTHDAY","value","save_ds","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","ADDRESS","value","save_ds","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("select_Student_Popup.xfdl", function() {

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
        		case "saveAdStudent":
        			this.alert("성공적으로 수정하였습니다.");
        			this.close();
        			break;
        	}
        };

        this.select_Student_Popup_onload = function(obj,e)
        {
        	var objParam1 = this.parent.param1;
        	var objParam2 = this.parent.param2;

         	this.save_ds.copyData(objParam1);
        	this.ds_de.copyData(objParam2);
         	/*console.log(this.select_student.getColumn(0,all));*/

        	console.log(this.select_student.getColumn(0,"GENDER"));
        	console.log(this.select_student.getColumn(0,"DEPARTMENT_NAME"));

        	this.STUDENT_ID.set_readonly(true);
        	this.PASSWORD.set_readonly(true);
        	this.NAME.set_readonly(true);
        	this.UNIV_YEAR.set_readonly(true);
        	this.PHONE.set_readonly(true);
        	this.EMAIL.set_readonly(true);
        	this.BIRTHDAY.set_readonly(true);
        	this.GENDER.set_readonly(true);
        	this.ADDRESS.set_readonly(true);
        	this.STATUS.set_readonly(true);
        	this.de.set_readonly(true);

        };


        this.Stu_Add_btn_onclick = function(obj,e)
        {
        	this.PASSWORD.set_readonly(false);
        	this.NAME.set_readonly(false);
        	this.UNIV_YEAR.set_readonly(false);
        	this.PHONE.set_readonly(false);
        	this.EMAIL.set_readonly(false);
        	this.BIRTHDAY.set_readonly(false);
        	this.GENDER.set_readonly(false);
        	this.ADDRESS.set_readonly(false);
        	this.STATUS.set_readonly(false);
        	this.de.set_readonly(false);

        	this.return_btn.set_visible(true);

        	this.Stu_Add_btn.set_visible(false);
        	this.save_btn.set_visible(true);

        };

        this.fn_update_student = function()
        {
        	var strSvcId    = "saveAdStudent";
        	var strSvcUrl   = "svc::saveAdStudent.do";
        	var inData      = "save_ds = save_ds";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }

        this.return_btn_onclick = function(obj,e)
        {
        	this.STUDENT_ID.set_readonly(true);
        	this.PASSWORD.set_readonly(true);
        	this.NAME.set_readonly(true);
        	this.UNIV_YEAR.set_readonly(true);
        	this.PHONE.set_readonly(true);
        	this.EMAIL.set_readonly(true);
        	this.BIRTHDAY.set_readonly(true);
        	this.GENDER.set_readonly(true);
        	this.ADDRESS.set_readonly(true);
        	this.STATUS.set_readonly(true);
        	this.de.set_readonly(true);

        	this.return_btn.set_visible(false);

        	this.Stu_Add_btn.set_visible(true);
        	this.save_btn.set_visible(false);
        };


        this.save_btn_onclick = function(obj,e)
        {
        	this.fn_update_student();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.select_Student_Popup_onload,this);
            this.Static00_03_01.addEventHandler("onclick",this.Static00_03_01_onclick,this);
            this.Stu_Add_btn.addEventHandler("onclick",this.Stu_Add_btn_onclick,this);
            this.return_btn.addEventHandler("onclick",this.return_btn_onclick,this);
            this.save_btn.addEventHandler("onclick",this.save_btn_onclick,this);
        };
        this.loadIncludeScript("select_Student_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
