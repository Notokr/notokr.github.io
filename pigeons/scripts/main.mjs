import pigeons from "../pigeons.json" with { type: "json" };

const baseURL = "https://notokr.github.io/pigeons"

var bentoContainer = document.getElementById("pigeons-bento");

for (const pigeon of pigeons.pigeons) {
    console.log(pigeon.name)
    let pigeonImageTag = document.createElement("img");
    pigeonImageTag.src = `${baseURL}/images/svg/${pigeon.name}.svg`
    bentoContainer.appendChild(pigeonImageTag)
}