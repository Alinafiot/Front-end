//варіант 4
  let n = 4;
  let firstElement = document.getElementById("element" + ((n % 10) + 1));
  let secondElement = document.querySelector("#element" + (((n % 10) + 2)));
  if (firstElement) {
    firstElement.addEventListener("click", function() {
      if (this.style.backgroundColor === "lightblue") {
        this.style.backgroundColor = "";
        this.style.color = "";
      } else {
        this.style.backgroundColor = "lightblue";
        this.style.color = "darkred";
      }
    });
  }

  if (secondElement) {
    secondElement.addEventListener("click", function() {
      if (this.style.backgroundColor === "lightgreen") {
        this.style.backgroundColor = "";
        this.style.color = "";
      } else {
        this.style.backgroundColor = "lightgreen";
        this.style.color = "blue";
      }
    });
  }

    const container = document.querySelector(".image-container");
    let addedPhoto = null; 

    document.getElementById("addBtn").onclick = function () {
        if (!addedPhoto) {
            addedPhoto = document.createElement("img");
            addedPhoto.src = "catt.jpg";
            addedPhoto.alt = "Додане фото";
            addedPhoto.style.maxWidth = "50%";
            addedPhoto.style.height = "auto";
            addedPhoto.style.display = "block";
            addedPhoto.style.marginTop = "10px";
            container.appendChild(addedPhoto);
        }
    };

    document.getElementById("zoomInBtn").onclick = function () {
        if (addedPhoto) {
            let currentWidth = addedPhoto.clientWidth;
            addedPhoto.style.width = currentWidth * 1.2 + "px";
        }
    };

    document.getElementById("zoomOutBtn").onclick = function () {
        if (addedPhoto) {
            let currentWidth = addedPhoto.clientWidth;
            addedPhoto.style.width = currentWidth / 1.2 + "px";
        }
    };

    document.getElementById("removeBtn").onclick = function () {
        if (addedPhoto) {
            addedPhoto.remove();
            addedPhoto = null;
        }
    };

//варіант 5
let n5 = 5;
let firstEl = document.getElementById("el" + ((n5 % 10) + 1));
let secondEl = document.querySelector("#el" + (((n5 % 10) + 2)));

if (firstEl) {
  firstEl.addEventListener("click", function() {
    if (this.style.backgroundColor === "lightblue") {
      this.style.backgroundColor = "";
      this.style.color = "";
    } else {
      this.style.backgroundColor = "lightblue";
      this.style.color = "darkred";
    }
  });
}

if (secondEl) {
  secondEl.addEventListener("click", function() {
    if (this.style.backgroundColor === "lightgreen") {
      this.style.backgroundColor = "";
      this.style.color = "";
    } else {
      this.style.backgroundColor = "lightgreen";
      this.style.color = "blue";
    }
  });
}
const container5 = document.querySelector(".image-container5");
let addedPhoto5 = null;

document.getElementById("addBtn5").onclick = function () {
  if (!addedPhoto5) {
    addedPhoto5 = document.createElement("img");
    addedPhoto5.src = "cat2.jpg";
    addedPhoto5.alt = "Додане фото";
    addedPhoto5.style.maxWidth = "50%";
    addedPhoto5.style.height = "auto";
    addedPhoto5.style.display = "block";
    addedPhoto5.style.marginTop = "10px";
    container5.appendChild(addedPhoto5);
  }
};

document.getElementById("zoomInBtn5").onclick = function () {
  if (addedPhoto5) {
    let currentWidth = addedPhoto5.clientWidth;
    addedPhoto5.style.width = currentWidth * 1.2 + "px";
  }
};

document.getElementById("zoomOutBtn5").onclick = function () {
  if (addedPhoto5) {
    let currentWidth = addedPhoto5.clientWidth;
    addedPhoto5.style.width = currentWidth / 1.2 + "px";
  }
};

document.getElementById("removeBtn5").onclick = function () {
  if (addedPhoto5) {
    addedPhoto5.remove();
    addedPhoto5 = null;
  }
};


// Валідація форми Варіант 3

