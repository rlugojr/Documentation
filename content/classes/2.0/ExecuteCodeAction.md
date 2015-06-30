---
ID_PAGE: 5735
PG_TITLE: ExecuteCodeAction
PG_VERSION: 2.0
---
##new [ExecuteCodeAction](page.php?p=5735)(triggerOptions, func, condition)


Execute your own code when the trigger is raised and the condition is true


####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | 
 | func | (evt: [ActionEvent](page.php?p=5740)) =&gt; void | 
optional | condition | [Condition](page.php?p=5742) | 
---

##Extends [Action](page.php?p=5726)
##Members

###func : (evt: [ActionEvent](page.php?p=5740)) =&gt; void



Func







##Methods

###execute(evt) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | evt | [ActionEvent](page.php?p=5740) | The event to trigger
---
