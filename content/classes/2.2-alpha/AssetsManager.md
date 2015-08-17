---
ID_PAGE: 25312
PG_TITLE: AssetsManager
PG_VERSION: 2.1
TAGS:
    - Assets
---
##Description

class [AssetsManager](/classes/2.2-alpha/AssetsManager)



##Constructor

##new [AssetsManager](/classes/2.2-alpha/AssetsManager)(scene)

The [AssetsManager](/classes/2.2-alpha/AssetsManager) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.2-alpha/Scene) | 

##Members

###onFinish : (tasks: IAssetTask[]) =&gt; void

The callback

###onTaskSuccess : (task: IAssetTask) =&gt; void

The callback

###onTaskError : (task: IAssetTask) =&gt; void

Function call when the element

###useDefaultLoadingScreen : boolean

Default value is true, you can set false if you don't want to see the loading screen

##Methods

###addMeshTask(taskName, meshesNames, rootUrl, sceneFilename) &rarr; IAssetTask

Add and return the new [MeshAssetTask](/classes/2.2-alpha/MeshAssetTask)

####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | meshesNames | any | 
 | rootUrl | string | 
 | sceneFilename | string | 

###addTextFileTask(taskName, url) &rarr; IAssetTask

Add and return the new [TextFileAssetTask](/classes/2.2-alpha/TextFileAssetTask)

####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | url | string | 

###addBinaryFileTask(taskName, url) &rarr; IAssetTask

Add and return the new [BinaryFileAssetTask](/classes/2.2-alpha/BinaryFileAssetTask)

####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | url | string | 

###addImageTask(taskName, url) &rarr; IAssetTask

Add and return the new [TextFileAssetTask](/classes/2.2-alpha/TextFileAssetTask)

####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | url | string | 

###addTextureTask(taskName, url, noMipmap, invertY, samplingMode) &rarr; IAssetTask

Add and return the new [TextFileAssetTask](/classes/2.2-alpha/TextFileAssetTask)

####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | url | string | 
optional | noMipmap | boolean | 
optional | invertY | boolean | 
optional | samplingMode | number | 

###reset() &rarr; [AssetsManager](/classes/2.2-alpha/AssetsManager)

Reset all tasks
###load() &rarr; [AssetsManager](/classes/2.2-alpha/AssetsManager)


