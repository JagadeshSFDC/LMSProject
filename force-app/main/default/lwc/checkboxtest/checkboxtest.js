import { LightningElement } from 'lwc';

export default class Checkboxtest extends LightningElement {

    valuecheckbox=false
    handlecheckbox(event)
    {
        this.valuecheckbox=!this.valuecheckbox
    }
}