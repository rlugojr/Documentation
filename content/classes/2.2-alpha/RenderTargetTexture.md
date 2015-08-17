---
ID_PAGE: 25224
PG_TITLE: RenderTargetTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
    - TargetTexture
---
##Description

class [RenderTargetTexture](/classes/2.2-alpha/RenderTargetTexture) extends [Texture](/classes/2.2-alpha/Texture)



##Constructor

##new [RenderTargetTexture](/classes/2.2-alpha/RenderTargetTexture)(name, size, scene, generateMipMaps, doNotChangeAspectRatio, type)

Create a new [MirrorTexture](/classes/2.2-alpha/MirrorTexture).
A tutorial about advanced texturing can be found here : https://github.com/BabylonJS/Babylon.js/wiki/14-Advanced-Texturing

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | size | any | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | generateMipMaps | boolean | 
optional | doNotChangeAspectRatio | boolean | 
optional | type | number | 

##Members

###renderList : [AbstractMesh](/classes/2.2-alpha/AbstractMesh)[]

The render list

###renderParticles : boolean

True to render particles ; False otherwise

###renderSprites : boolean

True to render sprites ; False otherwise

###coordinatesMode : number

The coordinates mode

###onBeforeRender : () =&gt; void

Callback function before render

###onAfterRender : () =&gt; void

Callback function after render

###onAfterUnbind : () =&gt; void



###onClear : (engine: [Engine](/classes/2.2-alpha/Engine)) =&gt; void



###activeCamera : [Camera](/classes/2.2-alpha/Camera)

The active camera

###customRenderFunction : (opaqueSubMeshes: [SmartArray](/classes/2.2-alpha/SmartArray)&lt;[SubMesh](/classes/2.2-alpha/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/2.2-alpha/SmartArray)&lt;[SubMesh](/classes/2.2-alpha/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/2.2-alpha/SmartArray)&lt;[SubMesh](/classes/2.2-alpha/SubMesh)&gt;, beforeTransparents: () =&gt; void) =&gt; void



###refreshRate : number

The rate of refresh

###canRescale : boolean



##Methods

###resetRefreshCounter() &rarr; void

Reset the refresh counter.
###isReady() &rarr; boolean


###getRenderSize() &rarr; number

Get the render size
@return number The render size
###scale(ratio) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | ratio | number | 

###resize(size, generateMipMaps) &rarr; void

Resize the mirror texture

####Parameters
 | Name | Type | Description
---|---|---|---
 | size | any | 
optional | generateMipMaps | boolean | 

###render(useCameraPostProcess, dumpForDebug) &rarr; void

Render the mirror texture

####Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean | 
optional | dumpForDebug | boolean | 

###clone() &rarr; [RenderTargetTexture](/classes/2.2-alpha/RenderTargetTexture)


