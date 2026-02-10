import pigeons from "../pigeons.json" with { type: "json" };
import BentoGrid from "https://cdn.jsdelivr.net/npm/@bentogrid/core@1.1.1/BentoGrid.min.js";


const baseURL = "/pigeons"

var bentoContainer = document.getElementById("pigeons-bento");

for (const pigeon of pigeons.pigeons) {
    console.log(pigeon.name)
    // Creating the tag
    let pigeonContainerTag = document.createElement("div");
    let pigeonImageTag = document.createElement("img");
    let pigeonNameTag = document.createElement("p");

    pigeonContainerTag.classList.add("pigeon-container");
    pigeonImageTag.classList.add("pigeon-tile");
    pigeonNameTag.classList.add("pigeon-name");

    pigeonNameTag.innerHTML = `<span class="bolded">« ${pigeon.name} »</span><br>${pigeon.date? `Appeared the ${pigeon.date}`:(pigeon.planned?`Planned for ${pigeon.planned}`:"Not planned yet.")}`;

    if (pigeon.types.includes("s")) {
        pigeonImageTag.src = `${baseURL}/images/svg/${pigeon.name}.svg`
    } else if (pigeon.types.includes("p")) {
        pigeonImageTag.src = `${baseURL}/images/png/${pigeon.name}.png`
    } else if (pigeon.types.includes("c")) {
        pigeonImageTag.src = `${baseURL}/images/croquis/${pigeon.name}.png`
    } else {
        pigeonImageTag.src = `${baseURL}/images/svg/no_pigeon.svg`
        let warning = document.createElement("span");
        warning.classList.add("ACHTUNG");
        warning.innerText = "No image availlable";
        pigeonNameTag.appendChild(document.createElement("br"));
        pigeonNameTag.appendChild(warning);
    }

    if (Math.random() < 0.2) {
        pigeonContainerTag.setAttribute("data-bento", "2x2")
    } else {
        pigeonContainerTag.setAttribute("data-bento", "1x1")
    }
    pigeonImageTag.style.width = "100%";

    pigeonContainerTag.appendChild(pigeonImageTag);
    pigeonContainerTag.appendChild(pigeonNameTag);
    bentoContainer.appendChild(pigeonContainerTag);
}

const myBento = new BentoGrid({
    balanceFillers: true,
    columns: 6,
    cellGap: 6,
    target: "#pigeons-bento",
    aspectRatio: 1,
});
