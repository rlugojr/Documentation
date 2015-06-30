---
ID_PAGE: 5852
PG_TITLE: VolumetricLightScatteringPostProcess
PG_VERSION: 2.0
---
##new [VolumetricLightScatteringPostProcess](page.php?p=5852)(name, ratio, camera, mesh, samples, samplingMode, engine, reusable)

@constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | ratio | number | 
 | camera | [Camera](page.php?p=5702) | 
optional | mesh | [Mesh](page.php?p=5722) | 
optional | samples | number | 
optional | samplingMode | number | 
optional | engine | [Engine](page.php?p=5700) | 
optional | reusable | boolean | 
---

##Extends [PostProcess](page.php?p=5841)
##Members

###useCustomMeshPosition : boolean


Set if the post-process should use a custom position for the light source (true) or the internal mesh position (false)

@type {boolean}

###invert : boolean


If the post-process should inverse the light scattering direction

@type {boolean}

###mesh : [Mesh](page.php?p=5722)


The internal mesh used by the post-process

@type {boolean}

###excludedMeshes : [AbstractMesh](page.php?p=5720)[]


Array containing the excluded meshes not rendered in the internal pass

###exposure : number


###decay : number


###weight : number


###density : number




##Methods

###isReady(subMesh, useInstances) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](page.php?p=5834) | 
 | useInstances | boolean | 
---

###setCustomMeshPosition(position) &rarr; void
Sets the new light position for light scattering effect

####Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](page.php?p=5808) | 
---

###getCustomMeshPosition() &rarr; [Vector3](page.php?p=5808)
Returns the light position for light scattering effect
@return {BABYLON.Vector3} The custom light position


###dispose(camera) &rarr; void
Disposes the internal assets and detaches the post-process from the camera

####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](page.php?p=5702) | 
---

###getPass() &rarr; [RenderTargetTexture](page.php?p=5793)
Returns the render target texture used by the post-process
@return {BABYLON.RenderTargetTexture} The render target texture used by the post-process


###static CreateDefaultMesh(name, scene) &rarr; [Mesh](page.php?p=5722)
Creates a default mesh for the Volumeric [Light](page.php?p=5715) Scattering post-process
@return {BABYLON.Mesh} the default mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](page.php?p=5725) | 
---
