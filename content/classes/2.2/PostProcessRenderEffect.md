---
ID_PAGE: 25294
PG_TITLE: PostProcessRenderEffect
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
##Description

class [PostProcessRenderEffect](/classes/2.2/PostProcessRenderEffect)



##Constructor

##new [PostProcessRenderEffect](/classes/2.2/PostProcessRenderEffect)(engine, name, getPostProcess, singleInstance)

Builds a [PostProcessRenderEffect](/classes/2.2/PostProcessRenderEffect) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/2.2/Engine) | 
 | name | string | 
 | getPostProcess | () =&gt; [PostProcess](/classes/2.2/PostProcess) | 
optional | singleInstance | boolean | 

##Members

###applyParameters : (postProcess: [PostProcess](/classes/2.2/PostProcess)) =&gt; void

Applies given postProcess object to the rendrer effect

##Methods

###addPass(renderPass) &rarr; void

Adds a new pass to the effect

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPass | [PostProcessRenderPass](/classes/2.2/PostProcessRenderPass) | 

###removePass(renderPass) &rarr; void

Removes a pass from the effect

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPass | [PostProcessRenderPass](/classes/2.2/PostProcessRenderPass) | 

###addRenderEffectAsPass(renderEffect) &rarr; void

Adds a render effect as a pass

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderEffect | [PostProcessRenderEffect](/classes/2.2/PostProcessRenderEffect) | 

###getPass(passName) &rarr; void

Returns a pass using its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | passName | string | 

###emptyPasses() &rarr; void

Delete all passes
###getPostProcess(camera) &rarr; [PostProcess](/classes/2.2/PostProcess)



####Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/2.2/Camera) | 

