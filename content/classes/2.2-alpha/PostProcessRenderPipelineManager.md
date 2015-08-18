---
ID_PAGE: 25299
PG_TITLE: PostProcessRenderPipelineManager
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
##Description

class [PostProcessRenderPipelineManager](/classes/2.2-alpha/PostProcessRenderPipelineManager)



##Constructor

##new [PostProcessRenderPipelineManager](/classes/2.2-alpha/PostProcessRenderPipelineManager)()

Builds a [PostProcessRenderPipelineManager](/classes/2.2-alpha/PostProcessRenderPipelineManager) object
##Methods

###addPipeline(renderPipeline) &rarr; void

Adds a pipeline to the pool

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipeline | [PostProcessRenderPipeline](/classes/2.2-alpha/PostProcessRenderPipeline) | 

###attachCamerasToRenderPipeline(renderPipelineName, cameras, unique) &rarr; any

Attach a render pipeline to a list(or unique) of cameras

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | 
 | cameras | [Camera](/classes/2.2-alpha/Camera) | 
optional | unique | boolean | 

###attachCamerasToRenderPipeline(renderPipelineName, cameras, unique) &rarr; any

Attach a render pipeline to a list(or unique) of cameras

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | 
 | cameras | [Camera](/classes/2.2-alpha/Camera)[] | 
optional | unique | boolean | 

###detachCamerasFromRenderPipeline(renderPipelineName, cameras) &rarr; any

Detach a render pipeline to a list(or unique) of cameras

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | 
 | cameras | [Camera](/classes/2.2-alpha/Camera) | 

###detachCamerasFromRenderPipeline(renderPipelineName, cameras) &rarr; any

Detach a render pipeline to a list(or unique) of cameras

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | 
 | cameras | [Camera](/classes/2.2-alpha/Camera)[] | 

###enableEffectInPipeline(renderPipelineName, renderEffectName, cameras) &rarr; any

Enable an effect in a pipeline for a list(or unique) of cameras

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | 
 | renderEffectName | string | 
 | cameras | [Camera](/classes/2.2-alpha/Camera) | 

###enableEffectInPipeline(renderPipelineName, renderEffectName, cameras) &rarr; any

Enable an effect in a pipeline for a list(or unique) of cameras

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | 
 | renderEffectName | string | 
 | cameras | [Camera](/classes/2.2-alpha/Camera)[] | 

###disableEffectInPipeline(renderPipelineName, renderEffectName, cameras) &rarr; any

Disable an effect in a pipeline for a list(or unique) of cameras

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | 
 | renderEffectName | string | 
 | cameras | [Camera](/classes/2.2-alpha/Camera) | 

###disableEffectInPipeline(renderPipelineName, renderEffectName, cameras) &rarr; any

Disable an effect in a pipeline for a list(or unique) of cameras

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | 
 | renderEffectName | string | 
 | cameras | [Camera](/classes/2.2-alpha/Camera)[] | 

###enableDisplayOnlyPassInPipeline(renderPipelineName, passName, cameras) &rarr; any

Enable displaying of a specific pass used in a specific render pipeline, for a list(or unique) of cameras

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | 
 | passName | string | 
 | cameras | [Camera](/classes/2.2-alpha/Camera) | 

###enableDisplayOnlyPassInPipeline(renderPipelineName, passName, cameras) &rarr; any

Enable displaying of a specific pass used in a specific render pipeline, for a list(or unique) of cameras

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | 
 | passName | string | 
 | cameras | [Camera](/classes/2.2-alpha/Camera)[] | 

###disableDisplayOnlyPassInPipeline(renderPipelineName, cameras) &rarr; any

Disable displaying of a specific pass used in a specific render pipeline, for a list(or unique) of cameras

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | 
 | cameras | [Camera](/classes/2.2-alpha/Camera) | 

###disableDisplayOnlyPassInPipeline(renderPipelineName, cameras) &rarr; any

Disable displaying of a specific pass used in a specific render pipeline, for a list(or unique) of cameras

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | 
 | cameras | [Camera](/classes/2.2-alpha/Camera)[] | 

###update() &rarr; void


