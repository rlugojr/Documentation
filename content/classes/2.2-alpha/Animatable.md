---
ID_PAGE: 25171
PG_TITLE: Animatable
PG_VERSION: 2.1
TAGS:
    - Animation
---
##Description

class [Animatable](/classes/2.2-alpha/Animatable)



##Constructor

##new [Animatable](/classes/2.2-alpha/Animatable)(scene, target, fromFrame, toFrame, loopAnimation, speedRatio, onAnimationEnd, animations)

Builds an [Animatable](/classes/2.2-alpha/Animatable) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
 | target | any | 
optional | fromFrame | number | 
optional | toFrame | number | 
optional | loopAnimation | boolean | 
optional | speedRatio | number | 
optional | onAnimationEnd | any | 
optional | animations | any | 

##Members

###target : any

The animated target

###fromFrame : number

The begining frame of the animation

###toFrame : number

The ending frame of the animation

###loopAnimation : boolean

default : false. Sets if the animation loops or not

###speedRatio : number

default : 1.0. The speed Ratio, lower gives a slower animation

###onAnimationEnd : any

Function to execute on animation end

###animationStarted : boolean

Tests if the animation is in started state

##Methods

###appendAnimations(target, animations) &rarr; void

Append a new animation

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | 
 | animations | [Animation](/classes/2.2-alpha/Animation)[] | 

###getAnimationByTargetProperty(property) &rarr; [Animation](/classes/2.2-alpha/Animation)

Returns animations that have to given property

####Parameters
 | Name | Type | Description
---|---|---|---
 | property | string | 

###reset() &rarr; void


###pause() &rarr; void

Pauses the animation
###restart() &rarr; void

Restarts the animation
###stop() &rarr; void


