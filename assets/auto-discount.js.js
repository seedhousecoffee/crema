document.addEventListener('DOMContentLoaded', function() {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const discountCode = urlParams.get('discount');
  const shippingCode = urlParams.get('shipping');
  
  // If discount code exists in URL, store it in a cookie
  if (discountCode) {
    document.cookie = "discountCode=" + discountCode + "; path=/; max-age=3600";
    console.log("Discount code stored: " + discountCode);
    
    // Optional: Show a small notification to the user
    const notification = document.createElement('div');
    notification.innerHTML = "Your discount has been applied! You'll see it at checkout.";
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.right = "20px";
    notification.style.backgroundColor = "#4CAF50";
    notification.style.color = "white";
    notification.style.padding = "10px";
    notification.style.borderRadius = "5px";
    notification.style.zIndex = "1000";
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(function() {
      notification.style.display = "none";
    }, 5000);
  }
  
  // Handle shipping code similarly
  if (shippingCode) {
    document.cookie = "shippingCode=" + shippingCode + "; path=/; max-age=3600";
  }
});

// Auto-apply discount on cart page
if (window.location.href.includes('/cart')) {
  setTimeout(function() {
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }
    
    // Get stored discount code
    const discountCode = getCookie('discountCode');
    
    // If we have a code, apply it
    if (discountCode) {
      // Look for discount input field
      const discountField = document.querySelector('input[name="discount"]');
      const discountButton = document.querySelector('button[type="submit"][name="commit"]');
      
      if (discountField && discountButton) {
        discountField.value = discountCode;
        discountButton.click();
      }
    }
  }, 1000); // Wait 1 second for page to fully load
}