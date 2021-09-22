let secondsBtn = document.getElementsByTagName("button")[0];
let i = 1;
while (i < 10) {
  i++;
  let newClone = secondsBtn.cloneNode();
  newClone.dataset.seconds = i;
  const text = document.createTextNode(`For ${i} seconds!`);
  newClone.appendChild(text);
  const br = document.createElement("br");
  secondsBtn.parentNode.append(br, newClone);
}
Array.from(document.getElementsByTagName("button")).forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let p = document.getElementsByTagName("p")[0];
    p.className = "hover";
    const num = parseInt(btn.dataset.seconds);
    setTimeout(() => {
      p.className = "";
    }, num * 1000);
  });
});