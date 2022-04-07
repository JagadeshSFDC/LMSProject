import { LightningElement, wire } from 'lwc';
import sample1 from "@salesforce/messageChannel/SampleMessageChannel__c";
import {APPLICATION_SCOPE, MessageContext,subscribe, unsubscribe } from 'lightning/messageService'
export default class LmsComponentA extends LightningElement {
    receivedMSG
    subdetails
    @wire(MessageContext)
        contyext
        connectedCallback()
        { 
            this.subscribemsg()
        }
        subscribemsg()
        { 
            this.subdetails=subscribe(this.contyext,sample1,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})
        }
        handleMessage(message)
        { 
            this.receivedMSG=message.lmsData.value ? message.lmsData.value:'Nothing is received'
        }
        unsubscribehandle()
        {
            unsubscribe(this.subdetails)
            this.subdetails=null
        }
    }