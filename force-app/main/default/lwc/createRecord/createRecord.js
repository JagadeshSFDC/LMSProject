import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import Account_create from '@salesforce/schema/Account'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class CreateRecord extends LightningElement {
    formField={}
    changehandler(event)
    {
        const {name,value}=event.target
        this.formField[name]=value
    }
    handleClick()
    {
        const recordInput={apiName:Account_create.objectApiName,fields:this.formField}
        createRecord(recordInput).then(result=>
            {
                this.showToast('Record Created Successfully',`Created with Id ${result.id}`,)
                this.template.querySelector('form.formid').reset()
                this.formField={}
            }).catch(error=>
                {
                    this.showToast('error creating record',error.body.messag,'error')
                })
    }
    showToast(title,message,variant)
    {
        this.dispatchEvent(new ShowToastEvent(
            {
                title,
                message,
                variant:variant||'success'
            }
        ))
    }
}