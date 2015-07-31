---
ID_PAGE: 6798
PG_TITLE: FxaaPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---

Builtin postprocess applying a full screen antialiasing filter
##new [FxaaPostProcess](page.php?p=6798)(name, ratio, camera, samplingMode, engine, reusable)



The Postprocess constructor




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The postprocess name
 | ratio | number | The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](page.php?p=6631) | The scene camera linked to this post process
optional | samplingMode | number | [Texture](page.php?p=6733).NEAREST_SAMPLINGMODE, [Texture](page.php?p=6733).BILINEAR_SAMPLINGMODE or [Texture](page.php?p=6733).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](page.php?p=6629) | The engine to attach the postprocess.
optional | reusable | boolean | Indicates if the postprocess can be reused multiple times on the same camera
---

##Extends
 [PostProcess](page.php?p=6790)
##Members

###texelWidth : number




Width of the texture element



###texelHeight : number




##Methods
