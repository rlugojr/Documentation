---
ID_PAGE: 24531
PG_TITLE: VideoTexture
PG_VERSION: 1.14
---
##new [VideoTexture](/classes/VideoTexture)(name, urls, size, scene, generateMipMaps, invertY, samplingMode)

Create a new [VideoTexture](/classes/VideoTexture). Several videos can be used on one texture. In this case, all videos are appended.
A tutorial about video textures can be found here : https://github.com/BabylonJS/Babylon.js/wiki/14-Advanced-Texturing
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the texture
 | urls | string[] | Link to the texture
 | size | any | Size of the texture
 | scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) which contain the texture
 | generateMipMaps | boolean | True to generate a mipmaps
 | invertY | boolean | True to invert on Y axis
optional | samplingMode | number | 
---

##Extends [Texture](/classes/Texture)
##Members

###video : HTMLVideoElement


The video element



##Methods

###update() &rarr; boolean
Update the video texture

