(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("excel_Professor_Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,460);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_test", this);
            obj._setContents("<ColumnInfo><Column id=\"교번\" type=\"STRING\" size=\"256\"/><Column id=\"비밀번호\" type=\"STRING\" size=\"256\"/><Column id=\"이름\" type=\"STRING\" size=\"256\"/><Column id=\"연락처\" type=\"STRING\" size=\"256\"/><Column id=\"이메일\" type=\"STRING\" size=\"256\"/><Column id=\"생년월일\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"재직여부\" type=\"STRING\" size=\"256\"/><Column id=\"학과코드\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"우편번호\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_check", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_copy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_excel","569","37","80","33",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("엑셀등록");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","480","37","79","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("샘플 다운로드");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","290","415","135","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀 내 중복 : 0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","510","415","135","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("기존 학생 중복 : 0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","240","430","45","11",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#FFCEDA");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","460","430","45","11",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#B0E0E6");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","75","789","335",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_test");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"교번\"/><Cell col=\"2\" text=\"비밀번호\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"연락처\"/><Cell col=\"5\" text=\"이메일\"/><Cell col=\"6\" text=\"생년월일\"/><Cell col=\"7\" text=\"성별\"/><Cell col=\"8\" text=\"재직여부\"/><Cell col=\"9\" text=\"학과코드\"/><Cell col=\"10\" text=\"주소\"/><Cell col=\"11\" text=\"우편번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:교번\" cssclass=\"expr:CHECK == &apos;1&apos; ? &apos;backgroundRed&apos; : CHECK==&apos;2&apos; ? &apos;backgroundBlue&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:비밀번호\"/><Cell col=\"3\" text=\"bind:이름\"/><Cell col=\"4\" text=\"bind:연락처\"/><Cell col=\"5\" text=\"bind:이메일\"/><Cell col=\"6\" text=\"bind:생년월일\"/><Cell col=\"7\" text=\"bind:성별\"/><Cell col=\"8\" text=\"bind:재직여부\"/><Cell col=\"9\" text=\"bind:학과코드\"/><Cell col=\"10\" text=\"bind:주소\"/><Cell col=\"11\" text=\"bind:우편번호\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","745","37","74","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("등록");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_check","663","37","74","33",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("중복체크");
            this.addChild(obj.name, obj);

            obj = new Static("stt_boardTop","28","6","113","74",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("엑셀 등록");
            obj.set_font("20pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",850,460,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("excel_Professor_Popup.xfdl", function() {
        // 엑셀 파일 넣을 때
        this.btn_excel_onclick = function(obj, e) {
            this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };
        // 엑셀 파일 넣은 후 이벤트
        this.FileDialog00_onclose = function(obj, e) {
        	// 등록버튼 초기화
        	this.btn_insert.set_enable(false);
        	// 중복 표시 초기화
        	this.Static00_00.set_text("기존 교수 중복 : 0");
        	this.Static00.set_text("엑셀 내 중복 : 0");

        	this.FileUpTransfer00.clearFileList();
            this.addFileList(e.virtualfiles);
        };

        // 파일 추가 처리 함수
        this.addFileList = function(filelist) {
            for (var i = 0, len = filelist.length, vFile; i < len; i++) {
                vFile = filelist[i];

                // 이벤트 핸들러 등록
                vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
                vFile.addEventHandler("onerror", this.FileList_onerror, this);

                // 파일 열기
                vFile.open(null, 1);
            }
        };

        // virtualfile의 성공 및 실패 이벤트 처리
        this.FileList_onsuccess = function(obj, e) {
            switch (e.reason) {
                case 1:
                    obj.getFileSize(); // 파일 사이즈 가져오기
                    break;
                case 9: // 파일이 들어왔을 때
                    this.FileUpTransfer00.addFile(obj.filename, obj);

                    // 파일 업로드 처리
                    var uploadUrl = "http://localhost:8082/HanaUIS/excelImport.jsp";
                    this.FileUpTransfer00.upload(uploadUrl);

                    // 업로드가 성공하면 DataSet에 XML 데이터 로드
                    this.FileUpTransfer00.addEventHandler("onsuccess", this.onUploadSuccess, this);
                    break;
            }
        };

        // 파일 추가 에러 발생 시 호출되는 함수
        this.FileList_onerror = function(obj, e) {
            trace("errortype: " + e.errortype);
            trace("errormsg: " + e.errormsg);
            trace("statuscode: " + e.statuscode);
        };

        // 업로드 성공 후 데이터셋에 XML 데이터 로드하는 함수
        this.onUploadSuccess = function(obj, e) {

        	this.ds_test.clearData();
        	this.ds_test.copyData(this.ds_copy);

            var responseXml = e.datasets[0]; // 서버에서 응답한 XML 데이터

        	this.ds_test.appendData(responseXml);

        	this.ds_test.addColumn("CHECK", "String", 256, 0);


        	//this.Grid00.set_binddataset(this.ds_test);
        	//this.Grid00.createFormat();


        	responseXml.clear();
        };

        this.FileDownload00_onclick = function (obj, e) {
            // 현재 그리드 데이터셋을 가져옵니다.
            var ds = this.Grid00.getBindDataset();
            var data = ds.saveXML(); // 데이터셋의 데이터를 XML 형식으로 변환합니다.

            // 서버로 transaction 호출
            var url = "http://localhost:8082/HanaUIS/excelExport.jsp?type=exPro"; // 다운로드 excel 요청

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
                        link.download = "professor_data.xlsx"; // 다운로드할 파일 이름
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link); // 링크를 제거합니다.
                    } else {
                        trace("오류 발생: " + xhr.status);
                    }
                }
            };

            // 데이터 전송
            xhr.responseType = "blob"; // 응답 유형을 blob으로 설정
            xhr.send("data=" + encodeURIComponent(data));
        };

        /************************************************************************
         * 유효성 검증
         ************************************************************************/
        //유효성
        // 1. 엑셀에서 겹치는 유효성 검증

        // 2. 데이터베이스에서 겹치는 유효성 검증



        // 유효성 방법
        // 1. ds에 학생 학번을 받아와서 유효성 검증

        // 2. 학생 학번을 sql문을 인증하는 식으로 유효성 검증


        this.btn_check_onclick = function(obj,e)
        {
        	this.checkstudentexcel();
        };

        // 체크 트랜젝션
        this.checkstudentexcel = function()
        {
           var strSvcId    = "checkProexcel";
           var strSvcUrl   = "svc::checkProexcel.do";
           var inData      = "ds_test=ds_test";
           var outData     = "ds_check=ds_check";
           var strArg      = "";
           var callBackFnc = "fnCallback";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        // 비교하는 거
        this.checkds = function() {
        	// 데이터베이스에 있는 학번
        	var count =0;
        	// 엑셀 학번
        	var count2 =0;
        	// CHECK 열 추가
        	this.ds_test.addColumn("CHECK", "String", "256");

        	// excel
        	for (var i = 0; i < this.ds_test.getRowCount(); i++) {
        		var value1 = this.ds_test.getColumn(i, "교번");

        		// 현재 row의 학번과 같은 학번이 다른 행에 존재하는지 확인
        		var sqlCount = this.ds_test.getCaseCount("교번 == '" + value1 + "'");

        		// 일치하는 학번이 있는 경우 CHECK 값을 1로 설정
        		if (sqlCount > 1) {
        			this.ds_test.setColumn(i, "CHECK", "1");
        			count++;
        		}
        	}


        	// ds_check의 모든 STUDENT_ID를 확인
        	for (var i = 0; i < this.ds_check.rowcount; i++) {
        		var value1 = this.ds_check.getColumn(i, "PROFESSOR_ID");

        		// ds_test에서 일치하는 학번의 수 가져오기
        		var sqlCount = this.ds_test.getCaseCount("교번 == '" + value1 + "'");

        		// 값이 일치하는 경우
        		if (sqlCount > 0) {
        			// ds_test를 필터링하여 일치하는 학번만 남김
        			this.ds_test.filter("교번 == '" + value1 + "'");

        			// 필터링된 결과의 CHECK 열 값을 2로 설정
        			for (var j = 0; j < this.ds_test.rowcount; j++) {
        				this.ds_test.setColumn(j, "CHECK", "2");
        				count2++;
        			}
        			this.ds_test.filter("");
        		}
        	}
        	this.Static00_00.set_text("기존 교수 중복 : " + count2);
        	this.Static00.set_text("엑셀 내 중복 : " + count);
        }


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
        		case "checkProexcel":
        			this.checkds();
        			if(this.ds_test.getCaseCount("CHECK == 1") <= 0 && this.ds_test.getCaseCount("CHECK == 2") <= 0 && this.ds_test.getCaseCount("학번 == null") <= 0 && this.ds_test.rowcount > 0){
        				this.btn_insert.set_enable(true);
        			}else{

        			};
        			break;
        		case "insertexcelPro":
        			this.close();
        		default:
        			break;
        	}

        };

        this.testexcel_onload = function(obj,e)
        {
        	this.ds_copy.copyData(this.ds_test);
        };

        this.btn_insert_onclick = function(obj,e)
        {
        	var gdsApp = nexacro.getApplication();
        	var admin = gdsApp.gds_adminInfo.getColumn(0, "ADMIN_CODE");

        	this.ds_test.addColumn("ADMIN_CODE", "String", 256);

        	for(var i=0; i< this.ds_test.rowcount; i++){
        		this.ds_test.setColumn(i,"ADMIN_CODE", admin);
        	}
        	this.fn_insertexcelStu();
        };

        this.fn_insertexcelStu = function(){
           var strSvcId    = "insertexcelPro";
           var strSvcUrl   = "svc::insertexcelPro.do";
           var inData      = "ds_test=ds_test";
           var outData     = "";
           var strArg      = "";
           var callBackFnc = "fnCallback";
           var isAsync     = true;

           this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.FileDownload00.addEventHandler("onclick",this.FileDownload00_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.btn_check.addEventHandler("onclick",this.btn_check_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("excel_Professor_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
