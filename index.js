/**
 * definitions
 * A command line tool to help memorise definitions, palm card style
 *
 * Tobias Edwards <tobias.w.edwards@gmail.com>
 */

const fs = require('fs');

const deffileFilename = "Deffile"
const configFilename = ".Deffile.json"

function parseDeffile() {
  let definitions = [];

  const file = fs.readFileSync(deffileFilename).toString();
  const lines = file.trim().split('\n');

  for (let l = 0; l < lines.length; l++) {
    let weighting = 1;
    let line = lines[l].trim();

    while (line[line.length - 1] == '!') {
      weighting += 1;
      line = line.slice(0, line.length - 1);
    }

    const definition = line.trim();
    definitions.push({ definition, weighting });
  }

  return definitions;
}

function syncConfig(deffile) {
  if (!fs.existsSync(configFilename)) {
    console.log("Creating config file");
    const config = createConfig(deffile);
    fs.writeFileSync(configFilename, JSON.stringify(config));
  }
}

function createConfig(deffile) {
  let definitions = [];

  for (let d = 0; d < deffile.length; d++) {
    let definition = deffile[d].definition;
    let weighting = deffile[d].weighting;

    let definitionObject = {
      definition,
      weighting,
      attempts: []
    };

    definitions.push(definitionObject);
  }

  return { definitions };
}

const deffile = parseDeffile()
syncConfig(deffile)
