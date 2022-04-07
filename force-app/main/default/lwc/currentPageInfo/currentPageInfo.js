import { LightningElement,wire } from 'lwc';
import {CurrentPageReference } from 'lightning/navigation'
export default class CurrentPageInfo extends LightningElement {
    @wire(CurrentPageReference)
    pageref
    get getpageinfo()
    { 
        return this.pageref ? JSON.stringify(this.pageref,null,2) : '';
    }

}