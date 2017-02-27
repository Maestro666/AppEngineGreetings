function init() {
	var rootpath = "//" + window.location.host + "/_ah/api";
	gapi.client.load('helloworldendpoints', 'v1', loadCallback, rootpath);
}

function loadCallback () {	
	enableButtons ();
}

function enableButtons () {
	btn = document.getElementById("input_greet_generically");
	btn.onclick= function(){greetGenerically();};
	btn.value="Click me for a generic greeting";
	
	btn = document.getElementById("input_greet_by_name");
	btn.onclick=function(){greetByName();};
	btn.value="Click me for a personal greeting";
	
	btn = document.getElementById("input_greet_by_period");
	btn.onclick=function(){greetByTimeOfDay();};
	btn.value="Click me for  a period greeting";
	
	btn = document.getElementById("input_greet_by_team");
	btn.onclick=function(){greetByTeamm();};
	btn.value="Click me for  a results greeting";
}


function greetGenerically () {
	var request = gapi.client.helloworldendpoints.sayHello();
	request.execute(sayHelloCallback);
}

function greetByName () {
	var name = document.getElementById("name_field").value;
	var request = gapi.client.helloworldendpoints.sayHelloByName({'name': name});
	request.execute(sayHelloCallback);
}

function greetByTimeOfDay () {
	var name = document.getElementById("name_field").value;
	var period = document.getElementById("period_select").value;
	var request = gapi.client.helloworldendpoints.greetByPeriod(
			{'name': name, 'period' : period});
	request.execute(sayHelloCallback);
}

function greetByTeamm () {
	var name = document.getElementById("name_field").value;
	var period = document.getElementById("period_select").value;
	var team = document.getElementById("team_select").value;
	var request = gapi.client.helloworldendpoints.greetByTeam(
			{'name': name, 'period' : period, 'team' : team});
	request.execute(sayHelloCallback);
}

function sayHelloCallback (response) {
	alert(response.message);	
}