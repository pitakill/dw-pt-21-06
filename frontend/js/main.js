const forms = document.getElementsByTagName("form");

forms[0].addEventListener("submit", (event) => {
  event.preventDefault();

  // console.log(forms[0].elements);

  // const name = document.getElementById("name").value;
  // const email = document.getElementById("email").value;
  // const password = document.getElementById("password").value;
  // const bio = document.getElementById("bio").value;

  // console.log({ name, email, password, bio });
  const body = {};
  ["name", "email", "password", "bio"].forEach((e) => {
    body[e] = document.getElementById(e).value;
  });

  fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((r) => r.json())
    .then(console.log)
    .catch(console.error);
});
