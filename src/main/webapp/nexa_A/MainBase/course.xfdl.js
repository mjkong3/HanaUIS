(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample00");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"142\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학과코드\"/><Cell col=\"1\" text=\"학과명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPARTMENT_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPARTMENT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Dtl_Grid","293","96","947","524",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("DEPARTMENT_DTL_List");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\"/><Column size=\"158\"/><Column size=\"126\"/><Column size=\"123\"/><Column size=\"194\"/><Column size=\"248\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Check\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"상태\"/><Cell col=\"5\" text=\"번호\"/><Cell col=\"6\" text=\"이메일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Check\"/><Cell col=\"1\" text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:Student_id\"/><Cell col=\"3\" text=\"bind:Name\"/><Cell col=\"4\" text=\"bind:Status\"/><Cell col=\"5\" text=\"bind:Phone\"/><Cell col=\"6\" text=\"bind:Email\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Search_Cmb","33","30","237","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("Search_Type");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_value("All");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Select_btn","1026","30","68","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","293","30","697","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("plus_btn","1116","30","64","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("delete_btn","1200","30","66","46",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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
            this.Dtl_Grid.addEventHandler("oncelldblclick",this.Dtl_Grid_oncelldblclick,this);
            this.Dtl_Grid.addEventHandler("onheadclick",this.Dtl_Grid_onheadclick,this);
            this.Select_btn.addEventHandler("onclick",this.Select_btn_onclick,this);
            this.plus_btn.addEventHandler("onclick",this.plus_btn_onclick,this);
            this.delete_btn.addEventHandler("onclick",this.delete_btn_onclick,this);
        };
        this.loadIncludeScript("course.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
