public class getaccounts {
	@AuraEnabled
    public static list<Account> getacaac(string acc)
    {
        string aa='%'+acc+'%';
        list<account> acc1=[select Name from account where Name like :aa];
        return acc1;
    }
    @AuraEnabled
    public static list<contact> getrelatedcontacts(id recordid)
    {
        list<contact> con=[select LastName,Phone from contact where AccountId = :recordid];
        return con;
    }
}