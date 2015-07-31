---
ID_PAGE: 6809
PG_TITLE: LensRenderingPipeline
PG_VERSION: 2.1
TAGS:
    - PostProcess
    - PostProcessRenderPipeline
---
##new [LensRenderingPipeline](page.php?p=6809)(name, parameters, scene, ratio, cameras)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | parameters | any | 
 | scene | [Scene](page.php?p=6662) | 
optional | ratio | number | 
optional | cameras | [Camera](page.php?p=6631)[] | 
---

##Extends
 [PostProcessRenderPipeline](page.php?p=6808)
##Members

###LensChromaticAberrationEffect : string


The chromatic aberration [PostProcess](page.php?p=6790) id in the pipeline

@type {string}

###HighlightsEnhancingEffect : string


The highlights enhancing [PostProcess](page.php?p=6790) id in the pipeline

@type {string}

###LensDepthOfFieldEffect : string


The depth-of-field [PostProcess](page.php?p=6790) id in the pipeline

@type {string}



##Methods

###setEdgeBlur(amount) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | amount | number | 
---

###disableEdgeBlur() &rarr; void


###setGrainAmount(amount) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | amount | number | 
---

###disableGrain() &rarr; void


###setChromaticAberration(amount) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | amount | number | 
---

###disableChromaticAberration() &rarr; void


###setEdgeDistortion(amount) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | amount | number | 
---

###disableEdgeDistortion() &rarr; void


###setFocusDistance(amount) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | amount | number | 
---

###disableDepthOfField() &rarr; void


###setAperture(amount) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | amount | number | 
---

###setDarkenOutOfFocus(amount) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | amount | number | 
---

###enablePentagonBokeh() &rarr; void


###disablePentagonBokeh() &rarr; void


###enableNoiseBlur() &rarr; void


###disableNoiseBlur() &rarr; void


###setHighlightsGain(amount) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | amount | number | 
---

###setHighlightsThreshold(amount) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | amount | number | 
---

###disableHighlights() &rarr; void


###dispose(disableDepthRender) &rarr; void
Removes the internal pipeline assets and detaches the pipeline from the scene cameras

####Parameters
 | Name | Type | Description
---|---|---|---
optional | disableDepthRender | boolean | 
---
