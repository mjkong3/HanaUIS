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
            obj._setContents("<ColumnInfo><Column id=\"교시\" type=\"STRING\" size=\"256\"/><Column id=\"월요일\" type=\"STRING\" size=\"256\"/><Column id=\"화요일\" type=\"STRING\" size=\"256\"/><Column id=\"수요일\" type=\"STRING\" size=\"256\"/><Column id=\"목요일\" type=\"STRING\" size=\"256\"/><Column id=\"금요일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("classroomrow_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASSROOM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("classcourse_ds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLASSROOM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROFESSOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSROOM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TIME_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("classweek_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Code\">1</Col><Col id=\"Data\">월요일</Col></Row><Row><Col id=\"Code\">2</Col><Col id=\"Data\">화요일</Col></Row><Row><Col id=\"Code\">3</Col><Col id=\"Data\">수요일</Col></Row><Row><Col id=\"Code\">4</Col><Col id=\"Data\">목요일</Col></Row><Row><Col id=\"Code\">5</Col><Col id=\"Data\">금요일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("classti_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">1교시</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"data\">2교시</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"data\">3교시</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"data\">4교시</Col><Col id=\"code\">4</Col></Row><Row><Col id=\"data\">5교시</Col><Col id=\"code\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_classtimeid", this);
            obj._setContents("<ColumnInfo><Column id=\"교시\" type=\"STRING\" size=\"256\"/><Column id=\"월요일\" type=\"STRING\" size=\"256\"/><Column id=\"화요일\" type=\"STRING\" size=\"256\"/><Column id=\"수요일\" type=\"STRING\" size=\"256\"/><Column id=\"목요일\" type=\"STRING\" size=\"256\"/><Column id=\"금요일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("class_Grd","31","50","502","277",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("classroom_ds");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"142\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"강의실코드\"/><Cell col=\"1\" text=\"강의실\"/><Cell col=\"2\" text=\"정원\"/></Band><Band id=\"body\"><Cell text=\"bind:CLASSROOM_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CLASSROOM_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MAX_PEOPLE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("classtime_Grid","543","50","502","277",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("classtime_ds");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"93\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"교시\"/><Cell col=\"1\" text=\"월요일\"/><Cell col=\"2\" text=\"화요일\"/><Cell col=\"3\" text=\"수요일\"/><Cell col=\"4\" text=\"목요일\"/><Cell col=\"5\" text=\"금요일\"/></Band><Band id=\"body\"><Cell text=\"bind:교시\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:월요일\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:화요일\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:수요일\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:목요일\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:금요일\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("classcourse_grd","31","386","1019","208",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("classcourse_ds");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"166\"/><Column size=\"144\"/><Column size=\"92\"/><Column size=\"78\"/><Column size=\"103\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"강의실\"/><Cell col=\"2\" text=\"강의이름\"/><Cell col=\"3\" text=\"강의 요일\"/><Cell col=\"4\" text=\"강의 교시\"/><Cell col=\"5\" text=\"교사\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"classroom_ds\" combodatacol=\"CLASSROOM_NAME\" combocodecol=\"CLASSROOM_ID\" text=\"bind:CLASSROOM_ID\" combodisplaynulltext=\"bind:CLASSROOM_ID\"/><Cell col=\"2\" text=\"bind:CLASS_NAME\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"classweek_ds\" combocodecol=\"Code\" combodatacol=\"Data\" comboautoselect=\"false\" text=\"bind:CLASS_WEEK\"/><Cell col=\"4\" text=\"bind:TIME_NUMBER\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"classti_ds\" combodatacol=\"data\" combocodecol=\"code\"/><Cell col=\"5\" text=\"bind:PROFESSOR_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("reset_btn","874","344","51","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("리셋");
            this.addChild(obj.name, obj);

            obj = new Button("insert_btn","999","344","51","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("apply_btn","935","344","51","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("title","32","354","398","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("   미배정 강의");
            this.addChild(obj.name, obj);

            obj = new Button("btn_copy","813","343","47","38",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","750","344","46","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("제거");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("classroom.xfdl", function() {

        this.classroom_onload = function(obj,e)
        {
        	this.fn_classroom();
        	this.fn_classcourse();

        };

        this.fn_classroom = function(){
        	var strSvcId    = "SelectAdminClassroom";
        	var strSvcUrl   = "svc::SelectAdminClassroom.do";
        	var inData      = "";
        	var outData     = "classroom_ds = classroom_ds";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        this.fn_classcourse = function(){
        	var strSvcId    = "SelectAdminClasscourse";
        	var strSvcUrl   = "svc::SelectAdminClasscourse.do";
        	var inData      = "";
        	var outData     = "classcourse_ds = classcourse_ds";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // this.classtime_id = function(CLASSROOM_ID)
        // {
        // 	var strSvcId    = "SelectAdminClasstimeid";
        // 	var strSvcUrl   = "svc::SelectAdminClasstimeid.do";
        // 	var inData      = "";
        // 	var outData     = "ds_classtimeid = ds_classtimeid";
        // 	var strArg      = "CLASSROOM_ID =" + CLASSROOM_ID;
        // 	var callBackFnc = "fnCallback";
        // 	var isAsync     = true;
        //
        // 	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        // };

        this.classroom_ds_onrowposchanged = function(obj,e)
        {
        	var CLASSROOM_ID = obj.getColumn(obj.rowposition,"CLASSROOM_ID");

        	this.fn_classtime(CLASSROOM_ID);
        	/*this.classtime_id(CLASSROOM_ID);*/

        };

        this.fn_classtime = function(CLASSROOM_ID){
        	var strSvcId    = "SelectAdminClasstime";
        	var strSvcUrl   = "svc::SelectAdminClasstime.do";
        	var inData      = "";
        	var outData     = "classtime_ds = classtime_ds";
        	var strArg      = "CLASSROOM_ID =" + CLASSROOM_ID;
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }



        this.reset_btn_onclick = function(obj,e)
        {
        	this.classcourse_ds.reset();
        };

        this.apply_btn_onclick = function(obj,e)
        {
        	this.classcourse_ds.applyChange();
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
        			console.log(this.classcourse_ds.saveXML());
        			break;
        		case "SelectAdminClasstime":
        			/*console.log(this.classtime_ds.saveXML());*/
        			break;
        		case "saveAdminClasscourse":
        			this.fn_classcourse();
        			break;
        		default:
        	}
        };

        this.classtime_Grid_oncellclick = function(obj,e)
        {
        	// 클릭된 셀의 컬럼 ID 가져오기
            var columnid = obj.getCellProperty("body", e.cell, "text").replace("bind:", "");
            // 클릭된 셀의 값 가져오기
            var value = this.classtime_ds.getColumn(e.row, columnid);

        	var classtimetoid = this.classtime_ds.getColumn(e.row, "교시");

        	var classtimeid = this.ds_classtimeid.getColumn(classtimetoid-1, columnid);
            // 가져온 값 확인
            trace("클릭한 셀의 컬럼 ID: " + columnid);
            trace("클릭한 셀의 값: " + value);
        	trace("클릭한 셀의 값: " + classtimetoid);
        	trace("클릭한 셀의 컬럼" + classtimeid);
        };

        this.insert_btn_onclick = function(obj,e)
        {
        	if(confirm("등록하시겠습니까?")){
        		console.log(this.classcourse_ds.getColumn());
        		this.fn_classcoursesave();
        	}
        };

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

            // 선택된 행의 데이터를 새로운 행으로 복사
            this.classcourse_ds.copyRow(newRow, this.classcourse_ds, selectedRow);
        };
        this.btn_delete_onclick = function(obj,e)
        {
        	this.classcourse_ds.deleteRow(this.classcourse_ds.rowposition);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.classroom_onload,this);
            this.classtime_Grid.addEventHandler("oncellclick",this.classtime_Grid_oncellclick,this);
            this.reset_btn.addEventHandler("onclick",this.reset_btn_onclick,this);
            this.insert_btn.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.apply_btn.addEventHandler("onclick",this.apply_btn_onclick,this);
            this.btn_copy.addEventHandler("onclick",this.btn_copy_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.classroom_ds.addEventHandler("onrowposchanged",this.classroom_ds_onrowposchanged,this);
        };
        this.loadIncludeScript("classroom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
