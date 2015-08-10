---
ID_PAGE: 25098
PG_TITLE: WebVRCamera
PG_VERSION: 2.0
---
##new [WebVRCamera](/classes/WebVRCamera)(name, position, scene)

Create a new [WebVRCamera](/classes/WebVRCamera)
####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | Name of the camera
&nbsp;| position | [Vector3](/classes/Vector3) | Begin position of the camera
&nbsp;| scene | [Scene](/classes/Scene) | The scene which contain the camera
---

##Extends
&nbsp;[OculusCamera](/classes/OculusCamera)


##Methods

###attachControl(element, noPreventDefault) &rarr; void
Attach the camera controls and display to an element

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| element | HTMLElement | The element which controls and display the camera
optional | noPreventDefault | boolean | @param noPreventDefault
---

###detachControl(element) &rarr; void
Detach the camera controls and display from an element

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| element | HTMLElement | The element from where detach the controls and display of the camera
---