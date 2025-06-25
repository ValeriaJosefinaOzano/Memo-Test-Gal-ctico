const elementos = ["🤖", "👽", "🛸", "👾", "🌑", "🌠"];

let cartas = [];

let primeracarta = null;

let segundacarta = null;

let bloqueado = false;

let aciertos = 0;

const tablero = document.getElementById("cartas");

const mensaje = document.getElementById("win-message");

const botonReiniciar = document.getElementById("restart");

const mezclar = Array => Array.sort(() => Math.random () -0.5); 

const crearTablero = () => {
    tablero.innerHTML = "";
    mensaje.textContent= "";
    aciertos = 0;
    primeracarta = null;
    segundacarta = null;
    bloqueado = false;

    cartas = [...elementos, ...elementos];

cartas = mezclar(cartas);

cartas.foreach((icono) => {
    const carta = document.createElement("div");
    carta.classList.add ("cartas");
    carta.dataset.icono = icono;
    carta.textContent = "";

    carta.addEventListener("click", () => {
        if (bloqueado) return; 
        if (carta === primeracarta) return;
        if (carta.textContent !== "") return;
        carta.textContent = icono; 

        if (!primeracarta) {
            
            primeracarta;
        } else {

            segundacarta = carta;
            bloqueado = true
        }
    })


})

} 