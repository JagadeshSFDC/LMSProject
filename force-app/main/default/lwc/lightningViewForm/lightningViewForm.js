import { LightningElement ,api} from 'lwc';
import contactobject from '@salesforce/schema/Contact'
import field_name from '@salesforce/schema/Contact.LastName'
import phone from '@salesforce/schema/Contact.Phone'
export default class LightningViewForm extends LightningElement {
    @api recordId
    @api objectApiName
    objectname=contactobject
    fielddetails={
        lastname:field_name,
        Phone:phone
    }
    // This will clear the values in the fields (similar like cancel the data )
    resetpage()
    {
        const pagedetails=this.template.querySelectorAll('lightning-input-field')
        if(pagedetails)
        {
            Array.from(pagedetails).forEach(element => {
                element.reset()
            });
        }
    }
}