function app() {
  const color = ["red", "green", "blue", "black", "yellow", "pink", "violet"];

  function randomColor(arrayColor) {
    return Math.round(Math.random() * arrayColor.length);
  }

  function changeBackgroundColor() {
    const bodyEle = document.querySelector("body");
    const buttonEle = document.querySelector(".btn");

    bodyEle.style.backgroundColor = "violet";

    buttonEle.addEventListener("click", (event) => {
      event.preventDefault;
      const colorIndex = randomColor(color);
      bodyEle.style.backgroundColor = color[colorIndex];
    });
  }

  return {
    changeBackgroundColor,
  };
}

const createApp = app();

createApp.changeBackgroundColor();
