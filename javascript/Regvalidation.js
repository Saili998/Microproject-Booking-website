function checkPasscode() {
    var passcode_input1 = document.querySelector("#examplePass");
    var passcode_input2 = document.querySelector("#examplePass1");
    if (passcode_input1.value != passcode_input2.value) {
        passcode_input2.setCustomValidity("Password does not match.");
    } else {
        passcode_input2.setCustomValidity("");
        
    }
}