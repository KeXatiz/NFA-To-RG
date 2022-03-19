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

function toRg(tableID){
    var rg="";
    var subRG;
    var arrowState;
    //gets table
    var transTable = document.getElementById(tableID);

    //gets rows of table.
    var rowLength = transTable.rows.length;                                 /* == Calculate number of row == */ /*eg 6*/  //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_rows

    //loops through rows    
    for (i = 1; i < rowLength; i++){                                    /* == start with one because 1 is a b epsilon== */ /*eg 1<6*/
        var index="";                                                   /*to set variable to char/string state */
        index="State"+i+"0Table";                                                    /*1st loop index= 10 ; 20; 30; 40; 50 */
        //alert(index);
        var state=document.getElementById(index).innerHTML.toUpperCase();    /*  getElementById(10)= A  ; getElementById(20)= R  getElementById(30)= S;  getElementById(40)= T    it take from html*/
        //alert(document.getElementById(index).innerHTML);
        arrowState="";
        arrowState=state+"&rarr;";                                             /*tmp=A-> ; R->; S->; T->; ->;   looping*/

        // first column 
        var index="";                                                   /* Overite the previous*/
        index=i+"1";                                                   /* =11; =21; =31; =41; =51; */
        
        var txt =document.getElementById(index).value.toUpperCase();    /* getElementById(11)=R; getElementById(21)=S; getElementById(31)=""; getElementById(41)="";  getElementById(51)="";*/
        if(txt!=""){                                                    /*NOT empty, have vaalue*/  //so 11 and 21 have value of R and S 

            index="";                                                   /*Overite*/
            index=i+"1";                                                /*11; 21;   looping*/

            subRG=arrowState+document.getElementById("Sigma00").innerHTML+txt;        /*A->aR;   R->aS;   looping*/
            
            rg=rg+subRG+"<br>";                                           /*A->aR<br>; A->aR<br>R->aS<br>;   */    //CHECK AGAIN 
        }

        
        // second column
        var index="";
        index=i+"2";                                                    /* 12; 22; 32; 42; 52 */

        var txt =document.getElementById(index).value.toUpperCase();    /* getElementById(12)=""; getElementById(22)=R; getElementById(32)=T; getElementById(42)="";  getElementById(52)="";*/
        if(txt!=""){

            index="";
            index=i+"2";                                                //22; 23

            subRG=arrowState+document.getElementById("Sigma01").innerHTML+txt;
            
            rg=rg+subRG+"<br>";
        }
        

        //third column
        var index="";
        index=i+"3";

        var txt = document.getElementById(index).value.toUpperCase();
        if(txt!=""){

            index="";
            index=i+"3"; 


            subRG=arrowState+document.getElementById("Sigma02").innerHTML+txt;
            
            rg=rg+subRG+"<br>";
        }

        
        //4th column
        var index="";
        index=i+"4";                                                   //14; 24; 34; 44; 54; looping

        var txt = document.getElementById(index).value.toUpperCase();  //""; ""; "";  R; ""; looping
        if(txt!=""){
            index="";
            index=i+"4";                                               //44


            subRG=arrowState+txt+"|"+document.getElementById("Sigma03").innerHTML;//T->epsilon|R        //getElementById("03").innerHTML is epsilon
            
            rg=rg+subRG+"<br>";
        }

        
    }
    document.getElementById("infoRG").innerHTML=rg;
        
}

function openTabs(evt, tabName) {

    var i, tabContent, tablinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function changeText(value) {
    var display = document.getElementById("display");
    var text = "";

    if (value == 1) text += "Amir (Leader)";
    if (value == 2) text += "Ammar";
    if (value == 3) text += "Fekry";
    if (value == 4) text += "Yi Xuin";

    display.innerHTML = text;
}

document.getElementById("defaultOpen").click()