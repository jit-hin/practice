let secondsBtn = document.getElementsByTagName("button")[0];
let i = 1;
while (i < 10) {
  i++;
  let newClone = secondsBtn.cloneNode();
  newClone.dataset.seconds = i;
  const text = document.createTextNode(`For ${i} seconds!`);
  newClone.appendChild(text);
  secondsBtn.parentNode.append(newClone);
}
Array.from(document.getElementsByTagName("button")).forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let p = document.getElementById("main");
    p.className = "active";
    const num = parseInt(btn.dataset.seconds);
    setTimeout(() => {
      p.className = "";
    }, num * 1000);
  });
});