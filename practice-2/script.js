const person = {
  src:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtFPba2-cBeIyhZ3Sxlkd2fGZegsdcqEEoww&usqp=CAU",
  name: "John Doe",
  email: "foobar@example.com"
};
let i = 0;
while (i < 100) {
  i++;
  const profile = document.createElement("div");
  const img = document.createElement("img");
  img.src = person.src;
  const hr = document.createElement("hr");
  const name = document.createTextNode(`Name: ${person.name} ${i}`);
  const br = document.createElement("br");
  const email = document.createTextNode("Email: " + person.email);
  const p = document.createElement("p");
  p.append(name, br, email);
  profile.append(img, hr, p);
  document.body.appendChild(profile);
}
function identifier(reg, className) {
  const regex = new RegExp(reg, "gi");
  const p2 = document.querySelectorAll("p");
  p2.forEach((ps) => {
    ps.innerHTML = ps.innerHTML.replace(
      regex,
      (match) => `<span class="${className}">${match}</span>`
    );
  });
}
identifier("[^<>]+?:", "identifier");