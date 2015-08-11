---
ID_PAGE: 24958
PG_TITLE: CubeTexture
PG_VERSION: 2.0
---
##new [CubeTexture](/classes/CubeTexture)(rootUrl, scene, extensions, noMipmap)



Create a new [CubeTexture](/classes/CubeTexture). Used to create a new skybox.
A tutorial about cube textures  can be found here : https://github.com/BabylonJS/Babylon.js/wiki/15-Environment




####Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string | Link of the texture
 | scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) which contain the texture
optional | extensions | string[] | The cube texture extensions. The defaults extensions are : [_px.jpg, _py.jpg, _pz.jpg, _nx.jpg, _ny.jpg, _nz.jpg]
optional | noMipmap | boolean | @param noMipmap
---

##Extends [BaseTexture](/classes/BaseTexture)
##Members

###url : string




The texture URL



###coordinatesMode : number




The coordinates mode











##Methods

###clone() &rarr; [CubeTexture](/classes/CubeTexture)
Clone the cube texture
@return [CubeTexture](/classes/CubeTexture) A clone of the cube texture






###delayLoad() &rarr; void
Delay the texture loading






###getReflectionTextureMatrix() &rarr; [Matrix](/classes/Matrix)

