---
ID_PAGE: 25226
PG_TITLE: VideoTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
##Description

class [VideoTexture](/classes/2.2-alpha/VideoTexture) extends [Texture](/classes/2.2-alpha/Texture)



##Constructor

##new [VideoTexture](/classes/2.2-alpha/VideoTexture)(name, urls, scene, generateMipMaps, invertY, samplingMode)

Create a new [VideoTexture](/classes/2.2-alpha/VideoTexture). Several videos can be used on one texture. In this case, all videos are appended.
A tutorial about video textures can be found here : http://doc.babylonjs.com/page.php?p=22161

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | urls | string[] | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | generateMipMaps | boolean | 
optional | invertY | boolean | 
optional | samplingMode | number | 

##Members

###video : HTMLVideoElement

The video element

##Methods

###update() &rarr; boolean


