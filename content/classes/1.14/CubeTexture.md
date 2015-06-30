---
ID_PAGE: 3318
PG_TITLE: CubeTexture
PG_VERSION: 1.14
---
##new [CubeTexture](page.php?p=3318)(rootUrl, scene, extensions, noMipmap)

Create a new [CubeTexture](page.php?p=3318). Used to create a new skybox.
A tutorial about cube textures  can be found here : https://github.com/BabylonJS/Babylon.js/wiki/15-Environment
####Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string | Link of the texture
 | scene | [Scene](page.php?p=3274) | [Scene](page.php?p=3274) which contain the texture
optional | extensions | string[] | The cube texture extensions. The defaults extensions are : [_px.jpg, _py.jpg, _pz.jpg, _nx.jpg, _ny.jpg, _nz.jpg]
optional | noMipmap | boolean | @param noMipmap
---

##Extends [BaseTexture](page.php?p=3317)
##Members

###url : string


The texture URL

###coordinatesMode : number


The coordinates mode



##Methods

###clone() &rarr; [CubeTexture](page.php?p=3318)
Clone the cube texture
@return [CubeTexture](page.php?p=3318) A clone of the cube texture


###delayLoad() &rarr; void
Delay the texture loading


###getReflectionTextureMatrix() &rarr; [Matrix](page.php?p=3329)
Get the reflection texture matrix
@return [Matrix](page.php?p=3329) The reflection texture matrix

