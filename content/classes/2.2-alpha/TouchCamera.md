---
ID_PAGE: 25135
PG_TITLE: TouchCamera
PG_VERSION: 2.1
TAGS:
    - Node
    - Camera
    - TargetCamera
    - FreeCamera
---
##Description

class [TouchCamera](/classes/2.2-alpha/TouchCamera) extends [FreeCamera](/classes/2.2-alpha/FreeCamera)



##Constructor

##new [TouchCamera](/classes/2.2-alpha/TouchCamera)(name, position, scene)

Create a new [TouchCamera](/classes/2.2-alpha/TouchCamera) (camera controlled by touch with touchscreen)
A tutorial about [ArcRotateCamera](/classes/2.2-alpha/ArcRotateCamera) can be found here

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | position | [Vector3](/classes/2.2-alpha/Vector3) | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 

##Members

###angularSensibility : number

The angular sensibility of the camera

###moveSensibility : number

The move sensibility of the camera

##Methods

###attachControl(canvas, noPreventDefault) &rarr; void

Attach the camera controls and display to a canvas element

####Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement | 
 | noPreventDefault | boolean | 

###detachControl(canvas) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement | 

