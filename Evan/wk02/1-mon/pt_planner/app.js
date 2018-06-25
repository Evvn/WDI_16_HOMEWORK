console.log('coffee on the train...');

// Alamein line:
// Flinders - Richmond - East Richmond - Burnley - Hawthorn - Glenferrie
//
// Glen Waverly Line:
// Flagstaff - Melbourne Central - Parliament - Richmond - Kooyong - Tooronga
//
// Sandringham Line:
// Southern Cross - Richmond - South Yarra - Prahran - Windsor


var origin = 'Flagstaff';
var destination = 'Windsor';
var lineLabel = 'Current Line';
// Set starting value of total stops to -1 to prevent counting origin as a stop
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

// HOW TO CHECK IF THE DESTINATION REQUIRES 'BACKWARDS' TRAVEL, (for >= i--) ?
// if destination index is < origin index
// reverse for loop to create 'backwards' directions

// -----------------------------------------------------------
function noTransfers(currentLine, origin, destination) {
  directions = [];
  for (var i = currentLine.indexOf(origin); i <= currentLine.indexOf(destination); i++) {
    directions.push(currentLine[i]);
    totalStops++;
  }
  console.log(directions.join(' ---> '));
  console.log('Total stops: ' + totalStops);
}


function toRichmond(currentLine, origin, destination) {
  totalStops--;
  for (var i = currentLine.indexOf(origin); i <= currentLine.indexOf(destination); i++) {
    directions.push(currentLine[i]);
    totalStops++;
  }
}

// FOR STARTING AT RICHMOND ...
// check what line destination is in and create single directions list

//IF DESTINATION IS ORIGIN
if (origin === destination) {
  console.log('You\'re already here!');
}

//IF ORIGIN IS RICHMOND
else if (origin === 'Richmond') {
  console.log('Origin: ' + origin + '\nDestination: ' + destination + '\n\n');
  if (alameinLine.indexOf(destination) != -1) {
    //display stops between destination and origin using indexof
    lineLabel = 'Alamein Line';
    console.log(lineLabel);
    fromRichmond(alameinLine, origin, destination);
  } else if (glenWaverlyLine.indexOf(destination) != -1) {
    //display stops between destination and origin using indexof
    lineLabel = 'Glen Waverly Line';
    console.log(lineLabel);
    noTransfers(glenWaverlyLine, 'Richmond', destination);
  } else {
    //display stops between destination and origin using indexof
    lineLabel = 'Sandringham Line';
    console.log(lineLabel);
    noTransfers(sandringhamLine, 'Richmond', destination);
  }
}

// IF ORIGIN IS ON ALAMEIN LINE ---------------------------
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

// IF ORIGIN IS ON GW LINE -- if origin is on current line
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
// END FUNCTION ?? --------------------------------------

// IF ORIGIN IS ON SANDRINGHAM LINE -- if origin is on current line ---
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
      fromRichmond(alameinLine, origin, destination);
    } else {
      lineLabel = 'Glen Waverly Line';
      console.log('Transfer to ' + lineLabel);
      fromRichmond(glenWaverlyLine, origin, destination);
    }
  }
}
// END SANDRINGHAM LINE CHECKS -----------
else {
  console.log('! no origin !');
}
