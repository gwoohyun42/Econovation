Ext.application({
	requires : ['Ext.MessageBox'],
	launch : function(){
		// 모델 정의
		Ext.define('company', {
			extend : 'Ext.data.Model',
			config : {
				fields : ['grade', 'ban', 'name']
			}	// end define config
		});	// end define
		
		var companyStore = Ext.create('Ext.data.Store',{
			model : 'company',
			sorters : 'grade',	// sorters, grouper
			data : [{
				grade : '1', ban : '1', name : '홍길동1'
			},{
				grade : '2', ban : '2', name : '홍길동2'
			},{
				grade : '3', ban : '3', name : '홍길동3'
			},{
				grade : '1', ban : '1', name : '홍길동4'
			},{
				grade : '2', ban : '4', name : '홍길동5'
			},{
				grade : '3', ban : '4', name : '홍길동6'
			}],	// end Store data
			grouper : {
				groupFn : function(record) {
					return record.get('grade')[0] + '학년 구분';
				}
			}	// end Store grouper
		});	// end Store
		
		var rootPanel = new Ext.create('Ext.Panel', {
			fullscreen : true,
			layout : {
				type : 'vbox',
				align : 'stretch'
			},	// end rootPanel layout
			items : [{
				xtype : 'list',
				flex : 1,
				grouped : true,	// Store의 grouper 연관
				indexBar : true,
				onItemDisclosure : true,
				store : companyStore,	// 데이터를 저장하는 곳
				itemTpl : '{grade}학년 / {ban}반 / 이름 : {name}',	// store에 저장된 데이터를 표현하는 방법
				listeners : {
					// item 클릭 이벤트
					// this : list
					//itemtap : function( this, index, target, record, e, eOpts ) {
					itemtap : function( dataList, index, target, record, e, eOpts ) {
						console.log(dataList, index, target, record, e, eOpts );
						Ext.Msg.alert('Title', record.get('grade') + '학년 ' +
								record.get('ban') + '반 이름 : ' +
								record.get('name') );
					}
				}
			}]	// end rootPanel items
		});	// end rootPanel
	}	// end launch
});	// end application