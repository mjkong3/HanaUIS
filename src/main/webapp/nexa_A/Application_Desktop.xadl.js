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
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ID\">00</Col><Col id=\"MENU_NM\">사용자 조회</Col></Row><Row><Col id=\"MENU_ID\">0000</Col><Col id=\"MENU_NM\">학생</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">000000</Col><Col id=\"MENU_NM\">학생 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">MainBase::student.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0001</Col><Col id=\"MENU_NM\">교수</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">000100</Col><Col id=\"MENU_NM\">교수 관리</Col><Col id=\"MENU_PATH\">MainBase::professor.xfdl</Col></Row><Row><Col id=\"MENU_ID\">000101</Col><Col id=\"MENU_NM\">강의 배정</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">01</Col><Col id=\"MENU_NM\">강의</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0100</Col><Col id=\"MENU_NM\">강의</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">010000</Col><Col id=\"MENU_NM\">강의 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">MainBase::course.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0102</Col><Col id=\"MENU_NM\">수강</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">010200</Col><Col id=\"MENU_NM\">수강 신청</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">MainBase::sign_for_class.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0101</Col><Col id=\"MENU_NM\">성적</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">010100</Col><Col id=\"MENU_NM\">성적 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">MainBase::record.xfdl</Col></Row><Row><Col id=\"MENU_ID\">010101</Col><Col id=\"MENU_NM\">성적 통계</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">MainBase::record_static.xfdl</Col></Row><Row><Col id=\"MENU_NM\">공지사항</Col><Col id=\"MENU_ID\">02</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0200</Col><Col id=\"MENU_NM\">공지사항</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">020001</Col><Col id=\"MENU_NM\">공지사항</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">MainBase::board.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_YES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_adminInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ADMIN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REGDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
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
            var frame0 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,this);
            frame0.set_separatesize("100,*");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("TopFrame",null,null,null,null,null,null,"FrameBase::Form_Top.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_showstatusbar("false");
            frame1.set_dragmovetype("none");
            frame1.set_visible("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("FrameBase::Form_Top.xfdl");


            var frame2 = new HFrameSet("HFrameSet00",null,null,null,null,null,null,frame0);
            frame2.set_separatesize("192,*");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"FrameBase::Form_Left.xfdl",frame2);
            frame3.set_showtitlebar("false");
            frame3.set_showstatusbar("false");
            frame3.set_dragmovetype("none");
            frame3.set_visible("false");
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("FrameBase::Form_Left.xfdl");


            var frame4 = new ChildFrame("WorkFrame",null,null,null,null,null,null,"FrameBase::form_login.xfdl",frame2);
            frame4.set_showtitlebar("false");
            frame4.set_showstatusbar("false");
            frame4.set_dragmovetype("none");
            frame2.addChild(frame4.name, frame4);
            frame4.set_formurl("FrameBase::form_login.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
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
        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
