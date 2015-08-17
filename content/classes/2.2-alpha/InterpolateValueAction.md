---
ID_PAGE: 25164
PG_TITLE: InterpolateValueAction
PG_VERSION: 2.1
TAGS:
    - Action
---
##Description

class [InterpolateValueAction](/classes/2.2-alpha/InterpolateValueAction) extends [Action](/classes/2.2-alpha/Action)



##Constructor

##new [InterpolateValueAction](/classes/2.2-alpha/InterpolateValueAction)(triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations)

The Interpolate Value [Action](/classes/2.2-alpha/Action) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | 
 | target | any | 
 | propertyPath | string | 
 | value | any | 
optional | duration | number | 
optional | condition | [Condition](/classes/2.2-alpha/Condition) | 
optional | stopOtherAnimations | boolean | 

##Members

###propertyPath : string

The propertyPath is a string property of your target

###value : any

The target value

###duration : number

The duration for the given interpolation

###stopOtherAnimations : boolean

Set true to stop other animation, false otherwise.

##Methods

###execute() &rarr; void


