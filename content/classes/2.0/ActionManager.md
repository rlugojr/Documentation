---
ID_PAGE: 5741
PG_TITLE: ActionManager
PG_VERSION: 2.0
---
 [Action](page.php?p=5726) Manager manages all events to be triggered on a given mesh or the global scene.

A single scene can have many [Action](page.php?p=5726) Managers to handle predefined actions on specific meshes.
##new [ActionManager](page.php?p=5741)(scene)


See more about Actions [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-Actions)


####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=5725) | The scene which contains the new action manager
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


###actions : [Action](page.php?p=5726)[]



The actions of the action manager


###hasPointerTriggers : boolean


Does this action manager has pointer triggers

@return {boolean} whether or not it has pointer triggers

###hasPickTriggers : boolean


Does this action manager has pick triggers

@return {boolean} whether or not it has pick triggers



##Methods

###dispose() &rarr; void
Delete the action manager




###getScene() &rarr; [Scene](page.php?p=5725)
Get the scene which contains the action manager




###hasSpecificTriggers(triggers) &rarr; boolean
Does this action manager handles actions of any of the given triggers
@return {boolean} whether one (or more) of the triggers is handeled

####Parameters
 | Name | Type | Description
---|---|---|---
 | triggers | number[] | @param triggers
---

###registerAction(action) &rarr; [Action](page.php?p=5726)
Registers an action to this action manager
@return {BABYLON.Action} the action amended (prepared) after registration

####Parameters
 | Name | Type | Description
---|---|---|---
 | action | [Action](page.php?p=5726) | The action to register
---

###processTrigger(trigger, evt) &rarr; void
Process a specific trigger

####Parameters
 | Name | Type | Description
---|---|---|---
 | trigger | number | The trigger
 | evt | [ActionEvent](page.php?p=5740) | {BABYLON.ActionEvent} the event details to be processed
---
