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
                this._setFormPosition(1100,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Login_Ds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"Id\" type=\"STRING\" size=\"256\"/><Column id=\"Password\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Certificate_Ds", this);
            obj._setContents("<ColumnInfo><Column id=\"LoginCheck\" type=\"STRING\" size=\"256\"/><Column id=\"Check\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("email_Ds", this);
            obj._setContents("<ColumnInfo><Column id=\"Check\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","0","0","940","550",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_image("url(\'image::그림1.png\')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Button("Test_Btn","715","460","205","72",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("바로넘어가기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","55","70","450","420",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#fffff");
            obj.set_opacity("0.7");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","185","408","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_font("18px/normal \"Gulim\"");
            obj.set_readonly("true");
            obj.set_cssclass("edt_Adr");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","80","312","88","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("아이디    :");
            obj.set_font("18px/normal \"Gulim\"");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","80","355","88","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("비밀번호 :");
            obj.set_font("18px/normal \"Gulim\"");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("txt_Id","185","316","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("18px/normal \"Gulim\"");
            obj.set_text("fddfd");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","76","400","92","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("인증번호 :");
            obj.set_font("18px/normal \"Gulim\"");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("Mail_Btn","398","408","82","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("인증번호");
            obj.set_font("16px/normal \"Gulim\"");
            obj.set_cssclass("btnLogin");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Login_btn","398","363","82","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("로그인");
            obj.set_font("16px/normal \"Gulim\"");
            obj.set_defaultbutton("false");
            obj.set_cssclass("btnLogin");
            this.addChild(obj.name, obj);

            obj = new Edit("txt_Password","185","363","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_password("true");
            obj.set_font("18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","109","130","342","70",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("하나대학교");
            obj.set_textAlign("center");
            obj.set_letterSpacing("5px");
            obj.set_font("60px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","206","244","147","42",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("관리자 로그인");
            obj.set_textAlign("center");
            obj.set_font("20px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","131","213","298","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("학사 정보 시스템");
            obj.set_textAlign("center");
            obj.set_font("30px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("stt_findPwd","298","446","82","16",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("비밀번호 찾기");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,600,this,function(p){});
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
        	if (errorCode == -1) {
        		this.alert(errorMsg)
        		return;
        	}

        	switch(svcID) {
        	case "selectLogin":
        		if (this.Certificate_Ds.getColumn(0, "LoginCheck") == 'Y') {
        			this.alert("인증번호가 이메일로 발송 되었습니다.");
        			this.Edit00_01.set_readonly(false);
        			this.Mail_Btn.set_enable(true);
        			return;
        		}
        		else{
        			alert("아이디 혹은 비밀번호를 확인해 주세요.");
        			return;
        		}
        		break;
        	case "addSession":
        		if (this.Certificate_Ds.getColumn(0, "Check") == 'N') {
        			this.alert("인증번호가 일치하지 않습니다.");
        			return;
        		} else {
        			// 글로벌ds에 값 넣기
        			var gdsAd = nexacro.getApplication();
        			gdsAd.gds_adminInfo.setColumn(0, "ADMIN_CODE", this.Certificate_Ds.getColumn(0,"ADMIN_CODE"));
        			gdsAd.gds_adminInfo.setColumn(0, "REGDATE", this.Certificate_Ds.getColumn(0,"REGDATE"));
        			gdsAd.gds_adminInfo.setColumn(0, "NAME", this.Certificate_Ds.getColumn(0, "NAME"));

        			console.log("세션 설정되나1 " + gdsAd.gds_adminInfo.getColumn(0, "ADMIN_CODE"));
        			console.log("세션 설정되나2 " + gdsAd.gds_adminInfo.getColumn(0, "REGDATE"));
        			console.log("세션 설정되나3 " + gdsAd.gds_adminInfo.getColumn(0, "NAME"));

        			let objApp = nexacro.getApplication();
        			objApp.mainframe.VFrameSet00.TopFrame.set_visible(true);
        			objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.set_visible(true);
        			objApp.mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl("FrameBase::Form_Work.xfdl");

        			var LeftFrame = objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.form;
              LeftFrame.stc_admin.set_text("환영합니다 "+gdsAd.gds_adminInfo.getColumn(0, "NAME")+"관리자님");
        		}
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
        	objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.set_visible(true);
        	objApp.mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl("FrameBase::Form_Work.xfdl");
        	return;
        };


        this.Mail_Btn_onclick = function(obj,e)
        {
        	if (isEmpty(this.email_Ds.getColumn(0, "Check"))) {
        		alert("인증번호를 입력해주세요.");
        		return;
        	} else {
        		var email = this.email_Ds.getColumn(0, "Check");
        		this.fn_addSession(email);
        	}


        };

        this.fn_addSession = function (email)
        {
        	var strSvcId    = "addSession";
        	var strSvcUrl   = "svc::addSession.do";
        	var inData      = "";
        	var outData     = "Certificate_Ds=Certificate_Ds";
        	var strArg      = "EMAIL_CHECK="+email;
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************
        * 		비밀번호 찾기
        ************************************************************************/
        // 팝업 설정 및 호출
        this.showPopup = function (objParam, surl)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("popupWork", 0, 0, 800, 700, null, null, surl);
        	popup.set_dragmovetype("normal");
        	popup.set_layered("true");
        	popup.set_autosize(true);
        	popup.set_showtitlebar("Popup Title");
        	popup.set_showstatusbar(true);
        	popup.set_resizable(true);
        	popup.set_openalign("center middle");
        	popup.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback", true);
         	//popup.style.set_overlaycolor("#6666664C");
         	//popup.form.style.set_border("1 solid #4c5a6f");
        }

        this.stt_findPwd_onclick = function(obj,e)
        {
        	var surl = "MainBase::findPwd.xfdl";
        	this.showPopup(objParam, surl);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Test_Btn.addEventHandler("onclick",this.Test_Btn_onclick,this);
            this.Static03.addEventHandler("onclick",this.Static03_onclick,this);
            this.Static03_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.Mail_Btn.addEventHandler("onclick",this.Mail_Btn_onclick,this);
            this.Login_btn.addEventHandler("onclick",this.Login_btn_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.stt_findPwd.addEventHandler("onclick",this.stt_findPwd_onclick,this);
        };
        this.loadIncludeScript("form_login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
