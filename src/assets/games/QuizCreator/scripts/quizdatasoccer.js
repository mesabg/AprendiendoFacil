<!-- Start User Input //-->
var quizname = "Quiz Soccer";
var answerhighlighter = "transparent"; 
var answerhighlighterclicked = "palegreen";
var forecolor = "black";
var forecolorclicked = "purple";
var buttonvisibility = "hidden"; 

var passmark = 1;
var copyright = "TJNixon";

var question = new Array(11);
question[0] = "Who is this footballer?";
question[1] = "Who is this footballer?";
question[2] = "Who is this footballer?";
question[3] = "Who is this footballer?";
question[4] = "Who is this footballer?";
question[5] = "Who is this footballer?";
question[6] = "Who is this footballer?";
question[7] = "Who is this footballer?";
question[8] = "Who is this footballer?";
question[9] = "Who is this footballer?";
question[10] = "Who is this footballer?";


var answerques0 = new Array(4);
answerques0[0] = "Dummy0"; 
answerques0[1] = "Dummy0";
answerques0[2] = "Dummy0";
answerques0[3] = "Dummy0";

var answerques1 = new Array(4);
answerques1[0] = "Franz Beckenbauer";
answerques1[1] = "Robin Van Persie";
answerques1[2] = "Marco Van Basten";
answerques1[3] = "Arjen Robben";

var answerques2 = new Array(4);
answerques2[0] = "Uwe Seeler";
answerques2[1] = "David Luiz";
answerques2[2] = "Michael Laudrup";
answerques2[3] = "Michel Platini";

var answerques3 = new Array(4);
answerques3[0] = "Paolo Maldini";
answerques3[1] = "Gerd Muller";
answerques3[2] = "Franco Baresi";
answerques3[3] = "Lionel Mesi";

var answerques4 = new Array(4);
answerques4[0] = "Luiz Suarez";
answerques4[1] = "Diego Maradona";
answerques4[2] = "Cafu";
answerques4[3] = "Socrates";

var answerques5 = new Array(4);
answerques5[0] = "Neymar da Silva Santos Junior";
answerques5[1] = "Alfredo di Stefano";
answerques5[2] = "Hugo Sanchez";
answerques5[3] = "Roberto Carlos";

var answerques6 = new Array(4);
answerques6[0] = "Christiano Ronaldo";
answerques6[1] = "Ronaldinho";
answerques6[2] = "Roberto Carlos";
answerques6[3] = "Robin Van Persie";

var answerques7 = new Array(4);
answerques7[0] = "Andrea Pirlo";
answerques7[1] = "Giuseppe Meazza";
answerques7[2] = "Gianluigi Buffon";
answerques7[3] = "Radamel Falcao";

var answerques8 = new Array(4);
answerques8[0] = "Sergio Aguero";
answerques8[1] = "Xavi Hernandez";
answerques8[2] = "Cesc Fabregas";
answerques8[3] = "Diego Forlan";

var answerques9 = new Array(4);
answerques9[0] = "Zinedine Zidane";
answerques9[1] = "Franz Beckenbauer";
answerques9[2] = "Johan Cruyff";
answerques9[3] = "Lothar Matthaus";

var answerques10 = new Array(4);
answerques10[0] = "Tim Cahill";
answerques10[1] = "Matt Ryan";
answerques10[2] = "Kenny Dalglish";
answerques10[3] = "Jermain Defoe";


var correctanswer = new Array(11);
correctanswer[0] = "Dummy0";
correctanswer[1] = "Arjen Robben";
correctanswer[2] = "David Luiz";
correctanswer[3] = "Lionel Mesi";
correctanswer[4] = "Luiz Suarez";
correctanswer[5] = "Neymar da Silva Santos Junior";
correctanswer[6] = "Christiano Ronaldo";
correctanswer[7] = "Andrea Pirlo";
correctanswer[8] = "Sergio Aguero";
correctanswer[9] = "Zinedine Zidane";
correctanswer[10] = "Tim Cahill";


var qimages = new Array(11)
qimages[0] = "<img src='null.gif' id = 'qimage0' alt = 'qimage0'>"
qimages[1] = "<img src='imagessoccer/arjenrobben.jpg' alt = 'image1' width = 250px; height = 194px;>"
qimages[2] = "<img src='imagessoccer/davidluiz.jpg' alt = 'image2' width = 223px; height = 223px;>"
qimages[3] = "<img src='imagessoccer/lionelmesi.jpg' alt = 'image3' width = 206px; height = 190px;>"
qimages[4] = "<img src='imagessoccer/luizsuarezhulk.jpg' alt = 'image4' width = 240px; height = 174px;>"
qimages[5] = "<img src='imagessoccer/neymar.jpg' alt = 'image5' width = 250px; height = 250px;>"
qimages[6] = "<img src='imagessoccer/ronaldo.jpg' alt = 'image6' width = 177px; height = 262px;>"
qimages[7] = "<img src='imagessoccer/andreapirlo.jpg' alt = 'image7' width = 220px; height = 150px;>"
qimages[8] = "<img src='imagessoccer/sergioaguero.jpg' alt = 'image8' width = 234px; height = 164px;>"
qimages[9] = "<img src='imagessoccer/zinedinezidane.jpg' alt = 'image9' width = 205px; height = 140px;>"
qimages[10] = "<img src='imagessoccer/timcahill.jpg' alt = 'image10' width = 214px; height = 125px;>"


var imgrightanswer = "<img src='images/smileyright.png' id = 'imageright' alt = 'correct'>"
var imgwronganswer = "<img src='images/smileywrong.png' id = 'imagewrong' alt = 'incorrect'>"

// held in reserve if need multiple images
var imgcongrats = new Array(3)
imgcongrats[0] = "<img src='null.gif'>"
imgcongrats[1] = "<img src='null.gif'>"

var imgcongrats = "<img src='images/dancingchickenanim.gif' id = 'congratsimage' alt = 'congrats'>"
var txtcongrats = "Congratulations - passmark for this demo is 10%";
<!-- End User Input //-->
