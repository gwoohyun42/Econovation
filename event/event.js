// start sencha
Ext.application({
	requires : ['Ext.MessageBox'],
	launch : function() {
		// handler방식 : 많이 사용하지만 - 비표준
		// 단순한 클릭 이벤트에 용이
		var button1 = new Ext.create('Ext.Button', {
			text : '버튼1 비표준방식',
			handler : function() {	// click에 한함
				Ext.Msg.alert('메세지', 'handler는 버튼에 특화된 구성옵션');
			}
		});
		
		// listeners : 가장 많이 쓰는 방식 - 표준
		var button2 = new Ext.create('Ext.Button', {
			text : '버튼2 표준방식',
			listeners : {
				tap : function() {
					Ext.Msg.alert('메세지2', '표준적인 이벤트 처리방식');
				}
			}
		});
		
		var button3 = new Ext.create('Ext.Button', {
			text : '버튼3 표준방식-리스너를 별도로 기술',
			ui : 'action'
		});
		button3.addListener(
				'tap',
				function() {
					Ext.Msg.alert('메세지3', '표준적인 이벤트 처리방식:리스너를 별도');
				}
		);
		
		var button4 = new Ext.create('Ext.Button', {
			text : '버튼4 표준방식-기타 구성 옵션',
			ui : 'confirm'
		});
		button4.addListener(
				'tap',
				function() {
					Ext.Msg.alert('메세지4', '표준적인 이벤트 처리방법 : 기타 구성 옵션');
				},
				this,
				{
					delay : 3000,	// 3000 후에 동작하라
					single : true	// 한번만 실행해라
				}
		);
		
		var button5 = new Ext.create('Ext.Button', {
			text : '버튼5 표준방식-기타 구성 옵션',
			ui : 'decline',
			listeners : {
				tap : {
					fn : function() {
						Ext.Msg.alert('메세지5', '표준적.브라우저 차원의 이벤트');
					}
				}
			}
		});
		
		var rootPanel = new Ext.create('Ext.Panel', {
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			items : [button1, button2, button3, button4, button5]
		});
		
		Ext.Viewport.add(rootPanel);
	} // end launch
}); // end application