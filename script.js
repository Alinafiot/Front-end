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