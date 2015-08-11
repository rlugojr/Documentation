---
ID_PAGE: 24530
PG_TITLE: MirrorTexture
PG_VERSION: 1.14
---
##new [MirrorTexture](/classes/MirrorTexture)(name, size, scene, generateMipMaps)

Create a new [MirrorTexture](/classes/MirrorTexture).
A tutorial about advanced texturing can be found here : https://github.com/BabylonJS/Babylon.js/wiki/14-Advanced-Texturing
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the texture
 | size | number | Size of the texture
 | scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) which contain the texture
optional | generateMipMaps | boolean | True to generate the mip map ; Fals otherwise
---

##Extends [RenderTargetTexture](/classes/RenderTargetTexture)
##Members

###mirrorPlane : [Plane](/classes/Plane)


The plane to apply the mirror texture



##Methods

###clone() &rarr; [MirrorTexture](/classes/MirrorTexture)
Clone the mirror texture
@return [MirrorTexture](/classes/MirrorTexture) The clone of the mirror texture

