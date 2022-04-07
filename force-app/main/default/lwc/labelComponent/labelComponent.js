import { LightningElement } from 'lwc';
import customlabel1 from '@salesforce/label/c.testlabel1'
import customlabel2 from '@salesforce/label/c.testlabel'
import form_factor from '@salesforce/client/formFactor'
import userid from '@salesforce/user/Id'
import guestuserinfo from '@salesforce/user/isGuest'
export default class LabelComponent extends LightningElement {
    labelinfo={
        label1:customlabel1,
        label2:customlabel2
    }
    formfactorinfo=form_factor
    usersid=userid
    guestuser=guestuserinfo
}