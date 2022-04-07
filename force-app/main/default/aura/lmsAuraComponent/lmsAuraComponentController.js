({
    handlemessage : function(component, message) {

    },
    msgsend : function(component,event) {
        component.set('v.inputvalue',event.targer.value);
    },
    publishmsg : function(component) {
        var msg=component.get('v.inputvalue');
        const message={
            lmsData:{ 
                value:msg
            }
        }
        component.find('sampleMessageChannel').publish(message);
    }
})
