function set($event) {

    if (parseInt($event.value) < 10) {
        document.getElementById("value").value += $event.value;
    } else if ($event.value === "+") {
        document.getElementById("value").value += "+";
    } else if ($event.value === "-") {
        document.getElementById("value").value += "-";
    } else if ($event.value === "÷") {
        document.getElementById("value").value += "÷";
    } else if ($event.value === "x") {
        document.getElementById("value").value += "x";
    } else if ($event.value === "C") {
        document.getElementById("value").value = "";
    } else if ($event.value === "%") {
        document.getElementById("value").value += "%";
    } else if ($event.value === "^2") {
        document.getElementById("value").value += "^2";
    } else if ($event.value === "^3") {
        document.getElementById("value").value += "^3";
    } else if ($event.value === ".") {
        document.getElementById("value").value += ".";
    }




    if ($event.value === "=") {
        let value = document.getElementById("value").value;
        if (value.includes("+")) {
            value = value.split("+");
            let ans = parseInt(value[0]) + parseInt(value[1]);
            document.getElementById("value").value = ans;
        } else if (value.includes("-")) {
            value = value.split("-");
            let ans = parseInt(value[0]) - parseInt(value[1]);
            document.getElementById("value").value = ans;
        } else if (value.includes("÷")) {
            value = value.split("÷");
            let ans = parseInt(value[0]) / parseInt(value[1]);
            document.getElementById("value").value = ans;
        } else if (value.includes("x")) {
            value = value.split("x");
            let ans = parseInt(value[0]) * parseInt(value[1]);
            document.getElementById("value").value = ans;
        } else if (value.includes("%")) {
            value = value.split("%");
            let ans = parseInt(value[0]) / 100;
            document.getElementById("value").value = ans;
        } else if (value.includes(".")) {
            value = value.split(".");
            let ans = parseInt(value[0.0]) + parseInt(value[1.0]);
            document.getElementById("value").value = ans;
        } else if (value.includes("^2")) {
            value = value.split("^2");
            let ans = parseInt(value[0]) * parseInt(value[0]);
            document.getElementById("value").value = ans;
        } else if (value.includes("^3")) {
            value = value.split("^3");
            let ans = parseInt(value[0]) * parseInt(value[0]) * parseInt(value[0]);
            document.getElementById("value").value = ans;
        }
    }

}