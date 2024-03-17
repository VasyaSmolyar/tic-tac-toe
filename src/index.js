import './index.css';

const App = {
    $: {
        isFirstPlayer: true,
        button:  document.querySelector('[data-tictac="start"]'),
        board:  document.querySelector('[data-tictac="board"]'),
    },
    init() {
        App.$.button.addEventListener("click", function(e) {
            for(let i = 1; i < 10; i++) {
                document.getElementById("cell-" + i).innerHTML = " ";
            }
        });
        App.$.board.addEventListener("click", function(e) {
            if(e.target && e.target.classList.contains("cell")) {
                console.log("Cell item ", e.target.id.replace("cell-", ""), " was clicked!");
                if(e.target.innerHTML === " ") {
                    if(App.$.isFirstPlayer === true) {
                        e.target.innerHTML = "X";
                    } else {
                        e.target.innerHTML = "O";
                    }
                    App.$.isFirstPlayer = !App.$.isFirstPlayer;
                }
            }
        });
    }
}

App.init();
