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

            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","196","234","864","358",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Bar Chart",
            		"textfont": "20pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt \"맑은 고딕\"",
            		"itemtextcolor": "#4c4c4c"
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12"
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "10pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board"
            	},
            	"crosshair": {
            		"id": "crosshair",
            		"type": "xy",
            		"xlinestyle": "1px solid #525252",
            		"ylinestyle": "1px solid #525252",
            		"tooltiptype": "xy"
            	},
            	"selection": {
            		"id": "selection",
            		"type": "xy",
            		"linestyle": "1px solid #525252",
            		"background": "#525252",
            		"opacity": "0.5"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletext": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt \"맑은 고딕\"",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "11pt \"맑은 고딕\"",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"titletext": "valueaxis",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "65",
            			"barlinestyle": "0px none",
            			"barfillstyle": "#5bbbff",
            			"linevisible": true,
            			"linestyle": "1px solid #0172c3",
            			"linefillstyle": "#1a22bf",
            			"pointvisible": true,
            			"pointsize": "15",
            			"pointlinestyle": "1px solid #0172c3",
            			"pointfillstyle": "#0172c3",
            			"lineareavisible": true,
            			"lineareafillstyle": "rgba(0,148,253,0.3)",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt \"맑은 고딕\"",
            			"autogradation": "none",
            			"barradius": "0"
            		}
            	]
            });
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
