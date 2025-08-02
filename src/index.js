import "./pages/index.css";
import stepsSRC from "./images/steps.png";

const stepsImage = document.getElementById("image-steps");
stepsImage.src = stepsSRC;

const numbers = [2, 3, 5];

//Arrow function. How will Internet Explorer cope with it?
const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);
