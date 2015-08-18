---
ID_PAGE: 25298
PG_TITLE: SSAORenderingPipeline
PG_VERSION: 2.1
TAGS:
    - PostProcess
    - PostProcessRenderPipeline
---
##Description

class [SSAORenderingPipeline](/classes/2.2-alpha/SSAORenderingPipeline) extends [PostProcessRenderPipeline](/classes/2.2-alpha/PostProcessRenderPipeline)



##Constructor

##new [SSAORenderingPipeline](/classes/2.2-alpha/SSAORenderingPipeline)(name, scene, ratio, cameras)

@constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
 | ratio | any | 
optional | cameras | [Camera](/classes/2.2-alpha/Camera)[] | 

##Members

###SSAOOriginalSceneColorEffect : string

The [PassPostProcess](/classes/2.2-alpha/PassPostProcess) id in the pipeline that contains the original scene color

@type {string}

###SSAORenderEffect : string

The SSAO [PostProcess](/classes/2.2-alpha/PostProcess) id in the pipeline

@type {string}

###SSAOBlurHRenderEffect : string

The horizontal blur [PostProcess](/classes/2.2-alpha/PostProcess) id in the pipeline

@type {string}

###SSAOBlurVRenderEffect : string

The vertical blur [PostProcess](/classes/2.2-alpha/PostProcess) id in the pipeline

@type {string}

###SSAOCombineRenderEffect : string

The [PostProcess](/classes/2.2-alpha/PostProcess) id in the pipeline that combines the SSAO-Blur output with the original scene color (SSAOOriginalSceneColorEffect)

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

###getBlurHPostProcess() &rarr; [BlurPostProcess](/classes/2.2-alpha/BlurPostProcess)

Returns the horizontal blur [PostProcess](/classes/2.2-alpha/PostProcess)

@return {BABYLON.[BlurPostProcess](/classes/2.2-alpha/BlurPostProcess)} The horizontal blur post-process
###getBlurVPostProcess() &rarr; [BlurPostProcess](/classes/2.2-alpha/BlurPostProcess)

Returns the vertical blur [PostProcess](/classes/2.2-alpha/PostProcess)

@return {BABYLON.[BlurPostProcess](/classes/2.2-alpha/BlurPostProcess)} The vertical blur post-process
###dispose(disableDepthRender) &rarr; void

Removes the internal pipeline assets and detatches the pipeline from the scene cameras

####Parameters
 | Name | Type | Description
---|---|---|---
optional | disableDepthRender | boolean | 

