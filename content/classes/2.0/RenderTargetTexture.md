---
ID_PAGE: 5793
PG_TITLE: RenderTargetTexture
PG_VERSION: 2.0
---
##new [RenderTargetTexture](page.php?p=5793)(name, size, scene, generateMipMaps, doNotChangeAspectRatio, type)


Create a new [MirrorTexture](page.php?p=5794).
A tutorial about advanced texturing can be found here : https://github.com/BabylonJS/Babylon.js/wiki/14-Advanced-Texturing


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the texture
 | size | any | Size of the texture
 | scene | [Scene](page.php?p=5725) | [Scene](page.php?p=5725) which contain the texture
optional | generateMipMaps | boolean | True to generate a mipmap
optional | doNotChangeAspectRatio | boolean | 
optional | type | number | 
---

##Extends [Texture](page.php?p=5790)
##Members

###renderList : [AbstractMesh](page.php?p=5720)[]



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


###activeCamera : [Camera](page.php?p=5702)



The active camera


###customRenderFunction : (opaqueSubMeshes: SmartArray&lt;SubMesh&gt;, transparentSubMeshes: SmartArray&lt;SubMesh&gt;, alphaTestSubMeshes: SmartArray&lt;SubMesh&gt;, beforeTransparents?: () =&gt; void) =&gt; void



Custom render function

@param opaqueSubMeshes

@param transparentSubMeshes

@param alphaTestSubMeshes

@param beforeTransparents


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
---

###resize(size, generateMipMaps) &rarr; void
Resize the mirror texture



####Parameters
 | Name | Type | Description
---|---|---|---
 | size | any | The new size for the texture
optional | generateMipMaps | boolean | True to generate the mipmaps
---

###render(useCameraPostProcess) &rarr; void
Render the mirror texture



####Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean | True to use the camera post process
---

###clone() &rarr; [RenderTargetTexture](page.php?p=5793)

