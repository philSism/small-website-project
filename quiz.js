var questions=[{
	question:"When was Mickey's first appearance?",
	answer1:"1954",
	answer2:"1943",
	answer3:"1975",
	answer4:"1928",
	correct:"1928"
}, {
	question:"What is the name of Mickey's dog?",
	answer1:"Pluto",
	answer2:"Peg-Leg Pete",
	answer3:"Huey",
	answer4:"Mortimer",
	correct:"Pluto"
}, {
	question:"What is the name of Donald's Duck uncle?",
	answer1:"Gladstone Gander",
	answer2:"Scrooge McDuck",
	answer3:"Gus Goose",
	answer4:"Fethry Duck",
	correct:"Scrooge McDuck"
}, {
	question:"What is the name of Minnie's father?",
	answer1:"Goofy",
	answer2:"Morty Fieldmouse",
	answer3:"Ferdie Fieldmouse",
	answer4:"Marcus Mouse",
	correct:"Marcus Mouse"
}, {
	question:"Who was the Phantom Duck?",
	answer1:"Daisy Duck",
	answer2:"Donald Duck",
	answer3:"Scrooge McDuck",
	answer4:"Magica De Spell",
	correct:"Donald Duck"
},{
	question:"In which of these cartoons was Mickey first revealed to the public in full color?",
	answer1:"Moose Hunters",
	answer2:"The Three Musketeers",
	answer3:"Brave Little Tailor",
	answer4:"The Band Concert",
	correct:"The Band Concert"
}]



document.getElementById("button").style.visibility = "hidden"; 
document.getElementById("restart").style.visibility = "hidden"; 

var used=[];  //the id of the questions that has been shown
var usedQ=0; //number of questions that has been shown
var numberOfQuestions=5;
var stats=0; //number of correct answers
var id; //the id of the question based on its potition to the array

showQ();

function showQ(){
	var num= choose();
	console.log(num);
	id=num;
	document.getElementById("question").innerHTML=questions[num].question;
	document.getElementById("an1").innerHTML=questions[num].answer1;
	document.getElementById("an2").innerHTML=questions[num].answer2;
	document.getElementById("an3").innerHTML=questions[num].answer3;
	document.getElementById("an4").innerHTML=questions[num].answer4;
	
}


function checkAnswer(an,numberOfAnswer){
	for (var i = 0; i < an.length; i++) {
		if(an[i]==numberOfAnswer){
			return true;
		}
	}
	return false;
}


function choose(){	
	while(used.length<=numberOfQuestions){	
		var number=Math.floor(Math.random() * numberOfQuestions);		
		if(!check(number)){
			used.push(number);			
			usedQ=usedQ+1;	
			//console.log("after"+used);
			return number;
		}	
	}
	
}



function check(number){
	for (var i = 0; i < used.length; i++) {
		if(used[i]==number){
			return true;
		}
	}
	return false;	
}

//shows if the users answer of the question was correct
function showResult(result){
	document.getElementById('an1').style.display='none';
	document.getElementById('an2').style.display='none';
	document.getElementById('an3').style.display='none';
	document.getElementById('an4').style.display='none';
	document.getElementById("button").style.visibility = "visible"; 
	console.log(result);
	if(result){
		//console.log("mpike1");
		document.getElementById("question").innerHTML="Correct";
		
	}else{
		//console.log("mpike2");
		document.getElementById("question").innerHTML="Wrong";
	}
	/*if(used.length==numberOfQuestions){
		showStats();
	}else{
		showQ();
	}*/

}

document.getElementById("button").addEventListener("click", function(){	
	if(used.length==numberOfQuestions){
		showStats();
	}else{
		document.getElementById('an1').style.display='block';
		document.getElementById('an2').style.display='block';
		document.getElementById('an3').style.display='block';
		document.getElementById('an4').style.display='block';
		document.getElementById("button").style.visibility = "hidden"; 
		showQ();
	}
    
});


document.getElementById("restart").addEventListener("click", function(){	
	document.getElementById("restart").style.visibility = "hidden"; 
	restart();
    
});
function restart(){
	used=[];  
	usedQ=0;
	stats=0; 
	document.getElementById('an1').style.display='block';
	document.getElementById('an2').style.display='block';
	document.getElementById('an3').style.display='block';
	document.getElementById('an4').style.display='block';
	document.getElementById("button").style.visibility = "hidden"; 
	console.log("length="+used.length);
	showQ();
	

}

function showStats(){
	document.getElementById('an1').style.display='none';
	document.getElementById('an2').style.display='none';
	document.getElementById('an3').style.display='none';
	document.getElementById('an4').style.display='none';
	document.getElementById('button').style.visibility = "hidden"; 
	document.getElementById('restart').style.visibility = 'visible';
	document.getElementById("question").innerHTML=stats+"/"+numberOfQuestions+" correct";
}

document.getElementById("an1").addEventListener("click", function(){
	if(questions[id].correct==questions[id].answer1){
		showResult(true);
		stats++;
	}else{
		showResult(false);
	}
	return;
	/*if(used.length==numberOfQuestions){
		showStats();
	}else{
		showQ();
	}*/
    
});

document.getElementById("an2").addEventListener("click", function(){
	if(questions[id].correct==questions[id].answer2){
		showResult(true);
		stats++;
	}else{
		showResult(false);
	}
	return;
    
});

document.getElementById("an3").addEventListener("click", function(){
	if(questions[id].correct==questions[id].answer3){
		showResult(true);
		stats++;
	}else{
		showResult(false);
	}
	return;
    
});

document.getElementById("an4").addEventListener("click", function(){
	if(questions[id].correct==questions[id].answer4){
		showResult(true);
		stats++;
	}else{
		showResult(false);
	}
	return;
    
});

  
  
