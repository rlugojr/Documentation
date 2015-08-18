---
ID_PAGE: 25310
PG_TITLE: ImageAssetTask
PG_VERSION: 2.1
TAGS:
    - Assets
---
##Description

class [ImageAssetTask](/classes/2.2-alpha/ImageAssetTask)



##Constructor

##new [ImageAssetTask](/classes/2.2-alpha/ImageAssetTask)(name, url)

The [ImageAssetTask](/classes/2.2-alpha/ImageAssetTask)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | url | string | 

##Members

###name : string

The name

###url : string

The url to this image

###onSuccess : (task: IAssetTask) =&gt; void

Function call when the mesh is load successfully

###onError : (task: IAssetTask) =&gt; void

Function call when the mesh isn't load successfully

###isCompleted : boolean

True if is completed, false otherwise.

###image : HTMLImageElement

The image

##Methods

###run(scene, onSuccess, onError) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
 | onSuccess | () =&gt; void | 
 | onError | () =&gt; void | 

