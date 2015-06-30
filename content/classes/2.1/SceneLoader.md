---
ID_PAGE: 6723
PG_TITLE: SceneLoader
PG_VERSION: 2.1
---

This class is used to import .babylon files into the scene





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
 | plugin | ISceneLoaderPlugin | @param plugin
---

###static ImportMesh(meshesNames, rootUrl, sceneFilename, scene, onsuccess, progressCallBack, onerror) &rarr; void
Imports meshes using the given url and names





####Parameters
 | Name | Type | Description
---|---|---|---
 | meshesNames | any | The meshes names to import. Set &quot;&quot; to select all meshes
 | rootUrl | string | The babylon file path
 | sceneFilename | string | The babylon file name
 | scene | [Scene](page.php?p=6662) | The scene where selected meshes will be imported
optional | onsuccess | (meshes: [AbstractMesh](page.php?p=6657)[], particleSystems: [ParticleSystem](page.php?p=6786)[], skeletons: [Skeleton](page.php?p=6703)[]) =&gt; void | The function triggered when all selected meshes are imported. Called with parameters meshes, particleSystems, skeletons
optional | progressCallBack | () =&gt; void | The function returning the import progress
optional | onerror | (scene: [Scene](page.php?p=6662), e: any) =&gt; void | The callback function triggered if an error occurs during the meshes loading
---

###static Load(rootUrl, sceneFilename, engine, onsuccess, progressCallBack, onerror) &rarr; void
Load a scene

####Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string | a string that defines the root url for scene and resources
 | sceneFilename | any | a string that defines the name of the scene file. can start with &quot;data:&quot; following by the stringified version of the scene
 | engine | [Engine](page.php?p=6629) | is the instance of [BABYLON](page.php?p=6625).Engine to use to create the scene
optional | onsuccess | (scene: [Scene](page.php?p=6662)) =&gt; void | The callback function triggered when the given file is correctly loaded
optional | progressCallBack | any | The function returning the import progress
optional | onerror | (scene: [Scene](page.php?p=6662)) =&gt; void | The callback function triggered if an error occurs during the given file loading
---

###static Append(rootUrl, sceneFilename, scene, onsuccess, progressCallBack, onerror) &rarr; void
Append a scene

####Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string | a string that defines the root url for scene and resources
 | sceneFilename | any | a string that defines the name of the scene file. can start with &quot;data:&quot; following by the stringified version of the scene
 | scene | [Scene](page.php?p=6662) | is the instance of [BABYLON](page.php?p=6625).Scene to append to
optional | onsuccess | (scene: [Scene](page.php?p=6662)) =&gt; void | The callback function called when the given file is correctly loaded
optional | progressCallBack | any | The function returning the import progress
optional | onerror | (scene: [Scene](page.php?p=6662)) =&gt; void | The callback function triggered if an error occurs during the given file loading
---
