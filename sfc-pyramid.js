var SFCPyramid = function(n){
 var message = "";
 var counter = 0;

 while (counter < n){
  message = message + "SFC";
  counter = counter + 1;
}
 return message;
};

var output;
var row = 1;
var n = 5;

 while(row <=n){
  output = SFCPyramid(row);
  console.log(output);
  row  = row + 1;
}
