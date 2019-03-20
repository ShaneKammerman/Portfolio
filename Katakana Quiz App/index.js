function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

//shuffle katakana array 
var arr = [
  {que:'ア', val:'a'},
  {que:'イ', val:'i'},
  {que:'ウ', val:'u'},
  {que:'エ', val:'e'},
  {que:'オ', val:'o'},
  {que:'カ', val:'ka'},
  {que:'キ', val:'ki'},
  {que:'ク', val:'ku'},
  {que:'ケ', val:'ke'},
  {que:'コ', val:'ko'},
  {que:'サ', val:'sa'},
  {que:'シ', val:'shi'},
  {que:'ス', val:'su'},
  {que:'セ', val:'se'},
  {que:'ソ', val:'so'},
  {que:'タ', val:'ta'},
  {que:'チ', val:'chi'},
  {que:'ツ', val:'tsu'},
  {que:'テ', val:'te'},
  {que:'ト', val:'to'},
  {que:'ナ', val:'na'},
  {que:'ニ', val:'ni'},
  {que:'ヌ', val:'nu'},
  {que:'ネ', val:'ne'},
  {que:'ノ', val:'no'},
  {que:'ハ', val:'ha'},
  {que:'ヒ', val:'hi'},
  {que:'フ', val:'fu'},
  {que:'ヘ', val:'he'},
  {que:'ホ', val:'ho'},
  {que:'マ', val:'ma'},
  {que:'ミ', val:'mi'},
  {que:'ム', val:'mu'},
  {que:'メ', val:'me'},
  {que:'モ', val:'mo'},
  {que:'ヤ', val:'ya'},
  {que:'ユ', val:'yu'},
  {que:'ヨ', val:'yo'},
  {que:'ラ', val:'ra'},
  {que:'リ', val:'ri'},
  {que:'ル', val:'ru'},
  {que:'レ', val:'re'},
  {que:'ロ', val:'ro'},
  {que:'ワ', val:'wa'},
  {que:'ヲ', val:'wo'},
  {que:'ン', val:'n'},
];

arr = shuffle(arr);
var i = 0;
console.log(arr);

//Cycle through array and return each object on each button click
function nextItem() {
  i = i + 1; // increase i by one
  i = i % arr.length; // if we've gone too high, start from `0` again
  return (arr[i].que); // give us back the item of where we are now
};

window.addEventListener('load', function () {
  document.getElementById('output').textContent = arr[0].que; // initial value
});

//Submit textbox on enter key
function listenForEnter() {
  document.getElementById("answer").addEventListener("keydown", function(e) {
    // if (!e) { var e = window.event; }
    // e.preventDefault(); // sometimes useful
  
    // Enter is pressed
    if (e.keyCode == 13) { 
      submitAnswer(); 
    };
  })
};

//Match text input to current katakana array object
function submitAnswer() {
  var text = document.getElementById('answer').value;
  if (arr[i].val === text) {
    console.log('correct');
    document.getElementById('output').textContent = nextItem();
    document.getElementById('answer').value = "";
    score++;
    updateScore();
  }
};


//Counting the score + ending the game
var score = 0;

function updateScore() {	
  document.getElementById('score').textContent = "Score: " + returnScore();
  if (score === 46) {
    gameOver();
  };
};

function returnScore() {
  return score;
};

function gameOver() {
  alert("You killed the samurai! Click 'OK' to play again!");
  window.location.reload();
};