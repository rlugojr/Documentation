---
ID_PAGE: 24498
PG_TITLE: ValueCondition
PG_VERSION: 1.14
---

This condition is true when the given property
##new [ValueCondition](/classes/ValueCondition)(actionManager, target, propertyPath, value, operator)

The Value condition constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | actionManager | [ActionManager](/classes/ActionManager) | The action manager
 | target | any | The target
 | propertyPath | string | The property Path
 | value | any | The given value
optional | operator | number | The operator used
---

##Extends [Condition](/classes/Condition)
##Members

###propertyPath : string


The propertyPath of condition

###value : any


The value of the condition

###operator : number


The operator of the condition

###static IsEqual : number


isEqual of value condition

###static IsDifferent : number


isDifferent of value condition

###static IsGreater : number


isGreater of value condition

###static IsLesser : number


isLesser of value condition



##Methods

###isValid() &rarr; boolean
Return true if condition is valid, false otherwise.

