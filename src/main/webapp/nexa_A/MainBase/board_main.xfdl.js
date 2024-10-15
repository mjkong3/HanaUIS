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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATA\">전체</Col><Col id=\"CODE\">ALL</Col></Row><Row><Col id=\"DATA\">게시판 코드</Col><Col id=\"CODE\">BOARD_CODE</Col></Row><Row><Col id=\"CODE\">TITLE</Col><Col id=\"DATA\">제목</Col></Row><Row><Col id=\"CODE\">CRE_USR</Col><Col id=\"DATA\">작성자</Col></Row><Row><Col id=\"CODE\">CRE_DTM</Col><Col id=\"DATA\">게시 날짜</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stt_board","49","10","191","49",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공지 사항");
            obj.set_font("30px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_board","49","70","1151","370",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("boardList_ds");
            obj.set_cssclass("ATEAM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"238\"/><Column size=\"478\"/><Column size=\"196\"/><Column size=\"236\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"게시번호\"/><Cell col=\"1\" text=\"제 목\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"게시 날짜\"/></Band><Band id=\"body\"><Cell text=\"bind:BOARD_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CRE_DTM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","995","39","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","840","39","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","702","39","135","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("searchType_ds");
            obj.set_datacolumn("DATA");
            obj.set_codecolumn("CODE");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","1100","39","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("추가");
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

        // 팝업콜백 함수
        this.fn_popupCallback = function(strPopupID, strReturn)
        {
            if(strPopupID == undefined){
                return;
            }

            if(strPopupID == "popupWork"){
                //this.alert("Return Value: " + strReturn);
        		//this.board_main_onload();
            }
        	this.board_main_onload();
        };


        //화면 로딩 시 기능
        this.board_main_onload = function(obj,e)
        {
        	// 검색 필터링 지정
        	this.search_ds.setColumn(0,"SEARCH_TYPE","ALL");

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
        	trace(this.search_ds.saveXML());
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
        	var surl = "MainBase::board_upload.xfdl";
        	var objParam;
        	this.showPopup(objParam, surl);
        };

        	// 팝업 설정 및 호출
        this.showPopup = function (objParam, surl)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("popupWork", 0, 0, 800, 700, null, null, surl);
        	popup.set_dragmovetype("normal");
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

        // 검색 필터 박스 값
        this.cmb_Search_onitemchanged = function(obj,e)
        {
        	this.search_ds.setColumn(0,"SEARCH_TYPE", this.cmb_Search.value);
        };

        // 엔터 시 검색
        this.board_main_onkeyup = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.btn_Search.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.board_main_onload,this);
            this.addEventHandler("onkeyup",this.board_main_onkeyup,this);
            this.grd_board.addEventHandler("oncelldblclick",this.grd_board_oncelldblclick,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.btn_Search.addEventHandler("onkeyup",this.btn_Search_onkeyup,this);
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
