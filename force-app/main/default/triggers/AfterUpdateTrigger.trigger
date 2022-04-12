trigger AfterUpdateTrigger on Account (after update) {

    if(!triggerhelper.triggervar)
    {triggerhelper.triggermethod(trigger.new);}
}