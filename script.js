// Explicitly declare an array with 64 'placeholder' strings
const imageSrcArray = [
  "https://www.datocms-assets.com/99382/1694783821-04-01-23.png",
  "https://www.datocms-assets.com/99382/1694783830-04-02-23.png",
  "https://www.datocms-assets.com/99382/1694783839-04-03-23.png",
  "https://www.datocms-assets.com/99382/1694783848-04-06-23.png",
  "https://www.datocms-assets.com/99382/1694783856-04-11-23.png",
  "https://www.datocms-assets.com/99382/1694783870-04-17-23.png",
  "https://www.datocms-assets.com/99382/1694783878-04-27-23.png",
  "https://www.datocms-assets.com/99382/1694783887-04-28-23.png",
  "https://www.datocms-assets.com/99382/1694783896-04-30-23.png",
  "https://www.datocms-assets.com/99382/1694783929-05-02-23.png",
  "https://www.datocms-assets.com/99382/1694783938-05-04-23.png",
  "https://www.datocms-assets.com/99382/1694783961-05-06-23.png",
  "https://www.datocms-assets.com/99382/1694783970-05-07-23.png",
  "https://www.datocms-assets.com/99382/1694783979-05-09-23.png",
  "https://www.datocms-assets.com/99382/1694783988-05-10-23.png",
  "https://www.datocms-assets.com/99382/1694783999-05-17-23.png",
  "https://www.datocms-assets.com/99382/1694784007-05-21-23.png",
  "https://www.datocms-assets.com/99382/1694784016-05-22-23.png",
  "https://www.datocms-assets.com/99382/1694784032-05-24-23.png",
  "https://www.datocms-assets.com/99382/1694784041-05-30-23.png",
  "https://www.datocms-assets.com/99382/1694784050-06-05-23.png",
  "https://www.datocms-assets.com/99382/1694784058-06-06-23.png",
  "https://www.datocms-assets.com/99382/1694784071-06-13-23.png",
  "https://www.datocms-assets.com/99382/1694784083-06-22-23.png",
  "https://www.datocms-assets.com/99382/1694784091-07-06-23.png",
  "https://www.datocms-assets.com/99382/1694784104-07-19-23.png",
  "https://www.datocms-assets.com/99382/1694784111-07-19-23-2.png",
  "https://www.datocms-assets.com/99382/1694784120-07-20-23.png",
  "https://www.datocms-assets.com/99382/1694784127-07-23-23.png",
  "https://www.datocms-assets.com/99382/1694784136-07-23-23-2.png",
  "https://www.datocms-assets.com/99382/1694784143-07-24-23.png",
  "https://www.datocms-assets.com/99382/1694784155-08-02-23.png",
  "https://www.datocms-assets.com/99382/1694784163-08-03-23.png",
  "https://www.datocms-assets.com/99382/1694784173-08-03-23-2.png",
  "https://www.datocms-assets.com/99382/1694784184-08-03-23-3.png",
  "https://www.datocms-assets.com/99382/1694784196-08-05-23.png",
  "https://www.datocms-assets.com/99382/1694784206-08-07-23.png",
  "https://www.datocms-assets.com/99382/1694784214-08-10-23.png",
  "https://www.datocms-assets.com/99382/1694784223-08-11-23.png",
  "https://www.datocms-assets.com/99382/1694784234-08-15-23.png",
  "https://www.datocms-assets.com/99382/1694784245-08-15-23-2.png",
  "https://www.datocms-assets.com/99382/1694784264-08-15-23-3.png",
  "https://www.datocms-assets.com/99382/1694784272-08-18-22.png",
  "https://www.datocms-assets.com/99382/1694784280-08-18-23.png",
  "https://www.datocms-assets.com/99382/1694784291-08-19-23.png",
  "https://www.datocms-assets.com/99382/1694784305-08-22-23.png",
  "https://www.datocms-assets.com/99382/1694784316-08-23-23.png",
  "https://www.datocms-assets.com/99382/1694784327-08-23-23-2.png",
  "https://www.datocms-assets.com/99382/1694784334-08-24-23.png",
  "https://www.datocms-assets.com/99382/1694784353-08-26-23.png",
  "https://www.datocms-assets.com/99382/1694784364-08-30-23.png",
  "https://www.datocms-assets.com/99382/1694784372-08-31-23.png",
  "https://www.datocms-assets.com/99382/1694784380-08-31-23-2.png",
  "https://www.datocms-assets.com/99382/1694784391-09-05-23.png",
  "https://www.datocms-assets.com/99382/1694784398-09-06-23.png",
  "https://www.datocms-assets.com/99382/1694784421-09-07-23.png",
  "https://www.datocms-assets.com/99382/1694784430-09-07-23-2.png",
  "https://www.datocms-assets.com/99382/1694784438-09-07-23-3.png",
  "https://www.datocms-assets.com/99382/1694784449-09-07-23-4.png",
  "https://www.datocms-assets.com/99382/1694784459-09-07-23-5.png",
  "https://www.datocms-assets.com/99382/1694784469-09-07-23-6.png",
];

// Get the div element with the class name 'screenshot-container'
const screenshotContainer = document.querySelector(".screenshot-container");

// Loop through the array and insert image wrappers into the div
const mostRecentArray = imageSrcArray.reverse();

mostRecentArray.forEach((src, index) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.className = "diary-entry-wrapper";

  const imgElement = document.createElement("img");
  imgElement.className = "diary-entry"; // Set class name
  imgElement.src = mostRecentArray[index]; // Set src based on array index

  wrapperElement.appendChild(imgElement); // Append the image element to the wrapper
  screenshotContainer.appendChild(wrapperElement); // Append the wrapper to the div
});

//overlay functionality
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".screenshot-container img");
  const overlay = document.getElementById("overlay");
  const overlayImage = document.getElementById("overlay-image");
  const closeButton = document.getElementById("close-button");

  let offsetX = 0;
  let offsetY = 0;

  // For mouse events
  let initialX, initialY;

  // For touch events
  let initialTouchX, initialTouchY;

  images.forEach((image) => {
    image.addEventListener("click", function () {
      overlayImage.src = this.src;
      overlay.style.display = "block";
    });
  });

  closeButton.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  // Mouse events
  overlayImage.addEventListener("mousedown", function (e) {
    e.preventDefault();
    initiateDrag(e.clientX, e.clientY);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  // Touch events
  overlayImage.addEventListener("touchstart", function (e) {
    e.preventDefault();
    const touch = e.touches[0];
    initiateDrag(touch.clientX, touch.clientY);
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd);
  });

  function initiateDrag(x, y) {
    initialX = x;
    initialY = y;
    offsetX = x - overlayImage.getBoundingClientRect().left;
    offsetY = y - overlayImage.getBoundingClientRect().top;
  }

  function onMouseMove(e) {
    updatePosition(e.clientX, e.clientY);
  }

  function onTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    updatePosition(touch.clientX, touch.clientY);
  }

  function updatePosition(newX, newY) {
    let x = newX - offsetX;
    let y = newY - offsetY;

    const rect = overlayImage.getBoundingClientRect();

    if (x > 0) x = 0;
    if (y > 0) y = 0;
    if (x < window.innerWidth - rect.width) x = window.innerWidth - rect.width;
    if (y < window.innerHeight - rect.height)
      y = window.innerHeight - rect.height;

    overlayImage.style.left = 1.25(x) + "px";
    overlayImage.style.top = 1.25(y) + "px";
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  function onTouchEnd() {
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onTouchEnd);
  }
});
