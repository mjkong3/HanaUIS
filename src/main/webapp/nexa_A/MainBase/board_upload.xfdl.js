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
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"REGDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj.set_text("공지사항 관리");
            obj.set_font("30pt \"gulim\",\"한컴 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","174","134","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_title","410","137","584","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_textAlign("left");
            obj.set_font("16px/normal \"Gulim\"");
            obj.set_scrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","174","194","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("작성자");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","174","257","172","197",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("내용");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_content","410","260","584","190",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_textAlign("left");
            obj.set_font("16px/normal \"Gulim\"");
            obj.set_scrolltype("horizontal");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","174","460","172","93",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("첨부파일");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file","410","464","480","94",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"378\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"파일용량\"/></Band><Band id=\"body\"><Cell text=\"bind:file\"/><Cell col=\"1\" text=\"bind:filepac\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addFile","900","464","94","42",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("파일 첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteFile","900","516","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("파일 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addBoard","630","624","72","33",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("게시");
            this.addChild(obj.name, obj);

            obj = new Static("stt_uploader","409","203","181","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Static02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txt_content","value","ds_board","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","txt_title","value","ds_board","TITLE");
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
        	// 작성자 이름 가져오기

        	if(this.ds_board.getRowCount() < 1) {
        		this.ds_board.addRow();
        	}
        };

        /************************************************************************
         * 							공지사항 ds 추가
         ************************************************************************/


        /************************************************************************
         *							파일 업로드
         ************************************************************************/

        // 파일 업로드 버튼
        this.btn_addFile_onclick = function(obj,e)
        {
            this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);

        };

        // 파일 팝업 창 닫을 때 파일 추가
        this.FileDialog00_onclose = function(obj,e)
        {
            this.addFileList(e.virtualfiles);
        	console.log(e.virtualfiles.length);

        	for(var i=0;i<e.virtualfiles.length;i++){
        		var nRow = this.ds_fileInsert.addRow();
        		this.ds_fileInsert.setColumn(nRow, "FILE_NAME", e.virtualfiles[i].filename);
        	}

        	console.log(this.ds_fileInsert.saveXML());
        };

        // 파일 추가 처리 함수 (드래그)
        this.addFileList = function(filelist) {
            for (var i = 0, len = filelist.length, vFile; i < len; i++)
            {
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


        // virtualfile의 성공 실패
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

        // textarea에 추가
        this.fn_addlog = function(strMessage)
        {
            this.TextArea00.insertText(strMessage + '\n');
        }


        /************************************************************************
         * 								데이터 전송
         ************************************************************************/
         /*
         this.fnInsertBoardData = function() {

            var strSvcId    = "insertBoard";
            var strSvcUrl   = "svc::insertBoard.do";
            var inData      = "ds_board=ds_board";
            var outData     = "";  // 결과를 받을 데이터셋
            var strArg      = ""
            var callBackFnc = "fnCallbackInsertBoard";
            var isAsync     = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 게시글 저장 후 호출될 콜백 함수
        this.fnCallbackInsertBoard = function(svcID, errorCode, errorMsg) {
            if (errorCode == 0) {  // 정상적으로 게시글이 저장되었을 때
        		console.log("BOARD 테이블 작성 완료");
        		this.alert("공지사항이 게시되었습니다");
        		this.fnInsertFileData(); // 2. 게시글 저장 후 파일을 저장하는 함수를 호출
            } else {
                alert("게시글 저장 중 오류 발생: " + errorMsg);
            }
        };

         this.fnInsertFileData = function() {
            var strSvcId    = "insertFile";
            var strSvcUrl   = "svc::insertFile.do";
            var inData      = "ds_fileInsert=ds_fileInsert";
            var outData     = "";  // 결과를 받을 데이터셋
            var strArg      = ""
            var callBackFnc = "fnCallback";
            var isAsync     = false;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 게시 버튼 누를 시 // 파일 업로드 (복사)
        this.btn_addBoard_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	//this.ds_board.setColumn(0, "TITLE", this.txt_title.value);
        	//this.ds_board.setColumn(0, "CONTENT", this.txt_content.value);

            this.TextArea00.set_value("");
            this.FileUpTransfer00.upload('http://localhost:8082/HanaUIS/fileupload.jsp');

        	// board에 넣고 callback함수로 file에 2차로 넣기
        	this.fnInsertBoardData();
        };
        */

         this.fnSetDataset = function() {
        	 for(var i=0;i<this.ds_board.getRowCount();i++){
        		this.ds_board.setColumn(i, "TITLE", this.txt_title.value);
        		this.ds_board.setColumn(i, "CONTENT", this.txt_content.value);
        		this.ds_fnInsert.setColumn(i, "TITLE", this.txt_content.value);
        	}
        }

         this.fnInsertBoardData = function() {

            var strSvcId    = "insertBoard";
            var strSvcUrl   = "svc::insertBoard.do";
            var inData      = "ds_board=ds_board";
            var outData     = "";  // 결과를 받을 데이터셋
            var strArg      = ""
            var callBackFnc = "fnCallbackInsertFile";
            var isAsync     = false;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 파일 저장 후 게시물 저장 호출될 콜백 함수
        this.fnCallbackInsertFile = function(svcID, errorCode, errorMsg) {
            if (errorCode == 0) {  // 정상적으로 게시글이 저장되었을 때
        		console.log("BOARD 테이블 작성 완료");
        		this.alert("공지사항이 게시되었습니다");
        		this.fnInsertFileData(); // 2. 게시글 저장 후 파일을 저장하는 함수를 호출
            } else {
                alert("게시글 저장 중 오류 발생: " + errorMsg);
            }
        };



         this.fnInsertFileData = function() {
            var strSvcId    = "insertFile";
            var strSvcUrl   = "svc::insertFile.do";
            var inData      = "ds_fileInsert=ds_fileInsert";
            var outData     = "";  // 결과를 받을 데이터셋
            var strArg      = ""
            var callBackFnc = "fnCallback";
            var isAsync     = false;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.btn_addBoard_onclick = function(obj,e)
        {
        	for (i=0; i < this.ds_fileInsert.rowcount; i++) {
        		this.ds_fileInsert.setColumn(i, "TITLE", this.txt_title.value);
        	}

        	//this.TextArea00.set_value("");
            this.FileUpTransfer00.upload('http://localhost:8082/HanaUIS/fileupload.jsp');

        	// board에 넣고 callback함수로 file에 2차로 넣기
        	this.fnInsertBoardData();
        	this.ds_fileInsert.saveXML();

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.board_upload_onload,this);
            this.Static01_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.txt_content.addEventHandler("onchanged",this.txt_content_onchanged,this);
            this.Static01_00_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.grd_file.addEventHandler("onclick",this.grd_file_onclick,this);
            this.grd_file.addEventHandler("ondrop",this.grd_file_ondrop,this);
            this.grd_file.addEventHandler("ondragenter",this.grd_file_ondragenter,this);
            this.grd_file.addEventHandler("ondragleave",this.grd_file_ondragleave,this);
            this.btn_addFile.addEventHandler("onclick",this.btn_addFile_onclick,this);
            this.btn_deleteFile.addEventHandler("onclick",this.btn_deleteFile_onclick,this);
            this.btn_addBoard.addEventHandler("onclick",this.btn_addBoard_onclick,this);
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
