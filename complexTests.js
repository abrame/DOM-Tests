// 10x10 table
var template = document.createElement("table");
template.id = "testTable";
template.innerHTML = "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";

var tests = {};

var rows = 10;
var cols = 10;
var temp, row, col;
var a, b, c, d; // temporary vars

$(document).ready(function () {

  $("#test1").click(function () {

    var result = runTest(getNumTests(), tests.one);
    if (result != null) {
      $("#results").html("Total time for test 1: " + result.totalTime + "ms<br />Average time: " + result.avgTime + "ms");
    }
    else {
      $("#results").html("Test failed");
    }
  });

  $("#test2").click(function () {

    var result = runTest(getNumTests(), tests.two);
    var result2 = runTest(getNumTests(), tests.two_alt);
    if (result != null && result2 != null) {
      $("#results").html("Total time for test 2: " + result.totalTime + "ms<br />Average time: " + result.avgTime + "ms<br />" +
                         "Total time for test 2 (alt version): " + result2.totalTime + "ms<br />Average time: " + result2.avgTime + "ms");
    }
    else {
      $("#results").html("Test failed");
    }
  });

  $("#test3").click(function () {

    var result = runTest(getNumTests(), tests.three);
    if (result != null) {
      $("#results").html("Total time for test 3: " + result.totalTime + "ms<br />Average time: " + result.avgTime + "ms");
    }
    else {
      $("#results").html("Test failed");
    }
  });

  $("#test4").click(function () {
    
    var result = runTest(getNumTests(), tests.four);
    if (result != null) {
      $("#results").html("Total time for test 4: " + result.totalTime + "ms<br />Average time: " + result.avgTime + "ms");
    }
    else {
      $("#results").html("Test failed");
    }
  });

  $("#test5").click(function () {

    var result = runTest(getNumTests(), tests.five);
    if (result != null) {
      $("#results").html("Total time for test 5: " + result.totalTime + "ms<br />Average time: " + result.avgTime + "ms");
    }
    else {
      $("#results").html("Test failed");
    }
  });

  $("#allTests").click(function () {
    var reps = getNumTests();
    var results = $("#results");

    var data;
    var html = "";

    // run tests many many times
    html += "<h3>" + reps + " Iterations</h3><hr />";
    // test1
    data = runTest(reps, tests.one);
    html += "<p>Test 1:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test2
    data = runTest(reps, tests.two);
    html += "<p>Test 2:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test2 alt
    data = runTest(reps, tests.two_alt);
    html += "<p>Test 2 Alt:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test3
    data = runTest(reps, tests.three);
    html += "<p>Test 3:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test 4
    data = runTest(reps, tests.four);
    html += "<p>Test 4:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test 5
    data = runTest(reps, tests.five);
    html += "<p>Test 5:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p><br />";

    results.html(html);
  });
});

function runTest(reps, test) {
  if (!reps) return null;
  var start, end;

  start = new Date();
  // run tests
  for (var i = 0; i < reps; i++) {
    test();
  }
  end = new Date();

  // get total time
  var total = end.getTime() - start.getTime();

  // get average time
  var avg = 1.0 * total / reps;

  // return results
  return {
    totalTime: total,
    avgTime: avg
  };
}

// template string of html, parse each time, manipulate, insert into doc
tests.one = function () {
  var newHTML = "<table id=\"testTable\">";
  
  // replace all td's
  for (var i = 0; i < rows; i++) {
    newHTML += "<tr>";

    for (var j = 0; j < cols; j++) {
      temp = getInt();
      newHTML += "<td>" + "<img src=\"thumbs/" + Math.floor(Math.random() * 15 + 1) + ".png\" /><br /><a href=\"http://www.google.com/search?q=" + temp + "\">" + temp + "</a></td>";
    }

    newHTML += "</tr>";
  }
  // insert new table into DOM
  $("#test").html(newHTML);
}

