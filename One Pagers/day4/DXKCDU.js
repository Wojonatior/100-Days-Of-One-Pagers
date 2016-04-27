$.ajax({
	url: "http://dynamic.xkcd.com/api-0/jsonp/comic?callback=?",
	dataType: "json",
	jsonpCallback: "xkcddata",
	Origin: 'http://xkcd.com',
	success: function(data){
		currDate = new Date();
		//js date objects 0 index months, so one is added to it
		if((currDate.getDate() == data["day"])
			&& (currDate.getMonth()+1 == data["month"])
			&& (currDate.getFullYear() == data["year"])) {
				$( "#answer" ).text("Yes");
		}else {
			$( "#answer" ).text("No");
		}
	}
});