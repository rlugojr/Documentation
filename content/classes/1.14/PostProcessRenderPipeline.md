---
ID_PAGE: 3360
PG_TITLE: PostProcessRenderPipeline
PG_VERSION: 1.14
---

Post Process Renders pipelines allow you to create a chain of post processes and attach it to a camera.

A render pipeline can be managed by enabling and disabling some effects and displaying a specific pass for debugging.

A tutorial about the render pipeline can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-PostProcessRenderPipeline)
##new [PostProcessRenderPipeline](page.php?p=3360)(engine, name)

Builds a [PostProcessRenderPipeline](page.php?p=3360) object
####Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](page.php?p=3247) | The used engine
 | name | string | The name of the object
---



##Methods

###addEffect(renderEffect) &rarr; void
Add the given render effect to the pipeline

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderEffect | [PostProcessRenderEffect](page.php?p=3358) | The given render effect
---
