// import pigeons from "../pigeons.json" with { type: "json" };

// function randInt(min, max) {
//     console.log(min, max);

//     return min + Math.floor(Math.random() * (max - min + 1));
// }

// function NToXY(n, width) {
//     return [n % width, Math.floor(n / width)];
// }
// function XYToN(x, y, width) {
//     return width * y + x;
// }

// function bento(bentoWidth, bentoHeight, count) {
//     let bentoGrid = [];
//     let row = [];
//     for (let x = 0; x < bentoWidth; x++) {
//         row.push(-1);
//     }
//     for (let y = 0; y < bentoHeight; y++) {
//         bentoGrid.push(Array.from(row));
//     }
//     console.log(bentoGrid);

//     let cellsToCollapse = [XYToN(Math.floor(bentoWidth / 2), Math.floor(bentoHeight / 2), bentoWidth)];
//     let collapsedCells = [];
//     let maxAssignedNumber = 0;
//     // console.log(cellsToCollapse);
//     while (cellsToCollapse.length > 0) {
//         let cellPos = cellsToCollapse.pop();
//         if (collapsedCells.includes(cellPos)) { continue; }
//         let [cellX, cellY] = NToXY(cellPos, bentoWidth);

//         if (Math.random() < 0.1) {
//             console.log("a");

//             let neighbors = [
//                 [cellX - 1, cellY - 1],
//                 [cellX, cellY - 1],
//                 [cellX + 1, cellY - 1],
//                 [cellX - 1, cellY],
//                 [cellX, cellY],
//                 [cellX + 1, cellY],
//                 [cellX - 1, cellY + 1],
//                 [cellX, cellY + 1],
//                 [cellX + 1, cellY + 1],
//             ]
//             let availlableNeighbors = [];
//             for (const neighbor in neighbors) {
//                 if (!Object.hasOwn(neighbors, neighbor)) continue;
//                 const [neighborX, neighborY] = neighbors[neighbor];
//                 if ((neighborX < 0 | neighborX >= bentoWidth) | (neighborY < 0 | neighborY >= bentoHeight)) { continue; }
//                 const neighborPos = XYToN(neighborX, neighborY, bentoWidth);
//                 console.log("neighbor pos:", neighborPos); console.log("collapsed cells:", collapsedCells);
                
//                 if (!(neighborPos in collapsedCells)) {
//                     availlableNeighbors.push(parseInt(neighbor));
//                 }
//             }

//             let bigCellPlacements = [
//                 [0, 1, 3],
//                 [1, 2, 5],
//                 [5, 7, 8],
//                 [3, 6, 7],
//             ]
//             for (const bigCellPlacement in bigCellPlacements) {
//                 if (!Object.hasOwn(bigCellPlacements, bigCellPlacement)) continue;
//                 const bigCellPlacementRelativePosList = bigCellPlacements[bigCellPlacement];
//                     console.log("bento grid: ", bentoGrid);
//                     console.log("availlable neighbors: ", availlableNeighbors);
//                     console.log("big cells placement: ", bigCellPlacementRelativePosList);
//                     console.log(cellX, cellY);
//                 if (
//                     availlableNeighbors.includes(bigCellPlacementRelativePosList[0]) &
//                     availlableNeighbors.includes(bigCellPlacementRelativePosList[1]) &
//                     availlableNeighbors.includes(bigCellPlacementRelativePosList[2])
//                 ) {
//                     console.log("~>", bentoGrid[cellY][cellX]);
//                     bentoGrid[cellY][cellX] = maxAssignedNumber+40;
//                     collapsedCells.push(XYToN(cellX, cellY, bentoWidth));

//                     let [neighbor0X, neighbor0Y] = neighbors[bigCellPlacementRelativePosList[0]]
//                     console.log("~>", bentoGrid[neighbor0Y][neighbor0X]);
//                     bentoGrid[neighbor0Y][neighbor0X] = maxAssignedNumber+40;
//                     collapsedCells.push(XYToN(neighbor0X, neighbor0Y, bentoWidth));

//                     let [neighbor1X, neighbor1Y] = neighbors[bigCellPlacementRelativePosList[1]]
//                     console.log("~>", bentoGrid[neighbor1Y][neighbor1X]);
//                     bentoGrid[neighbor1Y][neighbor1X] = maxAssignedNumber+40;
//                     collapsedCells.push(XYToN(neighbor1X, neighbor1Y, bentoWidth));

//                     let [neighbor2X, neighbor2Y] = neighbors[bigCellPlacementRelativePosList[2]]
//                     console.log("~>", bentoGrid[neighbor2Y][neighbor2X]);
//                     bentoGrid[neighbor2Y][neighbor2X] = maxAssignedNumber+40;
//                     collapsedCells.push(XYToN(neighbor2X, neighbor2Y, bentoWidth));
//                     break;
//                 }
//             }
//         } else {
//             console.log("->", bentoGrid[cellY][cellX]);

//             bentoGrid[cellY][cellX] = maxAssignedNumber;
//             collapsedCells.push(XYToN(cellX, cellY, bentoWidth));
//         }


//         let newCells = [
//             [cellX + 1, cellY],
//             [cellX, cellY + 1],
//             [cellX - 1, cellY],
//             [cellX, cellY - 1],
//         ]
//         for (const newCell in newCells) {
//             let newCellXY = newCells[newCell];
//             // console.log(newCellXY);
//             let [newCellX, newCellY] = newCellXY;
//             if ((newCellX < 0 | newCellX >= bentoWidth) | (newCellY < 0 | newCellY >= bentoHeight)) { continue; }
//             let newCellPos = XYToN(newCellX, newCellY, bentoWidth);

//             if (!collapsedCells.includes(newCellPos)) {
//                 cellsToCollapse.unshift(newCellPos);
//             }
//         }
//         console.log(cellPos, cellX, cellY)
//         maxAssignedNumber += 1;
//     }
//     console.log(bentoGrid);
//     let flatBentoGrid = [];
//     for (const rowI in bentoGrid) {
//         if (!Object.hasOwn(bentoGrid, rowI)) continue;

//         const row = bentoGrid[rowI];
//         flatBentoGrid = flatBentoGrid.concat(row);
//     }
//     flatBentoGrid.sort();
//     let shiftList = {};

//     console.log(flatBentoGrid);

//     for (let i = 0; i <= maxAssignedNumber; i++) {
//         if (flatBentoGrid.includes(i)) {
//             console.log(`Number ${i} present`);
//         } else {
//             console.log(`Number ${i} not present`);
//         }
//     }

//     //display
//     for (let rowI = 0; rowI < bentoGrid.length; rowI++) {
//         const row = bentoGrid[rowI];
//         for (let cellI = 0; cellI < row.length; cellI++) {
//             const cell = row[cellI];
//             let newCell = document.createElement("div");
//             newCell.style.width = "20px";
//             newCell.style.height = "20px";
//             newCell.style.backgroundColor = cell==-1?"#000000":`hsl(${cell} 100% 50%)`;
//             document.getElementById("bento").appendChild(newCell);
//         }
//     }
//     document.getElementById("bento").style.width = `${bentoWidth*20}px`;
// }

// bento(12, 5, 3)