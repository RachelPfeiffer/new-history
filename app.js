fetch('history2.json').then(function (response) {
return response.json();
}).then(fillMainPage);

// get the current date and time. get the date and time one week ago.
// only display entries from 1 week ago and up.

let now = new Date();
let oneWeekAgo = (now - 605800000);

function displayTime(x) {
  const visitStamp = new Date(x);
  //get the Date
  var day = visitStamp.getDate();
  //get the month
  var month = visitStamp.getMonth()+1;
  //get the year
  var year = visitStamp.getYear()-100;
// Hours part from the timestamp
var hours = visitStamp.getHours();
// Minutes part from the timestamp
var minutes = "0" + visitStamp.getMinutes();
// Will display time in 10:30:23 format
var formattedTime = month + '/' + day + '/'+ year + ' ' + hours + ':' + minutes.substr(-2);
return formattedTime;
}

function fillMainPage(stuff) {
  const listSection = document.createElement('table');
  const body = document.querySelector('body');
  body.appendChild(listSection);
  for (entry of stuff) {
  const timeDiff = oneWeekAgo - entry.lastVisitTime;
  if (timeDiff < 0) {
    const newRow = document.createElement('tr');
    const timeBox = document.createElement('td');
    timeBox.innerText = displayTime(entry.lastVisitTime);
    timeBox.classList = "time-box";

    const rowTitle = document.createElement('td');
    rowTitle.innerText = entry.title;
    rowTitle.className = "title-box";
    newRow.appendChild(timeBox);
    newRow.appendChild(rowTitle);
    listSection.appendChild(newRow);
  }
}
}
function emailCurrentPage() {
  window.open("mailto:test@example.com?&subject=Here's my e-mail history for the week!"+document.title+"&body="+escape(window.location.href));
  alert("Thank you!");

}
// onclick="javascript:window.location='mailto:?subject=Interesting information&body=I thought you might find this information interesting: ' + window.location;"
