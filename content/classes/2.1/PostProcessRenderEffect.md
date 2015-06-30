---
ID_PAGE: 6806
PG_TITLE: PostProcessRenderEffect
PG_VERSION: 2.1
---

A render effect is a smart postprocess which can manage its own instances itself.

A tutorial about the render pipeline can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-PostProcessRenderPipeline)
##new [PostProcessRenderEffect](page.php?p=6806)(engine, name, getPostProcess, singleInstance)



Builds a [PostProcessRenderEffect](page.php?p=6806) object




####Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](page.php?p=6629) | The used engine
 | name | string | The name of the postprocess rendrer effect
 | getPostProcess | () =&gt; [PostProcess](page.php?p=6790) | The function has to return a new instance of the postprocess which will be used
optional | singleInstance | boolean | default : true
---

##Members

###applyParameters : (postProcess: [PostProcess](page.php?p=6790)) =&gt; void




Applies given postProcess object to the rendrer effect











##Methods

###addPass(renderPass) &rarr; void
Adds a new pass to the effect





####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPass | [PostProcessRenderPass](page.php?p=6807) | The pass to add
---

###removePass(renderPass) &rarr; void
Removes a pass from the effect





####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPass | [PostProcessRenderPass](page.php?p=6807) | The pass to remove
---

###addRenderEffectAsPass(renderEffect) &rarr; void
Adds a render effect as a pass





####Parameters
 | Name | Type | Description
---|---|---|---
 | renderEffect | [PostProcessRenderEffect](page.php?p=6806) | The effect to add
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






###getPostProcess(camera) &rarr; [PostProcess](page.php?p=6790)

####Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](page.php?p=6631) | default : this camera
---
