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
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_CODE\" type=\"INT\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"REGDATE\" type=\"DATE\" size=\"256\"/><Column id=\"BOARD_CODE\" type=\"INT\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
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

            obj = new Grid("grd_file","410","464","597","94",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_board");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"595\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파 일\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeBoard","660","624","72","33",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("stt_uploader","412","197","238","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Static02");
            this.addChild(obj.name, obj);

            obj = new Static("stt_detail","410","260","583","189",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static02");
            this.addChild(obj.name, obj);

            obj = new Static("stt_title","412","140","238","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","660","137","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("게시일");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stt_regDate","898","140","218","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Static02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","660","197","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("게시번호");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stt_boardCode","898","200","218","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Static02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fixBoard","580","624","72","33",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("수정");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","stt_title","text","ds_board","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","stt_regDate","text","ds_board","REGDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","stt_uploader","text","ds_board","ADMIN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","stt_boardCode","text","ds_board","BOARD_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","stt_detail","text","ds_board","CONTENT");
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

        	trace(this.ds_board.getColumn(0,"TITLE"));

        	// CODE에 들어있는 FILE 명의 파일을 D://UPLOAD(업로드폴더) 폴더에서 들고오기


        };

        // 전자정부 프레임워크로 board_code 전달하는 함수
        this.fnSendBoardCode = function(BOARD_CODE) {
            var strSvcId    = "selectBoard";
            var strSvcUrl   = "svc::selectBoard.do";
            var inData      = "";
            var outData     = "ds_board=ds_board";  // 결과를 받을 데이터셋
            var strArg      = "id=" + BOARD_CODE;    // board_code 값을 서버로 전달
            var callBackFnc = "fnCallback";
            var isAsync     = false;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************
         * 							이벤트
         ************************************************************************/


        /************************************************************************
         * 							파일 다운로드
         ************************************************************************/

         //fileDownTrans onerror
        this.fileDownTrans_onerror = function(obj,e)
        {
        	trace("error : " + e.errormsg);
        };

        //fileDownTrans onsuccess
        this.fileDownTrans_onsuccess = function(obj,e)
        {
        	trace(e.targetfullpath);
        };

        //파일 다운로드
        this.downloadfile = function(i)
        {
        	this.FileDownTransfer00.clearPostDataList();

        	this.FileDownTransfer00.set_downloadfilename(this.ds_board.getColumn(i, "FILENAME"));

        	this.FileDownTransfer00.setPostData(
        		"filename",
        		this.ds_board.getColumn(i, "FILENAME")
        	);
        	this.FileDownTransfer00.setPostData(
        		"filefolder",
        		"fileSample"
        	);

        	this.FileDownTransfer00.download("http://localhost:8082/HanaUIS/filedownload.jsp");
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.board_upload_onload,this);
            this.Static01_00_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.btn_closeBoard.addEventHandler("onclick",this.btn_addBoard_onclick,this);
        };
        this.loadIncludeScript("board_detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
