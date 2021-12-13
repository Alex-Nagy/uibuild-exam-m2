const HTML = () => {
  const root = document.getElementById("root");
  root.insertAdjacentHTML(
    "beforeend",
    ` 
    <h1>Visszajelzés</h1>
    <input type="text" class="mont" placeholder="Tárgy" />
    <textarea class="mont area" placeholder="Megjegyzés"></textarea>
    <div class="elfogad">
    <input type="checkbox" class="cb"></input>
    <label for="cb">Elolvastam és elfogadom az <u>Adatkezelési Tájékoztatót.</u></label>
    </div>
    <button>Mentés</button>
    `
  );
};

function loadEvent() {
  console.log("the page has loaded");
  HTML();
}

window.addEventListener("load", loadEvent);
