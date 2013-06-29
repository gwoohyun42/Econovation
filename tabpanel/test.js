Ext.application({
	requires : ['Ext.MessageBox'],
	launch : function() {
		var rootPanel = new Ext.create('Ext.Panel', {
			fullscreen : true,
			items: [{
				xtype: 'tabpanel',
				docked : 'bottom',
				tabBar : {
					layout : {
						pack : 'center'
					}
				},
				items: [{
					iconCls : 'info',
					title : 'About'
				},{
					iconCls : 'favorites',
					title : 'Favorites',
					badgeText : '2'
				}]
			},{
				xtype: 'toolbar',
				docked: 'top',
				html: 'test'
			}]
		});
	}
});


