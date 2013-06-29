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
			}]
		});
	}
});