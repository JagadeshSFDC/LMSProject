import { LightningElement,wire } from 'lwc';
import { getPicklistValues,getObjectInfo } from 'lightning/uiObjectInfoApi';
import account_info from '@salesforce/schema/Account'
import industry_info from '@salesforce/schema/Account.Industry'
export default class PicklistGetInfo extends LightningElement {
    //Getting object info to get the Picklist valuesfrom that object 
    objectinfo=account_info
    pickvalues
    //getting the object info here 
    @wire(getObjectInfo,{objectApiName: '$objectinfo' })
    recordinfo
    selectPicklist
    picklistvalues=[]
    //getting the default record type from account api and passing values in getpick function and field
    //which we are fething
    @wire(getPicklistValues,{recordTypeId: '$recordinfo.data.defaultRecordTypeId' ,fieldApiName:industry_info})
    industryPickvalue({data,error})
    {
        if(data)
        {
            console.log(data)
            //generating the picklist value pair from map method
            this.picklistvalues=[...this.industryOptions(data)]
        }
        if(error)
        {
            console.error(error)
        }
    }
    get selectindustry()
    {   
        //Updating the current picklist values to the combobox Dom
        return this.selectPicklist
    }
    industryOptions(data)
    {
        //Using the map we create the Value label pair 
        return data.values.map(item=>({label:item.label,value:item.value}))
    }
    handleChange(event)
    {
        //Updating the current value when the selection of option changes
        this.selectPicklist=event.detail.value
    }
}