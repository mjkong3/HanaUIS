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
            obj = new Dataset("ds_board", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CRE_USR\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"CRE_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_copyCat", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stt_boardTop","563","16","155","74",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공지사항");
            obj.set_font("30pt \"gulim\",\"한컴 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","175","134","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","175","194","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stt_Content","175","260","172","170",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stt_file","175","460","172","93",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("첨부파일");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file","377","460","455","94",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"449\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"파 일\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeBoard","714","617","72","33",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("stt_uploader","400","200","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","660","137","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("게시일");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stt_regDate","1305","153","145","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","660","197","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("게시번호");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stt_boardCode","898","203","145","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updateBoard","634","617","72","33",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new FileDownload("btn_fileDown","850","520","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("파일 다운");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_Title","380","137","283","46",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_Content","380","260","666","170",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_scrolltype("horizontal");
            obj.set_tooltiptype("hover");
            obj.set_scrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addFile","850","460","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("파일 첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteFile","953","520","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("파일 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteBoard","971","617","72","33",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("삭제");
            obj.set_color("white");
            obj.set_background("#ff0505");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Dtm","890","140","153","47",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addContentPhoto","953","460","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("본문 파일 삽입");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","380","440","662","10",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","stt_regDate","text","ds_board","CRE_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","stt_uploader","text","ds_board","ADMIN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","stt_boardCode","text","ds_board","BOARD_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","txt_Title","value","ds_board","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","txt_Content","value","ds_board","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cal_Dtm","value","ds_board","CRE_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("board_detail.xfdl", function() {
        /*
        	파일 데이터셋 ds_file 추가가 어떤 부분에 들어가야 할지 바꿔줘야 함
        	//var nRowIdx = this.ds_file.addRow();
            //this.ds_file.setColumn(nRowIdx, 0, obj.filename);
        */



        // 화면 온로드
        this.board_upload_onload = function(obj,e)
        {
        	this.fnOnload();

        	this.ds_copyCat.copyData(this.ds_board, true);
        };

        /************************************************************************
         * 							기능
         ************************************************************************/

        // 호출
        this.fnOnload = function(obj, e) {

        	var BOARD_CODE = this.parent.BOARD_CODE;  // 부모창에서 넘어온 board_code 값 받기
        	var CRE_USR = this.parent.NAME;
            trace("Received board_code: " + BOARD_CODE);  // board_code 값 확인 (콘솔에 출력)
        	trace("Received CRE_USR: " + CRE_USR);  // CRE_USR 값 확인 (콘솔에 출력)

            // board_code를 전자정부 프레임워크로 넘길 로직 추가
            this.fnSendBoardCode(BOARD_CODE);
        	trace(this.ds_board.getColumn(0, "CRE_DTM"));

        	console.log(this.ds_board.saveXML());
        	console.log(this.ds_file.saveXML());

        	trace(this.ds_board.getColumn(0,"TITLE"));
        };

        // 전자정부 프레임워크로 board_code 전달하는 함수
        this.fnSendBoardCode = function(BOARD_CODE) {
            var strSvcId    = "selectBoard";
            var strSvcUrl   = "svc::selectBoard.do";
            var inData      = "";
            var outData     = "ds_board=ds_board ds_file=ds_file";  // 결과를 받을 데이터셋
            var strArg      = "id=" + BOARD_CODE;    // board_code 값을 서버로 전달
            var callBackFnc = "fnCallback";
            var isAsync     = false;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************
         * 							파일 다운로드
         ************************************************************************/

        this.Form_onload = function(obj, e)
        {
        	//var deletedate = this.ds_file.getColumn(0, "REGDATE");

            this.FileDownTransfer00 = new FileDownTransfer();
            this.addChild("FileDownTransfer00", this.FileDownTransfer00);

            this.FileDownTransfer00.addEventHandler("onsuccess", this.FileDownTransfer00_onsuccess, this);
            this.FileDownTransfer00.addEventHandler("onerror", this.FileDownTransfer00_onerror, this);
        };

        // 다운로드 버튼 클릭 이벤트
        this.btn_fileDown_onclick = function(obj, e)
        {
            // 데이터셋에서 파일 URL 가져오기
            var fileUrl = "http://localhost:8082/HanaUIS/filedownload.jsp?fileName=" + encodeURIComponent(this.ds_file.getColumn(this.ds_file.rowposition, "FILE_NAME"));

        	console.log(this.ds_file.getColumn(this.ds_file.rowposition, "FILE_NAME"));

            // 파일이 없을 경우
        	if (this.ds_file.getColumn(0, "FILE_NAME") == 0
        	|| this.ds_file.getColumn(0, "FILE_NAME") == 'undefined'
        	|| this.ds_file.getColumn(0, "FILE_NAME") == null) {
        		alert("파일이 존재하지 않습니다");
        		return;
        	}

        	// 파일 URL 확인
            if (!fileUrl) {
                alert("파일 URL이 존재하지 않습니다.");
                return;
            }
        	alert(this.ds_file.getColumn(this.ds_file.rowposition, "FILE_NAME"));
            // 다운로드 URL 설정 및 파일 다운로드 시작
            //this.FileDownTransfer00.downloadurl(fileUrl);
        	this.FileDownTransfer00.set_url(fileUrl);
        	this.FileDownTransfer00.set_downloadfilename(this.ds_file.getColumn(this.ds_file.rowposition, "FILE_NAME"));
            this.FileDownTransfer00.download();
        };

        // 다운로드 성공 이벤트
        this.FileDownTransfer00_onsuccess = function(obj, e)
        {
            alert("파일 다운로드가 완료되었습니다.");
        };

        // 다운로드 실패 이벤트
        this.FileDownTransfer00_onerror = function(obj, e)
        {
            alert("파일 다운로드 중 오류가 발생했습니다. 오류 코드: " + e.errormsg);
        };





        /************************************************************************
         *							파일 업로드
         ************************************************************************/

        // 파일 업로드 버튼
        this.btn_addFile_onclick = function(obj,e)
        {
            this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };

        this.FileDialog00_onclose = function(obj, e) {
            // e.virtualfiles가 정상적으로 들어오는지 확인
            if (e.virtualfiles && e.virtualfiles.length > 0) {
                this.addFileList(e.virtualfiles);  // 파일 추가 처리 함수 호출

                // 파일 목록을 확인하기 위해 로그 출력
                console.log("파일 개수: " + e.virtualfiles.length);
                for (var i = 0; i < e.virtualfiles.length; i++) {
                    console.log("파일명: " + e.virtualfiles[i].filename);
                }

                // ds_file 내용 확인
                console.log(this.ds_file.saveXML());
            } else {
                console.log("선택된 파일이 없습니다.");
            }
        };

        // 파일 추가 처리 함수
        this.addFileList = function(filelist) {
            for (var i = 0; i < filelist.length; i++) {
                var file = filelist[i];  // 각 virtualfile 객체 참조
                var filename = file.filename;  // filename을 file 객체에서 가져옴
                var fileExists = false;

                // 이미 동일한 파일명이 있는지 확인
                for (var j = 0; j < this.ds_file.getRowCount(); j++) {
                    if (this.ds_file.getColumn(j, "FILE_NAME") === filename) {
                        fileExists = true;
                        this.alert("동일한 이름의 파일이 존재합니다");
                        break;
                    }
                }

                // 파일이 존재하지 않는 경우에만 추가
                if (!fileExists) {
                    var nRow = this.ds_file.addRow();  // 새로운 행 추가
                    if (nRow >= 0) {
                        this.ds_file.setColumn(nRow, "FILE_NAME", filename);  // 파일 이름 추가
        				trace("파일추가시작");
                        file.addEventHandler("onsuccess", this.FileList_onsuccess, this);  // 이벤트 핸들러 추가
                        file.addEventHandler("onerror", this.FileList_onerror, this);  // 에러 핸들러 추가

                        // 파일 열기 (비동기 처리)
                        file.open(null, 1);
                    } else {
                        console.log("행 추가 실패: " + filename);
                    }
                } else {
                    console.log("파일이 이미 존재합니다: " + filename);
                }
            }
        };




        // 파일 드래그 드랍 관련
        this.grd_file_ondrop = function(obj,e)
        {
            if(e.datatype == "file")
            {
                this.addFileList(e.filelist);
        		this.ds_file.setColumn(0, "FILE_NAME", e.virtualfiles[0].filename);
            }
        };


        // virtualfile의 성공 실패
        this.FileList_onsuccess = function(obj, e) {
            switch (e.reason) {
                case 9: // 파일이 성공적으로 열림
                    var filename = obj.filename;  // 파일 이름 가져오기
                    var fileExists = false;

                    // 동일 파일명 확인
                    for (var j = 0; j < this.ds_file.getRowCount(); j++) {
                        if (this.ds_file.getColumn(j, "FILE_NAME") === filename) {
                            fileExists = true;
                            console.log("파일이 이미 존재합니다: " + filename);
                            break;
                        }
                    }

                    // 파일이 존재하지 않을 경우 데이터셋에 추가
                    if (!fileExists) {
                        var nRowIdx = this.ds_file.addRow();
                        if (nRowIdx >= 0) {
                            this.ds_file.setColumn(nRowIdx, "FILE_NAME", filename);  // 파일명 추가
                            this.FileUpTransfer00.addFile(filename, obj);  // 파일 전송 준비
                        } else {
                            console.log("행 추가 실패: " + filename);
                        }
                    }
                    break;
            }
        };

        this.FileList_onerror = function(obj, e)
        {
            trace("errortype: "+e.errortype);
            trace("errormsg: "+e.errormsg);
            trace("statuscode: "+e.statuscode);
        };


        //
        /************************************************************************
         * 				업로드한 파일 전체 삭제
         ************************************************************************/

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

        /************************************************************************
         * 							수정 버튼 이벤트
         ************************************************************************/

          // 공지사항 업데이트 기능
          this.fnUdateBoardData = function() {

        	// 제목 및 공지사항이 비었을 때 처리
        	if(this.txt_Title.value == ''
        		 || this.txt_Title.value == 'undefined'
        		 || this.txt_Title.value == null) {
        			alert("제목을 입력해주세요.");
        			return;
        	}
        		if(this.txt_Content.value == ''
        		 || this.txt_Content.value == 'undefined'
        		 || this.txt_Content.value == null) {
        			alert("내용을 입력해주세요.");
        			return;
        	}

        	var adCode = gdsApp.gds_adminInfo.getColumn(0, "ADMIN_CODE");
        	this.ds_board.setColumn(0, "CRE_USR", adCode);
        	trace("코드 제대로 들어갔나? " + this.ds_board.getColumn(0, "CRE_USR"));

            var strSvcId    = "updateBoard";
            var strSvcUrl   = "svc::updateBoard.do";
            var inData      = "ds_board=ds_board ds_copyCat=ds_copyCat";
            var outData     = "";  // 결과를 받을 데이터셋
            var strArg      = ""
            var callBackFnc = "fnCallbackUpdateFile";
            var isAsync     = false;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 파일 저장 후 게시물 저장 호출될 콜백 함수
        this.fnCallbackUpdateFile = function(svcID, errorCode, errorMsg) {
            if (errorCode == 0) {  // 정상적으로 board가 저장되었을 때
        		console.log("FILE 테이블 삭제 완료");
        		console.log("BOARD 테이블 수정 완료");

        		this.fnUpdateFileData(); // 2. 게시글 저장 후 파일을 저장하는 함수를 호출
            } else {
                alert("게시글 저장 중 오류 발생: " + errorMsg);
            }
        };


         // 파일 업데이트 기능
         this.fnUpdateFileData = function() {
            var strSvcId    = "updateFile";
            var strSvcUrl   = "svc::updateFile.do";
            var inData      = "ds_file=ds_file ds_board=ds_board";
            var outData     = "";  // 결과를 받을 데이터셋
            var strArg      = ""
            var callBackFnc = "fnCallbackUpdated";
            var isAsync     = false;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.fnCallbackUpdated = function(svcID, errorCode, errorMsg) {
        	if (errorCode == 0) {  // 정상적으로 게시글이 저장되었을 때
        		alert("게시글이 수정 되었습니다");
        		this.close;
            } else {
                alert("게시글 저장 중 오류 발생: " + errorMsg);
            }

        };


        this.btn_updateBoard_onclick = function(obj,e)
        {
        	this.fnUdateBoardData();
        };

        /************************************************************************
         * 							삭제 관련
         ************************************************************************/

        this.fnDeleteBoardData = function() {
            var strSvcId    = "deleteBoard";
            var strSvcUrl   = "svc::deleteBoard.do";
            var inData      = "ds_copyCat = ds_copyCat";  // 넘어가는 데이터셋
            var outData     = "";  // 결과를 받을 데이터셋
            var strArg      = ""
            var callBackFnc = "fnCallbackDeletBoard";
            var isAsync     = false;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        this.btn_deleteBoard_onclick = function(obj,e)
        {
        	var confirmPopup = this.confirm("삭제하시겠습니까?");

        	if (confirmPopup) {
        		trace("삭제진행")
        		this.fnDeleteBoardData();
        	}
        };

        this.fnCallDeleteBoard = function(svcID, errorCode, errorMsg) {
        	if (errorCode == 0) {  // 정상적으로 게시글이 저장되었을 때
        		alert("게시글이 삭제 되었습니다");
        		this.close;
            } else {
                alert("게시글 삭제 중 오류 발생: " + errorMsg);
            }

        };


        // 변경사항 감지
        this.btn_closeBoard_onclick = function(obj,e)
        {
        	var origin = this.ds_board.saveXML();
        	var copy = this.ds_copyCat.saveXML();

        	if (this.origin === this.copy)
        	{
        		this.close();
        	} else {
        		var onChanged = this.confirm("변경 된 사항이 있습니다.");
        		if (!onChanged) {
        			this.close();
        		}
        	}
        };

        // 공지 내용 늘리고 줄이기 //

        // 게시글 textarea 높이 늘리기
        this.txt_Content_onkeyup = function(obj,e)
        {
        	this.adjustTextareaHeight();
        };

        this.txt_Content.set_scrolltype("none");  // 스크롤바 기본 비활성화

        // 줄 수를 계산하는 함수
        this.getTextLineCount = function(text) {
            // \n으로 구분된 줄 수를 기준으로 텍스트를 나눔
            var lines = this.txt_Content.text.split("\n");
            var totalLines = 0;

            // 각 줄의 길이를 계산하여 줄 수를 증가시킴
            for (var i = 0; i < lines.length; i++) {
                var lineLength = lines[i].length;

        		if (lineLength === 0) {
        			totalLines += 1;
        		} else {
                var charsPerLine = Math.floor(this.txt_Content.getOffsetWidth() / 10);  // 예시로 문자 당 10px 너비로 계산
                totalLines += Math.ceil(lineLength / charsPerLine);  // 현재 줄에서 차지하는 줄 수 계산
        		}
        	}

            return totalLines;
        };

        // 텍스트의 변화에 따라 높이를 조정하는 함수
        this.adjustTextareaHeight = function() {
            var maxLines = 8;  // 제한할 최대 줄 수
            var text = this.txt_Content.value;

            // 줄 수를 계산
            var nTextLines = this.getTextLineCount(text);
            var lineHeight = 20;  // 폰트 크기 또는 한 줄의 높이를 하드코딩 (예: 20px)
            var nHeight = this.txt_Content.getOffsetHeight();  // 현재 TextArea 높이

            // 현재 줄 수에 맞춰 높이를 조정
            if (nTextLines >= maxLines) {
                var newHeight = lineHeight * nTextLines + 20;  // 여유 공간을 주기 위해 +20 추가
                this.txt_Content.set_height(newHeight);
                this.txt_Content.set_scrolltype("none");  // 스크롤 비활성화
            } else {
                // 최대 줄 수를 넘었을 경우, TextArea 높이를 고정하고 스크롤 활성화
                var maxHeight = lineHeight * maxLines + 20;
                this.txt_content.set_height(maxHeight);
                this.txt_content.set_scrolltype("vertical");  // 스크롤 활성화
            }

        	// 기준이 될 content tarea
        	var contentY = this.txt_Content.getOffsetBottom();  // TextArea의 하단 y 좌표

        	// content tarea, stt 높이 동일
        	this.stt_Content.set_height(nHeight);

        	// content, file 높이 15차이 , stt, upload btn 높이 동일시
        	this.grd_file.set_top(contentY + 15);  // 다른 컴포넌트를 TextArea 하단에 배치
        	this.stt_file.set_top(contentY + 15);
        	this.btn_addFile.set_top(contentY + 15);
        	this.btn_deleteFile.set_top(contentY + 65);
        	this.btn_addBoard.set_top(contentY + 175);

        	this.adjustFormScroll();
        };

        this.btn_addContentPhoto_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.board_upload_onload,this);
            this.stt_file.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.btn_closeBoard.addEventHandler("onclick",this.btn_closeBoard_onclick,this);
            this.btn_updateBoard.addEventHandler("onclick",this.btn_updateBoard_onclick,this);
            this.btn_fileDown.addEventHandler("onclick",this.btn_fileDown_onclick,this);
            this.txt_Content.addEventHandler("onkeyup",this.txt_Content_onkeyup,this);
            this.btn_addFile.addEventHandler("onclick",this.btn_addFile_onclick,this);
            this.btn_deleteFile.addEventHandler("onclick",this.btn_deleteFile_onclick,this);
            this.btn_deleteBoard.addEventHandler("onclick",this.btn_deleteBoard_onclick,this);
            this.btn_addContentPhoto.addEventHandler("onclick",this.btn_addContentPhoto_onclick,this);
            this.FileDownTransfer00.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.FileDownTransfer00.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("board_detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
