

const {makeGetLoginChart,makeGetEventChart,makeGetLoginFailureChart,makeGetEventFailureChart,makeAdminCheck}=require('../../use-cases/chart/index')


const LoginAuditChartController=require('./get-login-chart')({makeGetLoginChart})
const EventAuditChartController=require('./get-event-chart')({makeGetEventChart})
const LoginFailureAuditChartController=require('./get-login-failure-chart')({makeGetLoginFailureChart})
const EventFailureAuditChartController=require('./get-event-failure-chart')({makeGetEventFailureChart})
const AdminCheckController=require('./admin-check')({makeAdminCheck})

module.exports={    
    LoginAuditChartController,
    EventAuditChartController,
    LoginFailureAuditChartController,
    EventFailureAuditChartController,
    AdminCheckController
}