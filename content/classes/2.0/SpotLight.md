---
ID_PAGE: 5719
PG_TITLE: SpotLight
PG_VERSION: 2.0
---

A spot light is defined by a position, a direction, an angle and an exponent.

These values define a cone of light starting from the position toward the direction.

A tutorial about lights can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/06-Lights)
##new [SpotLight](page.php?p=5719)(name, position, direction, angle, exponent, scene)


Creates a new [SpotLight](page.php?p=5719) object


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the object
 | position | [Vector3](page.php?p=5808) | The position of the light in the scene
 | direction | [Vector3](page.php?p=5808) | The initial direction of the light
 | angle | number | The initial angle of the light
 | exponent | number | The initial exponent of the light
 | scene | [Scene](page.php?p=5725) | The scene to create the light into
---

##Extends [Light](page.php?p=5715)
##Members

###position : [Vector3](page.php?p=5808)



The position of the emitting point


###direction : [Vector3](page.php?p=5808)



The direction of the light


###angle : number



The size of the spotlight beam


###exponent : number



The speed of the decay of the light with distance





###transformedPosition : [Vector3](page.php?p=5808)




##Methods

###getAbsolutePosition() &rarr; [Vector3](page.php?p=5808)


###setDirectionToTarget(target) &rarr; [Vector3](page.php?p=5808)
Changes the light diretion to point to the given point



####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](page.php?p=5808) | The given point
---

###computeTransformedPosition() &rarr; boolean


###transferToEffect(effect, positionUniformName, directionUniformName) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](page.php?p=5782) | The given effect
 | positionUniformName | string | The uniform name
 | directionUniformName | string | The direction of the uniform
---
