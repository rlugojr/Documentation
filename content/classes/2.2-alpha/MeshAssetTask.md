---
ID_PAGE: 25307
PG_TITLE: MeshAssetTask
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Assets
---
##Description

class [MeshAssetTask](/classes/2.2-alpha/MeshAssetTask)



##Constructor

##new [MeshAssetTask](/classes/2.2-alpha/MeshAssetTask)(name, meshesNames, rootUrl, sceneFilename)

The [MeshAssetTask](/classes/2.2-alpha/MeshAssetTask) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | meshesNames | any | 
 | rootUrl | string | 
 | sceneFilename | string | 

##Members

###name : string

The task name

###meshesNames : any

The meshes names to load

###rootUrl : string

The root url for this mesh

###sceneFilename : string

The babylon file name

###loadedMeshes : Array&lt;[AbstractMesh](/classes/2.2-alpha/AbstractMesh)&gt;

The loaded meshes

###loadedParticleSystems : Array&lt;[ParticleSystem](/classes/2.2-alpha/ParticleSystem)&gt;

The loaded Particule system linked to this mesh

###loadedSkeletons : Array&lt;[Skeleton](/classes/2.2-alpha/Skeleton)&gt;

The loaded Skeletons linked to this mesh

###onSuccess : (task: IAssetTask) =&gt; void

Function call when the mesh is load successfully

###onError : (task: IAssetTask) =&gt; void

Function call when the mesh isn't load successfully

###isCompleted : boolean

True if is completed, false otherwise.

##Methods

###run(scene, onSuccess, onError) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
 | onSuccess | () =&gt; void | 
 | onError | () =&gt; void | 

