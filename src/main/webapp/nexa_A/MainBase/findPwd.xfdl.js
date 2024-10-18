(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("findPwd");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_check", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD1\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_vericheck", this);
            obj._setContents("<ColumnInfo><Column id=\"OK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_valicheck", this);
            obj._setContents("<ColumnInfo><Column id=\"usercheck\" type=\"STRING\" size=\"256\"/><Column id=\"codecheck\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stt_findPwd","177","10","126","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("비밀번호 찾기");
            obj.set_font("18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("stt_id","77","65","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("관리자 코드");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","187","65","101","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("stt_name","77","115","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이름");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","187","115","101","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_inputfilter("none,comma,digit,dot,symbol,sign");
            this.addChild(obj.name, obj);

            obj = new Static("stt_pwd1","77","220","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("새 비밀번호");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pwd1","187","220","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_password("true");
            obj.set_imeaction("search");
            obj.set_tooltiptext("문자, 숫자, 특수문자가 필요하며, 8자 이상이 필요합니다.");
            obj.set_text("asdfj;");
            this.addChild(obj.name, obj);

            obj = new Static("stt_pwd2","77","270","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("비밀번호 확인");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pwd2","187","270","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Static("stt_code","77","165","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("인증 번호");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_code","187","165","101","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_inputfilter("none");
            obj.set_inputtype("digit");
            obj.set_maxlength("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sendCode","330","115","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("인증번호 발송");
            this.addChild(obj.name, obj);

            obj = new Button("btn_checkCode","330","165","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("인증번호 확인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update","188","345","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","263","345","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,420,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("findPwd.xfdl", function() {
        /************************************************************************
         * 								콜백함수
         ************************************************************************/
        // 코드
        this.fnCallback = function(svcID, errCD, errMsg) {

        	if (errCD == -1 ) {
        		alert(errMsg);
        		return;
        	}

        	switch(svcID) {
        		case "userCheck" :
        			if (this.ds_valicheck.getColumn(0, "usercheck") == "Y"){
        				alert("인증코드가 이메일로 발송되었습니다.");
        				this.edt_code.set_readonly(false);
        				this.btn_sendCode.set_enable(false);
        			} else {
        				alert("일치하는 회원정보가 없습니다.");
        			}

        		break;

        		case "matchCode" :
        			if (this.ds_valicheck.getColumn(0, "codecheck") == "Y") {
        				alert("인증이 완료되었습니다.");
        				this.edt_pwd1.set_readonly(false);
        				this.edt_pwd2.set_readonly(false);
        				this.btn_checkCode.set_enable(false);
        			} else {
        				alert("인증번호가 일치하지 않습니다.");
        				this.edt_code.set_value("");
        			}
        		break;

        		case "updatePwd" :


        			alert("비밀번호가 변경되었습니다.");
        			this.close();
        		break;
        	}
        }




        /************************************************************************
         * 								 트랜잭션
         ************************************************************************/

        // 유저가 db에 있는지 확인 후 이메일 보내기 이후 fnCallbackSendMail
        this.fnCheckUser = function() {
        	var strSvcId    = "userCheck";
            var strSvcUrl   = "svc::userCheck.do";
            var inData      = "ds_check=ds_check";
            var outData     = "ds_valicheck=ds_valicheck";  // 결과를 받을 데이터셋
            var strArg      = ""
            var callBackFnc = "fnCallback";
            var isAsync     = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        // 인증번호 매치
        this.fnMatchCode = function() {

        	var strSvcId    = "matchCode";
        	var strSvcUrl   = "svc::matchCode.do";
        	var inData      = "ds_vericheck=ds_vericheck";
        	var outData     = "ds_valicheck=ds_valicheck";  // 결과를 받을 데이터셋
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 비밀번호 업데이트
        this.fnUpdatePwd = function() {
        	console.log(this.ds_check.saveXML());

        	var strSvcId    = "updatePwd";
        	var strSvcUrl   = "svc::updatePwd.do";
        	var inData      = "ds_check=ds_check";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        /************************************************************************
         *								버튼 이벤트
         ************************************************************************/


        //인증번호 발송 버튼
        this.btn_sendCode_onclick = function(obj,e)
        {
        	if (this.edt_id.value == null || this.edt_id.value == "" || this.edt_id.value == "undefined") {
        		alert("아이디가 입력되지 않았습니다.");
        	} else if (this.edt_name.value == null || this.edt_name.value == "" || this.edt_name.value == "undefined") {
        		alert("이름이 입력되지 않았습니다.")
        	} else if (this.edt_id.value.length = 4) {

        	this.ds_check.setColumn(0, "id", this.edt_id.value);
        	this.ds_check.setColumn(0, "name", this.edt_name.value);

        	trace(this.ds_check.saveXML());

        	this.fnCheckUser();

        	trace(this.ds_check.saveXML());
        	} else {
        		alert("일치하는 회원정보가 없습니다.");
        	}
        };

        //인증번호 확인 버튼
        this.btn_checkCode_onclick = function(obj,e)
        {
        	this.ds_vericheck.setColumn(0, "OK", this.edt_code.value);

        	trace(this.ds_vericheck.saveXML());

        	this.fnMatchCode();
        };


        //수정 버튼
        this.btn_update_onclick = function(obj,e)
        {
        	this.ds_check.setColumn(0, "PASSWORD1", this.edt_pwd1.value);
        	this.ds_check.setColumn(0, "PASSWORD2", this.edt_pwd2.value);
        	if (this.edt_pwd1.value == null || this.edt_pwd1.value == "" || this.edt_pwd1.value == "undefined") {
        		alert("모든 항목을 입력해주세요.");
        	} else {
        		if (this.edt_pwd1.value == this.edt_pwd2.value) {
        			this.fnUpdatePwd();
        		} else {
        			alert("새 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        		}
        	}
        };

        //닫기 버튼
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        /************************************************************************
         * 								타 이벤트
         ************************************************************************/

         // 비밀번호 정규식
        this.edt_pwd1_onchanged = function(obj,e)
        {
            var password = obj.value;
            var regex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
        		if (!regex.test(password)) {
        			alert("비밀번호는 최소 8자 이상이며, 특수문자가 포함되어야 합니다.");
        			obj.set_value("");
        			obj.setFocus();
        		} else {
        			trace("비밀번호가 변경되었습니다.");
        		}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edt_pwd1.addEventHandler("onchanged",this.edt_pwd1_onchanged,this);
            this.btn_sendCode.addEventHandler("onclick",this.btn_sendCode_onclick,this);
            this.btn_checkCode.addEventHandler("onclick",this.btn_checkCode_onclick,this);
            this.btn_update.addEventHandler("onclick",this.btn_update_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("findPwd.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
