trigger contactOpportunityCreate on account (after insert) {

    if(trigger.isAfter && trigger.isInsert)
    {
        conoppCreate.createrelated(trigger.new);
    }
}