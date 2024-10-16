(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample05");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new ExcelImportObject("ExcelImportObject00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("fileupload.xfdl", function() {
        /**************************************************************************
        * FORM 변수 선언 영역
        **************************************************************************/
        //nexacro-xeni call url
        this.exportUrl = "http://localhost:8082/HanaUIS/nexa_A/XExportImport";
        this.importUrl = "http://localhost:8082/HanaUIS/nexa_A/XImport";


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("fileupload.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
