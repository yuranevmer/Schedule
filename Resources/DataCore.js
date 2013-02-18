var DataCore = function() {
	var self = {};
	self.time = [];
	self.stations = [];
	
	for (i = 0; i <= 25; i++) {
		var row = [];
		for (j = 0; j <= 25; j++) {
			row.push(i + ":" + j);
		}
		self.time.push(row);
		self.stations.push("Бородянка" + i);		
	}
	
	return self;
	
}

module.exports = DataCore;