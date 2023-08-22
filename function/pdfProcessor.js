const { jsPDF } = require("jspdf");
let fontSize = 12;
process.on("message", ({filename, json}) => {
    // console.log(filename, json);
    console.log("file processing started");
    const sanitizedJSON = sanitizeData(json);
    const jspdf = new jsPDF('p', 'pt', 'a4');
    const tableHead = createTableHeaders(["Username", "Email", "Event_Type", "Result", "Time"]);
    const doc = jspdf.table(5, 5, sanitizedJSON, tableHead, { printHeaders: true, autoSize: true, fontSize: fontSize, headerBackgroundColor: "white"});
    doc.save(__dirname.concat("/../download/exports/").concat(filename));
    process.send({
        type: "complete",
    });
    
    console.log("__________________________________________________");
    console.log("|exiting process:: ", process.pid, process.title);
    console.log("```````````````````````````````````````````````````");
    process.exit();

})

// utility function # # # # # # # # # # # # # # # # #
createTableHeaders = (fields) => {
    const result = [];
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        result.push({
            'id': field, 
            'name': field, 
            'prompt': field, 
            'align': 'left', 
            'padding': 0
        });
    }
    return result;
}

sanitizeData = (json) => {
    let fontSizeStatus = false;
    let runOnce = true;
    const data = [];
    for (let i = 0; i < json.length; i++) {
        const element = json[i];
        if (element.event_result.length > 35 && element.event_result.length < 44 && fontSizeStatus === false) {
            fontSize = 8.8;
            console.log("\n\n\n------------------\n");
            console.log("max_string:: ", element.event_result.length, "Setting font size to:: ", fontSize)
            console.log("------------------\n\n\n\n");
        }
        if (element.event_result.length > 45) {
            fontSize = 8;
            fontSizeStatus = true;
        }
        data.push({
            'Username': element.name, 
            'Email': element.email, 
            'Event_Type': element.event_type, 
            'Result': element.event_result,
            'Time': new Date(element.event_time).toLocaleDateString(), 
        });
    }
    return data;
}