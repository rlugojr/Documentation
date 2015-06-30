---
ID_PAGE: 3308
PG_TITLE: ShadowGenerator
PG_VERSION: 1.14
---

Shadows are dynamic, they are dynamically generated depending upon a Directionallight.

A tutorial about shadows can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/15-Shadows)
##new [ShadowGenerator](page.php?p=3308)(mapSize, light)

Creates a new [ShadowGenerator](page.php?p=3308) object
####Parameters
 | Name | Type | Description
---|---|---|---
 | mapSize | number | The size of the shadow map
 | light | [DirectionalLight](page.php?p=3265) | The light used for the shadow map's computation
---

##Members

###static FILTER_NONE : number


No filter will be used for this shadow

###static FILTER_VARIANCESHADOWMAP : number


The variance shadowmap will be used for this shadow

###static FILTER_POISSONSAMPLING : number


The poisson sampling filter will be used

###filter : number


One of the following values : FILTER_NONE, FILTER_VARIANCESHADOWMAP, FILTER_POISSONSAMPLING

###useVarianceShadowMap : boolean


True by default, defines the realtime shadowing algorithm, using the light's point of view

###usePoissonSampling : boolean


Disables the useVarianceShadowMap and activates poisson sampling to soften shadows



##Methods

###isReady(subMesh, useInstances) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](page.php?p=3339) | @param subMesh
 | useInstances | boolean | @param useInstances
---

###getShadowMap() &rarr; [RenderTargetTexture](page.php?p=3321)
Defines which shadow will be rendered


###getLight() &rarr; [DirectionalLight](page.php?p=3265)
Returns the [DirectionalLight](page.php?p=3265) of this [ShadowGenerator](page.php?p=3308)


###getTransformMatrix() &rarr; [Matrix](page.php?p=3329)
Returns the transform matrix of this [ShadowGenerator](page.php?p=3308)


###getDarkness() &rarr; number
Returns the darkness


###setDarkness(darkness) &rarr; void
Sets the darkness with the given float between 0.0 to 1.0

####Parameters
 | Name | Type | Description
---|---|---|---
 | darkness | number | The given darkness
---

###setTransparencyShadow(hasShadow) &rarr; void
Defines if the light goes through the object's holes and non opaque surfaces

####Parameters
 | Name | Type | Description
---|---|---|---
 | hasShadow | boolean | default : false. True to activate transparency shadow, else false
---

###dispose() &rarr; void
Removes this [ShadowGenerator](page.php?p=3308) from the scene

