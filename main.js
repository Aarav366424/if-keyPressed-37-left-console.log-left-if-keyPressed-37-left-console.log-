canvas=document.getElementById("myCanvas");
ctx=canvas.getcontext("2d");
roverwidth=100;
roverheight=90;
roverx=10;
rovery=10;
backgroundimage="arrow keys.png";
roverimage="rover.png";
 function add() 
{
newbackgimage=new Image();
newbackgimage.onload=upload_background;
newbackgimage.src= backgroundimage;
newroverimage=new Image();
newroverimage.onload=upload_rover;
newroverimage.src= roverimage;
}
function upload_background() 
{
ctx.drawImage(newbackgimage, 0,0,canva.width, canvas.height);
}
function upload_rover()
{
ctx.drawImage(newroverimage, roverx,rovery,roverwidth, roverheight);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)

keyPressed = e.keycode;
console.log(keyPressed);

if(keyPressed == '38')
{
up();
console.log("up");
}
if(keyPressed == '40')
{
down();
console.log("down");
}
if(keyPressed == '37')
{
left();
console.log("left");
}
if(keyPressed == '39')
{
right();
console.log("right");
}