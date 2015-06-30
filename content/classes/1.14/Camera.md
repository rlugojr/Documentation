---
ID_PAGE: 3249
PG_TITLE: Camera
PG_VERSION: 1.14
---
##new [Camera](page.php?p=3249)(name, position, scene)

Creates a new [Camera](page.php?p=3249).
A tutorial about [ArcRotateCamera](page.php?p=3250) can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/05-Cameras)
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The camera name
 | position | [Vector3](page.php?p=3327) | The camera position
 | scene | [Scene](page.php?p=3274) | The scene linked to this camera
---

##Extends [Node](page.php?p=3248)
##Members

###position : [Vector3](page.php?p=3327)


Position of the camera

###static PERSPECTIVE_CAMERA : number


###static ORTHOGRAPHIC_CAMERA : number


###upVector : [Vector3](page.php?p=3327)

 [Camera](page.php?p=3249) up

###orthoLeft : any


For orthographic camera, it's the left side of point of view

###orthoRight : any


For orthographic camera, it's the right side of point of view

###orthoBottom : any


For orthegraphic camera, it's the bottom side of point of view

###orthoTop : any


For orthographic camera, it's the top side of point of view

###fov : number


Field of view of the camera

###minZ : number


Minimum distance of view

###maxZ : number


Maximum distance of view

###inertia : number


Inertia of the camera

###mode : number


0 = PERSPECTIVE

1 = ORTHOGRAPHIC

###isIntermediate : boolean


True if this camera is a subcamera, false otherwise

###viewport : [Viewport](page.php?p=3331)


The viewport

###subCameras : any[]


The list of subcameras of this camera

###layerMask : number


The layerMask



##Methods

###attachControl(element) &rarr; void
Attach the control and display of the camera to the element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | Element to attach control and display
---

###detachControl(element) &rarr; void
Detach the control and display of the camera from the element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | Element to detach control and display
---

###attachPostProcess(postProcess, insertAt) &rarr; number
Attaches a given post process

####Parameters
 | Name | Type | Description
---|---|---|---
 | postProcess | [PostProcess](page.php?p=3346) | @param postProcess
optional | insertAt | number | Index of postProcess to add
---

###detachPostProcess(postProcess, atIndices) &rarr; number[]
Detach a fiven post process

####Parameters
 | Name | Type | Description
---|---|---|---
 | postProcess | [PostProcess](page.php?p=3346) | @param postProcess
optional | atIndices | any | Index of postProcess to detach
---

###getWorldMatrix() &rarr; [Matrix](page.php?p=3329)
Get the worldMatrix


###getViewMatrix() &rarr; [Matrix](page.php?p=3329)
Get the viewMatrix


###getProjectionMatrix(force) &rarr; [Matrix](page.php?p=3329)
Get the projectionMatrix

####Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | 
---

###dispose() &rarr; void
Disposes of the camera and all its components

