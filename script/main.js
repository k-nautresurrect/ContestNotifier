const URL = "https://kontests.net/api/v1/all/";
async function required() {
  const response = await fetch(URL);
  const users = await response.json();
  for (let i = 0; i < users.length; i++) {
    if ((users[i].in_24_hours = "YES")) {
      const name = users[i].name;
      const url = users[i].url;

      const upComing = document.createElement("tr");
      upComing.className = "upcoming";

      var a = document.createElement("a");
      var link = document.createTextNode("visit");
      a.appendChild(link);
      a.title = "visit";
      a.href = url;
      a.className = "links text-dark";
      a.innerHTML = name;

      upComing.innerHTML = `<td><a href="${url}" title="visit" class="links text-dark">${name}</a></td>`;

      const list1 = document.getElementById("div_id");
      list1.appendChild(upComing);
    }
  }
}

required();
