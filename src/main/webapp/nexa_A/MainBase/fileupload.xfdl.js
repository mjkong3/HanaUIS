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
            obj = new Dataset("dsList01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList02", this);
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
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList02","110","290","520","190",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsList02");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
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
            //excel export object id
            var sExportId = "objExcelExport";

            //ExcelExportObject : invisible object
            var objExport = this.objects[sExportId];

            //already created ExcelExportObject
            if(!this.gfnIsNull(objExport))
            {
                return objExport;
            }

            objExport = new ExcelExportObject();

            //ExcelExportObject set property
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

            //ExcelImportObject : invisible object
            var objImport = this.objects[sImportId];

            //already created ExcelImportObject
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
        * Description   : Export Basic Export / ExcelExportObject.addExportItem(constExportItemType, source, range)
        * Arguments     : pFileName : save file name (null - "ExportData(BasicExport)")
        * Return        : none
        */
        this.gfnBasicExport = function(pFileName)
        {
            var sFileName = "ExportData(BasicExport)";
            if(!this.gfnIsNull(pFileName))
            {
                sFileName = pFileName;
            }

            //ExcelExportObject
            var objExport = this.gfnCreateExportObject(sFileName);

            //export Grid = export item source
            var objGrid1 = this.grdList01;
            var objGrid2 = this.grdList02;

            // Trace grid data before export
            trace("Grid 1 data before export: " + objGrid1.saveXML());
            trace("Grid 2 data before export: " + objGrid2.saveXML());

            //export item ranges : sheet1 - grid1, grid2
            var sExportCommand1 = "Sheet1!A1";
            var sExportCommand2 = "Sheet1!A12";

            //addExportItem
            objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid1, sExportCommand1);
            objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid2, sExportCommand2);
            objExport.exportData();
        };

        /**
        * Function Name : gfnAddItemExport
        * Description   : Export Basic Import / ExcelExportObject.addExportItem(constExportItemType, objExportItem)
        * Arguments     : pFileName : save file name (null - "ExportData(AddItemExport)")
        * Return        : none
        */
        this.gfnAddItemExport = function (pFileName)
        {
            var sFileName = "ExportData(AddItemExport)";
            if(!this.gfnIsNull(pFileName))
            {
                sFileName = pFileName;
            }

            var objExport = this.gfnCreateExportObject(sFileName);

            //export Grid = export item source
            var objGrid1 = this.grdList01;
            var objGrid2 = this.grdList02;

            // Trace grid data before export
            trace("Grid 1 data before export: " + objGrid1.saveXML());
            trace("Grid 2 data before export: " + objGrid2.saveXML());

            //export item ranges : sheet1 - grid1 , sheet2 - grid2
            var sExportCommand1 = "Sheet1!A1";
            var sExportCommand2 = "Sheet2!A1";

            //create export item
            var objExportItem1 = new ExportItem();
            objExportItem1.set_source(objGrid1);
            objExportItem1.set_range(sExportCommand1);

            var objExportItem2 = new ExportItem();
            objExportItem2.set_source(objGrid2);
            objExportItem2.set_range(sExportCommand2);

          //add export item object
            objExport.addExportItem(nexacro.ExportItemTypes.GRID,objExportItem1);
            objExport.addExportItem(nexacro.ExportItemTypes.GRID,objExportItem2);
            objExport.exportData();
        };

        /**
        * Function Name : gfnBasicImport
        * Description   : Import Basic button onclick event / ExcelImportObject.importData(source, range, output dataset)
        * Arguments     : none
        * Return        : none
        */
        this.gfnBasicImport = function()
        {
            //excel import object
            var objImport = this.gfnCreateImportObject();

            var sImportCommand  = "[Command=getsheetdata;Output=output1; Head=!A2:G2; Body=Sheet1!A3:G9]";
            var sDatasetList = "dsList02=output1";

            // Trace before import to check the command and dataset list
            trace("Import Command: " + sImportCommand);
            trace("Dataset List: " + sDatasetList);

            objImport.importData("", sImportCommand, sDatasetList);
        };

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description ExcelExportObject onsuccess event
        */
        this.Export_onsuccess = function (obj, e)
        {
            // Trace to confirm successful export
            trace("Export Success: " + e.eventid);

            this.txtLog.set_value(this.txtLog.value + e.eventid +  "  Export_onsuccess\n");
        };

        /**
        * @description ExcelExportObject onerror event
        */
        this.Export_onerror = function (obj, e)
        {
            // Trace to confirm export error
            trace("Export Error: " + e.eventid + " - Error Message: " + e.errormsg);

            this.txtLog.set_value(this.txtLog.value + e.eventid +  "  Export_onerror\n");
        };

        /**
        * @description ExcelExportObject onprogress event
        */
        this.Export_onprogress = function(obj,e)
        {
            this.txtLog.set_value(this.txtLog.value
                                  + e.eventid +  "  Export_onprogress : "
                                  + "recordindex " + e.recordindex + "\n");
        };

        /**
        * @description ExcelImportObject onsuccess event
        */
        this.Import_onsuccess = function (obj, e)
        {
            // Trace to confirm successful import
            trace("Import Success: " + e.eventid);

            // Trace dataset to check the data after import
            trace("Dataset after import: " + this.dsList02.saveXML());

            this.txtLog.set_value(this.txtLog.value + e.eventid +  "  Import_onsuccess\n");
        };

        /**
        * @description ExcelImportObject onerror event
        */
        this.Import_onerror = function (obj, e)
        {
            // Trace to confirm import error
            trace("Import Error: " + e.eventid + " - Error Message: " + e.errormsg);

            this.txtLog.set_value(this.txtLog.value + e.eventid +  "  Import_onerror\n");
        };

        /**
        * @description btnExportBasic onclick event
        */
        this.btnExportBasic_onclick = function(obj,e)
        {
          //ExcelExportObject.addExportItem(constExportItemType, source, range)
            this.gfnBasicExport();
        };

        /**
        * @description btnImportBasic onclick event
        */
        this.btnImportBasic_onclick = function(obj,e)
        {
            this.gfnBasicImport();
        };

        /**
        * @description btnAddItemExport onclick event
        */
        this.btnAddItemExport_onclick = function(obj,e)
        {
          //ExcelExportObject.addExportItem(constExportItemType, ExportItem object)
            this.gfnAddItemExport();
        };

        /**************************************************************************
        *  공통 함수 처리 영역
        해당 함수의 경우 프로젝트 사용 시 프로젝트 공통함수로 전환을 권장 드립니다.
        **************************************************************************/
        /**
        * Function Name : gfnIsNull
        * Description   : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
        * Arguments     : sValue - 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
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
