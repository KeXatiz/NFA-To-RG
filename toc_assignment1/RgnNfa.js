function submit() {
    setFinalState();
    DisplayVariables();
    DisplayVariablesA();
    DisplayVariablesB();
    DisplayVariablesC();
    DisplayEpsilon();
    DisplayStates();

    DisplayVariablesA_NoEps();
}

function DisplayVariables() {
    //Initialize Variables
    const V = [document.getElementById('V1').value, document.getElementById('V2').value, document.getElementById('V3').value
        , document.getElementById('V4').value, document.getElementById('V5').value];


    //Loop to display 
    for (let i = 0; i < 5; i++) {
        document.getElementById("V" + (i + 1) + "disp1").innerHTML = V[i];
    }

    document.getElementById("V1disp2").innerHTML = V[0];

    for (let i = 0; i < 5; i++) {
        document.getElementById("V" + (i + 1) + "disp3").innerHTML = V[i];
    }

    for (let i = 0; i < 5; i++) {
        document.getElementById("V" + (i + 1) + "disp4").innerHTML = V[i];
    }
}

function DisplayVariablesA() {
    const Va = [document.getElementById('V1a').value, document.getElementById('V2a').value, document.getElementById('V3a').value
        , document.getElementById('V4a').value, document.getElementById('V5a').value];

    //Loop to display 
    for (let i = 0; i < 5; i++) {
        document.getElementById("V" + (i + 1) + "Adisp1").innerHTML = Va[i];
    }

    for (let i = 0; i < 5; i++) {
        document.getElementById("V" + (i + 1) + "Adisp2").innerHTML = Va[i];
    }
}

function DisplayVariablesB() {
    const Vb = [document.getElementById('V1b').value, document.getElementById('V2b').value, document.getElementById('V3b').value
        , document.getElementById('V4b').value, document.getElementById('V5b').value];

    //Loop to display 
    for (let i = 0; i < 5; i++) {
        document.getElementById("V" + (i + 1) + "Bdisp1").innerHTML = Vb[i];
    }

    for (let i = 0; i < 5; i++) {
        document.getElementById("V" + (i + 1) + "Bdisp2").innerHTML = Vb[i];
    }
}

function DisplayVariablesC() {
    const Vc = [document.getElementById('V1c').value, document.getElementById('V2c').value, document.getElementById('V3c').value
        , document.getElementById('V4c').value, document.getElementById('V5c').value];

    for (let i = 0; i < 5; i++) {
        document.getElementById("V" + (i + 1) + "Cdisp1").innerHTML = Vc[i];
    }

    for (let i = 0; i < 5; i++) {
        document.getElementById("V" + (i + 1) + "Cdisp1").innerHTML = Vc[i];
    }
}

function DisplayEpsilon() {
    //Initialize Variables
    const Veps = [document.getElementById('V1eps').value, document.getElementById('V2eps').value, document.getElementById('V3eps').value
        , document.getElementById('V4eps').value, document.getElementById('V5eps').value];

    for (let i = 0; i < 5; i++) {
        document.getElementById("V" + (i + 1) + "epsDisp2").innerHTML = Veps[i];
    }
}

function DisplayStates() {
    //Initialize variables
    const Vf = [document.getElementById('V1f').checked, document.getElementById('V2f').checked, document.getElementById('V3f').checked
        , document.getElementById('V4f').checked, document.getElementById('V5f').checked];

    const V = [document.getElementById('V1').value, document.getElementById('V2').value, document.getElementById('V3').value
        , document.getElementById('V4').value, document.getElementById('V5').value];

    //Reset display to empty
    if (!Vf[0]) {
        document.getElementById("V1fDisp1").innerHTML = "";
        document.getElementById("finalsymbolEpsilon1").innerHTML = "";
        document.getElementById("finalsymbolEpsilon6").innerHTML = "";
    }
    if (!Vf[1]) {
        document.getElementById("V2fDisp1").innerHTML = "";
        document.getElementById("finalsymbolEpsilon2").innerHTML = "";
        document.getElementById("finalsymbolEpsilon7").innerHTML = "";
    }
    if (!Vf[2]) {
        document.getElementById("V3fDisp1").innerHTML = "";
        document.getElementById("finalsymbolEpsilon3").innerHTML = "";
        document.getElementById("finalsymbolEpsilon8").innerHTML = "";
    }
    if (!Vf[3]) {
        document.getElementById("V4fDisp1").innerHTML = "";
        document.getElementById("finalsymbolEpsilon4").innerHTML = "";
        document.getElementById("finalsymbolEpsilon9").innerHTML = "";
    }
    if (!Vf[4]) {
        document.getElementById("V5fDisp1").innerHTML = "";
        document.getElementById("finalsymbolEpsilon5").innerHTML = "";
        document.getElementById("finalsymbolEpsilon10").innerHTML = "";
    }

    //Set display to *
    if (Vf[0]) {
        document.getElementById("V1fDisp1").innerHTML = V[0];
        document.getElementById("finalsymbolEpsilon1").innerHTML = "*";
        document.getElementById("finalsymbolEpsilon6").innerHTML = "*";
    }
    if (Vf[1]) {
        document.getElementById("V2fDisp1").innerHTML = V[1];
        document.getElementById("finalsymbolEpsilon2").innerHTML = "*";
        document.getElementById("finalsymbolEpsilon7").innerHTML = "*";
    }
    if (Vf[2]) {
        document.getElementById("V3fDisp1").innerHTML = V[2];
        document.getElementById("finalsymbolEpsilon3").innerHTML = "*";
        document.getElementById("finalsymbolEpsilon8").innerHTML = "*";
    }
    if (Vf[3]) {
        document.getElementById("V4fDisp1").innerHTML = V[3];
        document.getElementById("finalsymbolEpsilon4").innerHTML = "*";
        document.getElementById("finalsymbolEpsilon9").innerHTML = "*";
    }
    if (Vf[4]) {
        document.getElementById("V5fDisp1").innerHTML = V[4];
        document.getElementById("finalsymbolEpsilon5").innerHTML = "*";
        document.getElementById("finalsymbolEpsilon10").innerHTML = "*";
    }
}

