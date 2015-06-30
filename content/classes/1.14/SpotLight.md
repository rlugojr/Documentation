---
ID_PAGE: 3268
PG_TITLE: SpotLight
PG_VERSION: 1.14
---

A spot light is defined by a position, a direction, an angle and an exponent.

These values define a cone of light starting from the position toward the direction.

A tutorial about lights can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/06-Lights)
##new [SpotLight](page.php?p=3268)(name, position, direction, angle, exponent, scene)

Creates a new [SpotLight](page.php?p=3268) object
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the object
 | position | [Vector3](page.php?p=3327) | The position of the light in the scene
 | direction | [Vector3](page.php?p=3327) | The initial direction of the light
 | angle | number | The initial angle of the light
 | exponent | number | The initial exponent of the light
 | scene | [Scene](page.php?p=3274) | The scene to create the light into
---

##Extends [Light](page.php?p=3264)
##Members

###position : [Vector3](page.php?p=3327)


The position of the emitting point

###direction : [Vector3](page.php?p=3327)


The direction of the light

###angle : number


The size of the spotlight beam

###exponent : number


The speed of the decay of the light with distance



##Methods

###setDirectionToTarget(target) &rarr; [Vector3](page.php?p=3327)
Changes the light diretion to point to the given point

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](page.php?p=3327) | The given point
---

###transferToEffect(effect, positionUniformName, directionUniformName) &rarr; void
Gives the light to position with the given effect with given position name

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](page.php?p=3311) | The given effect
 | positionUniformName | string | The uniform name
 | directionUniformName | string | The direction of the uniform
---
