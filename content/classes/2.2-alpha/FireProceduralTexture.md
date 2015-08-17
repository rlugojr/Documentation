---
ID_PAGE: 25230
PG_TITLE: FireProceduralTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
    - ProceduralTexture
---
##Description

class [FireProceduralTexture](/classes/2.2-alpha/FireProceduralTexture) extends [ProceduralTexture](/classes/2.2-alpha/ProceduralTexture)



##Constructor

##new [FireProceduralTexture](/classes/2.2-alpha/FireProceduralTexture)(name, size, scene, fallbackTexture, generateMipMaps)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | size | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | fallbackTexture | [Texture](/classes/2.2-alpha/Texture) | 
optional | generateMipMaps | boolean | 

##Members

###static PurpleFireColors : [Color3](/classes/2.2-alpha/Color3)[]



###static GreenFireColors : [Color3](/classes/2.2-alpha/Color3)[]



###static RedFireColors : [Color3](/classes/2.2-alpha/Color3)[]



###static BlueFireColors : [Color3](/classes/2.2-alpha/Color3)[]



###fireColors : [Color3](/classes/2.2-alpha/Color3)[]



###time : number



###speed : [Vector2](/classes/2.2-alpha/Vector2)



###alphaThreshold : number



##Methods

###updateShaderUniforms() &rarr; void


###render(useCameraPostProcess) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean | 