function DisplayVariablesA_NoEps() {
    //Initialize variables
    const V = [document.getElementById('V1').value, document.getElementById('V2').value, document.getElementById('V3').value
        , document.getElementById('V4').value, document.getElementById('V5').value];

    const Va = [document.getElementById('V1a').value, document.getElementById('V2a').value, document.getElementById('V3a').value
        , document.getElementById('V4a').value, document.getElementById('V5a').value];

    const Vb = [document.getElementById('V1b').value, document.getElementById('V2b').value, document.getElementById('V3b').value
        , document.getElementById('V4b').value, document.getElementById('V5b').value];

    const Vc = [document.getElementById('V1c').value, document.getElementById('V2c').value, document.getElementById('V3c').value
        , document.getElementById('V4c').value, document.getElementById('V5c').value];

    const Veps = [document.getElementById('V1eps').value, document.getElementById('V2eps').value, document.getElementById('V3eps').value
        , document.getElementById('V4eps').value, document.getElementById('V5eps').value];


    for (let i = 0; i < 5; i++) { //1) Loop variable. Eg, A,B,C

        if (V[i]) { //If variable not empty

            for (let j = 0; j < 5; j++) { //2) Loop epsilon

                if (Veps[j]) { //If epsilon not empty

                    if (V[i].localeCompare(Veps[j]) == 0) { //If variable same as Epsilon

                        for (let k = 0; k < 5; k++) { //3) Loop value. Eg, a,b,c

                            if (V[j].localeCompare(Va[k]) == 0) { //If Epsilon same as value
                                document.getElementById("V" + (k + 1) + "Adisp2").innerHTML = ""; //Reset display
                                document.getElementById("V" + (k + 1) + "Adisp2").innerHTML = "{" + Va[k] + "," + Veps[j] + "}";
                            }

                            if (V[j].localeCompare(Vb[k]) == 0) { //If Epsilon same as value
                                document.getElementById("V" + (k + 1) + "Bdisp2").innerHTML = ""; //Reset display
                                document.getElementById("V" + (k + 1) + "Bdisp2").innerHTML = "{" + Vb[k] + "," + Veps[j] + "}";
                            }

                            if (V[j].localeCompare(Vc[k]) == 0) { //If Epsilon same as value
                                document.getElementById("V" + (k + 1) + "Cdisp2").innerHTML = ""; //Reset display
                                document.getElementById("V" + (k + 1) + "Cdisp2").innerHTML = "{" + Vc[k] + "," + Veps[j] + "}";
                            }

                        } // end of for loop

                    } //end of if statement

                } // end of if statement

            } // end of for loop

        } //end of if statement

    } // end of for loop
}

finalStateArr = [];

function setFinalState(){
    finalStateArr.splice(0, finalStateArr.length)
    var checkbox01 = document.getElementById("V1f").checked;
    var checkbox02 = document.getElementById("V2f").checked;
    var checkbox03 = document.getElementById("V3f").checked;
    var checkbox04 = document.getElementById("V4f").checked;
    var checkbox05 = document.getElementById("V5f").checked;

    if(checkbox01 == true){
        finalStateArr.push(document.getElementById("V1").value);
        console.log(document.getElementById("V1").value);
    }
    if(checkbox02 == true){
        finalStateArr.push(document.getElementById("V2").value);
        console.log(document.getElementById("V2").value);
    }
    if(checkbox03 == true){
        finalStateArr.push(document.getElementById("V3").value);
        console.log(document.getElementById("V3").value);
    }
    if(checkbox04 == true){
        finalStateArr.push(document.getElementById("V4").value);
        console.log(document.getElementById("V4").value);
    }
    if(checkbox05 == true){
        finalStateArr.push(document.getElementById("V5").value);
        console.log(document.getElementById("V5").value);
    }

    console.log(finalStateArr);
}

