  // using jquery to get the value and give it a wanted value
  // Fahrenheit to Celsius function
  $(document).ready(function(){
    $("#FtoCButton").on("click", function(){
        let FtoCval = parseFloat($("#FtoCinput").val());

        if (!isNaN(FtoCval)) {
            let result = (FtoCval - 32) * (5/9);
            $("#p-result-1").html(`${result.toFixed(2)} C`);

          } else {
            $("#p-result-1").html("Please enter a valid number");
          }
          //clear the input
          $("#FtoCinput").val("");
    })
  })

// Celsius to Kelvin function
function CtoKfunc () {
    let CtoKval = parseFloat(document.getElementById("CtoKinput").value);

    if (!isNaN(CtoKval)){
    result = (CtoKval + 273);
    document.getElementById("p-result-2").innerHTML = `${result.toFixed(2)} K`;
    } else {
        document.getElementById("p-result-2").innerHTML = "Please enter a valid number";
    }
    //clear the input
    document.getElementById("CtoKinput").value = "";
}


// date
const d = new Date();

document.getElementById("date-footer").innerHTML = `${d} &copy; 2024 Mostafa Zamani, Copyright @`;