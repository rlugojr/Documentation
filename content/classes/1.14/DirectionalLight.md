---
ID_PAGE: 3265
PG_TITLE: DirectionalLight
PG_VERSION: 1.14
---

A directional light is defined by a direction.

The light is emitted from everywhere with a specific direction and has an infinite range.
##new [DirectionalLight](page.php?p=3265)(name, direction, scene)

Creates a [DirectionalLight](page.php?p=3265) object
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the object
 | direction | [Vector3](page.php?p=3327) | The direction of the light
 | scene | [Scene](page.php?p=3274) | The scene to create the light into
---

##Extends [Light](page.php?p=3264)
##Members

###direction : [Vector3](page.php?p=3327)


The direction of the light

###position : [Vector3](page.php?p=3327)


The position of the light, used to calculate shadows



##Methods

###setDirectionToTarget(target) &rarr; [Vector3](page.php?p=3327)
Returns the normalized vector of the substraction between the given vector and the position of this light

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](page.php?p=3327) | The given target
---

###transferToEffect(effect, directionUniformName) &rarr; void
Gives the light to position with the given effect with given position name

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](page.php?p=3311) | The given effect
 | directionUniformName | string | The uniform name
---
