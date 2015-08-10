---
ID_PAGE: 24491
PG_TITLE: CombineAction
PG_VERSION: 1.14
---
##new [CombineAction](/classes/CombineAction)(triggerOptions, children, condition)

This action is a container. You can use it to execute many actions simultaneously on the same trigger. The children property must be an array of actions
####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | The trigger options
 | children | [Action](/classes/Action)[] | The childrens actions
optional | condition | [Condition](/classes/Condition) | The condition to do the action
---

##Extends [Action](/classes/Action)
##Members

###children : [Action](/classes/Action)[]


The childrens actions



##Methods

###execute(evt) &rarr; void
Execute the action on a specified event

####Parameters
 | Name | Type | Description
---|---|---|---
 | evt | [ActionEvent](/classes/ActionEvent) | The event to trigger
---
