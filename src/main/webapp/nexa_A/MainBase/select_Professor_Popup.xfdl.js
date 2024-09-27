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
            obj._setContents("<ColumnInfo><Column id=\"PROFESSOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">M</Col><Col id=\"data\">남성</Col></Row><Row><Col id=\"code\">W</Col><Col id=\"data\">여성</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">재직</Col><Col id=\"data\">재직</Col></Row><Row><Col id=\"code\">휴직</Col><Col id=\"data\">휴직</Col></Row><Row><Col id=\"code\">퇴직</Col><Col id=\"data\">퇴직</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_admin", this);
            obj._setContents("<ColumnInfo><Column id=\"regDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_03_01_00_00_00_01","436","416","493","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00","710","220","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00","710","269","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00","436","269","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","710","171","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","710","122","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00","436","171","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","436","122","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","710","73","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","436","73","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","339","73","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   교번");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","339","122","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   성명");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","612","73","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   비밀번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","612","122","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   담당학과");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","612","269","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이메일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","612","220","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   연락처");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","339","171","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   성별");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","93","73","177","236",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","339","269","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   재직여부");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","612","171","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   생년월일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01","339","416","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   주소");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProId","447","83","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProPw","721","83","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_password("false");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProName","447","132","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Dept","721","131","195","31",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Email","721","279","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_Gender","447","181","153","36",null,null,null,null,null,null,this);
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

            obj = new Edit("edt_Phone","721","230","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Status","447","279","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_innerdataset("ds_status");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Birth","721","181","195","31",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Adr","448","426","469","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","339","220","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   연구실");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_02","436","220","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Lab","447","230","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_innerdataset("static_type_ds");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","93","329","177","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","779","491","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("작성완료");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_02","436","318","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00_00","710","318","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_02","339","318","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   등록ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","612","318","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   등록일");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Admin","447","328","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_RegDate","721","328","195","31",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01_00","339","367","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   재직일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_02_00","436","367","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00_00_00","710","367","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","612","367","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   퇴직일");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_LastDay","720","377","195","31",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_FirstDay","447","377","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Update","779","491","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Retrun","599","491","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("되돌아가기");
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

            obj = new BindItem("item5","edt_Email","value","ds_pro","EMAIL");
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

            obj = new BindItem("item10","edt_Adr","value","ds_pro","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cal_RegDate","value","ds_admin","regDate");
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
        // 3. 수정완료 - update문 실행시키기

        // 1. 화면호출
        this.select_Professor_Popup_onload = function(obj,e)
        {
        	/* 필요한 기능
        	 * param 받아오기
        	 * readonly 설정해놓기
        	 */

        	var objParam1 = this.parent.param1;
        	var objParam2 = this.parent.param2;

         	this.ds_pro.copyData(objParam1);
        	this.ds_dept.copyData(objParam2);

        	// readonly 설정하기
        	this.edt_ProId.set_readonly(true);
        	this.edt_ProPw.set_readonly(true);
        	this.edt_ProName.set_readonly(true);
        	this.cmb_Dept.set_readonly(true);
        	this.rdo_Gender.set_readonly(true);
        	this.cal_Birth.set_readonly(true);
        	this.cmb_Lab.set_readonly(true);
        	this.edt_Phone.set_readonly(true);
        	this.cmb_Status.set_readonly(true);
        	this.edt_Email.set_readonly(true);
        	this.edt_Adr.set_readonly(true);
        	this.cal_FirstDay.set_readonly(true);
        	this.cal_LastDay.set_readonly(true);

        	this.btn_Retrun.set_visible(false);
        };

        // 2. 수정버튼 - readonly 해제(입력필드 제공)
        this.btn_Update_onclick = function(obj,e)
        {
        	this.edt_ProId.set_readonly(false);
        	this.edt_ProPw.set_readonly(false);
        	this.edt_ProName.set_readonly(false);
        	this.cmb_Dept.set_readonly(false);
        	this.rdo_Gender.set_readonly(false);
        	this.cal_Birth.set_readonly(false);
        	this.cmb_Lab.set_readonly(false);
        	this.edt_Phone.set_readonly(false);
        	this.cmb_Status.set_readonly(false);
        	this.edt_Email.set_readonly(false);
        	this.edt_Adr.set_readonly(false);
        	this.cal_FirstDay.set_readonly(false);
        	this.cal_LastDay.set_readonly(false);

        	this.btn_Update.set_visible(false);
        	this.btn_Retrun.set_visible(true);
        };

        // 3. 작성완료 - update문 실행

        this.btn_Add_onclick = function(obj,e)
        {
        	this.fn_updatePro();

        };

        // update 함수 호출 - insert 컨트롤러와 동일 경로
        this.fn_updatePro = function ()
        {
        	var strSvcId    = "updatePro";
        	var strSvcUrl   = "svc::saveAdPro.do";
        	var inData      = "ds_pro = ds_pro";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 되돌아가기 버튼 - 초기 상태로 되돌림
        this.btn_Retrun_onclick = function(obj,e)
        {
        	this.edt_ProId.set_readonly(true);
        	this.edt_ProPw.set_readonly(true);
        	this.edt_ProName.set_readonly(true);
        	this.cmb_Dept.set_readonly(true);
        	this.rdo_Gender.set_readonly(true);
        	this.cal_Birth.set_readonly(true);
        	this.cmb_Lab.set_readonly(true);
        	this.edt_Phone.set_readonly(true);
        	this.cmb_Status.set_readonly(true);
        	this.edt_Email.set_readonly(true);
        	this.edt_Adr.set_readonly(true);
        	this.cal_FirstDay.set_readonly(true);
        	this.cal_LastDay.set_readonly(true);

        	this.btn_Retrun.set_visible(false);
        	this.btn_Update.set_visible(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.select_Professor_Popup_onload,this);
            this.Static00_01_00.addEventHandler("onclick",this.Static00_01_00_onclick,this);
            this.Static00_00_02.addEventHandler("onclick",this.Static_onclick,this);
            this.Static00_03_02.addEventHandler("onclick",this.Static_onclick,this);
            this.FileUpload00.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.cal_RegDate.addEventHandler("onchanged",this.cal_RegDate_onchanged,this);
            this.Static00_00_01_00_01_00.addEventHandler("onclick",this.Static00_00_01_00_01_00_onclick,this);
            this.btn_Update.addEventHandler("onclick",this.btn_Update_onclick,this);
            this.btn_Retrun.addEventHandler("onclick",this.btn_Retrun_onclick,this);
        };
        this.loadIncludeScript("select_Professor_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
