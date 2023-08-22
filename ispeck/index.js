/*const fetch = require('node-fetch');

(async () => {
  try {

    const response = await fetch('http://164.52.218.100:9000/project/types')
    const json = await response.json()

    //console.log(response);
    console.log(json);
    console.log(json.response.project_type);
  } catch (error) {
    console.log(error.response.body);
  }
})();
*/
const fetch = require("node-fetch");
const url = "http://164.52.218.100:9000/project/types";

const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json.response.project_type);
  } catch (error) {
    console.log(error);
  }
};

module.export=getData(url);