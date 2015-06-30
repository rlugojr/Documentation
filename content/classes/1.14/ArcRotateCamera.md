---
ID_PAGE: 3250
PG_TITLE: ArcRotateCamera
PG_VERSION: 1.14
---
##new [ArcRotateCamera](page.php?p=3250)(name, alpha, beta, radius, target, scene)

Create a new [ArcRotateCamera](page.php?p=3250). [ArcRotateCamera](page.php?p=3250) is a camera that rotates around a given pivot. It can be controlled with the mouse or touch events (and it also requires hand.js to work)
A tutorial about [ArcRotateCamera](page.php?p=3250) can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/05-Cameras)
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | alpha | number | 
 | beta | number | 
 | radius | number | 
 | target | any | 
 | scene | [Scene](page.php?p=3274) | 
---

##Extends [Camera](page.php?p=3249)
##Members

###alpha : number


Alpha of the [ArcRotateCamera](page.php?p=3250) (Rotation angle around Y axis)

###beta : number


Beta of the [ArcRotateCamera](page.php?p=3250) (Rotation angle around X axis)

###radius : number


Radius of the [ArcRotateCamera](page.php?p=3250)

###target : any


Target of the [ArcRotateCamera](page.php?p=3250)

###inertialAlphaOffset : number


Inertial alpha offset

###inertialBetaOffset : number


Inertial beta offset

###inertialRadiusOffset : number


Inertial radius offset

###lowerAlphaLimit : any


Lower alpha limit

###upperAlphaLimit : any


Upper alpha limit

###lowerBetaLimit : number


Lower beta limit

###upperBetaLimit : number


Upper beta limit

###lowerRadiusLimit : any


Lower radius limit

###upperRadiusLimit : any


Upper radius limit

###angularSensibility : number


Angular sensibility

###wheelPrecision : number


Wheel precision

###keysUp : number[]


Key to control the camera UP

###keysDown : number[]


Key to control the camera DOWN

###keysLeft : number[]


Key to control the camera LEFT

###keysRight : number[]


Key to control the camera RIGHT

###zoomOnFactor : number


Zoom on factor

###onCollide : (collidedMesh: [AbstractMesh](page.php?p=3269)) =&gt; void


OnCollide

###checkCollisions : boolean


CheckCollisions

###collisionRadius : [Vector3](page.php?p=3327)


CollisionsRadius

###pinchPrecision : number


PinchPrecision



##Methods

###attachControl(element, noPreventDefault) &rarr; void
Attach camera to a specified canvas, to control and display it

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The canvas attached to the camera
optional | noPreventDefault | boolean | @param noPreventDefault
---

###detachControl(element) &rarr; void
Detach camera control and display from the specified canvas

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | Element to detach from the control
---

###setPosition(position) &rarr; void
Set the position of the [ArcRotateCamera](page.php?p=3250)

####Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](page.php?p=3327) | The new position of the [ArcRotateCamera](page.php?p=3250)
---

###zoomOn(meshes) &rarr; void
Zoom on specified meshes

####Parameters
 | Name | Type | Description
---|---|---|---
optional | meshes | [AbstractMesh](page.php?p=3269)[] | Meshes to zoom on
---

###focusOn(meshesOrMinMaxVectorAndDistance) &rarr; void
Focus on

####Parameters
 | Name | Type | Description
---|---|---|---
 | meshesOrMinMaxVectorAndDistance | any | @param meshesOrMinMaxVectorAndDistance
---
