module.exports.spCallGenarator=function (spname, noOfArg) {
    let str = "";
    for (let i = 0; i < noOfArg; i++) {
      str += i === noOfArg - 1 ? "?" : "?,";
    }
  
    let finastr = `call ${spname}(${str})`;
    return finastr;
  }
  
