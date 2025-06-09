import { createRoot } from "react-dom/client";
import { TestComponent } from "./TestComponent";

function throwNull(message: string): never {
  throw new Error(message);
}

// const canvas = (document.getElementById("simple-js-script") ?? throwNull("canvas not found")) as HTMLCanvasElement;
// const ctx = canvas.getContext("2d") ?? throwNull("could not get canvas context");
// ctx.font = "50px serif";
// ctx.fillText("Hello world", 10, 50);

const root = document.getElementById("react-root") ?? throwNull("Could not find react-root!")

createRoot(root).render(
  <TestComponent/>
)

console.warn("finished min-react-interactive")