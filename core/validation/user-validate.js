


let {IsValid}=require('./validate')


function UserValidate(){
    return {
        IsValidEmail,
        IsValid
    }

    function IsValidEmail(email){
        const validEmail=new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)      
        if(!validEmail.test(email)){
            throw new Error('Email is not valid')
        }

        return UserValidate()
    }
}

module.exports=UserValidate()