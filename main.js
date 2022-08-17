const dev = document.getElementById("dev");

function opendis()
{
    window.open("https://www.discord.com", "_blank");
}

dev.onclick = opendis;

const aaa = document.querySelector('.myw');
const aaaaa = document.querySelector('.myw a');

aaaaa.onclick = function (e) {
    e.stopPropagation();
}
aaa.onclick = function (e) {
    window.open("https://en.wikipedia.org/wiki/CSS", "_blank");
}