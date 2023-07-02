var gap = 6.0;
var gap1 = 11;
var gap2 = 7;
var z, z1, z2;
var o, o1, o2, o3;
var direction, direction1, direction2, direction3, direction4, direction5;
var transp;
var x, x1;

function setup() {
  createCanvas(512, 512);
  z = 41;
  z1 = 198;
  z2 = 341;
  x = 0;
  x1 = 0;
  o = 271;
  o1 = 374;
  o2 = -30;
  o3 = 26;
  o5 = 99;
  o6 = 600;
  direction = random(0.0075, 0.0081);
  direction1 = -1.0063;
  direction2 = -1.045;
  direction3 = random(0.0064, 0.0074);
  direction4 = 0.0055;
  direction5 = 0.125;
  transp = 5;
}

function draw() {
  background(2);
  frameRate(32);

  fill(2);
  stroke(50);

  quad(x - 12, 421, x + 2, 416, x + 4, 481, x - 8, 481);
  quad(x + 92, 421, x + 103, 421, x + 102, 481, x + 87, 482);
  quad(x + 182, 421, x + 205, 431, x + 202, 481, x + 192, 483);
  quad(x + 292, 421, x + 302, 421, x + 307, 481, x + 282, 483);
  quad(x + 392, 421, x + 408, 421, x + 402, 481, x + 390, 483);
  quad(x + 482, 421, x + 502, 421, x + 502, 481, x + 492, 483);

  rect(x - 44, 27, 26, 26);
  rect(x + 6, 27, 26, 26);
  rect(x + 56, 27, 26, 26);
  rect(x + 106, 27, 26, 26);
  rect(x + 156, 27, 26, 26);
  rect(x + 206, 27, 26, 26);
  rect(x + 256, 27, 26, 26);
  rect(x + 306, 27, 26, 26);
  rect(x + 356, 27, 26, 26);
  rect(x + 406, 27, 26, 26);
  rect(x + 456, 27, 26, 26);
  rect(x + 506, 27, 26, 26);
  rect(x + 556, 27, 26, 26);

  x = x + direction5;
  if (x >= 45 || x <= -45) {
    direction5 *= -1;
  }

  stroke(125, transp);
  noFill();
  for (i = 0; i < 91; i++) {
    bezier(
      z2 + gap * i,
      255 + gap2 * i,
      471,
      o1,
      o2,
      o3,
      55 + gap1 * i,
      o6 + gap2 * i
    );

    bezier(
      z + gap * -i,
      55 + gap1 * -i,
      o,
      o1,
      o2,
      o3,
      755 + -gap * -i,
      -z + gap2 * -i
    );
    bezier(
      z2 + gap * -i,
      455 + gap * -i,
      o6,
      o1,
      900,
      o3,
      455 + gap * -i,
      725 + -gap * -i
    );

    bezier(o, 455 + gap * -i, o1, o, 40, o3, 45 + gap * -i, 482);

    bezier(-z1 + gap * -i, -234, o1, o2, o6, 490, 734, z1 + gap * -i);

    z2 = z2 + direction;
    o = o + direction;
    o1 = o1 + direction1;
    o2 = o2 + direction2;
    o3 = o3 + direction3;
    o6 = o6 + direction1;

    transp = transp + direction4;
    if (transp >= 100 || transp <= 2) {
      direction4 *= -1;
    }
    if (o >= 299 || o <= 215) {
      direction *= -1;
    }
    if (o1 >= 390 || o1 <= 345) {
      direction1 *= -1;
    }
    if (o2 >= 10 || o2 <= 45) {
      direction2 *= -1;
    }
    if (o3 >= 50 || o3 <= 0) {
      direction3 *= -1;
    }
  }
  push();
  stroke(150, transp);
  translate(width / 2, height / 2);
  rotate(frameCount * random(500, 1000));
  rotate(PI / 3.0);
  rect(x - 7, -7, 14, 14);
  rect(x - 13, -13, 26, 26);
  rect(x - 26, -26, 52, 52);
  rect(x1 - 51, -51, 102, 102);
  rect(x - 76, -76, 152, 152);
  rect(x - 120, -120, 240, 240);
  rect(x - 150, -150, 300, 300);
  quad(x1 + 188, 73, x + 94, 76, x1 + 94, 115, x + 269, 115);
  quad(x1 + 168, 53, x + 70, 56, x1 + 60, 95, x + 240, 95);
  quad(x1 + 148, 33, x + 50, 36, x1 + 30, 75, x + 210, 75);
  rotate(PI / 2.7);
  rect(x - 7, -7, 14, 14);
  rect(x - 26, -26, 52, 52);
  rect(x - 13, -13, 26, 26);
  rect(x1 - 51, -51, 102, 102);
  rect(x - 76, -76, 152, 152);
  rect(x - 120, -120, 240, 240);
  rect(x - 150, -150, 300, 300);
  quad(x1 + 188, 73, x + 94, 76, x1 + 94, 115, x + 269, 115);
  quad(x1 + 168, 53, x + 70, 56, x1 + 60, 95, x + 240, 95);
  quad(x1 + 148, 33, x + 50, 36, x1 + 30, 75, x + 210, 75);
  rotate(PI / 2.9);
  rect(x - 7, -7, 14, 14);
  rect(x - 26, -26, 52, 52);
  rect(x - 13, -13, 26, 26);
  rect(x1 - 51, -51, 102, 102);
  rect(x - 76, -76, 152, 152);
  rect(x - 120, -120, 240, 240);
  rect(x - 150, -150, 300, 300);
  quad(x1 + 188, 73, x + 94, 76, x1 + 94, 115, x + 269, 115);
  quad(x1 + 168, 53, x + 70, 56, x1 + 60, 95, x + 240, 95);
  quad(x1 + 148, 33, x + 50, 36, x1 + 30, 75, x + 210, 75);
  rotate(PI / 3.1);
  rect(x - 7, -7, 14, 14);
  rect(x - 26, -26, 52, 52);
  rect(x - 13, -13, 26, 26);
  rect(x1 - 51, -51, 102, 102);
  rect(x - 76, -76, 152, 152);
  rect(x - 120, -120, 240, 240);
  rect(x - 150, -150, 300, 300);
  quad(x1 + 188, 73, x + 94, 76, x1 + 94, 115, x + 269, 115);
  quad(x1 + 168, 53, x + 70, 56, x1 + 60, 95, x + 240, 95);
  quad(x1 + 148, 33, x + 50, 36, x1 + 30, 75, x + 210, 75);
  rotate(PI / 3.3);
  rect(x - 7, -7, 14, 14);
  rect(x - 26, -26, 52, 52);
  rect(x - 13, -13, 26, 26);
  rect(x1 - 51, -51, 102, 102);
  rect(x - 76, -76, 152, 152);
  rect(x - 120, -120, 240, 240);
  rect(x - 150, -150, 300, 300);
  quad(x1 + 188, 73, x + 94, 76, x1 + 94, 115, x + 269, 115);
  quad(x1 + 168, 53, x + 70, 56, x1 + 60, 95, x + 240, 95);
  quad(x1 + 148, 33, x + 50, 36, x1 + 30, 75, x + 210, 75);
  rotate(PI / 3.5);
  rect(x - 7, -7, 14, 14);
  rect(x - 26, -26, 52, 52);
  rect(x - 13, -13, 26, 26);
  rect(x1 - 51, -51, 102, 102);
  rect(x - 76, -76, 152, 152);
  rect(x - 120, -120, 240, 240);
  rect(x - 150, -150, 300, 300);
  quad(x1 + 188, 73, x + 94, 76, x1 + 94, 115, x + 269, 115);
  quad(x1 + 168, 53, x + 70, 56, x1 + 60, 95, x + 240, 95);
  quad(x1 + 148, 33, x + 50, 36, x1 + 30, 75, x + 210, 75);
  x = x + direction;
  if (x >= 50 || x <= -50) {
    direction *= -1;
  }
  x1 = x1 + direction3;
  if (x >= 45 || x < -45) {
    direction3 ^= -1;
  }
  pop();
}
