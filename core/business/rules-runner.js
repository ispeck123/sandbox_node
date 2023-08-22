

function MakeRulesRunner(...rules){
    console.log("in rule runner:::", rules);
   rules.map((rule)=>{
       if(rule instanceof Error){
           return rule
       }     
   })

   return null
}

module.exports=MakeRulesRunner