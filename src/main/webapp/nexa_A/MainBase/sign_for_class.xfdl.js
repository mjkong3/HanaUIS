(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sign_for_class");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1720,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_START\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_END\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"PROFESSOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ALL</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">STUDENT_ID</Col><Col id=\"data\">학번</Col></Row><Row><Col id=\"code\">NAME</Col><Col id=\"data\">성명</Col></Row><Row><Col id=\"code\">CLASS_NAME</Col><Col id=\"data\">강의명</Col></Row><Row><Col id=\"code\">CLASS_TYPE</Col><Col id=\"data\">전공이수</Col></Row><Row><Col id=\"code\">PROFESSOR_NAME</Col><Col id=\"data\">담당교수</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PEOPLE\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_PEOPLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_semester", this);
            obj._setContents("<ColumnInfo><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEMESTER\">1</Col><Col id=\"SEMESTER_NUM\">1학기</Col></Row><Row><Col id=\"SEMESTER\">2</Col><Col id=\"SEMESTER_NUM\">2학기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delete", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_Depart","33","96","450","554",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_dept");
            obj.set_cssclass("ATEAM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학과명\"/><Cell col=\"2\" text=\"강의명\"/><Cell col=\"3\" text=\"신청인원\"/><Cell col=\"4\" text=\"수강정원\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPARTMENT_NAME\"/><Cell col=\"2\" text=\"bind:CLASS_NAME\"/><Cell col=\"3\" text=\"bind:PEOPLE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:MAX_PEOPLE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_List","513","96","957","554",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj.set_cssclass("ATEAM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHECK\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"학생 이름\"/><Cell col=\"3\" text=\"학과명\"/><Cell col=\"4\" text=\"강의명\"/><Cell col=\"5\" text=\"전공이수\"/><Cell col=\"6\" text=\"담당교수\"/><Cell col=\"7\" text=\"개강일\"/><Cell col=\"8\" text=\"종강일\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHECK\"/><Cell col=\"1\" text=\"bind:STUDENT_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:DEPARTMENT_NAME\"/><Cell col=\"4\" text=\"bind:CLASS_NAME\"/><Cell col=\"5\" text=\"bind:CLASS_TYPE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:PROFESSOR_NAME\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:CLASS_START\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"8\" text=\"bind:CLASS_END\" textAlign=\"center\" displaytype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","450","30","120","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","1118","30","70","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수강 조회");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","590","30","500","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("검색어 입력");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","1212","30","70","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("수강 등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","1306","30","70","46",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("수강 삭제");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year","170","30","120","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("YEAR");
            obj.set_datacolumn("YEAR_NAME");
            obj.set_innerdataset("ds_year");
            obj.set_text("년도");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_semester","310","30","120","46",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("SEMESTER");
            obj.set_datacolumn("SEMESTER_NUM");
            obj.set_innerdataset("ds_semester");
            obj.set_text("학기");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reload","1400","30","70","46",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("새로고침");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","35","23","125","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("수강신청");
            obj.set_usedecorate("true");
            obj.set_font("28px/normal \"Gulim\",\"HY견고딕\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1720,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_Search","value","ds_search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_Search","value","ds_search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cmb_year","value","ds_search","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cmb_semester","value","ds_search","SEMESTER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sign_for_class.xfdl", function() {
        // 상세// 화면진입
        this.sign_for_class_onload = function(obj,e)
        {
        	this.ds_search.setColumn(0,"SEARCH_TYPE","ALL");
        	this.onRowKey = false; // onrow 이벤트 트리거(off)
        	this.fn_searchDept(); // dept 검색 함수 호출
        	this.fn_year(); // year 검색 함수 호출
        	this.fn_semester(); // semester 검색 함수 호출
        };


        // 시작 학과 호출
        this.fn_searchDept = function() {
        	var strSvcId    = "searchDept";
        	var strSvcUrl   = "svc::selectDeptListForSign.do";
        	var inData      = "";
        	var outData     = "ds_dept = ds_dept";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack_deptInfo";
        	var isAsync     = true;
        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }


        // 시작 학과 호출 -> 콜백 처리
        this.fnCallBack_deptInfo = function (svcID, errCD, errMsg)
        {
        	if (svcID == "searchDept" && errCD == 0){
        		this.ds_dept.insertRow(0); // 맨 앞에 row 생성
        		this.ds_dept.setColumn(0, "DEPARTMENT_CODE", 0);
        		this.ds_dept.setColumn(0, "DEPARTMENT_NAME", "전체학과");
        		this.onRowKey = true; // onrow 이벤트 트리거(on)
        		this.ds_dept.set_rowposition(0); // 첫번째 행 수동 설정
        		this.ds_dept_onrowposchanged(this.ds_dept, null); // 이벤트 수동호출

        		// 월에 따른 학기 결정 (2월~6월: 1학기, 나머지: 2학기)
        		var currentMonth = new Date().getMonth();
        		var semesterNum;
        		if (currentMonth >= 1 && currentMonth <= 5) {
        			semesterNum = '0';  // 1학기
        		} else {
        			semesterNum = '1';  // 2학기
        		}
        		this.cmb_semester.set_index(semesterNum);
        	} else {
        		this.alert("오류 발생");
        	}
        };


        // 년도 호출
        this.fn_year = function() {
            // 현재 연도를 가져옴
            var currentYear = new Date().getFullYear();
            // 5년 동안의 데이터를 넣기 위해 반복
            for (var i = 0; i < 5; i++) {
                var year = currentYear - i; // 현재 연도부터 5년 전까지의 데이터
                var newRow = this.ds_year.addRow(); // 새로운 row 추가

                this.ds_year.setColumn(newRow, "YEAR", year.toString()); // 순수 숫자 값
                this.ds_year.setColumn(newRow, "YEAR_NAME", year.toString() + "년"); // '년'을 붙인 값
            }
            // 기본적으로 현재 연도가 선택되도록 설정
            this.ds_search.setColumn(0, "YEAR", currentYear.toString());
        };


        // 학기 호출
        this.fn_semester = function() {
            // 현재 월을 가져옴
            var currentMonth = new Date().getMonth();
            var semester;

            if (currentMonth >= 1 && currentMonth <= 5) { // 2~6월 (1학기)
                semester = 1;
            } else {
                semester = 2;  // 7~12월 (2학기)
            }

            // 데이터셋에서 현재 학기를 찾아서 선택
            for (var i = 0; i < this.ds_semester.rowcount; i++) {
                var currentSemester = this.ds_semester.getColumn(i, "SEMESTER");
                if (currentSemester == semester) {
                    this.ds_semester.set_rowposition(i); // 해당 행 선택
                    // ds_search에 현재 학기 값 설정 (undefined 방지)
                    this.ds_search.setColumn(0, "SEMESTER", semester); // SEMESTER 컬럼에 값 설정
                    break; // 찾으면 루프 종료
                }
            }
        };


        // 조회
        this.ds_dept_onrowposchanged = function(obj,e)
        {
        	trace("이벤트 발동 확인");
        	trace("트리거 값 확인 : " + this.onRowKey);
        	if (this.onRowKey == true){
        		this.ds_search.setColumn(0,"DEPARTMENT_CODE", obj.getColumn(obj.rowposition,"DEPARTMENT_CODE"));
        		trace("트리거 발동시 search 확인 : " + this.ds_search.getColumn(0,"DEPARTMENT_CODE"));
        		// 조회함수 호출
        		this.fn_searchList();
        	}
        };


        // 조회 - 버튼클릭
        this.btn_Search_onclick = function(obj,e)
        {
        	// 조회함수 호출
        	this.fn_searchList();
        };

        // list grd 호출 조회함수
        this.fn_searchList = function ()
        {
        	var deptCode = this.ds_search.getColumn(0, "DEPARTMENT_CODE");
        	trace("받아온 DEPARTMENT_CODE: " + deptCode);  // 전체학과 선택 시 값 확인
        	var year = this.ds_search.getColumn(0, "YEAR");
            trace("받아온 YEAR: " + year);  // YEAR 값 확인
        	var semester = this.ds_search.getColumn(0, "SEMESTER");
            trace("받아온 SEMESTER: " + semester);  // SEMESTER 값 확인

        	if (deptCode == '' || deptCode == 'undefined' || deptCode == null) {
        		alert("학과를 선택해주세요.");
        		return;
        	}
        	var strSvcId    = "searchList";
        	var strSvcUrl   = "svc::selectAdSignClass.do";
        	var inData      = "ds_search = ds_search";
        	var outData     = "ds_list = ds_list";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync     = true;
        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 삭제 구현하기
        this.btn_Delete_onclick = function(obj,e)
        {
        	this.fn_deleteCheck();
        	var checkedCount = this.ds_delete.rowcount;
        	if(checkedCount > 0){
         		if(confirm("선택한 항목을 삭제하시겠습니까?")){
        			if(confirm("삭제된 데이터는 복구할 수 없습니다. 그래도 진행하시겠습니까?")){
        				this.fn_deleteList();
        			}
        		}
            }
            else {
        		alert("삭제할 항목을 선택하세요.");
        	}
        };

        // 삭제버튼 트랜잭션 함수(chk된 항목만 전송)
        this.fn_deleteList = function()
        {
            var strSvcId    = "deleteList";
            var strSvcUrl   = "svc::deleteAdSignClass.do";
            var inData      = "ds_delete = ds_delete";
            var outData     = "";
            var strArg      = "";
            var callBackFnc = "fnCallBack";
            var isAsync     = true;
            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 삭제 진행 콜백
        this.fnCallBack = function (svcID, errCD, errMsg)
        {
         	// 삭제후 검색
         	if(svcID == "deleteList" && errCD == 0){
        		alert("삭제되었습니다");
        		this.fn_searchList(); // 삭제된 이후의 리스트를 출력
         	}
         	if(svcID == "searchList"){
        		trace("searchList 호출완료")
         		// trace(this.ds_list.saveXML());
         	}
        };


        // 새로고침 함수
        this.btn_Reload_onclick = function(obj,e)
        {
        	this.reload();
        };

        // 기타기능
        this.grd_List_onheadclick = function(obj,e)
        {
            // 체크박스 컬럼 헤더 셀 클릭 시 전체 선택/해제
            if (obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") {

        		// 아래 속성에서 0은 그리드에서 0번쨰 column을 의미하며 text 값을 가져오라는 의미입니다.
        		var chkVal = obj.getCellProperty("head", 0, "text");

        		// 0이면 체크 안된 상태이고 1이면 체크된 상태임을 의미합니다.
        		if (chkVal == "1") { // 이미 체크된 상태라면 체크 해지로 변환
        			chkVal = "0";
        			obj.setCellProperty("head", 0, "text", chkVal); //프론트에 적용 HEAD 부분
        			for (var i = 0; i < this.ds_list.rowcount; i++) { //프론트에 적용 ROW 부분
        				this.ds_list.setColumn(i,"CHECK","0");
        			}
        			// 체크 해제된 경우의 trace 코드
        			// trace("체크박스가 해제되었습니다.");
        		}
        		else {
        			chkVal = "1"; //체크 안 된 상태라면 체크 표시
        			obj.setCellProperty("head", 0, "text", chkVal); //프론트에 HEAD 적용
        			for (var i = 0; i < this.ds_list.rowcount; i++) { //프론트에 적용 ROW 부분
        				this.ds_list.setColumn(i,"CHECK","1");
        			}
        			// 체크된 경우의 trace 코드
        			// trace("체크박스가 선택되었습니다.");
        		}
            } else {
                // 정렬 기능 실행
                this.fn_sort(obj, e);
            }
            obj.clearSelect();   // 선택된 셀 해제
            obj.setFocus(false); // 포커스 해제
        };

        // 체크된 항목 선택 함수
        this.fn_deleteCheck = function()
        {
        	this.ds_delete.clearData(); // 이전에 사용한 ds 내용 삭제
        	this.ds_list.filter("CHECK == 1"); // check가 된 항목만 필터링
        	this.ds_delete.copyData(this.ds_list, true); // 필터링된 데이터만 복사
        	this.ds_list.filter(""); // 필터링 초기화
        };

        // 정렬 기능구분
        this.CONST_DEFAULT = "";
        this.CONST_ASC_MARK = "↑";
        this.CONST_DESC_MARK = "↓";
        this.nPrevCell = -1;

        // 정렬 기능 구현
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
            // 내림차순 → 기본 상태
            else if (sHeadText.substr(sHeadText.length - 1) == this.CONST_DESC_MARK) {
                obj.setCellProperty("head", e.cell, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_DEFAULT);
                objDs.set_keystring(""); // 정렬 초기화 (기본 상태로 돌아감)
            }
            // 정렬 없음 → 오름차순
            else {
                obj.setCellProperty("head", e.cell, "text", sHeadText + this.CONST_ASC_MARK);
                objDs.set_keystring("S:+" + sColId[1]);
            }

            // * 이전 셀의 정렬 마크 제거
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


        // 팝업 호출 함수
        this.showPopup = function (objParam, surl)
        {
        	popup = new nexacro.ChildFrame;
          	popup.init("ShowPopup", 0, 0, 800, 700, null, null, surl);
          	popup.set_dragmovetype("all");
          	popup.set_layered("true");
          	popup.set_autosize(true);
          	popup.set_showtitlebar("Popup Title");
          	popup.set_showstatusbar(false);
          	popup.set_resizable(true);
          	popup.set_openalign("center middle");
          	popup.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback", true);
        };

        // 팝업 함수
        this.btn_Add_onclick = function(obj, e)
        {
            // 팝업 창 경로 설정
            var surl = "MainBase::sign_for_class_Popup.xfdl";
            // 팝업 호출 (필요 시 파라미터 추가)
            this.showPopup({}, surl);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sign_for_class_onload,this);
            this.grd_List.addEventHandler("oncelldblclick",this.grd_List_oncelldblclick,this);
            this.grd_List.addEventHandler("onheadclick",this.grd_List_onheadclick,this);
            this.cmb_Search.addEventHandler("onitemchanged",this.cmb_Search_onitemchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.edt_Search.addEventHandler("onchanged",this.edt_Search_onchanged,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);
            this.cmb_year.addEventHandler("onitemchanged",this.cmb_year_onitemchanged,this);
            this.cmb_semester.addEventHandler("onitemchanged",this.cmb_semester_onitemchanged,this);
            this.btn_Reload.addEventHandler("onclick",this.btn_Reload_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.ds_dept.addEventHandler("onrowposchanged",this.ds_dept_onrowposchanged,this);
        };
        this.loadIncludeScript("sign_for_class.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
