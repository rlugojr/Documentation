---
ID_PAGE: 24494
PG_TITLE: InterpolateValueAction
PG_VERSION: 1.14
---

This action creates an animation to interpolate the current value of a property to a given target.

The supported types are: Float, [Color3](/classes/Color3), [Vector3](/classes/Vector3), [Matrix](/classes/Matrix) and [Quaternion](/classes/Quaternion)

https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-Actions

http://www.babylonjs-playground.com/?17
##new [InterpolateValueAction](/classes/InterpolateValueAction)(triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations)

The Interpolate Value [Action](/classes/Action) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | The trigger
 | target | any | The target
 | propertyPath | string | Property of the target
 | value | any | The target value
optional | duration | number | The duration
optional | condition | [Condition](/classes/Condition) | The condition
optional | stopOtherAnimations | boolean | Set true to stop other animation, false otherwise.
---

##Extends [Action](/classes/Action)
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
Execute

