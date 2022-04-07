import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
import State from '@salesforce/schema/Lead.State';
export default class NavigateToHome extends NavigationMixin(LightningElement) {
//This code will navigate to home page using the button action
//This can be achived by using the NavigationMixin from lightning navigation
navigateToObjectHome() {
    this[NavigationMixin.Navigate]({
        type: 'standard__namedPage',
        attributes: {
            pageName : 'home'
        }
    })
}
navigateToChatter() {
    this[NavigationMixin.Navigate]({
        type: 'standard__namedPage',
        attributes: {
            pageName : 'chatter'
        }
    })
}
//Navigate to new record creation page which wll pop out and user can create the record
navigateToNewRecord() {
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName : 'Account',
            actionName : 'new'
        }
    })
}
navigateToNewRecordwithvalues()
    {
        const datadefault=encodeDefaultFieldValues(
        {
            Name:'Jagadeesh'
        })
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName : 'Account',
                actionName : 'new'
            },
            state:{
                defaultFieldValues: datadefault
            }
        })
    }
    navigateTolistview()
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName : 'Account',
                actionName : 'list'
            },
            state: {
                filterName : 'Recent'
            }
        })
    }
    navigateTocontent()
    { 
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName : 'ContentDocument',
                actionName : 'home'
            }
        })
    }
}