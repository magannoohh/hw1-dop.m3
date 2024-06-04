        function isValidEmail(email) {
            const pattern = /^[^@]+@[^@]+\.[^@]+$/;
            return pattern.test(email);

        }

        document.getElementById('submitBtn').addEventListener('click', function (event) {
            const emailInput = document.getElementById("email")
            const emailError = document.getElementById("emailError")
            const email = emailInput.value

            if (!isValidEmail(email)) {
                emailError.textContent = "Не коректный формат почты";
                event.preventDefault();
            } else {
                emailError.textContent = "";
                alert("Вы успешно зарегстрировались !")
                
                
            }

        });
