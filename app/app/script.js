//setup variables
let userCur = JSON.parse(localStorage.getItem("cursors")) || [];
let inh = "";
document.documentElement.style.setProperty('--rand', Math.random(0,2));

//load what the user has
for (let i = 0; i < userCur.length; i++) {
  inh +=
    '<button onclick="setMouse(`' +
    userCur[i].cur +
    "`, `" +
    userCur[i].poi +
    "`, `" +
    userCur[i].car +
    '`)"><img src="' +
    userCur[i].link +
    '"height="30px;"/></button>\n';
}
document.getElementById("installed").innerHTML = inh;
console.log("loaded");
function castData(a, b, c) {
  if (a == "a") {
    if (document.getElementById("trailCan")) {
      const message =
        "javascript:document.getElementById('trailCan').remove();";
      simulateClick(message);
      window.parent.postMessage(message, "*");
      window.parent.postMessage(message, "*");
      window.parent.postMessage(message, "*");
      window.parent.postMessage(message, "*");
      //i have to do that to avoid the trail dupe glitch
    }
    const message =
      "javascript:(function() {  const canvas = document.createElement('canvas');  canvas.width = window.innerWidth;  canvas.id = 'trailCan'; canvas.height = window.innerHeight;  canvas.style.top = 0;  canvas.style.left = 0; canvas.style.zIndex = 9999; canvas.style.position = 'fixed';  canvas.style.pointerEvents = 'none';  document.body.appendChild(canvas);  const context = canvas.getContext('2d');  const maxRadius = " +
      document.getElementById("slider").value +
      ";  const minRadius = " +
      document.getElementById("slider").value / 10 +
      ";  const maxAlpha = 0.5;  const minAlpha = 0.1;  const trailLength = 20;  const trail = [];  const img = new Image();  img.src = '" +
      c +
      "';  function draw() { if (mouseX >= 0 && mouseX <= window.innerWidth && mouseY >= 0 && mouseY <= window.innerHeight) { context.clearRect(0, 0, canvas.width, canvas.height); trail.push({ x: mouseX, y: mouseY }); if (trail.length > trailLength) trail.shift(); for (let i = 0; i < trail.length; i++) { const radius = minRadius + ((maxRadius - minRadius) / trailLength) * i; const alpha = minAlpha + ((maxAlpha - minAlpha) / trailLength) * i; context.globalAlpha = alpha; context.drawImage(img, trail[i].x - radius / 2, trail[i].y - radius / 2, radius, radius); } } }   let mouseX = 0;  let mouseY = 0;  document.addEventListener('mousemove', (event) => {    mouseX = event.clientX;    mouseY = event.clientY;  });  canvas.addEventListener('mousedown', (event) => {    event.stopPropagation();  });  function loop() {    draw();    requestAnimationFrame(loop);  }  loop();})();";
    simulateClick(message);
    window.parent.postMessage(message, "*");
  } else {
    const message = [a, b, c];
    window.parent.postMessage(message, "*");
  }
}
//set mouse in iframe
function setMouse(a, b, c) {
  castData(a, b, c);
  doMouse();
  function doMouse() {
    document.querySelectorAll("*").forEach(function (node3) {
      if (window.getComputedStyle(node3).cursor === "pointer") {
        node3.setAttribute("cursor", "pointer");
      }
    });
    document
      .querySelectorAll('*:not([cursor="pointer"])')
      .forEach(function (node) {
        if (canTypeInElement(node)) {
          node.style.cursor = "url(" + c + "),text";
        } else {
          node.style.cursor = "url(" + a + "),default";
        }
      });
    document.querySelectorAll('*[cursor="pointer"]').forEach(function (node2) {
      node2.style.cursor = "url(" + b + "),pointer";
    });
  }
}
function resetCursor() {
  document.querySelectorAll("*").forEach(function (node) {
    node.style.cursor = "default";
  });
}

//collaplseables
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  collapsible.addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
window.addEventListener("load", function () {
  const collapsibles = document.querySelectorAll(".collapsible");
  collapsibles.forEach((collapsible, index) => {
    setTimeout(() => {
      collapsible.click();
    }, index * 300);
  });
});

