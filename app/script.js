//Message of the day
showNotification('All cursors from custom-cursor.com have been removed.', 'Orange');

//setup variables
let userCur = JSON.parse(localStorage.getItem("cursors")) || [];

function addCur(url, a, b, c) {
  // Check if values already exist in array
  const isDuplicate = userCur.some(
    (item) => item.link === url && item.cur === a && item.poi === b
    && item.car === c
  );

  if (isDuplicate) {
    showNotification('You already have this installed.', 'orange');
    return;
  }

  userCur.push({ link: url, cur: a, poi: b, car: c});
  console.log(JSON.stringify(userCur, null, 2));
  localStorage.setItem("cursors", JSON.stringify(userCur));
  showNotification('Installed', 'Green');
}

//remove a cursor
function remCur(value) {
  let x = userCur
    .map(function (e) {
      return e.link;
    })
    .indexOf(value);
  if (x !== -1) {
    // Check if the value exists in the array
    userCur.splice(x, 1);
    localStorage.setItem("cursors", JSON.stringify(userCur));
    showNotification('Removed', 'Red');
  } else {
    showNotification('You dont have this installed.', 'orange');
  }
}

//clear localstorage
function clearStorage() {
  localStorage.clear();
  showNotification('LOCAL STORAGE CLEARED', 'red');
}

//page loading
window.addEventListener("load", function () {
  console.log("Page loaded.");
  const loader = document.getElementById("loader");
  const loadingText = document.querySelector(".loading-text");
  const dots = ["", ".", "..", "..."];
  let dotIndex = 0;

  const updateText = () => {
    loadingText.textContent = `Loading${dots[dotIndex]}`;
    dotIndex = (dotIndex + 1) % dots.length;
  };

  const intervalId = setInterval(updateText, 500);

  window.addEventListener("DOMContentLoaded", function () {
    clearInterval(intervalId);
    loader.classList.add("fadeOut");
  });

  window.addEventListener("pageshow", function () {
    loader.classList.add("fadeOut");
  });

  window.addEventListener("beforeunload", function () {
    loader.classList.remove("fadeOut");
  });
});

//Search Bar
const searchBar = document.getElementById('search-bar');
const results = document.getElementById('results');

searchBar.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) { // Enter key
    const searchText = searchBar.value.toLowerCase();
    const items = document.getElementsByTagName('p');
    let found = false;

    for (let i = 0; i < items.length; i++) {
      const itemText = items[i].textContent.toLowerCase();

      if (itemText.includes(searchText)) {
        found = true;
        items[i].classList.add('highlight');
        items[i].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
      } else {
        items[i].classList.remove('highlight');
      }
    }
  }
});


//Only load images when scrolled to
// Get all the images on the page
const images = document.querySelectorAll("img[data-src]");

// Set the options for the Intersection Observer
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

// Create the Intersection Observer
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Load the image
      entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
      // Stop observing the image
      observer.unobserve(entry.target);
    }
  });
}, options);

// Observe each image
images.forEach((image) => {
  observer.observe(image);
});

//Notifications
function showNotification(text, bgcolor) {
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '10px';
  notification.style.left = '10px';
  notification.style.padding = '10px';
  notification.style.fontSize = '18px';
  notification.style.color = 'white';
  notification.style.backgroundColor = bgcolor;
  notification.style.borderRadius = '5px';
  notification.style.zIndex = '9999';
  notification.style.opacity = '0';
  notification.textContent = text;

  document.body.appendChild(notification);

  // Fade in
  const fadeIn = setInterval(function() {
    if (notification.style.opacity < 1) {
      notification.style.opacity = parseFloat(notification.style.opacity) + 0.1;
    } else {
      clearInterval(fadeIn);
      // Fade out
      setTimeout(() => {
        const fadeOut = setInterval(function() {
          if (notification.style.opacity > 0) {
            notification.style.opacity = parseFloat(notification.style.opacity) - 0.1;
          } else {
            clearInterval(fadeOut);
            document.body.removeChild(notification);
          }
        }, 50);
      }, 2000);
    }
  }, 50);
}


//ARRAY OF ALL THE CURSORS ------------------------------------------------------------------------------------------

let arrayCur = [
{name:"Roblox Default",cover:"https://imgsocket.glitch.me/img/XsMtloDfbY.png",cursor:"https://imgsocket.glitch.me/img/W5EbAvFFFX.png",pointer:"https://imgsocket.glitch.me/img/LGlE31eJsa.png",caret:"https://imgsocket.glitch.me/img/XDnnNTZBC-.png"},
{name:"Cartoon",cover:"https://imgsocket.glitch.me/img/2UXY6yKhRX.png",cursor:"https://imgsocket.glitch.me/img/YDamVBApnf.png",pointer:"https://imgsocket.glitch.me/img/haxOate~_f.png",caret:"https://imgsocket.glitch.me/img/mIVah2JTH7.png"},
{name:"Dark Ultimate",cover:"https://imgsocket.glitch.me/img/9MavTsKe9w.png",cursor:"https://imgsocket.glitch.me/img/FAl_loUimA.png",pointer:"https://imgsocket.glitch.me/img/xuBVkGulb_.png",caret:"https://imgsocket.glitch.me/img/IdjKMJQIDi.png"},
{name:"Hell Power",cover:"https://imgsocket.glitch.me/img/Rj9UJ_HYDb.png",cursor:"https://imgsocket.glitch.me/img/8QChOQOOUe.png",pointer:"https://imgsocket.glitch.me/img/Jk0frsEGuW.png",caret:"https://imgsocket.glitch.me/img/NGKeaGXn92.png"},
{name:"Rainbow Outline",cover:"https://imgsocket.glitch.me/img/vTTf_+zbxQ.png",cursor:"https://imgsocket.glitch.me/img/gECHG-~A38.png",pointer:"https://imgsocket.glitch.me/img/dhkUsO7PRU.png",caret:"https://imgsocket.glitch.me/img/7CX8_rDnyC.png"},
{name:"Diamond",cover:"https://imgsocket.glitch.me/img/p3fpk7MKEz.png",cursor:"https://imgsocket.glitch.me/img/v4ps2G1Esw.png",pointer:"https://imgsocket.glitch.me/img/u-P7aXyBzN.png",caret:"https://imgsocket.glitch.me/img/kViuIiV19B.png"},

];

/* BLANK ONE
 {
    "name":"",
    "cover":"",
    "cursor":"",
    "pointer":""
  },
  
*/

//load the cursors to the webpage
function loadCur() {
  let inh = "";
  for (let i = 0; i < arrayCur.length; i++) {
    inh +=
      `<div class="add-container"> <p>` +
      arrayCur[i].name +
      `</p> <img src="` +
      arrayCur[i].cover +
      `" /> <button class="add" onclick="addCur('` +
      arrayCur[i].cover +
      `','` +
      arrayCur[i].cursor +
      `','` +
      arrayCur[i].pointer +
      `','` +
      arrayCur[i].caret +
      `')" > Add </button> <button class="remove" onclick="remCur('` +
      arrayCur[i].cover +
      `')" > Remove </button> </div>`;
  }
  document.getElementById("flex-container").innerHTML = inh;
}
loadCur();
