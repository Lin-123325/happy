        const correctPasswords = ["", "08870887", "12345"];

        function checkPassword(event) {
            event.preventDefault(); 
            const enteredPassword = document.querySelector('input[name="psw"]').value; 
            
            if (correctPasswords.includes(enteredPassword)) {
                document.getElementById('correct-password-message').style.display = 'block';
                document.getElementById('id01').style.display = 'none';
            } else {
                alert("密碼錯誤，請重試！");
            }
            return false;
        }

        document.getElementById("logout-btn").addEventListener("click", function() {
            document.getElementById('correct-password-message').style.display = 'none';
            document.getElementById('id01').style.display = 'block';
        });

        document.getElementById("psw").addEventListener("focus", function() {
            this.value = "";
        });

        window.onload = function() {
            document.getElementById('correct-password-message').style.display = 'none';
            document.getElementById('id01').style.display = 'block';
            document.getElementById('psw').focus();
        }

        function myFunction() {
            // Get the text field
            var copyText = document.getElementById("myInput");
          
            // Select the text field
            copyText.select();
            copyText.setSelectionRange(0, 99999); // For mobile devices
          
            // Copy the text inside the text field
            navigator.clipboard.writeText(copyText.value);
            
            // Alert the copied text
            alert("已複製文字:" + copyText.value);
          }

          function updateDateTime() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            
            // 更新日期
            const formattedDate = `${year}年${month}月${day}號`;
            document.getElementById('date').textContent = formattedDate;

            // 更新時間
            const formattedTime = `${hours}:${minutes}:${seconds}`;
            document.getElementById('clock').textContent = formattedTime;
        }

        // 初始化並每秒更新
        updateDateTime();
        setInterval(updateDateTime, 1000);