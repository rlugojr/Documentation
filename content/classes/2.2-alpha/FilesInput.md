---
ID_PAGE: 25314
PG_TITLE: FilesInput
PG_VERSION: 2.1
TAGS:
    - Files
---
##Description

class [FilesInput](/classes/2.2-alpha/FilesInput)



##Constructor

##new [FilesInput](/classes/2.2-alpha/FilesInput)(p_engine, p_scene, p_canvas, p_sceneLoadedCallback, p_progressCallback, p_additionnalRenderLoopLogicCallback, p_textureLoadingCallback, p_startingProcessingFilesCallback)



####Parameters
 | Name | Type | Description
---|---|---|---
 | p_engine | [Engine](/classes/2.2-alpha/Engine) | 
 | p_scene | [Scene](/classes/2.2-alpha/Scene) | 
 | p_canvas | HTMLCanvasElement | 
 | p_sceneLoadedCallback | any | 
 | p_progressCallback | any | 
 | p_additionnalRenderLoopLogicCallback | any | 
 | p_textureLoadingCallback | any | 
 | p_startingProcessingFilesCallback | any | 

##Members

###static FilesTextures : any[]

The array that holds the png textures to load

###static FilesToLoad : any[]

The array that holds the vnd.ms-dds files to load

##Methods

###monitorElementForDragNDrop(p_elementToMonitor) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | p_elementToMonitor | HTMLElement | 

###loadFiles(event) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | event | any | 

###reload() &rarr; void


