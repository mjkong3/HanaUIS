(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_Work");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ger_type", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">M</Col><Col id=\"data\">남자</Col></Row><Row><Col id=\"code\">F</Col><Col id=\"data\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_de", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("static_type_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">재학</Col><Col id=\"data\">재학</Col></Row><Row><Col id=\"code\">휴학</Col><Col id=\"data\">휴학</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("save_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENT_ID\" type=\"INT\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIV_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("grade_type", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">1학년</Col></Row><Row><Col id=\"data\">2학년</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"data\">3학년</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"data\">4학년</Col><Col id=\"code\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_03_01_00_00_00_01","436","318","493","50",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00","710","220","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00","710","269","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00","436","269","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","710","171","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","710","122","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00","436","220","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00","436","171","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","436","122","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","710","73","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","436","73","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","339","73","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학번");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("STUDENT_ID","448","83","152","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("NAME","448","132","152","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","339","122","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","612","73","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   비밀번호");
            this.addChild(obj.name, obj);

            obj = new Edit("PASSWORD","721","83","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","612","122","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학과");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","339","171","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학년");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","612","171","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   핸드폰");
            this.addChild(obj.name, obj);

            obj = new Edit("PHONE","721","181","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("EMAIL","721","230","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","612","220","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이메일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","339","220","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   성별");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","93","73","177","236",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","339","269","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   상태");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","612","269","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   생년월일");
            this.addChild(obj.name, obj);

            obj = new Button("Stu_Add_btn","779","391","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Radio("GENDER","450","228","150","36",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("ger_type");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_direction("vertical");
            obj.set_text("남자");
            obj.set_value("M");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("de","723","131","193","31",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_innerdataset("ds_de");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("STATUS","447","279","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_innerdataset("static_type_ds");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("BIRTHDAY","720","279","196","31",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01","339","318","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   주소");
            this.addChild(obj.name, obj);

            obj = new Combo("UNIV_YEAR","447","181","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_innerdataset("grade_type");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("1학년");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("ADDRESS","447","328","469","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,620,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","STUDENT_ID","value","save_ds","STUDENT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","PASSWORD","value","save_ds","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","NAME","value","save_ds","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","de","value","save_ds","DEPARTMENT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","UNIV_YEAR","value","save_ds","UNIV_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","PHONE","value","save_ds","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","GENDER","value","save_ds","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","EMAIL","value","save_ds","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","STATUS","value","save_ds","STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","BIRTHDAY","value","save_ds","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","ADDRESS","value","save_ds","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("add_Student_Popup.xfdl", function() {
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
        		case "saveAdStudent":
        			this.alert("성공적으로 등록을 하였습니다.");
        			this.close();
        			break;
        	}
        };

        // this.Popup_Work_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
        // {
        // /*	this.insert_ds.setColumn(0,"DEPARTMENT_CODE",this.insert_ds.getColumn(0,1));*/
        //
        //  	var objParam  = this.parent.param1;
        //  	console.log("DEPARTMENT_CODE: " + this.ds_de.getColumn(0, "DEPARTMENT_CODE"));
        //  	this.ds_de.copyData(objParam);
        //  	console.log("selected_DeptCode" + this.ds_de.getColumn(0, "DEPARTMENT_CODE"));
        //
        // 	var departmentCode = this.ds_de.getColumn(0, "DEPARTMENT_CODE");
        //
        //     if (departmentCode == "00") {
        //         // 전체학과가 선택된 경우 콤보박스에서 전체학과를 선택
        //         this.de.set_index(0);  // 콤보박스의 첫 번째 항목(전체학과)을 선택
        // 		 console.log("Selected index: 0 (전체학과)");
        //     } else {
        //         // 일반 학과가 선택된 경우 해당 학과의 DEPARTMENT_CODE 설정
        //         this.de.set_value(departmentCode);
        // 		 console.log("Selected value: " + departmentCode);
        //     }
        //
        // 	this.save_ds.setColumn(0,"UNIV_YEAR","1");
        // 	this.save_ds.setColumn(0,"GENDER","M");
        // 	this.save_ds.setColumn(0,"STATUS","재학");
        // 	this.save_ds.setColumn(0, "DEPARTMENT_CODE", this.ds_de.getColumn(0, "DEPARTMENT_CODE"));
        // };

        // 자식(팝업) 폼 코드 (팝업 로드 시 호출되는 함수)
        this.Popup_Work_onload = function(obj, e) {
            // 부모 폼에서 넘겨받은 param1 (데이터셋)과 선택된 학과 코드
            var objParam = this.parent.param1;                // 부모 폼에서 넘긴 데이터셋
            var selectedDeptCode = this.parent.selectedDeptCode; // 부모 폼에서 넘긴 선택된 학과 코드

            // 데이터셋 복사: 부모 폼에서 넘겨받은 데이터셋을 ds_de에 복사
            this.ds_de.copyData(objParam);

        //     // 콤보박스에 데이터셋 바인딩 설정
        //     this.de.set_innerdataset(this.ds_de);
        //     this.de.set_codecolumn("DEPARTMENT_CODE");  // 콤보박스에서 사용할 코드 컬럼
        //     this.de.set_datacolumn("DEPARTMENT_NAME");  // 콤보박스에 표시할 데이터 컬럼

            // 선택된 학과 코드를 콤보박스에 설정
        //     if (selectedDeptCode) {
        //         if (selectedDeptCode === "00") {
        //             // 전체학과가 선택된 경우 콤보박스에서 0번째 항목을 선택
        //             this.de.set_index(0);
        //             console.log("전체학과 선택됨");
        //         } else {
        //             // 일반 학과가 선택된 경우 해당 학과의 DEPARTMENT_CODE 설정
        //
        //             console.log("선택된 DEPARTMENT_CODE: " + selectedDeptCode);
        //         }
        //     } else {
        //         console.log("선택된 학과 정보가 없습니다.");
        //     }
        	this.de.set_value(selectedDeptCode);

            // 데이터셋에 다른 초기 값 설정 (예시)
            this.save_ds.setColumn(0, "UNIV_YEAR", "1");
            this.save_ds.setColumn(0, "GENDER", "M");
            this.save_ds.setColumn(0, "STATUS", "재학");
            this.save_ds.setColumn(0, "DEPARTMENT_CODE", selectedDeptCode);  // 선택한 학과 코드 설정
        };


        this.Stu_Add_btn_onclick = function(obj,e)
        {
        	this.insertstudent();
        };

        this.insertstudent = function()
        {
        	var strSvcId    = "saveAdStudent";
        	var strSvcUrl   = "svc::saveAdStudent.do";
        	var inData      = "save_ds = save_ds";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Popup_Work_onload,this);
            this.Stu_Add_btn.addEventHandler("onclick",this.Stu_Add_btn_onclick,this);
        };
        this.loadIncludeScript("add_Student_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
