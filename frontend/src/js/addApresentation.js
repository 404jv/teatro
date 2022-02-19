const participants = document.getElementById('participants');
const participantesDiv = document.querySelector('.participant-wrapper');
const reportsDiv = document.querySelector('.reports-wrapper');


async function main() {
  const users = await fetch('http://localhost:3333/participant')
    .then(response => response.json());

  users.map((user) => {
    const userOption = document.createElement('option');
    userOption.value = user.name;
    userOption.innerText = user.name;

    participants.appendChild(userOption);
  });
}


function addUserHandle() {
  const selectedUser = participants.options[participants.selectedIndex].value;

  if (!selectedUser) return;

  const newParticipant = document.createElement('button');
  newParticipant.type = 'button';
  newParticipant.innerText = selectedUser;
  newParticipant.className = 'participant-added';

  participantesDiv.appendChild(newParticipant)
}

function addReportHandle() {
  const reportDiv = document.createElement('div');
  reportDiv.className = 'report';

  const input = document.createElement('input');
  input.className = 'reportText';
  input.placeholder = 'Nome';

  const textArea = document.createElement('textarea');
  textArea.className = 'reportDescription';
  textArea.cols = 15;
  textArea.rows = 4;
  textArea.placeholder = 'O que essa pessoa falou sobre o evento?'

  reportDiv.appendChild(input);
  reportDiv.appendChild(textArea);
  reportsDiv.appendChild(reportDiv);
}

main();
