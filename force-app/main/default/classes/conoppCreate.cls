public with sharing class conoppCreate {
    public conoppCreate() {

    }
    public static void createrelated(List<Account> acc)
    {
        list<Contact> con=new List<Contact>();
        List<Opportunity> opp=new List<Opportunity>();
        for(account a:acc)
        {
            contact con1=new contact();
            Opportunity opp1=new Opportunity();
            con1.AccountId=a.Id;
            con1.LastName=a.Name;
            opp1.AccountId=a.Id;
            opp1.Name=a.Name;
            opp1.CloseDate=System.today();
            opp1.StageName='Prospecting';
            con.add(con1);
            opp.add(opp1);
        }
        if(con.size()>0)
        {
            insert con;
        }
        if(opp.size()>0)
        {
            insert opp;
        }
    }
}
