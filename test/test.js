// 방법 2) 
// Ext.require('Ext.MessageBox');
Ext.application({	// sencha touch 시작
	// 방법 1)
	launch : function() {
		requires : ['Ext.MessageBox'],
		var button = Ext.create('Ext.Button', {
			text : '버튼',
			handler : function() {
				Ext.Msg.alert('이벤트', '알림');
			}
		});
		var panel = new Ext.create('Ext.Panel', {
			fullscreen : true,
			html : 'sencha test',
			items : [button]
		});
		Ext.Viewport.add(panel);
	}
});


