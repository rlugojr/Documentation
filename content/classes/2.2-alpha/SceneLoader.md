---
ID_PAGE: 25211
PG_TITLE: SceneLoader
PG_VERSION: 2.1
TAGS:
    - Scene
---
##Description

class [SceneLoader](/classes/2.2-alpha/SceneLoader)



##Members

###static ForceFullSceneLoadingForIncremental : boolean

True to force the full loading of the scene, also to prevent from delaying the texture loading; false otherwise

###static ShowLoadingScreen : boolean

True to show the loading screen, false otherwise

##Methods

###static RegisterPlugin(plugin) &rarr; void

Registers a scene loader plugin

####Parameters
 | Name | Type | Description
---|---|---|---
 | plugin | ISceneLoaderPlugin | 

###static ImportMesh(meshesNames, rootUrl, sceneFilename, scene, onsuccess, progressCallBack, onerror) &rarr; void

Imports meshes using the given url and names

####Parameters
 | Name | Type | Description
---|---|---|---
 | meshesNames | any | 
 | rootUrl | string | 
 | sceneFilename | string | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | onsuccess | (meshes: [AbstractMesh](/classes/2.2-alpha/AbstractMesh)[], particleSystems: [ParticleSystem](/classes/2.2-alpha/ParticleSystem)[], skeletons: [Skeleton](/classes/2.2-alpha/Skeleton)[]) =&gt; void | 
optional | progressCallBack | () =&gt; void | 
optional | onerror | (scene: [Scene](/classes/2.2-alpha/Scene), e: any) =&gt; void | 

###static Load(rootUrl, sceneFilename, engine, onsuccess, progressCallBack, onerror) &rarr; void

Load a scene

####Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string |  a string that defines the root url for scene and resources
 | sceneFilename | any |  a string that defines the name of the scene file. can start with "data:" following by the stringified version of the scene
 | engine | [Engine](/classes/2.2-alpha/Engine) |  is the instance of BABYLON.[Engine](/classes/2.2-alpha/Engine) to use to create the scene
optional | onsuccess | (scene: [Scene](/classes/2.2-alpha/Scene)) =&gt; void | 
optional | progressCallBack | any | 
optional | onerror | (scene: [Scene](/classes/2.2-alpha/Scene)) =&gt; void | 

###static Append(rootUrl, sceneFilename, scene, onsuccess, progressCallBack, onerror) &rarr; void

Append a scene

####Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string |  a string that defines the root url for scene and resources
 | sceneFilename | any |  a string that defines the name of the scene file. can start with "data:" following by the stringified version of the scene
 | scene | [Scene](/classes/2.2-alpha/Scene) |  is the instance of BABYLON.[Scene](/classes/2.2-alpha/Scene) to append to
optional | onsuccess | (scene: [Scene](/classes/2.2-alpha/Scene)) =&gt; void | 
optional | progressCallBack | any | 
optional | onerror | (scene: [Scene](/classes/2.2-alpha/Scene)) =&gt; void | 

