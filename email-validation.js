var btn3 = document.getElementById("myBtn3");
var modal = document.getElementById('myModal');
var modal1 = document.getElementById('myModal1');

var obj = {
  "images": [{
   "id":1,
    "bannerImg1": "images/img1.jpg"
  },
  { 
    "id":2,
   "bannerImg1" : "images/img2.jpg"
  },
  { 
     "id":3,
    "bannerImg1" : "images/img3.jpg"
  },
  {
    "id":4,
   "bannerImg1" : "images/img4.jpg"
  },
 ]
}
obj.images.forEach( function(obj) {
  var img = new Image();
  img.src = obj.bannerImg1;
  img.setAttribute("id",obj.id);
  img.setAttribute("onmouseover","preview.src=this.src");		
  img.setAttribute("class", "banner-img");
  img.setAttribute("alt", "image");
  document.getElementById("img-container").appendChild(img);
});

btn3.onclick = function() {
    
    var urlEdit = document.getElementById("pre").src;
    var path = "file:///home/zemoso/assignment/Bhupathi-Raju.github.io/"
    obj.images.forEach(function(obj){
    var url = path+obj.bannerImg1;
    if(url== urlEdit)
     { 
       var img = document.getElementById(obj.id);
       var parent =document.getElementById("img-container");  
       document.getElementById("pre").src = "http://www.noborders-group.com/templates/newsletter/png/removed-occupations-australia-2017.jpg";
       img.parentNode.removeChild(img);
    }
    else
       console.log(false);
    })
   
}

var boolean = true;
function ValidateEmail(inputText)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(inputText.value.match(mailformat))  
{  
document.form1.text2.focus();  
boolean = true; 
}  
else  
{  
alert("You have entered an invalid email address!");  
document.form1.text2.focus(); 
boolean =false; 
return false;
}  
}  

function required()  
{  
var empt = document.forms["form1"]["text1"].value;
if (empt =="")  
{
boolean= false; 
alert("Please input your Name");   
return false;
}  
else   
{  
boolean = true;
}   
}

function ValidateUrl()
{
var empt = document.forms["form1"]["text1"].value;
if(empt == "")
{
alert("Please input a name");
return false;
}
function imageExists(url, callback) {
  var img = new Image();
  img.onload = function() { callback(true); };
  img.onerror = function() { callback(false); };
  img.src = url;
}

var imageUrl = document.forms["form1"]["text2"].value;
imageExists(imageUrl, function(exists) {
  if(exists && boolean)
    {
    var urlEdit = document.getElementById("pre").src;
    var path = "file:///home/zemoso/assignment/Bhupathi-Raju.github.io/"
    obj.images.forEach(function(obj){
    var url = path+obj.bannerImg1;
    if(url== urlEdit)
     {  
        console.log(true + obj.id);
        document.getElementById(obj.id).src = imageUrl;
        document.getElementById("pre").src = imageUrl;
        modal.style.display = "none";
      }
    else
       console.log(false);
    })
    console.log(urlEdit + "adkhsad");
    console.log(imageUrl);
    return false;
   
   /* var str = JSON.stringify(data);
    var obj = JSON.parse(str);
    console.log(str); 
    console.log(obj.images);
    data['images'].push({bannerImg1:imageUrl});
    console.log(data.images); */
   }
  else if(boolean && !exists)
    {
    alert("You entered an invalid imageUrl!");  
    document.form1.text2.focus(); 
    boolean =false; 
    return false;
}
});
}


function ValidateUrl2()
{
var empt = document.forms["form2"]["text1"].value;
if(empt == "")
{
alert("Please input a name");
return false;
}
function imageExists(url, callback) {
  var img = new Image();
  img.onload = function() { callback(true); };
  img.onerror = function() { callback(false); };
  img.src = url;
}
var imageUrl = document.forms["form2"]["text4"].value;
 console.log(imageUrl);	
imageExists(imageUrl, function(exists) {
 console.log(exists);
  if(exists)
   {
   console.log(imageUrl);
    boolean= true;
    var img = new Image();
        img.src = imageUrl;
    img.setAttribute("onmouseover","preview.src=this.src")		
    img.setAttribute("class", "banner-img");
    img.setAttribute("alt", "effy");
    document.getElementById("img-container").appendChild(img);
    modal1.style.display = "none";
    return false;
   }
 else if(boolean&&!exists)
    {
    alert("You entered an invalid imageUrl!");  
    boolean =false;    
    return false;
}
});
}

