function getRandomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];        
    }
    return color;
}

function borderRadius(){
    var radiusPercentageList = [10,20,30,40,50,50,50,50,60,70,80,90,100,100,100,100];
    // creating more possibilites of CIRCLE with repeated 50s SQUARE with 100
    radiusPercentage = radiusPercentageList[Math.floor(Math.random()*16)];
    return radiusPercentage;
}

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }

  function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }

var start = new Date().getTime();
function makeShapeAppear(){
    var top = Math.random()*400;
    var left = Math.random()*400;
    var width = (Math.random()*200)+100;
    var height = (Math.random()*200)+100;
    // +100 to make sure sizes are not too small
 
    document.getElementById("shape").style.borderRadius = borderRadius()+"%";
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.width = width+"px";
    document.getElementById("shape").style.height = height+"px";
    document.getElementById("shape").style.top = top+"px";
    document.getElementById("shape").style.left = left+"px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

function appearAfterDelay(){
    setTimeout(makeShapeAppear, Math.random()*2000);
}
appearAfterDelay();
var timeList = [];

document.getElementById("shape").onclick = function(){
    // time difference calculation begins here once clicked responded
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start)/1000;

    timeList.push(timeTaken);    

    
    document.getElementById("timeTaken").innerHTML = timeTaken + "s.";
    document.getElementById("fastest").innerHTML = myArrayMin(timeList);
    document.getElementById("slowest").innerHTML = myArrayMax(timeList);
    document.getElementById("totalReaction").innerHTML = timeList.length;
    appearAfterDelay();
}
