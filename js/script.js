
var submit = document.getElementById('submit');
submit.onclick= tipCalculate;

function tipCalculate(){
  console.log("TIP CALCULATE");
  //the function that will run 
  //when the submit button is clicked
  //as defined in the inline javascript
  //on index.html
  var totalBill = document.getElementById('bill').value;
  console.log(totalBill);

  var tipPerc=getPercChecked();

  if(!isNaN(totalBill)){
  	var tipAmount = Math.floor(totalBill*tipPerc *100)/100;
  var roundedAmount= tipAmount.toFixed(2);
  var tipBox= document.getElementById('tipamount');
  tipBox.innerHTML = '$' + roundedAmount;

  } else {
 alert('Please enter numbers only')
  }

}


function getPercChecked(){
	var percBtns= document.getElementsByClassName('tip-btn');
	for (var i=0; i<percBtns.length;i++){
		if(percBtns[i].checked){
			return percBtns[i].value;
		}
	
	}

}




 
=======
//STEP 1
var submit = document.getElementById('submit');
submit.onclick = tipCalculate;

function tipCalculate(slider, bill){
  console.log("TIP CALCULATE");

  //STEP 2
  var totalBill = document.getElementById('bill').value;
  console.log(totalBill);
  var tipPerc = getPercChecked();

  //STEP 6
  console.log(tipPerc);
  console.log(!isNaN(totalBill));
  if(!isNaN(totalBill)){
    var tipAmount = Math.floor(totalBill * tipPerc * 100) / 100;
    //STEP 7
    var roundedTip = tipAmount.toFixed(2);
    var tipBox = document.getElementById('tipamount');
    //STEP 8
    tipBox.innerHTML = "$"+roundedTip;
    console.log(roundedTip);
  } else {
    //STEP 9
    alert('Please enter numbers only');
    resetCalc();
  }
}

//STEP 3
function getPercChecked(){
  var percBtns = document.getElementsByClassName('tip-btn');

  //STEP 4
  for(var i=0; i < percBtns.length; i++){
    if(percBtns[i].checked){
      //STEP 5
      console.log(percBtns[i]);
      return percBtns[i].value;
    }
  }
}


function reset (){
    document.getElementById('tipamount').innerHTML = "";
    var choose = document.getElementsByClassName("tip-btn");
   for(var i=0;i<choose.length;i++)
    choose[i].checked = false;
  document.getElementById('bill').value="";
}

document.getElementById('reset').onclick= reset;

