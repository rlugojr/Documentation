---
ID_PAGE: 3315
PG_TITLE: StandardMaterial
PG_VERSION: 1.14
---
##new [StandardMaterial](page.php?p=3315)(name, scene)

Create a new [StandardMaterial](page.php?p=3315).
Everything to know about material can be found here : https://github.com/BabylonJS/Babylon.js/wiki/04-Materials
And here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/01/babylon-js-unleash-the-standardmaterial-for-your-babylon-js-game.aspx
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the standardMaterial
 | scene | [Scene](page.php?p=3274) | [Scene](page.php?p=3274) which contain the standardMaterial
---

##Extends [Material](page.php?p=3312)
##Members

###diffuseTexture : [BaseTexture](page.php?p=3317)


The diffuse texture

###ambientTexture : [BaseTexture](page.php?p=3317)


The ambient texture

###opacityTexture : [BaseTexture](page.php?p=3317)


The opacity texture

###reflectionTexture : [BaseTexture](page.php?p=3317)


The reflection texture

###emissiveTexture : [BaseTexture](page.php?p=3317)


The emissive texture

###specularTexture : [BaseTexture](page.php?p=3317)


The specular texture

###bumpTexture : [BaseTexture](page.php?p=3317)


The bump texture

###ambientColor : [Color3](page.php?p=3324)


The ambient color

###diffuseColor : [Color3](page.php?p=3324)


The diffuse color

###specularColor : [Color3](page.php?p=3324)


The specular color

###specularPower : number


The specular power

###emissiveColor : [Color3](page.php?p=3324)


The emissive color

###useAlphaFromDiffuseTexture : boolean


True to use alpha from diffuse texture

Default value : false

###useSpecularOverAlpha : boolean


True to use specular over alpha

###diffuseFresnelParameters : [FresnelParameters](page.php?p=3316)


The diffuse Fresnel parameters

###opacityFresnelParameters : [FresnelParameters](page.php?p=3316)


The opacity Fresnel parameters

###reflectionFresnelParameters : [FresnelParameters](page.php?p=3316)


The reflection Fresnel parameters

###emissiveFresnelParameters : [FresnelParameters](page.php?p=3316)


The emissive Fresnel parameters

###static DiffuseTextureEnabled : boolean


Function to know if diffuse texture is enabled

@return boolean True if diffuse texture is enabled ; False if not

###static AmbientTextureEnabled : boolean


Function to know if ambient texture is enabled

@return boolean True if ambient texture is enabled ; False if not

###static OpacityTextureEnabled : boolean


Function to know if opacity texture is enabled

@return boolean True if opacity texture is enabled ; False if not

###static ReflectionTextureEnabled : boolean


Function to know if reflection texture is enabled

@return boolean True if reflection texture is enabled ; False if not

###static EmissiveTextureEnabled : boolean


Function to know if emissive texture is enabled

@return boolean True if emissive texture is enabled ; False if not

###static SpecularTextureEnabled : boolean


Function to know if specular texture is enabled

@return boolean True if specular texture is enabled ; False if not

###static BumpTextureEnabled : boolean


Function to know if bump texture is enabled

@return boolean True if bump texture is enabled ; False if not



##Methods

###needAlphaBlending() &rarr; boolean
Function to know if standard material need alpha blending
@return boolean True if standard material need alpha blending ; False if not


###needAlphaTesting() &rarr; boolean
Function to know if standard material need alpha testing
@return boolean True if standard material need alpha testing ; False if not


###getAlphaTestTexture() &rarr; [BaseTexture](page.php?p=3317)
Function to get the alpha test texture
@return [BaseTexture](page.php?p=3317) The alpha test texture


###isReady(mesh, useInstances) &rarr; boolean
Function to know if standard material is ready
@return boolean True if is ready ; False if not

####Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](page.php?p=3269) | The mesh to test
optional | useInstances | boolean | True to use instances
---

###unbind() &rarr; void
Unbind the standard material


###bindOnlyWorldMatrix(world) &rarr; void
Bind only the world matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](page.php?p=3329) | The world matrix
---

###bind(world, mesh) &rarr; void
Bind the standard material

####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](page.php?p=3329) | The world matrix
 | mesh | [Mesh](page.php?p=3271) | The mesh to bind
---

###getAnimatables() &rarr; IAnimatable[]
Get the animatables
@reutnr IAnimatables List of animatables


###dispose(forceDisposeEffect) &rarr; void
Destroy the standard material

####Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean | True to force the destroy
---

###clone(name) &rarr; [StandardMaterial](page.php?p=3315)
Clone the standard material

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the standard material
---
