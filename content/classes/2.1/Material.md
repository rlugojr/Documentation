---
ID_PAGE: 6726
PG_TITLE: Material
PG_VERSION: 2.1
---
##new [Material](page.php?p=6726)(name, scene, doNotAdd)



Create a new [Material](page.php?p=6726).
Everything to know about material can be found here : https://github.com/BabylonJS/Babylon.js/wiki/04-Materials
And here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/01/babylon-js-unleash-the-standardmaterial-for-your-babylon-js-game.aspx




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the material
 | scene | [Scene](page.php?p=6662) | 
optional | doNotAdd | boolean | Not add the material
---

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



###onCompiled : (effect: [Effect](page.php?p=6725)) =&gt; void




Callback function on compiled



###onError : (effect: [Effect](page.php?p=6725), errors: string) =&gt; void




Callback function on error



###onDispose : () =&gt; void




Callback function on dispose



###onBind : (material: [Material](page.php?p=6726), mesh: [Mesh](page.php?p=6659)) =&gt; void




###getRenderTargetTextures : () =&gt; SmartArray&lt;RenderTargetTexture&gt;




Get the render target textures






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
optional | mesh | [AbstractMesh](page.php?p=6657) | The mesh to test
optional | useInstances | boolean | 
---

###getEffect() &rarr; [Effect](page.php?p=6725)
Get effect of the material
@return [Effect](page.php?p=6725) The effect






###getScene() &rarr; [Scene](page.php?p=6662)
Get the scene which contain the material
@return [Scene](page.php?p=6662) The scene which contain the material






###needAlphaBlending() &rarr; boolean
Function to know if alpha is necessary (1.0 = no transparency)
@return boolean True if alpha blending is needed ; False if not






###needAlphaTesting() &rarr; boolean
Function to know if alpha testing is necessary






###getAlphaTestTexture() &rarr; [BaseTexture](page.php?p=6731)
Function to get the alpha test texture
@return [BaseTexture](page.php?p=6731) The alpha test texture






###trackCreation(onCompiled, onError) &rarr; void
Track the creation





####Parameters
 | Name | Type | Description
---|---|---|---
 | onCompiled | (effect: [Effect](page.php?p=6725)) =&gt; void | Callback function called on compiled (effect on compiled)
 | onError | (effect: [Effect](page.php?p=6725), errors: string) =&gt; void | Callback function called on error (effect on error, error string)
---

###bind(world, mesh) &rarr; void
Function to bind the material





####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](page.php?p=6754) | The world matrix
optional | mesh | [Mesh](page.php?p=6659) | The mesh to bind
---

###bindOnlyWorldMatrix(world) &rarr; void
Function to bind only the world matrix





####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](page.php?p=6754) | The world matrix
---

###unbind() &rarr; void
Function to unbind






###dispose(forceDisposeEffect) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean | True to force the dispose
---
