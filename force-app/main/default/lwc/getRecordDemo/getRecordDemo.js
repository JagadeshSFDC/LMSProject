import { LightningElement,wire,api} from 'lwc';
import { getRecord ,getFieldValue,getFieldDisplayValue} from 'lightning/uiRecordApi';
import Phone from '@salesforce/schema/Account.Phone';
import Name from '@salesforce/schema/Account.Name';
import Rating from '@salesforce/schema/Account.Rating';
export default class GetRecordDemo extends LightningElement {
    @api recordId
    AccountName
    AccountPhone
    AccountRating
    //@wire(getRecord,{recordId:'$recordId',fields:[Name,Phone]})
    /*@wire(getRecord,{recordId:'$recordId',layoutTypes:['Full'],modes:['Edit']})
    getinfo({data,error})
    {
        if(data)
        {
            console.log(data)
            this.AccountName=data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value
            this.AccountPhone=data.fields.Phone.displayValue ? data.fields.Phone.displayValue : data.fields.Phone.value
            this.AccountRating=data.fields.Rating.displayValue ? data.fields.Rating.displayValue : data.fields.Rating.value
        }
        if(error)
        {
            console.error(error)
        }
    } */
    @wire(getRecord,{recordId:'$recordId',fields:[Name,Phone,Rating]})
    getinfo({data,error})
    {
        if(data)
        {
            console.log(data)
            this.AccountName=getFieldValue(data,Name)
            this.AccountPhone=getFieldValue(data,Phone)
            this.AccountRating=getFieldValue(data,Rating)
        }
        if(error)
        {
            console.error(error)
        }
    } 
}