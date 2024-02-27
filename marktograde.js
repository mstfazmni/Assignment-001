function CheckGradeFunc(){

let checkgrade = document.getElementById("grade").value;

try{
// turning the value to float
    const grade = parseFloat(checkgrade);
// set some if statments to check the conditions
    if(isNaN(grade) || grade > 100 || grade < 0){
        throw new Error("Not a valid number (it must be less than 100,nonnegative and be a number.)");
    }else{
        if(grade>=90){
            document.getElementById("validation").innerHTML  = `Result: ${grade} is A`;
            document.getElementById("validation").style.color = "green";
        } else if(grade>=80 && grade<90){
            document.getElementById("validation").innerHTML  = `Result: ${grade} is B`;
            document.getElementById("validation").style.color = "green";
        } else if(grade>=70 && grade<80){
            document.getElementById("validation").innerHTML  = `Result: ${grade} is C`;
            document.getElementById("validation").style.color = "yellow";

        } else if(grade>=50 && grade<70){
            document.getElementById("validation").innerHTML  = `Result: ${grade} is D`;
            document.getElementById("validation").style.color = "orange";

        } else if(grade < 50){
            document.getElementById("validation").innerHTML  = `Result: ${grade} is F`;
            document.getElementById("validation").style.color = "red";
        }
    }
    // give an error
} catch(error){
    document.getElementById("validation").innerHTML  = error.message;
}
document.getElementById("grade").value = "";

}

// date
const d = new Date();

document.getElementById("date-footer").innerHTML = `${d} &copy; 2024 Mostafa Zamani, Copyright @`;