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
            obj._setContents("<ColumnInfo><Column id=\"ADMIN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VERICODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stt_findPwd","77","0","126","35",null,null,null,null,null,null,this);
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
            this.addChild(obj.name, obj);

            obj = new Static("stt_name","77","115","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이름");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","187","115","101","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("stt_pwd1","77","220","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("새 비밀번호");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pwd1","187","220","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stt_pwd2","77","270","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("비밀번호 확인");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pwd2","187","270","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stt_code","77","165","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("인증 번호");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_code","187","165","101","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
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
         * 								 트랜잭션
         ************************************************************************/

        // 유저가 db에 있는지 확인 후 이메일 보내기 이후 fnCallbackSendMail
        this.fnCheckUser = function() {
        	var strSvcId    = "userCheck";
            var strSvcUrl   = "svc::userCheck.do";
            var inData      = "ds_check=ds_check";
            var outData     = "ds_check=ds_check";  // 결과를 받을 데이터셋
            var strArg      = ""
            var callBackFnc = "fnCallbackSendMail";
            var isAsync     = false;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        // 코드
        this.fnCallbackSendMail = function() {
        	this.edt_code.set_readonly(false);
        }


        /************************************************************************
         *								버튼 이벤트
         ************************************************************************/


        //인증번호 발송 버튼
        this.btn_sendCode_onclick = function(obj,e)
        {
        	this.ds_check.setColumn(0, "ADMIN_CODE", this.edt_code.value);
        	this.ds_check.setColumn(0, "NAME", this.edt_name.value);
        };

        //인증번호 확인 버튼
        this.btn_checkCode_onclick = function(obj,e)
        {

        };


        //수정 버튼
        this.btn_update_onclick = function(obj,e)
        {

        };

        //닫기 버튼
        this.btn_close_onclick = function(obj,e)
        {
        	this.close;
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
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
