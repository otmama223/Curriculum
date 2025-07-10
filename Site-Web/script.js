function drawCanvasImage() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("scream"); // Get the existing image element
  ctx.drawImage(img, 10, 10); // Draw it directly (no onload needed as it's already loaded)
}