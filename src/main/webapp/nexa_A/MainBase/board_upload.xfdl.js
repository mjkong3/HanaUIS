(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("board_upload");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"파일명\" type=\"STRING\" size=\"256\"/><Column id=\"파일용량\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","495","10","264","74",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공지사항 관리");
            obj.set_font("30pt \"gulim\",\"한컴 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","174","134","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","410","137","584","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_textAlign("left");
            obj.set_font("16px/normal \"Gulim\"");
            obj.set_scrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","174","194","172","53",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("작성자");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","174","257","172","197",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("내용");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_01","410","260","584","190",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_textAlign("left");
            obj.set_font("16px/normal \"Gulim\"");
            obj.set_scrolltype("vertical");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","174","460","172","93",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("첨부파일");
            obj.set_textAlign("center");
            obj.set_font("20pt \"Arial\"");
            obj.set_border("0px none, 1px solid, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file","410","464","480","94",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"378\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"파일용량\"/></Band><Band id=\"body\"><Cell text=\"bind:파일명\"/><Cell col=\"1\" text=\"bind:파일용량\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addFile","900","464","94","42",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("파일 첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteFile","900","516","94","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("파일 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addBoard","630","624","72","33",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("게시");
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
        this.registerScript("board_upload.xfdl", function() {

        /************************************************************************
         * 								파일 업로드							*
         ************************************************************************/

        // 파일 추가 처리 함수
        this.addFileList = function(filelist)
        {
            for (var i = 0, len = filelist.length, vFile; i < len; i++)
            {
                vFile = filelist[i];
                vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
                vFile.addEventHandler("onerror", this.FileList_onerror , this);

                vFile.open(null, 1);
            }
        }

        // 파일 첨부 성공/실패 여부 함수
        this.FileList_onsuccess = function(obj, e)
        {
            switch (e.reason)
            {
                case 1:
                    obj.getFileSize();
                    break;
                case 9:
                    var nRowIdx = this.ds_file.addRow();
                    this.ds_file.setColumn(nRowIdx, 0, obj.filename);
                    this.ds_file.setColumn(nRowIdx, 1, this.cutFileSize(e.filesize));
                    this.FileUpTransfer00.addFile(obj.filename, obj);
                    break;
            }
        }

        // 파일 첨부 처리 오류 함수

        this.FileUpTransfer00_onprogress = function(obj,e)
        {
            this.fn_addlog(e.loaded+"/"+e.total);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
            this.fn_addlog(e.code);
            this.fn_addlog(e.message);
        };

        this.FileUpTransfer00_onerror = function(obj,e)
        {
            this.fn_addlog(e.errormsg);
            this.fn_addlog(e.statuscode);
        };

        // 파일 크기 계산 함수
        this.cutFileSize = function(filesize)
        {
            var sOutput = filesize + " bytes";
            for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
            {
                sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
            }
            return sOutput;
        };

        this.FileList_onerror = function(obj, e)
        {
            trace("errortype: "+e.errortype);
            trace("errormsg: "+e.errormsg);
            trace("statuscode: "+e.statuscode);
        }


        /************************************************************************
         *  					이벤트											*
         ************************************************************************/


        // 파일 첨부 버튼 클릭 시 FileDailog 창 팝업
        this.btn_addFile_onclick = function(obj,e)
        {
        	this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };

        // FileDialog 창 닫을 시에 파일 처리 기능 작동
        this.FileDialog00_onclose = function(obj,e)
        {
            this.addFileList(e.virtualfiles);
        	this.FileUpTransfer00.upload('svc::AdminFileUpload.do');
        };

        // 파일을 그리드에 drop 시 파일 첨부
        this.grd_file_ondrop = function(obj,e)
        {
            this.Grid00.set_opacity(1);
            if(e.datatype == "file")
            {
                this.addFileList(e.filelist);
        		this.FileUpTransfer00.upload('svc::AdminFileUpload.do');
            }
        };


        this.btn_addBoard_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static01_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.Static01_00_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.grd_file.addEventHandler("onclick",this.grd_file_onclick,this);
            this.grd_file.addEventHandler("ondrop",this.grd_file_ondrop,this);
            this.btn_addFile.addEventHandler("onclick",this.btn_addFile_onclick,this);
            this.btn_addBoard.addEventHandler("onclick",this.btn_addBoard_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("board_upload.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
