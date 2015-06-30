---
ID_PAGE: 3283
PG_TITLE: CombineAction
PG_VERSION: 1.14
---
##new [CombineAction](page.php?p=3283)(triggerOptions, children, condition)

This action is a container. You can use it to execute many actions simultaneously on the same trigger. The children property must be an array of actions
####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | The trigger options
 | children | [Action](page.php?p=3275)[] | The childrens actions
optional | condition | [Condition](page.php?p=3289) | The condition to do the action
---

##Extends [Action](page.php?p=3275)
##Members

###children : [Action](page.php?p=3275)[]


The childrens actions



##Methods

###execute(evt) &rarr; void
Execute the action on a specified event

####Parameters
 | Name | Type | Description
---|---|---|---
 | evt | [ActionEvent](page.php?p=3287) | The event to trigger
---
