---
ID_PAGE: 3284
PG_TITLE: ExecuteCodeAction
PG_VERSION: 1.14
---
##new [ExecuteCodeAction](page.php?p=3284)(triggerOptions, func, condition)

Execute your own code when the trigger is raised and the condition is true
####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | 
 | func | (evt: [ActionEvent](page.php?p=3287)) =&gt; void | 
optional | condition | [Condition](page.php?p=3289) | 
---

##Extends [Action](page.php?p=3275)
##Members

###func : (evt: [ActionEvent](page.php?p=3287)) =&gt; void


Func



##Methods

###execute(evt) &rarr; void
Execute the action on a specified event

####Parameters
 | Name | Type | Description
---|---|---|---
 | evt | [ActionEvent](page.php?p=3287) | The event to trigger
---
