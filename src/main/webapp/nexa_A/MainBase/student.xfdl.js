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
            obj = new Dataset("Search_Type", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ALL</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">STUDENT_ID</Col><Col id=\"data\">학번</Col></Row><Row><Col id=\"code\">NAME</Col><Col id=\"data\">이름</Col></Row><Row><Col id=\"code\">UNIV_YEAR</Col><Col id=\"data\">학년</Col></Row><Row><Col id=\"code\">PHONE</Col><Col id=\"data\">번호</Col></Row><Row><Col id=\"code\">EMAIL</Col><Col id=\"data\">이메일</Col></Row><Row><Col id=\"code\">BIRTHDAY</Col><Col id=\"data\">생년월일</Col></Row><Row><Col id=\"code\">GENDER</Col><Col id=\"data\">성별</Col></Row><Row><Col id=\"code\">ADDRESS</Col><Col id=\"data\">주소</Col></Row><Row><Col id=\"code\">STATUS</Col><Col id=\"data\">상태</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DEPARTMENT_List", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DEPARTMENT_DTL_List", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIV_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DTL_onrow_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("student_dtl_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STUDENT_ID\" type=\"INT\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIV_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"INT\" size=\"256\"/><Column id=\"PHOTO\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_PART\" type=\"STRING\" size=\"256\"/><Column id=\"DOMAIN_PART\" type=\"STRING\" size=\"256\"/><Column id=\"ZIPCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dlt_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"Student_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Depart_Grd","23","79","166","524",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("DEPARTMENT_List");
            obj.set_autofittype("col");
            obj.set_cssclass("ATEAM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"142\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학과코드\"/><Cell col=\"1\" text=\"학과명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPARTMENT_CODE\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"00\"/><Cell col=\"1\" text=\"bind:DEPARTMENT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Dtl_Grid","199","79","1050","524",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("DEPARTMENT_DTL_List");
            obj.set_autofittype("col");
            obj.set_cssclass("ATEAM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"52\"/><Column size=\"65\"/><Column size=\"73\"/><Column size=\"141\"/><Column size=\"70\"/><Column size=\"36\"/><Column size=\"187\"/><Column size=\"47\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Check\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"연락처\"/><Cell col=\"4\" text=\"이메일\"/><Cell col=\"5\" text=\"생년월일\"/><Cell col=\"6\" text=\"성별\"/><Cell col=\"7\" text=\"주소\"/><Cell col=\"8\" text=\"학적상태\"/><Cell col=\"9\" text=\"학과\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Check\"/><Cell col=\"1\" text=\"bind:STUDENT_ID\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PHONE\"/><Cell col=\"4\" text=\"bind:EMAIL\"/><Cell col=\"5\" text=\"bind:BIRTHDAY\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:GENDER\" textAlign=\"center\" expr=\"expr:GENDER==&apos;M&apos; ? &apos;남자&apos; : GENDER==&apos;F&apos; ? &apos;여자&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:ADDRESS\"/><Cell col=\"8\" text=\"bind:STATUS\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:DEPARTMENT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Search_Cmb","766","50","116","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("Search_Type");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Select_btn","1043","50","66","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","886","50","153","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("plus_btn","1113","50","66","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("delete_btn","1183","50","66","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","10","125","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("학생 조회");
            obj.set_usedecorate("true");
            obj.set_font("28px/normal \"Gulim\",\"HY견고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","201","50","66","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("엑셀 등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelexp","270","50","66","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("엑셀 받기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","207","603","43","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("총원 :");
            obj.set_font("14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_RowCnt","250","603","30","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_background("white");
            obj.set_textAlign("right");
            obj.set_font("bold 14px/normal \"Gulim\"");
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
        this.registerScript("student.xfdl", function() {

        // 시작 시
        this.Form_Code_onload = function(obj,e)
        {
        	this.Search.setColumn(0,"SEARCH_TYPE","All");
        	this.Search_Cmb.set_index(0);

        	// 학과 호출

        	this.onRowKey = false; // onrow 이벤트 트리거(off)
        	// 학과 호출
        	this.select_Depart();
        };

        // 엔터키 검색
        this.Form_Code_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.Select_btn.click();
        	}
        };

        //처리콜백 함수
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode == -1)
        	{
        		this.alert(errorMsg);
        		return;
        	}


        	switch(svcID) {
        	case "selectDepartment":
        		this.DEPARTMENT_List.insertRow(0); // 맨 앞에 row 생성
        		this.DEPARTMENT_List.setColumn(0, "DEPARTMENT_CODE", 0);
        		this.DEPARTMENT_List.setColumn(0, "DEPARTMENT_NAME", "전체학과");

        		// ds_dept에 row 추가 후 onrowpos이벤트 실행
        		this.DEPARTMENT_List.set_rowposition(0); // 첫번째 행 수동 설정
        		this.onRowKey = true; // onrow 이벤트 트리거(on)
        		this.DEPARTMENT_List_onrowposchanged(this.DEPARTMENT_List, null); // 이벤트 수동호출
        		break;
        	case "deleteAdStudent":
        		this.alert("삭제되었습니다.");
        		this.fnSearch();
        		break;
        	case "saveAdStudent":
        		this.fnSearch();
        		break;
        	case "selectAdStudentdtl":
        		var objParam = {param1:this.student_dtl_list,
        			param2:this.DEPARTMENT_List};
        		var surl = "MainBase::select_Student_Popup.xfdl"
        		this.showPopup(objParam, surl);
        		break;
        	case "selectAdStudent":
        		this.sta_RowCnt.set_text(this.DEPARTMENT_DTL_List.rowcount);
        		break;
        	default:
        		break;
        	}
        };
        // 시작 학과 호출
        this.select_Depart = function(){

        	var strSvcId    = "selectDepartment";
        	var strSvcUrl   = "svc::selectDepartment.do";
        	var inData      = "";
        	var outData     = "DEPARTMENT_List = DEPARTMENT_List";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        // 팝업호출
        this.showPopup = function (objParam, surl)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("popupWork", 0, 0, 800, 700, null, null, surl);
        	popup.set_dragmovetype("all");
        	popup.set_layered("true");
        	popup.set_autosize(true);
        	popup.set_showtitlebar("Popup Title");
        	popup.set_showstatusbar(false);
        	popup.set_resizable(true);
        	popup.set_openalign("center middle");
        	popup.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback", true);
        }

        // 팝업콜백 함수
        this.fn_popupCallback = function(strPopupID, strReturn)
        {
            if(strPopupID == "popupWork"){
        		this.fnSearch();
                return;
            }
        };

        this.plus_btn_onclick = function(obj, e) {
            // 그리드에서 선택한 학과의 DEPARTMENT_CODE를 가져옴
            var selectedDepartmentCode = this.DEPARTMENT_List.getColumn(this.DEPARTMENT_List.rowposition, "DEPARTMENT_CODE");


            // 팝업으로 넘길 파라미터 (데이터셋 전체와 선택된 학과의 코드)
            var objParam = {
                param1: this.DEPARTMENT_List,            // 데이터셋 전체
                selectedDepartmentCode: selectedDepartmentCode // 선택한 학과의 DEPARTMENT_CODE
            };

            // 팝업 창 경로 설정
            var surl = "MainBase::add_Student_Popup.xfdl";

            // 팝업 호출 (데이터셋과 선택된 학과 코드 전달)
            this.showPopup(objParam, surl);
        };


        // 검색 시
        this.Select_btn_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        // 그리드 선택 -- 데이터 셋 레벨에 따라서
        this.DEPARTMENT_List_onrowposchanged = function(obj,e)
        {
        	if (this.onRowKey == true){
        		this.Search.setColumn(0,"DEPARTMENT_CODE",obj.getColumn(obj.rowposition,"DEPARTMENT_CODE"));
        		this.fnSearch();
        	}
        };

        // 조회 검색
        this.fnSearch = function()
        {
        	if(this.Search.getColumn(0,"DEPARTMENT_CODE") == ''
        		|| this.Search.getColumn(0,"DEPARTMENT_CODE") == 'undefined'
        		|| this.Search.getColumn(0,"DEPARTMENT_CODE") == null) {
        		alert("학과를 선택해주세요.");
        		return;
        	}
        	var strSvcId    = "selectAdStudent";
        	var strSvcUrl   = "svc::selectAdStudent.do";
        	var inData      = "Search = Search";
        	var outData     = "DEPARTMENT_DTL_List=DEPARTMENT_DTL_List";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        // 학생 팝업
        this.Dtl_Grid_oncelldblclick = function(obj,e)
        {
        	this.fn_student_dtl();

        };

        this.DEPARTMENT_DTL_List_onrowposchanged = function(obj,e)
        {
        	this.DTL_onrow_ds.setColumn(0,"STUDENT_ID",obj.getColumn(obj.rowposition, "STUDENT_ID"));

        };

        this.fn_student_dtl = function()
        {
        	var strSvcId    = "selectAdStudentdtl";
        	var strSvcUrl   = "svc::selectAdStudentdtl.do";
        	var inData      = "DTL_onrow_ds = DTL_onrow_ds";
        	var outData     = "student_dtl_list=student_dtl_list";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        this.Dtl_Grid_onheadclick = function(obj, e)
        {

            // 체크박스 컬럼 헤더 셀 클릭 시 전체 선택/해제
            if (obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") {

        		// 아래 속성에서 0은 그리드에서 0번쨰 column을 의미하며 text 값을 가져오라는 의미입니다.
        		var chkVal = obj.getCellProperty("head", 0, "text");

        		// 0이면 체크 안된 상태이고 1이면 체크된 상태임을 의미합니다.
        		if (chkVal == "1") { // 이미 체크된 상태라면 체크 해지로 변환
        			chkVal   = "0";
        			obj.setCellProperty("head", 0, "text", chkVal); //프론트에 적용 HEAD 부분
        			for (var i=0; i<this.DEPARTMENT_DTL_List.rowcount; i++) { //프론트에 적용 ROW 부분
        				this.DEPARTMENT_DTL_List.setColumn(i,"Check","0");
        			}
        		} else {
        			chkVal   = "1"; //체크 안 된 상태라면 체크 표시
        			obj.setCellProperty("head", 0, "text", chkVal); //프론트에 HEAD 적용
        			for (var i=0; i<this.DEPARTMENT_DTL_List.rowcount; i++) { //프론트에 적용 ROW 부분
        				this.DEPARTMENT_DTL_List.setColumn(i,"Check","1");
        			}

        		}
            } else {
                // 정렬 기능 실행
                this.fn_sort(obj, e);
            }

            obj.clearSelect();   // 선택된 셀 해제
            obj.setFocus(false); // 포커스 해제

        };
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

        this.fn_deletecheck = function()
        {

        	this.dlt_ds.clearData();
        	this.DEPARTMENT_DTL_List.filter("Check==1");
        	this.dlt_ds.copyData(this.DEPARTMENT_DTL_List, true);
        	this.DEPARTMENT_DTL_List.filter("");

        };

        this.fn_delete = function()
        {
        	var strSvcId    = "deleteAdStudent";
        	var strSvcUrl   = "svc::deleteAdStudent.do";
        	var inData      = "dlt_ds = dlt_ds";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        this.delete_btn_onclick = function(obj, e)
        {
            this.fn_deletecheck();

        	var checkedCount = this.dlt_ds.rowcount;
        	if(checkedCount > 0){
        		if(confirm("선택한 항목을 삭제하시겠습니까?")){
        			this.fn_delete();
        		}
        	}
        	else {
                alert("삭제할 항목을 선택하세요.");
            }
        };

        this.btn_excel_onclick = function(obj,e)
        {
        	// 팝업으로 넘길 파라미터 (데이터셋 전체와 선택된 학과의 코드)
            var objParam = {
            };

            // 팝업 창 경로 설정
            var surl = "MainBase::excel_Student_Popup.xfdl";

            // 팝업 호출 (데이터셋과 선택된 학과 코드 전달)
            this.showPopup(objParam, surl);
        };

        this.btn_excelexp_onclick = function(obj,e)
        {
            // 현재 그리드 데이터셋을 가져옵니다.
            var ds = this.Dtl_Grid.getBindDataset();
            var data = ds.saveXML(); // 데이터셋의 데이터를 XML 형식으로 변환합니다.


            // 서버로 transaction 호출
            var url = "http://localhost:8082/HanaUIS/excelExport.jsp?type=stu"; // 다운로드 excel 요청

            // XMLHttpRequest 객체 생성
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // 서버 응답이 성공적이면 엑셀 파일을 다운로드합니다.
                        var blob = new Blob([xhr.response], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                        var link = document.createElement("a");
                        link.href = window.URL.createObjectURL(blob);
                        link.download = "student_data.xlsx"; // 다운로드할 파일 이름
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link); // 링크를 제거합니다.
                    } else {
                        trace("오류 발생: ");
                    }
                }
            };

            // 데이터 전송
            xhr.responseType = "blob"; // 응답 유형을 blob으로 설정
            xhr.send("data=" + encodeURIComponent(data));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Code_onload,this);
            this.addEventHandler("onkeyup",this.Form_Code_onkeyup,this);
            this.Dtl_Grid.addEventHandler("oncelldblclick",this.Dtl_Grid_oncelldblclick,this);
            this.Dtl_Grid.addEventHandler("onheadclick",this.Dtl_Grid_onheadclick,this);
            this.Select_btn.addEventHandler("onclick",this.Select_btn_onclick,this);
            this.plus_btn.addEventHandler("onclick",this.plus_btn_onclick,this);
            this.delete_btn.addEventHandler("onclick",this.delete_btn_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.btn_excelexp.addEventHandler("onclick",this.btn_excelexp_onclick,this);
            this.DEPARTMENT_List.addEventHandler("onrowposchanged",this.DEPARTMENT_List_onrowposchanged,this);
            this.DEPARTMENT_DTL_List.addEventHandler("onrowposchanged",this.DEPARTMENT_DTL_List_onrowposchanged,this);
        };
        this.loadIncludeScript("student.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
