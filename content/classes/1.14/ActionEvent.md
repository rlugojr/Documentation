---
ID_PAGE: 24495
PG_TITLE: ActionEvent
PG_VERSION: 1.14
---
##new [ActionEvent](/classes/ActionEvent)(source, pointerX, pointerY, meshUnderPointer, sourceEvent)

See more about Actions [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-Actions)
####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [AbstractMesh](/classes/AbstractMesh) | Source of the action event
 | pointerX | number | The pointer X
 | pointerY | number | The pointer Y
 | meshUnderPointer | [AbstractMesh](/classes/AbstractMesh) | The mesh under the pointer
optional | sourceEvent | any | The source event
---

##Members

###source : [AbstractMesh](/classes/AbstractMesh)


The source of the action event

###pointerX : number


The pointer X position

###pointerY : number


The pointer Y position

###meshUnderPointer : [AbstractMesh](/classes/AbstractMesh)


The mesh under the pointer position

###sourceEvent : any


The source of the event



##Methods

###static CreateNew(source) &rarr; [ActionEvent](/classes/ActionEvent)
Create a new action event

####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [AbstractMesh](/classes/AbstractMesh) | Source to the action event
---

###static CreateNewFromScene(scene, evt) &rarr; [ActionEvent](/classes/ActionEvent)
Create a new action from the specified scene

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/Scene) | The scene to create the new action
 | evt | Event | The event to action event
---
