// const body = document.getElementsByTagName("body")[0];
//     const btn = document.getElementsByClassName("toggle")[0];
    // const toggleTheme = () => {
    //   if (body.classList.contains("light")) {
    //     body.classList.add("dark");
    //     body.classList.remove("light");
    //     btn.classList.add("fa-sun");
    //     btn.classList.remove("fa-moon");
    //   } else {
    //     body.classList.add("light");
    //     body.classList.remove("dark");
    //     btn.classList.add("fa-moon");
    //     btn.classList.remove("fa-sun");
    //   }
    // };

    setInterval(function () {
      var date = new Date();
      var hours = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();

      hoursNeedle.style.transform = "rotate(" + (hours * 30 + min / 2) + "deg)";
      minutesNeedle.style.transform = "rotate(" + (min * 6 + sec / 10) + "deg)";
      secondsNeedle.style.transform = "rotate(" + sec * 6 + "deg)";
    }, 10);

    // window.addEventListener("load", function () {
    //   var hours = new Date().getHours();
    //   if (hours >= 21 || hours <= 6) {
    //     toggleTheme();
    //   }
    // });