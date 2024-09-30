(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","70","0","930","559",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'image::KakaoTalk_20240905_092944347.png\')");
            obj.set_border("10px solid white");
            this.addChild(obj.name, obj);

            obj = new Static("M_NM","270","409","530","81",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("관리자 페이지에 오신것을 환영합니다");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1080,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
        // this.frmWork_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
        // {
        //     // 화면 초기화 함수 호출
        //     this.fnInitForm();
        // };
        //
        // this.fnInitForm = function ()
        // {
        //   //현재 form이 소속된 부모 frame 반
        //   var objOwnerFrame = this.getOwnerFrame();
        //
        //   //파라미터 정보 중 메뉴명 가져오기
        //   var sPageNm = objOwnerFrame.param.menunm;
        //
        //   //파라미터 정보 중 메뉴경로 가져오기
        //   var sFormPath= objOwnerFrame.param.menupath;
        //
        //   //화면 타이틀 설정
        //   this.staTitle.set_text(sPageNm);
        //   this.staTitle.set_fittocontents("width");
        //
        // };

        this.ImageViewer00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmWork_onload,this);
            this.ImageViewer00.addEventHandler("onclick",this.ImageViewer00_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
