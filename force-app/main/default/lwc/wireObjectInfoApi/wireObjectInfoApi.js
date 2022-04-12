import { LightningElement,wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import account_info from '@salesforce/schema/Account'
export default class WireObjectInfoApi extends LightningElement {

    @wire(getObjectInfo,{objectApiName:account_info})
    objectinformation
    @wire(getObjectInfo,{objectApiName:account_info})
    infofunction({data,error})
    {
        if(data)
        {
            console.log(data)
        }
        if(error)
        {
            console.error(error)
        }
    }
}