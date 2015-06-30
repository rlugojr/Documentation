---
ID_PAGE: 6632
PG_TITLE: ArcRotateCamera
PG_VERSION: 2.1
---
##new [ArcRotateCamera](page.php?p=6632)(name, alpha, beta, radius, target, scene)



Create a new [ArcRotateCamera](page.php?p=6632). [ArcRotateCamera](page.php?p=6632) is a camera that rotates around a given pivot. It can be controlled with the mouse or touch events (and it also requires hand.js to work)
A tutorial about [ArcRotateCamera](page.php?p=6632) can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/05-Cameras)




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | alpha | number | 
 | beta | number | 
 | radius | number | 
 | target | any | 
 | scene | [Scene](page.php?p=6662) | 
---

##Extends [Camera](page.php?p=6631)
##Members

###alpha : number




Alpha of the [ArcRotateCamera](page.php?p=6632) (Rotation angle around Y axis)



###beta : number




Beta of the [ArcRotateCamera](page.php?p=6632) (Rotation angle around X axis)



###radius : number




Radius of the [ArcRotateCamera](page.php?p=6632)



###target : any




Target of the [ArcRotateCamera](page.php?p=6632)



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



###pinchPrecision : number




PinchPrecision









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



###targetScreenOffset : [Vector2](page.php?p=6750)




###pinchInwards : boolean


###allowUpsideDown : boolean


###onCollide : (collidedMesh: [AbstractMesh](page.php?p=6657)) =&gt; void




OnCollide



###checkCollisions : boolean




CheckCollisions



###collisionRadius : [Vector3](page.php?p=6751)




CollisionsRadius





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
Set the position of the [ArcRotateCamera](page.php?p=6632)





####Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](page.php?p=6751) | The new position of the [ArcRotateCamera](page.php?p=6632)
---

###zoomOn(meshes) &rarr; void
Zoom on specified meshes





####Parameters
 | Name | Type | Description
---|---|---|---
optional | meshes | [AbstractMesh](page.php?p=6657)[] | Meshes to zoom on
---

###focusOn(meshesOrMinMaxVectorAndDistance) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | meshesOrMinMaxVectorAndDistance | any | @param meshesOrMinMaxVectorAndDistance
---

###createRigCamera(name, cameraIndex) &rarr; [Camera](page.php?p=6631)
@override
Override [Camera](page.php?p=6631).createRigCamera

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | cameraIndex | number | 
---
