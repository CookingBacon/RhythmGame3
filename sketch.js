let arrows = []; 
let notes = [];
let song;
let songDuration; 
let targetX; 
let score = 0;
let songStartTime = 0; 
var stage = 1;
let bgVideo;
let songPlayed = false;

function preload() {
  note = loadImage("note.png");
  note4 = loadImage("note4.png");
  noteSound = loadSound("NoteSound.wav");
  song = loadSound("Suteki_Da_Nae.mp3");
  songDuration = song.duration();
  bgVideo = createVideo("FF10.mp4");
}

function setup() {
  createCanvas(1200, 800);
  targetX = width - 350;
  bgVideo.hide();

  //1 sec = 500ms
  scheduleNotes(3750, RIGHT_ARROW);
  scheduleNotes(4500, RIGHT_ARROW);
  scheduleNotes(5000, DOWN_ARROW);
  scheduleNotes(5500, DOWN_ARROW);
  scheduleNotes(6250, DOWN_ARROW);
  scheduleNotes(6750, DOWN_ARROW);
  scheduleNotes(7250, UP_ARROW);
  scheduleNotes(8000, UP_ARROW);
  scheduleNotes(8500, UP_ARROW);
  scheduleNotes(9000, LEFT_ARROW);
  scheduleNotes(9750, LEFT_ARROW);
  scheduleNotes(10700, LEFT_ARROW);
  scheduleNotes(11500, LEFT_ARROW);
  scheduleNotes(12000, LEFT_ARROW);
  scheduleNotes(12300, LEFT_ARROW);
  //2 Arrows below
  scheduleNotes(12750, UP_ARROW);
  scheduleNotes(13250, DOWN_ARROW);
  //...
  scheduleNotes(14000, DOWN_ARROW);
  scheduleNotes(15000, DOWN_ARROW);
  scheduleNotes(15300, DOWN_ARROW);
  scheduleNotes(15750, DOWN_ARROW);
  //2 arrows below
  scheduleNotes(16250, RIGHT_ARROW);
  scheduleNotes(16600, RIGHT_ARROW);
  //...
  scheduleNotes(17500, RIGHT_ARROW);
  scheduleNotes(18250, RIGHT_ARROW);
  scheduleNotes(18750, RIGHT_ARROW);
  scheduleNotes(19250, DOWN_ARROW);
  //...
  scheduleNotes(20000, DOWN_ARROW);
  scheduleNotes(20500, DOWN_ARROW);
  scheduleNotes(21000, DOWN_ARROW);
  scheduleNotes(21750, UP_ARROW);
  //...
  scheduleNotes(22500, UP_ARROW);
  scheduleNotes(23000, UP_ARROW);
  //Hoo, kuno
  scheduleNotes(23500, LEFT_ARROW);
  scheduleNotes(24350, LEFT_ARROW);
  scheduleNotes(25250, LEFT_ARROW);
  scheduleNotes(25750, LEFT_ARROW);
  scheduleNotes(26000, LEFT_ARROW);
  scheduleNotes(27000, LEFT_ARROW);
  //Koe
  scheduleNotes(27750, UP_ARROW);
  scheduleNotes(28750,UP_ARROW);
  scheduleNotes(29500, UP_ARROW);
  //2 arrows below
  scheduleNotes(30250, DOWN_ARROW);
  scheduleNotes(30750, DOWN_ARROW);
  scheduleNotes(31125, DOWN_ARROW);
  scheduleNotes(31125, RIGHT_ARROW);
  //tsuki
  scheduleNotes(32125, RIGHT_ARROW);
  scheduleNotes(32500, RIGHT_ARROW);
  scheduleNotes(33000, DOWN_ARROW);
  scheduleNotes(33000, UP_ARROW);
  //ga nijimu
  scheduleNotes(33750,DOWN_ARROW);
  scheduleNotes(34250,DOWN_ARROW);
  scheduleNotes(34750, UP_ARROW);
  scheduleNotes(34750, LEFT_ARROW);
  //kagami wo
  scheduleNotes(35500,UP_ARROW);
  scheduleNotes(36250, UP_ARROW);
  scheduleNotes(36750, UP_ARROW);
  //nagareta
  scheduleNotes(38000, UP_ARROW);
  scheduleNotes(38750, UP_ARROW);
  scheduleNotes(39750, UP_ARROW);
  scheduleNotes(39750, LEFT_ARROW);
  //kokoro
  scheduleNotes(41500,DOWN_ARROW);
  scheduleNotes(42250, DOWN_ARROW);
  scheduleNotes(43250, DOWN_ARROW);
  scheduleNotes(43250, RIGHT_ARROW);
  //...
  scheduleNotes(44000,RIGHT_ARROW);
  scheduleNotes(44750,RIGHT_ARROW);
  //hoshi ga yurete
  scheduleNotes(45750,RIGHT_ARROW);
  scheduleNotes(46250,RIGHT_ARROW);
  scheduleNotes(46650, DOWN_ARROW);
  scheduleNotes(47500, DOWN_ARROW);
  scheduleNotes(47850, UP_ARROW);
  //koboreta
  scheduleNotes(48500, UP_ARROW);
  scheduleNotes(49250, UP_ARROW);
  scheduleNotes(49600,UP_ARROW);
  scheduleNotes(50000,LEFT_ARROW);
  scheduleNotes(50000, RIGHT_ARROW);
  //kakusenai
  scheduleNotes(51000, LEFT_ARROW);
  scheduleNotes(51850, LEFT_ARROW);
  scheduleNotes(52500,UP_ARROW);
  scheduleNotes(53500,UP_ARROW);
  scheduleNotes(54500,UP_ARROW);
  //namida
  scheduleNotes(55250, DOWN_ARROW);
  scheduleNotes(55600, DOWN_ARROW);
  scheduleNotes(55950, DOWN_ARROW);

  scheduleNotes(56750,LEFT_ARROW);
  scheduleNotes(56750, RIGHT_ARROW);
  scheduleNotes(57500,LEFT_ARROW);
  scheduleNotes(57500, RIGHT_ARROW);

  scheduleNotes(58500,RIGHT_ARROW);
  scheduleNotes(59250,DOWN_ARROW);
  scheduleNotes(59800,UP_ARROW);
  scheduleNotes(60500,LEFT_ARROW);
  //suteki da nae
  scheduleNotes(61250,LEFT_ARROW);
  scheduleNotes(61500,LEFT_ARROW);
  scheduleNotes(62000,LEFT_ARROW);
  scheduleNotes(63000,LEFT_ARROW);
  scheduleNotes(63750, LEFT_ARROW);

  scheduleNotes(65500, UP_ARROW);
  scheduleNotes(66250,UP_ARROW);
  scheduleNotes(66750, UP_ARROW);
  scheduleNotes(67250, UP_ARROW);
  scheduleNotes(67750, UP_ARROW);
  scheduleNotes(68100, UP_ARROW);
  scheduleNotes(68450, UP_ARROW);
  //...
  scheduleNotes(68750, DOWN_ARROW);
  scheduleNotes(69750,DOWN_ARROW);
  scheduleNotes(70500, DOWN_ARROW);
  scheduleNotes(71500, DOWN_ARROW);
  scheduleNotes(72000,DOWN_ARROW);
  scheduleNotes(72400, DOWN_ARROW);
  //ikitai ii yo
  scheduleNotes(75000,RIGHT_ARROW);
  scheduleNotes(75500,RIGHT_ARROW);
  scheduleNotes(76000,RIGHT_ARROW);
  scheduleNotes(76750,RIGHT_ARROW);
  scheduleNotes(77500,RIGHT_ARROW);
  //kimi no machi ie
  scheduleNotes(79400,DOWN_ARROW);
  scheduleNotes(80250,DOWN_ARROW);
  scheduleNotes(81000,DOWN_ARROW);
  scheduleNotes(81400,DOWN_ARROW);
  scheduleNotes(81800,DOWN_ARROW);
  scheduleNotes(82200,DOWN_ARROW);
  //ude no naka
  scheduleNotes(82600,RIGHT_ARROW);
  scheduleNotes(83500, LEFT_ARROW);
  scheduleNotes(84500,RIGHT_ARROW);
  scheduleNotes(85400,LEFT_ARROW);
  scheduleNotes(86300,LEFT_ARROW);
  scheduleNotes(86300,RIGHT_ARROW);
  //...
  scheduleNotes(87750,LEFT_ARROW);
  scheduleNotes(88550,UP_ARROW);
  scheduleNotes(89250,DOWN_ARROW);
  scheduleNotes(89600,RIGHT_ARROW);
  //sono kao
  scheduleNotes(90500,DOWN_ARROW);
  scheduleNotes(91500,LEFT_ARROW);
  scheduleNotes(92350,LEFT_ARROW);
  scheduleNotes(93150,UP_ARROW);
  scheduleNotes(94000,UP_ARROW);
  scheduleNotes(94750,UP_ARROW);
  scheduleNotes(95550,UP_ARROW);
  //sotto furete
  //asa ni tokeru
  //yume miru
}