//page loading
window.addEventListener("load", function () {
  console.log("Page loaded.");
  const loader = document.getElementById("loader");
  const loadingText = document.querySelector(".loading-text");
  const dots = [".", ".", "..", "..."];
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

//lazy loading just in case
window.addEventListener("load", function () {
  const collapsibles = document.querySelectorAll(".collapsible");
  collapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", function () {
      const images = this.querySelectorAll("img[data-src]");
      images.forEach((image) => {
        image.setAttribute("src", image.getAttribute("data-src"));
        image.removeAttribute("data-src");
      });
    });
  });
});

//tab menu
const tabContent1 = document.getElementById("tab1");
const tabContent2 = document.getElementById("tab2");
const getContent1 = document.getElementById("tabc1");
const getContent2 = document.getElementById("tabc2");

getContent1.addEventListener("click", () => {
  tabContent1.style.display = "block";
  tabContent2.style.display = "none";
  getContent1.classList.add("active2");
  getContent2.classList.remove("active2");
});

getContent2.addEventListener("click", () => {
  tabContent2.style.display = "block";
  tabContent1.style.display = "none";
  getContent2.classList.add("active2");
  getContent1.classList.remove("active2");
});

//Detect if you can type in element
function canTypeInElement(element) {
  if (
    (element instanceof HTMLInputElement && element.type !== "hidden") ||
    element instanceof HTMLTextAreaElement ||
    element.contentEditable === "true"
  ) {
    return true;
  }
  if (
    element instanceof HTMLSelectElement ||
    element instanceof HTMLOptionElement
  ) {
    return true;
  }
  if (
    element instanceof HTMLButtonElement ||
    (element.tagName.toLowerCase() === "button" &&
      element.getAttribute("type") === "submit")
  ) {
    return true;
  }
  return false;
}
//simulate a click
function simulateClick(bookmarklet) {
  var link = document.createElement("a");
  link.href = bookmarklet;
  document.body.appendChild(link);
  link.click();
}

const trailList = [
  { title: "Colored Trails" },
  { url: "https://imgsocket.glitch.me/img/V5JuBuXn1g.png", length: 0.05 },
  { url: "https://imgsocket.glitch.me/img/FHAwjlMkt6.png", length: 0.05 },
  { url: "https://imgsocket.glitch.me/img/dD7vSNxm+T.png", length: 0.05 },
  { url: "https://imgsocket.glitch.me/img/CFBwEQBYIH.png", length: 0.05 },
  { url: "https://imgsocket.glitch.me/img/29hK0v-j2V.png", length: 0.05 },
  { url: "https://imgsocket.glitch.me/img/YRmNt3ci69.png", length: 0.05 },
  { url: "https://imgsocket.glitch.me/img/Dva7aDtEUy.png", length: 0.05 },
  { title: "Misc" },
  { url: "https://imgsocket.glitch.me/img/rwJtOREOkL.png", length: 1 },
];

function loadTrails() {
  const data = document.getElementById("tab2");
  let content = "";
  for (let i = 0; i < trailList.length; i++) {
    if (trailList[i].title != undefined) {
      content +=
        "<p>" +
        trailList[i].title +
        `</p><hr style='height: 1px; background-color: #800000; border: none' />`;
    } else if (trailList[i].url != undefined) {
      content +=
        `<button onclick="castData('a','` +
        trailList[i].length +
        `','` +
        trailList[i].url +
        `')"><img src='` +
        trailList[i].url +
        `' height:25px;"/></button>`;
    }
  }
  data.innerHTML += content;
}
loadTrails();

function resetTrail() {
  const message =
        "javascript:document.getElementById('trailCan').remove();";
      simulateClick(message);
      window.parent.postMessage(message, "*");
      window.parent.postMessage(message, "*");
      window.parent.postMessage(message, "*");
      window.parent.postMessage(message, "*");
      //i have to do that to avoid the trail dupe glitch
}

