var Parser = function() {

	var xhr = Titanium.Network.createHTTPClient();

	xhr.onload = function() {
		Ti.API.info(this.responseText);
		// var jsonObject = JSON.parse(this.responseText);
 		// Ti.API.info(jsonObject.query.results.item.length);
 		// Ti.API.info(jsonObject);
 		// var xml = this.responseXML;
  		// var items = xml.documentElement.getElementsByTagName("title");
		// Ti.API.info(items);
	};

	xhr.onerror = function() {
		Ti.API.error(this.status + ' - ' + this.statusText);
	};
	
	xhr.open('GET', 'http://www.google.com');
	xhr.send();

	return;
}

module.exports = Parser;