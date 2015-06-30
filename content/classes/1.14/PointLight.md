---
ID_PAGE: 3267
PG_TITLE: PointLight
PG_VERSION: 1.14
---

A point light is a light defined by an unique point in world space.

The light is emitted in every direction from this point. A good example of a point light is the sun.

A tutorial about lights can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/06-Lights)
##new [PointLight](page.php?p=3267)(name, position, scene)

Creates a new [PointLight](page.php?p=3267) object
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the object
 | position | [Vector3](page.php?p=3327) | The position of the light in the scene
 | scene | [Scene](page.php?p=3274) | The scene to create the light into
---

##Extends [Light](page.php?p=3264)
##Members

###position : [Vector3](page.php?p=3327)


The position of the emitting point



##Methods

###transferToEffect(effect, positionUniformName) &rarr; void
Gives the light to position with the given effect with given position name

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](page.php?p=3311) | The given effect
 | positionUniformName | string | The uniform name
---

###getShadowGenerator() &rarr; [ShadowGenerator](page.php?p=3308)
Returns null

