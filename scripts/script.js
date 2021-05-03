let lastScrollPosition = 0;

function initMap() {
  // The location of Uluru
  const uluru = {
    lat: 41.02473235294234,
    lng: 28.89157572023607
  };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

$(document).on("click", ".hamburger-menu-button", () => {
  var hamburherMenu = $(".hamburger-menu");
  if (!hamburherMenu.hasClass("active")) {
    hamburherMenu.addClass("active");
    $("body").css({
      "overflow": "hidden"
    });
    $("section").css({
      "padding-left": "22.5rem"
    })
  }
})

$(document).on("click", ".hamburger-menu-close", () => {
  var hamburherMenu = $(".hamburger-menu");
  if (hamburherMenu.hasClass("active")) {
    hamburherMenu.removeClass("active");
    $("body").css({
      "overflow": "hidden auto"
    })
    $("section").css({
      "padding-left": "0"
    })
  }
});

$(document).on("click", ".search-icon", () => {
  var lookingFor = $(".looking-for");
  if (!lookingFor.hasClass("active")) {
    lookingFor.addClass("active");
    lookingFor.css({
      "display": "flex"
    });
    lookingFor.css({
      "top": scrollY + "px",
      "transform": "translate3d(0, 0, 0)"
    })
    $("body").css({
      "overflow": "hidden"
    });
  }
});

$(document).on("click", ".close-button", () => {
  var lookingFor = $(".looking-for");
  if (lookingFor.hasClass("active")) {
    lookingFor.removeClass("active");
    lookingFor.css({
      "transform": "translate3d(0, 100%, 0)"
    });
    lookingFor.css({
      "display": "none"
    });
    $("body").css({
      "overflow": "hidden auto"
    });
  }
})

// $(document).on("scroll", () => {
//   if (lastScrollPosition < scrollY) {
//     $(".navigation").css({
//       "position": "relative"
//     })
//   } else {
//     $(".navigation").css({
//       "position": "sticky"
//     })
//   }

//   lastScrollPosition = scrollY;
// });