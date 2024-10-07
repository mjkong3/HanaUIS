(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("board_upload");
            this.set_titletext("New Form");
            this.set_scrolltype("vertical");
            this.set_scrollbartype("auto auto");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"file\" type=\"STRING\" size=\"256\"/><Column id=\"filepac\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_board", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_CODE\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileInsert", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stt_top","495","10","264","74",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공지사항 등록");
            obj.set_font("30pt \"gulim\",\"한컴 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("stt_title","174","134","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stt_boarder","174","194","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stt_content","174","257","172","180",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_content","410","260","584","180",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("left");
            obj.set_font("16px/1.2 \"Gulim\"");
            obj.set_scrolltype("horizontal");
            obj.set_readonly("false");
            obj.set_wordWrap("both");
            obj.set_scrollbartype("default default");
            obj.set_scrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Static("stt_file","174","464","172","93",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("첨부파일");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file","410","464","480","94",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"378\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"파일용량\"/></Band><Band id=\"body\"><Cell text=\"bind:file\"/><Cell col=\"1\" text=\"bind:filepac\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addFile","900","465","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("파일 첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteFile","900","520","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("파일 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addBoard","630","625","72","33",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("게시");
            this.addChild(obj.name, obj);

            obj = new Static("stt_uploader","419","203","181","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Static02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","410","137","584","46",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","410","450","584","5",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addContentPhoto","900","203","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("본문 사진 추가");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txt_content","value","ds_board","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","stt_uploader","text","gds_adminInfo","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit00","value","ds_board","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("board_upload.xfdl", function() {
        // 폼 온로드
        this.board_upload_onload = function(obj,e)
        {
        	// 글로벌 DS(SESSION)에서 작성자 이름 ds_board에 박기
        	var gdsApp = nexacro.getApplication();
        	var adName = gdsApp.gds_adminInfo.getColumn(0, "ADMIN_NAME");
        	this.ds_board.setColumn(0, "ADMIN_NAME", adName);
        	trace("이름 제대로 들어갔나? " + this.ds_board.getColumn(0, "ADMIN_NAME"));

        	var adCode = gdsApp.gds_adminInfo.getColumn(0, "ADMIN_CODE");
        	this.ds_board.setColumn(0, "ADMIN_CODE", adCode);
        	trace("코드 제대로 들어갔나? " + this.ds_board.getColumn(0, "ADMIN_CODE"));

        	trace(this.ds_board.saveXML);


        };

        /************************************************************************
         *							파일 업로드
         ************************************************************************/

        // 파일 업로드 버튼
        this.btn_addFile_onclick = function(obj,e)
        {
        	//파일 첨부하기 위한 팝업 및 데이터 전달 도구
            this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };

        // 파일 팝업 창 닫을 때 파일 추가
        this.FileDialog00_onclose = function(obj,e)
        {
        	// 파일 첨부 창에서 선택한 파일들을 가상에 추가
            this.addFileList(e.virtualfiles);
        	console.log(e.virtualfiles.length);

        	// 파일 제목들을 fileInsert_ds (FILE, BOARD db에 들어갈 ds)에 저장
        	for(var i=0;i<e.virtualfiles.length;i++){
        		var nRow = this.ds_fileInsert.addRow();
        		this.ds_fileInsert.setColumn(nRow, "FILE_NAME", e.virtualfiles[i].filename);
        	}

        	console.log(this.ds_fileInsert.saveXML());
        	console.log(this.ds_file.saveXML());
        };

        // 파일 추가 처리 함수 (파일 첨부 창에서 선택한 파일들을 vFile에 list로 삽입)
        this.addFileList = function(filelist) {
            for (var i = 0, len = filelist.length, vFile; i < len; i++)
            {
        		// 파일이 제대로 들어오면 성공으로 / 실패로 반환
                vFile = filelist[i];
                vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
                vFile.addEventHandler("onerror", this.FileList_onerror , this);

                vFile.open(null, 1);
            }
        }

        // 파일 드래그 드랍 관련
        this.grd_file_ondrop = function(obj,e)
        {
            if(e.datatype == "file")
            {
                this.addFileList(e.filelist);
        		this.ds_fileInsert.setColumn(0, "FILE_NAME", e.virtualfiles[0].filename);
            }
        };


        // 파일 변환 성공 시 grid에 표현, ds에 추가 및 fileuptransfer에 추가
        this.FileList_onsuccess = function(obj, e)
        {
            switch (e.reason)
            {
                case 1:
                    obj.getFileSize();
                    break;
                case 9:
                    var nRowIdx = this.ds_file.addRow();
        			this.ds_file.setColumn(nRowIdx, 0, obj.filename);
        			this.ds_file.setColumn(nRowIdx, 1, this.cutFileSize(e.filesize));
                    this.FileUpTransfer00.addFile(obj.filename, obj);
                    break;
            }
        };

        // 넘어가지 않을 시 에러 표현
        this.FileList_onerror = function(obj, e)
        {
            trace("errortype: "+e.errortype);
            trace("errormsg: "+e.errormsg);
            trace("statuscode: "+e.statuscode);
        };


        // 파일 사이즈 계산 함수
        this.cutFileSize = function(filesize)
        {
            var sOutput = filesize + " bytes";
            for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
            {
                sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
            }
            return sOutput;
        };

        // 업로드한 파일 전체 삭제
        this.btn_deleteFile_onclick = function(obj,e)
        {
        	//selected file delete
        	/*var nRow = this.ds_file.rowposition;*/
        	this.ds_file.clearData();

        // 	var objFileList = this.fileUpTransfer00.find(nRow);	// 선택 파일 찾기
        // 	this.fileUpTransfer00.removeFile(objFileList); // 선택 파일삭제
        	this.FileUpTransfer00.clearFileList();
        };

        // 파일 처리 진행, 오류, 완료 이벤트 함수
        this.FileUpTransfer00_onprogress = function(obj,e)
        {
            this.fn_addlog(e.loaded+"/"+e.total);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
            this.fn_addlog(e.code);
            this.fn_addlog(e.message);
        };

        this.FileUpTransfer00_onerror = function(obj,e)
        {
            this.fn_addlog(e.errormsg);
            this.fn_addlog(e.statuscode);
        };

        // 성공 및 실패 여부 표현
        this.fn_addlog = function(strMessage)
        {
            trace(strMessage + '\n');
        }


        /************************************************************************
         * 								데이터 전송
         ************************************************************************/

        //공지사항 트랜잭션
         this.fnInsertBoardData = function() {

        	// 제목 및 공지사항이 비었을 때 처리
        	if(this.txt_title.value == ''
        		 || this.txt_title.value == 'undefined'
        		 || this.txt_title.value == null) {
        			alert("제목을 입력해주세요.");
        			return;
        	}
        		if(this.txt_content.value == ''
        		 || this.txt_content.value == 'undefined'
        		 || this.txt_content.value == null) {
        			alert("내용을 입력해주세요.");
        			return;
        	}

            var strSvcId    = "insertBoard";
            var strSvcUrl   = "svc::insertBoard.do";
            var inData      = "ds_board=ds_board";	// 정보를 넘길 데이터셋
            var outData     = "ds_board=ds_board";  // 결과를 받을 데이터셋
            var strArg      = ""
            var callBackFnc = "fnCallbackInsertFile";
            var isAsync     = false;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 파일 저장 후 게시물 저장 호출될 콜백 함수
        this.fnCallbackInsertFile = function(svcID, errorCode, errorMsg) {
            if (errorCode == 0) {  // 정상적으로 게시글이 저장되었을 때
        		console.log("BOARD 테이블 작성 완료");
        		this.fnInsertFileData(); // 2. 게시글 저장 후 파일을 저장하는 함수를 호출
            } else {
                alert("공지사항 등록 중 오류 발생: " + errorMsg);
            }
        };


        // 파일 입력 트랜잭션 (BOARD table INSERT 후 진행)
         this.fnInsertFileData = function() {
            var strSvcId    = "insertFile";
            var strSvcUrl   = "svc::insertFile.do";
            var inData      = "ds_fileInsert=ds_fileInsert ds_board=ds_board";
            var outData     = "";  // 결과를 받을 데이터셋
            var strArg      = ""
            var callBackFnc = "fnCallbackClosePopup";
            var isAsync     = false;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 마지막 파일 첨부 이후 팝업 닫기
        this.fnCallbackClosePopup = function(svcID, errorCode, errorMsg) {
            if (errorCode == 0) {  // 정상적으로 게시글이 저장되었을 때
        		console.log("FILE 테이블 작성 완료");
        		this.alert("공지사항이 게시되었습니다");
        		this.close;
            } else {
                alert("첨부파일 등록 중 오류 발생: " + errorMsg);
            }
        };

        // 등록 버튼 온클릭 이벤트
        this.btn_addBoard_onclick = function(obj,e)
        {
        	for (i=0; i < this.ds_fileInsert.rowcount; i++) {
        		this.ds_fileInsert.setColumn(i, "TITLE", this.txt_title.value);
        	}

        	// JSP를 통해 POST 방식으로 로컬 폴더(D:/upload/)로 업로드)
            this.FileUpTransfer00.upload('http://localhost:8082/HanaUIS/fileupload.jsp');

        	// board에 넣고 callback함수로 file에 2차로 넣기
        	this.fnInsertBoardData();
        	this.ds_fileInsert.saveXML();

        };





        /************************************************************************
         * 						게시물 내용 처리
         ************************************************************************/


        // 게시글 textarea 높이 늘리기
        this.txt_content_onkeyup = function(obj,e)
        {
        	this.adjustTextareaHeight();
        };

        this.txt_content.set_scrolltype("none");  // 스크롤바 기본 비활성화

        // 줄 수를 계산하는 함수
        this.getTextLineCount = function(text) {
            // \n으로 구분된 줄 수를 기준으로 텍스트를 나눔
            var lines = this.txt_content.text.split("\n");
            var totalLines = 0;

            // 각 줄의 길이를 계산하여 줄 수를 증가시킴
            for (var i = 0; i < lines.length; i++) {
                var lineLength = lines[i].length;

        		if (lineLength === 0) {
        			totalLines += 1;
        		} else {
                var charsPerLine = Math.floor(this.txt_content.getOffsetWidth() / 10);  // 예시로 문자 당 10px 너비로 계산
                totalLines += Math.ceil(lineLength / charsPerLine);  // 현재 줄에서 차지하는 줄 수 계산
        		}
        	}

            return totalLines;
        };

        // 텍스트의 변화에 따라 높이를 조정하는 함수
        this.adjustTextareaHeight = function() {
            var maxLines = 8;  // 제한할 최대 줄 수
            var text = this.txt_content.value;

            // 줄 수를 계산
            var nTextLines = this.getTextLineCount(text);
            var lineHeight = 20;  // 폰트 크기 또는 한 줄의 높이를 하드코딩 (예: 20px)
            var nHeight = this.txt_content.getOffsetHeight();  // 현재 TextArea 높이

            // 현재 줄 수에 맞춰 높이를 조정
            if (nTextLines >= maxLines) {
                var newHeight = lineHeight * nTextLines + 20;  // 여유 공간을 주기 위해 +20 추가
                this.txt_content.set_height(newHeight);
                this.txt_content.set_scrolltype("none");  // 스크롤 비활성화
            } else {
                // 최대 줄 수를 넘었을 경우, TextArea 높이를 고정하고 스크롤 활성화
                var maxHeight = lineHeight * maxLines + 20;
                this.txt_content.set_height(maxHeight);
                this.txt_content.set_scrolltype("vertical");  // 스크롤 활성화
            }

        	// 기준이 될 content tarea
        	var contentY = this.txt_content.getOffsetBottom();  // TextArea의 하단 y 좌표

        	// content tarea, stt 높이 동일
        	this.stt_content.set_height(nHeight);

        	// content, file 높이 15차이 , stt, upload btn 높이 동일시
        	this.grd_file.set_top(contentY + 15);  // 다른 컴포넌트를 TextArea 하단에 배치
        	this.stt_file.set_top(contentY + 15);
        	this.btn_addFile.set_top(contentY + 15);
        	this.btn_deleteFile.set_top(contentY + 65);
        	this.btn_addBoard.set_top(contentY + 175);
        };

        this.btn_addContentPhoto_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.board_upload_onload,this);
            this.addEventHandler("onkeyup",this.board_upload_onkeyup,this);
            this.stt_boarder.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.txt_content.addEventHandler("onkeyup",this.txt_content_onkeyup,this);
            this.txt_content.addEventHandler("onkeydown",this.txt_content_onkeydown,this);
            this.stt_file.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.grd_file.addEventHandler("onclick",this.grd_file_onclick,this);
            this.grd_file.addEventHandler("ondrop",this.grd_file_ondrop,this);
            this.grd_file.addEventHandler("ondragenter",this.grd_file_ondragenter,this);
            this.grd_file.addEventHandler("ondragleave",this.grd_file_ondragleave,this);
            this.btn_addFile.addEventHandler("onclick",this.btn_addFile_onclick,this);
            this.btn_deleteFile.addEventHandler("onclick",this.btn_deleteFile_onclick,this);
            this.btn_addBoard.addEventHandler("onclick",this.btn_addBoard_onclick,this);
            this.btn_addContentPhoto.addEventHandler("onclick",this.btn_addContentPhoto_onclick,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("board_upload.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
