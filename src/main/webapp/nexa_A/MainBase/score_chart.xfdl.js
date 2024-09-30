(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("score_chart");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_chart", this);
            obj._setContents("<ColumnInfo><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"중간\" type=\"STRING\" size=\"256\"/><Column id=\"기말\" type=\"STRING\" size=\"256\"/><Column id=\"과제\" type=\"STRING\" size=\"256\"/><Column id=\"합산\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"등급\">F</Col><Col id=\"중간\">5</Col><Col id=\"기말\">4</Col><Col id=\"과제\">7</Col><Col id=\"합산\">5</Col></Row><Row><Col id=\"등급\">D</Col><Col id=\"중간\">5</Col><Col id=\"기말\">1</Col><Col id=\"과제\">7</Col><Col id=\"합산\">10</Col></Row><Row><Col id=\"등급\">C</Col><Col id=\"중간\">5</Col><Col id=\"기말\">4</Col><Col id=\"과제\">5</Col><Col id=\"합산\">12</Col></Row><Row><Col id=\"등급\">B</Col><Col id=\"중간\">4</Col><Col id=\"기말\">5</Col><Col id=\"과제\">2</Col><Col id=\"합산\">4</Col></Row><Row><Col id=\"등급\">A</Col><Col id=\"중간\">5</Col><Col id=\"기말\">7</Col><Col id=\"과제\">6</Col><Col id=\"합산\">7</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","230","109","870","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#004AAD");
            obj.set_border("0px none darkcyan");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Dept","50","10","110","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPARTMENT_CODE");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_Class","220","10","110","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_class");
            obj.set_codecolumn("CLASS_CODE");
            obj.set_datacolumn("CLASS_NAME");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","18","10","32","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("학과");
            obj.set_color("WHITE");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","178","10","32","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("강의");
            obj.set_color("WHITE");
            this.Div00.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","190","170","910","440",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_chart");
            obj.set_visible("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "등급별 인원분포",
            		"textfont": "15pt/normal \"HY헤드라인M\"",
            		"padding": "0px 0px 5px",
            		"align": "bottomcenter"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"markertype": "circle",
            		"align": "bottomcenter"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "bold 11pt/normal \"맑은 고딕\"",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"visible": true
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "bold 10pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "중간",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:중간",
            			"highlightbarvisible": "true",
            			"barlinestyle": "1px solid #3182bd",
            			"barfillstyle": "#3182bd",
            			"highlightbarlinestyle": "1px solid #3182bd",
            			"highlightbarfillstyle": "#3182bd"
            		},
            		{
            			"id": "series1",
            			"titletext": "기말",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:기말",
            			"highlightbarvisible": "true",
            			"barlinestyle": "1px solid #6baed6",
            			"barfillstyle": "#6baed6",
            			"highlightbarlinestyle": "1px solid #6baed6",
            			"highlightbarfillstyle": "#6baed6"
            		},
            		{
            			"id": "series2",
            			"titletext": "과제",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:과제",
            			"highlightbarvisible": "true",
            			"barlinestyle": "1px solid #9ecae1",
            			"barfillstyle": "#9ecae1",
            			"highlightbarlinestyle": "1px solid #9ecae1",
            			"highlightbarfillstyle": "#9ecae1"
            		},
            		{
            			"id": "series3",
            			"titletext": "합산",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:합산",
            			"highlightbarvisible": "true",
            			"barlinestyle": "1px solid #c6dbef",
            			"barfillstyle": "#c6dbef",
            			"highlightbarlinestyle": "1px solid #c6dbef",
            			"highlightbarfillstyle": "#c6dbef",
            			"linevisible": "true",
            			"pointvisible": "true"
            		}
            	]
            });
            obj.set_categorycolumn("bind:등급");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","445","-5","344","104",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("성 적 통 계");
            obj.set_textAlign("center");
            obj.set_font("30px/normal \"HY헤드라인M\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("score_chart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
