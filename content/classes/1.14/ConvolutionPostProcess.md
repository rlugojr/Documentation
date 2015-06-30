---
ID_PAGE: 3350
PG_TITLE: ConvolutionPostProcess
PG_VERSION: 1.14
---

Builtin postprocess applying a kernel matrix to every pixel
##new [ConvolutionPostProcess](page.php?p=3350)(name, kernel, ratio, camera, samplingMode, engine, reusable)

The Postprocess constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The postprocess name
 | kernel | number[] | The matrix to apply
 | ratio | number | The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](page.php?p=3249) | The scene camera linked to this post process
optional | samplingMode | number | [Texture](page.php?p=3319).NEAREST_SAMPLINGMODE, [Texture](page.php?p=3319).BILINEAR_SAMPLINGMODE or [Texture](page.php?p=3319).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](page.php?p=3247) | The engine to attach the postprocess.
optional | reusable | boolean | Indicates if the postprocess can be reused multiple times on the same camera
---

##Extends [PostProcess](page.php?p=3346)
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


Gaussian Kernel



##Methods
