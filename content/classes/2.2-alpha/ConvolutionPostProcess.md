---
ID_PAGE: 25283
PG_TITLE: ConvolutionPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
##Description

class [ConvolutionPostProcess](/classes/2.2-alpha/ConvolutionPostProcess) extends [PostProcess](/classes/2.2-alpha/PostProcess)



##Constructor

##new [ConvolutionPostProcess](/classes/2.2-alpha/ConvolutionPostProcess)(name, kernel, ratio, camera, samplingMode, engine, reusable)

The Postprocess constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | kernel | number[] | 
 | ratio | number | 
 | camera | [Camera](/classes/2.2-alpha/Camera) | 
optional | samplingMode | number | 
optional | engine | [Engine](/classes/2.2-alpha/Engine) | 
optional | reusable | boolean | 

##Members

###kernel : number[]

The kernel matrix

###static EdgeDetect0Kernel : number[]

Edge Detect 0 Kernel

###static EdgeDetect1Kernel : number[]

Edge Detect 1 Kernel

###static EdgeDetect2Kernel : number[]

Edge Detect 2 Kernel

###static SharpenKernel : number[]

Sharpen Kernel

###static EmbossKernel : number[]

Emboss Kernel

###static GaussianKernel : number[]



