---
ID_PAGE: 25140
PG_TITLE: Light
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
##Description

class [Light](/classes/2.2/Light) extends [Node](/classes/2.2/Node)



##Constructor

##new [Light](/classes/2.2/Light)(name, scene)

Creates a new [Light](/classes/2.2/Light) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/2.2/Scene) | 

##Members

###diffuse : [Color3](/classes/2.2/Color3)

The color of the diffuse reflection of the light

###specular : [Color3](/classes/2.2/Color3)

The color of the specular reflection of the light

###intensity : number

Controls the global intensity of the light

###range : number



###includeOnlyWithLayerMask : number



###includedOnlyMeshes : [AbstractMesh](/classes/2.2/AbstractMesh)[]

Holds the meshes affected by this light

###excludedMeshes : [AbstractMesh](/classes/2.2/AbstractMesh)[]

Holds the meshes non affected by this light

###excludeWithLayerMask : number



##Methods

###getShadowGenerator() &rarr; [ShadowGenerator](/classes/2.2/ShadowGenerator)

Returns the [ShadowGenerator](/classes/2.2/ShadowGenerator) object which allows among other things, meshes to block light
###getAbsolutePosition() &rarr; [Vector3](/classes/2.2/Vector3)


###transferToEffect(effect, uniformName0, uniformName1) &rarr; void

Gives the light to position with the given effect with given position names

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.2/Effect) | 
optional | uniformName0 | string | 
optional | uniformName1 | string | 

###canAffectMesh(mesh) &rarr; boolean

Tests if the given mesh is affectable by this light

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.2/AbstractMesh) | 

###getWorldMatrix() &rarr; [Matrix](/classes/2.2/Matrix)

Returns the world matrix
###dispose() &rarr; void


