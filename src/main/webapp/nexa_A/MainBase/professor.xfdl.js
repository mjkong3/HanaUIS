(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("professor");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"PROFESSOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"INT\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ALL</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">PROFESSOR_ID</Col><Col id=\"data\">교번</Col></Row><Row><Col id=\"code\">NAME</Col><Col id=\"data\">성명</Col></Row><Row><Col id=\"code\">PHONE</Col><Col id=\"data\">연락처</Col></Row><Row><Col id=\"code\">EMAIL</Col><Col id=\"data\">EMAL</Col></Row><Row><Col id=\"code\">GENDER</Col><Col id=\"data\">성별</Col></Row><Row><Col id=\"code\">ADDRESS</Col><Col id=\"data\">주소</Col></Row><Row><Col id=\"code\">STATUS</Col><Col id=\"data\">재직여부</Col></Row><Row><Col id=\"code\">DEPARTMENT_CODE</Col><Col id=\"data\">담당학과</Col></Row><Row><Col id=\"code\">ADMIN_CODE</Col><Col id=\"data\">관리자</Col></Row><Row><Col id=\"code\">REGDATE</Col><Col id=\"data\">등록일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_admin", this);
            obj._setContents("<ColumnInfo><Column id=\"regDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pro", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_Depart","33","96","237","524",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_dept");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학과코드\"/><Cell col=\"1\" text=\"학과명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPARTMENT_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPARTMENT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_List","293","96","947","524",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"교번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"연락처\"/><Cell col=\"4\" text=\"EMAIL\"/><Cell col=\"5\" text=\"생년월일\"/><Cell col=\"6\" text=\"성별\"/><Cell col=\"7\" text=\"주소\"/><Cell col=\"8\" text=\"재직여부\"/><Cell col=\"9\" text=\"담당학과\"/><Cell col=\"10\" text=\"관리자\"/><Cell col=\"11\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PROFESSOR_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PHONE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:EMAIL\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:BIRTHDAY\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:GENDER\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:ADDRESS\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:STATUS\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:DEPARTMENT_CODE\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:ADMIN_CODE\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:REGDATE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","33","30","237","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","1086","30","68","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","293","30","770","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","1176","30","64","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("professor.xfdl", function() {
        /* 필요 기능 정리
         * 1. 화면진입 - onload event
         * 2. 조회 - 학과클릭 + 조회버튼
         * 3. 등록 - 등록버튼 + 등록페이지 팝업
         * 4. 삭제 - 그리드 체크박스로 가능할까?
         * 5. 상세보기 - grid oncelldbclick event + 상세페이지 팝업
         * 6. 수정 - 상세페이지에서 수정버튼 + 완료버튼
         */

        // 1. 화면진입
        this.professor_onload = function(obj,e)
        {
        	/* 필요기능
        	 * cmb 기본값 all로 설정
        	 * dept grd 호출
        	 */

        	// cmb 기본값 all로 설정
        	// value로 binding된 ds 사용
        	trace("rowcount = " + this.ds_search.getRowCount());
        	trace("rowindex = " + this.ds_search.getColIndex("SEARCH_TYPE"))
        	this.ds_search.setColumn(0,"SEARCH_TYPE","ALL");
        	trace("rowcount1 = " + this.ds_search.getRowCount());
        	trace("rowindex1 = " + this.ds_search.getColIndex("SEARCH_TYPE"))
        	// dept grd 호출
        	this.fn_searchDept();
        };

        // dept grd 호출 함수
        this.fn_searchDept = function() {

        	var strSvcId    = "searchDept";
        	var strSvcUrl   = "svc::selectAdProDept.do";
        	var inData      = "";
        	var outData     = "ds_dept = ds_dept";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }

        // 2. 조회 - 학과클릭 + 조회버튼
        // 1) dept_id에 따라 dept grd의 셀 클릭시 학과별 학생목록 나오게 - 안되는 이유?
        // 2) 조회버튼 클릭시 dept_id + search_type + search_word 세가지 조건 모두 만족하게

        // 2-2) 조회 - 학과클릭
        this.ds_dept_onrowposchanged = function(obj,e)
        {
        	// obj = 이벤트의 해당 데이터셋
        	// obj.rowposition vs e.row => 이벤트 자체가 행변경 이벤트이기 때문에 특정 행 정보 제공X
        	this.ds_search.setColumn(0,"DEPARTMENT_CODE", obj.getColumn(obj.rowposition,"DEPARTMENT_CODE"));

        	// 조회함수 호출
        	this.fn_searchList();
        };

        // 2-2) 조회 - 버튼클릭
        this.btn_Search_onclick = function(obj,e)
        {
        	// 조회함수 호출
        	this.fn_searchList();
        	trace("리스트 받아왔나?" + this.ds_list.getRowCount());
        };

        // list grd 호출 조회함수
        this.fn_searchList = function ()
        {
            var deptCode = this.ds_search.getColumn(0, "DEPARTMENT_CODE");
            trace("DEPARTMENT_CODE: " + deptCode);  // 전체학과 선택 시 값 확인

            if (deptCode == '' || deptCode == 'undefined' || deptCode == null) {
                alert("학과를 선택해주세요.");
                return;
            }
        	var strSvcId    = "searchList";
        	var strSvcUrl   = "svc::selectAdProList.do";
        	var inData      = "ds_search = ds_search";
        	var outData     = "ds_list = ds_list";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        // 3. 등록
        this.btn_Add_onclick = function(obj,e)
        {
        	/* 필요한 기능
        	 * 현재 클릭한 dept_code값 변수로 넘겨주기
        	 * 관리자 id / 현재날짜 받아와서 변수로 넘겨주기
        	 * popup 호출 - 비동기이므로 콜백 함수에서 호출
        	 * popup호출시 넘겨줄 값이 있는데, transaction이 종료된 후 그 값을 넘겨야한다
        	 * 따라서 transanction이 다 끝나고 받아온 값을 콜백에서 지정한 후
        	 * 콜백에서 마지막으로 popup 호출
        	 */

        	// 관리자 id, 현재날짜 받아오는 함수 호출
        	this.fn_getAdminInfo();

        };
        // 관리자 info 호출 함수
        this.fn_getAdminInfo = function ()
        {
        	var strSvcId    = "getAdminInfo";
        	var strSvcUrl   = "svc::getAdminInfo.do";
        	var inData      = "";
        	var outData     = "ds_admin = ds_admin";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack_admin";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };
        // 관리자 info 호출 콜백함수 - transaction 완료 후 팝업호출을 위해 콜백에 로직작성
        this.fnCallBack_admin = function (svcID, errCD, errMsg)
        {
            if (svcID == "getAdminInfo" && errCD == 0) {
                trace("서비스 ID: " + svcID + ", 에러 코드: " + errCD + ", 에러 메시지: " + errMsg);

                // 현재 dept grd에 선택한 row의 dept code 넘겨주기
        		// grd의 row하나를 컨트롤러에서 추가하였기에 rowposition이 안넘어가짐
        		// 따라서 수동으로 rowposition에 해당하는 값을 직접 넘겨야함
                var deptCode = this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPARTMENT_CODE");

                // 팝업으로 넘길 파라미터 (데이터셋 전체와 선택된 학과의 코드)
                var objParam = {
                    param1: this.ds_dept,   // 전체 데이터셋
                    param2: this.ds_admin,  // 관리자 정보 데이터셋 - 단일정보 안넘겨짐(why?)
                    deptCode: deptCode      // dept grd의 현재 rowposition의 dept code
                };

                trace("deptCode: " + deptCode);
                trace("param2: " + this.ds_admin.getColumn(0, "regDate"));
                trace("있냐? " + this.ds_admin.saveXML());

                // 팝업 창 경로 설정
                var surl = "MainBase::add_Professor_Popup.xfdl";

                // 데이터가 존재할 경우 팝업을 호출
                if (this.ds_admin.rowcount > 0) {
                    this.showPopup(objParam, surl);  // 데이터가 로드되었는지 확인 후 팝업 실행
                } else {
                    alert("데이터셋이 비어있습니다.");
                }
            }
        };
        // 팝업 호출 함수 - open이 아닌 childeframe 객체 생성
        // open() vs chdframe - 다양한 컴포넌트로 복잡한 팝업생성시 child
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
        	popup.style.set_overlaycolor("#6666664C");
        	popup.form.style.set_border("1 solid #4c5a6f");
        }

        // 4. 삭제는 상세글 or 전체리스트 중 정해서

        // 5. 상세보기 - list grd oncelldbclick event
        this.grd_List_oncelldblclick = function(obj,e)
        {
        	/* 필요한 기능
        	 * 더블클릭 시 pk인 교번을 기준으로 selet 수행
        	 * 받아온 값
        	 */

            var proId = obj.getBindDataset().getColumn(e.row, "PROFESSOR_ID");

            // 결과값을 콘솔에 출력
            trace("클릭한 row의 proID 값: " + proId);
        	 this.fn_searchProInfo(proId);



            // 팝업 창 경로 설정
            var surl = "MainBase::select_Professor_Popup.xfdl";

            // 팝업 호출 (데이터셋과 선택된 학과 코드 전달)
            this.showPopup(objParam, surl);

        };

        // 상세보기 호출 함수
        this.fn_searchProInfo = function(proId)
        {
        	var strSvcId    = "selectAdProInfo";
        	var strSvcUrl   = "svc::selectAdProInfo.do";
        	var inData      = "";
        	var outData     = "ds_pro=ds_list";
        	var strArg      = "PROFESSOR_ID="+proId;
        	var callBackFnc = "fnCallBack_ProInfo";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        // 상세보기 호출 콜백 함수 - transaction
        this.fnCallBack_ProInfo = function (svcID, errCD, errMsg)
        {
            if (svcID == "selectAdProInfo" && errCD == 0) {
                trace("서비스 ID: " + svcID + ", 에러 코드: " + errCD + ", 에러 메시지: " + errMsg);

        		var objParam = {
        		param1: this.ds_pro,
        		param2: this.ds_dept
        		};

                trace("데이터들어왔나?1: " + this.ds_pro.getRowCount());
                trace("데이터들어왔나?2: " + this.ds_dept.saveXML());

                // 팝업 창 경로 설정
                var surl = "MainBase::select_Professor_Popup.xfdl";

                // 데이터가 존재할 경우 팝업을 호출
                if (this.ds_pro.rowcount > 0) {
                    this.showPopup(objParam, surl);  // 데이터가 로드되었는지 확인 후 팝업 실행
                } else {
                    alert("데이터셋이 비어있습니다.");
                }
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.professor_onload,this);
            this.grd_List.addEventHandler("oncelldblclick",this.grd_List_oncelldblclick,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.ds_dept.addEventHandler("onrowposchanged",this.ds_dept_onrowposchanged,this);
        };
        this.loadIncludeScript("professor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
