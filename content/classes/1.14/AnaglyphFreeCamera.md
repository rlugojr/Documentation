---
ID_PAGE: 3255
PG_TITLE: AnaglyphFreeCamera
PG_VERSION: 1.14
---
##new [AnaglyphFreeCamera](page.php?p=3255)(name, position, eyeSpace, scene)

The AnaglyphCamera is a camera package that is a more generic (non-Oculus) stereoscopic 3D camera.
There are actually two types of AnaglyphCamera. This one is a [AnaglyphFreeCamera](page.php?p=3255) : Stereoscopic 3D with two [FreeCamera](page.php?p=3254).
Tutorial [here](https://github.com/BabylonJS/Babylon.js/wiki/05-Cameras)
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The camera name
 | position | [Vector3](page.php?p=3327) | The camera position
 | eyeSpace | number | In degrees. Sets the amount of shift between the left eye view and the right eye view. Once you are wearing your 3D glasses, you might want to experiment with this float value.
 | scene | [Scene](page.php?p=3274) | The scene which contain the camera
---

##Extends [FreeCamera](page.php?p=3254)


##Methods
