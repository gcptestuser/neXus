function login() {
    // Dummy login logic, redirect to dashboard on success
    window.location.href = "dashboard.html";
}

function logout() {
    window.location.href = "login.html";
}

function showHome() {
    document.getElementById("content").innerHTML = "<h2>Welcome Home!</h2>";
}

function showPaymentForm() {
    window.location.href = "paymentform.html";
}

function showPreviousRecord() {
    document.getElementById("content").innerHTML = "<h2>Previous Record</h2>";
    // Add logic to display previous records
}

function handleSameMobile() {
    var paymentMobileField = document.getElementById("paymentMobileField");
    paymentMobileField.style.display = document.getElementById("sameMobile").checked ? "none" : "block";
}

function handlePaymentType() {
    var paymentType = document.getElementById("paymentType").value;
    var advanceAmountField = document.getElementById("advanceAmountField");
    var emiDropdownField = document.getElementById("emiDropdownField");

    advanceAmountField.style.display = (paymentType === "full") ? "block" : "none";
    emiDropdownField.style.display = (paymentType === "emi") ? "block" : "none";
}

function submitForm() {
    // Dummy logic, show success message and redirect to dashboard
    alert("Form submitted successfully!");
    window.location.href = "dashboard.html";
}
