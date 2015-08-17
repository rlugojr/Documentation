---
ID_PAGE: 25319
PG_TITLE: Xbox360Pad
PG_VERSION: 2.1
TAGS:
    - Gamepad
---
##Description

class [Xbox360Pad](/classes/2.2-alpha/Xbox360Pad) extends [Gamepad](/classes/2.2-alpha/Gamepad)



##Members

###leftTrigger : number

Contains a value of the [Xbox360Dpad](/classes/2.2-alpha/Xbox360Dpad) enum refering to the left pad's direction

###rightTrigger : number

Contains a value of the [Xbox360Dpad](/classes/2.2-alpha/Xbox360Dpad) enum refering to the right pad's direction

###buttonA : number



###buttonB : number



###buttonX : number



###buttonY : number



###buttonStart : number



###buttonBack : number



###buttonLB : number



###buttonRB : number



###buttonLeftStick : number



###buttonRightStick : number



###dPadUp : number



###dPadDown : number



###dPadLeft : number



###dPadRight : number



##Methods

###onlefttriggerchanged(callback) &rarr; void

Binds an action on the left trigger property change

####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (value: number) =&gt; void | 

###onrighttriggerchanged(callback) &rarr; void

Binds an action on the right trigger property change

####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (value: number) =&gt; void | 

###onbuttondown(callback) &rarr; void

Binds an action on button pressed

####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonPressed: [Xbox360Button](/classes/2.2-alpha/Xbox360Button)) =&gt; void | 

###onbuttonup(callback) &rarr; void

Binds an action on button released

####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonReleased: [Xbox360Button](/classes/2.2-alpha/Xbox360Button)) =&gt; void | 

###ondpaddown(callback) &rarr; void

Binds an action on stick pressed

####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (dPadPressed: [Xbox360Dpad](/classes/2.2-alpha/Xbox360Dpad)) =&gt; void | 

###ondpadup(callback) &rarr; void

Binds an action on stick released

####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (dPadReleased: [Xbox360Dpad](/classes/2.2-alpha/Xbox360Dpad)) =&gt; void | 

###update() &rarr; void


