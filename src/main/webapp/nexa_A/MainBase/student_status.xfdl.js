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
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_StudentList", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENT_ID\" type=\"INT\" size=\"256\"/><Column id=\"STATUS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVED\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REG_DTM\">20241002</Col><Col id=\"STUDENT_ID\">240000</Col><Col id=\"STATUS_TYPE\">복학</Col><Col id=\"APPROVED\"> Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEARCH_TYPE\">ALL</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"SEARCH_TYPE\">STUDENT_ID</Col><Col id=\"data\">학번</Col></Row><Row><Col id=\"SEARCH_TYPE\">NAME</Col><Col id=\"data\">이름</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_StudentDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENT_ID\" type=\"INT\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LEAVE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVED\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchDepartment", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"INT\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"INT\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_applicationList","37","109","492","433",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_StudentList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\" tooltiptext=\"expr:\"/><Cell col=\"1\" text=\"신청일\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"신청유형\"/><Cell col=\"4\" text=\"승인여부\"/><Cell col=\"5\" text=\"이름\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1 \"/><Cell col=\"1\" text=\"bind:REG_DTM\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:STUDENT_ID\"/><Cell col=\"3\" text=\"bind:STATUS_TYPE\"/><Cell col=\"4\" text=\"bind:APPROVED\"/><Cell col=\"5\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","545","109","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학번");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","642","109","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_StdId","654","119","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","545","206","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   신청유형");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","642","206","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_StatusType","654","216","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","545","255","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   휴학희망일");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","642","255","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","817","255","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   복학희망일");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","914","255","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00","914","206","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","817","206","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   신청일자");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00_00","914","109","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Name","926","119","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","817","109","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이름");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01","817","158","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학적상태");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00_01","914","158","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_StdStatus","926","168","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00_01_00","642","158","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_department","654","168","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01_00","545","158","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학과");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00_01_00_00","642","304","448","188",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01_00_00","545","304","98","187",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   신청사유");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_Reasen","654","315","425","165",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_LeaveDate","654","265","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_RegDate","926","216","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_RetuenDate","926","265","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01","545","490","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   승인여부");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_01","642","490","448","50",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save","950","496","129","38",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_approved","653","502","273","27",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_approved_innerdataset = new nexacro.NormalDataset("rdo_approved_innerdataset", obj);
            rdo_approved_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미확인</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">거절</Col></Row></Rows>");
            obj.set_innerdataset(rdo_approved_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","237","40","179","46",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_SearchType");
            obj.set_codecolumn("SEARCH_TYPE");
            obj.set_datacolumn("data");
            obj.set_value("ALL");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","440","40","179","46",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","636","40","120","46",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search00","37","40","179","46",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Create","766","40","120","46",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("생성");
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

            obj = new BindItem("item2","edt_department","value","ds_StudentDetail","DEPARTMENT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_StatusType","value","ds_StudentDetail","STATUS_TYPE");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("student_status.xfdl", function() {
        //화면진입
        this.student_status_onload = function(obj,e){
        	this.ds_Search.setColumn(0,"SEARCH_TYPE","ALL");

        	this.fn_departmentList();
        	this.fn_studentList();
        }

        //학과목록 호출 함수 : 구자명
        this.fn_departmentList = function() {

           var strSvcId    = "departmentList";
           var strSvcUrl   = "svc::selectAdDept.do";//컨트롤러 경로
           var inData      = "";
           var outData     = "ds_dept = ds_dept";
           var strArg      = "";					//리퀘스트 문자 파라미터
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

        this.fn_studentDetailSave = function(){
           var strSvcId    = "studentDetailSave";
           var strSvcUrl   = "svc::statusUpdate.do";
           var inData      = "ds_StudentDetail = ds_StudentDetail";
           var outData     = "";
           var strArg      = "";
           var callBackFnc = "fnCallback";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        //검색버튼 클릭
        this.btn_Search_onclick = function(obj,e)
        {
        	this.fn_studentList();
        };
        //생성버튼 클릭
        this.btn_Create_onclick = function(obj,e)
        {
        	this.ds_StudentList.addRow();

        	this.edt_StdId.set_readonly(false);
        	this.edt_Name.set_readonly(false);
        	this.edt_department.set_readonly(false);
        	this.edt_StdStatus.set_readonly(false);
        	this.edt_statusType.set_readonly(false);
        	this.cal_RegDate.set_readonly(false);
        	this.cal_LeaveDate.set_readonly(false);
        	this.cal_RetuenDate.set_readonly(false);
        	this.ta_Reasen.set_readonly(false);

        };
        //저장버튼 클릭
        this.btn_Save_onclick = function(obj,e)
        {
        	this.fn_studentDetailSave();
        };
        //그리드 내 학생 클릭
        this.cell_student_onclick = function(obj,e)
        {
        	var statusCode = this.ds_StudentList.getColumn(this.ds_StudentList.rowposition, "STATUS_CODE");

        	this.fn_studentDetail(statusCode);


        };





        //콜백 함수
        this.fnCallback = function(svcID,errorCode,errorMsg){
        	// 에러 시 화면 처리 내역
        	if(errorCode == -1)
        	{
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID){
        		case "departmentList":

        		/*	trace("뎁트는? " + this.ds_dept.saveXML());*/
        			var newRow = this.ds_dept.insertRow(0);
        			this.ds_dept.setColumn(newRow, "DEPARTMENT_CODE", "ALL");
        			this.ds_dept.setColumn(newRow, "DEPARTMENT_NAME", "전체학과");
        			break;

        		case "studentList":
        			trace("받아온 값? = " + this.ds_StudentList.saveXML());
        			break;
        		case "studentDetail":
        			trace("받아온 값? = " + this.ds_StudentDetail.saveXML());

        			break;
        		case "studentDetailSave":
        			  this.alert("저장되었습니다");
        			this.fn_studentList();
        			break;
        		default :
        			break;
        	}
        };






        ///////////////////////////////////////////////// 그리드 필터 정렬기능
        this.grd_applicationList_onheadclick = function(obj,e)
        {
        	this.fn_sort(obj, e);
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
            this.Static00_00_00_00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_00_00_00_onclick,this);
            this.ta_Reasen.addEventHandler("onchanged",this.Reasen_onchanged,this);
            this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.rdo_approved.addEventHandler("onitemchanged",this.rdo_approved_onitemchanged,this);
            this.cmb_Search.addEventHandler("onitemchanged",this.cmb_Search_onitemchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.btn_Create.addEventHandler("onclick",this.btn_Create_onclick,this);
        };
        this.loadIncludeScript("student_status.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
