---
ID_PAGE: 5799
PG_TITLE: FireProceduralTexture
PG_VERSION: 2.0
---
##new [FireProceduralTexture](page.php?p=5799)(name, size, scene, fallbackTexture, generateMipMaps)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | size | number | 
 | scene | [Scene](page.php?p=5725) | 
optional | fallbackTexture | [Texture](page.php?p=5790) | 
optional | generateMipMaps | boolean | 
---

##Extends [ProceduralTexture](page.php?p=5796)
##Members

###static PurpleFireColors : [Color3](page.php?p=5805)[]


###static GreenFireColors : [Color3](page.php?p=5805)[]


###static RedFireColors : [Color3](page.php?p=5805)[]


###static BlueFireColors : [Color3](page.php?p=5805)[]


###fireColors : [Color3](page.php?p=5805)[]


###time : number


###speed : [Vector2](page.php?p=5807)


###shift : number


###alphaThreshold : number




##Methods

###updateShaderUniforms() &rarr; void


###render(useCameraPostProcess) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean | 
---
