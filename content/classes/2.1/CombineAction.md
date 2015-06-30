---
ID_PAGE: 6671
PG_TITLE: CombineAction
PG_VERSION: 2.1
---
##new [CombineAction](page.php?p=6671)(triggerOptions, children, condition)



This action is a container. You can use it to execute many actions simultaneously on the same trigger. The children property must be an array of actions




####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | The trigger options
 | children | [Action](page.php?p=6663)[] | The childrens actions
optional | condition | [Condition](page.php?p=6679) | The condition to do the action
---

##Extends [Action](page.php?p=6663)
##Members

###children : [Action](page.php?p=6663)[]




The childrens actions











##Methods

###execute(evt) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | evt | [ActionEvent](page.php?p=6677) | The event to trigger
---
