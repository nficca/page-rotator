var imgs = document.getElementsByTagName('img');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < imgs.length; ++i) {
    var trueWidth = parseInt(imgs[i].width);
    var trueHeight = parseInt(imgs[i].height);
    var randomScaleFactor = getRandomInt(10,30)/10;
    var width = Math.round(randomScaleFactor*trueWidth/10)*10;
    var height = Math.round(randomScaleFactor*trueHeight/10)*10;

    imgs[i].src = 'http://placekitten.com/g/'+width+'/'+height;
}