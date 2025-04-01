window.initCounterAnimation = function () {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let speed = target / 100; // Điều chỉnh tốc độ đếm

    function updateCount() {
      count += speed;
      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    }
    updateCount();
  });
};

//Scroll
document.getElementById("scrollBtn").addEventListener("click", function () {
  document
    .getElementById("next-section")
    .scrollIntoView({ behavior: "smooth" });
});




