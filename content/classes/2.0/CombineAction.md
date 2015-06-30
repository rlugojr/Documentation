---
ID_PAGE: 5734
PG_TITLE: CombineAction
PG_VERSION: 2.0
---
##new [CombineAction](page.php?p=5734)(triggerOptions, children, condition)


This action is a container. You can use it to execute many actions simultaneously on the same trigger. The children property must be an array of actions


####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | The trigger options
 | children | [Action](page.php?p=5726)[] | The childrens actions
optional | condition | [Condition](page.php?p=5742) | The condition to do the action
---

##Extends [Action](page.php?p=5726)
##Members

###children : [Action](page.php?p=5726)[]



The childrens actions







##Methods

###execute(evt) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | evt | [ActionEvent](page.php?p=5740) | The event to trigger
---
