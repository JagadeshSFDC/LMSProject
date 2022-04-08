public with sharing class wireGetaccounts {
    public wireGetaccounts() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getaccounts(){
        List<Account> a1=[select Name from Account LIMIT 5];
        return a1;
    }
}
