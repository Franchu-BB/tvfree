var $filters = $(".filter [data-filter]"),
  $boxes = $(".boxes [data-category]");
$filters.on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  $filters.removeClass("active");
  $this.addClass("active");
  var $filterCategory = $this.attr("data-filter");
  if ($filterCategory == "all") {
    $boxes
      .removeClass("is-animated")
      .fadeOut()
      .promise()
      .done(function () {
        $boxes.addClass("is-animated").fadeIn();
      });
  } else {
    $boxes
      .removeClass("is-animated")
      .fadeOut()
      .promise()
      .done(function () {
        $boxes
          .filter('[data-category = "' + $filterCategory + '"]')
          .addClass("is-animated")
          .fadeIn();
      });
  }
});
function RemoveAccents(str) {
  var accents =
    "ÀÁÂÃÄÅĄĀāàáâãäåąßÒÓÔÕÕÖØŐòóôőõöøĎďDŽdžÈÉÊËĘèéêëęðÇçČčĆćÐÌÍÎÏĪìíîïīÙÚÛÜŰùűúûüĽĹŁľĺłÑŇŃňñńŔŕŠŚŞšśşŤťŸÝÿýŽŻŹžżźđĢĞģğ";
  var accentsOut =
    "AAAAAAAAaaaaaaaasOOOOOOOOoooooooDdDZdzEEEEEeeeeeeCcCcCcDIIIIIiiiiiUUUUUuuuuuLLLlllNNNnnnRrSSSsssTtYYyyZZZzzzdGGgg";
  str = str.split("");
  var strLen = str.length;
  var i, x;
  for (i = 0; i < strLen; i++) {
    if ((x = accents.indexOf(str[i])) != -1) {
      str[i] = accentsOut[x];
    }
  }
  return str.join("");
}
$(document).ready(function () {
  $("#buscar").on("input", function () {
    var value = $(this).val().toLowerCase();
    $(".boxes > .card-wrapper").filter(function () {
      $(this).toggle(
        $(this).find("div").attr("title").toLowerCase().indexOf(value) > -1
      );
    });
  });
});
window.onclick = function (event) {
  if (event.target.matches(".card")) {
    var dropbuttons = document.getElementsByClassName("card");
    for (var i = 0; i < dropbuttons.length; i++) {
      var openDropdown = dropbuttons[i];
      if (
        openDropdown.classList.contains("show") &&
        !event.target.classList.contains("show")
      ) {
        openDropdown.classList.remove("show");
      }
    }
    event.target.classList.toggle("show");
  }
};
document.addEventListener("DOMContentLoaded", function () {
  var e;
  if ("IntersectionObserver" in window) {
    e = document.querySelectorAll(".lazy");
    var n = new IntersectionObserver(function (e, t) {
      e.forEach(function (e) {
        if (e.isIntersecting) {
          var t = e.target;
          (t.src = t.dataset.src), t.classList.remove("lazy"), n.unobserve(t);
        }
      });
    });
    e.forEach(function (e) {
      n.observe(e);
    });
  } else {
    var t;
    function r() {
      t && clearTimeout(t),
        (t = setTimeout(function () {
          var n = window.pageYOffset;
          e.forEach(function (e) {
            e.offsetTop < window.innerHeight + n &&
              ((e.src = e.dataset.src), e.classList.remove("lazy"));
          }),
            0 == e.length &&
              (document.removeEventListener("scroll", r),
              window.removeEventListener("resize", r),
              window.removeEventListener("orientationChange", r));
        }, 20));
    }
    (e = document.querySelectorAll(".lazy")),
      document.addEventListener("scroll", r),
      window.addEventListener("resize", r),
      window.addEventListener("orientationChange", r);
  }
});
const toggleSwitch = document.querySelector(
  '.theme-switch input[name="theme"]'
);
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);
const blockSwitch = document.querySelector('.theme-switch input[name="block"]');
const currentBlock = localStorage.getItem("block");
if (currentBlock) {
  document.documentElement.setAttribute("data-block", currentBlock);
  if (currentBlock === "adult") {
    blockSwitch.checked = true;
  }
}
function switchblock(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-block", "adult");
    localStorage.setItem("block", "adult");
  } else {
    document.documentElement.setAttribute("data-block", "no");
    localStorage.setItem("block", "no");
  }
}
blockSwitch.addEventListener("change", switchblock, false);
