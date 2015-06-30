---
ID_PAGE: 5718
PG_TITLE: PointLight
PG_VERSION: 2.0
---

A point light is a light defined by an unique point in world space.

The light is emitted in every direction from this point. A good example of a point light is the sun.

A tutorial about lights can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/06-Lights)
##new [PointLight](page.php?p=5718)(name, position, scene)


Creates a new [PointLight](page.php?p=5718) object


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the object
 | position | [Vector3](page.php?p=5808) | The position of the light in the scene
 | scene | [Scene](page.php?p=5725) | The scene to create the light into
---

##Extends [Light](page.php?p=5715)
##Members

###position : [Vector3](page.php?p=5808)



The position of the emitting point







##Methods

###getAbsolutePosition() &rarr; [Vector3](page.php?p=5808)


###transferToEffect(effect, positionUniformName) &rarr; void
Gives the light to position with the given effect with given position name



####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](page.php?p=5782) | The given effect
 | positionUniformName | string | The uniform name
---

###getShadowGenerator() &rarr; [ShadowGenerator](page.php?p=5779)

