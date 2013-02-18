var ApplicationWindow = function() {

	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');
	var self = Titanium.UI.createWindow({
		title : 'Расписание',
		backgroundColor : 'black',
	});

	var DataCore = require("DataCore");
	var data = new DataCore();
	var border = 20;

	//right part
	Ti.API.info(data.time);
	var verticalScrollView = Ti.UI.createScrollView({
		left : -border,
		right : -border,
		top : -border,
		bottom : -border,
		contentWidth : 'auto',
		contentHeight : 'auto',
		scrollType : "vertical",
		showVerticalScrollIndicator : true,
		borderWidth : border,
	});
	var verticalView = Ti.UI.createView({
		backgroundColor : '#336699',
		layout : "absolute",
		borderRadius : 10,
		height : 2000,
		width : "100%"
	});

	for (var i = 0; i <= data.stations.length - 1; i++) {
		var row = Ti.UI.createView({
			backgroundColor : "green",
			top : 50 * i + border,
			left : 20,
			height : 45,
			width : 145,
			index : i,
		});
		var label = Titanium.UI.createLabel({
			touchEnabled : false,
			color : '#999',
			text : data.stations[i] + i,
			font : {
				fontSize : 12,
				fontFamily : 'Helvetica Neue'
			},
			textAlign : 'center',
			width : 'auto'
		});
		row.touchEnabled = true;
		row.addEventListener("swipe", function(e) {
			Ti.API.info(e.source.index);
		});
		row.add(label);
		verticalView.add(row);
	}
	verticalView.height = (data.stations.length + 1) * 50;
	verticalScrollView.add(verticalView);

	//left part

	var horizontalScrollView = Ti.UI.createScrollView({
		contentWidth : 'auto',
		contentHeight : 'auto',
		scrollType : "horizontal",
		left : 160,
		right : -border,
		top : 0,
		bottom : 0,
		showHorizontalScrollIndicator : true,
		borderWidth : border,
	});
	var horizontalView = Ti.UI.createView({
		backgroundColor : 'white',
		borderRadius : 10,
		height : "100%",
		width : 2000
	});

	for ( i = 0; i <= data.time.length - 1 ; i++) {
		var row = Ti.UI.createView({
			backgroundColor : "green",
			top : 50 * i + border,
			left : border,
			height : 45,
			width : 50 * data.time.length,
			index : i,
			layout : "horizontal"
		});
		var text = "";
		for ( j = 0; j <= data.time[i].length - 1; j++) {
			text = text + " | " + data.time[i][j];
		}
		var label = Titanium.UI.createLabel({
				touchEnabled : false,
				color : '#999',
				text : text,
				font : {
					fontSize : 12,
					fontFamily : 'Helvetica Neue'
				},
				textAlign : 'center',
				height : 'auto'
		});
		row.add(label)
		horizontalView.add(row);
	}
	horizontalView.width = (data.time[0].length + 1) * 50;
	horizontalScrollView.add(horizontalView);

	var label2 = Titanium.UI.createLabel({
		color : '#999',
		text : 'I am Window 1',
		font : {
			fontSize : 30,
			fontFamily : 'Helvetica Neue'
		},
		textAlign : 'center',
		width : 'auto'
	});
	horizontalView.add(label2);
	//view1.add(rightTable);

	verticalView.add(horizontalScrollView);
	self.add(verticalScrollView);

	var label1 = Titanium.UI.createLabel({
		color : '#999',
		text : 'I am Window 1',
		font : {
			fontSize : 20,
			fontFamily : 'Helvetica Neue'
		},
		textAlign : 'center',
		width : 'auto'
	});

	self.add(label1);

	var tableData = [];
	var tableView = Ti.UI.createTableView({
		backgroundColor : 'white',
		headerTitle : 'Станции',
		top : "0",
		bottom : "100",
		left : "0",
		width : "200",
		showVerticalScrollIndicator : false,

	});

	for (var i = 0; i <= 25; i++) {
		var row = Ti.UI.createTableViewRow({
			title : +i,
			color : 'black'
		});
		tableData.push(row);
	}

	tableView.setData(tableData);

	var rightTable = Ti.UI.createTableView({
		backgroundColor : 'white',
		headerTitle : 'время',
		top : "0",
		bottom : "100",
		left : "250",
		right : "0",
		showVerticalScrollIndicator : false,
	});
	rightTable.setData(tableData);
	//win1.add(rightTable);
	//win1.add(tableView);
	//
	// var pX, pY;
	// tableView.addEventListener("touchmove", function(e) {
	//
	// if ((!pX) || (!pY)) {
	// pX = e.x;
	// pY = e.y;
	// }
	// Ti.API.info(rightTable.top, (e.y - pY));
	// //rightTable.top = Number(rightTable.top) + (e.y - pY);
	// pY = e.y;
	// })

	return self;
}

module.exports = ApplicationWindow;
