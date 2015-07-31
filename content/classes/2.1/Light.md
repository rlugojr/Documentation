---
ID_PAGE: 6652
PG_TITLE: Light
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---

Lights are used to produce the diffuse and specular color received by each pixel.

This color is then used by materials to determine the final color of every pixel.

Babylon.js allows you to create and register as many lights as you want but beware because the [StandardMaterial](page.php?p=6729) can handle only 4 simultaneous lights (the first four enabled lights of the lights list)

A tutorial about lights can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/06-Lights)
##new [Light](page.php?p=6652)(name, scene)



Creates a new [Light](page.php?p=6652) object




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the object
 | scene | [Scene](page.php?p=6662) | The scene to append the light
---

##Extends
 [Node](page.php?p=6630)
##Members

###diffuse : [Color3](page.php?p=6748)




The color of the diffuse reflection of the light



###specular : [Color3](page.php?p=6748)




The color of the specular reflection of the light



###intensity : number




Controls the global intensity of the light



###range : number






###includeOnlyWithLayerMask : number


###includedOnlyMeshes : [AbstractMesh](page.php?p=6657)[]




Holds the meshes affected by this light



###excludedMeshes : [AbstractMesh](page.php?p=6657)[]




Holds the meshes non affected by this light









###excludeWithLayerMask : number




##Methods

###getShadowGenerator() &rarr; [ShadowGenerator](page.php?p=6722)
Returns the [ShadowGenerator](page.php?p=6722) object which allows among other things, meshes to block light






###getAbsolutePosition() &rarr; [Vector3](page.php?p=6751)




###transferToEffect(effect, uniformName0, uniformName1) &rarr; void
Gives the light to position with the given effect with given position names





####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](page.php?p=6725) | The given effect
optional | uniformName0 | string | The first uniform name
optional | uniformName1 | string | The second uniform name
---

###canAffectMesh(mesh) &rarr; boolean
Tests if the given mesh is affectable by this light





####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](page.php?p=6657) | The given [Mesh](page.php?p=6659)
---

###getWorldMatrix() &rarr; [Matrix](page.php?p=6754)
Returns the world matrix






###dispose() &rarr; void

