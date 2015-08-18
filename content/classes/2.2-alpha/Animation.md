---
ID_PAGE: 25172
PG_TITLE: Animation
PG_VERSION: 2.1
TAGS:
    - Animation
---
##Description

class [Animation](/classes/2.2-alpha/Animation)



##Constructor

##new [Animation](/classes/2.2-alpha/Animation)(name, targetProperty, framePerSecond, dataType, loopMode)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | targetProperty | string | 
 | framePerSecond | number | 
 | dataType | number | 
optional | loopMode | number | 

##Members

###name : string

Name of the animation

###targetProperty : string

The property to change, for example rotate a [Mesh](/classes/2.2-alpha/Mesh) : &quot;rotation.x&quot;

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

The value affected by the animation is a [Vector3](/classes/2.2-alpha/Vector3)

###static ANIMATIONTYPE_VECTOR2 : number



###static ANIMATIONTYPE_QUATERNION : number

The value affected by the animation is a [Quaternion](/classes/2.2-alpha/Quaternion)

###static ANIMATIONTYPE_MATRIX : number

The value affected by the animation is a [Matrix](/classes/2.2-alpha/Matrix)

###static ANIMATIONTYPE_COLOR3 : number

The value affected by the animation is a [Color3](/classes/2.2-alpha/Color3)

###static ANIMATIONLOOPMODE_RELATIVE : number

The animation loops but doesn't reset values and continues animation with values of the previous ending animation

###static ANIMATIONLOOPMODE_CYCLE : number

The animation restarts with the inital values

###static ANIMATIONLOOPMODE_CONSTANT : number

The animation keeps its final value i.e stopped

##Methods

###static CreateAndStartAnimation(name, mesh, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction) &rarr; [Animatable](/classes/2.2-alpha/Animatable)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
 | targetProperty | string | 
 | framePerSecond | number | 
 | totalFrame | number | 
 | from | any | 
 | to | any | 
optional | loopMode | number | 
optional | easingFunction | [EasingFunction](/classes/2.2-alpha/EasingFunction) | 

###reset() &rarr; void


###isStopped() &rarr; boolean

Tests if the animation is stopped
###getKeys() &rarr; any[]

Returns the animation keys.
Every key represents the value of the [Animation](/classes/2.2-alpha/Animation) at that key's given time.
###getEasingFunction() &rarr; IEasingFunction


###setEasingFunction(easingFunction) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | easingFunction | [EasingFunction](/classes/2.2-alpha/EasingFunction) | 

###floatInterpolateFunction(startValue, endValue, gradient) &rarr; number

Used to interpolate (perform the transition ) between float keys

####Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | number | 
 | endValue | number | 
 | gradient | number | 

###quaternionInterpolateFunction(startValue, endValue, gradient) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Used to interpolate (perform the transition ) between [Quaternion](/classes/2.2-alpha/Quaternion) keys

####Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Quaternion](/classes/2.2-alpha/Quaternion) | 
 | endValue | [Quaternion](/classes/2.2-alpha/Quaternion) | 
 | gradient | number | 

###vector3InterpolateFunction(startValue, endValue, gradient) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Used to interpolate (perform the transition ) between [Vector3](/classes/2.2-alpha/Vector3) keys

####Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Vector3](/classes/2.2-alpha/Vector3) | 
 | endValue | [Vector3](/classes/2.2-alpha/Vector3) | 
 | gradient | number | 

###vector2InterpolateFunction(startValue, endValue, gradient) &rarr; [Vector2](/classes/2.2-alpha/Vector2)



####Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Vector2](/classes/2.2-alpha/Vector2) | 
 | endValue | [Vector2](/classes/2.2-alpha/Vector2) | 
 | gradient | number | 

###color3InterpolateFunction(startValue, endValue, gradient) &rarr; [Color3](/classes/2.2-alpha/Color3)

Used to interpolate (perform the transition ) between [Color3](/classes/2.2-alpha/Color3) keys

####Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Color3](/classes/2.2-alpha/Color3) | 
 | endValue | [Color3](/classes/2.2-alpha/Color3) | 
 | gradient | number | 

###matrixInterpolateFunction(startValue, endValue, gradient) &rarr; [Matrix](/classes/2.2-alpha/Matrix)



####Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Matrix](/classes/2.2-alpha/Matrix) | 
 | endValue | [Matrix](/classes/2.2-alpha/Matrix) | 
 | gradient | number | 

###clone() &rarr; [Animation](/classes/2.2-alpha/Animation)

Clones this animation object
###setKeys(values) &rarr; void

Adds the keys array to this [Animation](/classes/2.2-alpha/Animation) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | values | Array&lt;any&gt; | 

###animate(delay, from, to, loop, speedRatio) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | delay | number | 
 | from | number | 
 | to | number | 
 | loop | boolean | 
 | speedRatio | number | 

