(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Code");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Depart_Grd","33","96","237","524",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("DEPARTMENT_List");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"142\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학과코드\"/><Cell col=\"1\" text=\"학과명\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Dtl_Grid","293","96","947","524",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("DEPARTMENT_DTL_List");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"170\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"247\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"번호\"/><Cell col=\"4\" text=\"이메일\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Search_Cmb","33","30","237","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("Search_Type");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_value("All");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Select_btn","1086","30","68","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","293","30","770","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("plus_btn","1176","30","64","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Search_Cmb","value","Search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit00","value","Search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Code_onload,this);
            this.Dtl_Grid.addEventHandler("oncelldblclick",this.Dtl_Grid_oncelldblclick,this);
            this.Search_Cmb.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Select_btn.addEventHandler("onclick",this.Select_btn_onclick,this);
            this.plus_btn.addEventHandler("onclick",this.plus_btn_onclick,this);
        };
        this.loadIncludeScript("student_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
