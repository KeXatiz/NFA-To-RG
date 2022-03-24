function submit() {
    DisplayVariables();
    DisplayVariablesA();
    DisplayVariablesB();
    DisplayVariablesC();
    DisplayEpsilon();
    DisplayStates();
}

function DisplayVariables() {
    //Initialize Variables
    const V = [document.getElementById('V1').value, document.getElementById('V2').value, document.getElementById('V3').value
        , document.getElementById('V4').value, document.getElementById('V5').value];

    document.getElementById("V1disp1").innerHTML = V[0];
    document.getElementById("V2disp1").innerHTML = V[1];
    document.getElementById("V3disp1").innerHTML = V[2];
    document.getElementById("V4disp1").innerHTML = V[3];
    document.getElementById("V5disp1").innerHTML = V[4];

    document.getElementById("V1disp2").innerHTML = V[0];

    document.getElementById("V1disp3").innerHTML = V[0];
    document.getElementById("V2disp3").innerHTML = V[1];
    document.getElementById("V3disp3").innerHTML = V[2];
    document.getElementById("V4disp3").innerHTML = V[3];
    document.getElementById("V5disp3").innerHTML = V[4];
}

function DisplayVariablesA() {
    const Va = [document.getElementById('V1a').value, document.getElementById('V2a').value, document.getElementById('V3a').value
        , document.getElementById('V4a').value, document.getElementById('V5a').value];

    document.getElementById("V1Adisp1").innerHTML = Va[0];
    document.getElementById("V2Adisp1").innerHTML = Va[1];
    document.getElementById("V3Adisp1").innerHTML = Va[2];
    document.getElementById("V4Adisp1").innerHTML = Va[3];
    document.getElementById("V5Adisp1").innerHTML = Va[4];
}

function DisplayVariablesB() {
    const Vb = [document.getElementById('V1b').value, document.getElementById('V2b').value, document.getElementById('V3b').value
        , document.getElementById('V4b').value, document.getElementById('V5b').value];

    document.getElementById("V1Bdisp1").innerHTML = Vb[0];
    document.getElementById("V2Bdisp1").innerHTML = Vb[1];
    document.getElementById("V3Bdisp1").innerHTML = Vb[2];
    document.getElementById("V4Bdisp1").innerHTML = Vb[3];
    document.getElementById("V5Bdisp1").innerHTML = Vb[4];
}

function DisplayVariablesC() {
    const Vc = [document.getElementById('V1c').value, document.getElementById('V2c').value, document.getElementById('V3c').value
        , document.getElementById('V4c').value, document.getElementById('V5c').value];

    document.getElementById("V1Cdisp1").innerHTML = Vc[0];
    document.getElementById("V2Cdisp1").innerHTML = Vc[1];
    document.getElementById("V3Cdisp1").innerHTML = Vc[2];
    document.getElementById("V4Cdisp1").innerHTML = Vc[3];
    document.getElementById("V5Cdisp1").innerHTML = Vc[4];
}

function DisplayEpsilon() {
    //Initialize Variables
    const Veps = [document.getElementById('V1eps').value, document.getElementById('V2eps').value, document.getElementById('V3eps').value
        , document.getElementById('V4eps').value, document.getElementById('V5eps').value];

    document.getElementById("V1epsDisp1").innerHTML = Veps[0];
    document.getElementById("V2epsDisp1").innerHTML = Veps[1];
    document.getElementById("V3epsDisp1").innerHTML = Veps[2];
    document.getElementById("V4epsDisp1").innerHTML = Veps[3];
    document.getElementById("V5epsDisp1").innerHTML = Veps[4];

    document.getElementById("V1epsDisp2").innerHTML = Veps[0];
    document.getElementById("V2epsDisp2").innerHTML = Veps[1];
    document.getElementById("V3epsDisp2").innerHTML = Veps[2];
    document.getElementById("V4epsDisp2").innerHTML = Veps[3];
    document.getElementById("V5epsDisp2").innerHTML = Veps[4];
}

function DisplayStates(){
    const Veps = [document.getElementById('V1eps').value, document.getElementById('V2eps').value, document.getElementById('V3eps').value
    , document.getElementById('V4eps').value, document.getElementById('V5eps').value];
    
    
    if(!Veps[0]){
        document.getElementById("finalsymbolEpsilon1").innerHTML = "";
    }
    if(!Veps[1]){
        document.getElementById("finalsymbolEpsilon2").innerHTML = "";
    }
    if(!Veps[2]){
        document.getElementById("finalsymbolEpsilon3").innerHTML = "";
    }
    if(!Veps[3]){
        document.getElementById("finalsymbolEpsilon4").innerHTML = "";
    }
    if(!Veps[4]){
        document.getElementById("finalsymbolEpsilon5").innerHTML = "";
    }

    if(Veps[0]){
        document.getElementById("finalsymbolEpsilon1").innerHTML = "*";
    }
    if(Veps[1]){
        document.getElementById("finalsymbolEpsilon2").innerHTML = "*";
    }
    if(Veps[2]){
        document.getElementById("finalsymbolEpsilon3").innerHTML = "*";
    }
    if(Veps[3]){
        document.getElementById("finalsymbolEpsilon4").innerHTML = "*";
    }
    if(Veps[4]){
        document.getElementById("finalsymbolEpsilon5").innerHTML = "*";
    }
}