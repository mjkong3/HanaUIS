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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ALL</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">CLASS_NAME</Col><Col id=\"data\">강의명</Col></Row><Row><Col id=\"code\">CLASS_TYPE</Col><Col id=\"data\">이수구분</Col></Row><Row><Col id=\"code\">PROFESSOR_NAME</Col><Col id=\"data\">담당교수</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PEOPLE\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_PEOPLE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROFESSOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSROOM_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_className", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_Depart","32","105","838","460",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_dept");
            obj.set_cssclass("ATEAM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"60\"/><Column size=\"75\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"55\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"20\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학과명\"/><Cell col=\"2\" text=\"강의명\"/><Cell col=\"3\" text=\"이수구분\"/><Cell col=\"4\" text=\"담당교수\"/><Cell col=\"5\" text=\"수강요일\"/><Cell col=\"6\" text=\"수강시간\"/><Cell col=\"7\" text=\"강의실\"/><Cell col=\"8\" text=\"신청인원\"/><Cell col=\"9\" text=\"수강정원\"/><Cell col=\"10\" text=\"학점\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"bind:DEPARTMENT_NAME\"/><Cell col=\"2\" text=\"bind:CLASS_NAME\"/><Cell col=\"3\" text=\"bind:CLASS_TYPE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PROFESSOR_NAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:CLASS_WEEK\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:TIME_NUMBER\" textAlign=\"center\" wordWrap=\"both\" font=\"normal 12px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" textAlign=\"center\" text=\"bind:CLASSROOM_NAME\"/><Cell col=\"8\" textAlign=\"center\" text=\"bind:PEOPLE\"/><Cell col=\"9\" textAlign=\"center\" text=\"bind:MAX_PEOPLE\"/><Cell col=\"10\" text=\"bind:CLASS_GRADE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_List","890","105","361","460",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj.set_cssclass("ATEAM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"30\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"No\"/><Cell col=\"1\" text=\"bind:CHECK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"학번\" tooltiptext=\"bind:STUDENT_ID\"/><Cell col=\"3\" text=\"학생이름\"/><Cell col=\"4\" text=\"학과명\"/></Band><Band id=\"body\"><Cell edittype=\"none\" displaytype=\"normal\" text=\"expr:currow+1\" textAlign=\"center\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"bind:CHECK\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:STUDENT_ID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:DEPARTMENT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","310","70","130","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","720","70","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수강 조회");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","450","70","260","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("검색어 입력");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","800","70","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("수강 신청");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_color("#e33b3b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","1100","70","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("수강 삭제");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year","32","70","130","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("YEAR");
            obj.set_datacolumn("YEAR_NAME");
            obj.set_innerdataset("ds_year");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_semester","170","70","130","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("SEMESTER");
            obj.set_datacolumn("SEMESTER_NUM");
            obj.set_innerdataset("ds_semester");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reload","1180","70","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("새로고침");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","35","10","125","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("수강신청");
            obj.set_usedecorate("true");
            obj.set_font("28px/normal \"Gulim\",\"HY견고딕\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtClassName","890","70","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_color("#000000");
            obj.set_background("#ffffff");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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

        	this.fn_year(); // year 검색 함수 호출
        	this.fn_semester(); // semester 검색 함수 호출

        	this.fn_searchDept(); // dept 검색 함수 호출
        };


        // 전체 수강과목 호출
        this.fn_searchDept = function() {

            var strSvcId = "searchDept";
            var strSvcUrl = "svc::selectDeptListForSign.do";
            var inData = "ds_search = ds_search";
            var outData = "ds_dept = ds_dept";
            var strArg = "";
            var callBackFnc = "fnCallBack_deptInfo";
            var isAsync = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        // 전체 수강과목 호출 -> 콜백 처리
        this.fnCallBack_deptInfo = function (svcID, errCD, errMsg) {
            if (svcID == "searchDept" && errCD == 0) {
                this.onRowKey = true; // onrow 이벤트 트리거 on

                // 첫 번째 행 명시적 설정 및 rowposchanged 이벤트 호출
                this.ds_dept.set_rowposition(0); // 첫 번째 행을 수동 설정
                this.ds_dept_onrowposchanged(this.ds_dept, null); // 이벤트 수동 호출

                // 학기 결정 로직
                var currentMonth = new Date().getMonth() + 1; // 1월 = 0 이므로 +1 필요
                var semesterNum = (currentMonth >= 2 && currentMonth <= 6) ? '1' : '2';
                // this.cmb_semester.set_value(semesterNum); // 콤보 박스에서 학기 설정
            } else {
                this.alert("오류 발생: " + errMsg);
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
        	// 현재 날짜를 가져옴
        	var currentMonth = new Date().getMonth() + 1;
            var semester = (currentMonth >= 2 && currentMonth <= 6) ? 1 : 2;

            // 데이터셋에서 현재 학기를 찾아서 선택
            for (var i = 0; i < this.ds_semester.rowcount; i++) {
                var currentSemester = this.ds_semester.getColumn(i, "SEMESTER");
                if (currentSemester == semester) {
                    this.ds_semester.set_rowposition(i); // 해당 행 선택
                    // ds_search에 현재 학기 값 설정 (undefined 방지)
                    this.ds_search.setColumn(0, "SEMESTER", semester); // SEMESTER 컬럼에 값 설정
        			break;
                }
        		else {
        			trace("학기 에러");
        		}
            }

        };


        // ///////////////////////////////////////////////////////////////// //

        // 학생 조회
        this.ds_dept_onrowposchanged = function(obj, e) {
            trace("이벤트 발동 확인");
            trace("트리거 값 확인: " + this.onRowKey);
        	trace(obj.rowposition);

            if (this.onRowKey) {
                var classCode = obj.getColumn(obj.rowposition, "CLASS_CODE");
                trace("선택된 CLASS_CODE: " + classCode); // CLASS_CODE 확인

                // CLASS_CODE가 유효할 경우 조회 함수 호출
                if (classCode) {
                    //this.ds_dept.setColumn(0, "CLASS_CODE", classCode);
                    this.fn_searchList();

                    // 강의 이름 설정
                    var className = obj.getColumn(obj.rowposition, "CLASS_NAME");
                    this.ds_className.setColumn(0, "CLASS_CODE", classCode);
                    this.ds_className.setColumn(0, "CLASS_NAME", className);
                    this.edtClassName.set_value(className);
                }
            }
        };


        // 조회 - 버튼클릭
        this.btn_Search_onclick = function(obj,e)
        {
        	var setYear = this.cmb_year.value;
        	var setSemester = this.cmb_semester.value;

        	this.ds_search.setColumn(0, "YEAR", setYear);
        	this.ds_search.setColumn(0, "SEMESTER", setSemester);

        	// 조회함수 호출
        	this.fn_searchDept();
        };

        // list grd 호출 조회함수
        this.fn_searchList = function ()
        {
        	var classCode = this.ds_dept.getColumn(this.ds_dept.rowposition, "CLASS_CODE");
        	this.ds_search.setColumn(0, "CLASS_CODE", classCode);
        	trace("받아온 CLASS_CODE: " + classCode);  // 전체학과 선택 시 값 확인

        	if (!classCode) {
        		alert("강의를 선택해주세요.");
        		return;
        	}

        	var strSvcId    = "searchList";
        	var strSvcUrl   = "svc::selectAdSignClass.do";
        	var inData      = "ds_search = ds_search";
        	var outData     = "ds_list = ds_list";
        	var strArg      = ""
        	var callBackFnc = "fnCallBack";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // /////////////////////////////////////////////////////////////////////////////////////// //

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
        		this.fn_searchDept(); // 삭제된 이후의 리스트를 출력
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
            this.grd_Depart.addEventHandler("oncellclick",this.grd_Depart_oncellclick,this);
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