//sliderbar
var slider = document.getElementById("slider");
var output = document.getElementById("tSize");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

const simpleCur = [
  { 
    link: "https://imgsocket.glitch.me/img/yg0i3_ymv2.png", 
    cur: "https://imgsocket.glitch.me/img/IL+mwG2A_-.png", 
    poi: "https://imgsocket.glitch.me/img/gPNpyM2sgx.png",
    car: "https://imgsocket.glitch.me/img/zj5z93aWwZ.png" 
  },
  { 
    link: "https://imgsocket.glitch.me/img/Pe47n6G5RT.png", 
    cur: "https://imgsocket.glitch.me/img/w3i2I+7oxa.png", 
    poi: "https://imgsocket.glitch.me/img/SPQlQ1fOrL.png",
    car: "https://imgsocket.glitch.me/img/0r241V+~uy.png" 
  },
];

for (let i = 0; i < simpleCur.length; i++) {
  const cata = "Simple Cursors";
  let inh = "";
  inh +=
    '<button onclick="setMouse(`' +
    simpleCur[i].cur +
    "`, `" +
    simpleCur[i].poi +
    "`, `" +
    simpleCur[i].car +
    '`)"><img src="' +
    simpleCur[i].link +
    '"height="30px;"/></button>\n';
  document.getElementById('Simple Cursors').innerHTML += inh;
}

const coloredCur = [
  { 
    link: "https://imgsocket.glitch.me/img/B0h+-ovdZP.png", 
    cur: "https://imgsocket.glitch.me/img/1Z3Dj_XHiA.png", 
    poi: "https://imgsocket.glitch.me/img/zhD~CkH6Ay.png",
    car: "https://imgsocket.glitch.me/img/6NuO~TAK1J.png" 
  },
  { 
    link: "https://imgsocket.glitch.me/img/Wl6t~k6Sp1.png", 
    cur: "https://imgsocket.glitch.me/img/zOjwp74QEn.png", 
    poi: "https://imgsocket.glitch.me/img/cum17ckmVd.png",
    car: "https://imgsocket.glitch.me/img/MLmnAWOkYg.png" 
  },
  { 
    link: "https://imgsocket.glitch.me/img/crdX8G1~j+.png", 
    cur: "https://imgsocket.glitch.me/img/jlEwwHVEUA.png", 
    poi: "https://imgsocket.glitch.me/img/e8~ovA98oZ.png",
    car: "https://imgsocket.glitch.me/img/fRjAmnZ0AZ.png" 
  },
  { 
    link: "https://imgsocket.glitch.me/img/SROjR1cAhG.png", 
    cur: "https://imgsocket.glitch.me/img/BsFHSF1uLD.png", 
    poi: "https://imgsocket.glitch.me/img/NS3xcIVBVM.png",
    car: "https://imgsocket.glitch.me/img/y5KxWlb8U8.png" 
  },
  { 
    link: "https://imgsocket.glitch.me/img/zoy3IiJOeM.png", 
    cur: "https://imgsocket.glitch.me/img/411YkRd8ye.png", 
    poi: "https://imgsocket.glitch.me/img/ukVY5okiJq.png",
    car: "https://imgsocket.glitch.me/img/prlxrrLGFE.png" 
  },
   { 
    link: "https://imgsocket.glitch.me/img/KOquDov_C-.png", 
    cur: "https://imgsocket.glitch.me/img/+t7cx7STJ2.png", 
    poi: "https://imgsocket.glitch.me/img/WNW9dvlsH1.png",
    car: "https://imgsocket.glitch.me/img/Y0lqR4pQv1.png" 
  },
];

for (let i = 0; i < coloredCur.length; i++) {
  const cata = "Colored Cursors";
  let inh = "";
  inh +=
    '<button onclick="setMouse(`' +
    coloredCur[i].cur +
    "`, `" +
    coloredCur[i].poi +
    "`, `" +
    coloredCur[i].car +
    '`)"><img src="' +
    coloredCur[i].link +
    '"height="30px;"/></button>\n';
  document.getElementById('Colored Cursors').innerHTML += inh;
}