document.getElementById("formVar3").addEventListener("submit", function(event) {
  event.preventDefault();

  const pib = document.getElementById("pib3");
  const phone = document.getElementById("phone3");
  const idcard = document.getElementById("idcard3");
  const faculty = document.getElementById("faculty3");
  const birth = document.getElementById("birth3");

  let isValid = true;

  [pib, phone, idcard, faculty, birth].forEach(el => el.classList.remove("error"));

  const rePIB = /^[А-ЯІЇЄҐA-Z][а-яіїєґa-z']+\s[А-ЯІЇЄҐA-Z]\.[А-ЯІЇЄҐA-Z]\.$/;
  const rePhone = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
  const reID = /^[A-ZА-ЯІЇЄҐ]{2}\s№\d{6}$/;
  const reFaculty = /^[A-ZА-ЯІЇЄҐ]{4}$/;
  const reBirth = /^\d{2}\.\d{2}\.\d{4}$/;

  if (!rePIB.test(pib.value)) pib.classList.add("error"), isValid = false;
  if (!rePhone.test(phone.value)) phone.classList.add("error"), isValid = false;
  if (!reID.test(idcard.value)) idcard.classList.add("error"), isValid = false;
  if (!reFaculty.test(faculty.value)) faculty.classList.add("error"), isValid = false;
  if (!reBirth.test(birth.value)) birth.classList.add("error"), isValid = false;

  if (isValid) {
    alert(
      "Варіант 3 — Усі дані введено вірно:\n\n" +
      `ПІБ: ${pib.value}\nТелефон: ${phone.value}\nID-card: ${idcard.value}\n` +
      `Факультет: ${faculty.value}\nДата народження: ${birth.value}`
    );
  } else {
    alert("Варіант 3 — Перевірте правильність заповнення форми! Поля з помилкою підсвічені червоним.");
  }
});

// Таблиця Варіант 3 

const table3 = document.getElementById("tableVar3");
let num3 = 1;
for (let i = 0; i < 6; i++) {
  const row = table3.insertRow();
  for (let j = 0; j < 6; j++) {
    const cell = row.insertCell();
    cell.textContent = num3++;

    cell.onmouseover = () => {
      if (cell.textContent == 3) cell.style.backgroundColor = getRandomColor();
    };

    cell.onclick = () => {
      if (cell.textContent == 3)
        cell.style.backgroundColor = document.getElementById("colorPicker3").value;
    };

    cell.ondblclick = () => {
      if (cell.textContent == 3) {
        for (let k = 0; k < 6; k++) {
          table3.rows[k].cells[k].style.backgroundColor = getRandomColor();
        }
      }
    };
  }
}

// Валідація форми Варіант 4

document.getElementById("formVar4").addEventListener("submit", function(event) {
  event.preventDefault();

  const pib = document.getElementById("pib4");
  const faculty = document.getElementById("faculty4");
  const birth = document.getElementById("birth4");
  const address = document.getElementById("address4");
  const email = document.getElementById("email4");

  let isValid = true;
  [pib, faculty, birth, address, email].forEach(el => el.classList.remove("error"));

  const rePIB = /^[А-ЯІЇЄҐA-Z][а-яіїєґa-z']+\s[А-ЯІЇЄҐA-Z]\.[А-ЯІЇЄҐA-Z]\.$/;
  const reFaculty = /^[A-ZА-ЯІЇЄҐ]{4}$/;
  const reBirth = /^\d{2}\.\d{2}\.\d{4}$/;
  const reAddress = /^м\.\s[А-ЯІЇЄҐA-Z][а-яіїєґa-z]+$/;
  const reEmail = /^[\w.-]+@[\w-]+\.[a-z]{2,4}$/i;

  if (!rePIB.test(pib.value)) pib.classList.add("error"), isValid = false;
  if (!reFaculty.test(faculty.value)) faculty.classList.add("error"), isValid = false;
  if (!reBirth.test(birth.value)) birth.classList.add("error"), isValid = false;
  if (!reAddress.test(address.value)) address.classList.add("error"), isValid = false;
  if (!reEmail.test(email.value)) email.classList.add("error"), isValid = false;

  if (isValid) {
    alert(
      "Варіант 4 — Усі дані введено вірно:\n\n" +
      `ПІБ: ${pib.value}\nФакультет: ${faculty.value}\nДата нар.: ${birth.value}\n` +
      `Адреса: ${address.value}\nEmail: ${email.value}`
    );
  } else {
    alert("Варіант 4 — Перевірте правильність заповнення форми! Поля з помилкою підсвічені червоним.");
  }
});


// Таблиця Варіант 4 

const table4 = document.getElementById("tableVar4");
let num4 = 1;
for (let i = 0; i < 6; i++) {
  const row = table4.insertRow();
  for (let j = 0; j < 6; j++) {
    const cell = row.insertCell();
    cell.textContent = num4++;

    cell.onmouseover = () => {
      if (cell.textContent == 4) cell.style.backgroundColor = getRandomColor();
    };

    cell.onclick = () => {
      if (cell.textContent == 4)
        cell.style.backgroundColor = document.getElementById("colorPicker4").value;
    };

    cell.ondblclick = () => {
      if (cell.textContent == 4) {
        for (let k = 0; k < 6; k++) {
          table4.rows[k].cells[5 - k].style.backgroundColor = getRandomColor();
        }
      }
    };
  }
}

// ---------------------------
// Функція випадкового кольору
// ---------------------------
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
