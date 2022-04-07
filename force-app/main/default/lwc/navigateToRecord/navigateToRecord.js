import { LightningElement,api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecord extends NavigationMixin(LightningElement) {
    @api recordId
    navigateToRecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:'0012w0000042JYzAAM',
                objectApiName : 'Account',
                actionName : 'view'
            }
        })
    }
    navigateToeditRecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:'0012w0000042JYzAAM',
                objectApiName : 'Account',
                actionName : 'edit'
            }
        })
    }
    navigateToTab()
    { 
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName:'Bike_Card'
            }
        })
    }
    navigateToLWC()
    { 
      var defination={ componentDef : 'c:staticExample' }
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
        })
    }
    navigateToAura()
    { 
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: "c__NavigateToAura"
            },
            state:
            {
                c__messageaa:"Hai salesforce"
             }
        })
    }
}