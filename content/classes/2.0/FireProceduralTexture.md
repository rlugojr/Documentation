---
ID_PAGE: 24968
PG_TITLE: FireProceduralTexture
PG_VERSION: 2.0
---
##new [FireProceduralTexture](/classes/FireProceduralTexture)(name, size, scene, fallbackTexture, generateMipMaps)




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | size | number | 
 | scene | [Scene](/classes/Scene) | 
optional | fallbackTexture | [Texture](/classes/Texture) | 
optional | generateMipMaps | boolean | 
---

##Extends [ProceduralTexture](/classes/ProceduralTexture)
##Members

###static PurpleFireColors : [Color3](/classes/Color3)[]




###static GreenFireColors : [Color3](/classes/Color3)[]




###static RedFireColors : [Color3](/classes/Color3)[]




###static BlueFireColors : [Color3](/classes/Color3)[]




###fireColors : [Color3](/classes/Color3)[]




###time : number




###speed : [Vector2](/classes/Vector2)




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
