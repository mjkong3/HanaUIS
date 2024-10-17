(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("score_list");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_START\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_scoreList", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLE_TEST\" type=\"INT\" size=\"256\"/><Column id=\"FINAL_TEST\" type=\"INT\" size=\"256\"/><Column id=\"REPORT\" type=\"INT\" size=\"256\"/><Column id=\"SCORE\" type=\"INT\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"INT\" size=\"256\"/><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_USR\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCHKEYWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchClass", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchSttudent", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_updateScore", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_semester", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cmb_year","460","30","167","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("YEAR");
            obj.set_datacolumn("DATA");
            obj.set_text("년도를 선택해주세요");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_class","460","60","605","160",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_class");
            obj.set_autofittype("col");
            obj.set_cssclass("ATEAM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"71\"/><Column size=\"161\"/><Column size=\"145\"/><Column size=\"64\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"강의코드\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"2\" text=\"강의명\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"3\" text=\"담당교수\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"4\" text=\"년도\"/><Cell col=\"5\" text=\"학기\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CLASS_CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CLASS_NAME\"/><Cell col=\"3\" text=\"bind:NAME\"/><Cell col=\"4\" text=\"bind:CLASS_START\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"5\" text=\"bind:SEMESTER\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dept","50","60","400","160",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_dept");
            obj.set_cssclass("ATEAM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"133\"/><Column size=\"265\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드번호\"/><Cell col=\"1\" text=\"학과명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPARTMENT_CODE\"/><Cell col=\"1\" text=\"bind:DEPARTMENT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_searchType","50","230","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_searchType_innerdataset = new nexacro.NormalDataset("cmb_searchType_innerdataset", obj);
            cmb_searchType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">STUDENT_ID</Col><Col id=\"datacolumn\">학번</Col></Row><Row><Col id=\"codecolumn\">NAME</Col><Col id=\"datacolumn\">이름</Col></Row></Rows>");
            obj.set_innerdataset(cmb_searchType_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_searchKeyword","154","230","171","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchStd","332","230","63","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_scoreList","50","260","1015","290",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_scoreList");
            obj.set_autofittype("col");
            obj.set_cssclass("ATEAM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"수정\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"중간\"/><Cell col=\"4\" text=\"기말\"/><Cell col=\"5\" text=\"과제\"/><Cell col=\"6\" text=\"총점\"/><Cell col=\"7\" text=\"등급\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHECK\"/><Cell col=\"1\" text=\"bind:STUDENT_ID\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:MIDDLE_TEST\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:FINAL_TEST\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:REPORT\" edittype=\"normal\"/><Cell col=\"6\" expr=\"nexacro.round((MIDDLE_TEST / 100.0 * 40) + (FINAL_TEST / 100.0 * 40) + (REPORT / 100.0 * 20),0)\"/><Cell col=\"7\" expr=\"nexacro.round((MIDDLE_TEST / 100.0 * 40) + (FINAL_TEST / 100.0 * 40) + (REPORT / 100.0 * 20),0)&gt;= 90 ? &apos;A&apos; : nexacro.round((MIDDLE_TEST / 100.0 * 40) + (FINAL_TEST / 100.0 * 40) + (REPORT / 100.0 * 20),0)&gt;= 80 ? &apos;B&apos; : nexacro.round((MIDDLE_TEST / 100.0 * 40) + (FINAL_TEST / 100.0 * 40) + (REPORT / 100.0 * 20),0)&gt;= 70 ? &apos;C&apos; : nexacro.round((MIDDLE_TEST / 100.0 * 40) + (FINAL_TEST / 100.0 * 40) + (REPORT / 100.0 * 20),0)&gt;= 60 ? &apos;D&apos; : &apos;F&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_resetStd","405","230","63","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("전체보기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update","1014","230","51","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_semester","637","30","155","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_semester_innerdataset = new nexacro.NormalDataset("cmb_semester_innerdataset", obj);
            cmb_semester_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">학기를 선택하세요.</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(cmb_semester_innerdataset);
            obj.set_text("학기를 선택하세요.");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stt_board","49","10","191","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("성적 관리");
            obj.set_font("30px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_searchType","value","ds_search","SEARCHTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_searchKeyword","value","ds_search","SEARCHKEYWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("score_list.xfdl", function() {
        /* 온로드*/
        this.score_list_onload = function(obj,e)
        {
        	this.fn_searchDept(); // 학과코드 불러오기



        	var currentYear = new Date().getFullYear(); // 해당년도 가져오기
            // ds_year 초기화
            this.ds_year.clearData();
        	var nRow = this.ds_year.addRow();
        	this.ds_year.setColumn(0, "YEAR", "ALL");
            this.ds_year.setColumn(0, "DATA", "연도를선택해주세요");
            // 현재 연도와 이전 4개의 연도 추가
            for (var i = 1; i < 6; i++) {
                var year = currentYear + 1 - i;
                var nRow = this.ds_year.addRow();
                this.ds_year.setColumn(nRow, "YEAR", year);  // 데이터값 (검색에 사용될 값)
                this.ds_year.setColumn(nRow, "DATA", year);  // 콤보박스에 표시될 값
            }
        	trace(this.ds_year.getColumn(0,"DATA"))
        	var nYear = this.ds_year.getColumn(0,"YEAR");
        	this.cmb_year.set_value(nYear);  //  콤보박스 기본값을 해당년도로 지정
        	this.cmb_searchType.set_value(0); // 콤보박스 기본값을 0번컬럼으로 지정
        };




        this.ds_dept_onrowposchanged = function(obj,e) // 학과코드 그리드에 컬럼 클릭시 이벤트 발동
        {
        	var row = this.ds_dept.rowposition;
        	trace(row);	var deptcd = this.ds_dept.getColumn(row, "DEPARTMENT_CODE");

        	this.ds_searchClass.setColumn(0,"DEPARTMENT_CODE",deptcd);
        	trace("로우값은 ? " + this.ds_searchClass.getColumn(0, "DEPARTMENT_CODE"));


        	this.fn_searchClass();
        }; // 원하는 컬럼클릭시 해당 컬럼을 포지션으로 찾고 그 값에 해당하는 모든 수업들을 찾아서 ds_class에 넣어주는 역할

        this.grd_class_oncellclick = function(obj,e)
        {



        		var row = this.ds_class.rowposition;
        		var yearsm = this.ds_class.getColumn(row,"CLASS_START");;
        		var semesterm = this.ds_class.getColumn(row,"SEMESTER");;
        		var clascd = this.ds_class.getColumn(row,"CLASS_CODE");
        		// 년도 학기 강의코드 선언 (트랜젝션해서 가져온ds_class 내부 값들에서 빼옴)


        		this.ds_searchSttudent.setColumn(0,"YEAR",yearsm);
        		this.ds_searchSttudent.setColumn(0,"SEMESTER",semesterm);
        		this.ds_searchSttudent.setColumn(0,"CLASS_CODE",clascd);
        		// 위에서 선언한 친구들을 ds_searchStudent로 감싸서 트랜젝션 실행


        		this.fn_searchStudent();   // 트랜젝션 실행 하여

        };


        this.btn_searchStd_onclick = function (obj, e) {
            // 검색 타입과 키워드 가져오기
            var searchType = this.ds_search.getColumn(0, "SEARCHTYPE"); // 선택된 검색 조건
            var searchValue = this.ds_search.getColumn(0, "SEARCHKEYWORD"); // 검색 키워드

            // 데이터셋 필터링
            var filterString = "";
            var message = ""; // 알림 메시지 초기화

            if (searchValue) {
                if (searchType === "STUDENT_ID") {
                    filterString += "STUDENT_ID == '" + searchValue + "'";
                } else if (searchType === "NAME") {
                    filterString += "NAME.indexOf('" + searchValue + "') >= 0";
                } else {
        			this.alert("학번 또는 이름을 선택해 주세요");
        		}

                // 필터링 적용
                this.ds_scoreList.filter(filterString);

                // 필터링 결과 확인
                if (this.ds_scoreList.getRowCount() === 0) {
                    message = "해당 조건에 맞는 데이터가 없습니다."; // 데이터 없음 메시지
                    this.ds_scoreList.filter(""); // 필터 제거하여 전체 데이터셋 표시
                }
            } else {
                message = "검색어를 입력해주세요."; // 검색어 없음 메시지
                this.ds_scoreList.filter(""); // 필터 제거하여 전체 데이터셋 표시
            }

            // 알림 메시지 표시
            if (message) {
                this.alert(message);
            }
        };



        this.btn_resetStd_onclick = function (obj, e) {
            // 전체 데이터셋을 출력
            this.ds_scoreList.filter(""); // 필터 제거하여 전체 데이터셋 표시
            this.alert("전체 데이터가 출력되었습니다."); // 알림 메시지 표시
        };


        this.grd_scoreList_oninput = function(obj, e)
        {
            var row = this.ds_scoreList.rowposition;

            this.ds_scoreList.setColumn(row, "CHECK", "1");
        }; // 성적 기입이 시작될때 이벤트 발생



        this.btn_update_onclick = function(obj,e)
        {
        	this.updateCheck();

        	var checkedCount = this.ds_updateScore.rowcount;
        	if(checkedCount>0){
        		if(confirm("기입된 성적을 수정하시겠습니까?")){
        			this.fn_update();
        		}
        	}
        	else{
        		alert("수정된 항목이 존재하지 않습니다.");
        	}
        };

        // 수정목록 필터링
        this.updateCheck = function() {
            this.ds_updateScore.clearData();
            trace("필터링 전 " + this.ds_scoreList.getRowCount());
            this.ds_scoreList.filter("CHECK==1");
            trace("필터링 후 " + this.ds_scoreList.getRowCount());

            var nRow = this.ds_scoreList.getRowCount();
            var gdsAd = nexacro.getApplication();
            var adCode = gdsAd.gds_adminInfo.getColumn(0, "ADMIN_CODE");
            trace("ad코드는? " + adCode);

            // 유효성 검사 추가
        	for (var i = 0; i < nRow; i++) {
        		var inputValue = this.ds_scoreList.getColumn(i, "MIDDLE_TEST"); // MIDDLE_TEST 값 가져오기
        		var inputValue2 = this.ds_scoreList.getColumn(i, "FINAL_TEST"); // FINAL_TEST 값 가져오기
        		var inputValue3 = this.ds_scoreList.getColumn(i, "REPORT"); // REPORT 값 가져오기

        		// 숫자만 입력 가능하도록 체크 (각 열에 대해)
        		if (!/^\d*$/.test(inputValue) || !/^\d*$/.test(inputValue2) || !/^\d*$/.test(inputValue3)) {
        			alert("숫자만 입력 가능합니다. 행: " + (i + 1));
        			this.ds_scoreList.filter(""); // 필터 초기화
        			return; // 유효성 검사 실패 시 함수 종료
        		}

        		// 100 미만의 숫자만 허용 (각 열에 대해)
        		if (parseInt(inputValue, 10) >= 100 || parseInt(inputValue2, 10) >= 100 || parseInt(inputValue3, 10) >= 100) {
        			alert("100 미만의 숫자만 입력 가능합니다. 행: " + (i + 1));
        			this.ds_scoreList.filter(""); // 필터 초기화
        			return; // 유효성 검사 실패 시 함수 종료
        		}

        		// 모든 행의 작성자 설정
        		this.ds_scoreList.setColumn(i, "UPD_USR", adCode);
        		trace("작성자?? " + this.ds_scoreList.getColumn(i, "UPD_USR"));
        	}

            this.ds_updateScore.copyData(this.ds_scoreList, true);
            this.ds_scoreList.filter(""); // 필터 초기화
            this.ds_scoreList.set_enableevent(true);
        };

        this.cmb_year_onitemchanged = function(obj,e)
        {
            if(this.cmb_year.value != "ALL" && this.cmb_semester.value != "0"){
                trace(this.cmb_year.value);
                trace(this.cmb_semester.value);
                this.ds_class.filter("CLASS_START == '" + this.cmb_year.value + "' && SEMESTER == '" + this.cmb_semester.value + "'");
            }
            else if(this.cmb_year.value == "ALL" && this.cmb_semester.value != "0"){
                trace(this.cmb_year.value);
                trace(this.cmb_semester.value);
                this.ds_class.filter("SEMESTER == '" + this.cmb_semester.value + "'");
            }
            else if(this.cmb_year.value != "ALL" && this.cmb_semester.value == "0"){
                trace(this.cmb_year.value);
                trace(this.cmb_semester.value);
                this.ds_class.filter("CLASS_START == '" + this.cmb_year.value + "'");
            } else {
                trace(this.cmb_year.value);
                trace(this.cmb_semester.value);
                this.alert("연도 및 학기를 선택해주세요");
            }
        };

        this.cmb_semester_onitemchanged = function(obj,e)
        {
        	    if(this.cmb_year.value != "ALL" && this.cmb_semester.value != "0"){
                trace(this.cmb_year.value);
                trace(this.cmb_semester.value);
                this.ds_class.filter("CLASS_START == '" + this.cmb_year.value + "' && SEMESTER == '" + this.cmb_semester.value + "'");
            }
            else if(this.cmb_year.value == "ALL" && this.cmb_semester.value != "0"){
                trace(this.cmb_year.value);
                trace(this.cmb_semester.value);
                this.ds_class.filter("SEMESTER == '" + this.cmb_semester.value + "'");
            }
            else if(this.cmb_year.value != "ALL" && this.cmb_semester.value == "0"){
                trace(this.cmb_year.value);
                trace(this.cmb_semester.value);
                this.ds_class.filter("CLASS_START == '" + this.cmb_year.value + "'");
            } else {
                trace(this.cmb_year.value);
                trace(this.cmb_semester.value);
                this.alert("연도 및 학기를 선택해주세요");
            }
        };






        this.fn_update = function() {

        	var strSvcId    = "updateScStudent";
        	var strSvcUrl   = "svc::updateScStudent.do";
        	var inData      = "ds_updateScore = ds_updateScore";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack_update";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);


        }

        this.fnCallBack_update = function (svcID, errCD, errMsg)
        {
        	if(svcID == "updateScStudent" && errCD == 0){
        		trace("잘 받아왔나?");
        		this.fn_searchStudent();
        	} else if (errCD == -1){
        		alert(errMsg);
        	}
        };




        this.fn_searchStudent = function() {

        	var strSvcId    = "selectScStudent";
        	var strSvcUrl   = "svc::selectScStudent.do";
        	var inData      = "ds_searchSttudent=ds_searchSttudent";
        	var outData     = "ds_scoreList = ds_scoreList";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack_deptInfo";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }

        this.fn_searchDept = function() {

        	var strSvcId    = "searchScDept";
        	var strSvcUrl   = "svc::selectScDept.do";
        	var inData      = "";
        	var outData     = "ds_dept = ds_dept";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack_deptInfo";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }

        this.fn_searchClass = function() {


        	var strSvcId    = "searchScClass";
        	var strSvcUrl   = "svc::searchScClass.do";
        	var inData      = "ds_searchClass = ds_searchClass";
        	var outData     = "ds_class = ds_class";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack_deptInfo";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.score_list_onload,this);
            this.cmb_year.addEventHandler("onitemchanged",this.cmb_year_onitemchanged,this);
            this.grd_class.addEventHandler("oncellclick",this.grd_class_oncellclick,this);
            this.grd_dept.addEventHandler("oncellclick",this.ds_dept_onrowposchanged,this);
            this.cmb_searchType.addEventHandler("onitemchanged",this.cmb_searchType_onitemchanged,this);
            this.btn_searchStd.addEventHandler("onclick",this.btn_searchStd_onclick,this);
            this.grd_scoreList.addEventHandler("oninput",this.grd_scoreList_oninput,this);
            this.btn_resetStd.addEventHandler("onclick",this.btn_resetStd_onclick,this);
            this.btn_update.addEventHandler("onclick",this.btn_update_onclick,this);
            this.cmb_semester.addEventHandler("onitemchanged",this.cmb_semester_onitemchanged,this);
            this.stt_board.addEventHandler("onclick",this.stt_board_onclick,this);
            this.ds_dept.addEventHandler("onrowposchanged",this.ds_dept_onrowposchanged,this);
        };
        this.loadIncludeScript("score_list.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
