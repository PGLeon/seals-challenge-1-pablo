//left button
document.getElementById('left').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) - 10;

    document.getElementById('ball').style.left = newPosition +'px';
});

//right button
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) +10;

    document.getElementById('ball').style.left = newPosition +'px';
});

//top button
document.getElementById('top').addEventListener('click', function() {

    var position = document.getElementById('ball').style.top;

    var newPosition = parseInt(position) - 10;

    document.getElementById('ball').style.top = newPosition +'px';
});

//bottom button
document.getElementById('bottom').addEventListener('click', function() {

    var position = document.getElementById('ball').style.top;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.top = newPosition +'px';
});
