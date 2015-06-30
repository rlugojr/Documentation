---
ID_PAGE: 6672
PG_TITLE: ExecuteCodeAction
PG_VERSION: 2.1
---
##new [ExecuteCodeAction](page.php?p=6672)(triggerOptions, func, condition)



Execute your own code when the trigger is raised and the condition is true




####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | 
 | func | (evt: [ActionEvent](page.php?p=6677)) =&gt; void | 
optional | condition | [Condition](page.php?p=6679) | 
---

##Extends [Action](page.php?p=6663)
##Members

###func : (evt: [ActionEvent](page.php?p=6677)) =&gt; void




Func











##Methods

###execute(evt) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | evt | [ActionEvent](page.php?p=6677) | The event to trigger
---
