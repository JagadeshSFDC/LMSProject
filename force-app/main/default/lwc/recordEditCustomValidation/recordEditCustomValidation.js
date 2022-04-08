import { LightningElement,api } from 'lwc';
import account_object from '@salesforce/schema/Account'
export default class RecordEditCustomValidation extends LightningElement {
    objectname=account_object
    nameinfo
    changeinput(event)
    {
        this.nameinfo=event.target.value
    }
    handleValidation(event)
    {
        event.preventDefault()
        const inputfield=this.template.querySelector('lightning-input')
        const checkvalue=inputfield.value
        if(!checkvalue.includes('India'))
        {
            inputfield.setCustomValidity('India need to be added in the field')
        }
        else{
            inputfield.setCustomValidity('')
            const fields=event.detail.fields
            fields.Name=checkvalue
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputfield.reportValidity()
    }

}