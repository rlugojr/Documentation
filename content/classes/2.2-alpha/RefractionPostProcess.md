---
ID_PAGE: 25288
PG_TITLE: RefractionPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
##Description

class [RefractionPostProcess](/classes/2.2-alpha/RefractionPostProcess) extends [PostProcess](/classes/2.2-alpha/PostProcess)



##Constructor

##new [RefractionPostProcess](/classes/2.2-alpha/RefractionPostProcess)(name, refractionTextureUrl, color, depth, colorLevel, ratio, camera, samplingMode, engine, reusable)

The Postprocess constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | refractionTextureUrl | string | 
 | color | [Color3](/classes/2.2-alpha/Color3) | 
 | depth | number | 
 | colorLevel | number | 
 | ratio | number | 
 | camera | [Camera](/classes/2.2-alpha/Camera) | 
optional | samplingMode | number | 
optional | engine | [Engine](/classes/2.2-alpha/Engine) | 
optional | reusable | boolean | 

##Members

###color : [Color3](/classes/2.2-alpha/Color3)

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
 | camera | [Camera](/classes/2.2-alpha/Camera) | 

