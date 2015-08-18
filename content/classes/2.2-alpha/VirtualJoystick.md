---
ID_PAGE: 25337
PG_TITLE: VirtualJoystick
PG_VERSION: 2.1
---
##Description

class [VirtualJoystick](/classes/2.2-alpha/VirtualJoystick)



##Constructor

##new [VirtualJoystick](/classes/2.2-alpha/VirtualJoystick)(leftJoystick)

The [VirtualJoystick](/classes/2.2-alpha/VirtualJoystick) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
optional | leftJoystick | boolean | 

##Members

###reverseLeftRight : boolean

True if the [VirtualJoystick](/classes/2.2-alpha/VirtualJoystick) is reversed to right or left position, false otherwise.

Default value : false

###reverseUpDown : boolean

True if the [VirtualJoystick](/classes/2.2-alpha/VirtualJoystick) is reversed to top or bottom position, false otherwise.

Default value : false

###deltaPosition : [Vector3](/classes/2.2-alpha/Vector3)

Default value : [Vector3](/classes/2.2-alpha/Vector3).Zero

###pressed : boolean

True is [VirtualJoystick](/classes/2.2-alpha/VirtualJoystick) is pressed, false otherwise.

##Methods

###setJoystickSensibility(newJoystickSensibility) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | newJoystickSensibility | number | 

###setJoystickColor(newColor) &rarr; void

Change the color of the virtual joystick

####Parameters
 | Name | Type | Description
---|---|---|---
 | newColor | string |  a string that must be a CSS color value (like "red") or the hexa value (like "#FF0000")

###setActionOnTouch(action) &rarr; void

Set the action for the button touched

####Parameters
 | Name | Type | Description
---|---|---|---
 | action | () =&gt; any | 

###setAxisForLeftRight(axis) &rarr; void

Set the axis for the left and the right

####Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [JoystickAxis](/classes/2.2-alpha/JoystickAxis) | 

###setAxisForUpDown(axis) &rarr; void

Set the axis for the up and the down

####Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [JoystickAxis](/classes/2.2-alpha/JoystickAxis) | 

###releaseCanvas() &rarr; void