tests.two = function() {
  // clone node
  var table = template.cloneNode(true);
  // go to the rows
  var tbody = table.firstChild;

  // iterate through rows/cols and assign random numbers
  for (var i = 0; i < rows; i++) {
    row = tbody.children[i];
    for (var j = 0; j < cols; j++) {
      col = row.children[j];
      col.appendChild(getImageNode("thumbs/" + Math.floor(Math.random() * 15 + 1) + ".png"));
      col.appendChild(getLinkNode(getInt()));
    }
  }
  temp = document.getElementById("testTable");
  temp.parentNode.replaceChild(table, temp);
}

tests.two_alt = function () {
  // clone node
  var table = template.cloneNode(true);
  // go to the rows
  var tbody = table.firstChild;

  // iterate through rows/cols and assign random numbers
  for (var i = 0; i < rows; i++) {
    row = tbody.children[i];
    for (var j = 0; j < cols; j++) {
      col = row.children[j];
      temp = getInt();
      col.innerHTML = "<img src=\"thumbs/" + Math.floor(Math.random() * 15 + 1) + ".png\" /><br /><a href=\"http://www.google.com/search?q=" + temp + "\">" + temp + "</a>";
    }
  }
  temp = document.getElementById("testTable");
  temp.parentNode.replaceChild(table, temp);
}

tests.three = function () {
  // preexisting doc, go through each node, clone existing node, modify, replace
  d = document.getElementById("testTable");
  a = d.firstElementChild;

  // iterate through elements
  for (var i = 0; i < rows; i++) {
    row = a.children[i];
    for (var j = 0; j < cols; j++) {
      col = row.children[j];
      // clone existing node
      temp = col.cloneNode(true);
      // modify node
      temp.replaceChild(getImageNode("thumbs/" + Math.floor(Math.random() * 15 + 1) + ".png"), temp.children[0]);
      temp.replaceChild(getLinkNode(getInt()), temp.children[2]);
      // replace
      row.replaceChild(temp, col);
    }
  }
}

tests.four = function () {
  // preexisting doc, go through each node and modify directly
  d = document.getElementById("testTable");
  a = d.firstElementChild;

  // iterate through elements
  for (var i = 0; i < 10; i++) {
    row = a.children[i];
    for (var j = 0; j < 10; j++) {
      col = row.children[j];
      // modify node
      col.replaceChild(getImageNode("thumbs/" + Math.floor(Math.random() * 15 + 1) + ".png"), col.children[0]);
      col.replaceChild(getLinkNode(getInt()), col.children[2]);
    }
  }
}

tests.five = function () {
  // clone parent, go through all nodes, modify, replace parent
  d = document.getElementById("testTable");
  temp = d.cloneNode(true);
  a = temp.firstElementChild;

  // iterate through elements
  for (var i = 0; i < 10; i++) {
    row = a.children[i];
    for (var j = 0; j < 10; j++) {
      col = row.children[j];
      // modify node
      col.replaceChild(getImageNode("thumbs/" + Math.floor(Math.random() * 15 + 1) + ".png"), col.children[0]);
      col.replaceChild(getLinkNode(getInt()), col.children[2]);
    }
  }
  // replace parent
  d.parentNode.replaceChild(temp, d);
}

function getImageNode(path) {
  var img = document.createElement("img");
  img.src = path;
  return img;
}

function getParagraphNode(text) {
  var p = document.createElement("p");
  p.appendChild(document.createTextNode(text));
  return p;
}

function getLinkNode(link) {
  var a = document.createElement("a");
  a.href = "http://www.google.com/search?q=" + link;
  a.innerHTML = link;
  return a;
}

function getTextNode(text) {
  return document.createTextNode(text);
}

function getNumTests() {
  var num = parseInt($("#numTests").val());
  if (num > 0) return num;
  return false;
}

// gets a random integer using Math.random()
function getInt() {
  return Math.floor(1000000 * Math.random() + 1); // returns a number from 1 through 1000000
}