
const AddAlarmController=require('./add-alarm')();
const GetAlarmController=require('./get-alarm')();
const GetAlarmCategoryController=require('./get-alarm-category')();
const UpdateAlarmController=require('./update-alarm')();

module.exports={
    AddAlarmController,   
    GetAlarmController,
    GetAlarmCategoryController,
    UpdateAlarmController
}