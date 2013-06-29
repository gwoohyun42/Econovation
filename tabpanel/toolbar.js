Ext.application({
	launch : function() {
		var rootPanel = new Ext.create('Ext.Panel', {
			fullscreen : true,
			items : [{
				xtype : 'toolbar',
				docked : 'top',
				title : 'My Toolbar',
				items : [{
					xtype : 'button',
					ui : 'back',
					text : 'back',
					//docked : 'left'
				}, {
					xtype : 'spacer'	// 공백 주기
				}, {
					xtype : 'button',
					ui : 'forward',
					text : 'forward',
					//docked : 'right'
				}]
			}]
		});
	}
});