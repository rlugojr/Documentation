---
ID_PAGE: 24469
PG_TITLE: OculusGamepadCamera
PG_VERSION: 1.14
---
##new [OculusGamepadCamera](/classes/OculusGamepadCamera)(name, position, scene)

Create a new [OculusGamepadCamera](/classes/OculusGamepadCamera)
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the [OculusGamepadCamera](/classes/OculusGamepadCamera)
 | position | [Vector3](/classes/Vector3) | Position of the [OculusGamepadCamera](/classes/OculusGamepadCamera)
 | scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) which contain the [OculusGamepadCamera](/classes/OculusGamepadCamera)
---

##Extends [FreeCamera](/classes/FreeCamera)
##Members

###angularSensibility : number


Angular sensibility of the camera

###moveSensibility : number


Move sensibility of the camera



##Methods

###attachControl(element, noPreventDefault) &rarr; void
Attach the camera controls and display to an element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The element where attach the camera controls and display
optional | noPreventDefault | boolean | Prevent the default
---

###detachControl(element) &rarr; void
Detach the camera controls and display from an element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The element from which detach the camera controls and display
---

###dispose() &rarr; void
Dispose the camera

