import { WINNER_COMBOS } from "../constants/constants.js"


// revisar si hay un ganador
export const checkWinnerFrom = (boardCheck) => {
    // revisamos todas las combinaciones ganadoras
    // para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardCheck[a] &&
            boardCheck[a] === boardCheck[b] &&
            boardCheck[a] === boardCheck[c]
        ) {
            return boardCheck[a] // x u o
        }
    }
    return null // no hay ganador
}

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}