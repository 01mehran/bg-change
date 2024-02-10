const colors = [
  {
    name: "DEFULT",
    color: "#000",
    textColor: "yellow",
  },
  {
    name: "aqua",
    color: "aqua",
    textColor: "brown",
  },
  {
    name: "red",
    color: "#FF0000",
    textColor: "#fff",
  },
  {
    name: "green",
    color: "green",
    textColor: "white",
  },
  {
    name: "purple",
    color: "indigo",
    textColor: "yellow",
  },
  {
    name: "light-pink",
    color: "#B0171F",
    textColor: "#FFFF00",
  },
  {
    name: "lightgreen",
    color: "lightgreen",
    textColor: "#B0171F",
  },
  {
    name: "blue",
    color: "blue",
    textColor: "orange",
  },
  {
    name: "brown",
    color: "brown",
    textColor: "aqua",
  },
];

const colorsGroup = document.getElementById("btn-wrapper");
const titleEL = document.getElementById("heading");

for (let i = 0; i < colors.length; i += 1) {
  const btn = document.createElement("button");
  btn.innerText = colors[i].name;
  colorsGroup.appendChild(btn);

  btn.addEventListener("click", () => {
    document.body.style.background = colors[i].color;
    titleEL.style.color = colors[i].textColor;
  });
}
document.body.style.background = "black";
titleEL.style.color = "yellow";
