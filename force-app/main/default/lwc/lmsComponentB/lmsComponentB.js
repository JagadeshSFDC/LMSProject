import { LightningElement,wire } from 'lwc';
import sample1 from "@salesforce/messageChannel/SampleMessageChannel__c";
import {MessageContext,publish } from 'lightning/messageService'
export default class LmsComponentB extends LightningElement {
    inputvalue
    @wire(MessageContext)
        context
inputhandler(event)
{ 
            this.inputvalue=event.target.value
 }
submitmsg()
        {     console.log('published')
           const message={ lmsData:{

                    value:this.inputvalue 
                } }
            //msgcontext, name, message info
            publish(this.context, sample1 ,message)  
        }
}