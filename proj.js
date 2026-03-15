// JavaScript Variables and Operators
let basefare = 50; 
let perKMrate = 15; 
let baseKM = 2; 

// JavaScript Functions & Events
function computeFare(isDiscount) {
    let pick = document.getElementById("pickup").value;
    let drop = document.getElementById("dropoff").value;

    // Logical operators: || - Or
    if (pick == "none" || drop == "none") {
        window.alert("Please pick a location first!");
    } else {
        let num1 = parseFloat(pick);
        let num2 = parseFloat(drop);

        // Math.methods - Math.abs
        let distance = Math.abs(num1 - num2);
        let total = 0;

        // Conditional statements (If / Else)
        if (distance <= baseKM) {
            total = basefare;
        } else {
            let extra = distance - baseKM;
            total = basefare + (extra * perKMrate); 
        }

        // If then condition for discounts
        if (isDiscount == true) {
            let discount = total * 0.20; 
            total = total - discount;
        }

        // Math.methods - Math.round
        let finalFare = Math.round(total);

        // JS Outputs - innerHTML
        document.getElementById("fareDisplay").innerHTML = finalFare + ".00";
    }
}