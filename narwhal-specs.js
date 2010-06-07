window.printObjectKeys = function(obj) {
  for (var item in obj) print(item);
}

window.printObject = function(obj) {
  for (var item in obj) print(item + ": " + obj[item]);
}

function requireHere(scriptName) {
  require(system.fs.cwd() + '/' + scriptName);
}

requireHere('jquery-1.4.2.js');
requireHere('jspec.js');
requireHere('jspec.jquery.js');

for (var i = 1; i < system.args.length; ++i)
  requireHere(system.args[i]);
