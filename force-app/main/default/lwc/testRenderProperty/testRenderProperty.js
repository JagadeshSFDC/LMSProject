import { LightningElement,api } from 'lwc';

export default class TestRenderProperty extends LightningElement {
@api test1='api property'
test2='Non reactive Property'
checkproperty()
{
    this.test2='Property changed'
}
}