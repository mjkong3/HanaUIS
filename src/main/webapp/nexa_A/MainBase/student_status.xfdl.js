(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("student_status");
            this.set_titletext("New Form");
            this.set_enable("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_StudentList", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENT_ID\" type=\"INT\" size=\"256\"/><Column id=\"STATUS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVED\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REG_DTM\">20241002</Col><Col id=\"STUDENT_ID\">240000</Col><Col id=\"STATUS_TYPE\">복학</Col><Col id=\"APPROVED\"> Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEARCH_TYPE\">ALL</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"SEARCH_TYPE\">STUDENT_ID</Col><Col id=\"data\">학번</Col></Row><Row><Col id=\"SEARCH_TYPE\">NAME</Col><Col id=\"data\">이름</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_StudentDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENT_ID\" type=\"INT\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LEAVE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVED\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CRE_USR\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_USR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchDepartment", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"INT\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"INT\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_applicationList","50","100","594","433",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_StudentList");
            obj.set_autofittype("col");
            obj.set_cssclass("ATEAM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"43\"/><Column size=\"156\"/><Column size=\"80\"/><Column size=\"62\"/><Column size=\"69\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHECK\"/><Cell col=\"1\" text=\"No\" tooltiptext=\"expr:\"/><Cell col=\"2\" text=\"신청일\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"학번\"/><Cell col=\"4\" text=\"신청유형\"/><Cell col=\"5\" text=\"승인여부\"/><Cell col=\"6\" text=\"이름\"/></Band><Band id=\"body\" cssclass=\"expr:APPROVED==&apos;C&apos;?&apos;aaa&apos;:&apos;bbb&apos;\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHECK\"/><Cell col=\"1\" text=\"expr:currow + 1 \" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:REG_DTM\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:STUDENT_ID\" textAlign=\"center\" edittype=\"normal\" maskedittype=\"string\" displaytype=\"mask\"/><Cell col=\"4\" text=\"bind:STATUS_TYPE\" textAlign=\"center\"/><Cell col=\"5\" textAlign=\"center\" text=\"bind:APPROVED\" cssclass=\"expr:APPROVED==&apos;미확인&apos;?&apos;backgroundRed&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","658","100","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학번");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","755","100","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_StdId","767","110","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","658","197","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   신청유형");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","755","197","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","658","246","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   휴학희망일");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","755","246","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","930","246","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   복학희망일");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","1027","246","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00","1027","197","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","930","197","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   신청일자");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00_00","1027","100","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Name","1039","110","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","930","100","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이름");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01","930","149","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학적상태");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00_01","1027","149","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_StdStatus","1039","159","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00_01_00","755","149","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01_00","658","149","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학과");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00_01_00_00","755","295","448","188",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01_00_00","658","295","98","187",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   신청사유");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_Reasen","767","306","425","165",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_LeaveDate","767","256","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_RegDate","1039","207","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_RetuenDate","1039","256","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01","658","481","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   승인여부");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_01","755","481","448","50",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save","1009","70","94","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_approved","766","493","273","27",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_approved_innerdataset = new nexacro.NormalDataset("rdo_approved_innerdataset", obj);
            rdo_approved_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미확인</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">거절</Col></Row></Rows>");
            obj.set_innerdataset(rdo_approved_innerdataset);
            obj.set_text("미확인");
            obj.set_value("N");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","225","70","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_SearchType");
            obj.set_codecolumn("SEARCH_TYPE");
            obj.set_datacolumn("data");
            obj.set_value("ALL");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","375","70","167","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","550","70","94","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search00","50","70","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Create","909","70","94","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","1108","70","94","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("삭제");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Dept","767","159","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_readonly("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_StatusType","767","206","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var cmb_StatusType_innerdataset = new nexacro.NormalDataset("cmb_StatusType_innerdataset", obj);
            cmb_StatusType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">휴학</Col><Col id=\"datacolumn\">휴학</Col></Row><Row><Col id=\"codecolumn\">군 휴학</Col><Col id=\"datacolumn\">군 휴학</Col></Row><Row><Col id=\"codecolumn\">복학</Col><Col id=\"datacolumn\">복학</Col></Row></Rows>");
            obj.set_innerdataset(cmb_StatusType_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","50","9","360","51",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("휴/복학 신청 관리");
            obj.set_font("30px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt_StdId","value","ds_StudentDetail","STUDENT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_Name","value","ds_StudentDetail","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_StdStatus","value","ds_StudentDetail","STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cal_RegDate","value","ds_StudentDetail","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cal_LeaveDate","value","ds_StudentDetail","LEAVE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cal_RetuenDate","value","ds_StudentDetail","RETURN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","ta_Reasen","value","ds_StudentDetail","REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","rdo_approved","value","ds_StudentDetail","APPROVED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cmb_Search","value","ds_Search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edt_search","value","ds_Search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cmb_Search00","value","ds_Search","DEPARTMENT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cmb_Dept","value","ds_StudentDetail","DEPARTMENT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cmb_StatusType","value","ds_StudentDetail","STATUS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("student_status.xfdl", function() {
        ////////////////////////////////////////////////////////////////////////////////////////화면진입
        this.student_status_onload = function(obj,e){
           this.ds_Search.setColumn(0,"SEARCH_TYPE","ALL");

           this.fn_departmentList();
           this.fn_studentList();

        }

        /////////////////////////////////////////////////////////////////////////////////////////함수
        //학과목록 호출 함수 : 구자명 광역함수
        this.fn_departmentList = function() {

           var strSvcId    = "departmentList";
           var strSvcUrl   = "svc::selectAdDept.do";//컨트롤러 경로
           var inData      = "";
           var outData     = "ds_dept = ds_dept";
           var strArg      = "";               //리퀘스트 문자 파라미터
           var callBackFnc = "fnCallback";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        //학생 목록 호출 함수
        this.fn_studentList = function(){

           var strSvcId    = "studentList";
           var strSvcUrl   = "svc::statusApprovedList.do";
           var inData      = "ds_Search = ds_Search";
           var outData     = "ds_StudentList = ds_StudentList";
           var strArg      = "";
           var callBackFnc = "fnCallback";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }
        //학생 정보 검색
        this.fn_studentInfo = function(studentId){

           var strSvcId    = "studentInfo";
           var strSvcUrl   = "svc::studentInfo.do";
           var inData      = "";
           var outData     = "ds_StudentDetail = ds_StudentDetail";
           var strArg      = "STUDENT_ID="+studentId;
           var callBackFnc = "fnCallback";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }

        //학생 상세정보 호출 함수
        this.fn_studentDetail = function(statusCode){

           var strSvcId    = "studentDetail";
           var strSvcUrl   = "svc::statusApprovedDetail.do";
           var inData      = "";
           var outData     = "ds_StudentDetail = ds_StudentDetail";
           var strArg      = "STATUS_CODE="+statusCode;
           var callBackFnc = "fnCallback";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }

        //학생정보 저장 함수
        this.fn_studentDetailSave = function(){
        	trace("fn_studentDetailSave##############################");
           var strSvcId    = "studentDetailSave";
           var strSvcUrl   = "svc::statusUpdate.do";
           var inData      = "ds_StudentDetail = ds_StudentDetail";
           var outData     = "";
           var strArg      = "";
           var callBackFnc = "fnCallback";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        //신청내역 삭제 함수
        this.fn_statusDelete = function(statusCode){
           var strSvcId    = "statusDelete";
           var strSvcUrl   = "svc::statusApprovedDelete.do";
           var inData      = "";
           var outData     = "";
           var strArg      = "STATUS_CODE="+statusCode;
           var callBackFnc = "fnCallback";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
          }



        /////////////////////////////////////////////////////////////////////////////////////////////////버튼
        //검색버튼
        this.btn_Search_onclick = function(obj,e)
        {
           this.fn_studentList();
        };

        //생성버튼
        this.btn_Create_onclick = function(obj,e)
        {
           // 새로운 행 추가 - 실제 입력할 행을 만든다
            var newRow = this.ds_StudentList.insertRow();

           // 이전 트랜잭션 결과 값이 화면에 남아있는 문제 해결을 위해 ds 초기화
            this.ds_StudentDetail.clearData();

           // 그리드에 포커스 설정
            this.grd_applicationList.setFocus(true);

           // 새로 추가된 행으로 이동
            this.grd_applicationList.selectRow(newRow);
           trace("생성된 행은?" + newRow);

            // oncellclick 이벤트 강제 호출
           // 이벤트 강제호출 방식 - this.이벤트명(obj, e)
           // UI에서 동작을 제어하려면 e(이벤트 객체)를 생성하고 값을 지정
            var cellClickEventInfo = new nexacro.GridClickEventInfo(
        		  this.grd_applicationList,    	// 이벤트 대상이 되는 객체(ds도 가능)
        		  "oncellclick",           		// 이벤트 종류
        		  newRow,                		// 클릭된 행의 인덱스 - 여기선 생성된 행
        		  0,                      		// 클릭된 셀의 인덱스 - newRow 내의 셀
        		  0,                      		// 클릭된 헤더의 인덱스
        		  0,                      		// 클릭된 바디의 인덱스
        		  "left",                		// 클릭한 마우스 버튼
        		  "cell"                  		// 클릭된 셀의 종류
        	);

           // 지정한 객체값을 넣어주고 이벤트 강제 호출
            this.cell_student_onclick(this.grd_applicationList, cellClickEventInfo);
        	this.ds_StudentDetail.setColumn(this.ds_StudentDetail.rowPosition,"APPROVED","N");

        };

        //삭제버튼 클릭
        this.btn_Delete_onclick = function(obj,e)
        {

        	  if(confirm("정말로 삭제하시겠습니까?")){
        		 var statusCode = this.ds_StudentDetail.getColumn(0, "STATUS_CODE");
                 this.fn_statusDelete(statusCode);
              }

        };

        //저장버튼 클릭
        this.btn_Save_onclick = function(obj,e)
        {
        	if(this.ds_StudentDetail.getColumn(0, "STUDENT_ID")==''
        		||	this.ds_StudentDetail.getColumn(0, "STUDENT_ID")=='undefined'
        		||	this.ds_StudentDetail.getColumn(0, "STUDENT_ID")==null){
        		alert("학번을 입력해주세요");
        		return;
        	}
        	if(this.ds_StudentDetail.getColumn(0, "STATUS_TYPE")==''
        		||	this.ds_StudentDetail.getColumn(0, "STATUS_TYPE")=='undefined'
        		||	this.ds_StudentDetail.getColumn(0, "STATUS_TYPE")==null){
        		alert("신청유형을 선택해주세요");
        		return;
        	}
        	if(this.ds_StudentDetail.getColumn(0, "REASON")==''
        		||	this.ds_StudentDetail.getColumn(0, "REASON")=='undefined'
        		||	this.ds_StudentDetail.getColumn(0, "REASON")==null){
        		alert("신청사유를 입력해주세요");
        		return;
        	}

        	trace("STATUS_CODE ===========================??????");
        	trace(this.ds_StudentDetail.getColumn(0, "STATUS_CODE"));
        	if(this.ds_StudentDetail.getColumn(0, "STATUS_CODE") == ''
        		||	this.ds_StudentDetail.getColumn(0, "STATUS_CODE")=='undefined'
        		||	this.ds_StudentDetail.getColumn(0, "STATUS_CODE")==null){
        		trace("STATUS_CODE ===========================NULL");
        		this.ds_StudentDetail.addColumn("CRE_USR", "STRING");
        		this.ds_StudentDetail.addColumn("UPD_USR", "STRING");
        	}

           // 로그인시 gds에 받아온 값을 호출
           var gdsApp = nexacro.getApplication();
           var adCode = gdsApp.gds_adminInfo.getColumn(0, "ADMIN_CODE");
           trace("gds에서 받아온 값 = " + adCode);
           // gds값을 insert나 update시 사용할 ds에 넣어준다
           this.ds_StudentDetail.setColumn(0, "CRE_USR", adCode);
           this.ds_StudentDetail.setColumn(0, "UPD_USR", adCode);
           var chkCre = this.ds_StudentDetail.getColumn(0, "CRE_USR");
           var chkUpd = this.ds_StudentDetail.getColumn(0, "UPD_USR");
           trace("setcolumn한 값 = " + chkCre + " / " + chkUpd);


           // gds값이 정상적으로 들어갔을 때만 save로직 실행
           if(chkCre != null && chkCre != '' && chkCre != 0 || chkUpd != null && chkUpd != '' && chkUpd != 0) {
        		this.fn_studentDetailSave();
        		trace("입력값 넘기기11@!? " + this.ds_StudentDetail.saveXML());
           } else {
           trace("하하핳ㅎ");
           }
        };

        //그리드 내 학생 클릭
        this.cell_student_onclick = function(obj,e)
        {
           // edit은 바인딩된 ds가 비어있을 경우 readonly(true)상태가 되어버린다
           // 새로운 행을 생성할 경우 transaction 결과로 바인딩된 ds가 늘 null이다
           // 따라서 새로 생성한 행일 경우 트랜잭션 발동을 막는다
           // IFNULL로 해결가능한지? - statusCode 자체가 없기때문에 ifnull 사용해도 null

           // 현재 선택한 row의 tpye을 알아낸다
            var rowPos = this.ds_StudentList.rowposition;
           trace("현재 row값은? = " + rowPos);
            var rowTp = this.ds_StudentList.getRowType(rowPos);

            // 새로운 행일 경우 트랜잭션을 실행하지 않고 readonly 해제
           // Dataset.ROWTYPE_INSERT - 넥사크로 내에서 관리하는 상수 / 새로 추가된 row임을 뜻한다
            if (rowTp == Dataset.ROWTYPE_INSERT) {

              // 새로운 행을 추가하여 작성 가능하게 만듦
                this.ds_StudentDetail.addRow();
               // readonly 해제
              this.fn_setReadonly(false);
               // 트랜잭션 실행하지 않음
              return;
            }
           // 기존 데이터는 트랜잭션 실행하여 상세 정보 조회
            var statusCode = this.ds_StudentList.getColumn(rowPos, "STATUS_CODE");
            this.fn_studentDetail(statusCode);

        };

        //학번 입력시 학생정보자동 불러오기
        this.edt_StdId_onkeyup = function(obj,e)
        {
           if (e.keycode == 13) {
               var studentId = this.ds_StudentDetail.getColumn(0, "STUDENT_ID");
               this.fn_studentInfo(studentId);
           }
        };

        //신청유형에 따라 캘린더 비활성화
        this.Combo00_onitemchanged = function(obj,e)
        {
        	var status = this.ds_StudentDetail.getColumn(0,"STATUS_TYPE");
        	if(status == "휴학" || status == "군 휴학"){
        		this.cal_LeaveDate.set_readonly(false);
        	}
        	if(status == "복학"){
        		this.cal_LeaveDate.set_readonly(true);
        	}
        };

        /////////////////////////////////////////////////////////////////////////////////////////콜백 함수
        this.fnCallback = function(svcID,errorCode,errorMsg){
           // 에러 시 화면 처리 내역
           if(errorCode == -1)
           {
              this.alert(errorMsg);
              return;
           }

           switch(svcID){
              case "departmentList":

              /*   trace("뎁트는? " + this.ds_dept.saveXML());*/
                 var newRow = this.ds_dept.insertRow(0);
                 this.ds_dept.setColumn(newRow, "DEPARTMENT_CODE", "ALL");
                 this.ds_dept.setColumn(newRow, "DEPARTMENT_NAME", "전체학과");
                 break;

              case "studentList":
                 /*trace("받아온 값? = " + this.ds_StudentList.saveXML());*/
        		 //var app = this.grd_applicationList.getCellProperty("body", e.)
                 break;
              case "studentDetail":
                 trace("받아온 값? = " + this.ds_StudentDetail.getColumn(0, "NAME"));
                 this.fn_setReadonly(true);
                 break;
              case "studentDetailSave":
                   this.alert("저장되었습니다");
                 this.fn_studentList();
        		 this.fn_setReadonly(true);
                 break;
        	  case "studentInfo":
        			var chkId = this.ds_StudentDetail.getColumn(0, "STUDENT_ID");
        			if(chkId == ''
        			||	chkId=='undefined'
        			||	chkId==null){
        					alert("해당 학생이 없습니다");
        				   this.ds_StudentDetail.clearData();
        				   this.fn_studentList();
        			}else {
        				   this.edt_Name.set_readonly(true);
        				   this.cmb_Dept.set_readonly(true);
        				   this.edt_StdStatus.set_readonly(true);
        			}
        			this.ds_StudentDetail.addColumn("STUDENT_ID", "INT");
        			trace("받아온 info = " + this.ds_StudentDetail.saveXML());
        			this.ds_StudentDetail.addColumn("STATUS_TYPE", "STRING");
        			this.ds_StudentDetail.addColumn("LEAVE_DATE","STRING");
        			this.ds_StudentDetail.addColumn("RETURN_DATE","STRING");
        			this.ds_StudentDetail.addColumn("REASON", "STRING");
        			this.ds_StudentDetail.addColumn("APPROVED","STRING");
        			this.rdo_approved.set_value("N");
        		 break;
        	  case "statusDelete":
        			alert("삭제되었습니다");
        		    this.fn_studentList();
        		break;
              default :
                 break;
           }
        };

        // readonly 제어 함수
        this.fn_setReadonly = function(isReadonly) {

           this.edt_StdId.set_readonly(isReadonly);
           this.edt_Name.set_readonly(isReadonly);
           this.cmb_Dept.set_readonly(isReadonly);
           this.edt_StdStatus.set_readonly(isReadonly);
           this.cmb_StatusType.set_readonly(isReadonly);
           //this.cal_RegDate.set_readonly(isReadonly);
           this.cal_LeaveDate.set_readonly(isReadonly);
           this.cal_RetuenDate.set_readonly(isReadonly);
           this.ta_Reasen.set_readonly(isReadonly);
        };








        ///////////////////////////////////////////////// 그리드 필터 정렬기능 : 구자명
        this.grd_applicationList_onheadclick = function(obj,e)
        {
          // 체크박스 컬럼 헤더 셀 클릭 시 전체 선택/해제
            if (obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") {

              // 아래 속성에서 0은 그리드에서 0번쨰 column을 의미하며 text 값을 가져오라는 의미입니다.
              var chkVal = obj.getCellProperty("head", 0, "text");

              // 0이면 체크 안된 상태이고 1이면 체크된 상태임을 의미합니다.
              if (chkVal == "1") { // 이미 체크된 상태라면 체크 해지로 변환
                 chkVal   = "0";
                 obj.setCellProperty("head", 0, "text", chkVal); //프론트에 적용 HEAD 부분
                 for (var i=0; i<this.ds_StudentList.rowcount; i++) { //프론트에 적용 ROW 부분
                    this.ds_StudentList.setColumn(i,"CHECK","0");
                 }
              } else {
                 chkVal   = "1"; //체크 안 된 상태라면 체크 표시
                 obj.setCellProperty("head", 0, "text", chkVal); //프론트에 HEAD 적용
                 for (var i=0; i<this.ds_StudentList.rowcount; i++) { //프론트에 적용 ROW 부분
                    this.ds_StudentList.setColumn(i,"CHECK","1");
                 }

              }
            } else {
                // 정렬 기능 실행
                this.fn_sort(obj, e);
            }

            obj.clearSelect();   // 선택된 셀 해제
            obj.setFocus(false); // 포커스 해제
        };


        // 정렬기능 - lib에 넣는 것 고려
        this.CONST_DEFAULT = "";
        this.CONST_ASC_MARK = "↑";
        this.CONST_DESC_MARK = "↓";
        this.nPrevCell = -1;

        this.fn_sort = function(obj, e)
        {
            if (obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") return;  // 체크박스 셀에서는 정렬 X
            var objDs = obj.getBindDataset();
            var sColId = obj.getCellProperty("body", e.cell, "text").split(":");
            var sHeadText = obj.getCellText(-1, e.cell);

            // 오름차순 → 내림차순
            if (sHeadText.substr(sHeadText.length - 1) == this.CONST_ASC_MARK) {
                obj.setCellProperty("head", e.cell, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_DESC_MARK);
                objDs.set_keystring("S:-" + sColId[1]);
            }
            // 내림차순 → 오름차순
            else if (sHeadText.substr(sHeadText.length - 1) == this.CONST_DESC_MARK) {
                obj.setCellProperty("head", e.cell, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_DEFAULT);
                objDs.set_keystring("S:+" + sColId[1]);
            }
            // 정렬 없음 → 오름차순
            else {
                obj.setCellProperty("head", e.cell, "text", sHeadText + this.CONST_ASC_MARK);
                objDs.set_keystring("S:+" + sColId[1]);
            }

            // 이전 셀의 정렬 마크 제거
           if (this.nPrevCell > -1 && this.nPrevCell != e.cell) {
              var sPrevText = obj.getCellText(-1, this.nPrevCell);

              // 이전 셀의 텍스트에 정렬 마크가 포함되어 있는지 확인
              if (sPrevText.includes(this.CONST_DESC_MARK) || sPrevText.includes(this.CONST_ASC_MARK)) {
                 // 마지막 문자(정렬 마크)를 제거
                 obj.setCellProperty("head", this.nPrevCell, "text", sPrevText.slice(0, -1));
              }
           }

           // 현재 셀을 이전 셀로 설정
           this.nPrevCell = e.cell;

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.student_status_onload,this);
            this.grd_applicationList.addEventHandler("onheadclick",this.grd_applicationList_onheadclick,this);
            this.grd_applicationList.addEventHandler("oncellclick",this.cell_student_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.edt_StdId.addEventHandler("onkeyup",this.edt_StdId_onkeyup,this);
            this.Static00_00_00_00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_00_00_00_onclick,this);
            this.ta_Reasen.addEventHandler("onchanged",this.Reasen_onchanged,this);
            this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.rdo_approved.addEventHandler("onitemchanged",this.rdo_approved_onitemchanged,this);
            this.cmb_Search.addEventHandler("onitemchanged",this.cmb_Search_onitemchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.btn_Create.addEventHandler("onclick",this.btn_Create_onclick,this);
            this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);
            this.cmb_StatusType.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
        };
        this.loadIncludeScript("student_status.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
