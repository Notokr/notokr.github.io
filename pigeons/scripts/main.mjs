import pigeons from "../pigeons.json" with { type: "json" };
import BentoGrid from "https://cdn.jsdelivr.net/npm/@bentogrid/core@1.1.1/BentoGrid.min.js";


const baseURL = "https://notokr.github.io/pigeons"

var bentoContainer = document.getElementById("pigeons-bento");

for (const pigeon of pigeons.pigeons) {
    console.log(pigeon.name)
    // Creating the tag
    let pigeonContainerTag = document.createElement("div");
    let pigeonImageTag = document.createElement("img");

    pigeonContainerTag.classList.add("pigeon-container");
    pigeonImageTag.classList.add("pigeon-tile");

    if (pigeon.types.includes("s")) {
        pigeonImageTag.src = `${baseURL}/images/svg/${pigeon.name}.svg`
    } else if (pigeon.types.includes("p")) {
        pigeonImageTag.src = `${baseURL}/images/png/${pigeon.name}.png`
    } else if (pigeon.types.includes("c")) {
        pigeonImageTag.src = `${baseURL}/images/croquis/${pigeon.name}.png`
    }
    if (Math.random() < 0.2) {
        pigeonContainerTag.setAttribute("data-bento", "2x2")
    } else {
        pigeonContainerTag.setAttribute("data-bento", "1x1")
    }
    pigeonImageTag.style.width = "100%";

    pigeonContainerTag.appendChild(pigeonImageTag);
    bentoContainer.appendChild(pigeonContainerTag);
}

const myBento = new BentoGrid({
    balanceFillers: true,
    columns: 6,
    cellGap: 6,
    target: "#pigeons-bento",
    aspectRatio: 1,
});
