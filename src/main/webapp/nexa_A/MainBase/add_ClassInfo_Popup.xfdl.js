(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("add_ClassInfo_Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbpro", this);
            obj._setContents("<ColumnInfo><Column id=\"PROFESSOR_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbsem", this);
            obj._setContents("<ColumnInfo><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbclsgrade", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_GRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbclstype", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_admin", this);
            obj._setContents("<ColumnInfo><Column id=\"ADMIN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REGDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_03_01_00_00_00_00","690","209","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00","416","209","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","690","161","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","690","112","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00","416","161","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","416","112","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","690","63","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","416","63","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","319","63","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   강의명");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","319","112","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","592","63","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   교수명");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","592","112","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   개설학과");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","592","209","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   종강일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","319","161","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이수학점");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","319","209","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   개강일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","592","161","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이수구분");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProId","427","73","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Dept","701","121","195","31",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","759","521","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("작성완료");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_02","416","258","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00_00","690","258","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_02","319","258","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   등록ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","592","258","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   등록일");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Admin","427","268","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_RegDate","701","268","195","31",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_LastDay","701","219","195","31",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_FirstDay","427","219","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_ClsInfo","319","347","590","163",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00_00_00","319","308","590","39",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("강의 설명");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ClsType","701","171","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_innerdataset("ds_cmbclstype");
            obj.set_codecolumn("CLASS_TYPE");
            obj.set_datacolumn("CLASS_TYPE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ClsGrade","427","171","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_cmbclsgrade");
            obj.set_codecolumn("CLASS_GRADE");
            obj.set_datacolumn("CLASS_GRADE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Semester","427","122","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_innerdataset("ds_cmbsem");
            obj.set_datacolumn("SEMESTER");
            obj.set_codecolumn("SEMESTER");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ProId","701","73","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_innerdataset("ds_cmbpro");
            obj.set_codecolumn("PROFESSOR_NAME");
            obj.set_datacolumn("PROFESSOR_NAME");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_Admin","value","ds_admin","ADMIN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cal_RegDate","value","ds_admin","REGDATE");
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
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("add_ClassInfo_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
