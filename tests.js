// 10x10 table template
var templateString = "<table id=\"testTable\"><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>";
var templateNode = $(templateString);
var tests = {};

var rows = 10;
var cols = 10;
// some temp var names
var table, tr, td, rowList, cellList, number;

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
    if (result != null) {
      $("#results").html("Total time for test 2: " + result.totalTime + "ms<br />Average time: " + result.avgTime + "ms");
    }
    else {
      $("#results").html("Test failed");
    }
  });

  $("#test3").click(function () {

    var result_a = runTest(getNumTests(), tests.three_a);
    var result_b = runTest(getNumTests(), tests.three_b);
    var result_c = runTest(getNumTests(), tests.three_c);
    var result_d = runTest(getNumTests(), tests.three_d);
    var result_e = runTest(getNumTests(), tests.three_e);
    if (result_a != null && result_b != null && result_c != null && result_d != null && result_e != null) {
      $("#results").html("Total time for test 3a: " + result_a.totalTime + "ms<br />Average time: " + result_a.avgTime + "ms<br />" + 
                         "Total time for test 3b: " + result_b.totalTime + "ms<br />Average time: " + result_b.avgTime + "ms<br />" + 
                         "Total time for test 3c: " + result_c.totalTime + "ms<br />Average time: " + result_c.avgTime + "ms<br />" +
                         "Total time for test 3d: " + result_d.totalTime + "ms<br />Average time: " + result_d.avgTime + "ms<br />" +
                         "Total time for test 3d: " + result_e.totalTime + "ms<br />Average time: " + result_e.avgTime + "ms<br />");
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

  $("#test6").click(function () {

    var result = runTest(getNumTests(), tests.six);
    if (result != null) {
      $("#results").html("Total time for test 6: " + result.totalTime + "ms<br />Average time: " + result.avgTime + "ms");
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
    html += "<p>Test 1 - template string of html, parse each time, manipulate, insert into doc:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test2
    data = runTest(reps, tests.two);
    html += "<p>Test 2 - clone a template node, modify it, then insert it into document:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test3a
    data = runTest(reps, tests.three_a);
    html += "<p>Test 3a - create table from scratch with only string concatenation:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test3b
    data = runTest(reps, tests.three_b);
    html += "<p>Test 3b - create table from scratch with only +=:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test3c
    data = runTest(reps, tests.three_c);
    html += "<p>Test 3c - create table from scratch with array joining:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test3d
    data = runTest(reps, tests.three_d);
    html += "<p>Test 3d - create table from scratch with array joining for each row:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test3e
    data = runTest(reps, tests.three_e);
    html += "<p>Test 3e - create table from scratch with only jquery:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test 4
    data = runTest(reps, tests.four);
    html += "<p>Test 4 - preexisting doc, go through each node, clone existing node, modify, replace:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test 5
    data = runTest(reps, tests.five);
    html += "<p>Test 5 - preexisting doc, go through each node and modify directly:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";
    // test 6
    data = runTest(reps, tests.six);
    html += "<p>Test 6 - preexisting doc, clone parent, go through all nodes, modify, replace parent:<br />Total Time: " + data.totalTime + "ms<br />Average Time: " + data.avgTime + "ms</p>";

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
  // create node from template string
  table = $(templateString);
  // get rows
  rowList = table.find("tr");
  // look at each row
  rowList.each(function (index) {
    // look at each cell
    $(this).children("td").each(function (index) {
      // modify cell's contents
      number = getInt();
      $(this).html("<img src=\"thumbs/" + Math.floor(Math.random() * 15 + 1) + ".png\" /><br /><a href=\"http://www.google.com/search?q=" + number + "\">" + number + "</a>");
    });
  });
  // insert new table into DOM
  $("#testTable").replaceWith(table);
}

// clone a template node, modify it, then insert it into document
tests.two = function() {
  // clone node
  table = templateNode.clone();
  // get rows
  rowList = table.find("tr");
  // look at each row
  rowList.each(function (index) {
    // look at each cell
    $(this).children("td").each(function (index) {
      // modify cell's contents
      number = getInt();
      $(this).html("<img src=\"thumbs/" + Math.floor(Math.random() * 15 + 1) + ".png\" /><br /><a href=\"http://www.google.com/search?q=" + number + "\">" + number + "</a>");
    });
  });
  // insert new table into DOM
  $("#testTable").replaceWith(table);
}

// create table from scratch with only string concatenation
tests.three_a = function () {
  table = "";

  for (var i = 0; i < rows; i++) {
    table = table + "<tr>";
    for (var j = 0; j < cols; j++) {
      number = getInt();
      table = table + "<td><img src=\"thumbs/" + Math.floor(Math.random() * 15 + 1) + ".png\" /><br /><a href=\"http://www.google.com/search?q=" + number + "\">" + number + "</a></td>"
    }
    table = table + "</tr>";
  }
  // insert new table into DOM
  $("#testTable").html(table);
}

// create table from scratch with only +=
tests.three_b = function () {
  table = "";

  for (var i = 0; i < rows; i++) {
    table += "<tr>";
    for (var j = 0; j < cols; j++) {
      number = getInt();
      table += "<td><img src=\"thumbs/";
      table += Math.floor(Math.random() * 15 + 1);
      table += ".png\" /><br /><a href=\"http://www.google.com/search?q=";
      table += number;
      table += "\">";
      table += number;
      table += "</a></td>";
    }
    table += "</tr>";
  }
  // insert new table into DOM
  $("#testTable").html(table);
}

// create table from scratch with array joining
tests.three_c = function () {
  table = ["<table id=\"testTable\">"];

  for (var i = 0; i < rows; i++) {
    table.push("<tr>");
    for (var j = 0; j < cols; j++) {
      number = getInt();
      table.push("<td><img src=\"thumbs/");
      table.push(Math.floor(Math.random() * 15 + 1));
      table.push(".png\" /><br /><a href=\"http://www.google.com/search?q=");
      table.push(number);
      table.push("\">");
      table.push(number);
      table.push("</a></td>");
    }
    table.push("</tr>");
  }
  table.push("</table>");
  // insert new table into DOM
  $("#testTable").replaceWith($(table.join("")));
}

// create table from scratch with array joining for each row
tests.three_d = function () {
  table = $("<table />").attr("id","testTable");

  for (var i = 0; i < rows; i++) {
    row = ["<tr>"];
    // build an array for each row
    for (var j = 0; j < cols; j++) {
      number = getInt();
      row.push("<td><img src=\"thumbs/");
      row.push(Math.floor(Math.random() * 15 + 1));
      row.push(".png\" /><br /><a href=\"http://www.google.com/search?q=");
      row.push(number);
      row.push("\">");
      row.push(number);
      row.push("</a></td>");
    }
    row.push("</tr>");
    table.append(row.join(""));
  }
  // insert new table into DOM
  $("#testTable").replaceWith(table);
}

// create table from scratch with only jquery
tests.three_e = function () {
  table = $("<table />", { id: "testTable" });

  for (var i = 0; i < rows; i++) {
    // create row
    row = $("<tr />");
    for (var j = 0; j < cols; j++) {
      number = getInt();
      // create cell
      td = $("<td />");
      td.append($("<img />", { src: "thumbs/" + Math.floor(Math.random() * 15 + 1) + ".png" }))
      td.append($("<br />"));
      td.append($("<a />", { href: "http://www.google.com/search?q=" + number }).text(number));
      row.append(td);
    }
    table.append(row);
  }
  // insert new table into DOM
  $("#testTable").replaceWith(table);
}

// preexisting doc, go through each node, clone existing node, modify, replace
tests.four = function () {
  table = $("#testTable");
  // get rows
  rowList = table.find("tr");
  // look at each row
  rowList.each(function (index) {
    // look at each cell
    $(this).children("td").each(function (index) {
      // modify cell's contents
      td = $(this).clone();
      number = getInt();
      td.html("<img src=\"thumbs/" + Math.floor(Math.random() * 15 + 1) + ".png\" /><br /><a href=\"http://www.google.com/search?q=" + number + "\">" + number + "</a>");
      // replace cell
      $(this).replaceWith(td);
    });
  });
}

// preexisting doc, go through each node and modify directly
tests.five = function () {
  table = $("#testTable");
  // get rows
  rowList = table.find("tr");
  // look at each row
  rowList.each(function (index) {
    // look at each cell
    $(this).children("td").each(function (index) {
      // modify cell's contents
      number = getInt();
      $(this).html("<img src=\"thumbs/" + Math.floor(Math.random() * 15 + 1) + ".png\" /><br /><a href=\"http://www.google.com/search?q=" + number + "\">" + number + "</a>");
    });
  });
}

// preexisting doc, clone parent, go through all nodes, modify, replace parent
tests.six = function () {
  // clone parent
  table = $("#testTable").clone();
  // get rows
  rowList = table.find("tr");
  // look at each row
  rowList.each(function (index) {
    // look at each cell
    $(this).children("td").each(function (index) {
      // modify cell's contents
      number = getInt();
      $(this).html("<img src=\"thumbs/" + Math.floor(Math.random() * 15 + 1) + ".png\" /><br /><a href=\"http://www.google.com/search?q=" + number + "\">" + number + "</a>");
    });
  });
  // replace parent
  $("#testTable").replaceWith(table);
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