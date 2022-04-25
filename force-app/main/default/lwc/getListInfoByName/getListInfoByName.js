import { LightningElement, wire } from 'lwc';
import { getListInfoByName } from 'lightning/uiListsApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class WireListInfoByName extends LightningElement {
    error;
    displayColumns;
    @wire(getListInfoByName, {
        objectApiName: ACCOUNT_OBJECT.objectApiName,
        listViewApiName: 'AllAccounts'
    })listInfo({ data, error }) {
        if (data) {
            console.log(data)
            this.displayColumns = data.displayColumns;
            this.error = undefined;
        } else if (error) {
            console.error(error)
            this.error = error;
            this.displayColumns = undefined;
        }
    }
}