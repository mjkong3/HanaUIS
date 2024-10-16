//XJS=autofilter.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
        *  techtip dataset auto filter form sample library
        *  @MenuPath   techtip > autofilter
        *  @FileName	autofilter.xjs
        *  @Desction	dataset filter
        *******************************************************************************
        *  2019.07.10		nana			최초 생성
        *******************************************************************************
        */

        /**************************************************************************
         * 사용자 FUNCTION 영역
         **************************************************************************/
        /**
        * @description form onload --> define config object and addEventHandler
        * @param objForm : form,
        *		 objConfig : {objGrid, objCombo, objEdit}
        * @return
        */
        this.fnInitForm = function (objForm,objConfig)
        {
        	objConfig.objDs		= objForm.objects[objConfig.objGrid.binddataset];

        	objConfig.objCombo.set_enableevent(false);
        	var dsBind = this.fnSetComboDataset(objConfig.objCombo,objConfig.objGrid,obj);

        	//dataset addChild & set_innerdataset (code,value)
        	objForm.addChild(dsBind.name,dsBind);
        	objConfig.objCombo.set_innerdataset(dsBind.name);
        	objConfig.objCombo.set_codecolumn('code');
        	objConfig.objCombo.set_datacolumn('value');
        	objConfig.objCombo.set_index(0);
        	objConfig.objCombo.set_enableevent(true);

        	//comboChange_onitemchanged
        	objConfig.objCombo.code = dsBind.getColumn(0,'code');

        	objConfig.objEdit.addEventHandler("onkeyup",this.editInput_onkeyup,objForm);
        	objConfig.objCombo.addEventHandler("onitemchanged",this.comboChange_onitemchanged,objForm);

        	objForm.config = objConfig;
        }

        /**
        * @description create dataset (combo inner dataset)
        * @param objCombo : combo, objGrid : grid , objForm : this (form)
        * @return objTempDs : dataset 'dsBindCombo'
        */
        this.fnSetComboDataset = function(objCombo,objGrid,objForm)
        {
        	//create dataset name ('dsBindCombo' + random 4 number)
        	var sDatasetId = "dsBindCombo" + nexacro.floor(Math.random(),4) * 10000;	// 0 ~ 9999

        	//create dataset
        	var objTempDs = new Dataset;
        	objTempDs.set_name(sDatasetId);

        	objTempDs.set_enableevent(false);
        	objTempDs.addColumn('code','string',256);
        	objTempDs.addColumn('value','string',256);
        	var innerDataset = objCombo.getInnerDataset();

        	var sText = "";
        	var sCode = "";
        	var nRow = -1;
        	for(var i=0; i<innerDataset.getRowCount(); i++)
        	{
        		var code = innerDataset.getColumn(i, "codecolumn");
                var value = innerDataset.getColumn(i, "datacolumn");

        		if(!this.gfnIsNull(value))
        		{
        			sCode = objGrid.getCellProperty( 'body', i, 'text' );

        			nRow = objTempDs.addRow();
        			objTempDs.setColumn(nRow,'code', code);
        			objTempDs.setColumn(nRow,'value',value);
        		}
        	}

        	objTempDs.set_enableevent(true);

        	return objTempDs;
        }

        /**
        * @description filter excute
        * @param obj : form, strValue : filter contents
        */
        this.fnSetFilterExcute = function (obj,strValue)
        {
        	var objDs	 = obj.config.objDs;
        	var sFilterstr = "";
        	if(!this.gfnIsNull(strValue))
        	{
        		/*
        		var objCombo = obj.config.objCombo;
        		var objEdit	 = obj.config.objEdit;
        		&& SEMESTER == '"+ this.cmb_se.value +"'
        		*/
        		sFilterstr = "String("+obj.config.objCombo.code +").indexOf('"+obj.config.objEdit.strFilter+"') > -1 || CLASSROOM_ID == null || CLASS_WEEK == null || TIME_NUMBER == null";
        		//trace(sFilterstr);
        	}

        	objDs.set_enableevent(false);
        	objDs.set_filterstr(sFilterstr);
        	objDs.set_enableevent(true);
        }

        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/
        /**
         * @description edit onkeyup event --> this.fnSetFilterExcute(obj:form,strValue)
        */
        this.editInput_onkeyup = function(obj,e)
        {
        	var objForm = obj.parent;
        	obj.strFilter = obj.value;

        	this.fnSetFilterExcute(objForm,obj.strFilter);
        };

        /**
         * @description combo onitemchanged event --> combo code setting
        */
        this.comboChange_onitemchanged = function(obj,e)
        {
        	obj.code = e.postvalue;
        };

        /**************************************************************************
        *  공통 함수 처리 영역
           해당 함수의 경우 프로젝트 사용 시 프로젝트 공통함수로 전환을 권장 드립니다.
        **************************************************************************/
        /**
        * @description 파리미터 값이 Null 인지 체크하는 함수
        * @param {All} val – 체크할 문자열
        * @return {boolean} Val이 undefined, null, NaN, "", Array.length=0 인 경우 = true
        															  이 외의 경우 = false
        */
        this.gfnIsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
