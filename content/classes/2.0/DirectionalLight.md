---
ID_PAGE: 5716
PG_TITLE: DirectionalLight
PG_VERSION: 2.0
---

A directional light is defined by a direction.

The light is emitted from everywhere with a specific direction and has an infinite range.
##new [DirectionalLight](page.php?p=5716)(name, direction, scene)


Creates a [DirectionalLight](page.php?p=5716) object


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the object
 | direction | [Vector3](page.php?p=5808) | The direction of the light
 | scene | [Scene](page.php?p=5725) | The scene to create the light into
---

##Extends [Light](page.php?p=5715)
##Members

###direction : [Vector3](page.php?p=5808)



The direction of the light


###position : [Vector3](page.php?p=5808)



The position of the light, used to calculate shadows





###transformedPosition : [Vector3](page.php?p=5808)




##Methods

###getAbsolutePosition() &rarr; [Vector3](page.php?p=5808)


###setDirectionToTarget(target) &rarr; [Vector3](page.php?p=5808)
Returns the normalized vector of the substraction between the given vector and the position of this light



####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](page.php?p=5808) | The given target
---

###computeTransformedPosition() &rarr; boolean


###transferToEffect(effect, directionUniformName) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](page.php?p=5782) | The given effect
 | directionUniformName | string | The uniform name
---
