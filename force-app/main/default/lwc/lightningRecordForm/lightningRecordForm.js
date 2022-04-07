import { LightningElement,api } from 'lwc';
import opportunityobject from '@salesforce/schema/Opportunity'
import opportunity_Name from '@salesforce/schema/Opportunity.Name'
import opportunity_date from '@salesforce/schema/Opportunity.CloseDate'
import opportunity_stage from '@salesforce/schema/Opportunity.StageName'
export default class LightningRecordForm extends LightningElement {
    @api recordId
    objectname=opportunityobject
    fieldUsed=[opportunity_Name,opportunity_date,opportunity_stage]

    successform()
    {
        alert('This is created successfully');
    }
}