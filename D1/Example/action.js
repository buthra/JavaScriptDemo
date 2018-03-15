
//function load() {
//	var  mydata = JSON.parse(data);
//	for 
//	alert(mydata[0].name);
//	alert(mydata[0].age);
//}


function load()
{
  alert("Entering load");
  var xmlhttp = new XMLHttpRequest();
  
  xmlhttp.overrideMimeType("application/json");

  alert("before calling data.json");
	xmlhttp.open("GET", 'data.json', true);
	  alert("after calling data.json");
	
	xmlhttp.onreadystatechange = function() {
	  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		   
	        var myObj = JSON.parse(xmlhttp.responseText);
	        alert("Inside IF");
	        
	        document.getElementById("demo").innerHTML = myObj.name;
	  }
	};
	

	xmlhttp.send();
	 alert("Exiting load");
	
}

