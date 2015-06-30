---
ID_PAGE: 3359
PG_TITLE: PostProcessRenderPass
PG_VERSION: 1.14
---

A render pass is render texture that can be used in differents render effects
##new [PostProcessRenderPass](page.php?p=3359)(scene, name, size, renderList, beforeRender, afterRender)

Builds a new [PostProcessRenderPass](page.php?p=3359) object
####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=3274) | The scene linked to this renderer
 | name | string | The name of the object
 | size | number | The size of the renderer in pixels
 | renderList | [Mesh](page.php?p=3271)[] | the list of renderers
 | beforeRender | () =&gt; void | The function to run before rendering
 | afterRender | () =&gt; void | The function to run after rendering
---



##Methods

###setRenderList(renderList) &rarr; void
Updates the render list

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderList | [Mesh](page.php?p=3271)[] | @param renderList
---

###getRenderTexture() &rarr; [RenderTargetTexture](page.php?p=3321)
Returns the render texture object

