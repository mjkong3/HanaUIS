(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("select_Student_Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(960,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("save_ds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STUDENT_ID\" type=\"INT\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIV_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CODE\" type=\"INT\" size=\"256\"/><Column id=\"PHOTO\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REGDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ger_type", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">M</Col><Col id=\"data\">남자</Col></Row><Row><Col id=\"code\">F</Col><Col id=\"data\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_de", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("static_type_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">재학</Col><Col id=\"data\">재학</Col></Row><Row><Col id=\"code\">휴학</Col><Col id=\"data\">휴학</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("grade_type", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">1학년</Col></Row><Row><Col id=\"data\">2학년</Col><Col id=\"code\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_photo", this);
            obj._setContents("<ColumnInfo><Column id=\"PHOTO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mydata", this);
            obj._setContents("<ColumnInfo><Column id=\"studentid\" type=\"STRING\" size=\"256\"/><Column id=\"studentps\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_03_01_00_00_00_01","401","327","493","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00","675","229","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00_00","675","278","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00_00","401","278","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","675","180","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","675","131","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00","401","229","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00","401","180","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","401","131","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","675","82","219","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","401","82","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("white");
            obj.set_border("1px solid #d3d3d4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","304","82","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학번");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","304","131","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","577","82","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   비밀번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","577","131","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학과");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","304","180","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   학년");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","577","180","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   핸드폰");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","577","229","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   이메일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","304","229","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   성별");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","66","82","177","236",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","304","278","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   상태");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","577","278","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   생년월일");
            this.addChild(obj.name, obj);

            obj = new Button("Stu_Add_btn","744","400","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01","304","327","98","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("#e7e7e8");
            obj.set_border("1px solid #d3d3d4");
            obj.set_text("   주소");
            this.addChild(obj.name, obj);

            obj = new Edit("STUDENT_ID","413","92","152","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("PASSWORD","686","92","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_password("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("NAME","413","141","152","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("de","688","140","193","31",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_de");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("UNIV_YEAR","412","190","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_innerdataset("grade_type");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonly("true");
            obj.set_text("1학년");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("PHONE","686","190","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("GENDER","415","237","150","36",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("ger_type");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("M");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Edit("EMAIL","686","239","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("STATUS","412","288","153","31",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_innerdataset("static_type_ds");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("BIRTHDAY","685","288","196","31",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ADDRESS","412","337","469","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("return_btn","605","400","119","39",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("되돌아가기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("save_btn","745","401","151","38",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_filename","64","327","136","21",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addfile","203","327","43","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("등록");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mypage","785","47","107","26",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("학생페이지");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",960,500,this,function(p){});
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

            obj = new BindItem("item11","edt_filename","value","save_ds","PHOTO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("select_Student_Popup.xfdl", function() {

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
              case "updateAdStudent":
        		 this.FileUpTransfer00.upload('http://localhost:8082/HanaUIS/fileupload.jsp');
                 this.alert("성공적으로 수정하였습니다.");
                 this.close();
                 break;
        	  case "AdStudentgo":
        		 //var sessionId = application.getSession("SESSION_ID");
        		 window.open("http://localhost:8082/HanaUIS/std/notice.do"); // 세션 등록 성공 시 새탭으로 띄우기
        		 break;
        	  default:
           }
        };
        // 시작 시
        this.select_Student_Popup_onload = function(obj,e)
        {
           var objParam1 = this.parent.param1;
           var objParam2 = this.parent.param2;

           this.save_ds.copyData(objParam1);
           this.ds_de.copyData(objParam2);
            /*console.log(this.select_student.getColumn(0,all));*/

        	var gdsApp = nexacro.getApplication();
        	var adCode = gdsApp.gds_adminInfo.getColumn(0, "ADMIN_CODE");
        	var regdt = gdsApp.gds_adminInfo.getColumn(0, "REGDATE");
        	trace(adCode);
        	trace(regdt);
        	this.save_ds.setColumn(0, "ADMIN_CODE", adCode);
        	this.save_ds.setColumn(0, "REGDATE", regdt);
        	trace("아이디 제대로 들어갔나? " + this.save_ds.getColumn(0, "ADMIN_CODE"));
        	trace("일시 제대로 들어갔나? " + this.save_ds.getColumn(0, "REGDATE"));

        	trace(this.save_ds.saveXML());

           // 미리보기 처음 실행
           setTimeout(function(){
        		trace(this.save_ds.getColumn(0,"PHOTO"));
        		this.showImagePreview(this.save_ds.getColumn(0,"PHOTO"));
        	}.bind(this), 10);

        	// 데이터 되돌리기 할 때 데이터 등록
        	this.ds_photo.setColumn(0,"PHOTO", this.save_ds.getColumn(0,"PHOTO"));
        };

        // 이미지 미리보기 함수 -- 수정안할 시
        this.showImagePreview = function(fileName) {
        	trace(fileName);
            var encodedFileName = encodeURIComponent(fileName); // 파일 이름 URL 인코딩
            var imagePath = "http://localhost:8082/HanaUIS/showFile.jsp?filename=" + encodedFileName; // 업로드한 파일 경로
            this.ImageViewer00.set_image("url('" + imagePath + "')"); // ImageViewer에 이미지 설정

        };

        // 수정 버튼 클릭 시 이벤트
        this.Stu_Add_btn_onclick = function(obj,e)
        {
           this.PASSWORD.set_readonly(false);
           this.NAME.set_readonly(false);
           this.UNIV_YEAR.set_readonly(false);
           this.PHONE.set_readonly(false);
           this.EMAIL.set_readonly(false);
           this.BIRTHDAY.set_readonly(false);
           this.GENDER.set_readonly(false);
           this.ADDRESS.set_readonly(false);
           this.STATUS.set_readonly(false);
           this.de.set_readonly(false);

           this.return_btn.set_visible(true);

           this.Stu_Add_btn.set_visible(false);
           this.save_btn.set_visible(true);

           this.edt_filename.set_visible(true);
           this.btn_addfile.set_visible(true);

           trace(this.save_ds.getColumn(0,"PHOTO"));



        };
        // 업데이트 버튼
        this.fn_update_student = function()
        {
           var strSvcId    = "updateAdStudent";
           var strSvcUrl   = "svc::updateAdStudent.do";
           var inData      = "save_ds = save_ds";
           var outData     = "";
           var strArg      = "";
           var callBackFnc = "fnCallback";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }
        // 되돌리기 버튼
        this.return_btn_onclick = function(obj,e)
        {
           this.STUDENT_ID.set_readonly(true);
           this.PASSWORD.set_readonly(true);
           this.NAME.set_readonly(true);
           this.UNIV_YEAR.set_readonly(true);
           this.PHONE.set_readonly(true);
           this.EMAIL.set_readonly(true);
           this.BIRTHDAY.set_readonly(true);
           this.GENDER.set_readonly(true);
           this.ADDRESS.set_readonly(true);
           this.STATUS.set_readonly(true);
           this.de.set_readonly(true);

           this.return_btn.set_visible(false);

           this.Stu_Add_btn.set_visible(true);
           this.save_btn.set_visible(false);

           this.edt_filename.set_visible(false);
           this.btn_addfile.set_visible(false);

           setTimeout(function(){
        		trace(this.ds_photo.getColumn(0,"PHOTO"));
        		this.showImagePreview(this.ds_photo.getColumn(0,"PHOTO"));
        	}.bind(this), 10);
        };

        // 클릭 시 저장되는 버튼
        this.save_btn_onclick = function(obj,e)
        {
           /*this.FileUpTransfer00.upload('http://localhost:8082/HanaUIS/fileupload.jsp');*/
           this.fn_update_student();
        };

        // 버튼 클릭 시 데이터
        this.btn_addfile_onclick = function(obj,e)
        {
        	this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };

        // 이미지 확장자 체크
        this.gfnIsImageFile = function(fileTxt) {
            var imageExt = ["png", "jpg", "jpeg"];
            var extNm = fileTxt.substr(fileTxt.lastIndexOf(".") + 1).toLowerCase(); // 확장자를 소문자로 변환
            return imageExt.includes(extNm);
        };

        // 파일 넣을 때 닫을 때 이벤트
        this.FileDialog00_onclose = function(obj, e) {
        	var filetype = e.virtualfiles[0].filename;
        	if(e.virtualfiles.length > 1){
        		alert("파일이 두개 이상입니다.");
        	}
        	else if(!this.gfnIsImageFile(filetype)){
        		alert("png, "+ "jpg, "+ "jpeg" + "가 아닙니다.");
         	}
        	else{
        		this.addFileList(e.virtualfiles);

        		var name;
        		for (var i = 0; i < e.virtualfiles.length; i++) {
        			this.save_ds.setColumn(0, "PHOTO", e.virtualfiles[i].filename);
        			name = e.virtualfiles[i].filename;
        		}
        		this.edt_filename.set_value(name);
        		//this.save_ds.setColumn(0,"PHOTO", name);
        		this.dsList.setColumn(0,"FILE_NAME", name);

        		setTimeout(function(){
        			this.aftereventFunction();
        		}.bind(this), 100);

        	}

        };
        // 이미지 미리보기 -- 수정 할 때 작업
        this.aftereventFunction = function(){
        	trace("이벤트 후에 실행되는 작업입니다.");
        	var filename = this.dsList.getColumn(0,"FILE_NAME");
        	trace(filename);
        	this.showImagePreviewadd(filename);

        }
        // 파일 추가 처리 함수
        this.addFileList = function(filelist) {
            for (var i = 0, len = filelist.length, vFile; i < len; i++) {
                vFile = filelist[i];
                vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
                vFile.addEventHandler("onerror", this.FileList_onerror, this);

                // 파일을 서버에 업로드하는 함수 호출
                this.uploadFileToServer(vFile);
            }
        }

        // 파일 업로드 함수
        this.uploadFileToServer = function(vFile) {
        	this.FileUpTransfer00.clearFileList();
            this.FileUpTransfer00.addFile(vFile.filename, vFile);
            this.FileUpTransfer00.upload("http://localhost:8082/HanaUIS/showfileupload.jsp"); // JSP 파일 경로
        }

        // 이미지 미리보기 함수
        this.showImagePreviewadd = function(fileName) {
            var encodedFileName = encodeURIComponent(fileName); // 파일 이름 URL 인코딩
            var imagePath = "http://localhost:8082/HanaUIS/showFile.jsp?filename=" + encodedFileName +"&type=view"; // 업로드한 파일 경로
            this.ImageViewer00.set_image("url('" + imagePath + "')"); // ImageViewer에 이미지 설정

        	setTimeout(function(){
        		this.deleteFile(fileName);
        	}.bind(this), 10000); // 10초 후 삭제

        };

        // 파일 삭제 요청 함수
        this.deleteFile = function(fileName) {
        	trace("여기까지 왔나?");
            var encodedFileName = encodeURIComponent(fileName); // 파일 이름 URL 인코딩
            var deleteUrl = "http://localhost:8082/HanaUIS/deleteFile.jsp?filename=" + encodedFileName; // 파일 삭제 요청 URL

        	var params = {
        		filename: fileName // 파일 이름을 파라미터로 전달
        	};
        	var xhr = new XMLHttpRequest();
        	xhr.open("POST", deleteUrl, true);
        	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        	xhr.onreadystatechange = function () {
        		if (xhr.readyState === 4) {
        			if (xhr.status === 200) {
        				trace("서버 응답: " + xhr.responseText);
        			} else {
        				trace("오류 발생: " + xhr.status);
        			}
        		}
        	};
        	xhr.send("filename=" + encodeURIComponent(fileName));

        };

        // 콜백 함수 정의
        this.callbackDeleteFile = function(svcID, errorCode, errorMsg) {
            if (errorCode == 0) {
                trace("파일 삭제 성공");
            } else {
                trace("파일 삭제 실패: " + errorMsg);
                // 추가적인 디버깅 정보 출력
                trace("서비스 ID: " + svcID);
            }
        };


        // virtualfile의 성공 실패
        this.FileList_onsuccess = function(obj, e) {
            switch (e.reason) {
                case 1:
                    obj.getFileSize();
                    break;
                case 9:
                    this.FileUpTransfer00.addFile(obj.filename, obj);
        			this.FileUpTransfer00.upload("http://localhost:8082/HanaUIS/fileupload.jsp");
                    break;
            }
        };

        // 에러 시 나오는 코드
        this.FileList_onerror = function(obj, e)
        {
            trace("errortype: "+e.errortype);
            trace("errormsg: "+e.errormsg);
            trace("statuscode: "+e.statuscode);
        };

        // mypage 세션 생성 -- 콜백으로 넘어가기
        this.fn_go = function()
        {
           var strSvcId    = "AdStudentgo";
           var strSvcUrl   = "svc::AdStudentgo.do";
           var inData      = "ds_mydata = ds_mydata";
           var outData     = "";
           var strArg      = "";
           var callBackFnc = "fnCallback";
           var isAsync     = false;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        // mypage 클릭 시 이벤트
        this.btn_mypage_onclick = function(obj,e)
        {
        	this.ds_mydata.setColumn(0,"studentid", this.save_ds.getColumn(0,"STUDENT_ID"));
        	this.ds_mydata.setColumn(0,"studentps", this.save_ds.getColumn(0,"PASSWORD"));

        	this.fn_go();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.select_Student_Popup_onload,this);
            this.Static00_03_01.addEventHandler("onclick",this.Static00_03_01_onclick,this);
            this.Stu_Add_btn.addEventHandler("onclick",this.Stu_Add_btn_onclick,this);
            this.return_btn.addEventHandler("onclick",this.return_btn_onclick,this);
            this.save_btn.addEventHandler("onclick",this.save_btn_onclick,this);
            this.btn_addfile.addEventHandler("onclick",this.btn_addfile_onclick,this);
            this.btn_mypage.addEventHandler("onclick",this.btn_mypage_onclick,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("select_Student_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
