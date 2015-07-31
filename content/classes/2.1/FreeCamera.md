---
ID_PAGE: 6638
PG_TITLE: FreeCamera
PG_VERSION: 2.1
TAGS:
    - Node
    - Camera
    - TargetCamera
    - FreeCamera
---
##new [FreeCamera](page.php?p=6638)(name, position, scene)



Create a new free camera.
You can move around the world with mouse and keyboard
A tutorial about [FreeCamera](page.php?p=6638) can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/05-Cameras)




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the camera
 | position | [Vector3](page.php?p=6751) | Starting position of the camera
 | scene | [Scene](page.php?p=6662) | [Scene](page.php?p=6662) which contain the camera
---

##Extends
 [TargetCamera](page.php?p=6636)
##Members

###ellipsoid : [Vector3](page.php?p=6751)




The collision ellipsoid used to check collisions with the world



###keysUp : number[]




List of keys to up camera



###keysDown : number[]




List of keys to down camera



###keysLeft : number[]




List of keys to left camera



###keysRight : number[]




List of keys to right camera



###checkCollisions : boolean




True : check collisions ; False : don't check collisions



###applyGravity : boolean




True : apply gravity ; False : don't apply gravity



###angularSensibility : number




The angular sensibility of the camera



###onCollide : (collidedMesh: [AbstractMesh](page.php?p=6657)) =&gt; void




The function called when this camera collides with the world











##Methods

###attachControl(element, noPreventDefault) &rarr; void
Attach the camera to an element





####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The element where attach the camera
optional | noPreventDefault | boolean | @param noPreventDefault
---

###detachControl(element) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The element from where detach the camera
---
