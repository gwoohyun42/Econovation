Ext.application({
	launch : function() {
		var rootPanel = new Ext.create('Ext.Panel', {
			fullscreen : true,
			layout : {
				type : 'vbox',
				//align : 'start',
				//align : 'center',
				//align : 'end',
				align : 'stretch',
				pack : 'start'
				//pack : 'center'
				//pack : 'end'
				//pack : 'justify'
			},
			items : [{
				//xtype : 'panel',	//명시하지 않으면 상위 type에 상속됨
				style : 'background:red',
				html : 'First',
				//flex : 2
			},{
				xtype : 'panel',
				style : 'background:blue',
				html : 'Second',
			},{
				xtype : 'panel',
				style : 'background:green',
				html : 'Third',
			},{
				xtype : 'panel',
				style : 'background:yellow',
				html : 'Fourth',
			}]
		});
		// panel이 1개인 경우 viewport에 자동 add된다
		// Ext.Viewport.add(panel);
		//rootPanel.setActiveItem(2);
	}
});