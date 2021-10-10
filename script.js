//computing simple interest
function compute()
{
    var principal = document.getElementById("principal"); 
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal.value * years * rate /100;  
    var year = new Date().getFullYear()+parseInt(years);    
    if(checkdata()) 
    	document.getElementById("result").innerHTML = "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;If you deposit <mark>" + principal.value + "</mark>,<br/>" + "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;at an interest rate of <mark>" + rate + "%"+"</mark>,<br/>" + "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;You will receive an amount of <mark>" + interest + "</mark>,<br/> " + "&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;in the year <mark>" + year+ "</mark>" ; 
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}  
function checkdata(){
      var principal = document.getElementById("principal").value;
    //check for invalid inputs
      if(principal<=0 || principal==""){
            alert("Please enter a positive number");
            document.getElementById("principal").focus();
            return false;
                   }
 return true;
}
        
