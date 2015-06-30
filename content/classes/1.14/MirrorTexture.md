---
ID_PAGE: 3322
PG_TITLE: MirrorTexture
PG_VERSION: 1.14
---
##new [MirrorTexture](page.php?p=3322)(name, size, scene, generateMipMaps)

Create a new [MirrorTexture](page.php?p=3322).
A tutorial about advanced texturing can be found here : https://github.com/BabylonJS/Babylon.js/wiki/14-Advanced-Texturing
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the texture
 | size | number | Size of the texture
 | scene | [Scene](page.php?p=3274) | [Scene](page.php?p=3274) which contain the texture
optional | generateMipMaps | boolean | True to generate the mip map ; Fals otherwise
---

##Extends [RenderTargetTexture](page.php?p=3321)
##Members

###mirrorPlane : [Plane](page.php?p=3330)


The plane to apply the mirror texture



##Methods

###clone() &rarr; [MirrorTexture](page.php?p=3322)
Clone the mirror texture
@return [MirrorTexture](page.php?p=3322) The clone of the mirror texture

