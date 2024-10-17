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
            this.set_border("0px none");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_board", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CRE_USR\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"CRE_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_copyCat", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_contentFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
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
            obj = new Static("stt_boardTop","378","6","113","74",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공지사항");
            obj.set_font("20pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","61","65","148","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_textAlign("center");
            obj.set_font("12pt \"Arial\"");
            obj.set_border("0px none,10px darkblue solid,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","60","105","149","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_textAlign("center");
            obj.set_font("12pt \"Arial\"");
            obj.set_border("0px none,10px darkblue solid,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stt_Content","60","145","149","198",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_textAlign("center");
            obj.set_font("12pt \"Arial\"");
            obj.set_border("0px none,10px darkblue solid,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stt_file","61","416","149","104",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("첨부파일");
            obj.set_textAlign("center");
            obj.set_font("12pt \"Arial\"");
            obj.set_border("0px none,10px darkblue solid,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file","219","416","496","104",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"447\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"파 일\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeBoard","494","530","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("stt_uploader","219","105","245","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","522","65","106","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("게시일");
            obj.set_textAlign("center");
            obj.set_font("12pt \"Arial\"");
            obj.set_border("0px none,10px darkblue solid,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","522","105","106","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("게시번호");
            obj.set_textAlign("center");
            obj.set_font("12pt \"Arial\"");
            obj.set_border("0px none,10px darkblue solid,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stt_boardCode","638","105","171","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updateBoard","300","530","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("수정");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new FileDownload("btn_fileDown","720","416","90","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("다운");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_Title","219","65","288","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_Content","219","145","591","198",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_scrolltype("vertical");
            obj.set_tooltiptype("hover");
            obj.set_scrollbartype("auto auto");
            obj.set_scrollbarsize("10");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addFile","720","451","90","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("첨부");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteFile","720","486","90","34",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("삭제");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteBoard","397","530","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Dtm","638","65","171","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addContentPhoto","625","355","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("삽입");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","219","395","590","11",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_visible("false");
            obj.set_stretch("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delContentPhoto","720","355","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_filename","219","355","401","35",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stt_img","61","355","149","35",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("이미지");
            obj.set_textAlign("center");
            obj.set_font("12pt \"Arial\"");
            obj.set_border("0px none,10px darkblue solid,0px none,0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");
                p.set_border("0px none");

                p.stt_boardTop.set_taborder("0");
                p.stt_boardTop.set_text("공지사항");
                p.stt_boardTop.set_font("20pt/normal \"Arial\"");
                p.stt_boardTop.move("378","6","113","74",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("제목");
                p.Static01.set_textAlign("center");
                p.Static01.set_font("12pt \"Arial\"");
                p.Static01.set_border("0px none,10px darkblue solid,0px none,0px none");
                p.Static01.move("61","65","148","35",null,null);

                p.Static01_00.set_taborder("2");
                p.Static01_00.set_text("작성자");
                p.Static01_00.set_textAlign("center");
                p.Static01_00.set_font("12pt \"Arial\"");
                p.Static01_00.set_border("0px none,10px darkblue solid,0px none,0px none");
                p.Static01_00.move("60","105","149","35",null,null);

                p.stt_Content.set_taborder("3");
                p.stt_Content.set_text("내용");
                p.stt_Content.set_textAlign("center");
                p.stt_Content.set_font("12pt \"Arial\"");
                p.stt_Content.set_border("0px none,10px darkblue solid,0px none,0px none");
                p.stt_Content.move("60","145","149","198",null,null);

                p.stt_file.set_taborder("4");
                p.stt_file.set_text("첨부파일");
                p.stt_file.set_textAlign("center");
                p.stt_file.set_font("12pt \"Arial\"");
                p.stt_file.set_border("0px none,10px darkblue solid,0px none,0px none");
                p.stt_file.move("61","416","149","104",null,null);

                p.grd_file.set_taborder("5");
                p.grd_file.set_binddataset("ds_file");
                p.grd_file.move("219","416","496","104",null,null);

                p.btn_closeBoard.set_taborder("6");
                p.btn_closeBoard.set_text("닫기");
                p.btn_closeBoard.set_font("12px/normal \"Gulim\"");
                p.btn_closeBoard.move("494","530","90","35",null,null);

                p.stt_uploader.set_taborder("7");
                p.stt_uploader.set_font("12px/normal \"Gulim\"");
                p.stt_uploader.move("219","105","245","35",null,null);

                p.Static01_00_01.set_taborder("8");
                p.Static01_00_01.set_text("게시일");
                p.Static01_00_01.set_textAlign("center");
                p.Static01_00_01.set_font("12pt \"Arial\"");
                p.Static01_00_01.set_border("0px none,10px darkblue solid,0px none,0px none");
                p.Static01_00_01.move("522","65","106","35",null,null);

                p.Static01_00_01_00.set_taborder("9");
                p.Static01_00_01_00.set_text("게시번호");
                p.Static01_00_01_00.set_textAlign("center");
                p.Static01_00_01_00.set_font("12pt \"Arial\"");
                p.Static01_00_01_00.set_border("0px none,10px darkblue solid,0px none,0px none");
                p.Static01_00_01_00.move("522","105","106","35",null,null);

                p.stt_boardCode.set_taborder("10");
                p.stt_boardCode.set_font("12px/normal \"Gulim\"");
                p.stt_boardCode.move("638","105","171","35",null,null);

                p.btn_updateBoard.set_taborder("11");
                p.btn_updateBoard.set_text("수정");
                p.btn_updateBoard.set_font("12px/normal \"Gulim\"");
                p.btn_updateBoard.move("300","530","90","35",null,null);

                p.btn_fileDown.set_taborder("12");
                p.btn_fileDown.set_text("다운");
                p.btn_fileDown.set_font("12px/normal \"Gulim\"");
                p.btn_fileDown.move("720","416","90","34",null,null);

                p.txt_Title.set_taborder("13");
                p.txt_Title.set_font("12px/normal \"Gulim\"");
                p.txt_Title.move("219","65","288","35",null,null);

                p.txt_Content.set_taborder("14");
                p.txt_Content.set_scrolltype("vertical");
                p.txt_Content.set_tooltiptype("hover");
                p.txt_Content.set_scrollbartype("auto auto");
                p.txt_Content.set_scrollbarsize("10");
                p.txt_Content.set_font("12px/normal \"Gulim\"");
                p.txt_Content.set_wordWrap("english");
                p.txt_Content.move("219","145","591","198",null,null);

                p.btn_addFile.set_taborder("15");
                p.btn_addFile.set_text("첨부");
                p.btn_addFile.set_font("12px/normal \"Gulim\"");
                p.btn_addFile.move("720","451","90","34",null,null);

                p.btn_deleteFile.set_taborder("16");
                p.btn_deleteFile.set_text("삭제");
                p.btn_deleteFile.set_font("12px/normal \"Gulim\"");
                p.btn_deleteFile.move("720","486","90","34",null,null);

                p.btn_deleteBoard.set_taborder("17");
                p.btn_deleteBoard.set_text("삭제");
                p.btn_deleteBoard.move("397","530","90","35",null,null);

                p.cal_Dtm.set_taborder("18");
                p.cal_Dtm.set_font("12px/normal \"Gulim\"");
                p.cal_Dtm.set_readonly("true");
                p.cal_Dtm.move("638","65","171","35",null,null);

                p.btn_addContentPhoto.set_taborder("19");
                p.btn_addContentPhoto.set_text("삽입");
                p.btn_addContentPhoto.set_font("12px/normal \"Gulim\"");
                p.btn_addContentPhoto.move("625","355","90","35",null,null);

                p.ImageViewer00.set_taborder("20");
                p.ImageViewer00.set_visible("false");
                p.ImageViewer00.set_stretch("none");
                p.ImageViewer00.move("219","395","590","11",null,null);

                p.btn_delContentPhoto.set_taborder("21");
                p.btn_delContentPhoto.set_text("삭제");
                p.btn_delContentPhoto.move("720","355","90","35",null,null);

                p.edt_filename.set_taborder("22");
                p.edt_filename.set_readonly("true");
                p.edt_filename.move("219","355","401","35",null,null);

                p.stt_img.set_taborder("23");
                p.stt_img.set_text("이미지");
                p.stt_img.set_textAlign("center");
                p.stt_img.set_font("12pt \"Arial\"");
                p.stt_img.set_border("0px none,10px darkblue solid,0px none,0px none");
                p.stt_img.move("61","355","149","35",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout2","",900,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stt_boardTop.move("328","6","113","74",null,null);

                p.Static01.move("11","65","148","35",null,null);

                p.Static01_00.move("10","105","149","35",null,null);

                p.stt_Content.move("10","145","149","198",null,null);

                p.stt_file.move("11","416","149","104",null,null);

                p.grd_file.move("169","416","496","104",null,null);

                p.btn_closeBoard.move("434","530","90","35",null,null);

                p.stt_uploader.move("169","105","245","35",null,null);

                p.Static01_00_01.move("472","65","106","35",null,null);

                p.Static01_00_01_00.move("472","105","106","35",null,null);

                p.stt_boardCode.move("588","105","171","35",null,null);

                p.btn_updateBoard.move("240","530","90","35",null,null);

                p.btn_fileDown.move("670","416","90","34",null,null);

                p.txt_Title.move("169","65","288","35",null,null);

                p.txt_Content.move("169","145","591","198",null,null);

                p.btn_addFile.move("670","451","90","34",null,null);

                p.btn_deleteFile.move("670","486","90","34",null,null);

                p.btn_deleteBoard.move("337","530","90","35",null,null);

                p.cal_Dtm.move("588","65","171","35",null,null);

                p.btn_addContentPhoto.move("575","355","90","35",null,null);

                p.ImageViewer00.move("169","395","590","11",null,null);

                p.btn_delContentPhoto.move("670","355","90","35",null,null);

                p.edt_filename.move("169","355","401","35",null,null);

                p.stt_img.move("11","355","149","35",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
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
        // 화면 온로드
        this.board_upload_onload = function(obj,e)
        {
        	this.fnOnload();

        	// 해당 게시번호에 해당하는 이미지가 있을 시 이미지 표현
        	if (this.ds_contentFile.getColumn(0, "IMAGE") == null || this.ds_contentFile.getColumn(0, "IMAGE") == "" || this.ds_contentFile.getColumn(0, "IMAGE") == "undefined") {
        	} else {
        		setTimeout(function(){
        			trace(this.ds_contentFile.getColumn(0,"IMAGE") + "@@@@@@@@@@@@@@@@@@@@@");
        			this.edt_filename.set_value(this.ds_contentFile.getColumn(0, "IMAGE"));
        			this.showFirstImagePreview(this.ds_contentFile.getColumn(0,"IMAGE"))	;
        		}.bind(this), 500);

        		trace("@@daslkfa;skdfajskdjfl;aksjdlk;fjal;sdjf");
        		console.log(this.ds_contentFile.getColumn(0, "IMAGE"));

        		this.ImageViewer00.set_visible(true);

        		this.adjustTextareaHeight();
        	}

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

        	trace(this.ds_contentFile.saveXML());
        };

        // 전자정부 프레임워크로 board_code 전달하는 함수
        this.fnSendBoardCode = function(BOARD_CODE) {
            var strSvcId    = "selectBoard";
            var strSvcUrl   = "svc::selectBoard.do";
            var inData      = "";
            var outData     = "ds_board=ds_board ds_file=ds_file ds_contentFile=ds_contentFile";  // 결과를 받을 데이터셋
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

        		// JSP를 통해 POST 방식으로 로컬 폴더(D:/upload/)로 업로드)
        		this.FileUpTransfer00.upload('http://localhost:8082/HanaUIS/fileupload.jsp'); // 첨부파일
        		this.FileUpTransfer01.upload('http://localhost:8082/HanaUIS/fileupload.jsp'); // 본문 이미지 한장

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
            var callBackFnc = "fnCallbackDeleteBoard";
            var isAsync     = isAsync;

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

        this.fnCallbackDeleteBoard = function(svcID, errorCode, errorMsg) {
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
        	var onChanged = this.confirm("변경 사항은 저장되지 않습니다. 창을 닫으시겠습니까?");
        		if (onChanged) {
        			this.close();
        		}
        };


        /************************************************************************
         * 							본문 이미지 첨부
         ************************************************************************/

        // 이미지 등록에 따라 컴포넌트 높이를 조정하는 함수
        this.adjustTextareaHeight = function() {

        	//this.set_height(720); // 폼 길이 초기화

        	// 기준이 될 content tarea
        	var contentY = this.txt_Content.getOffsetBottom();  // TextArea의 하단 y 좌표

        	if (this.ImageViewer00.visible) {
        		this.edt_filename.set_top(contentY + 10);
        		this.btn_addContentPhoto.set_top(this.edt_filename.getOffsetTop());
        		this.btn_delContentPhoto.set_top(this.edt_filename.getOffsetTop());
        		this.stt_img.set_top(this.edt_filename.getOffsetTop());

        		this.ImageViewer00.set_top(this.edt_filename.getOffsetBottom() + 5);

        		this.grd_file.set_top(this.ImageViewer00.getOffsetBottom() + 20);
        		this.stt_file.set_top(this.grd_file.getOffsetTop());
        		this.btn_fileDown.set_top(this.grd_file.getOffsetTop());
        		this.btn_addFile.set_top(this.grd_file.getOffsetTop() + 35);
        		this.btn_deleteFile.set_top(this.grd_file.getOffsetTop() + 70);

        		this.btn_updateBoard.set_top(this.grd_file.getOffsetBottom() + 10);
        		this.btn_deleteBoard.set_top(this.grd_file.getOffsetBottom() + 10);
        		this.btn_closeBoard.set_top(this.grd_file.getOffsetBottom() + 10);

        		this.stt_img.set_height(this.ImageViewer00.height + this.edt_filename.height + 10);

        		this.resetScroll();
        	}
        		else if (this.ImageViewer00.visible == false) {

        		this.edt_filename.set_top(contentY + 10);
        		this.btn_addContentPhoto.set_top(this.edt_filename.getOffsetTop());
        		this.btn_delContentPhoto.set_top(this.edt_filename.getOffsetTop());
        		this.stt_img.set_top(this.edt_filename.getOffsetTop());

        		this.grd_file.set_top(this.edt_filename.getOffsetBottom() + 20);
        		this.stt_file.set_top(this.grd_file.getOffsetTop());
        		this.btn_fileDown.set_top(this.grd_file.getOffsetTop());
        		this.btn_addFile.set_top(this.grd_file.getOffsetTop() + 35);
        		this.btn_deleteFile.set_top(this.grd_file.getOffsetTop() + 70);

        		this.btn_updateBoard.set_top(this.grd_file.getOffsetBottom() + 10);
        		this.btn_deleteBoard.set_top(this.grd_file.getOffsetBottom() + 10);
        		this.btn_closeBoard.set_top(this.grd_file.getOffsetBottom() + 10);

        		this.stt_img.set_height(this.edt_filename.height);

        		this.resetScroll();
        	}
        };


        // 본문 사진 첨부

        this.btn_addContentPhoto_onclick = function(obj,e)
        {
        	this.FileDialog01.open('contentPhoto', FileDialog.LOAD);
        };

        // 파일 확장자 제한 함수
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
        	//초기화
        	this.btn_delContentPhoto_onclick;

        	this.addFileList2(e.virtualfiles);
        	var name = e.virtualfiles[0].filename;
        	this.ds_contentFile.addRow();
        	this.ds_contentFile.setColumn(0, "IMAGE", e.virtualfiles[0].filename);
        	trace(this.ds_contentFile.saveXML());

        	this.edt_filename.set_value(name);

        	this.ImageViewer00.set_visible(true); //본문 이미지 보이기

        	this.adjustTextareaHeight();


        	setTimeout(function(){
        		this.addFileList2(e.virtualfiles);
        		//var imgName = this.ds_contentFile.getColumn(0, "IMAGE");
        		var imgName = e.virtualfiles[0].filename;
        		this.showImagePreview(imgName);
        	}.bind(this), 2500); // 2500ms 뒤 실행

        	trace(this.ds_contentFile.saveXML());


        	if (this.ds_contentFile.rowcount > 1) {
        		this.ds_contentFile.deleteRow(1);
        	}
        };

        // 이미지 미리보기 함수 -- onload 시
        this.showFirstImagePreview = function(fileName) {
        	trace(fileName);
            var encodedFileName = encodeURIComponent(fileName); // 파일 이름 URL 인코딩
            var imagePath = "http://localhost:8082/HanaUIS/showFile.jsp?filename=" + encodedFileName; // 업로드한 파일 경로
            this.ImageViewer00.set_image("url('" + imagePath + "')"); // ImageViewer에 이미지 설정

        };

        // 이미지 미리보기 함수 -- 수정 시
        this.showImagePreview = function(fileName) {
        	trace("이미지 미리보기 진입");
        	trace(fileName + "@@@@@@@@@@22changed");
            var encodedFileName = encodeURIComponent(fileName); // 파일 이름 URL 인코딩
            var imagePath = "http://localhost:8082/HanaUIS/showFile.jsp?filename=" + encodedFileName +"&type=view"	; // 업로드한 파일 경로
            this.ImageViewer00.set_image("url('" + imagePath + "')"); // ImageViewer에 이미지 설정

        	setTimeout(function(){
         		this.deleteFile(fileName);
         	}.bind(this), 5000); // 5초 후 삭제
        };

        //파일 삭제 기능
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

        //파일 리스트를 받기
        this.addFileList2 = function(filelist) {
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
        	this.FileUpTransfer01.clearFileList();
            this.FileUpTransfer01.addFile(vFile.filename, vFile);
            this.FileUpTransfer01.upload("http://localhost:8082/HanaUIS/showfileupload.jsp"); // JSP 파일 경로

        }

        this.ImageViewer00_onload = function(obj,e)
        {
        	trace('이미지 온로드 시작');
        	this.fnContImg(obj, e);

        	this.adjustTextareaHeight();
        };


        this.fnContImg = function(obj, e) {
        	// 본문 textarea의 너비 (본문이 존재하는 경우에만 적용)
        	var textareaWidth = this.txt_Content.width;
        	console.log("기능타냐 ");

        	obj.set_stretch("none");

        	// 실제 이미지의 원본 너비와 높이를 가져옴
        	var imgWidth = obj.imagewidth;
        	var imgHeight = obj.imageheight;

        	console.log(imgHeight);

        	// 이미지가 본문 textarea보다 가로가 크지 않도록 제한
        	var newWidth = textareaWidth;
        	var newHeight = (textareaWidth * imgHeight) / imgWidth;

        	// 이미지가 텍스트 영역보다 크면 크기를 줄임
        	obj.set_width(newWidth);   // 가로 크기 조정
        	obj.set_height(newHeight); // 세로는 비율에 맞게 자동 조정

        	obj.set_stretch("fit");

        	// 기준이 될 content tarea
        	var contentY = this.txt_Content.getOffsetBottom();  // TextArea의 하단 y 좌표

        	obj.set_top(contentY + 5);

        	trace(this.ds_file.saveXML());
        	this.resetScroll();
        };


        // 본문 사진 삭제
        this.btn_delContentPhoto_onclick = function(obj,e)
        {
        	this.deleteFile(this.ds_contentFile.getColumn(0, "IMAGE"));

        	if (this.ds_contentFile.getColumn(0, "IMAGE") == null || this.ds_contentFile.getColumn(0, "IMAGE") == "" || this.ds_contentFile.getColumn(0, "IMAGE") == "undefined") {
        		alert("본문에 들어간 파일이 없습니다.");
        	} else {
        		this.deleteFile(this.ds_contentFile.getColumn(0, "IMAGE"));

        		this.edt_filename.set_value("");
        		this.ImageViewer00.set_visible(false);
        		this.ImageViewer00.set_image(null);

        		this.adjustTextareaHeight();
        	}
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
            this.txt_Content.addEventHandler("onchanged",this.txt_Content_onchanged,this);
            this.btn_addFile.addEventHandler("onclick",this.btn_addFile_onclick,this);
            this.btn_deleteFile.addEventHandler("onclick",this.btn_deleteFile_onclick,this);
            this.btn_deleteBoard.addEventHandler("onclick",this.btn_deleteBoard_onclick,this);
            this.btn_addContentPhoto.addEventHandler("onclick",this.btn_addContentPhoto_onclick,this);
            this.ImageViewer00.addEventHandler("onload",this.ImageViewer00_onload,this);
            this.btn_delContentPhoto.addEventHandler("onclick",this.btn_delContentPhoto_onclick,this);
            this.stt_img.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.FileDownTransfer00.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.FileDownTransfer00.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileDialog01.addEventHandler("onclose",this.FileDialog01_onclose,this);
        };
        this.loadIncludeScript("board_detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
