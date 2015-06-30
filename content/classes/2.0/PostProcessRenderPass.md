---
ID_PAGE: 5855
PG_TITLE: PostProcessRenderPass
PG_VERSION: 2.0
---

A render pass is render texture that can be used in differents render effects
##new [PostProcessRenderPass](page.php?p=5855)(scene, name, size, renderList, beforeRender, afterRender)


Builds a new [PostProcessRenderPass](page.php?p=5855) object




####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=5725) | The scene linked to this renderer
 | name | string | The name of the object
 | size | number | The size of the renderer in pixels
 | renderList | [Mesh](page.php?p=5722)[] | the list of renderers
 | beforeRender | () =&gt; void | The function to run before rendering
 | afterRender | () =&gt; void | The function to run after rendering
---



##Methods

###setRenderList(renderList) &rarr; void
Updates the render list



####Parameters
 | Name | Type | Description
---|---|---|---
 | renderList | [Mesh](page.php?p=5722)[] | @param renderList
---

###getRenderTexture() &rarr; [RenderTargetTexture](page.php?p=5793)

