---
ID_PAGE: 3290
PG_TITLE: ValueCondition
PG_VERSION: 1.14
---

This condition is true when the given property
##new [ValueCondition](page.php?p=3290)(actionManager, target, propertyPath, value, operator)

The Value condition constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | actionManager | [ActionManager](page.php?p=3288) | The action manager
 | target | any | The target
 | propertyPath | string | The property Path
 | value | any | The given value
optional | operator | number | The operator used
---

##Extends [Condition](page.php?p=3289)
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

