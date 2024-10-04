(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("score_chart");
            this.set_titletext("New Form");
            this.set_enable("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_chart", this);
            obj._setContents("<ColumnInfo><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"중간\" type=\"STRING\" size=\"256\"/><Column id=\"기말\" type=\"STRING\" size=\"256\"/><Column id=\"과제\" type=\"STRING\" size=\"256\"/><Column id=\"총합\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"등급\">A</Col><Col id=\"중간\">1</Col><Col id=\"기말\">1</Col><Col id=\"과제\">7</Col><Col id=\"총합\">4</Col></Row><Row><Col id=\"등급\">B</Col><Col id=\"중간\">2</Col><Col id=\"기말\">2</Col><Col id=\"과제\">5</Col><Col id=\"총합\">6</Col></Row><Row><Col id=\"등급\">C</Col><Col id=\"중간\">3</Col><Col id=\"기말\">3</Col><Col id=\"과제\">4</Col><Col id=\"총합\">10</Col></Row><Row><Col id=\"등급\">D</Col><Col id=\"중간\">4</Col><Col id=\"기말\">4</Col><Col id=\"과제\">2</Col><Col id=\"총합\">11</Col></Row><Row><Col id=\"등급\">F</Col><Col id=\"중간\">5</Col><Col id=\"기말\">5</Col><Col id=\"과제\">1</Col><Col id=\"총합\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROFESSOR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_semester", this);
            obj._setContents("<ColumnInfo><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">1학기</Col><Col id=\"SEMESTER\">1</Col></Row><Row><Col id=\"data\">2학기</Col><Col id=\"SEMESTER\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PROFESSOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","170","75","1060","55",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#004AAD");
            obj.set_border("0px none darkcyan");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Dept","50","16","130","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_Class","540","16","160","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_class");
            obj.set_codecolumn("CLASS_CODE");
            obj.set_datacolumn("CLASS_NAME");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","18","20","32","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("학과");
            obj.set_color("WHITE");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","508","20","32","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("강의");
            obj.set_color("WHITE");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","358","20","32","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("학기");
            obj.set_color("WHITE");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_Semester","390","16","80","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_semester");
            obj.set_codecolumn("SEMESTER");
            obj.set_datacolumn("data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","208","20","32","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("연도");
            obj.set_color("WHITE");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_Year","240","16","80","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("YEAR");
            obj.set_datacolumn("DATA");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_Search","965","16","60","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","780","16","146","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_background("white");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","748","20","36","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("교수");
            obj.set_color("WHITE");
            this.Div00.addChild(obj.name, obj);

            obj = new BasicChart("cht_Score","150","150","1080","470",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_chart");
            obj.set_visible("true");
            obj.set_bargrouping("true");
            obj.set_stacktype("none");
            obj.set_titlespacing("0px");
            obj._setContents({
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "bold 11pt/normal \"맑은 고딕\"",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"visible": true,
            		"opposite": "false"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "bold 10pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"visible": "true",
            			"labeltype": "normal",
            			"titletextalign": "middle",
            			"titlegap": "0",
            			"autotickscale": "0",
            			"tickinterval": "1"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "중간",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:중간",
            			"highlightbarvisible": "true",
            			"barlinestyle": "1px solid #1f77b4",
            			"barfillstyle": "#1f77b4",
            			"highlightbarlinestyle": "1px solid #1f77b4",
            			"highlightbarfillstyle": "#1f77b4"
            		},
            		{
            			"id": "series1",
            			"titletext": "기말",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:기말",
            			"highlightbarvisible": "true",
            			"barlinestyle": "1px solid #aec7e8",
            			"barfillstyle": "#aec7e8",
            			"highlightbarlinestyle": "1px solid #aec7e8",
            			"highlightbarfillstyle": "#aec7e8"
            		},
            		{
            			"id": "series2",
            			"titletext": "과제",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:과제",
            			"highlightbarvisible": "true",
            			"barlinestyle": "1px solid #ff7f0e",
            			"barfillstyle": "#ff7f0e",
            			"highlightbarlinestyle": "1px solid #ff7f0e",
            			"highlightbarfillstyle": "#ff7f0e"
            		},
            		{
            			"id": "series3",
            			"titletext": "총합",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:총합",
            			"highlightbarvisible": "true",
            			"barlinestyle": "1px solid #ffbb78",
            			"barfillstyle": "#ffbb78",
            			"highlightbarlinestyle": "1px solid #ffbb78",
            			"highlightbarfillstyle": "#ffbb78",
            			"linevisible": "false",
            			"pointvisible": "false",
            			"pointlinestyle": "1px solid #ffbb78",
            			"pointfillstyle": "#ffbb78",
            			"linestyle": "1px solid #ffbb78",
            			"linefillstyle": "#ffbb78",
            			"pointshape": "diamond"
            		}
            	],
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt \"맑은 고딕\"",
            		"itemtextcolor": "#4c4c4c"
            	}
            });
            obj.set_categorycolumn("bind:등급");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","120","20","230","55",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("성 적 통 계");
            obj.set_textAlign("center");
            obj.set_font("30px/normal \"HY헤드라인M\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.cmb_Dept","value","ds_search","DEPARTMENT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.cmb_Class","value","ds_search","CLASS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.cmb_Semester","value","ds_search","SEMESTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.cmb_Year","value","ds_search","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.Static01","text","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("score_chart.xfdl", function() {

        this.score_chart_onload = function(obj,e)
        {
        	// 온로드 시 dept code 받아오기
        	this.fn_searchDept();

            // 현재 연도 가져오기
            var currentYear = new Date().getFullYear();
            // ds_year 초기화
            this.ds_year.clearData();
            // 현재 연도와 이전 4개의 연도 추가
            for (var i = 0; i < 5; i++) {
                var year = currentYear - i;
                var nRow = this.ds_year.addRow();
                this.ds_year.setColumn(nRow, "YEAR", year);  // 데이터값 (검색에 사용될 값)
                this.ds_year.setColumn(nRow, "DATA", year);  // 콤보박스에 표시될 값
            }

        	this.Div00.form.btn_Search.set_enable(false);
        };

        this.fn_searchDept = function() {

           var strSvcId    = "searchDept";
           var strSvcUrl   = "svc::selectAdDept.do";
           var inData      = "";
           var outData     = "ds_dept = ds_dept";
           var strArg      = "";
           var callBackFnc = "fnCallBack_deptInfo";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }

        this.fnCallBack_deptInfo = function (svcID, errCD, errMsg)
        {
        	if (svcID == "searchDept" && errCD == 0){
        	this.ds_search.setColumn(0, "SEMESTER", 1);
        	this.ds_search.setColumn(0, "YEAR", 2024);
        	} else {
        	trace(errMsg);
        	}
        };

        // 강의목록 검색
        this.Div00_cmb_Dept_onitemchanged = function(obj,e)
        {
        	// 강의목록 검색 함수
        	this.fn_searchClass();
        	trace("dept 실행");
        };

        this.Div00_cmb_Semester_onitemchanged = function(obj,e)
        {
        	this.fn_searchClass();
        	trace("학기 실행");
        };

        this.Div00_cmb_Year_onitemchanged = function(obj,e)
        {
        	this.fn_searchClass();
        	trace("연도 실행");
        };

        this.Div00_cmb_Class_onitemchanged = function(obj,e)
        {
        	// e.index는 innerds가 동적으로 변할 경우 신뢰할 수 없다
        	// 따라서 obj.value와 obj.text를 사용
        	// obj.value = codecol / obj.text = datacol
        	// findRow("찾을 컬럼(codecol)", obj.value)를 통해 ds의 실제 row찾기
            var nRow = this.ds_class.findRow("CLASS_CODE", obj.value);
            if (nRow >= 0) {
                trace("찾은 행의 인덱스: " + nRow);
                this.ds_search.setColumn(0, "PROFESSOR_ID", this.ds_class.getColumn(nRow, "PROFESSOR_ID"));
                this.ds_search.setColumn(0, "NAME", this.ds_class.getColumn(nRow, "NAME"));

                trace("선택된 교수명: " + this.ds_class.getColumn(nRow, "NAME"));
            } else {
                trace("유효하지 않은 CLASS_CODE입니다.");
            }
        };


        // 강의목록 검색 함수
        this.fn_searchClass = function ()
        {
           var strSvcId    = "searchClass";
           var strSvcUrl   = "svc::selectAdClass.do";
           var inData      = "ds_search=ds_search";
           var outData     = "ds_class=ds_class";
           var strArg      = "";
           var callBackFnc = "fnCallBack";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.fnCallBack = function (svcID, errCD, errMsg)
        {
        	if (svcID == "searchClass" && errCD == 0) {
        		trace("강의리스트는? = " + this.ds_class.saveXML());
        		trace("강의리스트 첫번째 = " + this.ds_class.getColumn(0, "CLASS_NAME"));

        		// 콤보박스 초기화 및 스태틱 초기화
        		// 초기화하지 않을 경우 빈 데이터셋일때 이전 이름 남아있다
        		this.Div00.form.cmb_Class.set_index(-1);
        		this.Div00.form.Static01.set_text("");

        		// 동적으로 데이터가 바인딩된 후 첫 번째 값을 설정
        		if (this.ds_class.rowcount > 0) {
        			// 데이터셋이 있을 경우 강제로 첫번째 값 설정
        			this.Div00.form.cmb_Class.set_index(0);

        			// ds_search에 값 설정
        			this.ds_search.setColumn(0, "PROFESSOR_ID", this.ds_class.getColumn(0, "PROFESSOR_ID"));
        			this.ds_search.setColumn(0, "NAME", this.ds_class.getColumn(0, "NAME"));
        			this.Div00.form.Static01.set_text(this.ds_class.getColumn(0, "NAME"));

        			// 강제로 onitemchanged 이벤트를 트리거
        			// 해주지 않으면 만약 item값이 동일한 경우(동일한 교수) 스태틱이 null이 된다
        			this.Div00.form.cmb_Class.on_fire_onitemchanged(this.Div00.form.cmb_Class, null, null, this.Div00.form.cmb_Class.index, 0);
        		}
        		// 데이터셋 rowcount에 따라 검색 버튼 활성화
        		var cRow = this.ds_class.rowcount;
        		if (cRow > 0) {
        			this.Div00.form.btn_Search.set_enable(true);
        		} else {
        			this.Div00.form.btn_Search.set_enable(false);
        		}
        	}
        };



        // 조회 버튼 클릭시 search
        this.Div00_btn_Search_onclick = function(obj,e)
        {
        	this.fn_searchChart();
        	trace("search값 들어갔나? : " + this.ds_search.saveXML());
        };

        this.fn_searchChart = function ()
        {
           var strSvcId    = "searchChart";
           var strSvcUrl   = "svc::selectAdScoreChart.do";
           var inData      = "ds_search=ds_search";
           var outData     = "ds_chart=ds_chart";
           var strArg      = "";
           var callBackFnc = "fnCallBack";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };








        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.score_chart_onload,this);
            this.Div00.form.cmb_Dept.addEventHandler("onitemchanged",this.Div00_cmb_Dept_onitemchanged,this);
            this.Div00.form.cmb_Class.addEventHandler("onitemchanged",this.Div00_cmb_Class_onitemchanged,this);
            this.Div00.form.cmb_Semester.addEventHandler("onitemchanged",this.Div00_cmb_Semester_onitemchanged,this);
            this.Div00.form.cmb_Year.addEventHandler("onitemchanged",this.Div00_cmb_Year_onitemchanged,this);
            this.Div00.form.btn_Search.addEventHandler("onclick",this.Div00_btn_Search_onclick,this);
        };
        this.loadIncludeScript("score_chart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
