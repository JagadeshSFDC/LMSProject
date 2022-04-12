import { LightningElement,wire } from 'lwc';
import { getPicklistValues,getObjectInfo } from 'lightning/uiObjectInfoApi';
import account_info from '@salesforce/schema/Account'
import industry_info from '@salesforce/schema/Account.Industry'
export default class PicklistGetInfo extends LightningElement {
    objectinfo=account_info
    pickvalues
    @wire(getObjectInfo,{objectApiName: '$objectinfo' })
    recordinfo
    selectPicklist
    picklistvalues=[]
    @wire(getPicklistValues,{recordTypeId: '$recordinfo.data.defaultRecordTypeId' ,fieldApiName:industry_info})
    industryPickvalue({data,error})
    {
        if(data)
        {
            console.log(data)
            this.picklistvalues=[...this.industryOptions(data)]
        }
        if(error)
        {
            console.error(error)
        }
    }
    get selectindustry()
    {
        return this.selectPicklist
    }
    industryOptions(data)
    {
        return data.values.map(item=>({label:item.label,value:item.value}))
    }
    handleChange(event)
    {
        this.selectPicklist=event.detail.value
    }
}