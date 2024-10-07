(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form_login");
            this.set_titletext("New Form");
            this.set_font("36px/normal \"Gulim\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Login_Ds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"Id\" type=\"STRING\" size=\"256\"/><Column id=\"Password\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Certificate_Ds", this);
            obj._setContents("<ColumnInfo><Column id=\"LoginCheck\" type=\"STRING\" size=\"256\"/><Column id=\"Check\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REGDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("email_Ds", this);
            obj._setContents("<ColumnInfo><Column id=\"Check\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("image_logo","-300:1.56%","36","599","600",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_image("url(\'image::KakaoTalk_20240905_092944347.png\')");
            obj.set_border("10px solid white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","614","88","461","82",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("하나대학교");
            obj.set_textAlign("center");
            obj.set_letterSpacing("5px");
            obj.set_font("88px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","658","188","372","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("학사 정보 시스템");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","728","224","232","72",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("관리자 로그인");
            obj.set_textAlign("center");
            obj.set_font("26px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","731","469","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","618","337","99","56",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("아이디 :");
            obj.set_font("20px/normal \"Gulim\"");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","621","395","99","56",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("비밀번호 :");
            obj.set_font("20px/normal \"Gulim\"");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","531","461","190","56",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("인증번호 :");
            obj.set_font("20px/normal \"Gulim\"");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("Mail_Btn","1013","469","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("인증번호 확인");
            obj.set_font("20px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("Login_btn","1013","403","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("로그인");
            obj.set_font("20px/normal \"Gulim\"");
            obj.set_defaultbutton("false");
            this.addChild(obj.name, obj);

            obj = new Button("Test_Btn","228","548","205","72",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("바로넘어가기");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("txt_Id","731","345","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("fddfd");
            this.addChild(obj.name, obj);

            obj = new Edit("txt_Password","731","403","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_password("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txt_Id","value","Login_Ds","Id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","txt_Password","value","Login_Ds","Password");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit00_01","value","email_Ds","Check");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("form_login.xfdl", function() {
        //처리콜백 함수
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	/*this.alert(" ErrorCode -->" + errorCode + "  ErrorMsg : " + errorMsg);*/
        	console.log("svcID = " + svcID);

        	switch(svcID) {
        	case "selectLogin":
        		if (this.Certificate_Ds.getColumn(0, "LoginCheck") == 'Y') {
        			this.alert("인증번호가 이메일로 발송 되었습니다.");

        			return;
        		}
        		else{
        			alert("아이디 혹은 비밀번호를 확인해 주세요.");
        			return;
        		}
        		break;
        	default:
        	}
        };



        function isEmpty(value) {
            return value == '' || value == undefined || value == null;
        }


        this.fnLogin = function(){

        	console.log("Login_Ds =" + this.Login_Ds.getColumn(0,"Id"));
        	console.log("Login_Ds =" + this.Login_Ds.getColumn(0,"Password"));

        	if (isEmpty(this.Login_Ds.getColumn(0, "Id"))) {
        		alert("아이디를 입력해주세요.");
        		return;
        	}
        	else if (isEmpty(this.Login_Ds.getColumn(0, "Password"))) {
        		alert("비밀번호를 입력해주세요.");
        		return;
        	}

        	var strSvcId    = "selectLogin";
        	var strSvcUrl   = "svc::selectLogin.do";
        	var inData      = "Login_Ds=Login_Ds";
        	var outData     = "Certificate_Ds=Certificate_Ds";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = false;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }

        this.Login_btn_onclick = function(obj,e)
        {

        	this.fnLogin(); // 로그인 처리

        };


        this.Test_Btn_onclick = function(obj,e)
        {
        	objApp = nexacro.getApplication();
        	objApp.mainframe.VFrameSet00.TopFrame.set_visible(true);
        	this.go("FrameBase::Form_Work.xfdl");
        	return;
        };


        this.Mail_Btn_onclick = function(obj,e)
        {
        	if (isEmpty(this.email_Ds.getColumn(0, "Check"))) {
        		alert("인증번호를 입력해주세요.");
        		return;
        	}
        	else if(this.email_Ds.getColumn(0, "Check") == this.Certificate_Ds.getColumn(0,"Check")){
        		alert("인증번호 확인되었습니다.");
        		// 글로벌ds에 값 넣기
        		var gdsAd = nexacro.getApplication();
        		gdsAd.gds_adminInfo.setColumn(0, "ADMIN_CODE", this.Certificate_Ds.getColumn(0,"ADMIN_CODE"));
        		gdsAd.gds_adminInfo.setColumn(0, "REGDATE", this.Certificate_Ds.getColumn(0,"REGDATE"));
        		gdsAd.gds_adminInfo.setColumn(0, "NAME", this.Certificate_Ds.getColumn(0, "NAME"));

        		console.log("세션 설정되나1 " + gdsAd.gds_adminInfo.getColumn(0, "ADMIN_CODE"));
        		console.log("세션 설정되나2 " + gdsAd.gds_adminInfo.getColumn(0, "REGDATE"));
        		console.log("세션 설정되나3 " + gdsAd.gds_adminInfo.getColumn(0, "NAME"));
        		// 세션 설정하기
        		var adminCode = gdsAd.gds_adminInfo.getColumn(0, "ADMIN_CODE");
        		this.fn_addSession(adminCode);
        		let objApp = nexacro.getApplication();
        		objApp.mainframe.VFrameSet00.TopFrame.set_visible(true);
        		this.go("FrameBase::Form_Work.xfdl");
        	}
        	else{
        		alert("인증번호를 다시 확인해주세요.");
        	}

        };

        this.fn_addSession = function (adminCode)
        {
        	var strSvcId    = "addSession";
        	var strSvcUrl   = "svc::addSession.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "ADMIN_CODE="+adminCode;
        	var callBackFnc = "fnCallBack_add";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.image_logo.addEventHandler("onclick",this.ImageViewer00_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static03.addEventHandler("onclick",this.Static03_onclick,this);
            this.Static03_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.Mail_Btn.addEventHandler("onclick",this.Mail_Btn_onclick,this);
            this.Login_btn.addEventHandler("onclick",this.Login_btn_onclick,this);
            this.Test_Btn.addEventHandler("onclick",this.Test_Btn_onclick,this);
        };
        this.loadIncludeScript("form_login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
