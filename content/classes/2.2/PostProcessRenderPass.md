---
ID_PAGE: 25295
PG_TITLE: PostProcessRenderPass
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
##Description

class [PostProcessRenderPass](/classes/2.2/PostProcessRenderPass)



##Constructor

##new [PostProcessRenderPass](/classes/2.2/PostProcessRenderPass)(scene, name, size, renderList, beforeRender, afterRender)

Builds a new [PostProcessRenderPass](/classes/2.2/PostProcessRenderPass) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.2/Scene) | 
 | name | string | 
 | size | number | 
 | renderList | [Mesh](/classes/2.2/Mesh)[] | 
 | beforeRender | () =&gt; void | 
 | afterRender | () =&gt; void | 

##Methods

###setRenderList(renderList) &rarr; void

Updates the render list

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderList | [Mesh](/classes/2.2/Mesh)[] | 

###getRenderTexture() &rarr; [RenderTargetTexture](/classes/2.2/RenderTargetTexture)


