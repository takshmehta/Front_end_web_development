var keyList = "abcdefghijklmnopqrstuvwxyz123456789!@%*$^&";
var tmp = ""
function genPass(pLength){
    tmp = "";
    for(i=0;i<pLength;i++){
        tmp+= keyList.charAt(Math.floor(Math.random()*keyList.length));
    }
    return tmp;
}

function populateForm(enterlength){
   document.passGen.output.value = genPass(enterlength) ;
}