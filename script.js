// Explicitly declare an array with 64 'placeholder' strings
const imageSrcArray = [
  "https://www.datocms-assets.com/106590/1695248710-04-01-23.png",
  "https://www.datocms-assets.com/106590/1695248718-04-02-23.png",
  "https://www.datocms-assets.com/106590/1695248725-04-03-23.png",
  "https://www.datocms-assets.com/106590/1695248734-04-06-23.png",
  "https://www.datocms-assets.com/106590/1695248741-04-11-23.png",
  "https://www.datocms-assets.com/106590/1695248754-04-17-23.png",
  "https://www.datocms-assets.com/106590/1695248760-04-27-23.png",
  "https://www.datocms-assets.com/106590/1695248769-04-28-23.png",
  "https://www.datocms-assets.com/106590/1695248777-04-30-23.png",
  "https://www.datocms-assets.com/106590/1695248795-05-01-23.png",
  "https://www.datocms-assets.com/106590/1695248811-05-02-23.png",
  "https://www.datocms-assets.com/106590/1695248849-05-06-23.png",
  "https://www.datocms-assets.com/106590/1695248859-05-07-23.png",
  "https://www.datocms-assets.com/106590/1695248867-05-09-23.png",
  "https://www.datocms-assets.com/106590/1695248875-05-10-23.png",
  "https://www.datocms-assets.com/106590/1695248887-05-17-23.png",
  "https://www.datocms-assets.com/106590/1695248894-05-21-23.png",
  "https://www.datocms-assets.com/106590/1695248901-05-22-23.png",
  "https://www.datocms-assets.com/106590/1695248914-05-24-23.png",
  "https://www.datocms-assets.com/106590/1695248922-05-30-23.png",
  "https://www.datocms-assets.com/106590/1695248931-06-05-23.png",
  "https://www.datocms-assets.com/106590/1695248940-06-06-23.png",
  "https://www.datocms-assets.com/106590/1695248953-06-13-23.png",
  "https://www.datocms-assets.com/106590/1695248964-06-22-23.png",
  "https://www.datocms-assets.com/106590/1695248971-07-06-23.png",
  "https://www.datocms-assets.com/106590/1695248981-07-19-23.png",
  "https://www.datocms-assets.com/106590/1695248990-07-19-23-2.png",
  "https://www.datocms-assets.com/106590/1695248999-07-20-23.png",
  "https://www.datocms-assets.com/106590/1695249006-07-23-23.png",
  "https://www.datocms-assets.com/106590/1695249015-07-23-23-2.png",
  "https://www.datocms-assets.com/106590/1695249022-07-24-23.png",
  "https://www.datocms-assets.com/106590/1695249031-08-02-23.png",
  "https://www.datocms-assets.com/106590/1695249050-08-03-23-2.png",
  "https://www.datocms-assets.com/106590/1695249050-08-03-23-2.png",
  "https://www.datocms-assets.com/106590/1695249059-08-03-23-3.png",
  "https://www.datocms-assets.com/106590/1695249072-08-05-23.png",
  "https://www.datocms-assets.com/106590/1695249080-08-07-23.png",
  "https://www.datocms-assets.com/106590/1695249087-08-10-23.png",
  "https://www.datocms-assets.com/106590/1695249093-08-11-23.png",
  "https://www.datocms-assets.com/106590/1695249104-08-15-23.png",
  "https://www.datocms-assets.com/106590/1695249114-08-15-23-2.png",
  "https://www.datocms-assets.com/106590/1695249132-08-15-23-3.png",
  "https://www.datocms-assets.com/106590/1695249141-08-18-22.png",
  "https://www.datocms-assets.com/106590/1695249148-08-18-23.png",
  "https://www.datocms-assets.com/106590/1695249160-08-19-23.png",
  "https://www.datocms-assets.com/106590/1695249174-08-22-23.png",
  "https://www.datocms-assets.com/106590/1695249182-08-23-23.png",
  "https://www.datocms-assets.com/106590/1695249192-08-23-23-2.png",
  "https://www.datocms-assets.com/106590/1695249200-08-24-23.png",
  "https://www.datocms-assets.com/106590/1695249216-08-26-23.png",
  "https://www.datocms-assets.com/106590/1695249227-08-30-23.png",
  "https://www.datocms-assets.com/106590/1695249234-08-31-23.png",
  "https://www.datocms-assets.com/106590/1695249241-08-31-23-2.png",
  "https://www.datocms-assets.com/106590/1695249247-09-05-23.png",
  "https://www.datocms-assets.com/106590/1695249255-09-06-23.png",
  "https://www.datocms-assets.com/106590/1695249278-09-07-23.png",
  "https://www.datocms-assets.com/106590/1695249285-09-07-23-2.png",
  "https://www.datocms-assets.com/106590/1695249295-09-07-23-3.png",
  "https://www.datocms-assets.com/106590/1695249305-09-07-23-4.png",
  "https://www.datocms-assets.com/106590/1695249315-09-07-23-5.png",
  "https://www.datocms-assets.com/106590/1695249325-09-07-23-6.png",
  "https://www.datocms-assets.com/106590/1695249333-09-08-23.png",
  "https://www.datocms-assets.com/106590/1695249345-09-19-23.png",
  "https://www.datocms-assets.com/106590/1695249352-09-19-23-2.png",
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
