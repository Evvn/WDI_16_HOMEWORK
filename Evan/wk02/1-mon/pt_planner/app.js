console.log('coffee on the train...\n\n');

// Alamein line:
// Flinders - Richmond - East Richmond - Burnley - Hawthorn - Glenferrie
//
// Glen Waverly Line:
// Flagstaff - Melbourne Central - Parliament - Richmond - Kooyong - Tooronga
//
// Sandringham Line:
// Southern Cross - Richmond - South Yarra - Prahran - Windsor


var origin = 'Southern Cross';
var destination = 'Glenferrie';
var lineLabel = 'Current Line';
var totalStops = -1;
var directions = [];

var alameinLine = [
  'Flinders',
  'Richmond',
  'East Richmond',
  'Burnley',
  'Hawthorn',
  'Glenferrie'
];

var glenWaverlyLine = [
  'Flagstaff',
  'Melbourne Central',
  'Parliament',
  'Richmond',
  'Kooyong',
  'Tooronga'
];

var sandringhamLine = [
  'Southern Cross',
  'Richmond',
  'South Yarra',
  'Prahran',
  'Windsor'
];

// notes ------------------------------------------------------

// lol pls make a function that eliminates all the repetition
// Question - to prevent needing to check multiple other arrays,
// can all the lines be stored as nested arrays in a 'trainLines' array?
// so that you can find destination from other remaining arrays?
// function parameters needed
// current line, origin, destination

// USING Object.keys and forEach to loop through arrays by key name
// {"alamein": [1,2,3], "something": [4,5,6]}
// {alamein: Array(3), something: Array(3)}
// var trainLines = {"alamein": [1,2,3], "something": [4,5,6]}
// undefined
// trainLines.keys()
// (anonymous) @ VM95:1
// Object.keys(trainLines)
// (2) ["alamein", "something"]
// Object.keys(trainLines).forEach(function(name) {
//   console.log(trainLines[name])
// })
// VM115:2 (3) [1, 2, 3]
// VM115:2 (3) [4, 5, 6]

// -----------------------------------------------------------

function noTransfers(currentLine, origin, destination) {
  directions = [];
  // check travel direction
  if (currentLine.indexOf(origin) < currentLine.indexOf(destination)){
    for (var i = currentLine.indexOf(origin); i <= currentLine.indexOf(destination); i++) {
      directions.push(currentLine[i]);
      totalStops++;
    }
  } else {
    for (var i = currentLine.indexOf(origin); i >= currentLine.indexOf(destination); i--) {
      directions.push(currentLine[i]);
      totalStops++;
    }
  }
  console.log(directions.join(' ---> '));
  console.log('Total stops: ' + totalStops);
}


function toRichmond(currentLine, origin, destination) {
  totalStops--;
  // check travel direction
  if (currentLine.indexOf(origin) < currentLine.indexOf(destination)){
    for (var i = currentLine.indexOf(origin); i <= currentLine.indexOf(destination); i++) {
      directions.push(currentLine[i]);
      totalStops++;
    }
  } else {
    for (var i = currentLine.indexOf(origin); i >= currentLine.indexOf(destination); i--) {
      directions.push(currentLine[i]);
      totalStops++;
    }
  }
}

//IF DESTINATION IS ORIGIN
if (origin === destination) {
  console.log('You\'re already here!');
}

//IF ORIGIN IS RICHMOND
else if (origin === 'Richmond') {
  console.log('Origin: ' + origin + '\nDestination: ' + destination + '\n\n');
  if (alameinLine.indexOf(destination) != -1) {
    lineLabel = 'Alamein Line';
    console.log(lineLabel);
    noTransfers(alameinLine, 'Richmond', destination);
  } else if (glenWaverlyLine.indexOf(destination) != -1) {
    lineLabel = 'Glen Waverly Line';
    console.log(lineLabel);
    noTransfers(glenWaverlyLine, 'Richmond', destination);
  } else {
    lineLabel = 'Sandringham Line';
    console.log(lineLabel);
    noTransfers(sandringhamLine, 'Richmond', destination);
  }
}

// IF ORIGIN IS ON ALAMEIN LINE
else if (alameinLine.indexOf(origin) != -1) {
  console.log('Origin: ' + origin + '\nDestination: ' + destination + '\n\n');
  lineLabel = 'Alamein Line';
  console.log(lineLabel);
  // check if destination is in current line array
  if (alameinLine.indexOf(destination) != -1) {
    noTransfers(alameinLine, origin, destination);
  }
  // if destination is not on current line, shows stops to richmond
  else {
    toRichmond(alameinLine, origin, 'Richmond');
    console.log(directions.join(' ---> '));
    // checks other arrays for matching destination
    if (alameinLine.indexOf(destination) != -1) {
      lineLabel = 'Glen Waverly Line';
      console.log('Transfer to ' + lineLabel);
      noTransfers(glenWaverlyLine, 'Richmond', destination);
    } else {
      lineLabel = 'Sandringham Line';
      console.log('Transfer to ' + lineLabel);
      noTransfers(sandringhamLine, 'Richmond', destination);
    }
  }
}
// END ALAMEIN LINE CHECKS ---------------------------------

// IF ORIGIN IS ON GW LINE
else if (glenWaverlyLine.indexOf(origin) != -1) {
  console.log('Origin: ' + origin + '\nDestination: ' + destination + '\n\n');
  lineLabel = 'Glen Waverly Line';
  console.log(lineLabel);
  // check if destination is in current line array
  if (glenWaverlyLine.indexOf(destination) != -1) {
    noTransfers(glenWaverlyLine, origin, destination);
  }
  // if destination is not on current line, shows stops to richmond
  else {
    toRichmond(glenWaverlyLine, origin, 'Richmond');
    console.log(directions.join(' ---> '));
    // checks other arrays for matching destination
    if (alameinLine.indexOf(destination) != -1) {
      lineLabel = 'Alamein Line';
      console.log('Transfer to Alamein Line');
      noTransfers(alameinLine, 'Richmond', destination);
    } else {
      lineLabel = 'Sandringham Line';
      console.log('Transfer to ' + lineLabel);
      noTransfers(sandringhamLine, 'Richmond', destination);
    }
  }
}
// END GLEN WAVERLY LINE CHECKS --------------------------------------

// IF ORIGIN IS ON SANDRINGHAM LINE
else if (sandringhamLine.indexOf(origin) != -1) {
  console.log('Origin: ' + origin + '\nDestination: ' + destination + '\n\n');
  lineLabel = 'Sandringham Line';
  console.log(lineLabel);
  // check if destination is in current line array
  if (sandringhamLine.indexOf(destination) != -1) {
    noTransfers(sandringhamLine, origin, destination);
  }
  // if destination is not on current line, shows stops to richmond
  else {
    toRichmond(sandringhamLine, origin, 'Richmond');
    console.log(directions.join(' ---> '));
    // checks other arrays for matching destination
    if (alameinLine.indexOf(destination) != -1) {
      lineLabel = 'Alamein Line';
      console.log('Transfer to Alamein Line');
      noTransfers(alameinLine, 'Richmond', destination);
    } else {
      lineLabel = 'Glen Waverly Line';
      console.log('Transfer to ' + lineLabel);
      noTransfers(glenWaverlyLine, 'Richmond', destination);
    }
  }
}
// END SANDRINGHAM LINE CHECKS --------------------------------------
else {
  console.log('! no origin !');
}
