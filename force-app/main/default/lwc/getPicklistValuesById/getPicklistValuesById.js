import { LightningElement,wire } from 'lwc';
import { getPicklistValuesByRecordType,getObjectInfo } from 'lightning/uiObjectInfoApi';
import account_info from '@salesforce/schema/Account'
export default class GetPicklistValuesById extends LightningElement {
    //Getting multiple picklist fields in record type
    // 1. Getting the objectinfo as it consists of the record type which we are fetching the data
    //from that data( property or function ) pass data to wire function 
    // which will fetch the record type all picklist metadata
    //required fields are object ApiName and recordTypeId 
    accountinfo=account_info
    RatingPickValue
    selectedValue
    @wire(getObjectInfo,{objectApiName:'$accountinfo'})
    resultvalue
    @wire(getPicklistValuesByRecordType,{objectApiName:'$accountinfo',
        recordTypeId:'$resultvalue.data.defaultRecordTypeId'})
        pickvalueresult({data,error})
        {
            if(data)
            {
                // data passed to generate the format in label & Value pair
                console.log(data)
                this.RatingPickValue=this.generatePicklist(data.picklistFieldValues.Rating)
            }
            if(error)
            {
                console.error(error)
            }

        }
        // This function will generate the value pair from data field
        generatePicklist(data)
        {
            return data.values.map(item=>({label:item.label,value:item.value}))
        }
        //This will be update the Vaue selected in picklist
        handlechange(event)
        {
            this.selectedValue=event.target.value
        }
}