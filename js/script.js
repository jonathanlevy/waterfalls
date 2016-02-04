//array with images
var imageNames = ['Vx5yMxhj8dLEs.gif','5cOpQ79Hoq87u.gif', 'cSnSY0630kG3u.gif', 'l0NwGT5PDAv9WVDNe.gif', 'yAVZ2cWs7uVDG.gif', 'ABwlEB8x8ieHe.gif', 'ucEDsP4BX5rK8.gif', 'QXgJel0GTo5oI.gif'];

var imageIndex = 0;
//ON LOAD give image proper source
//$('.image-wrapper img').attr('src', "images/" + imageNames[0]);

//add click handler
$('.change-image').on('click', changeImage);

function changeImage() {
	$('.image-wrapper img').attr('src', 'http://i.giphy.com/' + imageNames[imageIndex]);
	//every time we run this 

	imageIndex++;
	if(imageIndex == 8){
		imageIndex= 0;
	}
}

var titleNames = ['YOSEMITE FALLS - California, USA', 'LANGFOSSEN - Langfoss, Norway', 'SUTHERLAND FALLS - New Zealand ','VIRGINIA FALLS - Northern Territories, Canada', 'GULLFOSSEN - Gullfoss, Iceland', 'VICTORIA FALLS - Zimbabwe & Zambia', 'KEREPAKUPAI MERU - Venezuela', 'KAIETEUR FALLS - Essequibo, Guyana' ];

var titleIndex = 0;
//ON LOAD give image proper source
//$('.image-wrapper img').attr('src', "images/" + imageNames[0]);

//add click handler
$('.change-image').on('click', changeTitle);

function changeTitle() {
	$('span.title').text(titleNames[titleIndex]);
	//every time we run this 

	titleIndex++;
	if(titleIndex == 8){
		titleIndex= 0;
	}
}


changeImage();
changeTitle();	 

//toggling the selected waterfalls window
function toggleDiv(divId) {
	$("#"+divId).toggle();
}


// results of the location detectecion
function mapToPosition(position) {
	lon = position.coords.longitude;
	lat = position.coords.latitude;
	new L.CircleMarker([lat,lon],{radius: 4}).addTo(map);
	updateQuery();
}


// establishes user location
function detectUserLocation(){
	if (navigator.geolocation) {
		var timeoutVal = 10 * 1000 * 1000;
		navigator.geolocation.watchPosition(
			mapToPosition, 
			alertError,
			{ enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
			);
	}
	else {
		alert("Geolocation is not supported by this browser");
	}

	function alertError(error) {
		var errors = { 
			1: 'Permission denied',
			2: 'Position unavailable',
			3: 'Request timeout'
		};
		alert("Error: " + errors[error.code]);
	}
}


// sets number of records that are nearest
var lon,
lat,
total = 100;