---
ID_PAGE: 6684
PG_TITLE: Animation
PG_VERSION: 2.1
---

The animation is based on objects called [Animation](page.php?p=6684).

An [Animation](page.php?p=6684) is defined by various properties and a collection of keys

A tutorial about Animations ban be found [here](https://github.com/BabylonJS/Babylon.js/wiki/07-Animation)
##new [Animation](page.php?p=6684)(name, targetProperty, framePerSecond, dataType, loopMode)







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | targetProperty | string | 
 | framePerSecond | number | 
 | dataType | number | 
optional | loopMode | number | 
---

##Members

###name : string




Name of the animation



###targetProperty : string




The property to change, for example rotate a [Mesh](page.php?p=6659) : &quot;rotation.x&quot;



###framePerSecond : number




The number of animation frames per second



###dataType : number




The kind of value affected by the animation : ANIMATIONTYPE_FLOAT, ANIMATIONTYPE_VECTOR3, ANIMATIONTYPE_QUATERNION, ANIMATIONTYPE_MATRIX, ANIMATIONTYPE_COLOR3



###loopMode : number




The loop mode : ANIMATIONLOOPMODE_RELATIVE, NIMATIONLOOPMODE_CYCLE, ANIMATIONLOOPMODE_CONSTANT



###targetPropertyPath : string[]




An array of properties



###currentFrame : number




The current animation key



###static ANIMATIONTYPE_FLOAT : number




The value affected by the animation is a float



###static ANIMATIONTYPE_VECTOR3 : number




The value affected by the animation is a [Vector3](page.php?p=6751)



###static ANIMATIONTYPE_VECTOR2 : number




###static ANIMATIONTYPE_QUATERNION : number




The value affected by the animation is a [Quaternion](page.php?p=6753)



###static ANIMATIONTYPE_MATRIX : number




The value affected by the animation is a [Matrix](page.php?p=6754)



###static ANIMATIONTYPE_COLOR3 : number




The value affected by the animation is a [Color3](page.php?p=6748)



###static ANIMATIONLOOPMODE_RELATIVE : number




The animation loops but doesn't reset values and continues animation with values of the previous ending animation



###static ANIMATIONLOOPMODE_CYCLE : number




The animation restarts with the inital values



###static ANIMATIONLOOPMODE_CONSTANT : number




The animation keeps its final value i.e stopped











##Methods

###static CreateAndStartAnimation(name, mesh, tartgetProperty, framePerSecond, totalFrame, from, to, loopMode) &rarr; [Animatable](page.php?p=6683)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | mesh | [AbstractMesh](page.php?p=6657) | 
 | tartgetProperty | string | 
 | framePerSecond | number | 
 | totalFrame | number | 
 | from | any | 
 | to | any | 
optional | loopMode | number | 
---

###isStopped() &rarr; boolean
Tests if the animation is stopped






###getKeys() &rarr; any[]
Returns the animation keys.
Every key represents the value of the [Animation](page.php?p=6684) at that key's given time.






###getEasingFunction() &rarr; IEasingFunction




###setEasingFunction(easingFunction) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | easingFunction | [EasingFunction](page.php?p=6685) | 
---

###floatInterpolateFunction(startValue, endValue, gradient) &rarr; number
Used to interpolate (perform the transition ) between float keys





####Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | number | The start value to interpolate
 | endValue | number | The end value to interpolate
 | gradient | number | The balance of the interpolation
---

###quaternionInterpolateFunction(startValue, endValue, gradient) &rarr; [Quaternion](page.php?p=6753)
Used to interpolate (perform the transition ) between [Quaternion](page.php?p=6753) keys





####Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Quaternion](page.php?p=6753) | The start value to interpolate
 | endValue | [Quaternion](page.php?p=6753) | The end value to interpolate
 | gradient | number | The balance of the interpolation
---

###vector3InterpolateFunction(startValue, endValue, gradient) &rarr; [Vector3](page.php?p=6751)
Used to interpolate (perform the transition ) between [Vector3](page.php?p=6751) keys





####Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Vector3](page.php?p=6751) | The start value to interpolate
 | endValue | [Vector3](page.php?p=6751) | The end value to interpolate
 | gradient | number | The balance of the interpolation
---

###vector2InterpolateFunction(startValue, endValue, gradient) &rarr; [Vector2](page.php?p=6750)



####Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Vector2](page.php?p=6750) | 
 | endValue | [Vector2](page.php?p=6750) | 
 | gradient | number | 
---

###color3InterpolateFunction(startValue, endValue, gradient) &rarr; [Color3](page.php?p=6748)
Used to interpolate (perform the transition ) between [Color3](page.php?p=6748) keys





####Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Color3](page.php?p=6748) | The start value to interpolate
 | endValue | [Color3](page.php?p=6748) | The end value to interpolate
 | gradient | number | The balance of the interpolation
---

###matrixInterpolateFunction(startValue, endValue, gradient) &rarr; [Matrix](page.php?p=6754)



####Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Matrix](page.php?p=6754) | 
 | endValue | [Matrix](page.php?p=6754) | 
 | gradient | number | 
---

###clone() &rarr; [Animation](page.php?p=6684)
Clones this animation object






###setKeys(values) &rarr; void
Adds the keys array to this [Animation](page.php?p=6684) object





####Parameters
 | Name | Type | Description
---|---|---|---
 | values | Array&lt;any&gt; | The keys to assign to this object
---

###animate(delay, from, to, loop, speedRatio) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
 | delay | number | @param delay
 | from | number | The frame defining the begining of the animation
 | to | number | The frame defining the end of the animation
 | loop | boolean | true loop the animation, false either
 | speedRatio | number | The speed ratio of the animation in frames per second
---
