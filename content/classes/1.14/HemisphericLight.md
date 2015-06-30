---
ID_PAGE: 3266
PG_TITLE: HemisphericLight
PG_VERSION: 1.14
---

Hemispheric light represents a simple and easy way to simulate realistic ambient light.

An hemispheric light is defined by a direction to the sky and by 3 colors: one for the diffuse (the sky color), one for the ground (the color when the pixel is not towards the sky) and one for the specular.

A tutorial about lights can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/06-Lights)
##new [HemisphericLight](page.php?p=3266)(name, direction, scene)

Creates a new [HemisphericLight](page.php?p=3266) object
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The namme of the light
 | direction | [Vector3](page.php?p=3327) | The direction of the light
 | scene | [Scene](page.php?p=3274) | The scene to create the light into
---

##Extends [Light](page.php?p=3264)
##Members

###direction : [Vector3](page.php?p=3327)


The direction of the light

###groundColor : [Color3](page.php?p=3324)


The ground color



##Methods

###setDirectionToTarget(target) &rarr; [Vector3](page.php?p=3327)
Sets the direction of the light using the given target

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](page.php?p=3327) | The given target to lighten
---

###getShadowGenerator() &rarr; [ShadowGenerator](page.php?p=3308)
Returns null


###transferToEffect(effect, directionUniformName, groundColorUniformName) &rarr; void
Gives the light to position with the given effect with given position name

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](page.php?p=3311) | The given effect
 | directionUniformName | string | The direction uniform name
 | groundColorUniformName | string | The groundColor uniform name
---
