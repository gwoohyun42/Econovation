Ext.application({
	launch : function() {
		var rootPanel = new Ext.create('Ext.Panel', {
			fullscreen : true,
			style : 'background:white',
			html : 'Center',
			/*layout : {
				type : 'vbox',
				align : 'stretch',
				pack : 'center'
			},*/
			items : [{
				//xtype : 'panel',	//명시하지 않으면 상위 type에 상속됨
				docked : 'top',
				style : 'background:red',
				html : 'Top',
			},{
				xtype : 'panel',
				docked : 'left',
				style : 'background:blue',
				html : 'Left',
			},{
				xtype : 'panel',
				docked : 'right',
				style : 'background:green',
				html : 'Right'
			},{
				xtype : 'panel',
				docked : 'bottom',
				style : 'background:yellow',
				html : 'Bottom'
			}]
		});
		// panel이 1개인 경우 viewport에 자동 add된다
		// Ext.Viewport.add(panel);
	}
});