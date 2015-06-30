---
ID_PAGE: 5795
PG_TITLE: VideoTexture
PG_VERSION: 2.0
---
##new [VideoTexture](page.php?p=5795)(name, urls, size, scene, generateMipMaps, invertY, samplingMode)


Create a new [VideoTexture](page.php?p=5795). Several videos can be used on one texture. In this case, all videos are appended.
A tutorial about video textures can be found here : https://github.com/BabylonJS/Babylon.js/wiki/14-Advanced-Texturing


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the texture
 | urls | string[] | Link to the texture
 | size | any | Size of the texture
 | scene | [Scene](page.php?p=5725) | [Scene](page.php?p=5725) which contain the texture
 | generateMipMaps | boolean | True to generate a mipmaps
 | invertY | boolean | True to invert on Y axis
optional | samplingMode | number | 
---

##Extends [Texture](page.php?p=5790)
##Members

###video : HTMLVideoElement



The video element







##Methods

###update() &rarr; boolean

