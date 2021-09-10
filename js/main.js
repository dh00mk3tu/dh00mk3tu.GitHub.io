console.log("Script Loaded - Callback");



const b = baffle(".title-sub");
b.set({
  characters: '█<▓ ░█▒█▒ ░▒/░█ ▓▒▓ █/██▒ █▓█/ █▒█ ░█▒█ ▓░█▒',
  speed: 120
});

var i = 1;
let changeTitle = () => {
    console.log("Changing Title");
    let titles = ["dhmk2", "fetching", "dh00mk3tu", "anirudh rath"];
    if (i == titles.length) {
        i = 0;
    }
    b.text(currentText => titles[i]).reveal(1000);
    i++;
}

setInterval(changeTitle, 2100);
