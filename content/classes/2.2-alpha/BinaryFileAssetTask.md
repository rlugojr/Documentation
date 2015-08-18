---
ID_PAGE: 25309
PG_TITLE: BinaryFileAssetTask
PG_VERSION: 2.1
---
##Description

class [BinaryFileAssetTask](/classes/2.2-alpha/BinaryFileAssetTask)



##Constructor

##new [BinaryFileAssetTask](/classes/2.2-alpha/BinaryFileAssetTask)(name, url)

The [BinaryFileAssetTask](/classes/2.2-alpha/BinaryFileAssetTask)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | url | string | 

##Members

###name : string

The name

###url : string

The url for this binary file

###onSuccess : (task: IAssetTask) =&gt; void

Function call when the mesh is load successfully

###onError : (task: IAssetTask) =&gt; void

Function call when the mesh isn't load successfully

###isCompleted : boolean

True if is completed, false otherwise.

###data : ArrayBuffer

The data

##Functions

###run(scene, onSuccess, onError) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
 | onSuccess | () =&gt; void | 
 | onError | () =&gt; void | 
