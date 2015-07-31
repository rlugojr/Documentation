---
ID_PAGE: 6742
PG_TITLE: FireProceduralTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
    - ProceduralTexture
---
##new [FireProceduralTexture](page.php?p=6742)(name, size, scene, fallbackTexture, generateMipMaps)




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | size | number | 
 | scene | [Scene](page.php?p=6662) | 
optional | fallbackTexture | [Texture](page.php?p=6733) | 
optional | generateMipMaps | boolean | 
---

##Extends
 [ProceduralTexture](page.php?p=6739)
##Members

###static PurpleFireColors : [Color3](page.php?p=6748)[]




###static GreenFireColors : [Color3](page.php?p=6748)[]




###static RedFireColors : [Color3](page.php?p=6748)[]




###static BlueFireColors : [Color3](page.php?p=6748)[]




###fireColors : [Color3](page.php?p=6748)[]




###time : number




###speed : [Vector2](page.php?p=6750)




###alphaThreshold : number









##Methods

###updateShaderUniforms() &rarr; void




###render(useCameraPostProcess) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean | 
---
