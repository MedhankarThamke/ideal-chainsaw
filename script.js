document.addEventListener("DOMContentLoaded", () => {
  // Get the clickable bouquet container
  const lotusBouquet = document.getElementById("lotusBouquet");

  // Get the message box and close button
  const messageOverlay = document.getElementById("messageOverlay");
  const closeBtn = document.getElementById("closeBtn");

  // 1. Open the message when the bouquet is clicked
  lotusBouquet.addEventListener("click", () => {
    messageOverlay.style.display = "flex";
  });

  // 2. Close the message when the 'X' button is clicked
  closeBtn.addEventListener("click", () => {
    messageOverlay.style.display = "none";
  });

  // 3. Close the message when clicking the background overlay
  messageOverlay.addEventListener("click", (event) => {
    if (event.target === messageOverlay) {
      messageOverlay.style.display = "none";
    }
  });
});
