(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample02");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00","0","0","465","435",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"114\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사용자 조회\"/><Cell col=\"1\" text=\"학과별로\" textAlign=\"center\" verticalAlign=\"middle\"/></Band><Band id=\"body\"><Cell text=\"affa\"/><Cell col=\"1\"/><Cell row=\"1\" text=\"asfaf\"/><Cell row=\"1\" col=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","470","0","483","525",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"133\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"안녕하세요\"/><Cell col=\"1\" text=\"asdad\"/></Band><Band id=\"body\"><Cell text=\"asfaf\"/><Cell col=\"1\" text=\"asdasd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,620,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("record_static.xfdl", function() {
        this.frmWork_onload = function(obj,e)
        {
          //화면 초기화 함수 호출
          this.fnInitForm();
        };

        this.fnInitForm = function ()
        {
          //현재 form이 소속된 부모 frame 반
          var objOwnerFrame = this.getOwnerFrame();

          /*
          workFrame에 Frame이 생성될 떄 추가된 파라미터 정보 가져오기
          (frmLeft form의 fnOpenMenu 함수에서 생성한 Frame에 추가)
          var objParam  = {menunm : sMenuNm,
                                      menupath : sMenuPath
                                      };
          */

          //파라미터 정보 중 메뉴명 가져오기
          var sPageNm = objOwnerFrame.param.menunm;

          //파라미터 정보 중 메뉴경로 가져오기
          var sFormPath= objOwnerFrame.param.menupath;

          //화면 타이틀 설정
          this.staTitle.set_text(sPageNm);
          this.staTitle.set_fittocontents("width");

          //Div 컴포넌트에 화면 URL을 설정
          this.divWork.set_url(sFormPath);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("record_static.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
