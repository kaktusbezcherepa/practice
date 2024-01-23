document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password === confirmPassword) {
        // Ваш код для обработки успешной регистрации здесь
        // Например, можно отображать блок с сообщением об успешной регистрации:
        document.getElementById("registrationForm").classList.add("hidden");
        document.getElementById("registrationSuccess").classList.remove("hidden");
    } else {
        alert("Еблан? Напиши один и тот же пароль!");
    }
});