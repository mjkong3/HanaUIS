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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ALL</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">CLASS_CODE</Col><Col id=\"data\">강의코드</Col></Row><Row><Col id=\"code\">CLASS_NAME</Col><Col id=\"data\">강의명</Col></Row><Row><Col id=\"code\">CLASS_START</Col><Col id=\"data\">개강일</Col></Row><Row><Col id=\"code\">CLASS_END</Col><Col id=\"data\">종강일</Col></Row><Row><Col id=\"code\">SEMESTER</Col><Col id=\"data\">학기</Col></Row><Row><Col id=\"code\">CLASS_GRADE</Col><Col id=\"data\">학년</Col></Row><Row><Col id=\"code\">CLASSROOM_ID</Col><Col id=\"data\">강의실</Col></Row><Row><Col id=\"code\">PROFESSOR_ID</Col><Col id=\"data\">담당교수</Col></Row><Row><Col id=\"code\">CLASS_TYPE</Col><Col id=\"data\">이수구분</Col></Row><Row><Col id=\"code\">ADMIN_CODE</Col><Col id=\"data\">관리자</Col></Row><Row><Col id=\"code\">REGDATE</Col><Col id=\"data\">등록일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_START\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_END\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSROOM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROFESSOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"INT\" size=\"10\"/><Column id=\"CLASS_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"CRE_USR\" type=\"STRING\" size=\"256\"/><Column id=\"CRE_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_USR\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delete", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_class", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_Depart","51","70","187","480",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_dept");
            obj.set_cssclass("ATEAM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"69\"/><Column size=\"115\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학과코드\"/><Cell col=\"1\" text=\"학과명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPARTMENT_CODE\" textAlign=\"center\" maskeditformat=\"00\" displaytype=\"mask\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:DEPARTMENT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_List","251","70","947","481",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj.set_cssclass("ATEAM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"68\"/><Column size=\"116\"/><Column size=\"120\"/><Column size=\"118\"/><Column size=\"48\"/><Column size=\"63\"/><Column size=\"74\"/><Column size=\"80\"/><Column size=\"107\"/><Column size=\"103\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"강의코드\"/><Cell col=\"2\" text=\"강의명\"/><Cell col=\"3\" text=\"개강일\"/><Cell col=\"4\" text=\"종강일\"/><Cell col=\"5\" text=\"학기\"/><Cell col=\"6\" text=\"이수학점\"/><Cell col=\"7\" text=\"이수구분\"/><Cell col=\"8\" text=\"강의실\"/><Cell col=\"9\" text=\"담당교수\"/><Cell col=\"10\" text=\"학과\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHECK\"/><Cell col=\"1\" text=\"bind:CLASS_CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CLASS_NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CLASS_START\" displaytype=\"calendarcontrol\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CLASS_END\" displaytype=\"calendarcontrol\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SEMESTER\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:CLASS_GRADE\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:CLASS_TYPE\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:CLASSROOM_ID\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:DEPARTMENT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","700","40","116","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","986","40","68","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","822","40","153","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","1060","40","64","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","1130","40","64","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("sta_RowCnt","1154","566","33","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("white");
            obj.set_textAlign("right");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1112","566","56","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("총계 :");
            obj.set_font("14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("stt_board","51","10","191","49",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("강의 조회");
            obj.set_font("30px/normal \"Gulim\"");
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
        /* 필요 기능 정리
        * 1. 화면진입 - onload event / onrow event 최초 1회 수동 설정
        * 2. 조회 - 학과클릭 + 조회버튼
        * 3. 등록 - 등록버튼 + 등록페이지 팝업
        * 4. 삭제 - 삭제버튼 + 그리드 체크박스
        * 5. 상세보기 - 셀 더블클릭 + 상세페이지 팝업 + 수정은 팝업에서
        * 6. 콜백 - 단순 콜백 + 트랜잭션 후 ds 및 이벤트 제어용 콜백
        * 7. 기타기능 - 정렬 + 체크박스 + 엔터
        */

        // 1. 온로드
        this.classInfo_onload = function(obj,e)
        {

        	/* 필요기능
            * cmb 기본값 all로 설정
            * dept grd 호출
        	* onrow 이벤트 발동 막기(트리거 off)
            */

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
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }


        // 2. 조회 - 학과클릭 + 조회버튼
        // 2-1) 조회 - 학과클릭
        this.ds_dept_onrowposchanged = function(obj,e)
        {
        	if (this.onRowKey == true){

        		this.ds_search.setColumn(0,"DEPARTMENT_CODE", obj.getColumn(obj.rowposition,"DEPARTMENT_CODE"));
        		// 조회함수 호출
        		this.fn_searchList();
        	}

        };

        // 2-2) 조회 - 버튼클릭
        this.btn_Search_onclick = function(obj,e)
        {
        	// 조회함수 호출
        	this.fn_searchList();
        };

        // list grd 호출 조회함수
        this.fn_searchList = function ()
        {
            var deptCode = this.ds_search.getColumn(0, "DEPARTMENT_CODE");

            if (deptCode == '' || deptCode == 'undefined' || deptCode == null) {
                alert("학과를 선택해주세요.");
                return;
            }
        	var strSvcId    = "searchList";
        	var strSvcUrl   = "svc::selectAdClsList.do";
        	var inData      = "ds_search=ds_search";
        	var outData     = "ds_list=ds_list";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 3. 등록
        this.btn_Add_onclick = function(obj,e)
        {
        	/* 필요한 기능
        	* 현재 클릭한 dept_code값 변수로 넘겨주기
        	* popup 호출
        	*/

        	// 현재 클릭한 dept_code 값
        	var deptCode = this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPARTMENT_CODE");

        	var objParam = {
        		param1: this.ds_dept,   // 전체 데이터셋
        		deptCode: deptCode      // dept grd의 현재 rowposition의 dept code
        	};
        	var surl = "MainBase::add_ClassInfo_Popup.xfdl"; // popup 경로
        	this.insertPop(objParam, surl); // 팝업호출

        };

        // 등록용 팝업 호출
        this.insertPop = function (objParam, surl)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("insertPop", 0, 0, 800, 700, null, null, surl);
        	popup.set_dragmovetype("all");
        	popup.set_layered("true");
        	popup.set_autosize(true);
        	popup.set_showtitlebar("Popup Title");
        	popup.set_showstatusbar(false);
        	popup.set_resizable(true);
        	popup.set_openalign("center middle");
        	popup.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback", true);
        	popup.style.set_overlaycolor("#6666664C");
        	popup.form.style.set_border("1 solid #4c5a6f");
        }

        // 4. 삭제
        this.btn_Delete_onclick = function(obj,e)
        {
        	// 체크된 항목 선택 함수 호출
            this.fn_deleteCheck();

        	// 삭제할 데이터 숫자가 0 이상일때(체크한 항목이 있을때만) 삭제진행
        	var checkedCount = this.ds_delete.rowcount;
        	if(checkedCount>0){
        		if(confirm("선택한 항목을 삭제하시겠습니까?")){
        			this.fn_deleteList();
        		}
        	}
        	else {
                alert("삭제할 항목을 선택하세요.");
            }

        };

        // 체크된 항목 선택 함수
        this.fn_deleteCheck = function()
        {
        	this.ds_delete.clearData(); // 이전에 사용한 ds 내용 삭제
        	this.ds_list.filter("CHECK==1"); // check가 된 항목만 필터링
        	this.ds_delete.copyData(this.ds_list, true); // 필터링된 데이터만 복사
        	this.ds_list.filter(""); // 필터링 초기화

        };

        // 삭제버튼 트랜잭션 함수 - 앞서 check된 항목만 ds에 넣어서 보낸다
        this.fn_deleteList = function()
        {
        	var strSvcId    = "deleteList";
        	var strSvcUrl   = "svc::deleteAdClsInfo.do";
        	var inData      = "ds_delete = ds_delete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        // 5. 상세보기
        this.grd_List_oncelldblclick = function(obj,e)
        {
        	// 현재 선택한 cell의 class_cdoe를 변수에 저장
            var clsCd = obj.getBindDataset().getColumn(e.row, "CLASS_CODE");
            // 해당 class_code를 함수에 전달
        	this.fn_searchClsInfo(clsCd);
        };

        // 상세보기 호출 함수
        this.fn_searchClsInfo = function(clsCd)
        {

        	var strSvcId    = "selectAdClsInfo";
        	var strSvcUrl   = "svc::selectAdClsInfo.do";
        	var inData      = "";
        	var outData     = "ds_class=ds_list";
        	var strArg      = "CLASS_CODE="+clsCd;
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        // 상세보기 팝업 호출 함수
        this.updatePop = function (objParam, surl)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("updatePop", 0, 0, 800, 700, null, null, surl);
        	popup.set_dragmovetype("all");
        	popup.set_layered("true");
        	popup.set_autosize(true);
        	popup.set_showtitlebar("Popup Title");
        	popup.set_showstatusbar(false);
        	popup.set_resizable(true);
        	popup.set_openalign("center middle");
        	popup.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback", true);
        	popup.style.set_overlaycolor("#6666664C");
        	popup.form.style.set_border("1 solid #4c5a6f");
        }

        // 6-1) 콜백함수 - 트랜잭션
        this.fnCallback = function (svcID, errCD, errMsg)
        {
        	if (errCD == -1 ) {
        		alert(errMsg);
        		return
        	}

        	switch(svcID) {

        		// 조회
        	case "searchList":
        		var cRow = this.ds_list.rowcount;
        		this.sta_RowCnt.set_text(cRow);
        		break;

        		// onload시 학과조회
        	case "searchDept":

        		// 전체검색을 위한 전체학과 넣어주기
        		// 학과코드 - 0 / 학과명 - 전체학과
        		// grid에서는 00으로 표기하기위해 maskedit 설정
        		this.ds_dept.insertRow(0); // 맨 앞에 row 생성
        		this.ds_dept.setColumn(0, "DEPARTMENT_CODE", 0);
        		this.ds_dept.setColumn(0, "DEPARTMENT_NAME", "전체학과");


        		// ds_dept에 row 추가 후 onrowpos이벤트 실행
        		this.onRowKey = true; // onrow 이벤트 트리거(on)
        		this.ds_dept.set_rowposition(0); // 첫번째 행 수동 설정
        		this.ds_dept_onrowposchanged(this.ds_dept, null); // 이벤트 수동호출
        		break;

        	// 삭제
        	case "deleteList":

        		alert("삭제되었습니다");
        		this.fn_searchList();
        		break;

        	// 상세보기
        	case "selectAdClsInfo":
        		// 받아온 ds를 보내야 하기 때문에 callback에서 실행
        		var proNm = this.ds_class.getColumn(this.ds_class.rowposition, "NAME");
        		var clsType = this.ds_class.getColumn(this.ds_class.rowposition, "CLASS_TYPE");
        		var objParam = {
        			param1: this.ds_class,
        			param2: this.ds_dept,
        			proNm: proNm
        		};
        		// 받아온 값 확인하기
        		// 팝업 창 경로 설정
        		var surl = "MainBase::select_ClassInfo_Popup.xfdl";

        		// 데이터가 존재할 경우 팝업을 호출
        		if (this.ds_class.rowcount > 0) {
        			this.updatePop(objParam, surl);  // 데이터가 로드되었는지 확인 후 팝업 실행
        		} else {
        			alert("데이터셋이 비어있습니다.");
        		}
        		break;

        	}
        };

        // 6-2) 콜백함수 - 팝업호출 / 등록 및 수정 후 list 최신화
        this.fn_popupCallback = function (popID, rVal)
        {
        	switch(popID) {
        	case "insertPop":
        		if (rVal == "success"){
        			this.fn_searchList();
        		}
        		break;
        	case "updatePop":
        		if (rVal == "success"){
        			this.fn_searchList();
        		}
        		break;
        	}
        };

        // 7. 기타기능
        this.grd_List_onheadclick = function(obj,e)
        {
            // 체크박스 컬럼 헤더 셀 클릭 시 전체 선택/해제
            if (obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") {

        		// 아래 속성에서 0은 그리드에서 0번쨰 column을 의미하며 text 값을 가져오라는 의미입니다.
        		var chkVal = obj.getCellProperty("head", 0, "text");

        		// 0이면 체크 안된 상태이고 1이면 체크된 상태임을 의미합니다.
        		if (chkVal == "1") { // 이미 체크된 상태라면 체크 해지로 변환
        			chkVal   = "0";
        			obj.setCellProperty("head", 0, "text", chkVal); //프론트에 적용 HEAD 부분
        			for (var i=0; i<this.ds_list.rowcount; i++) { //프론트에 적용 ROW 부분
        				this.ds_list.setColumn(i,"CHECK","0");
        			}
        		} else {
        			chkVal   = "1"; //체크 안 된 상태라면 체크 표시
        			obj.setCellProperty("head", 0, "text", chkVal); //프론트에 HEAD 적용
        			for (var i=0; i<this.ds_list.rowcount; i++) { //프론트에 적용 ROW 부분
        				this.ds_list.setColumn(i,"CHECK","1");
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


        // 엔터키 검색기능
        this.classInfo_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btn_Search.click();
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.classInfo_onload,this);
            this.addEventHandler("onkeyup",this.classInfo_onkeyup,this);
            this.grd_List.addEventHandler("onheadclick",this.grd_List_onheadclick,this);
            this.grd_List.addEventHandler("oncelldblclick",this.grd_List_oncelldblclick,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);
            this.stt_board.addEventHandler("onclick",this.stt_board_onclick,this);
            this.ds_dept.addEventHandler("onrowposchanged",this.ds_dept_onrowposchanged,this);
        };
        this.loadIncludeScript("classInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
