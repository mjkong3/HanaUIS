(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("board_main");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("boardList_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CRE_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("search_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("searchType_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATA\">전체</Col><Col id=\"CODE\">ALL</Col></Row><Row><Col id=\"DATA\">게시판 코드</Col><Col id=\"CODE\">BOARD_CODE</Col></Row><Row><Col id=\"CODE\">BOARD_TITLE</Col><Col id=\"DATA\">제목</Col></Row><Row><Col id=\"CODE\">BOARD_POSTER</Col><Col id=\"DATA\">작성자</Col></Row><Row><Col id=\"CODE\">BOARD_CRE_DTM</Col><Col id=\"DATA\">게시 날짜</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stt_board","65","35","172","51",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공지사항");
            obj.set_font("bold 42px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_board","65","150","1150","370",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("boardList_ds");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"238\"/><Column size=\"478\"/><Column size=\"196\"/><Column size=\"203\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"게시번호\"/><Cell col=\"1\" text=\"제 목\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"게시 날짜\"/></Band><Band id=\"body\"><Cell text=\"bind:BOARD_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CRE_DTM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","1100","100","115","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","933","103","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","780","100","135","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("searchType_ds");
            obj.set_datacolumn("DATA");
            obj.set_codecolumn("CODE");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","1115","540","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("공지사항 등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_Search","value","search_ds","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("board_main.xfdl", function() {
        /************************************************************************
         *
         ************************************************************************/

        //콜백 함수

        // this.fnCallback = function(svcID,errorCode,errorMsg)
        // {
        // 	// 에러 시 화면 처리 내역
        // 	if(errorCode == -1)
        // 	{
        // 		this.alert(errorMsg);
        // 		return;
        // 	}
        //
        // 	switch(svcID)
        // 	{
        // 		case "selectCodeMst":
        // 			break;
        //  		case "saveCodeMst":
        //  			this.fnSearch();
        //  			break;
        //  		case "deleteCodeMst":
        //  			this.fnSearch();
        //  			break;
        //  		case "saveCodeDTL":
        //  			this.fnSearchDTL();
        //  			break;
        //  		case "deleteCodeDTL":
        //  			this.fnSearchDTL();
        //  			break;
        // 		default :
        // 			break;
        // 	}
        // };

        // 팝업콜백 함수
        this.fn_popupCallback = function(strPopupID, strReturn)
        {
            if(strPopupID == undefined){
                return;
            }

            if(strPopupID == "popupWork"){
        // 		this.ds_dtl.setColumn(this.ds_dtl.rowposition, "COL_TXT", this.ds_dtl_selected.getColumn(0, "COL_TXT"));
        // 		this.ds_dtl.setColumn(this.ds_dtl.rowposition, "COL_CHK", this.ds_dtl_selected.getColumn(0, "COL_CHK"));
        // 		this.ds_dtl.setColumn(this.ds_dtl.rowposition, "COL_NUM", this.ds_dtl_selected.getColumn(0, "COL_NUM"));
        // 		this.ds_dtl.setColumn(this.ds_dtl.rowposition, "COL_DTE", this.ds_dtl_selected.getColumn(0, "COL_DTE"));
        // 		this.ds_dtl.setColumn(this.ds_dtl.rowposition, "COL_CBO", this.ds_dtl_selected.getColumn(0, "COL_CBO"));

                this.alert("Return Value: " + strReturn);
        		//this.board_main_onload();
            }
        	trace("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2");
        	this.board_main_onload();
        };


        //화면 로딩 시 기능
        this.board_main_onload = function(obj,e)
        {
        	this.search_ds.setColumn(0,"SEARCH_TYPE","ALL");
        	//this.boardList_ds.setColumn(0,"REGDATE", setformatDate(this.boardList_ds.getColumn(0,"REGDATE"), "yy-MM-dd", "en_US"));

        	this.fnSearch();
        };

        /************************************************************************
         * 							기능
         ************************************************************************/

        // 검색 기능
        this.fnSearch = function() {

        	var strSvcId    = "selectBoardList";
        	var strSvcUrl   = "svc::selectBoardList.do";
        	var inData      = "search_ds=search_ds"; //보내는 ds
        	var outData     = "boardList_ds=boardList_ds"; //받는 ds
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************
         *          				특별 이벤트 짜잔
         ************************************************************************/

        // 버튼 이벤트
        this.btn_Search_onclick = function(obj,e)
        {
        	 this.fnSearch();
        };

        this.grd_board_oncelldblclick = function(obj,e)
        {
        	var boardCode = this.boardList_ds.getColumn(this.boardList_ds.rowposition, "BOARD_CODE");
        	var NAME = this.boardList_ds.getColumn(this.boardList_ds.rowposition, "NAME");
        	var objParam = {BOARD_CODE: boardCode, NAME: NAME};

        	var surl = "MainBase::board_detail.xfdl";
        	this.showPopup(objParam, surl);
        };

        this.btn_add_onclick = function(obj,e)
        {
        // 	var objParam = {
        // 				COL_TXT:this.ds_dtl.getColumn(this.ds_dtl.rowposition, "COL_TXT")
        // 			  , COL_CHK:this.ds_dtl.getColumn(this.ds_dtl.rowposition, "COL_CHK")
        // 			  , COL_NUM:this.ds_dtl.getColumn(this.ds_dtl.rowposition, "COL_NUM")
        // 			  , COL_DTE:this.ds_dtl.getColumn(this.ds_dtl.rowposition, "COL_DTE")
        // 			  , COL_CBO:this.ds_dtl.getColumn(this.ds_dtl.rowposition, "COL_CBO")};
        	var surl = "MainBase::board_upload.xfdl";
        	var objParam;
        	this.showPopup(objParam, surl);
        };

        	// 팝업 설정 및 호출
        this.showPopup = function (objParam, surl)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("popupWork", 0, 0, 800, 700, null, null, surl);
        	popup.set_dragmovetype("none");
        	popup.set_layered("true");
        	popup.set_autosize(true);
        	popup.set_showtitlebar("Popup Title");
        	popup.set_showstatusbar(true);
        	popup.set_resizable(true);
        	popup.set_openalign("center middle");
        	popup.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback", true);
         	//popup.style.set_overlaycolor("#6666664C");
         	//popup.form.style.set_border("1 solid #4c5a6f");

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.board_main_onload,this);
            this.grd_board.addEventHandler("oncelldblclick",this.grd_board_oncelldblclick,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.cmb_Search.addEventHandler("onitemchanged",this.cmb_Search_onitemchanged,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.boardList_ds.addEventHandler("onvaluechanged",this.boardList_ds_onvaluechanged,this);
        };
        this.loadIncludeScript("board_main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
