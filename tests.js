// regex for getting a td element
var td_regex = /<td>(\d|\s)*<\/td>/g;

// init vars
// 15x15 table
var template = "<table id=\"testTable\"><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>";

$(document).ready(function () {

  $("#test1").click(function () {
    
    var result = runTest1(getNumTests());
    if (result != null) {
      $("#results").html("Total time for test 1: " + result.totalTime + "ms<br />Average time: " + result.avgTime + "ms");
    }
    else {
      $("#results").html("Test failed");
    }
  });

  $("#test2").click(function () {

    var result = runTest2(getNumTests());
    if (result != null) {
      $("#results").html("Total time for test 2: " + result.totalTime + "ms<br />Average time: " + result.avgTime + "ms");
    }
    else {
      $("#results").html("Test failed");
    }
  });

  $("#test3").click(function () {

    var result = runTest3(getNumTests());
    if (result != null) {
      $("#results").html("Total time for test 3: " + result.totalTime + "ms<br />Average time: " + result.avgTime + "ms");
    }
    else {
      $("#results").html("Test failed");
    }
  });

  $("#test4").click(function () {

    var result = runTest4(getNumTests());
    if (result != null) {
      $("#results").html("Total time for test 4: " + result.totalTime + "ms<br />Average time: " + result.avgTime + "ms");
    }
    else {
      $("#results").html("Test failed");
    }
  });

  $("#test5").click(function () {

    var result = runTest5(getNumTests());
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
    data = runTest1(reps);
    html += "<p>Test 1:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test2
    data = runTest2(reps);
    html += "<p>Test 2:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test3
    data = runTest3(reps);
    html += "<p>Test 3:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test 4
    data = runTest4(reps);
    html += "<p>Test 4:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test 5
    data = runTest5(reps);
    html += "<p>Test 5:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p><br />";

    results.html(html);
  });
});

function runTest1(reps) {
  // template string of html, parse each time, manipulate, insert into doc
  // init vars;
  var testDiv = $("#test");
  var numTests = reps;
  if (!numTests) return null;
  var start, end;

  start = new Date();
  // run tests
  for (var i = 0; i < numTests; i++) {
    test1(testDiv);
  }
  end = new Date();

  // get total time
  var total = end.getTime() - start.getTime();

  // get average time
  var avg = 1.0 * total / numTests;

  // return results
  return {
    totalTime: total,
    avgTime: avg
  };
}

// template string of html, parse each time, manipulate, insert into doc
function test1(container) {
  var newHTML = template; // load template

  // init vars
  var match = td_regex.exec(newHTML);
  var start, end;
  var head, tail;

  // replace all td's
  while (match != null) {
    start = match.index;
    end = td_regex.lastIndex;

    // split string into 3 parts, beginning, replacement section, end
    head = newHTML.substring(0, start);
    tail = newHTML.substring(end, newHTML.length);

    // replace mid with a new td element
    newHTML = head + "<td>" + getInt() + "</td>" + tail;

    // get next match
    match = td_regex.exec(newHTML);
  }
  // insert new table into DOM
  container.html(newHTML);
}

function runTest2(reps) {
  // template string of html, parse once, clone node each time, manipulate, insert into doc
  // init vars;
  // load the template into a node once
  var node = $.parseHTML(template);
  var testDiv = $("#test");
  var numTests = reps;
  if (!numTests) return null;
  var start, end;

  start = new Date();
  // run tests
  for (var i = 0; i < numTests; i++) {
    test2(node[0], testDiv);
  }
  end = new Date();

  // get total time
  var total = end.getTime() - start.getTime();

  // get average time
  var avg = 1.0 * total / numTests;

  // return results
  return {
    totalTime: total,
    avgTime: avg
  };
}

function test2(node, container) {
  // clone node
  var table = node.cloneNode(true);
  // go to the rows
  var tbody = table.firstChild;
  // iterate through rows/cols and assign random numbers
  var row, col;
  for (var i = 0; i < 10; i++) {
    row = tbody.children[i];
    for (var j = 0; j < 10; j++) {
      col = row.children[j];
      col.innerHTML = getInt();
    }
  }

  // append new table to dom
  container.empty();
  container.append(table);
}

function runTest3(reps) {
  // init vars;
  var numTests = reps;
  if (!numTests) return null;
  var start, end;

  start = new Date();
  // run tests
  for (var i = 0; i < numTests; i++) {
    test3();
  }
  end = new Date();

  // get total time
  var total = end.getTime() - start.getTime();

  // get average time
  var avg = 1.0 * total / numTests;

  // return results
  return {
    totalTime: total,
    avgTime: avg
  };
}

function test3() {
  // preexisting doc, go through each node, clone existing node, modify, replace
  var doc = document.getElementById("testTable");
  var table = doc.firstElementChild;

  var row, col, clone;
  // iterate through elements
  for (var i = 0; i < 10; i++) {
    row = table.children[i];
    for (var j = 0; j < 10; j++) {
      col = row.children[j];
      // clone existing node
      clone = col.cloneNode(true);
      // modify node
      clone.innerHTML = getInt();
      // replace
      row.replaceChild(clone, col);
    }
  }
}

function runTest4(reps) {
  // init vars;
  var numTests = reps;
  if (!numTests) return null;
  var start, end;

  start = new Date();
  // run tests
  for (var i = 0; i < numTests; i++) {
    test3();
  }
  end = new Date();

  // get total time
  var total = end.getTime() - start.getTime();

  // get average time
  var avg = 1.0 * total / numTests;

  // return results
  return {
    totalTime: total,
    avgTime: avg
  };
}

function test4() {
  // preexisting doc, go through each node and modify directly
  var doc = document.getElementById("testTable");
  var table = doc.firstElementChild;

  var row, col, clone;
  // iterate through elements
  for (var i = 0; i < 10; i++) {
    row = table.children[i];
    for (var j = 0; j < 10; j++) {
      col = row.children[j];
      // modify node
      col.innerHTML = getInt();
    }
  }
}


function runTest5(reps) {
  // clone parent, go through all nodes, modify directly, replace parent// init vars;
  var numTests = reps;
  if (!numTests) return null;
  var start, end;

  start = new Date();
  // run tests
  for (var i = 0; i < numTests; i++) {
    test3();
  }
  end = new Date();

  // get total time
  var total = end.getTime() - start.getTime();

  // get average time
  var avg = 1.0 * total / numTests;

  // return results
  return {
    totalTime: total,
    avgTime: avg
  };
}

function test5() {
  // clone parent, go through all nodes, modify, replace parent
  var doc = document.getElementById("testTable");
  var clone = doc.cloneNode(true);
  var table = clone.firstElementChild;

  var row, col;
  // iterate through elements
  for (var i = 0; i < 10; i++) {
    row = table.children[i];
    for (var j = 0; j < 10; j++) {
      col = row.children[j];
      // modify node
      col.innerHTML = getInt();
    }
  }
  // replace parent
  document.replaceChild(clone, doc);
}

function getComplexCell() {

}

function getImageNode(img) {
  var img = document.createElement("img");
  img.src = img;
  return img;
}

function getParagraphNode(text) {
  var p = document.createElement("p");
  p.appendChild(document.createTextNode(text));
  return p;
}

function getLinkNode(link) {
  var a = document.createElement("a");
  a.href = link;
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