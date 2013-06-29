//start sencha
Ext.application({
	launch : function() {
		var date = new Date();	// 현재 날짜 얻어오기
		var localMonthNames = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];  
		Ext.Date.monthNames = localMonthNames; // 월 포멧 변경

		// 모델
		// indexNumber, title 관리
		Ext.define('genderModel', {
			extend : 'Ext.data.Model',
			config : {
				field : [{
					name : 'indexNumber',
					type : 'string'
				},{
					name : 'text',
					type : 'string'
				}]
			}
		});

		// 스토어
		var genderStore = new Ext.create('Ext.data.Store', {
			model : 'genderModel',
			data : [{
				indexNumber : '1', text : '남'
			},{
				indexNumber : '2', text : '여'
			}]
		});

		var formPanel = new Ext.create('Ext.form.FormPanel', {
			fullscreen : true,

			items : [{
				xtype : 'fieldset',
				title : '입사지원서',
				defaults : {
					required : true,
					labelAlign : 'left'
				},
				items : [{
					xtype : 'textfield',
					name : 'name',
					label : '이름',
					clearIcon : true
				},{
					xtype : 'datepickerfield',
					name : 'birthday',
					label : '생년월일',
					dateFormat : 'Y/m/d',
					value : date,	// 현재 날짜 설정
					picker : {
						//yearFrom : 1950,
						useTitles : true,	// 타이틀 추가
						dayText : '일',		// 타이틀 날 변경
						monthText : '월',	// 타이틀 달 변경
						yearText : '년',	// 타이틀 년 변경
						slotOrder : ['year', 'month', 'day']
					}
				},{
					xtype : 'checkboxfield',
					name : 'mili',
					label : '군필여부',
					checked : true	// 체크박스 체크
				},{
					xtype : 'spinnerfield',
					name : 'career',
					label : '경력',
					minValue : 0,
					maxValue : 100,
					increment : 1,
					value : 10
				},{
					layout : {
						type : 'hbox'
					},
					width : '100%',
					items : [{
						xtype : 'selectfield',
						name : 'gender',
						label : '성별',
	                    options: [
	                        {text: '남',  value: '1'},
	                        {text: '여', value: '2'},
	                    ]
					}, {
						xtype : 'numberfield',
						name : 'age',
						label : '나이',
						value : 22
					}]
				},{
					xtype : 'emailfield',
					name : 'email',
					label : '이메일',
					placeholder : 'test@test.com',
					clearIcon : true
				},{
					xtype : 'urlfield',
					name : 'url',
					label : '홈페이지',
					placeholder : 'http://www.naver.com'
				},{
					xtype : 'sliderfield',
					name : 'pay',
					label : '희망연봉',
					value : 50,
					max : 100,
					change : function() {

					}
				},{
					layout : {
						type : 'hbox',
						pack : 'center'
					},
					items : [{
						xtype : 'button',
						text : '등록',
						width : 100,
						align : 'center',
						handler : function() {
							//console.log(Ext.ComponentQuery.query('name')[0]);
							var loadValues = formPanel.getValues();
							console.log(loadValues);
							
							var name = loadValues.name;
						}
					},{
						xtype : 'spacer',
						width : 10
					},{
						xtype : 'button',
						text : '취소',
						width : 100,
						align : 'center',
						handler : function() {
							formPanel.reset();
						}
					}]
				}]
			}]
		})
	} // end launch
}); // end application