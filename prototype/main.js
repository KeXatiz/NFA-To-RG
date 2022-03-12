//Function to generate transition table
function generateTransitionTable() {
    document.getElementById("nfaTable").style = "display:block;";
    StartFinalSymbol();
}

//Function to display symbol
function symboltrue(value, type) {
    if (type == 'f') { //Display final symbol
        document.getElementById("finalsymbol" + value).innerHTML = "*";
        return;
    }
    if (type == 's') { //Display start symbol
        document.getElementById("startsymbol" + value).innerHTML = ">";
        return;
    }

}

//Function to reset symbol to nothing
function symbolfalse(value, type) {
    if (type == 'f') { //Reset final symbol
        document.getElementById("finalsymbol" + value).innerHTML = "";
        return;
    }
    if (type == 's') { //Reset start symbol
        document.getElementById("startsymbol" + value).innerHTML = "";
        return;
    }

}

function StartFinalSymbol() {
    //Call DisplayTableVariable function
    DisplayTableVariable();

    //Initialize Variables
    var State10 = document.getElementById('State10').value;
    var State20 = document.getElementById('State20').value;
    var State30 = document.getElementById('State30').value;
    var State40 = document.getElementById('State40').value;
    var State50 = document.getElementById('State50').value;
    var FinalState10 = document.getElementById('FinalState10').value;
    var FinalState20 = document.getElementById('FinalState20').value;
    var FinalState30 = document.getElementById('FinalState30').value;
    var FinalState40 = document.getElementById('FinalState40').value;
    var FinalState50 = document.getElementById('FinalState50').value;
    var StartState = document.getElementById('StartState').value;

    if (State10) { //Check if State10 empty or not
        if (State10.localeCompare(FinalState10) == 0 || State10.localeCompare(FinalState20) == 0 || State10.localeCompare(FinalState30) == 0 || State10.localeCompare(FinalState40) == 0 || State10.localeCompare(FinalState50) == 0) {
            symboltrue(10, 'f'); // Send value, and 'Final' type
        } else {
            symbolfalse(10, 'f'); // Send value, and 'Final' type
        }

        if (State10.localeCompare(StartState) == 0) {
            symboltrue(10, 's'); // Send value, and 'Start' type
        } else {
            symbolfalse(10, 's'); // Send value, and 'Start' type
        }
    }

    if (State20) { //Check if State20 empty or not
        if (State20.localeCompare(FinalState10) == 0 || State20.localeCompare(FinalState20) == 0 || State20.localeCompare(FinalState30) == 0 || State20.localeCompare(FinalState40) == 0 || State20.localeCompare(FinalState50) == 0) {
            symboltrue(20, 'f'); // Send value, and 'Final' type
        } else {
            symbolfalse(20, 'f'); // Send value, and 'Final' type
        }

        if (State20.localeCompare(StartState) == 0) {
            symboltrue(20, 's'); // Send value, and 'Start' type
        } else {
            symbolfalse(20, 's'); // Send value, and 'Start' type
        }
    }

    if (State30) { //Check if State30 empty or not
        if (State30.localeCompare(FinalState10) == 0 || State30.localeCompare(FinalState20) == 0 || State30.localeCompare(FinalState30) == 0 || State30.localeCompare(FinalState40) == 0 || State30.localeCompare(FinalState50) == 0) {
            symboltrue(30, 'f'); // Send value, and 'Final' type
        } else {
            symbolfalse(30, 'f'); // Send value, and 'Final' type
        }

        if (State30.localeCompare(StartState) == 0) {
            symboltrue(30, 's'); // Send value, and 'Start' type
        } else {
            symbolfalse(30, 's'); // Send value, and 'Start' type
        }
    }

    if (State40) { //Check if State40 empty or not
        if (State40.localeCompare(FinalState10) == 0 || State40.localeCompare(FinalState20) == 0 || State40.localeCompare(FinalState30) == 0 || State40.localeCompare(FinalState40) == 0 || State40.localeCompare(FinalState50) == 0) {
            symboltrue(40, 'f'); // Send value, and 'Final' type
        } else {
            symbolfalse(40, 'f'); // Send value, and 'Final' type
        }

        if (State40.localeCompare(StartState) == 0) {
            symboltrue(40, 's'); // Send value, and 'Start' type
        } else {
            symbolfalse(40, 's'); // Send value, and 'Start' type
        }
    }

    if (State50) { //Check if State50 empty or not
        if (State50.localeCompare(FinalState10) == 0 || State50.localeCompare(FinalState20) == 0 || State50.localeCompare(FinalState30) == 0 || State50.localeCompare(FinalState40) == 0 || State50.localeCompare(FinalState50) == 0) {
            symboltrue(50, 'f'); // Send value, and 'Final' type
        } else {
            symbolfalse(50, 'f'); // Send value, and 'Final' type
        }

        if (State50.localeCompare(StartState) == 0) {
            symboltrue(50, 's'); // Send value, and 'Start' type
        } else {
            symbolfalse(50, 's'); // Send value, and 'Start' type
        }
    }

}

function DisplayTableVariable() {
    //Initiliaze Variables
    var State10 = document.getElementById('State10').value;
    var State20 = document.getElementById('State20').value;
    var State30 = document.getElementById('State30').value;
    var State40 = document.getElementById('State40').value;
    var State50 = document.getElementById('State50').value;

    //Display States into transition table
    document.getElementById("State10Table").innerHTML = State10;
    document.getElementById("State20Table").innerHTML = State20;
    document.getElementById("State30Table").innerHTML = State30;
    document.getElementById("State40Table").innerHTML = State40;
    document.getElementById("State50Table").innerHTML = State50;
}