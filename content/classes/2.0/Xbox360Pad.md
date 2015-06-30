---
ID_PAGE: 5878
PG_TITLE: Xbox360Pad
PG_VERSION: 2.0
---



##Extends [Gamepad](page.php?p=5876)
##Members

###leftTrigger : number



Contains a value of the [Xbox360Dpad](page.php?p=5900) enum refering to the left pad's direction


###rightTrigger : number



Contains a value of the [Xbox360Dpad](page.php?p=5900) enum refering to the right pad's direction


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
 | callback | (value: number) =&gt; void | The function to execute with the new value of the left trigger
---

###onrighttriggerchanged(callback) &rarr; void
Binds an action on the right trigger property change



####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (value: number) =&gt; void | The function to execute with the new value of the right trigger
---

###onbuttondown(callback) &rarr; void
Binds an action on button pressed



####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonPressed: [Xbox360Button](page.php?p=5899)) =&gt; void | The function to execute with the button passed as argument
---

###onbuttonup(callback) &rarr; void
Binds an action on button released



####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonReleased: [Xbox360Button](page.php?p=5899)) =&gt; void | The function to execute with the button passed as argument
---

###ondpaddown(callback) &rarr; void
Binds an action on stick pressed



####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (dPadPressed: [Xbox360Dpad](page.php?p=5900)) =&gt; void | The function to execute with the stick passed as argument
---

###ondpadup(callback) &rarr; void
Binds an action on stick released



####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (dPadReleased: [Xbox360Dpad](page.php?p=5900)) =&gt; void | The function to execute with the stick passed as argument
---

###update() &rarr; void

