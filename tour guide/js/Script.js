// dark and light mode js

const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  
  // Banner title ka color update karein
  const bannerTitles = document.getElementsByClassName('banner-title');
  for (let title of bannerTitles) {
    title.style.color = document.body.classList.contains('dark-mode') ? 'white' : 'black';
  }
});

// Page load hone par theme apply karein
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  
  // Banner title ka color update karein
  const bannerTitles = document.getElementsByClassName('banner-title');
  for (let title of bannerTitles) {
    title.style.color = 'white';
  }
}


// currency code

const exchangeRates = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.78,
    INR: 83.00
  };
  
  document.getElementById("currency-selector").addEventListener("change", function() {
    let selectedCurrency = this.value;
    let prices = document.querySelectorAll(".price");
    
    prices.forEach(price => {
      let basePrice = price.getAttribute("data-base-price");
      price.innerText = (basePrice * exchangeRates[selectedCurrency]).toFixed(2) + ' ' + selectedCurrency;
    });
    localStorage.setItem("currency", selectedCurrency);
  });
  
  window.onload = function() {
    let savedCurrency = localStorage.getItem("currency") || "USD";
    document.getElementById("currency-selector").value = savedCurrency;
    document.getElementById("currency-selector").dispatchEvent(new Event("change"));
  };

  // map js

  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.7128, lng: -74.0060 }, // Default to New York
      zoom: 5,
    });
    
    const locations = [
      { lat: 48.8566, lng: 2.3522, title: "Paris, France" },
      { lat: 51.5074, lng: -0.1278, title: "London, UK" },
      { lat: 35.6895, lng: 139.6917, title: "Tokyo, Japan" }
    ];
    
    locations.forEach((location) => {
      new google.maps.Marker({
        position: location,
        map,
        title: location.title,
      });
    });
  }
  // <!-- JavaScript to Hide One Modal When Another Opens -->

  // Hide Sign In when Sign Up is opened
  $('#signUpModal').on('show.bs.modal', function () {
    $('#signInModal').modal('hide');
  });

  // Hide Sign Up when Sign In is opened
  $('#signInModal').on('show.bs.modal', function () {
    $('#signUpModal').modal('hide');
  });
// owl carasoul js

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], 
    responsive:{
      0:{ items:1 },
      600:{ items:2 },
      1000:{ items:4 }
    }
  });
});
