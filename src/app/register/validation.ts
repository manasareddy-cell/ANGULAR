import {FormGroup} from '@angular/forms';
export function customValidators(group:FormGroup){
    let pass=group.value.pass;
    let confirmPass=group.value.confirmPass;
    if(pass==confirmPass)
    {
        return null;
    }
    else {
        return {'custom' : true}
    }
}