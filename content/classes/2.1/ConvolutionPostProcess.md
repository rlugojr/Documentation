---
ID_PAGE: 6795
PG_TITLE: ConvolutionPostProcess
PG_VERSION: 2.1
---

Builtin postprocess applying a kernel matrix to every pixel
##new [ConvolutionPostProcess](page.php?p=6795)(name, kernel, ratio, camera, samplingMode, engine, reusable)



The Postprocess constructor




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The postprocess name
 | kernel | number[] | The matrix to apply
 | ratio | number | The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](page.php?p=6631) | The scene camera linked to this post process
optional | samplingMode | number | [Texture](page.php?p=6733).NEAREST_SAMPLINGMODE, [Texture](page.php?p=6733).BILINEAR_SAMPLINGMODE or [Texture](page.php?p=6733).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](page.php?p=6629) | The engine to attach the postprocess.
optional | reusable | boolean | Indicates if the postprocess can be reused multiple times on the same camera
---

##Extends [PostProcess](page.php?p=6790)
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




##Methods
