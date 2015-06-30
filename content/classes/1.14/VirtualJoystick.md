---
ID_PAGE: 3385
PG_TITLE: VirtualJoystick
PG_VERSION: 1.14
---

Mainly based on these 2 articles :

Creating an universal virtual touch joystick working for all Touch models thanks to [Hand.JS](http://blogs.msdn.com/b/davrous/archive/2013/02/22/creating-an-universal-virtual-touch-joystick-working-for-all-touch-models-thanks-to-hand-js.aspx)

&amp; on Seb Lee-Delisle original work: http://seb.ly/2011/04/multi-touch-game-controller-in-javascripthtml5-for-ipad/
##new [VirtualJoystick](page.php?p=3385)(leftJoystick)

The [VirtualJoystick](page.php?p=3385) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
optional | leftJoystick | boolean | @param leftJoystick
---

##Members

###reverseLeftRight : boolean


True if the [VirtualJoystick](page.php?p=3385) is reversed to right or left position, false otherwise.

Default value : false

###reverseUpDown : boolean


True if the [VirtualJoystick](page.php?p=3385) is reversed to top or bottom position, false otherwise.

Default value : false

###deltaPosition : [Vector3](page.php?p=3327)


Default value : [BABYLON](page.php?p=3243).Vector3.Zero

###pressed : boolean


True is [VirtualJoystick](page.php?p=3385) is pressed, false otherwise.



##Methods

###setJoystickSensibility(newJoystickSensibility) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | newJoystickSensibility | number | @param newJoystickSensibility
---

###setJoystickColor(newColor) &rarr; void
Change the color of the virtual joystick

####Parameters
 | Name | Type | Description
---|---|---|---
 | newColor | string | a string that must be a CSS color value (like &quot;red&quot;) or the hexa value (like &quot;#FF0000&quot;)
---

###setActionOnTouch(action) &rarr; void
Set the action for the button touched

####Parameters
 | Name | Type | Description
---|---|---|---
 | action | () =&gt; any | @param action
---

###setAxisForLeftRight(axis) &rarr; void
Set the axis for the left and the right

####Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [JoystickAxis](page.php?p=3389) | The given axis
---

###setAxisForUpDown(axis) &rarr; void
Set the axis for the up and the down

####Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [JoystickAxis](page.php?p=3389) | The given axis
---

###releaseCanvas() &rarr; void
Release the Canvas

