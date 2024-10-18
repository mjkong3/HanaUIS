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
        this.Form_Work_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btn_Search.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmWork_onload,this);
            this.addEventHandler("onkeyup",this.Form_Work_onkeyup,this);
            this.ImageViewer00.addEventHandler("onclick",this.ImageViewer00_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
