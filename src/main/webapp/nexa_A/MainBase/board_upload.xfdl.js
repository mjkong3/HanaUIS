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
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"file\" type=\"STRING\" size=\"256\"/><Column id=\"filepac\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_board", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileInsert", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_contentFile", this);
            obj._setContents("<ColumnInfo><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog01", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer01", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stt_top","495","10","255","74",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공지사항 등록");
            obj.set_font("30pt/normal \"HY견고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("stt_title","174","137","172","46",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none,10px darkblue solid,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stt_boarder","175","200","172","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none,10px darkblue solid,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stt_content","174","260","172","180",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none,10px darkblue solid,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_content","410","260","584","180",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("left");
            obj.set_font("16px/1.2 \"Gulim\"");
            obj.set_scrolltype("vertical");
            obj.set_readonly("false");
            obj.set_wordWrap("english");
            obj.set_scrollbartype("auto auto");
            obj.set_scrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Static("stt_file","174","465","172","95",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("첨부파일");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none,10px darkblue solid,0px none,0px none");
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

            obj = new Button("btn_addBoard","594","624","72","33",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Static("stt_uploader","420","200","181","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("name");
            this.addChild(obj.name, obj);

            obj = new Edit("txt_title","410","137","584","46",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","410","450","584","5",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("false");
            obj.set_stretch("none");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addContentPhoto","797","200","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("본문 사진 추가");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_filename","678","210","106","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delContentPhoto","901","200","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("본문 사진 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeBoard","687","624","72","33",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("닫기");
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

            obj = new BindItem("item3","txt_title","value","ds_board","TITLE");
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
         * 						게시물 내용 이미지 처리
         ************************************************************************/

        // 게시글
        this.txt_content_onkeydown = function(obj,e)
        {
        	this.adjustTextareaHeight();
        };

        // 텍스트의 변화에 따라 높이를 조정하는 함수
        this.adjustTextareaHeight = function() {

        	this.set_height(720); // 폼 길이 초기화

        	// 기준이 될 content tarea
        	var contentY = this.txt_content.getOffsetBottom();  // TextArea의 하단 y 좌표

        	if (this.ImageViewer00.visible) {
        		var contimgbot = this.ImageViewer00.getOffsetBottom();

        		this.ImageViewer00.set_top(contentY + 5);

        		// content, file 높이 15차이 , stt, upload btn 높이 동일시
        		this.grd_file.set_top(contimgbot + 15);  // 다른 컴포넌트를 imgviewer 하단에 배치
        		this.stt_file.set_top(contimgbot + 15);
        		this.btn_addFile.set_top(contimgbot + 15);
        		this.btn_deleteFile.set_top(contimgbot + 65);
        		this.btn_addBoard.set_top(contimgbot + 175);
        		this.btn_closeBoard.set_top(contimgbot + 175);
        	}
        };

        // 본문 사진 첨부

        this.btn_addContentPhoto_onclick = function(obj,e)
        {
        	this.FileDialog01.open('contentPhoto', FileDialog.LOAD);
        };

        this.gfnIsImageFile = function(fileTxt) {
            var imageExt = ["png", "jpg", "jpeg", "jfif"];
            var extNm = fileTxt.substr(fileTxt.lastIndexOf(".") + 1).toLowerCase(); // 확장자를 소문자로 변환
            return imageExt.includes(extNm);
        };

        // 파일 올릴 때 함수
        this.FileDialog01_onclose = function(obj, e) {
        	var contentfiletype = e.virtualfiles[0].filename;

        	if(e.virtualfiles.length > 1){
        		alert("파일이 두개 이상입니다.");
        		return;
        	}

         	else if(!this.gfnIsImageFile(contentfiletype)){
        		alert("png, "+ "jpg, "+ "jpeg, " + "jfif " + "가 아닙니다.");
        		return;
         	}
        	this.btn_delContentPhoto_onclick;

        	this.addFileList2(e.virtualfiles);
        	var name = e.virtualfiles[0].filename;
        	this.ds_contentFile.setColumn(0, "IMAGE", e.virtualfiles[0].filename);
        	trace(name + "@@@@@@@@@@@@@@@@@@@@@@");

        	this.edt_filename.set_value(name);

            this.ImageViewer00.set_visible(true);    // 본문 이미지 보이기

        	setTimeout(function(){
        		this.addFileList2(e.virtualfiles);
        		this.showImagePreview(this.ds_contentFile.getColumn(0,"IMAGE"));
        	}.bind(this), 250); // 250ms 뒤 실행
        	trace(this.ds_contentFile.saveXML());
        };

        this.showImagePreview = function(fileName) {
            var encodedFileName = encodeURIComponent(fileName); // 파일 이름 URL 인코딩
            var imagePath = "http://localhost:8082/HanaUIS/showFile.jsp?filename=" + encodedFileName +"&type=view"; // 업로드한 파일 경로
        	this.ImageViewer00.set_image("url('" + imagePath + "')"); // ImageViewer에 이미지 설정

         	setTimeout(function(){
         		this.deleteFile(fileName);
         	}.bind(this), 5000); // 5초 후 삭제
        };

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

        // 파일 업로드 함수
        this.uploadFileToServer = function(vFile) {
        	this.FileUpTransfer01.clearFileList();
            this.FileUpTransfer01.addFile(vFile.filename, vFile);
            this.FileUpTransfer01.upload("http://localhost:8082/HanaUIS/showfileupload.jsp"); // JSP 파일 경로
        }


        this.addFileList2 = function(filelist) {
            for (var i = 0, len = filelist.length, vFile; i < len; i++) {
                vFile = filelist[i];
                vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
                vFile.addEventHandler("onerror", this.FileList_onerror, this);

                // 파일을 서버에 업로드하는 함수 호출
                this.uploadFileToServer(vFile);
            }
        }

        this.ImageViewer00_onload = function(obj,e)
        {
        	//this.ImageViewer00.imageheigh = 0;
        	trace('이미지 온로드 시작');
        	this.fnContImg(obj, e);

        	this.stt_content.set_height(this.txt_content.getOffsetHeight() + obj.imageheight + 5);
        	this.adjustTextareaHeight();
        	this.resetScroll();
        	/*
        	var imgviehei = this.ImageViewer00.imageheight;
        	var imgviewid = this.ImageViewer00.imagewidth;
        	trace(imgviehei);

        	this.ImageViewer00.set_height(imgviehei);
        	this.ImageViewer00.set_width(imgviewid);
        	*/
        };


        this.fnContImg = function(obj, e) {
        	// 본문 textarea의 너비 (본문이 존재하는 경우에만 적용)
        	var textareaWidth = this.txt_content.width;
        	console.log("기능타냐 ");

        	obj.set_stretch("none");

        	// 실제 이미지의 원본 너비와 높이를 가져옴
        	var imgWidth = obj.imagewidth;
        	var imgHeight = obj.imageheight;

        	console.log(textareaWidth);
        	console.log(imgWidth);
        	console.log(imgHeight);

        	// 이미지가 본문 textarea보다 가로가 크지 않도록 제한
        	var newWidth = textareaWidth;
        	var newHeight = (textareaWidth * imgHeight) / imgWidth;

        	// 이미지가 텍스트 영역보다 크면 크기를 줄임
        	obj.set_width(newWidth);   // 가로 크기 조정
        	obj.set_height(newHeight); // 세로는 비율에 맞게 자동 조정
        	console.log(obj.imageheight);

        	obj.set_stretch("fit");

        	// 기준이 될 content tarea
        	var contentY = this.txt_content.getOffsetBottom();  // TextArea의 하단 y 좌표

        	obj.set_top(contentY + 5);

        	//trace(this.ds_file.saveXML());
        	//trace(this.ds_fileInsert.saveXML());
        };


        // 본문 사진 삭제
        this.btn_delContentPhoto_onclick = function(obj,e)
        {
        	this.deleteFile(this.ds_contentFile.getColumn(0, "IMAGE"));

        	this.resetScroll();

        	if (this.ds_contentFile.getColumn(0, "IMAGE") == null || this.ds_contentFile.getColumn(0, "IMAGE") == "" || this.ds_contentFile.getColumn(0, "IMGAE") == "undefined") {
        		alert("본문에 들어간 파일이 없습니다.");
        	} else {
        		this.edt_filename.set_value("");
        		this.ImageViewer00.set_visible(false);
        		this.ImageViewer00.set_image(null);

        		// 기준이 될 content tarea
        	var contentY = this.txt_content.getOffsetBottom();  // TextArea의 하단 y 좌표

        	if (!this.ImageViewer00.visible) {
        		var textbot = this.txt_content.getOffsetBottom();

        		// content, file 높이 15차이 , stt, upload btn 높이 동일시
        		this.grd_file.set_top(textbot + 15);  // 다른 컴포넌트를 imgviewer 하단에 배치
        		this.stt_file.set_top(textbot + 15);
        		this.btn_addFile.set_top(textbot + 15);
        		this.btn_deleteFile.set_top(textbot + 65);
        		this.btn_addBoard.set_top(textbot + 175);
        		this.btn_closeBoard.set_top(textbot + 175);

        		this.stt_content.set_height(this.txt_content.height);
        		}
        	}
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
        	trace(e.virtualfiles);

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
            var inData      = "ds_board=ds_board ds_contentFile=ds_contentFile";	// 정보를 넘길 데이터셋
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
            this.FileUpTransfer00.upload('http://localhost:8082/HanaUIS/fileupload.jsp'); // 본문 이미지 제외 모두
        	this.FileUpTransfer01.upload('http://localhost:8082/HanaUIS/fileupload.jsp'); // 본문 이미지 한장


        	// board에 넣고 callback함수로 file에 2차로 넣기
        	this.fnInsertBoardData();
        	this.ds_fileInsert.saveXML();

        	this.close();

        };

        this.btn_closeBoard_onclick = function(obj,e)
        {
        	var onChanged = this.confirm("변경 사항은 저장되지 않습니다. 창을 닫으시겠습니까?");
        		if (onChanged) {
        			this.close();
        		}
        };

        this.txt_title_onsetfocus = function(obj,e)
        {
        	console.log(this.ImageViewer00.height);
        	console.log(this.ImageViewer00.imageheight);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.board_upload_onload,this);
            this.addEventHandler("onsize",this.board_upload_onsize,this);
            this.stt_boarder.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.txt_content.addEventHandler("onkeydown",this.txt_content_onkeydown,this);
            this.stt_file.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.grd_file.addEventHandler("onclick",this.grd_file_onclick,this);
            this.grd_file.addEventHandler("ondrop",this.grd_file_ondrop,this);
            this.grd_file.addEventHandler("ondragenter",this.grd_file_ondragenter,this);
            this.grd_file.addEventHandler("ondragleave",this.grd_file_ondragleave,this);
            this.btn_addFile.addEventHandler("onclick",this.btn_addFile_onclick,this);
            this.btn_deleteFile.addEventHandler("onclick",this.btn_deleteFile_onclick,this);
            this.btn_addBoard.addEventHandler("onclick",this.btn_addBoard_onclick,this);
            this.txt_title.addEventHandler("onsetfocus",this.txt_title_onsetfocus,this);
            this.ImageViewer00.addEventHandler("onload",this.ImageViewer00_onload,this);
            this.btn_addContentPhoto.addEventHandler("onclick",this.btn_addContentPhoto_onclick,this);
            this.btn_delContentPhoto.addEventHandler("onclick",this.btn_delContentPhoto_onclick,this);
            this.btn_closeBoard.addEventHandler("onclick",this.btn_closeBoard_onclick,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileDialog01.addEventHandler("onclose",this.FileDialog01_onclose,this);
        };
        this.loadIncludeScript("board_upload.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
