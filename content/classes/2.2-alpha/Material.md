---
ID_PAGE: 25214
PG_TITLE: Material
PG_VERSION: 2.1
TAGS:
    - Material
---
##Description

class [Material](/classes/2.2-alpha/Material)



##Constructor

##new [Material](/classes/2.2-alpha/Material)(name, scene, doNotAdd)

Create a new [Material](/classes/2.2-alpha/Material).
Everything to know about material can be found here : https://github.com/BabylonJS/Babylon.js/wiki/04-Materials
And here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/01/babylon-js-unleash-the-standardmaterial-for-your-babylon-js-game.aspx

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | doNotAdd | boolean | 

##Members

###name : string

Name of the material

###static TriangleFillMode : number



###static WireFrameFillMode : number



###static PointFillMode : number



###id : string

ID of the material

###checkReadyOnEveryCall : boolean

True to check if the material is ready on every call

###checkReadyOnlyOnce : boolean

True to check if the material is ready only once

###state : string

State of the material

###alpha : number

Alpha of the material

###backFaceCulling : boolean

True to not render material on back face

Default value : true

###onCompiled : (effect: [Effect](/classes/2.2-alpha/Effect)) =&gt; void

Callback function on compiled

###onError : (effect: [Effect](/classes/2.2-alpha/Effect), errors: string) =&gt; void

Callback function on error

###onDispose : () =&gt; void

Callback function on dispose

###onBind : (material: [Material](/classes/2.2-alpha/Material), mesh: [Mesh](/classes/2.2-alpha/Mesh)) =&gt; void



###getRenderTargetTextures : () =&gt; [SmartArray](/classes/2.2-alpha/SmartArray)&lt;[RenderTargetTexture](/classes/2.2-alpha/RenderTargetTexture)&gt;

Get the render target textures

###alphaMode : number



###disableDepthWrite : boolean



###pointSize : number



###zOffset : number



###wireframe : boolean

True if this material should be rendered in wireframe ; False otherwise

Default value : False

###pointsCloud : boolean



###fillMode : number



##Methods

###isReady(mesh, useInstances) &rarr; boolean

Function to know if material is ready
@return boolean True if ready ; False if not

####Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
optional | useInstances | boolean | 

###getEffect() &rarr; [Effect](/classes/2.2-alpha/Effect)

Get effect of the material
@return [Effect](/classes/2.2-alpha/Effect) The effect
###getScene() &rarr; [Scene](/classes/2.2-alpha/Scene)

Get the scene which contain the material
@return [Scene](/classes/2.2-alpha/Scene) The scene which contain the material
###needAlphaBlending() &rarr; boolean

Function to know if alpha is necessary (1.0 = no transparency)
@return boolean True if alpha blending is needed ; False if not
###needAlphaTesting() &rarr; boolean

Function to know if alpha testing is necessary
###getAlphaTestTexture() &rarr; [BaseTexture](/classes/2.2-alpha/BaseTexture)

Function to get the alpha test texture
@return [BaseTexture](/classes/2.2-alpha/BaseTexture) The alpha test texture
###trackCreation(onCompiled, onError) &rarr; void

Track the creation

####Parameters
 | Name | Type | Description
---|---|---|---
 | onCompiled | (effect: [Effect](/classes/2.2-alpha/Effect)) =&gt; void | 
 | onError | (effect: [Effect](/classes/2.2-alpha/Effect), errors: string) =&gt; void | 

###bind(world, mesh) &rarr; void

Function to bind the material

####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.2-alpha/Matrix) | 
optional | mesh | [Mesh](/classes/2.2-alpha/Mesh) | 

###bindOnlyWorldMatrix(world) &rarr; void

Function to bind only the world matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.2-alpha/Matrix) | 

###unbind() &rarr; void

Function to unbind
###clone(name) &rarr; [Material](/classes/2.2-alpha/Material)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

###dispose(forceDisposeEffect) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean | 

