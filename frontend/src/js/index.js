const membersDiv = document.querySelector('.members');

async function main() {
  const users = await fetch('http://localhost:3333/participant')
    .then(response => response.json());

  users.map((user) => {
    const userParagraph = document.createElement('p');
    userParagraph.innerText = `${user.name} - ${user.class}`;

    membersDiv.appendChild(userParagraph);
  });
}

main();
