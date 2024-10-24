(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLeft", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("gridLeftMenu","0","50","100%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsLeft");
            obj.set_treeinitstatus("collapse,null");
            obj.set_treeusecheckbox("false");
            obj.set_visible("false");
            obj.set_treeusebutton("noclick");
            obj.set_treeuseimage("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"190\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\" treestartlevel=\"1\" text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout","0","30","192","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("로그아웃");
            obj.set_border("1px none darkblue, 1px solid darkblue, 1px solid darkblue, 1px none darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("stc_admin","0","0","192","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_border("1px solid darkblue");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",200,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {

        this.Form_Left_onload = function(obj,e)
        {
          //메뉴가져오는 함수 호출
          this.fnGetLeftMenu();

        };

        this.fnGetLeftMenu = function (sMenuId)
        {
           //글로벌 데이터셋 gdsMenu 가져오기
          var objApp = nexacro.getApplication();
          var objDsMenu = objApp.gdsMenu;

          //선택된 0레벨 메뉴의 하위 메뉴정보로 필터링
          objDsMenu.filter("MENU_ID.indexOf('"+sMenuId+"') == 0 && MENU_LEVEL > 0");

          //필터 처리된 데이터셋을 복사
          this.dsLeft.copyData(objDsMenu,true);

          //필터링 없애기
          objDsMenu.filter("");
        };

        this.gridLeftMenu_oncellclick = function(obj,e)
        {

        //글로벌 데이터셋 gdsOpenMenu 가져오기
        	var objApp = nexacro.getApplication();
        	var objDsOpenMenu = objApp.gdsOpenMenu;

        	//그리드에 바인딩 된 데이터셋으로 가져오기
        	var objDsMenu = obj.getBindDataset();
        	var sMenuId = objDsMenu.getColumn(e.row, "MENU_ID");

        	if(sMenuId.length == 4){
        		var RowTree = this.gridLeftMenu.getTreeRow(e.row); // 현재 상태 가져오기
        		var Status = this.gridLeftMenu.getTreeStatus(RowTree);

        		if(Status ==3) return;
        		Status = (Status == 0 ? 1 : 0);
        		this.gridLeftMenu.setTreeStatus(RowTree, Status);
        	}
        	else if(sMenuId.length == 6){
        		//업무 화면 여는 함수 호출
        		this.fnOpenMenu(sMenuId);
        	}
        	else{
        		alert("오류가 발생했습니다.");
        	}


        };

        this.fnOpenMenu = function (sMenuId)
        {
          var objApp = nexacro.getApplication();

           //메뉴 데이터셋 가져오기
           var objDsMenu = this.gridLeftMenu.getBindDataset();
           //글로벌 데이터셋 gdsOpenMenu 가져오기
           var objDsOpenMenu = objApp.gdsOpenMenu;

           //오픈할 메뉴 정보 가져오기
           var nFRow = objDsMenu.findRow("MENU_ID",sMenuId);
           var sMenuPath = objDsMenu.getColumn(nFRow, "MENU_PATH");

           objApp.mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl(sMenuPath);

        };


        this.btn_logout_onclick = function(obj,e)
        {
        	if(confirm("로그아웃 하시겠습니까?")){
        		var gdsAd = nexacro.getApplication();
        		gdsAd.gds_adminInfo.clearData();
        		gdsAd.gds_adminInfo.addRow();

        		this.stc_admin.set_text("");

        		var objApp = nexacro.getApplication();
        		objApp.mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl("FrameBase::form_login.xfdl");
        		objApp.mainframe.VFrameSet00.TopFrame.set_visible(false);
        		objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.set_visible(false);

        		trace(gdsAd.gds_adminInfo.getColumn(0, "ADMIN_CODE"));
        		trace(gdsAd.gds_adminInfo.getColumn(0, "NAME"));
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.gridLeftMenu.addEventHandler("oncellclick",this.gridLeftMenu_oncellclick,this);
            this.btn_logout.addEventHandler("onclick",this.btn_logout_onclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
