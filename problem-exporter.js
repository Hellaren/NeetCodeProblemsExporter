var problems = [];
var tables = $$('app-table > div.my-table-container');

for(var i = 0; i < tables.length; i++) {
  var curTable = tables[i];

  var tagName = $$('div>p', curTable)[0].innerText;

  var tasks = $$('tr', curTable);
  for(var j = 0; j < tasks.length; j++) {
    var row = tasks[j];

    var hasLink = $$('a.has-tooltip-bottom', row);
    if (!hasLink.length) {
      continue;
    }
    
    var difficulty = $$(".diff-col b", row)[0].innerText;
    var problemName = $$("a.table-text", row)[0].innerText;
    var lcLink = $$("a.has-tooltip-bottom", row)[0].href;
    var solutionLink = $$("a.video-icon", row)[0].href;

    problems.push({
      difficulty,
      problemName,
      lcLink,
      solutionLink
    });
  }
}

// console.log(problems)
console.log(JSON.stringify(problems));