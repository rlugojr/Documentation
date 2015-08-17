---
ID_PAGE: 25168
PG_TITLE: ValueCondition
PG_VERSION: 2.1
TAGS:
    - Condition
---
##Description

class [ValueCondition](/classes/2.2-alpha/ValueCondition) extends [Condition](/classes/2.2-alpha/Condition)



##Constructor

##new [ValueCondition](/classes/2.2-alpha/ValueCondition)(actionManager, target, propertyPath, value, operator)

The Value condition constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | actionManager | [ActionManager](/classes/2.2-alpha/ActionManager) | 
 | target | any | 
 | propertyPath | string | 
 | value | any | 
optional | operator | number | 

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


