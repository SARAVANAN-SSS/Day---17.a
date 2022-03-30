let now = document.createElement("p");
now.innerHTML = `Current Page : `;
document.body.appendChild(now);

const listArr = ["First", "Previous", 2, 3, 4, 5, 6, 7, 8, 9, 10,"Next","Last"]
const list = document.createElement("ul");
document.body.appendChild(list);

for (let i = 0; i < listArr.length; i++) {
    let li = document.createElement("button");
    li.addEventListener("click", () => 
    {
        now.innerHTML = `Current Page : ${listArr[i]}`;
        li.classList.add("clicked");
    })
    li.innerHTML = listArr[i];
    list.appendChild(li);
}