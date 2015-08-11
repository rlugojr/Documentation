---
ID_PAGE: 24964
PG_TITLE: VideoTexture
PG_VERSION: 2.0
---
##new [VideoTexture](/classes/VideoTexture)(name, urls, size, scene, generateMipMaps, invertY, samplingMode)



Create a new [VideoTexture](/classes/VideoTexture). Several videos can be used on one texture. In this case, all videos are appended.
A tutorial about video textures can be found here : http://doc.babylonjs.com/page.php?p=22161




####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | Name of the texture
&nbsp;| urls | string[] | Link to the texture
&nbsp;| size | any | Size of the texture
&nbsp;| scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) which contain the texture
&nbsp;| generateMipMaps | boolean | True to generate a mipmaps
&nbsp;| invertY | boolean | True to invert on Y axis
optional | samplingMode | number | 
---

##Extends
&nbsp;[Texture](/classes/Texture)
##Members

###video : HTMLVideoElement




The video element











##Methods

###update() &rarr; boolean

