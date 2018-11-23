alert("hello");
var clipboard = new Clipboard('#copy-btn');

clipboard.on('success', function(e) {
	// element.style.visibility = "visible";
	// element.classList.add('fadeInUp');
 //    window.setTimeout( function(){
	// 	element.classList.remove('fadeInUp');
 //        element.style.visibility = "hidden";
 //    }, 1500);             
    console.log("Copied!");
});

clipboard.on('error', function(e) {
	console.log("Error!");
});
