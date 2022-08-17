const dev = document.getElementById("dev");

function opendis()
{
    window.open("https://www.discord.com", "_blank");
}

dev.onclick = opendis;

const aaa = document.querySelector('.myw');

aaa.addEventListener('click', (e) => {
    window.open("https://en.wikipedia.org/wiki/CSS", "_blank");
    e.preventDefault();
    e.stopPropagation();
  });