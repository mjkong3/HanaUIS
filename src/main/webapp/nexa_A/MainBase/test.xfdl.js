(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_grid_11");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Name\" type=\"STRING\" size=\"256\"/><Column id=\"Address\" type=\"STRING\" size=\"256\"/><Column id=\"Company\" type=\"STRING\" size=\"256\"/><Column id=\"Department\" type=\"STRING\" size=\"256\"/><Column id=\"Salary\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Name\">John</Col><Col id=\"Address\">Seoul, KOREA</Col><Col id=\"Company\">1dollar</Col><Col id=\"Department\">Sales</Col><Col id=\"Salary\">15000</Col></Row><Row><Col id=\"Name\">James</Col><Col id=\"Address\">Barcelona, Spain</Col><Col id=\"Company\">EBOT</Col><Col id=\"Department\">Consulting</Col><Col id=\"Salary\">25000</Col></Row><Row><Col id=\"Name\">Donald</Col><Col id=\"Address\">Califonia, USA</Col><Col id=\"Company\">EBOT</Col><Col id=\"Department\">Research Institute</Col><Col id=\"Salary\">1000000</Col></Row><Row><Col id=\"Name\">Lisa</Col><Col id=\"Address\">London, United Kingdom</Col><Col id=\"Company\">1dollar</Col><Col id=\"Department\">Quality Assurance</Col><Col id=\"Salary\">3000</Col></Row><Row><Col id=\"Name\">Joe</Col><Col id=\"Address\">São Paulo, Brazil</Col><Col id=\"Company\">hangul</Col><Col id=\"Department\">Quality Assurance</Col><Col id=\"Salary\">8600</Col></Row><Row><Col id=\"Name\">Michael</Col><Col id=\"Address\">Mumbai, India</Col><Col id=\"Company\">1dollar</Col><Col id=\"Department\">Quality Assurance</Col><Col id=\"Salary\">1300</Col></Row><Row><Col id=\"Name\">Lilli</Col><Col id=\"Address\">Ankara, Turkey</Col><Col id=\"Company\">hangul</Col><Col id=\"Department\">Quality Assurance</Col><Col id=\"Salary\">4400</Col></Row><Row><Col id=\"Name\">Colt</Col><Col id=\"Address\">Sydney, NSW, Australia </Col><Col id=\"Company\">hangul</Col><Col id=\"Department\">R&amp;D</Col><Col id=\"Salary\">62000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_apply","32","272","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("applyChange");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset","160","272","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Reset");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","32","40","560","211",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("none");
            obj.set_autosizebandtype("body");
            obj.getSetter("text").set("");
            obj.set_autoenter("none");
            obj.set_fillareatype("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("none");
            obj.set_cellmovingtype("none");
            obj.set_cellsizebandtype("body");
            obj.set_border("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Name\" border=\"\"/><Cell col=\"1\" text=\"Address\" border=\"\"/><Cell col=\"2\" text=\"Company\" border=\"\"/><Cell col=\"3\" text=\"Department\" border=\"\"/><Cell col=\"4\" text=\"Salary\" border=\"\"/></Band><Band id=\"body\"><Cell text=\"bind:Name\" textAlign=\"left\" suppress=\"0\" border=\"\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:Address\" textAlign=\"left\" wordWrap=\"char\" border=\"\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:Company\" textAlign=\"left\" suppress=\"0\" border=\"\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Department\" textAlign=\"left\" wordWrap=\"english\" suppress=\"0\" border=\"\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:Salary\" displaytype=\"currency\" textAlign=\"right\" border=\"\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","329","274","342","151",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","595","41","242","213",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("test.xfdl", function() {
        this.btn_apply_onclick = function(obj,e)
        {
        	this.Dataset00.applyChange();
        };

        this.btn_reset_onclick = function(obj,e)
        {
        	this.Dataset00.reset();
        };

        this.TextArea00_oninput = function(obj,e)
        {
          var maxlen = 20;

          this.TextArea00.set_scrolltype("both");
          var nMax = this.TextArea00.vscrollbar.max;
          this.TextArea00.set_scrolltype("none");

          var nHeight = this.TextArea00.getOffsetHeight();
          var nFullHeight = nHeight + nMax;

          trace(nFullHeight); // 스크롤바 영역을 포함한 Height 값
          this.TextArea00.set_height(nFullHeight);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sample_grid_11_onload,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.TextArea00.addEventHandler("oninput",this.TextArea00_oninput,this);
            this.TextArea00.addEventHandler("onchanged",this.TextArea00_onchanged,this);
        };
        this.loadIncludeScript("test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
