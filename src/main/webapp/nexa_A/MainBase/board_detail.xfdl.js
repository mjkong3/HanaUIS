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
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"REGDATE\" type=\"DATE\" size=\"256\"/><Column id=\"BOARD_CODE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stt_boardTop","563","16","155","74",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공지사항");
            obj.set_font("30pt \"gulim\",\"한컴 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","174","134","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","174","194","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","174","257","172","197",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","174","460","172","93",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("첨부파일");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file","377","464","453","94",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"449\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"파 일\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeBoard","714","617","72","33",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("stt_uploader","377","200","273","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","660","137","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("게시일");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stt_regDate","898","143","145","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
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

            obj = new Button("btn_fixBoard","634","617","72","33",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new FileDownload("btn_fileDown","845","482","58","48",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("파일 다운");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_Title","377","137","283","46",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_Content","377","270","666","160",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addFile","916","482","57","48",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("파일 첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteFile","983","482","60","48",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("파일 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteBoard","971","617","72","33",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("삭제");
            obj.set_color("white");
            obj.set_background("#ff0505");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","stt_regDate","text","ds_board","REGDATE");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("board_detail.xfdl", function() {

        this.board_upload_onload = function(obj,e)
        {

        	this.fnOnload();
        };

        /************************************************************************
         * 							기능
         ************************************************************************/

        // 호출
        this.fnOnload = function(obj, e) {

        	var BOARD_CODE = this.parent.BOARD_CODE;  // 부모창에서 넘어온 board_code 값 받기
            trace("Received board_code: " + BOARD_CODE);  // board_code 값 확인 (콘솔에 출력)

            // board_code를 전자정부 프레임워크로 넘길 로직 추가
            this.fnSendBoardCode(BOARD_CODE);
        //
        // 	this.fnSetRegDate();
        // 	trace(this.ds_board.saveXML());

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

        //REGDATE 계산

        this.fnSetRegDate = function(){
        	var RegDate = this.ds_board.getColumn(1, "REGDATE")

        	var year = parseInt(RegDate.substring(2, 4));  // 2024
        	var month = parseInt(RegDate.substring(4, 6)); // 09
        	var day = parseInt(RegDate.substring(6, 8));   // 27

        	this.ds_board.getColumn(0, "REGDATE", year * 10000 + month * 100 + day)
        }

        /************************************************************************
         * 							이벤트
         ************************************************************************/


        /************************************************************************
         * 							파일 다운로드
         ************************************************************************/

        this.Form_onload = function(obj, e)
        {
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



        this.btn_addBoard_onclick = function(obj,e)
        {
        	this.close();
        };

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
                    /*this.ds_file.setColumn(nRowIdx, 1, this.cutFileSize(e.filesize));*/
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


        // // 파일 사이즈 계산 함수
        // this.cutFileSize = function(filesize)
        // {
        //     var sOutput = filesize + " bytes";
        //     for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        //     {
        //         sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        //     }
        //     return sOutput;
        // };

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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.board_upload_onload,this);
            this.Static01_00_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.btn_closeBoard.addEventHandler("onclick",this.btn_addBoard_onclick,this);
            this.btn_fileDown.addEventHandler("onclick",this.btn_fileDown_onclick,this);
            this.btn_addFile.addEventHandler("onclick",this.btn_addFile_onclick,this);
            this.btn_deleteFile.addEventHandler("onclick",this.btn_deleteFile_onclick,this);
            this.btn_deleteBoard.addEventHandler("onclick",this.btn_addBoard_onclick,this);
            this.FileDownTransfer00.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.FileDownTransfer00.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("board_detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
