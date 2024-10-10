(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sign_for_class_Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_deptPopup", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listPopup", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROFESSOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_START\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_END\" type=\"STRING\" size=\"256\"/><Column id=\"PEOPLE\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_PEOPLE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"INT\" size=\"256\"/><Column id=\"CLASS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delete", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ALL</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">DEPARTMENT_NAME</Col><Col id=\"data\">학과명</Col></Row><Row><Col id=\"code\">CLASS_NAME</Col><Col id=\"data\">강의명</Col></Row><Row><Col id=\"code\">CLASS_TYPE</Col><Col id=\"data\">이수구분</Col></Row><Row><Col id=\"code\">PROFESSOR_NAME</Col><Col id=\"data\">담당교수</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_totalGrade", this);
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_GRADES\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_confirmed", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_enroll", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROFESSOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_START\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_END\" type=\"STRING\" size=\"256\"/><Column id=\"PEOPLE\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_PEOPLE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"INT\" size=\"256\"/><Column id=\"CLASS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_Depart","33","96","323","294",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_deptPopup");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학과명\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPARTMENT_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:STUDENT_ID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_List","380","96","860","294",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_listPopup");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"30\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHECK\"/><Cell col=\"1\" text=\"학과명\"/><Cell col=\"2\" text=\"강의명\"/><Cell col=\"3\" text=\"이수구분\"/><Cell col=\"4\" text=\"담당교수\"/><Cell col=\"5\" text=\"개강일\"/><Cell col=\"6\" text=\"종강일\"/><Cell col=\"7\" text=\"신청인원\"/><Cell col=\"8\" text=\"수강정원\"/><Cell col=\"9\" text=\"학점\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHECK\"/><Cell col=\"1\" text=\"bind:DEPARTMENT_NAME\"/><Cell col=\"2\" text=\"bind:CLASS_NAME\"/><Cell col=\"3\" text=\"bind:CLASS_TYPE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PROFESSOR_NAME\" controlautosizingtype=\"both\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:CLASS_START\" displaytype=\"date\"/><Cell col=\"6\" text=\"bind:CLASS_END\" displaytype=\"date\"/><Cell col=\"7\" text=\"bind:PEOPLE\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:MAX_PEOPLE\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:CLASS_GRADE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","236","30","120","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","900","30","70","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수강 조회");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","380","30","500","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("검색어 입력");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","990","30","70","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("수강 신청");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","1170","30","70","46",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전체 삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_confirmList","464","420","776","250",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_enroll");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"30\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHECK\"/><Cell col=\"1\" text=\"학과명\"/><Cell col=\"2\" text=\"신청할 강의\"/><Cell col=\"3\" text=\"이수구분\"/><Cell col=\"4\" text=\"담당교수\"/><Cell col=\"5\" text=\"개강일\"/><Cell col=\"6\" text=\"종강일\"/><Cell col=\"7\" text=\"학점\"/></Band><Band id=\"body\"><Cell text=\"bind:CHECK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:DEPARTMENT_NAME\"/><Cell col=\"2\" text=\"bind:CLASS_NAME\"/><Cell col=\"3\" text=\"bind:CLASS_TYPE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PROFESSOR_NAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:CLASS_START\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:CLASS_END\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:CLASS_GRADE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","35","23","310","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("학생 수강신청");
            obj.set_usedecorate("true");
            obj.set_font("28px/normal \"Gulim\",\"HY견고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","92","420","145","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","33","420","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학과명");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProId_1","103","430","123","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","295","420","145","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProId_2","306","430","123","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","236","420","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학번");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","92","469","145","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","33","469","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   성명");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProId_3","103","479","123","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","295","469","145","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProId_4","306","479","123","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","236","469","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("누적학점");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_confirmed","33","519","407","151",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_confirmed");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"30\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학과명\"/><Cell col=\"2\" text=\"신청한 강의\"/><Cell col=\"3\" text=\"이수구분\" tooltiptext=\"bind:CLASS_TYPE\"/><Cell col=\"4\" text=\"학점\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPARTMENT_NAME\"/><Cell col=\"2\" text=\"bind:CLASS_NAME\"/><Cell col=\"3\" text=\"bind:CLASS_TYPE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CLASS_GRADE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete2","1080","30","70","46",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("선택 삭제");
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

            obj = new BindItem("item5","edt_ProId_4","value","ds_totalGrade","TOTAL_GRADES");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sign_for_class_Popup.xfdl", function() {
        // 화면진입
        this.sign_for_class_Popup_onload = function(obj, e) {
        	this.ds_search.setColumn(0,"SEARCH_TYPE","ALL");

            // 팝업 데이터 호출
            this.fn_searchInfo();
        	this.fn_searchClass();
        };

        // (검색) 조회 버튼
        this.btn_Search_onclick = function(obj, e)
        {
            // 검색어 값
            var searchValue = this.edt_Search.value;

            // 검색값이 비어 있으면 필터 해제
            if (searchValue == null || searchValue.trim() === "") {
                this.reload();
                return;
            }

            // 검색 조건에 따라 필터 적용
            if (this.cmb_Search.value == "ALL") {
                // 전체에 대한 필터
                this.ds_listPopup.filter("PROFESSOR_NAME.indexOf('" + searchValue + "') >= 0 || "
                    + "DEPARTMENT_NAME.indexOf('" + searchValue + "') >= 0 || "
                    + "CLASS_NAME.indexOf('" + searchValue + "') >= 0 || "
                    + "CLASS_TYPE.indexOf('" + searchValue + "') >= 0");
            }
            else if (this.cmb_Search.value == "DEPARTMENT_NAME") {
                // 학과명에 대한 필터
                this.ds_listPopup.filter("DEPARTMENT_NAME.indexOf('" + searchValue + "') >= 0");
            }
            else if (this.cmb_Search.value == "CLASS_NAME") {
                // 강의명에 대한 필터
                this.ds_listPopup.filter("CLASS_NAME.indexOf('" + searchValue + "') >= 0");
            }
            else if (this.cmb_Search.value == "CLASS_TYPE") {
                // 이수구분에 대한 필터
                this.ds_listPopup.filter("CLASS_TYPE.indexOf('" + searchValue + "') >= 0");
            }
            else if (this.cmb_Search.value == "PROFESSOR_NAME") {
                // 담당교수에 대한 필터
                this.ds_listPopup.filter("PROFESSOR_NAME.indexOf('" + searchValue + "') >= 0");
            }
            else {
                this.reload();
            }
        };


        // 보기 호출 함수
        this.fn_searchInfo = function(proId) {
            var strSvcId = "searchUserInfo";
            var strSvcUrl = "svc::selectAdSignUserInfo.do";
            var inData = "";
            var outData = "ds_deptPopup = ds_deptPopup";
            var strArg = "";
            var callBackFnc = "fnCallback";
            var isAsync = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 리스트 호출 함수
        this.fn_searchClass = function(proId) {
            var strSvcId = "searchClassInfo";
            var strSvcUrl = "svc::selectAdSignFullList.do";
            var inData = "ds_search = ds_search";
            var outData = "ds_listPopup = ds_listPopup";
            var strArg = "";
            var callBackFnc = "fnCallback";
            var isAsync = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 처리 콜백 함수에서 정렬 실행
        this.fnCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode == -1) {
                this.alert(errorMsg);
                return;
            }
            switch (svcID) {
        	case "searchUserInfo":
        		// 유저 정보 트랜잭션 성공 후 정렬
        		this.ds_deptPopup.set_keystring("S:+DEPARTMENT_NAME");
        		break;

        	case "searchClassInfo":
        		// trace(this.ds_listPopup.saveXML());
        		// this.ds_listPopup.set_keystring("S:+NAME");
        		break;
            }
        };

        // 체크박스 기능
        this.grd_List_onheadclick = function(obj, e) {
            // 체크박스 컬럼 헤더 셀 클릭 시 전체 선택/해제
            if (obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") {

        		// 체크박스의 현재 상태를 확인
        		var chkVal = obj.getCellProperty("head", 0, "text");

        		if (chkVal == "1") { // 이미 체크된 상태라면 체크 해지로 변환
        			chkVal = "0";
        			obj.setCellProperty("head", 0, "text", chkVal); // 프론트에 적용 HEAD 부분
        			for (var i = 0; i < this.ds_listPopup.rowcount; i++) { // 프론트에 적용 ROW 부분
        				this.ds_listPopup.setColumn(i, "CHECK", "0");
        			}
        			// 체크 해제된 경우의 trace 코드
        			// trace("체크박스가 해제되었습니다.");
        		}
        		else {
        			chkVal = "1"; // 체크 안 된 상태라면 체크 표시
        			obj.setCellProperty("head", 0, "text", chkVal); // 프론트에 HEAD 적용
        			for (var i = 0; i < this.ds_listPopup.rowcount; i++) { // 프론트에 적용 ROW 부분
        				this.ds_listPopup.setColumn(i, "CHECK", "1");
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
        	// 선택된 항목을 grid_confirmList에 업데이트
            this.fn_copyCheckedRows();
        	this.fn_caculatingGrade();
        };

        // 개별 체크박스 클릭 시에도 동작하게 oncellclick 추가
        this.grd_List_oncellclick = function(obj, e) {
            // 체크박스 컬럼 클릭 시에만 동작
            if (obj.getCellProperty("body", e.col, "displaytype") == "checkboxcontrol") {
                // ds_totalGrade에 데이터가 있는지 확인
                if (this.edt_ProId_4.value == "undefined" || this.edt_ProId_4.value == null) {
                    // 데이터가 없으면 체크박스를 클릭할 수 없도록 알림
                    this.alert("수강신청할 학생을 선택해주세요.");
        			this.ds_listPopup.setColumn(this.ds_listPopup.rowposition, "CHECK", "0");
                    return
                }
        		else {
        			// trace("강의 추가됨");
        		}
                // 데이터가 있을 때만 체크된 항목을 복사
                this.fn_copyCheckedRows();
        		this.fn_caculatingGrade();
            }
        };

        // 체크된 항목 선택 함수
        this.fn_deleteCheck = function() {
        	this.ds_delete.clearData(); // 이전에 사용한 ds 내용 삭제
        	this.ds_listPopup.filter("CHECK == 1"); // check가 된 항목만 필터링
        	this.ds_delete.copyData(this.ds_listPopup, true); // 필터링된 데이터만 복사
        	this.ds_listPopup.filter(""); // 필터링 초기화
        };

        // 정렬 기능구분
        this.CONST_DEFAULT = "";
        this.CONST_ASC_MARK = "↑";
        this.CONST_DESC_MARK = "↓";
        this.nPrevCell = -1;

        // 정렬 기능 구현
        this.fn_sort = function(obj, e) {
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
        };

        // 새로고침 함수
        // this.btn_Reload_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	this.reload();
        // };


        // 누적학점 조회하기
        this.grd_Depart_oncellclick = function(obj, e) {
            this.ds_totalGrade.clearData();

            // 클릭된 셀의 행 번호를 가져오기
            var selectedRow = this.ds_deptPopup.rowposition;

            // 선택된 행에서 STUDENT_ID를 가져오기
        	var departmentName = this.ds_deptPopup.getColumn(selectedRow, "DEPARTMENT_NAME");
            var studentId = this.ds_deptPopup.getColumn(selectedRow, "STUDENT_ID");
        	var name = this.ds_deptPopup.getColumn(selectedRow, "NAME");

        	this.edt_ProId_1.set_value(departmentName);
        	this.edt_ProId_2.set_value(studentId);
        	this.edt_ProId_3.set_value(name);

            var strSvcId = "totalGrade";
            var strSvcUrl = "svc::selectAdTotalGrade.do";
            var inData = "";
            var outData = "ds_totalGrade = ds_totalGrade";
            var strArg = "studentId =" + studentId;
            var callBackFnc = "totalGrade_fnCallback";
            var isAsync = false;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	this.fn_confirmedClasses();

        	// 검색 value 초기화
        	this.edt_Search.set_value("");
        	this.cmb_Search.set_value("ALL");
        	// 검색 필터 초기화
        	this.ds_enroll.clearData();
        	this.ds_listPopup.reset();
        };

        // 누적학점 콜백
        this.totalGrade_fnCallback = function(svcID, errorCode, errorMsg) {
        	if (errorCode == 0) {
                var totalGrades = this.ds_totalGrade.getColumn(0, "TOTAL_GRADES");
                if (totalGrades !== undefined) {
                    trace("누적학점: " + totalGrades);
                } else {
                    trace("TOTAL_GRADES가 정의되지 않았습니다."); // 데이터가 정상적으로 받아졌는지 확인
                }
            } else {
                trace("Error: " + errorMsg);
            }
        };

        // 총합 학점 계산
        this.fn_caculatingGrade = function () {
            var calculatingGrade1 = 0;
        	var calculatingGrade2 = 0;

        	// ds_confirmed의 모든 행을 반복합니다.
            for (var i = 0; i < this.ds_confirmed.getRowCount(); i++) {
                var classGrade1 = this.ds_confirmed.getColumn(i, "CLASS_GRADE");
                calculatingGrade1 += parseFloat(classGrade1);
            }
        	 // ds_enroll의 모든 행을 반복합니다.
            for (var j = 0; j < this.ds_enroll.getRowCount(); j++) {
                var classGrade2 = this.ds_enroll.getColumn(j, "CLASS_GRADE");
                calculatingGrade2 += parseFloat(classGrade2);
            }

            // caculatingGrade와 기존 총 성적을 더합니다.
            var totalGrades = calculatingGrade1 + calculatingGrade2;
            // ds_totalGrade의 TOTAL_GRADES 열에 총 성적을 설정합니다.
        	trace("ds_confirmed 학점 : " + calculatingGrade1 + " @ " + "ds_enroll 학점 : " + calculatingGrade2)
            this.ds_totalGrade.setColumn(0, "TOTAL_GRADES", totalGrades);
        };

        // 신청한 강의 리스트
        this.fn_confirmedClasses = function() {
            this.ds_confirmed.clearData();

        	// 클릭된 셀의 행 번호를 가져오기
            var selectedRow = this.ds_deptPopup.rowposition;

            // 선택된 행에서 STUDENT_ID를 가져오기
            var studentId = this.ds_deptPopup.getColumn(selectedRow, "STUDENT_ID");

            var strSvcId = "confirmed";
            var strSvcUrl = "svc::selectAdConfirmed.do";
            var inData = "";
            var outData = "ds_confirmed = ds_confirmed";
            var strArg = "studentId =" + studentId;
            var callBackFnc = "confirmed_fnCallback";
            var isAsync = false;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 신청한 강의리스트 콜백
        this.confirmed_fnCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode == 0) {
                this.fn_filterConfirmedClasses();
            } else {
                trace("Error: " + errorMsg);
            }
        };

        // 기존 신청한 강의리스트로 필터링 (확인용 / 나중에 지우자)
        this.fn_filterConfirmedClasses = function() {
            var codeList = [];
            // ds_confirmed에서 모든 강의 코드 가져오기
            for (var i = 0; i < this.ds_confirmed.rowcount; i++) {
                var classCode = this.ds_confirmed.getColumn(i, "CLASS_CODE");
                codeList.push(classCode);
            }
            trace("신청된 강의코드 : " + codeList);
        };


        // 신청할 강의 리스트
        this.fn_copyCheckedRows = function() {
            this.ds_enroll.clearData(); // 기존 데이터 삭제
            this.ds_listPopup.filter("CHECK == 1"); // 체크된 항목 필터링
            var classCodeList = [];

            // 이미 추가된 강의 코드 가져오기
            for (var i = 0; i < this.ds_confirmed.rowcount; i++) {
                classCodeList.push(this.ds_confirmed.getColumn(i, "CLASS_CODE"));
            }

            var totalGrade = 0;
        	// ds_confirmed의 모든 행을 반복합니다.
            for (var k = 0; k < this.ds_confirmed.getRowCount(); k++) {
                var confirm_grade = this.ds_confirmed.getColumn(k, "CLASS_GRADE");
                totalGrade += parseFloat(confirm_grade);
            }

            // 체크된 항목을 복사하면서 중복 체크
            for (var j = 0; j < this.ds_listPopup.rowcount; j++) {
                if (this.ds_listPopup.getColumn(j, "CHECK") == "1") {
                    var classCode = this.ds_listPopup.getColumn(j, "CLASS_CODE");
                    var className = this.ds_listPopup.getColumn(j, "CLASS_NAME");
                    var departmentName = this.ds_listPopup.getColumn(j, "DEPARTMENT_NAME");
                    var classType = this.ds_listPopup.getColumn(j, "CLASS_TYPE");
                    var professorName = this.ds_listPopup.getColumn(j, "PROFESSOR_NAME");
                    var classStart = this.ds_listPopup.getColumn(j, "CLASS_START");
                    var classEnd = this.ds_listPopup.getColumn(j, "CLASS_END");
                    var classGrade = parseFloat(this.ds_listPopup.getColumn(j, "CLASS_GRADE")); // 학점 설정

                    // classCode가 이미 존재하지 않는 경우에만 추가
                    if (classCodeList.indexOf(classCode) === -1) {
                        // 추가하기 전에 총 학점 체크
                        if (totalGrade + classGrade > 15) {
                            alert("신청한 강의를 추가하면 총 학점이 15점을 초과합니다. \n'" + className + "'은(는) 추가할 수 없습니다.");
                            // 중복된 강의의 체크박스를 체크 해제
                            this.ds_listPopup.setColumn(j, "CHECK", "0");
                        } else {
                            var newRowIndex = this.ds_enroll.addRow();

                            // 추가할 데이터를 설정
                            this.ds_enroll.setColumn(newRowIndex, "CLASS_CODE", classCode); // 강의코드
                            this.ds_enroll.setColumn(newRowIndex, "CLASS_NAME", className); // 강의명 설정
                            this.ds_enroll.setColumn(newRowIndex, "DEPARTMENT_NAME", departmentName); // 학과명 설정
                            this.ds_enroll.setColumn(newRowIndex, "CLASS_TYPE", classType); // 이수구분 설정
                            this.ds_enroll.setColumn(newRowIndex, "PROFESSOR_NAME", professorName); // 담당교수 설정
                            this.ds_enroll.setColumn(newRowIndex, "CLASS_START", classStart); // 개강일 설정
                            this.ds_enroll.setColumn(newRowIndex, "CLASS_END", classEnd); // 종강일 설정
                            this.ds_enroll.setColumn(newRowIndex, "CLASS_GRADE", classGrade); // 학점 설정

                            // 추가 후 총 학점 업데이트
                            totalGrade += classGrade;
                            this.ds_totalGrade.setColumn(0, "TOTAL_GRADES", totalGrade); // 총 성적 업데이트
                        }
                    } else {
                        alert("'" + className + "'" + "은(는) 이미 수강신청된 강의입니다.");
                        // 중복된 강의의 체크박스를 체크 해제
                        this.ds_listPopup.setColumn(j, "CHECK", "0");
                    }
                }
            }
            // 필터 초기화
            this.ds_listPopup.filter("");
        };


        // 수강신청 리스트 비우기
        this.btn_Delete_onclick = function(){
        	this.ds_enroll.clearData(); // 기존 데이터 삭제
        	for (var i = 0; i < this.ds_listPopup.getRowCount(); i++) {
        		this.ds_listPopup.setColumn(i, "CHECK", "0");
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sign_for_class_Popup_onload,this);
            this.grd_Depart.addEventHandler("oncellclick",this.grd_Depart_oncellclick,this);
            this.grd_List.addEventHandler("onheadclick",this.grd_List_onheadclick,this);
            this.grd_List.addEventHandler("oncellclick",this.grd_List_oncellclick,this);
            this.cmb_Search.addEventHandler("onitemchanged",this.cmb_Search_onitemchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.edt_Search.addEventHandler("onchanged",this.edt_Search_onchanged,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_Delete2.addEventHandler("onclick",this.btn_Delete_onclick,this);
            this.ds_deptPopup.addEventHandler("onrowposchanged",this.ds_deptPopup_onrowposchanged,this);
        };
        this.loadIncludeScript("sign_for_class_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
