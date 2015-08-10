---
ID_PAGE: 24492
PG_TITLE: ExecuteCodeAction
PG_VERSION: 1.14
---
##new [ExecuteCodeAction](/classes/ExecuteCodeAction)(triggerOptions, func, condition)

Execute your own code when the trigger is raised and the condition is true
####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | 
 | func | (evt: [ActionEvent](/classes/ActionEvent)) =&gt; void | 
optional | condition | [Condition](/classes/Condition) | 
---

##Extends [Action](/classes/Action)
##Members

###func : (evt: [ActionEvent](/classes/ActionEvent)) =&gt; void


Func



##Methods

###execute(evt) &rarr; void
Execute the action on a specified event

####Parameters
 | Name | Type | Description
---|---|---|---
 | evt | [ActionEvent](/classes/ActionEvent) | The event to trigger
---
