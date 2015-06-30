---
ID_PAGE: 5857
PG_TITLE: SSAORenderingPipeline
PG_VERSION: 2.0
---
##new [SSAORenderingPipeline](page.php?p=5857)(name, scene, ratio, cameras)

@constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](page.php?p=5725) | 
optional | ratio | number | 
optional | cameras | [Camera](page.php?p=5702)[] | 
---

##Extends [PostProcessRenderPipeline](page.php?p=5856)
##Members

###SSAOOriginalSceneColorEffect : string


The [PassPostProcess](page.php?p=5850) id in the pipeline that contains the original scene color

@type {string}

###SSAORenderEffect : string


The SSAO [PostProcess](page.php?p=5841) id in the pipeline

@type {string}

###SSAOBlurHRenderEffect : string


The horizontal blur [PostProcess](page.php?p=5841) id in the pipeline

@type {string}

###SSAOBlurVRenderEffect : string


The vertical blur [PostProcess](page.php?p=5841) id in the pipeline

@type {string}

###SSAOCombineRenderEffect : string


The [PostProcess](page.php?p=5841) id in the pipeline that combines the SSAO-Blur output with the original scene color (SSAOOriginalSceneColorEffect)

@type {string}



##Methods

###getBlurHPostProcess() &rarr; [BlurPostProcess](page.php?p=5844)
Returns the horizontal blur [PostProcess](page.php?p=5841)
@return {BABYLON.BlurPostProcess} The horizontal blur post-process


###getBlurVPostProcess() &rarr; [BlurPostProcess](page.php?p=5844)
Returns the vertical blur [PostProcess](page.php?p=5841)
@return {BABYLON.BlurPostProcess} The vertical blur post-process


###dispose(disableDepthRender) &rarr; void
Removes the internal pipeline assets and detatches the pipeline from the scene cameras

####Parameters
 | Name | Type | Description
---|---|---|---
optional | disableDepthRender | boolean | 
---
