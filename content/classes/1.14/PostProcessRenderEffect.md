---
ID_PAGE: 3358
PG_TITLE: PostProcessRenderEffect
PG_VERSION: 1.14
---

A render effect is a smart postprocess which can manage its own instances itself.

A tutorial about the render pipeline can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-PostProcessRenderPipeline)
##new [PostProcessRenderEffect](page.php?p=3358)(engine, name, getPostProcess, singleInstance)

Builds a [PostProcessRenderEffect](page.php?p=3358) object
####Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](page.php?p=3247) | The used engine
 | name | string | The name of the postprocess rendrer effect
 | getPostProcess | () =&gt; [PostProcess](page.php?p=3346) | The function has to return a new instance of the postprocess which will be used
optional | singleInstance | boolean | default : true
---

##Members

###applyParameters : (postProcess: [PostProcess](page.php?p=3346)) =&gt; void


Applies given postProcess object to the rendrer effect



##Methods

###addPass(renderPass) &rarr; void
Adds a new pass to the effect

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPass | [PostProcessRenderPass](page.php?p=3359) | The pass to add
---

###removePass(renderPass) &rarr; void
Removes a pass from the effect

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPass | [PostProcessRenderPass](page.php?p=3359) | The pass to remove
---

###addRenderEffectAsPass(renderEffect) &rarr; void
Adds a render effect as a pass

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderEffect | [PostProcessRenderEffect](page.php?p=3358) | The effect to add
---

###getPass(passName) &rarr; void
Returns a pass using its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | passName | string | The given name
---

###emptyPasses() &rarr; void
Delete all passes


###getPostProcess(camera) &rarr; [PostProcess](page.php?p=3346)
Return the postprocesses of the given camera

####Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](page.php?p=3249) | default : this camera
---
