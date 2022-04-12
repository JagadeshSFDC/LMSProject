public class triggerhelper {
	public static boolean triggervar=false;
		public static void triggermethod(list<account> acc1)
		{
			triggervar=true;
			list<account> acc=[select Name,phone from account where id in :acc1];
			list<account> newaccount=new list<Account>();
			for(account ac:acc)
			{
				account a=new account();
				a.Name=ac.Name;
				newaccount.add(a);
			}
			insert newaccount;
		}
}
	
