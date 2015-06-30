---
ID_PAGE: 5851
PG_TITLE: RefractionPostProcess
PG_VERSION: 2.0
---

Builtin postprocess applying e refraction texture as a postprocess

A tutorial about post process can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-postprocesses)
##new [RefractionPostProcess](page.php?p=5851)(name, refractionTextureUrl, color, depth, colorLevel, ratio, camera, samplingMode, engine, reusable)


The Postprocess constructor


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The postprocess name
 | refractionTextureUrl | string | The URL of the refraction texture
 | color | [Color3](page.php?p=5805) | The base color of the refraction (used to taint the rendering)
 | depth | number | The simulated refraction
 | colorLevel | number | The coefficient of the base color (0 to remove base color tainting)
 | ratio | number | The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](page.php?p=5702) | The scene camera linked to this post process
optional | samplingMode | number | [Texture](page.php?p=5790).NEAREST_SAMPLINGMODE, [Texture](page.php?p=5790).BILINEAR_SAMPLINGMODE or [Texture](page.php?p=5790).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](page.php?p=5700) | The engine to attach the postprocess.
optional | reusable | boolean | Indicates if the postprocess can be reused multiple times on the same camera
---

##Extends [PostProcess](page.php?p=5841)
##Members

###color : [Color3](page.php?p=5805)



The base color of the refraction (used to taint the rendering)


###depth : number



The simulated refraction


###colorLevel : number



The coefficient of the base color (0 to remove base color tainting)







##Methods

###dispose(camera) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](page.php?p=5702) | The given camera
---
