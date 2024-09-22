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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">All</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">Student_id</Col><Col id=\"data\">학번</Col></Row><Row><Col id=\"code\">Name</Col><Col id=\"data\">이름</Col></Row><Row><Col id=\"code\">Status</Col><Col id=\"data\">상태</Col></Row><Row><Col id=\"code\">Phone</Col><Col id=\"data\">번호</Col></Row><Row><Col id=\"code\">Email</Col><Col id=\"data\">이메일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DEPARTMENT_List", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DEPARTMENT_DTL_List", this);
            obj._setContents("<ColumnInfo><Column id=\"Student_id\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/><Column id=\"Status\" type=\"STRING\" size=\"256\"/><Column id=\"Phone\" type=\"STRING\" size=\"256\"/><Column id=\"Email\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DTL_onrow_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"Student_id\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("student_dtl_list", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENT_ID\" type=\"INT\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIV_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Depart_Grd","33","96","237","524",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("DEPARTMENT_List");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"142\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학과코드\"/><Cell col=\"1\" text=\"학과명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPARTMENT_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPARTMENT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Dtl_Grid","293","96","947","524",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("DEPARTMENT_DTL_List");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"180\"/><Column size=\"170\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"247\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"상태\"/><Cell col=\"5\" text=\"번호\"/><Cell col=\"6\" text=\"이메일\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:Student_id\"/><Cell col=\"3\" text=\"bind:Name\"/><Cell col=\"4\" text=\"bind:Status\"/><Cell col=\"5\" text=\"bind:Phone\"/><Cell col=\"6\" text=\"bind:Email\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Search_Cmb","33","30","237","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("Search_Type");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_value("All");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Select_btn","1086","30","68","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","293","30","770","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("plus_btn","1176","30","64","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
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

        	// 학과 호출
        	this.select_Depart();

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
        	popup.style.set_overlaycolor("#6666664C");
        	popup.form.style.set_border("1 solid #4c5a6f");
        }

        // 팝업콜백 함수
        this.fn_popupCallback = function(strPopupID, strReturn)
        {
            if(strPopupID == undefined){
                return;
            }
        };

        // this.fnCallback_Depart = function(strSvcId, nErrorCode, strErrorMsg) {
        //     if (nErrorCode < 0) {
        //         console.log("Error occurred: " + strErrorMsg);
        //         return;
        //     }

        //     // 전체학과 추가 후 rowposition을 설정
        //     var newRow = this.DEPARTMENT_List.insertRow(0);  // 0번 인덱스에 전체학과 추가
        //     this.DEPARTMENT_List.setColumn(newRow, "DEPARTMENT_CODE", "00");
        //     this.DEPARTMENT_List.setColumn(newRow, "DEPARTMENT_NAME", "전체학과");
        //
        //     // 0번 인덱스를 rowposition으로 설정
        //     this.DEPARTMENT_List.set_rowposition(0);
        // };

        // 등록 버튼 클릭 시
        // this.plus_btn_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        //
        // 	 var selectedDepartmentCode = this.DEPARTMENT_List.getColumn(this.DEPARTMENT_List.rowposition, "DEPARTMENT_CODE");
        // 	 console.log("Selected DEPARTMENT_CODE: " + selectedDepartmentCode);
        // 	var objParam = {param1 : this.DEPARTMENT_List};
        // /*	var objParam;*/
        // 	var surl = "MainBase::add_Student_Popup.xfdl"
        // 	this.showPopup(objParam, surl);
        // };

        this.plus_btn_onclick = function(obj, e) {
            // 그리드에서 선택한 학과의 DEPARTMENT_CODE를 가져옴
            var selectedDepartmentCode = this.DEPARTMENT_List.getColumn(this.DEPARTMENT_List.rowposition, "DEPARTMENT_CODE");

            // 선택한 학과 코드가 제대로 선택되었는지 확인
            console.log("Selected DEPARTMENT_CODE: " + selectedDepartmentCode);

            // 팝업으로 넘길 파라미터 (데이터셋 전체와 선택된 학과의 코드)
            var objParam = {
                param1: this.DEPARTMENT_List,            // 데이터셋 전체
                selectedDeptCode: selectedDepartmentCode // 선택한 학과의 DEPARTMENT_CODE
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
        	this.Search.setColumn(0,"DEPARTMENT_CODE",obj.getColumn(obj.rowposition,"DEPARTMENT_CODE"));

        	this.fnSearch();
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

        this.Dtl_Grid_oncelldblclick = function(obj,e)
        {
        	this.fn_student_dtl();

        	var objParam = {param1:this.student_dtl_list,
        					param2:this.DEPARTMENT_List};
        	console.log(this.student_dtl_list.getColumn(0,"GENDER"));
        	var surl = "MainBase::select_Student_Popup.xfdl"
        	this.showPopup(objParam, surl);
        };

        this.DEPARTMENT_DTL_List_onrowposchanged = function(obj,e)
        {
        	this.DTL_onrow_ds.setColumn(0,"Student_id",obj.getColumn(obj.rowposition, "Student_id"));

        	console.log(this.DTL_onrow_ds.getColumn(0,"Student_id"));
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
                var objDs = obj.getBindDataset();
        		objDs.set_enableevent(false);  // 이벤트 비활성화

                var isChecked = obj.getCellProperty("head", e.cell, "text") == "1";  // 헤더 체크박스 상태 확인

                // 데이터셋의 모든 행을 선택/해제
                for (var i = 0; i < objDs.getRowCount(); i++) {
                    objDs.setColumn(i, "CHECKED", isChecked ? 0 : 1);  // 전체 선택/해제
                }

                // 헤더 체크박스 상태 반전 (선택/해제 토글)
                obj.setCellProperty("head", e.cell, "text", isChecked ? "0" : "1");

        		objDs.set_enableevent(true);  // 이벤트 활성화
            } else {
                // 정렬 기능 실행
                this.fn_sort(obj, e);
            }

            obj.clearSelect();   // 선택된 셀 해제
            obj.setFocus(false); // 포커스 해제
        };

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
                obj.setCellProperty("head", e.cell, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_ASC_MARK);
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
                obj.setCellProperty("head", this.nPrevCell, "text", sPrevText.substr(0, sPrevText.length - 1));
            }

            this.nPrevCell = e.cell;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Code_onload,this);
            this.Dtl_Grid.addEventHandler("oncelldblclick",this.Dtl_Grid_oncelldblclick,this);
            this.Dtl_Grid.addEventHandler("onheadclick",this.Dtl_Grid_onheadclick,this);
            this.Select_btn.addEventHandler("onclick",this.Select_btn_onclick,this);
            this.plus_btn.addEventHandler("onclick",this.plus_btn_onclick,this);
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
