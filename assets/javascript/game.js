var currentNumber = 0;
var wins = 0;
var losses = 0;
var greenBase = 1;
var yellowBase = 2;
var blueBase = 3;
var purpleBase = 4;
var currentTally = 0;        

var gemValues = [ 0, 1, 3, 5, 7, 9, 11]

$(document).ready(function(){     

        // new gem values
var greenNum = newValue(greenBase);
var yellowNum = newValue(yellowBase);
var blueNum = newValue(blueBase);
var purpleNum = newValue(purpleBase);

resetTally();   //set tally to 0
tallyPrint();   //print and log tally
newNumber();    //new random number
winsPrint();    //print wins
lossesPrint();  //print losses

// On Gem Events   // show value, update currentTally, hide value
    $('#green').on('click', function(){
        currentTally = addToTally(greenNum);
        tallyPrint();
        $('#green-num').html(greenNum);
        $('#green-num').show();
        isWin();
        isLoss();
    })
    $('#green').mouseleave(function () {
        $('#green-num').hide();
    })

    $('#yellow').on('click', function(){
        currentTally = addToTally(yellowNum);
        tallyPrint();
        $('#yellow-num').html(yellowNum);
        $('#yellow-num').show();
        isWin ();
        isLoss ();
    })
    $('#yellow').mouseleave(function () {
        $('#yellow-num').hide();
    })

    $('#blue').on('click', function(){
        currentTally = addToTally(blueNum);
        tallyPrint();
        $('#blue-num').html(blueNum);
        $('#blue-num').show();
        isWin();
        isLoss();
    })
    $('#blue').mouseleave(function () {
        $('#blue-num').hide();
    })
    
    $('#purple').on('click', function(){
        currentTally = addToTally(purpleNum);
        tallyPrint();
        $('#purple-num').html(purpleNum);
        $('#purple-num').show();
        isWin();
        isLoss();
    })
    $('#purple').mouseleave(function () {
        $('#purple-num').hide();
    })
   
//                   F U N C T I O N S

function newNumber() {          //random number
    currentNumber = Math.floor((Math.random()*50)+10);
    $('#current-number').html(currentNumber);
};

function newValue(base) {      //crystal values
    var newNum = base + gemValues[Math.floor(Math.random() * gemValues.length)];
    return newNum
}

function winsPrint() {          //print wins value
    $('#wins-print').html(wins);
}

function lossesPrint() {       //print losses value
    $('#losses-print').html(losses);
}

function resetTally() {        //set current tally to 0
    currentTally = 0;
}

function addToTally(e) {       //add called # to tally
    return currentTally + e;
}

function tallyPrint() {        //print current tally
    $('#current-score').html(currentTally);
}

function isLoss() {            //loss reset
    if (currentTally > currentNumber) {
        losses ++;
        lossesPrint();
        resetTally();
        tallyPrint();        
        newNumber();
            greenNum = newValue(greenBase);
            yellowNum = newValue(yellowBase);
            blueNum = newValue(blueBase);
            purpleNum = newValue(purpleBase);
    }
}

function isWin() {              //win reset
    if (currentTally == currentNumber) {
        wins ++;
        winsPrint();
        resetTally();
        tallyPrint();
        newNumber();  
        greenNum = newValue(greenBase);
        yellowNum = newValue(yellowBase);
        blueNum = newValue(blueBase);
        purpleNum = newValue(purpleBase);
    }
}

})