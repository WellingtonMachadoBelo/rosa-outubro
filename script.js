document.addEventListener("DOMContentLoaded", function () {
  const textBox = document.getElementById("textBox");
  const words = {
    boxS: "A campanha Outubro Rosa é um movimento internacional que visa conscientizar sobre o câncer de mama e o câncer do colo do útero, promovendo a prevenção, o diagnóstico precoce e o tratamento.",
    boxC: "A conscientização sobre o câncer de mama é feita por meio de campanhas como o Outubro Rosa, que acontece anualmente desde os anos 1990. O objetivo é divulgar informações sobre a doença, promover o diagnóstico precoce.",
    boxD: "Realizar o autoexame das mamas uma vez por mês, principalmente após a menstruação. O autoexame não diagnostica o câncer, mas ajuda a identificar alterações e a saber o que é normal. Fazer mamografias regularmente.",
  };

  document.querySelectorAll(".box").forEach((word) => {
    word.addEventListener("click", function (event) {
      const wordId = event.target.id;
      if (textBox.style.display === "block") {
        textBox.style.display = "none";
      } else {
        textBox.style.display = "block";
        textBox.textContent = words[wordId];
        const rect = event.target.getBoundingClientRect();
        textBox.style.top = rect.bottom + window.scrollY + "px";
        textBox.style.left =
          rect.left +
          window.scrollX +
          (rect.width / 2 - textBox.offsetWidth / 2) +
          "px";
        textBox.focus();
      }
    });
  });
});
