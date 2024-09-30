(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test11");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"중간\" type=\"STRING\" size=\"256\"/><Column id=\"기말\" type=\"STRING\" size=\"256\"/><Column id=\"레포트\" type=\"STRING\" size=\"256\"/><Column id=\"합산\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"등급\">A</Col><Col id=\"중간\">10</Col><Col id=\"기말\">11</Col><Col id=\"레포트\">4</Col><Col id=\"합산\">7</Col></Row><Row><Col id=\"등급\">B</Col><Col id=\"중간\">10</Col><Col id=\"기말\">5</Col><Col id=\"레포트\">4</Col><Col id=\"합산\">6</Col></Row><Row><Col id=\"등급\">C</Col><Col id=\"중간\">5</Col><Col id=\"기말\">6</Col><Col id=\"레포트\">5</Col><Col id=\"합산\">8</Col></Row><Row><Col id=\"등급\">D</Col><Col id=\"중간\">5</Col><Col id=\"기말\">1</Col><Col id=\"레포트\">6</Col><Col id=\"합산\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">중간</Col><Col id=\"DATA\">중간</Col></Row><Row><Col id=\"CODE\">기말</Col><Col id=\"DATA\">기말</Col></Row><Row><Col id=\"CODE\">과제</Col><Col id=\"DATA\">과제</Col></Row><Row><Col id=\"CODE\">최종</Col><Col id=\"DATA\">최종</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","515","60","585","430",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"useiteminvisible": "true"
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": "false"
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": "false"
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
            		"titletext": "등급",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "11pt '맑은 고딕'",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:중간"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:기말"
            		},
            		{
            			"id": "series2",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:레포트"
            		},
            		{
            			"id": "series3",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:합산",
            			"linevisible": "false"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"titletext": "인원",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"visible": "true"
            		}
            	]
            });
            obj.set_categorycolumn("bind:등급");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","173","108","297","72",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("BLUE");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","12","4","95","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","122","4","95","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","11","45","222","17",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_background("WHITE");
            obj.set_innerdataset("Dataset01");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_columncount("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","7","37","288","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Static00");
            obj.set_border("2px solid crimson, 0px none, 0px none");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","177","183","289","257",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj._setContents("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("test11.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	Application.gdsSession.set_item("regDate", this.ds_date.getColumn(0, "regDate"));
        	trace(gdsSession.get_id(0));
        };

        this.TextArea00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("test11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
