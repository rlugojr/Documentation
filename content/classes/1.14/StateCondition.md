---
ID_PAGE: 24500
PG_TITLE: StateCondition
PG_VERSION: 1.14
---

This condition checks the state property of an object and compares it to the given value
##new [StateCondition](/classes/StateCondition)(actionManager, target, value)

The state condition constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | actionManager | [ActionManager](/classes/ActionManager) | The action manager
 | target | any | The target
 | value | string | The given value
---

##Extends [Condition](/classes/Condition)
##Members

###value : string


The value of the stateCondition



##Methods

###isValid() &rarr; boolean
Return true if condition is valid, false otherwise.

