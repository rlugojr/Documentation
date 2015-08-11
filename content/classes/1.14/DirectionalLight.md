---
ID_PAGE: 24473
PG_TITLE: DirectionalLight
PG_VERSION: 1.14
---

A directional light is defined by a direction.

The light is emitted from everywhere with a specific direction and has an infinite range.
##new [DirectionalLight](/classes/DirectionalLight)(name, direction, scene)

Creates a [DirectionalLight](/classes/DirectionalLight) object
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the object
 | direction | [Vector3](/classes/Vector3) | The direction of the light
 | scene | [Scene](/classes/Scene) | The scene to create the light into
---

##Extends [Light](/classes/Light)
##Members

###direction : [Vector3](/classes/Vector3)


The direction of the light

###position : [Vector3](/classes/Vector3)


The position of the light, used to calculate shadows



##Methods

###setDirectionToTarget(target) &rarr; [Vector3](/classes/Vector3)
Returns the normalized vector of the substraction between the given vector and the position of this light

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/Vector3) | The given target
---

###transferToEffect(effect, directionUniformName) &rarr; void
Gives the light to position with the given effect with given position name

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/Effect) | The given effect
 | directionUniformName | string | The uniform name
---