function draw(){
  if (stage == 1){
    titleScreen();
  } else if (stage == 2){
    rhythmGame();
  }
}

function mousePressed() {
  if (stage == 1){
    stage = 2;
    bgVideo.play();
    songStartTime = millis();
  }
}

function titleScreen(){
  background(255);
  textSize(20);
  textAlign(CENTER);
  text("Click mouse to play", width/2, 500);
  textSize(40);
  text("Rhythm Game", width/2, 300);
}

function rhythmGame() {
  background(50);
  let currentTime = millis() - songStartTime;

  if(!songPlayed && currentTime >= 3000){
    song.play();
    songPlayed = true
  }
  image(bgVideo,0,0,width,height);
  image(note4, 0, 0);


  // Check if it's time to spawn new arrows
  for (let i = notes.length - 1; i >= 0; i--) {
    if (notes[i].time <= currentTime) {
      // Add a new arrow to the array
      arrows.push({
        type: notes[i].type,
        x: 50,
        speed: 5,
      });
      notes.splice(i, 1); // Remove the note after spawning it
    }
  }

  // Update and display arrows
  for (let i = arrows.length - 1; i >= 0; i--) {
    arrows[i].x += arrows[i].speed; // Move arrow down

    // Display the arrow as an image
    if (arrows[i].type === RIGHT_ARROW) {
      y = height - 260;
      image(note, arrows[i].x, y - 20, 450, 350);
    } else if (arrows[i].type === DOWN_ARROW) {
      y = height - 460;
      image(note, arrows[i].x, y - 20, 450, 350);
    } else if (arrows[i].type === UP_ARROW) {
      y = height - 660;
      image(note, arrows[i].x, y - 20, 450, 350);
    } else if (arrows[i].type === LEFT_ARROW) {
      y = height - 830;
      image(note, arrows[i].x, y - 40, 450, 350);
    }

    if (arrows[i].x > width) {
      arrows.splice(i, 1);
    }
  }

  fill(255);
  textSize(24);
  textAlign(LEFT, TOP);
  text(`Score: ${score}`, 10, 10);
}

function keyPressed() {
  for (let i = arrows.length - 1; i >= 0; i--) {
    if (
      arrows[i].type === keyCode && // Correct key pressed
      arrows[i].x > targetX - 30 && // Arrow is in the timing zone
      arrows[i].x < targetX + 30
    ) {
      score++;
      arrows.splice(i, 1); // Remove the arrow
      noteSound.play();
      break;
    }
  }
}

// Schedule a note (time in ms, arrow type)
function scheduleNotes(time, type) {
  notes.push({ time: time, type: type });
}

function setName() {
  input = createInput();
  input.position(width / 2 - 85, height / 2 + 20);
  input.value("Nova");
}