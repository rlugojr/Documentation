---
ID_PAGE: 25308
PG_TITLE: TextFileAssetTask
PG_VERSION: 2.1
TAGS:
    - Assets
---
##Description

class [TextFileAssetTask](/classes/2.2-alpha/TextFileAssetTask)



##Constructor

##new [TextFileAssetTask](/classes/2.2-alpha/TextFileAssetTask)(name, url)

The [TextFileAssetTask](/classes/2.2-alpha/TextFileAssetTask) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | url | string | 

##Members

###name : string

The name

###url : string

The url to this text file

###onSuccess : (task: IAssetTask) =&gt; void

Function call when the mesh is load successfully

###onError : (task: IAssetTask) =&gt; void

Function call when the mesh isn't load successfully

###isCompleted : boolean

True if is completed, false otherwise.

###text : string

The text

##Methods

###run(scene, onSuccess, onError) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
 | onSuccess | () =&gt; void | 
 | onError | () =&gt; void | 

