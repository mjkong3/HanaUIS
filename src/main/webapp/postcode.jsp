<%@ page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>다음 주소 검색</title>
<script
	src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

<script>
        function sample4_execDaumPostcode() {
            new daum.Postcode({
                oncomplete: function(data) {
                    // 도로명 주소 변수
               var selectedAddress = ''; // 최종 선택된 주소를 저장할 변수

                if (data.userSelectedType === 'R') {
                    // 도로명 주소가 선택된 경우
                    selectedAddress = data.roadAddress;
                } else if (data.userSelectedType === 'J') {
                    // 지번 주소가 선택된 경우
                    selectedAddress = data.jibunAddress;
                }
              
                    var extraRoadAddr = ''; // 참고 항목 변수

                    // 법정동명이 있을 경우 추가
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraRoadAddr += data.bname;
                    }

                    // 건물명이 있고, 공동주택일 경우 추가
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }

                    // 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraRoadAddr !== ''){
                        extraRoadAddr = ' (' + extraRoadAddr + ')';
                    }
                    // 우편번호, 도로명 주소, 지번 주소를 부모로 전송 (Nexacro에서 수신)
                    var addressData = JSON.stringify({
                        zonecode: data.zonecode,
                        selectedAddress: selectedAddress,
                        extraAddress: extraRoadAddr
                    });
                    
                    window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, addressData);
                    
                    window.close();
                    //window.parent.opener.nexacro.fireUserNotify(addressData);
                    /* window.parent.nexacro.fireUserNotify(addressData);
                    window.parent.nexacro.getApplication().mainframe.childframe.form.wb_Adress.setUserData(addressData);
                    window.parent.nexacro.getApplication().mainframe.childframe.form.wb_Adress.usernotify("addressData", addressData);
                 */
                }
            }).open();
        }
    </script>
</head>
<body onload="sample4_execDaumPostcode()">
	<div>
		<label>우편번호:</label> <input type="text" id="sample4_postcode"
			placeholder="우편번호"><br> <label>도로명 주소:</label> <input
			type="text" id="sample4_roadAddress" placeholder="도로명주소"><br>

		<label>지번 주소:</label> <input type="text" id="sample4_jibunAddress"
			placeholder="지번주소"><br> <label>상세 주소:</label> <input
			type="text" id="sample4_detailAddress" placeholder="상세주소"><br>

		<label>참고 항목:</label> <input type="text" id="sample4_extraAddress"
			placeholder="참고항목"><br> <span id="guide"
			style="color: #999; display: none;"></span>
	</div>
</body>
</html>