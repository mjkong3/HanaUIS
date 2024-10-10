(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("divresetsize");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","10","10","420","210",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","22","36","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","80","96","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","120","205","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","279","229","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Button01");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","10","Div00:10","420","210",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","22","36","120","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00","80","96","120","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","359","94","120","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","529","129","120","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Button01");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","10","Div01:9","420","210",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","22","36","120","50",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00","80","96","120","50",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","120","205","120","50",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","389","74","120","50",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01","469","229","120","50",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("Button01");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","440","10","170","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("gfnResetSize(obj, \"height\")");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","Div01:10","Div00:10","170","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("gfnResetSize(obj, \"width\")");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","Div02:10","Div01:10","170","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("gfnResetSize(obj, \"both\")");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,780,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("divresetsize.xfdl","lib_techtip::lib_divresetsize.xjs");
        this.registerScript("divresetsize.xfdl", function() {
        /**
        *  @MenuPath    techtip > divresetsize
        *  techtip  Reset div size(하위 컴포넌트 크기에 맞춰 Div 사이즈 변경)

        *  @FileName	divresetsize.xfdl
        *******************************************************************************
        *  2021.10.13		투비대원		최초 생성
        *******************************************************************************
        */

        /**************************************************************************
         * include 영역
         **************************************************************************/
         this.executeIncludeScript("lib_techtip::lib_divresetsize.xjs"); /*include "lib_techtip::lib_divresetsize.xjs"*/;

         /**************************************************************************
         * FORM 변수 선언 영역
         **************************************************************************/
        /**************************************************************************
         * FORM EVENT 영역(onload)
         **************************************************************************/

        /**************************************************************************
         * CALLBACK 콜백 처리부분(Transaction)
         **************************************************************************/

        /**************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         **************************************************************************/

         /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/
         /**
         * @description 첫번째 버튼 onclick 시 처리내역
        */
        this.Button00_onclick = function(obj,e)
        {
        	//Div 사이즈 변경 함수 호출
        	this.gfnResetDivSize(this.Div00, "height", 10);

        	//스크롤 갱신
        	this.resetScroll();
        };

        /**
         * @description 두번째 버튼 onclick 시 처리내역
        */
        this.Button01_onclick = function(obj,e)
        {
        	//Div 사이즈 변경 함수 호출
        	this.gfnResetDivSize(this.Div01, "width", 10);

        	//스크롤 갱신
        	this.resetScroll();
        };

        /**
         * @description 세번째 버튼 onclick 시 처리내역
        */
        this.Button02_onclick = function(obj,e)
        {
        	//Div 사이즈 변경 함수 호출
        	this.gfnResetDivSize(this.Div02, "both", 10);

        	//스크롤 갱신
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("divresetsize.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
