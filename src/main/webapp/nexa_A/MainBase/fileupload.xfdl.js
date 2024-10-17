(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample05");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList02", this);
            obj._setContents("<ColumnInfo><Column id=\"학번\" type=\"STRING\" size=\"256\"/><Column id=\"비밀번호\" type=\"STRING\" size=\"256\"/><Column id=\"이름\" type=\"STRING\" size=\"256\"/><Column id=\"학년\" type=\"STRING\" size=\"256\"/><Column id=\"연락처\" type=\"STRING\" size=\"256\"/><Column id=\"이메일\" type=\"STRING\" size=\"256\"/><Column id=\"생년월일\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"학적상태\" type=\"STRING\" size=\"256\"/><Column id=\"학과\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"우편번호\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList01", this);
            obj._setContents("<ColumnInfo><Column id=\"학번\" type=\"STRING\" size=\"256\"/><Column id=\"비밀번호\" type=\"STRING\" size=\"256\"/><Column id=\"이름\" type=\"STRING\" size=\"256\"/><Column id=\"학년\" type=\"STRING\" size=\"256\"/><Column id=\"연락처\" type=\"STRING\" size=\"256\"/><Column id=\"이메일\" type=\"STRING\" size=\"256\"/><Column id=\"생년월일\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"학적상태\" type=\"STRING\" size=\"256\"/><Column id=\"학과\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"우편번호\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnExportBasic","280","35","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Export Basic");
            this.addChild(obj.name, obj);

            obj = new Button("btnImportBasic","420","35","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Import Basic");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddItemExport","550","35","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Export Additem");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList01","110","90","520","190",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsList01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"비밀번호\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"학년\"/><Cell col=\"4\" text=\"연락처\"/><Cell col=\"5\" text=\"이메일\"/><Cell col=\"6\" text=\"생년월일\"/><Cell col=\"7\" text=\"성별\"/><Cell col=\"8\" text=\"학적상태\"/><Cell col=\"9\" text=\"학과\"/><Cell col=\"10\" text=\"주소\"/><Cell col=\"11\" text=\"우편번호\"/></Band><Band id=\"body\"><Cell text=\"bind:학번\"/><Cell col=\"1\" text=\"bind:비밀번호\"/><Cell col=\"2\" text=\"bind:이름\"/><Cell col=\"3\" text=\"bind:학년\"/><Cell col=\"4\" text=\"bind:연락처\"/><Cell col=\"5\" text=\"bind:이메일\"/><Cell col=\"6\" text=\"bind:생년월일\"/><Cell col=\"7\" text=\"bind:성별\"/><Cell col=\"8\" text=\"bind:학적상태\"/><Cell col=\"9\" text=\"bind:학과\"/><Cell col=\"10\" text=\"bind:주소\"/><Cell col=\"11\" text=\"bind:우편번호\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList02","110","290","520","190",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsList02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"비밀번호\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"학년\"/><Cell col=\"4\" text=\"연락처\"/><Cell col=\"5\" text=\"이메일\"/><Cell col=\"6\" text=\"생년월일\"/><Cell col=\"7\" text=\"성별\"/><Cell col=\"8\" text=\"학적상태\"/><Cell col=\"9\" text=\"학과\"/><Cell col=\"10\" text=\"주소\"/><Cell col=\"11\" text=\"우편번호\"/></Band><Band id=\"body\"><Cell text=\"bind:학번\"/><Cell col=\"1\" text=\"bind:비밀번호\"/><Cell col=\"2\" text=\"bind:이름\"/><Cell col=\"3\" text=\"bind:학년\"/><Cell col=\"4\" text=\"bind:연락처\"/><Cell col=\"5\" text=\"bind:이메일\"/><Cell col=\"6\" text=\"bind:생년월일\"/><Cell col=\"7\" text=\"bind:성별\"/><Cell col=\"8\" text=\"bind:학적상태\"/><Cell col=\"9\" text=\"bind:학과\"/><Cell col=\"10\" text=\"bind:주소\"/><Cell col=\"11\" text=\"bind:우편번호\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtLog","111","509","524","171",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("fileupload.xfdl", function() {
        /**************************************************************************
        * FORM 변수 선언 영역
        **************************************************************************/
        //nexacro-xeni call url
        this.exportUrl = "http://localhost:8082/HanaUIS/nexa_A/XExportImport";
        this.importUrl = "http://localhost:8082/HanaUIS/nexa_A/XImport";

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/
        /**
        * Function Name : gfnCreateExportObject
        * Description   : create ExcelExportObject and return object
        * Arguments     : pFileName - save file name
        * Return        : objExport - ExcelExportObject
        */
        this.gfnCreateExportObject = function (pFileName)
        {
            var sExportId = "objExcelExport";
            var objExport = this.objects[sExportId];

            if(!this.gfnIsNull(objExport))
            {
                return objExport;
            }

            objExport = new ExcelExportObject();
            objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
            objExport.set_exporturl(this.exportUrl);
            objExport.set_exportfilename(pFileName);

            //add event - onsuccess, onerror
            objExport.addEventHandler("onprogress", this.Export_onprogress, this);
            objExport.addEventHandler("onsuccess", this.Export_onsuccess, this);
            objExport.addEventHandler("onerror", this.Export_onerror, this);

            return objExport;
        };

        /**
        * Function Name : gfnCreateImportObject
        * Description   : create ExcelImportObject and return object
        * Arguments     : none
        * Return        : objImport - ExcelImportObject
        */
        this.gfnCreateImportObject = function ()
        {
            var sImportId = "objExcelImport";
            var objImport = this.objects[sImportId];

            if(!this.gfnIsNull(objImport))
            {
                return objImport;
            }

            objImport = new ExcelImportObject();
            objImport.set_importurl(this.importUrl);
            objImport.set_importtype(nexacro.ImportTypes.EXCEL2007);

            //add event - onsuccess, onerror
            objImport.addEventHandler("onsuccess", this.Import_onsuccess, this);
            objImport.addEventHandler("onerror", this.Import_onerror, this);

            return objImport;
        };

        /**
        * Function Name : gfnBasicExport
        * Description   : Export Basic Export
        * Arguments     : pFileName : save file name
        * Return        : none
        */
        this.gfnBasicExport = function(pFileName)
        {
            var sFileName = "ExportData(BasicExport)";
            if(!this.gfnIsNull(pFileName))
            {
                sFileName = pFileName;
            }

            var objExport = this.gfnCreateExportObject(sFileName);
            var objGrid1 = this.grdList01;
            var objGrid2 = this.grdList02;

            trace("Grid 1 data before export: " + objGrid1.saveXML());
            trace("Grid 2 data before export: " + objGrid2.saveXML());

            var sExportCommand1 = "Sheet1!A1";
            var sExportCommand2 = "Sheet1!A12";

            objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid1, sExportCommand1);
            objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid2, sExportCommand2);
            objExport.exportData();
        };

        /**
        * Function Name : gfnBasicImport
        * Description   : Import Basic button onclick event
        * Arguments     : none
        * Return        : none
        */
        this.gfnBasicImport = function() {
            trace("Starting Basic Import...");

            // Import Object 생성
            var objImport = this.gfnCreateImportObject();

            // Import 명령어와 데이터셋 리스트 설정
            var sImportCommand  = "[Command=getsheetdata;Output=output1;Head=;Body=]";
            var sDatasetList = "dsList02=output1";

            // Import 데이터 전송 전 로그 출력
            trace("Import Command: " + sImportCommand);
            trace("Dataset List: " + sDatasetList);
            trace("Before import - dsList02: " + this.dsList02.saveXML());

            // Import 데이터 실행
            objImport.importData("", sImportCommand, sDatasetList);

            // Import 성공 핸들러
            objImport.addEventHandler("onsuccess", function() {
                trace("Import Success!");
                trace("Dataset after import: " + this.dsList02.saveXML());
            }, this);

            // Import 에러 핸들러 (순환 구조를 피해서 특정한 정보를 출력)
            objImport.addEventHandler("onerror", function(obj, e) {
                trace("Import Error: " + e.errormsg);

                // 순환 구조 방지를 위해 error 객체에서 필요한 정보만 추출
                trace("Error Event ID: " + e.eventid);
                trace("Error Message: " + e.errormsg);
                trace("Error StatusCode: " + e.statuscode);
                trace("Dataset before import: " + this.dsList02.saveXML());
            }, this);
        };

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description ExcelExportObject onsuccess event
        */
        this.Export_onsuccess = function (obj, e)
        {
            trace("Export Success: " + e.eventid);
            this.txtLog.set_value(this.txtLog.value + e.eventid +  "  Export_onsuccess\n");
        };

        /**
        * @description ExcelExportObject onerror event
        */
        this.Export_onerror = function (obj, e)
        {
            trace("Export Error: " + e.eventid + " - Error Message: " + e.errormsg);
            this.txtLog.set_value(this.txtLog.value + e.eventid +  "  Export_onerror\n");
        };

        /**
        * @description ExcelExportObject onprogress event
        */
        this.Export_onprogress = function(obj,e)
        {
            this.txtLog.set_value(this.txtLog.value + e.eventid +  "  Export_onprogress : " + "recordindex " + e.recordindex + "\n");
        };

        /**
        * @description ExcelImportObject onsuccess event
        */
        this.Import_onsuccess = function (obj, e)
        {
            trace("Import Success: " + e.eventid);
            trace("Dataset after import: " + this.dsList02.saveXML());
            console.log("Import successful. Dataset XML: ", this.dsList02.saveXML());
            this.txtLog.set_value(this.txtLog.value + e.eventid +  "  Import_onsuccess\n");
        };

        /**
        * @description ExcelImportObject onerror event
        */
        this.Import_onerror = function (obj, e)
        {
            trace("Import Error: " + e.eventid + " - Error Message: " + e.errormsg);
            console.log("Import Error:", e.errormsg);
            this.txtLog.set_value(this.txtLog.value + e.eventid +  "  Import_onerror\n");
        };

        /**************************************************************************
        * 각 버튼별 이벤트 처리 영역
        **************************************************************************/
        /**
        * @description btnExportBasic onclick event
        */
        this.btnExportBasic_onclick = function(obj,e)
        {
            this.gfnBasicExport();
        };

        /**
        * @description btnImportBasic onclick event
        */
        this.btnImportBasic_onclick = function(obj,e)
        {
            this.gfnBasicImport();
        };

        /**************************************************************************
        *  공통 함수 처리 영역
        **************************************************************************/
        /**
        * Function Name : gfnIsNull
        * Description   : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
        * Arguments     : sValue - 체크할 문자열
        * Return        : Boolean sValue이 undefined, null, NaN, "", Array.length = 0인 경우 true
        */
        this.gfnIsNull = function (sValue)
        {
            if (new String(sValue).valueOf() == "undefined")
            {
                return true;
            }

            if (sValue == null)
            {
                return true;
            }

            var v_ChkStr = new String(sValue);

            if (v_ChkStr == null)
            {
                return true;
            }

            if (v_ChkStr.toString().length == 0)
            {
                return true;
            }

            return false;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnExportBasic.addEventHandler("onclick",this.btnExportBasic_onclick,this);
            this.btnImportBasic.addEventHandler("onclick",this.btnImportBasic_onclick,this);
            this.btnAddItemExport.addEventHandler("onclick",this.btnAddItemExport_onclick,this);
        };
        this.loadIncludeScript("fileupload.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
