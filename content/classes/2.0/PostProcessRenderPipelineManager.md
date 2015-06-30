---
ID_PAGE: 5858
PG_TITLE: PostProcessRenderPipelineManager
PG_VERSION: 2.0
---

Managing all pipelines, allow you to enable or disable an effect, displaying a pass of post process for debugging.

A tutorial about the render pipeline can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-PostProcessRenderPipeline)
##new [PostProcessRenderPipelineManager](page.php?p=5858)()


Builds a [PostProcessRenderPipelineManager](page.php?p=5858) object







##Methods

###addPipeline(renderPipeline) &rarr; void
Adds a pipeline to the pool



####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipeline | [PostProcessRenderPipeline](page.php?p=5856) | The given pipeline
---

###attachCamerasToRenderPipeline(renderPipelineName, cameras, unique) &rarr; any
Attach a render pipeline to a list(or unique) of cameras



####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | The render pipeline name
 | cameras | [Camera](page.php?p=5702)[] | The given camera or an array of cameras
optional | unique | boolean | @param unique
---

###detachCamerasFromRenderPipeline(renderPipelineName, cameras) &rarr; any
Detach a render pipeline to a list(or unique) of cameras



####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | The render pipeline name
 | cameras | [Camera](page.php?p=5702)[] | The given camera or an array of cameras
---

###enableEffectInPipeline(renderPipelineName, renderEffectName, cameras) &rarr; any
Enable an effect in a pipeline for a list(or unique) of cameras



####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | The render pipeline name
 | renderEffectName | string | The render effect name
 | cameras | [Camera](page.php?p=5702)[] | The given camera or an array of cameras
---

###disableEffectInPipeline(renderPipelineName, renderEffectName, cameras) &rarr; any
Disable an effect in a pipeline for a list(or unique) of cameras



####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | The render pipeline name
 | renderEffectName | string | The render effect name
 | cameras | [Camera](page.php?p=5702)[] | The given camera or an array of cameras
---

###enableDisplayOnlyPassInPipeline(renderPipelineName, passName, cameras) &rarr; any
Enable displaying of a specific pass used in a specific render pipeline, for a list(or unique) of cameras



####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | The render pipeline name
 | passName | string | The pass name
 | cameras | [Camera](page.php?p=5702)[] | The given camera or an array of cameras
---

###disableDisplayOnlyPassInPipeline(renderPipelineName, cameras) &rarr; any
Disable displaying of a specific pass used in a specific render pipeline, for a list(or unique) of cameras



####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string | The render pipeline name
 | cameras | [Camera](page.php?p=5702)[] | The given camera or an array of cameras
---

###update() &rarr; void

