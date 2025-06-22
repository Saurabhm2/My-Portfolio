// Function to detect if the device is a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  // Function to switch the website to desktop mode
  function switchToDesktopMode() {
    // Here you can add code to modify the website layout for desktop mode
    console.log("Switching to desktop mode");
  }
  
  // Check if the device is a mobile device
  if (isMobileDevice()) {
    switchToDesktopMode(); // Switch to desktop mode if it's a mobile device
  }
  
