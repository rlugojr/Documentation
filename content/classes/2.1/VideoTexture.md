---
ID_PAGE: 6738
PG_TITLE: VideoTexture
PG_VERSION: 2.1
---
##new [VideoTexture](page.php?p=6738)(name, urls, scene, generateMipMaps, invertY, samplingMode)



Create a new [VideoTexture](page.php?p=6738). Several videos can be used on one texture. In this case, all videos are appended.
A tutorial about video textures can be found here : https://github.com/BabylonJS/Babylon.js/wiki/14-Advanced-Texturing




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the texture
 | urls | string[] | Link to the texture
 | scene | [Scene](page.php?p=6662) | [Scene](page.php?p=6662) which contain the texture
optional | generateMipMaps | boolean | True to generate a mipmaps
optional | invertY | boolean | True to invert on Y axis
optional | samplingMode | number | 
---

##Extends [Texture](page.php?p=6733)
##Members

###video : HTMLVideoElement




The video element











##Methods

###update() &rarr; boolean

