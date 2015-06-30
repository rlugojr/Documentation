---
ID_PAGE: 3319
PG_TITLE: Texture
PG_VERSION: 1.14
---
##new [Texture](page.php?p=3319)(url, scene, noMipmap, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer)

Create a new [Texture](page.php?p=3319).
You can apply a texture on every material, by giving an image path.
Don't forgot to check the right path of your image (relative or absolute path). About image format support, it can be JPG, PNG, JPEG, BMP, (every image format available on your browser)
A tutorial about materials and texture can be found here : https://github.com/BabylonJS/Babylon.js/wiki/04-Materials
####Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | Link of the texture
 | scene | [Scene](page.php?p=3274) | [Scene](page.php?p=3274) which contain the texture
optional | noMipmap | boolean | True to not generate mipmaps
optional | invertY | boolean | True to invert the texture on Y axis
optional | samplingMode | number | 
optional | onLoad | () =&gt; void | 
optional | onError | () =&gt; void | 
optional | buffer | any | 
optional | deleteBuffer | boolean | 
---

##Extends [BaseTexture](page.php?p=3317)
##Members

###static NEAREST_SAMPLINGMODE : number


Value : 1

###static BILINEAR_SAMPLINGMODE : number


Value : 2

###static TRILINEAR_SAMPLINGMODE : number


Value : 3

###static EXPLICIT_MODE : number


Value : 0

###static SPHERICAL_MODE : number


Value : 1

###static PLANAR_MODE : number


Value : 2

###static CUBIC_MODE : number


Value : 3

###static PROJECTION_MODE : number


Value : 4

###static SKYBOX_MODE : number


Value : 5

###static CLAMP_ADDRESSMODE : number


Value : 0

###static WRAP_ADDRESSMODE : number


Value : 1

###static MIRROR_ADDRESSMODE : number


Value 2

###url : string


URL of the texture

###uOffset : number


U offset of the texture

###vOffset : number


V offset of the texture

###uScale : number


U scale of the texture

###vScale : number


V scale of the texutre

###uAng : number


U angle of the texture

###vAng : number


V angle of the texture

###wAng : number


W angle of the texture



##Methods

###delayLoad() &rarr; void
Proxy method to delay the texture loading


###getTextureMatrix() &rarr; [Matrix](page.php?p=3329)
Get the texture matrix
@return [Matrix](page.php?p=3329) The texture matrix


###getReflectionTextureMatrix() &rarr; [Matrix](page.php?p=3329)
Get the reflection texture matrix
@return [Matrix](page.php?p=3329) The reflection texture matrix


###clone() &rarr; [Texture](page.php?p=3319)
Clone the actual texture
@return [Texture](page.php?p=3319) A clone of the texture

