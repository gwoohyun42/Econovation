Ext.application({
	launch : function() {
		var rootPanel = new Ext.create('Ext.TabPanel', {
			fullscreen : true,
			tabBar : {
				docked : 'bottom',
				layout : {
					pack : 'center'
				}
			},
			items : [{
				iconCls : 'info',
				title : 'About'
			}, {
				iconCls : 'favorites',
				title : 'Favorites',
				badgeText : '2'
			}],
			dockedItems : [{
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