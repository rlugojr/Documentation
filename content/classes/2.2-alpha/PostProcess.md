---
ID_PAGE: 25278
PG_TITLE: PostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
##Description

class [PostProcess](/classes/2.2-alpha/PostProcess)



##Constructor

##new [PostProcess](/classes/2.2-alpha/PostProcess)(name, fragmentUrl, parameters, samplers, ratio, any, camera, samplingMode, engine, reusable, defines, textureType)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | fragmentUrl | string | 
 | parameters | string[] | 
 | samplers | string[] | 
 | ratio | number or any | 
 | camera | [Camera](/classes/2.2-alpha/Camera) | 
optional | samplingMode | number | 
optional | engine | [Engine](/classes/2.2-alpha/Engine) | 
optional | reusable | boolean | 
optional | defines | string | 
optional | textureType | number | 

##Members

###name : string



###onApply : (effect: [Effect](/classes/2.2-alpha/Effect)) =&gt; void

[Action](/classes/2.2-alpha/Action) to execute just before the postprocess is applied

###onBeforeRender : (effect: [Effect](/classes/2.2-alpha/Effect)) =&gt; void

[Action](/classes/2.2-alpha/Action) to execute just before the postprocess is rendered

###onAfterRender : (effect: [Effect](/classes/2.2-alpha/Effect)) =&gt; void



###onSizeChanged : () =&gt; void

[Action](/classes/2.2-alpha/Action) to execute just before the postprocess' size is changed

###onActivate : (camera: [Camera](/classes/2.2-alpha/Camera)) =&gt; void

[Action](/classes/2.2-alpha/Action) to execute just before the postprocess is activated

###width : number

default : -1

###height : number

default : -1

###renderTargetSamplingMode : number

default : [Texture](/classes/2.2-alpha/Texture).NEAREST_SAMPLINGMODE

Other possible values : [Texture](/classes/2.2-alpha/Texture).BILINEAR_SAMPLINGMODE, [Texture](/classes/2.2-alpha/Texture).TRILINEAR_SAMPLINGMODE

###clearColor : [Color4](/classes/2.2-alpha/Color4)



##Methods

###isReusable() &rarr; boolean

Tests if the Postprocess is set to reusable
###activate(camera, sourceTexture) &rarr; void

Activates this postprocess to the given camera

####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.2-alpha/Camera) | 
optional | sourceTexture | WebGLTexture | 

###apply() &rarr; [Effect](/classes/2.2-alpha/Effect)

Applies this postprocess
###dispose(camera) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/2.2-alpha/Camera) | 

