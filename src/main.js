(function () {
	var _ = require('ramda');
	document.write("Bacon practise<br />");

	var eventValue = compose(_.get('value'), _.get('target'));

	//+ valueStream :: DomEvent -> EventStream String
	var valueStream = _.compose(map(eventValue), listen('keyup'));

	var inputStream = _.compose(map(termToUrl), valueStream);

	function extractValFromEvent(prop, event){
			return event.prop;
	}

	function setElementByIdValue(element, value){
		document.getElementById(element).value = value;
	}

	function setElementEvent(element, event){
		 return Bacon.fromEvent(document.getElementById(element), event);
	}
	//var bindToElement = setElementEvent('username','keyup');
	//console.log(bindToElement);
	// var bind = R.curry(setElementByIdValue('test'), extractValFromEvent('target.value'));
	// bind(bindToElement);
	 Bacon.fromEvent(document.getElementById("username"), "keyup").onValue(function(event){
	 	document.getElementById("test").innertext = event.target.value;
	 });
})()
