---
ID_PAGE: 25026
PG_TITLE: SSAORenderingPipeline
PG_VERSION: 2.0
---
Builtin rendering pipeline applying the ambient occlusion of a given scene
&nbsp;using the screen space
##new [SSAORenderingPipeline](/classes/SSAORenderingPipeline)(name, scene, ratio, cameras)

@constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The rendering pipeline name
 | scene | [Scene](/classes/Scene) | The scene linked to this pipeline
optional | ratio | number | The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
optional | cameras | [Camera](/classes/Camera)[] | The array of cameras that the rendering pipeline will be attached to
---

##Extends [PostProcessRenderPipeline](/classes/PostProcessRenderPipeline)
##Members

###SSAOOriginalSceneColorEffect : string


The [PassPostProcess](/classes/PassPostProcess) id in the pipeline that contains the original scene color

@type {string}

###SSAORenderEffect : string


The SSAO [PostProcess](/classes/PostProcess) id in the pipeline

@type {string}

###SSAOBlurHRenderEffect : string


The horizontal blur [PostProcess](/classes/PostProcess) id in the pipeline

@type {string}

###SSAOBlurVRenderEffect : string


The vertical blur [PostProcess](/classes/PostProcess) id in the pipeline

@type {string}

###SSAOCombineRenderEffect : string


The [PostProcess](/classes/PostProcess) id in the pipeline that combines the SSAO-Blur output with the original scene color (SSAOOriginalSceneColorEffect)

@type {string}



##Methods

###getBlurHPostProcess() &rarr; [BlurPostProcess](/classes/BlurPostProcess)
Returns the horizontal blur [PostProcess](/classes/PostProcess)
@return {BABYLON.BlurPostProcess} The horizontal blur post-process


###getBlurVPostProcess() &rarr; [BlurPostProcess](/classes/BlurPostProcess)
Returns the vertical blur [PostProcess](/classes/PostProcess)
@return {BABYLON.BlurPostProcess} The vertical blur post-process


###dispose(disableDepthRender) &rarr; void
Removes the internal pipeline assets and detatches the pipeline from the scene cameras

####Parameters
 | Name | Type | Description
---|---|---|---
optional | disableDepthRender | boolean | 
---
