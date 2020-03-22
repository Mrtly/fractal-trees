const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
const ctx = canvas.getContext('2d');
let curve = 10;
 
function draw(startX, startY, len, angle, branchWidth, color1, color2) {
  ctx.lineWidth = branchWidth;
  ctx.beginPath();
  ctx.save();
 
  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0, 0);
  // ctx.lineTo(0, -len);
  if(angle > 0) {
    ctx.bezierCurveTo(20, -len/2, 5, -len/2, 0, -len);
} else {
    ctx.bezierCurveTo(-20, -len/2, -5, -len/2, 0, -len);
}

  ctx.strokeStyle = color1;
  ctx.fillStyle = color2;
  ctx.stroke();
  ctx.shadowBlur = 15;
  ctx.shadowColor = "rgba(0,0,0,0.9)";
   
  if(len < 14) {
    ctx.beginPath();
    ctx.arc(0, -len, 15, 0, Math.PI/2);
    ctx.fill();
    ctx.restore();
    return;
  }
  
  
draw(0, -len, len*0.8, angle + curve, branchWidth*0.5);
draw(0, -len, len*0.8, angle - curve, branchWidth*0.4);
  
  ctx.restore();
}
draw(canvas.width/2, canvas.height - 85, 120, 0, 25, "goldenrod", "darkred");

function generate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let centerPointX = canvas.width/2;
  let len = Math.floor((Math.random() * 20) + 120);
  let angle = 0;
  let branchWidth = (Math.random() * 80) + 1;
  let color1 = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
   let color2 = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
  
  curve = (Math.random() * 20) + 2;
 
  draw(centerPointX, canvas.height - 80, len, angle, branchWidth, color1, color2);
}

const button = document.querySelector('.generate');

button.addEventListener('click', generate);


// with kudos to the coding train for all the art math!
