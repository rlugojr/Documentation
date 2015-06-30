---
ID_PAGE: 5786
PG_TITLE: StandardMaterial
PG_VERSION: 2.0
---
##new [StandardMaterial](page.php?p=5786)(name, scene)


Create a new [StandardMaterial](page.php?p=5786).
Everything to know about material can be found here : https://github.com/BabylonJS/Babylon.js/wiki/04-Materials
And here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/01/babylon-js-unleash-the-standardmaterial-for-your-babylon-js-game.aspx


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the standardMaterial
 | scene | [Scene](page.php?p=5725) | [Scene](page.php?p=5725) which contain the standardMaterial
---

##Extends [Material](page.php?p=5783)
##Members

###diffuseTexture : [BaseTexture](page.php?p=5788)



The diffuse texture


###ambientTexture : [BaseTexture](page.php?p=5788)



The ambient texture


###opacityTexture : [BaseTexture](page.php?p=5788)



The opacity texture


###reflectionTexture : [BaseTexture](page.php?p=5788)



The reflection texture


###emissiveTexture : [BaseTexture](page.php?p=5788)



The emissive texture


###specularTexture : [BaseTexture](page.php?p=5788)



The specular texture


###bumpTexture : [BaseTexture](page.php?p=5788)



The bump texture


###ambientColor : [Color3](page.php?p=5805)



The ambient color


###diffuseColor : [Color3](page.php?p=5805)



The diffuse color


###specularColor : [Color3](page.php?p=5805)



The specular color


###specularPower : number



The specular power


###emissiveColor : [Color3](page.php?p=5805)



The emissive color


###useAlphaFromDiffuseTexture : boolean



True to use alpha from diffuse texture

Default value : false


###useSpecularOverAlpha : boolean



True to use specular over alpha


###fogEnabled : boolean


###diffuseFresnelParameters : [FresnelParameters](page.php?p=5787)



The diffuse Fresnel parameters


###opacityFresnelParameters : [FresnelParameters](page.php?p=5787)



The opacity Fresnel parameters


###reflectionFresnelParameters : [FresnelParameters](page.php?p=5787)



The reflection Fresnel parameters


###emissiveFresnelParameters : [FresnelParameters](page.php?p=5787)



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





###static FresnelEnabled : boolean




##Methods

###needAlphaBlending() &rarr; boolean
Function to know if standard material need alpha blending
@return boolean True if standard material need alpha blending ; False if not




###needAlphaTesting() &rarr; boolean
Function to know if standard material need alpha testing
@return boolean True if standard material need alpha testing ; False if not




###getAlphaTestTexture() &rarr; [BaseTexture](page.php?p=5788)
Function to get the alpha test texture
@return [BaseTexture](page.php?p=5788) The alpha test texture




###isReady(mesh, useInstances) &rarr; boolean
Function to know if standard material is ready
@return boolean True if is ready ; False if not



####Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](page.php?p=5720) | The mesh to test
optional | useInstances | boolean | True to use instances
---

###unbind() &rarr; void
Unbind the standard material




###bindOnlyWorldMatrix(world) &rarr; void
Bind only the world matrix



####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](page.php?p=5811) | The world matrix
---

###bind(world, mesh) &rarr; void
Bind the standard material



####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](page.php?p=5811) | The world matrix
 | mesh | [Mesh](page.php?p=5722) | The mesh to bind
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

###clone(name) &rarr; [StandardMaterial](page.php?p=5786)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the standard material
---
