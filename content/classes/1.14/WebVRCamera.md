---
ID_PAGE: 24468
PG_TITLE: WebVRCamera
PG_VERSION: 1.14
---
##new [WebVRCamera](/classes/WebVRCamera)(name, position, scene)

Create a new [WebVRCamera](/classes/WebVRCamera)
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the camera
 | position | [Vector3](/classes/Vector3) | Begin position of the camera
 | scene | [Scene](/classes/Scene) | The scene which contain the camera
---

##Extends [OculusCamera](/classes/OculusCamera)


##Methods

###attachControl(element, noPreventDefault) &rarr; void
Attach the camera controls and display to an element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The element which controls and display the camera
optional | noPreventDefault | boolean | @param noPreventDefault
---

###detachControl(element) &rarr; void
Detach the camera controls and display from an element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The element from where detach the controls and display of the camera
---
