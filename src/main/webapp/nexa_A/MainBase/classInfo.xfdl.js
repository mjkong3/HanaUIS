(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("classInfo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ALL</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">CLASS_CODE</Col><Col id=\"data\">강의코드</Col></Row><Row><Col id=\"code\">CLASS_NAME</Col><Col id=\"data\">강의명</Col></Row><Row><Col id=\"code\">CLASS_START</Col><Col id=\"data\">개강일</Col></Row><Row><Col id=\"code\">CLASS_END</Col><Col id=\"data\">종강일</Col></Row><Row><Col id=\"code\">SEMESTER</Col><Col id=\"data\">학기</Col></Row><Row><Col id=\"code\">CLASS_GRADE</Col><Col id=\"data\">학년</Col></Row><Row><Col id=\"code\">DEPARTMENT_CODE</Col><Col id=\"data\">학과코드</Col></Row><Row><Col id=\"code\">CLASSROOM_ID</Col><Col id=\"data\">강의실</Col></Row><Row><Col id=\"code\">PROFESSOR_ID</Col><Col id=\"data\">담당교수</Col></Row><Row><Col id=\"code\">CLASS_TYPE</Col><Col id=\"data\">이수구분</Col></Row><Row><Col id=\"code\">ADMIN_CODE</Col><Col id=\"data\">관리자</Col></Row><Row><Col id=\"code\">REGDATE</Col><Col id=\"data\">등록일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_classinfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_START\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_END\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSROOM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROFESSOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delete", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_copied", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_Depart","33","96","237","524",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_dept");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학과코드\"/><Cell col=\"1\" text=\"학과명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPARTMENT_CODE\" textAlign=\"center\" maskeditformat=\"00\" displaytype=\"mask\" edittype=\"mask\"/><Cell col=\"1\" text=\"bind:DEPARTMENT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_List","293","96","947","524",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_classinfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"강의코드\"/><Cell col=\"3\" text=\"강의명\"/><Cell col=\"4\" text=\"개강일\"/><Cell col=\"5\" text=\"종강일\"/><Cell col=\"6\" text=\"학기\"/><Cell col=\"7\" text=\"학년\"/><Cell col=\"8\" text=\"학과코드\"/><Cell col=\"9\" text=\"강의실\"/><Cell col=\"10\" text=\"교수코드\"/><Cell col=\"11\" text=\"이수구분\"/><Cell col=\"12\" text=\"관리자\"/><Cell col=\"13\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"bind:CHECK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CLASS_CODE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CLASS_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CLASS_START\" textAlign=\"center\" displaytype=\"calendarcontrol\"/><Cell col=\"5\" text=\"bind:CLASS_END\" textAlign=\"center\" displaytype=\"calendarcontrol\"/><Cell col=\"6\" text=\"bind:SEMESTER\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:CLASS_GRADE\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:DEPARTMENT_CODE\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:CLASSROOM_ID\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:PROFESSOR_ID\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:CLASS_TYPE\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:ADMIN_CODE\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:REGDATE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","33","30","237","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","986","30","68","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","293","30","627","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","1081","30","64","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","1176","30","64","46",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_Search","value","ds_search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_Search","value","ds_search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("classInfo.xfdl", function() {

        this.classInfo_onload = function(obj,e)
        {
        	 this.ds_search.setColumn(0,"SEARCH_TYPE","ALL");

        	 this.onRowKey = false; // onrow 이벤트 트리거(off)

        	 this.fn_searchDept(); // dept 검색 함수 호출
        };

        this.fn_searchDept = function() {

           var strSvcId    = "searchDept";
           var strSvcUrl   = "svc::selectAdDept.do";
           var inData      = "";
           var outData     = "ds_dept = ds_dept";
           var strArg      = "";
           var callBackFnc = "fnCallBack_deptInfo";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.classInfo_onload,this);
        };
        this.loadIncludeScript("classInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
