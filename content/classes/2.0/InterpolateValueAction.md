---
ID_PAGE: 5739
PG_TITLE: InterpolateValueAction
PG_VERSION: 2.0
---

This action creates an animation to interpolate the current value of a property to a given target.

The supported types are: Float, [Color3](page.php?p=5805), [Vector3](page.php?p=5808), [Matrix](page.php?p=5811) and [Quaternion](page.php?p=5810)

https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-Actions

http://www.babylonjs-playground.com/?17
##new [InterpolateValueAction](page.php?p=5739)(triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations)


The Interpolate Value [Action](page.php?p=5726) constructor


####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | The trigger
 | target | any | The target
 | propertyPath | string | Property of the target
 | value | any | The target value
optional | duration | number | The duration
optional | condition | [Condition](page.php?p=5742) | The condition
optional | stopOtherAnimations | boolean | Set true to stop other animation, false otherwise.
---

##Extends [Action](page.php?p=5726)
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

