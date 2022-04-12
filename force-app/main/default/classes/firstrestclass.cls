@RestResource(urlMapping='/v1/*')
global with sharing class firstrestclass {

    global final static string testmsg='first webservice salesforce';
    
    @httpGet
    global static string getclass(){
        return testmsg;
    }
    @httpPost
    global static string putclass()
    {
    return testmsg;
    }
    
    
   
}