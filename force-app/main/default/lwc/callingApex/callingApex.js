import { LightningElement,wire } from 'lwc';
import apexresult from '@salesforce/apex/wireGetaccounts.getaccounts'
export default class CallingApex extends LightningElement {
    @wire(apexresult)
    accounts
    get resultvalue()
    {
        if(this.accounts)
        {
            return true
        }
        return false
    }
}