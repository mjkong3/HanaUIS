(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ID\">00</Col><Col id=\"MENU_NM\">사용자 조회</Col></Row><Row><Col id=\"MENU_ID\">0000</Col><Col id=\"MENU_NM\">학생</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">000000</Col><Col id=\"MENU_NM\">학생 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">MainBase::student.xfdl</Col></Row><Row><Col id=\"MENU_ID\">000001</Col><Col id=\"MENU_NM\">휴복학 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">MainBase::student_status.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0001</Col><Col id=\"MENU_NM\">교수</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">000100</Col><Col id=\"MENU_NM\">교수 관리</Col><Col id=\"MENU_PATH\">MainBase::professor.xfdl</Col></Row><Row><Col id=\"MENU_ID\">000101</Col><Col id=\"MENU_NM\">강의 배정</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">01</Col><Col id=\"MENU_NM\">강의</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0100</Col><Col id=\"MENU_NM\">강의</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">010000</Col><Col id=\"MENU_NM\">강의 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">MainBase::classInfo.xfdl</Col></Row><Row><Col id=\"MENU_ID\">010001</Col><Col id=\"MENU_NM\">강의실 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">MainBase::classroom.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0102</Col><Col id=\"MENU_NM\">수강</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">010200</Col><Col id=\"MENU_NM\">수강 신청</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">MainBase::sign_for_class.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0101</Col><Col id=\"MENU_NM\">성적</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">010100</Col><Col id=\"MENU_NM\">성적 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">MainBase::score_list.xfdl</Col></Row><Row><Col id=\"MENU_ID\">010101</Col><Col id=\"MENU_NM\">성적 통계</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">MainBase::score_chart.xfdl</Col></Row><Row><Col id=\"MENU_NM\">공지사항</Col><Col id=\"MENU_ID\">02</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0200</Col><Col id=\"MENU_NM\">공지사항</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">020001</Col><Col id=\"MENU_NM\">공지사항</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">MainBase::board_main.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_YES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_adminInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ADMIN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","1000",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("TopLeftFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("Application_Desktop.xadl", function() {

        this.Application_onload = function(obj,e)
        {
        	//공통 FrameSet/Frame에 직접접근을 위한 변수 선언

          //메인프레인 안에 첫 번째 VFrameSet
          nexacro.VFrameSet00 = this.mainframe.VFrameSet00;

          //VFrameSet00 안에 TopFrame
          nexacro.TopFrame = this.mainframe.VFrameSet00.TopFrame;

          //VFrameSet00 HFrameSet00
          nexacro.HFrameSet00 = this.mainframe.VFrameSet00.HFrameSet00;
          //HFrameSet00 안에 LeftFrame
          nexacro.LeftFrame = this.mainframe.VFrameSet00.HFrameSet00.LeftFrame;

          //VFrameSet00 안에 WorkFrame
          nexacro.WorkFrame = this.mainframe.VFrameSet00.HFrameSet00.WorkFrame;
        };



        });
		this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::btn_Menu.xcss");
    };
}
)();
