var myImage = document.getElementById("mainImage");

var imageArray = ["images/evl_lab.JPG","images/evl_logo2.jpg","images/hci_lab.JPG"];
				  
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,3000);

myImage.onclick =  function() {
	clearInterval(intervalHandle);
};