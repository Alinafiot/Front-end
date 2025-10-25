document.addEventListener('DOMContentLoaded', () => {
    //Варіант 3 
    const btn3 = document.getElementById("loadData3");
    const output3 = document.getElementById("output3");

    btn3.addEventListener("click", () => {
        output3.textContent = "Завантажуємо юзерів...";

        fetch("https://randomuser.me/api/?results=5")
            .then(response => {
                if (!response.ok) throw new Error("HTTP помилка: " + response.status);
                return response.json();
            })
            .then(data => {
                output3.innerHTML = "";
                data.results.forEach(user => {
                    output3.innerHTML += `
                        <div class="user-card">
                            <img src="${user.picture.large}" alt="Фото користувача">
                            <b>Місто:</b> ${user.location.city}<br>
                            <b>Країна:</b> ${user.location.country}<br>
                            <b>Поштовий індекс:</b> ${user.location.postcode}<br>
                            <b>Email:</b> ${user.email}
                        </div>
                    `;
                });
            })
            .catch(error => {
                console.error("Помилка:", error);
                output3.textContent = "Не вдалося отримати дані!";
            });
    });

    //Варіант 2 
    const btn2 = document.getElementById("loadData2");
    const output2 = document.getElementById("output2");

    btn2.addEventListener("click", () => {
        output2.textContent = "Завантажуємо юзерів...";

        fetch("https://randomuser.me/api/?results=5")
            .then(response => {
                if (!response.ok) throw new Error("HTTP помилка: " + response.status);
                return response.json();
            })
            .then(data => {
                output2.innerHTML = "";
                data.results.forEach(user => {
                    output2.innerHTML += `
                        <div class="user-card">
                            <img src="${user.picture.large}" alt="Фото користувача">
                            <b>Ім'я:</b> ${user.name.first} ${user.name.last}<br>
                            <b>Cell:</b> ${user.cell}<br>
                            <b>Місто:</b> ${user.location.city}<br>
                            <b>Країна:</b> ${user.location.country}<br>
                            <b>Поштовий індекс:</b> ${user.location.postcode}
                        </div>
                    `;
                });
            })
            .catch(error => {
                console.error("Помилка:", error);
                output2.textContent = "Не вдалося отримати дані!";
            });
    });
});
