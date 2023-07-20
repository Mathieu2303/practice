prompt("Enter in name 1: ");
prompt("Enter in name 2: ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if(loveScore > 70){
   alert("your love score is " + loveScore + "% ... it really is going to last forever");
}
if(loveScore > 50 && loveScore <= 70){
    alert("your love score is " + loveScore + "% ... it really is hit or miss");
}
else if(loveScore <= 30){
    alert("your love score is " + loveScore + "% ... it not going to work sorry :( ");
}


