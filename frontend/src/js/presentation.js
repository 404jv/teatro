const url = 'http://localhost:3333/presentation';
const presentationsContainer = document.getElementById('presentations');

async function main() {
  const presentations = await fetch(url, { method: 'GET' })
    .then(response => response.json());

  console.log(presentations);

  presentations.map((presentation) => {
    const presentationDiv = document.createElement('div');
    presentationDiv.className = 'presentation';

    const sectionDiv = setPresentationHeader(presentation.name);
    presentationDiv.appendChild(sectionDiv);

    const dateContainer = setDateContainer(presentation.hour, presentation.date);
    presentationDiv.appendChild(dateContainer);

    const localizationParagraph = document.createElement('p');
    localizationParagraph.className = 'localization';
    localizationParagraph.innerText = `Evento realizado em ${presentation.localization} com audiência de ${presentation.total_audience} pessoas`;
    presentationDiv.appendChild(localizationParagraph);

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.className = 'description';
    descriptionParagraph.innerText = presentation.description;
    presentationDiv.appendChild(descriptionParagraph);

    const participantsDiv = setParticipantsContainer(presentation.participants);
    presentationDiv.appendChild(participantsDiv);

    const reportsDiv = setReportsContainer(presentation.reports);
    presentationDiv.appendChild(reportsDiv);

    presentationsContainer.appendChild(presentationDiv);
  });
}

function setPresentationHeader(name) {
  const sectionDiv = document.createElement('div');
  sectionDiv.className = 'section';

  const nameContainer = document.createElement('p');
  nameContainer.className = 'sectionText';
  nameContainer.innerText = name;

  const divisionDiv = document.createElement('div');
  divisionDiv.className = 'division';

  const lineDiv1 = document.createElement('div');
  lineDiv1.className = 'line';

  const circleDiv = document.createElement('div');
  circleDiv.className = 'circle';

  const lineDiv2 = document.createElement('div');
  lineDiv2.className = 'line';

  divisionDiv.appendChild(lineDiv1);
  divisionDiv.appendChild(circleDiv);
  divisionDiv.appendChild(lineDiv2);

  sectionDiv.appendChild(nameContainer);
  sectionDiv.appendChild(divisionDiv);

  return sectionDiv;
}

function setDateContainer(hour, date) {
  const dateContainer = document.createElement('div');
  dateContainer.className = 'date-container';

  const hoursDiv = document.createElement('div');
  hoursDiv.className = 'hours';

  const icon = document.createElement('ion-icon');
  icon.name = 'time-outline';
  hoursDiv.appendChild(icon);

  const hourParagraph = document.createElement('p');
  hourParagraph.className = 'time';
  hourParagraph.innerText = hour;
  hoursDiv.appendChild(hourParagraph);

  const dateParagraph = document.createElement('p');
  dateParagraph.className = 'date';
  dateParagraph.innerText = date;

  dateContainer.appendChild(hoursDiv);
  dateContainer.appendChild(dateParagraph);

  return dateContainer;
}

function setParticipantsContainer(participants) {
  const participantsDiv = document.createElement('div');
  participantsDiv.className = 'participants';

  const title = document.createElement('h2');
  title.innerText = 'Participantes';
  participantsDiv.appendChild(title);

  participants.map((participant) => {
    const participantName = document.createElement('p');
    participantName.innerText = `${participant.name} - ${participant.class}`;

    participantsDiv.appendChild(participantName);
  });

  return participantsDiv;
}

function setReportsContainer(reports) {
  const reportsDiv = document.createElement('div');
  reports.className = 'reports';

  const title = document.createElement('h2');
  title.innerText = 'Relatos';
  reportsDiv.appendChild(title);

  reports.map((report) => {
    const reportParagraph = document.createElement('p');
    reportParagraph.innerText = `"${report.description}" - ${report.user_name}`;

    reportsDiv.appendChild(reportParagraph);
  });

  return reportsDiv;
}

main();