//for checking strings
function checkStrings(){
    var exp1 = document.getElementById("ss1").value;
    var exp2 = document.getElementById("ss2").value;
    var exp3 = document.getElementById("ss3").value;
    var exp4 = document.getElementById("ss4").value;
    var exp5 = document.getElementById("ss5").value;

    var transitions = [
        ["Null","a", "b", "c","eps"],
        [document.getElementById("V1").value.toUpperCase(), document.getElementById("V1a").value.toUpperCase(), document.getElementById("V1b").value.toUpperCase(),document.getElementById("V1c").value.toUpperCase(),document.getElementById("V1eps").value.toUpperCase()],
        [document.getElementById("V2").value.toUpperCase(), document.getElementById("V2a").value.toUpperCase(), document.getElementById("V2b").value.toUpperCase(),document.getElementById("V2c").value.toUpperCase(),document.getElementById("V2eps").value.toUpperCase()],
        [document.getElementById("V3").value.toUpperCase(), document.getElementById("V3a").value.toUpperCase(), document.getElementById("V3b").value.toUpperCase(),document.getElementById("V3c").value.toUpperCase(),document.getElementById("V3eps").value.toUpperCase()],
        [document.getElementById("V4").value.toUpperCase(), document.getElementById("V4a").value.toUpperCase(), document.getElementById("V4b").value.toUpperCase(),document.getElementById("V4c").value.toUpperCase(),document.getElementById("V4eps").value.toUpperCase()],
        [document.getElementById("V5").value.toUpperCase(), document.getElementById("V5a").value.toUpperCase(), document.getElementById("V5b").value.toUpperCase(),document.getElementById("V5c").value.toUpperCase(),document.getElementById("V5eps").value.toUpperCase()],
    ];  

    if(checkValidExpression(exp1,transitions)){
        document.getElementById("check1").innerHTML="OK";
    }
    else{
        document.getElementById("check1").innerHTML="NO";
    }

    if(checkValidExpression(exp2,transitions)){
        document.getElementById("check2").innerHTML="OK";
    }
    else{
        document.getElementById("check2").innerHTML="NO";
    }

    if(checkValidExpression(exp3,transitions)){
        document.getElementById("check3").innerHTML="OK";
    }
    else{
        document.getElementById("check3").innerHTML="NO";
    }

    if(checkValidExpression(exp4,transitions)){
        document.getElementById("check4").innerHTML="OK";
    }
    else{
        document.getElementById("check4").innerHTML="NO";
    }

    if(checkValidExpression(exp5,transitions)){
        document.getElementById("check5").innerHTML="OK";
    }
    else{
        document.getElementById("check5").innerHTML="NO";
    }
}

function checkValidExpression(exp,transitions){
    var next="";
    var currentState = document.getElementById("V1").value; //initialise current state with start state
    var nextState = "NULL";
    var check = "";
    
    console.log(transitions);

    if(exp == "") {return false;}
    console.log(exp.length);
    var i = 0;

    while(i < exp.length){
        next = exp.charAt(i);
        console.log("current char = " + exp.charAt(i))
        var nextState = getNextState(currentState,next,transitions);

        console.log("Current state:" + currentState);
        console.log("Next state:" + nextState);

        // if (nextState == finalState01 || nextState == finalState02 || nextState == finalState03 || nextState == finalState04 || nextState == finalState05 ){
        if (finalStateArr.includes(nextState)){
            currentState = nextState;
            check = "OK";
            console.log("run");
        }
        else if(nextState == "fail"){
            check = "NO";
        }
        else{
            currentState = nextState;
            check = "NO";
        }
        i++;
    }
    if(check == "OK"){
        return true;
    }
    else if(check == "NO"){
        return false;
    }
}

function getNextState(currentState, next, transitions){
    var nextState="NULL";
    for (i=1; i<=5; i++){
        if(transitions[i][0]==currentState){
            if(transitions[0][1]==next){
                nextState= transitions[i][1];
                // console.log("ns = " + nextState);
                break;
            }
            else if(transitions[0][2]==next){
                nextState= transitions[i][2];
                // console.log("ns = " + nextState);
                break;
            }
            else if(transitions[0][3]==next){
                nextState= transitions[i][3];
                // console.log("ns = " + nextState);
                break;
            }
            else{
                return "Error";
            }
        }
    }
    return nextState;
}