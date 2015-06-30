---
ID_PAGE: 3288
PG_TITLE: ActionManager
PG_VERSION: 1.14
---
##new [ActionManager](page.php?p=3288)(scene)

See more about Actions [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-Actions)
####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=3274) | The scene which contains the new action manager
---

##Members

###static NothingTrigger : number


Nothing trigger

###static OnPickTrigger : number


On pick trigger

###static OnLeftPickTrigger : number


On left pick trigger

###static OnRightPickTrigger : number


On right pick trigger

###static OnCenterPickTrigger : number


On center pick trigger

###static OnPointerOverTrigger : number


On pointer over trigger

###static OnPointerOutTrigger : number


On pointer out trigger

###static OnEveryFrameTrigger : number


On every frame trigger

###static OnIntersectionEnterTrigger : number


On intersection enter trigger

###static OnIntersectionExitTrigger : number


On intersection exit trigger

###static OnKeyDownTrigger : number


On key down trigger

###static OnKeyUpTrigger : number


on key up trigger

###actions : [Action](page.php?p=3275)[]


The actions of the action manager

###hasPointerTriggers : boolean


Return true if the action manager has pointer triggers ; False otherwise

###hasPickTriggers : boolean


Return true if the action manager has pick triggers ; False otherwise



##Methods

###dispose() &rarr; void
Delete the action manager


###getScene() &rarr; [Scene](page.php?p=3274)
Get the scene which contains the action manager


###hasSpecificTriggers(triggers) &rarr; boolean
Return true if the action manager has specific specified triggers ; False otherwise

####Parameters
 | Name | Type | Description
---|---|---|---
 | triggers | number[] | @param triggers
---

###registerAction(action) &rarr; [Action](page.php?p=3275)
Register a new aciton in the action manager

####Parameters
 | Name | Type | Description
---|---|---|---
 | action | [Action](page.php?p=3275) | The action to register
---

###processTrigger(trigger, evt) &rarr; void
Process trigger

####Parameters
 | Name | Type | Description
---|---|---|---
 | trigger | number | The trigger
 | evt | [ActionEvent](page.php?p=3287) | The event
---
