
const {makeAuditDb}=require('../../data-access/index')


const makeGetLoginChart=require('./get-login-chart')({makeAuditDb})
const makeGetEventChart=require('./get-event-chart')({makeAuditDb})
const makeGetLoginFailureChart=require('./get-login-failure-chart')({makeAuditDb})
const makeGetEventFailureChart=require('./get-event-failure-chart')({makeAuditDb})
const makeAdminCheck=require('./admin-check')({makeAuditDb})


module.exports=Object.freeze({
    makeGetLoginChart,
    makeGetEventChart,
    makeGetLoginFailureChart,
    makeGetEventFailureChart,
    makeAdminCheck
})