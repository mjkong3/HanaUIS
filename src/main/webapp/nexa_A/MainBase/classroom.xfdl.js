(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("classroom");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("classroom_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASSROOM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSROOM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_PEOPLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("classtime_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"교시\" type=\"STRING\" size=\"256\"/><Column id=\"월요일\" type=\"STRING\" size=\"256\"/><Column id=\"화요일\" type=\"STRING\" size=\"256\"/><Column id=\"수요일\" type=\"STRING\" size=\"256\"/><Column id=\"목요일\" type=\"STRING\" size=\"256\"/><Column id=\"금요일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"교시\">1</Col></Row><Row><Col id=\"교시\">2</Col></Row><Row><Col id=\"교시\">3</Col></Row><Row><Col id=\"교시\">4</Col></Row><Row><Col id=\"교시\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("classroomrow_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASSROOM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("classcourse_ds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLASSROOM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROFESSOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSROOM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TIME_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROFESSOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_TIME_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_START\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_END\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("classweek_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Code\">1</Col><Col id=\"Data\">월요일</Col></Row><Row><Col id=\"Code\">2</Col><Col id=\"Data\">화요일</Col></Row><Row><Col id=\"Code\">3</Col><Col id=\"Data\">수요일</Col></Row><Row><Col id=\"Code\">4</Col><Col id=\"Data\">목요일</Col></Row><Row><Col id=\"Code\">5</Col><Col id=\"Data\">금요일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("classti_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">1교시</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"data\">2교시</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"data\">3교시</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"data\">4교시</Col><Col id=\"code\">4</Col></Row><Row><Col id=\"data\">5교시</Col><Col id=\"code\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("classcoursedelete_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_TIME_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_classyear", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"YEARN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insrtcourse", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_classsem", this);
            obj._setContents("<ColumnInfo><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTERN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("class_Grd","31","50","502","277",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("classroom_ds");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"142\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"강의실코드\"/><Cell col=\"1\" text=\"강의실\"/><Cell col=\"2\" text=\"정원\"/></Band><Band id=\"body\"><Cell text=\"bind:CLASSROOM_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CLASSROOM_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MAX_PEOPLE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("classtime_Grid","548","50","502","277",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("classtime_ds");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_selecttype("cell");
            obj.set_autosizebandtype("body");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"93\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"교시\"/><Cell col=\"1\" text=\"월요일\"/><Cell col=\"2\" text=\"화요일\"/><Cell col=\"3\" text=\"수요일\"/><Cell col=\"4\" text=\"목요일\"/><Cell col=\"5\" text=\"금요일\"/></Band><Band id=\"body\"><Cell text=\"bind:교시\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:월요일\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:화요일\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:수요일\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:목요일\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:금요일\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("classcourse_grd","31","406","1019","208",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("classcourse_ds");
            obj.set_selecttype("row");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"27\" band=\"left\"/><Column size=\"166\"/><Column size=\"144\"/><Column size=\"92\"/><Column size=\"78\"/><Column size=\"103\"/><Column size=\"71\"/><Column size=\"73\"/><Column size=\"125\"/><Column size=\"132\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"imagecontrol\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"강의실\"/><Cell col=\"2\" text=\"강의이름\"/><Cell col=\"3\" text=\"강의 요일\"/><Cell col=\"4\" text=\"강의 교시\"/><Cell col=\"5\" text=\"교수\"/><Cell col=\"6\" text=\"학기\"/><Cell col=\"7\" text=\"학점\"/><Cell col=\"8\" text=\"개강일\"/><Cell col=\"9\" text=\"종강일\"/></Band><Band id=\"body\"><Cell displaytype=\"imagecontrol\" edittype=\"none\" imagestretch=\"fixaspectratio\" text=\"expr:CHECK==1 ? &apos;image::수정.png&apos; : &apos;image::체크.png&apos;\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"classroom_ds\" combodatacol=\"CLASSROOM_NAME\" combocodecol=\"CLASSROOM_ID\" text=\"bind:CLASSROOM_ID\" combodisplaynulltext=\"bind:CLASSROOM_ID\"/><Cell col=\"2\" text=\"bind:CLASS_NAME\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"classweek_ds\" combocodecol=\"Code\" combodatacol=\"Data\" comboautoselect=\"false\" text=\"bind:CLASS_WEEK\"/><Cell col=\"4\" text=\"bind:TIME_NUMBER\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"classti_ds\" combodatacol=\"data\" combocodecol=\"code\"/><Cell col=\"5\" text=\"bind:PROFESSOR_NAME\"/><Cell col=\"6\" text=\"bind:SEMESTER\"/><Cell col=\"7\" text=\"bind:CLASS_GRADE\"/><Cell col=\"8\" text=\"bind:CLASS_START\" displaytype=\"calendarcontrol\"/><Cell col=\"9\" text=\"bind:CLASS_END\" displaytype=\"calendarcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("reset_btn","874","364","51","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("리셋");
            this.addChild(obj.name, obj);

            obj = new Button("insert_btn","999","364","51","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("apply_btn","935","364","51","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_copy","813","363","47","38",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","750","364","46","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("제거");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","151","380","185","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","341","379","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("검색");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_course","31","380","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_course_innerdataset = new nexacro.NormalDataset("cmb_course_innerdataset", obj);
            cmb_course_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">CLASSROOM_NAME + CLASSROOM_ID + CLASS_NAME  + PROFESSOR_NAME</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">강의실</Col><Col id=\"codecolumn\">CLASSROOM_NAME + CLASSROOM_ID</Col></Row><Row><Col id=\"datacolumn\">강의 이름</Col><Col id=\"codecolumn\">CLASS_NAME</Col></Row><Row><Col id=\"datacolumn\">교수</Col><Col id=\"codecolumn\">PROFESSOR_NAME</Col></Row></Rows>");
            obj.set_innerdataset(cmb_course_innerdataset);
            obj.set_text("전체");
            obj.set_value("CLASSROOM_NAME + CLASSROOM_ID + CLASS_NAME  + PROFESSOR_NAME");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_se","140","20","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_classsem");
            obj.set_codecolumn("SEMESTER");
            obj.set_datacolumn("SEMESTERN");
            obj.set_text("1학기");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year","31","20","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_classyear");
            obj.set_codecolumn("YEAR");
            obj.set_datacolumn("YEARN");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popclassplus","463","17","69","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("강의실 추가");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_year","value","ds_insrtcourse","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmb_se","value","ds_insrtcourse","SEMESTER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("classroom.xfdl","MainBase::autofilter.xjs");
        this.registerScript("classroom.xfdl", function() {

        this.executeIncludeScript("MainBase::autofilter.xjs"); /*include "MainBase::autofilter.xjs"*/;
        this.classroom_onload = function(obj,e)
        {
        	// 강의실 데이터 불러오기
        	this.fn_classroom();

        	var objConfig  = {
        						objGrid		: this.classcourse_grd,
        						objCombo	: this.cmb_course,
        						objEdit		: this.edt_search
        					 }
        	this.fnInitForm(obj, objConfig);
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

        	switch(svcID)
        	{
        		case "SelectAdminClasscourse":
        			//console.log(this.classcourse_ds.saveXML());
        			this.topnull();
        			//this.classcourse_ds.filter("");
        			this.classroom_ds_onrowposchanged();
        			break;
        		case "SelectAdminClassroom":
        			this.cmb_year.set_index(0);
        			this.cmb_se.set_index(0);

        			// 강의 목록 불러오기
        			this.fn_classcourse();
        			break;
        		case "saveAdminClasscourse":
        			this.fn_classcourse();
        			break;
        		default:
        	}
        };
        // 삭제버튼 클릭 카운트
        var countdelete = 0;

        // 엔터키 검색
        this.classroom_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btn_search.click();
        	}
        };

        // 데이터 null값 상단 배치
        this.topnull = function()
        {
        	if(this.classcourse_ds.getCaseCount("CLASSROOM_ID == undefined")){
        	this.classcourse_ds.set_keystring("S:-CLASSROOM_ID");
        	}
        	else if(this.classcourse_ds.getCaseCount("CLASS_WEEK == undefined")){
        		this.classcourse_ds.set_keystring("S:-CLASS_WEEK");
        	}
        	else if(this.classcourse_ds.getCaseCount("TIME_NUMBER == undefined")){
        		this.classcourse_ds.set_keystring("S:-TIME_NUMBER");
        	}
        }
        //검색 필터링
        this.searchfilter = function()
        {
        	if(this.edt_search.value == null || this.edt_search.value == 'undefined' || this.edt_search.value == ''){
         		this.classcourse_ds.set_filterstr();
         		this.classcourse_ds.filter("SEMESTER == '"+ this.cmb_se.value +"'");
        	} else{
        		this.classcourse_ds.filter("String("+ this.cmb_course.value +").indexOf('"+this.edt_search.value+"') >= 0 && SEMESTER == '"+ this.cmb_se.value +"' || CLASSROOM_ID == null || CLASS_WEEK == null || TIME_NUMBER == null");
        	}
        }
        //초기 불러올 데이터들 : 강의실, 년도, 학기
        this.fn_classroom = function(){
        	var strSvcId    = "SelectAdminClassroom";
        	var strSvcUrl   = "svc::SelectAdminClassroom.do";
        	var inData      = "";
        	var outData     = "classroom_ds=classroom_ds ds_classyear=ds_classyear ds_classsem=ds_classsem";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        // 년도, 학기에 따른 강의시간 데이터
        this.fn_classcourse = function(){
        	var strSvcId    = "SelectAdminClasscourse";
        	var strSvcUrl   = "svc::SelectAdminClasscourse.do";
        	var inData      = "ds_insrtcourse=ds_insrtcourse";
        	var outData     = "classcourse_ds = classcourse_ds";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 시간표 부분
        this.classroom_ds_onrowposchanged = function(obj,e)
        {
        	// 현재 선택된 강의실 ID 가져오기
        	var CLASSROOM_ID = this.classroom_ds.getColumn(this.classroom_ds.rowposition, "CLASSROOM_ID");
        	var grade = this.cmb_se.value;

        	// 요일을 나타내는 숫자를 요일 컬럼 ID로 변환하는 함수
        	function getDayColumnId(dayNumber) {
        		switch(dayNumber) {
        			case '1': return "월요일";
        			case '2': return "화요일";
        			case '3': return "수요일";
        			case '4': return "목요일";
        			case '5': return "금요일";
        			default: return null;  // 예외 처리
        		}
        	}

        	// classtime_ds 초기화
        	var rowCount = this.classtime_ds.getRowCount();  // classtime_ds의 총 행 수

        	for (var i = 0; i < rowCount; i++) {
        		// 각 요일의 값을 빈 문자열로 초기화
        		this.classtime_ds.setColumn(i, "월요일", "");
        		this.classtime_ds.setColumn(i, "화요일", "");
        		this.classtime_ds.setColumn(i, "수요일", "");
        		this.classtime_ds.setColumn(i, "목요일", "");
        		this.classtime_ds.setColumn(i, "금요일", "");
        	}

        	// 관련 강의실 필터링
        	var classroom_code = this.classroom_ds.getColumn(this.classroom_ds.rowposition, "CLASSROOM_ID");
        	this.classcourse_ds.filter("CLASSROOM_ID == '" + classroom_code + "' && SEMESTER == '"+grade+"'");

        	// classcourse_ds의 첫 번째 행의 CLASSROOM_ID 출력
        	console.log(this.classcourse_ds.getColumn(0, "CLASSROOM_ID"));

        	// classcourse_ds의 모든 행을 반복
        	var courseRowCount = this.classcourse_ds.getRowCount();  // classcourse_ds의 총 행 수
        	for (var i = 0; i < courseRowCount; i++) {
        		// 각 행의 TIME_NUMBER, CLASS_WEEK (숫자), CLASS_NAME 값 가져오기
        		var rowIndex = this.classcourse_ds.getColumn(i, "TIME_NUMBER");  // 교시 번호
        		var weekNumber = this.classcourse_ds.getColumn(i, "CLASS_WEEK");  // 요일 숫자
        		var columnId = getDayColumnId(weekNumber);  // 숫자를 요일 컬럼 ID로 변환
        		var className = this.classcourse_ds.getColumn(i, "CLASS_NAME");  // 수업 이름
        		var professorName = this.classcourse_ds.getColumn(i, "PROFESSOR_NAME");  // 교수 이름
        		var newValue = className + "\n" + professorName;  // 수업과 교수 이름 조합
        		if(rowIndex == null || weekNumber == null){

        		}else{
        			// classtime_ds에 값 업데이트
        			this.classtime_ds.setColumn(rowIndex - 1, columnId, newValue);
        		}
        	}

        	// classcourse_ds에서 필터링
        	this.searchfilter();


        };

        //리셋 버튼
        this.reset_btn_onclick = function(obj,e)
        {
        	this.classcourse_ds.reset();

        	// 데이터 null값 상단 배치
        	this.topnull();
        };

        //저장 버튼
        this.apply_btn_onclick = function(obj,e)
        {
        	// 유효성 검사
         	var count = 0;
        	var count2 = 0;
        //
        	this.classcourse_ds.filter("");
         	for (var i = 0; i < this.classcourse_ds.rowcount; i++) {

         		var classroomId = this.classcourse_ds.getColumn(i, "CLASSROOM_ID");
         		var classWeek = this.classcourse_ds.getColumn(i, "CLASS_WEEK");
         		var timeNumber = this.classcourse_ds.getColumn(i, "TIME_NUMBER");
        		var semester = this.classcourse_ds.getColumn(i,"SEMESTER");

         		var query = "CLASSROOM_ID == '" + classroomId + "'&& CLASS_WEEK == '" + classWeek + "'&& TIME_NUMBER == '" + timeNumber + "'&& SEMESTER == '"+ semester +"'";

        		var caseCount = this.classcourse_ds.getCaseCount(query);
        		if(caseCount > 1){
        			count++;
        		}

         	}
        	for (var i = 0; i < this.classcourse_ds.rowcount; i++) {
        		var prossId = this.classcourse_ds.getColumn(i, "PROFESSOR_ID");
        		var classWeek = this.classcourse_ds.getColumn(i, "CLASS_WEEK");
         		var timeNumber = this.classcourse_ds.getColumn(i, "TIME_NUMBER");
        		var semester = this.classcourse_ds.getColumn(i,"SEMESTER");

        		var query = "PROFESSOR_ID == '" + prossId + "'&& CLASS_WEEK == '" + classWeek + "'&& TIME_NUMBER == '" + timeNumber + "'&& SEMESTER == '"+ semester +"'";


        		var caseCount = this.classcourse_ds.getCaseCount(query);
        		if(caseCount > 1){
        			count2++;
        			trace(this.classcourse_ds.getColumn(i, "PROFESSOR_NAME"));
        			trace(this.classcourse_ds.getColumn(i, "CLASS_NAME"));
        		}

        	}

        	if(this.classcourse_ds.getCaseCount("CLASSROOM_ID == "+ null +" || TIME_NUMBER == "+ null +" || CLASS_WEEK" + null)){
        		this.alert("값이 없는 경우가 있습니다. 다시 확인해 주세요.");
        	}
        	else if(count > 0){
        		this.alert("강의 일정 중복이 있습니다. 다시 확인해 주세요.");

        	}
        	else if(count2 > 0){
        		this.alert("교사 일정 중복이 있습니다. 다시 확인해 주세요.");
        	} else{
        		this.classcourse_ds.filter("CHECK == 1")

        		for(var i=0; i < this.classcourse_ds.rowcount; i++){
        			this.classcourse_ds.setColumn(i, "CHECK", 0);
        		}
        		this.classcourse_ds.applyChange();
        		this.classroom_ds_onrowposchanged();

        		countdelete=0;

        	}
        	// classcourse_ds에서 필터링
        	this.searchfilter();

        };

        //등록 버튼
        this.insert_btn_onclick = function(obj,e)
        {
        	if(this.classcourse_ds.getCaseCount("CHECK == 1") > 0){
        		this.alert("저장안된 부분이 있습니다. 저장해 주세요.");
        	}
        	else if(countdelete > 0){
        		this.alert("삭제되었지만 저장안된 부분이 있습니다. 저장해 주세요.")
        	} else{
        			if(confirm("등록하시겠습니까?")){
        			console.log(this.classcourse_ds.getColumn());
        			this.fn_classcoursesave();
        			this.fn_classcouserdelete();
        		}
        	}
        };

        // 등록 시 삭제 트렌젝션
        this.fn_classcouserdelete = function(){
        	var strSvcId    = "deleteAdminClasscourse";
        	var strSvcUrl   = "svc::deleteAdminClasscourse.do";
        	var inData      = "classcoursedelete_ds = classcoursedelete_ds";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }

        // 등록 시 저장 트랜젝션
        this.fn_classcoursesave = function(){
        	var strSvcId    = "saveAdminClasscourse";
        	var strSvcUrl   = "svc::saveAdminClasscourse.do";
        	var inData      = "classcourse_ds = classcourse_ds";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }

        // 추가버튼
        this.btn_copy_onclick = function(obj,e)
        {
        	// 그리드와 연결된 데이터셋에서 선택된 행 번호 가져오기
            var selectedRow = this.classcourse_ds.rowposition;

            // 선택된 행이 없을 경우 처리
            if (selectedRow < 0) {
                alert("행이 선택되지 않았습니다.");
                return;
            }

            // 새로운 행 추가
            var newRow = this.classcourse_ds.insertRow(selectedRow+1);
        	var sCol = "CLASSROOM_ID=CLASSROOM_ID, CLASS_NAME=CLASS_NAME, PROFESSOR_ID=PROFESSOR_ID, CLASSROOM_NAME=CLASSROOM_NAME, DEPARTMENT_CODE=DEPARTMENT_CODE, CLASS_CODE=CLASS_CODE, PROFESSOR_NAME=PROFESSOR_NAME, SEMESTER=SEMESTER, CLASS_GRADE=CLASS_GRADE";

            // 선택된 행의 데이터를 새로운 행으로 복사
            this.classcourse_ds.copyRow(newRow, this.classcourse_ds, selectedRow, sCol);
            this.classcourse_ds.setColumn(newRow, "CHECK", 1);  // 해당 행의 check 컬럼을 1로 설정
        };

        // 삭제버튼
        this.btn_delete_onclick = function(obj,e)
        {
        	this.classcoursedelete_ds.addRow();

        	var count = this.classcoursedelete_ds.rowcount;

        	var rowPos = this.classcourse_ds.rowposition;

        	// classcourse_ds의 rowposition이 유효한지 확인
        	if (rowPos >= 0) {

        		this.classcoursedelete_ds.copyRow(count - 1, this.classcourse_ds, rowPos);

        		// 복사 후 classcourse_ds에서 해당 행 삭제
        		this.classcourse_ds.deleteRow(rowPos);

        		// 복사된 데이터 확인
        		var classTimeCode = this.classcoursedelete_ds.getColumn(count - 1, "CLASS_TIME_CODE");

        		//삭제 카운트 증가 : 저장 유효성 검사용
        		countdelete++;
        	} else {
        		this.alert("유효한 행이 선택되지 않았습니다.");
        	}

        };

        //검색 버튼 ---> 제거예정
        this.btn_search_onclick = function(obj,e)
        {
        	this.searchfilter();
        	//trace(this.cmb_year.value);

        	// 데이터 null값 상단 배치
        	this.topnull();
        };


        // 변경 선택시 체크 바꾸기
        this.classcourse_grd_ondropdown = function(obj,e)
        {
        	var row = e.row;  // 클릭한 셀의 위치
            this.classcourse_ds.setColumn(row, "CHECK", 1);  // 해당 행의 check 컬럼을 1로 설정

        };
        // 학기 바꾸기
        this.cmb_se_onitemchanged = function(obj,e)
        {
        	this.fn_classcourse();
        };
        // 년도 바꾸기
        this.cmb_year_onitemchanged = function(obj,e)
        {
        	this.fn_classcourse();
        };

        this.edt_search_onchanged = function(obj,e)
        {
        	//this.searchfilter();
        };

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
           trace(strPopupID); // popwork
           trace(strReturn); // saveAdStudent
            if(strPopupID == "popupWork"){
        		this.classroom_onload();
        		return;
            }
        };
        this.btn_popclassplus_onclick = function(obj,e)
        {
        	// 팝업으로 넘길 파라미터 (데이터셋 전체와 선택된 학과의 코드)
            var objParam = {
        		param1 : this.classroom_ds
            };

            // 팝업 창 경로 설정
            var surl = "MainBase::classroomadd.xfdl";

            // 팝업 호출 (데이터셋과 선택된 학과 코드 전달)
            this.showPopup(objParam, surl);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.classroom_onload,this);
            this.addEventHandler("onkeyup",this.classroom_onkeyup,this);
            this.classcourse_grd.addEventHandler("ondropdown",this.classcourse_grd_ondropdown,this);
            this.reset_btn.addEventHandler("onclick",this.reset_btn_onclick,this);
            this.insert_btn.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.apply_btn.addEventHandler("onclick",this.apply_btn_onclick,this);
            this.btn_copy.addEventHandler("onclick",this.btn_copy_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.edt_search.addEventHandler("onchanged",this.edt_search_onchanged,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.cmb_se.addEventHandler("onitemchanged",this.cmb_se_onitemchanged,this);
            this.cmb_year.addEventHandler("onitemchanged",this.cmb_year_onitemchanged,this);
            this.btn_popclassplus.addEventHandler("onclick",this.btn_popclassplus_onclick,this);
            this.classroom_ds.addEventHandler("onrowposchanged",this.classroom_ds_onrowposchanged,this);
            this.classcourse_ds.addEventHandler("cancolumnchange",this.classcourse_ds_cancolumnchange,this);
        };
        this.loadIncludeScript("classroom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
