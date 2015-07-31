---
ID_PAGE: 6810
PG_TITLE: SSAORenderingPipeline
PG_VERSION: 2.1
TAGS:
    - PostProcess
    - PostProcessRenderPipeline
---
##new [SSAORenderingPipeline](page.php?p=6810)(name, scene, ratio, cameras)

@constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](page.php?p=6662) | 
 | ratio | any | 
optional | cameras | [Camera](page.php?p=6631)[] | 
---

##Extends
 [PostProcessRenderPipeline](page.php?p=6808)
##Members

###SSAOOriginalSceneColorEffect : string


The [PassPostProcess](page.php?p=6799) id in the pipeline that contains the original scene color

@type {string}

###SSAORenderEffect : string


The SSAO [PostProcess](page.php?p=6790) id in the pipeline

@type {string}

###SSAOBlurHRenderEffect : string


The horizontal blur [PostProcess](page.php?p=6790) id in the pipeline

@type {string}

###SSAOBlurVRenderEffect : string


The vertical blur [PostProcess](page.php?p=6790) id in the pipeline

@type {string}

###SSAOCombineRenderEffect : string


The [PostProcess](page.php?p=6790) id in the pipeline that combines the SSAO-Blur output with the original scene color (SSAOOriginalSceneColorEffect)

@type {string}

###totalStrength : number


The output strength of the SSAO post-process. Default value is 1.0.

@type {number}

###radius : number


The radius around the analyzed pixel used by the SSAO post-process. Default value is 0.0002

@type {number}

###area : number


Related to fallOff, used to interpolate SSAO samples (first interpolate function input) based on the occlusion difference of each pixel

Must not be equal to fallOff and superior to fallOff.

Default value is 0.0075

@type {number}

###fallOff : number


Related to area, used to interpolate SSAO samples (second interpolate function input) based on the occlusion difference of each pixel

Must not be equal to area and inferior to area.

Default value is 0.0002

@type {number}



##Methods

###getBlurHPostProcess() &rarr; [BlurPostProcess](page.php?p=6793)
Returns the horizontal blur [PostProcess](page.php?p=6790)
@return {BABYLON.BlurPostProcess} The horizontal blur post-process


###getBlurVPostProcess() &rarr; [BlurPostProcess](page.php?p=6793)
Returns the vertical blur [PostProcess](page.php?p=6790)
@return {BABYLON.BlurPostProcess} The vertical blur post-process


###dispose(disableDepthRender) &rarr; void
Removes the internal pipeline assets and detatches the pipeline from the scene cameras

####Parameters
 | Name | Type | Description
---|---|---|---
optional | disableDepthRender | boolean | 
---
