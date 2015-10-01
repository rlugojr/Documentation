##Mesh CreateXXX() Methods With Options Parameter
In this tutorial, we will learn how to use the classical Mesh _CreateXXX()_ methods with the _options_ parameter instead of the full list of parameters.  
Indeed, as for BJS 2.3+, all the _CreateXXX()_ methods can be called either by 
```javascript
var mesh = BABYLON.CreateMesh(name, param1, param2, param3, ..., scene);
```
either by
```javascript
var mesh = BABYLON.CreateMesh(name, {param1 : val1, param2: val2}, scene);
```

Why to use then the _options_ parameter if it only does the same as the parameter list ?

Because it doesn't do just only the same ...  
Depending on the shape type, it allows to make some (or all) parameters optional or it provides more features to the created mesh.  

###Fixed Shapes
We call _fixed shapes_ all the mesh types that are not parametric, it is to say all the mesh types what have an expected final shape.  
For instance, if we create a _Sphere_ or a _Box_ mesh, we expect to get a spherical or a cubic shape whereas if we create a _Ribbon_ mesh, as it depends upon a data set to be created (the _pathArray_), we can't predict its final shape.  

All fixed shapes can be created by default by using a blank _options_ parameter :
```javascript
var cylinder = BABYLON.Mesh.CreateCylinder("cyl", {}, scene);
```
This means all the _options_ properties are simply optional.  

####Box
Example :
```javascript
var box = BABYLON.Mesh.CreateBox("box", {height: 5, faceColors: myColors}, scene);
```
Properties, all optional :

property|value
--------|-----
size|_(number)_ size of each box side
height|_(number)_ height size, overwrites _size_ property
width|_(number)_ width size, overwrites _size_ property
length|_(number)_ length size,  overwrites _size_ property 
faceColors|_(Color4[])_ array of 6 _Color4_, one per box face
faceUV|_(Vector4[])_ array of 6 _Vector4_, one per box face
sideOrientation|_(number)_ side orientation

####Sphere
Example :
```javascript
var sphere = BABYLON.Mesh.CreateSphere("sphere", {diameter: 2, diameterX: 3}, scene);
```
Properties, all optional :

property|value
--------|-----
segments|_(number)_ number of horizontal segments
diameter|_(number)_ diameter of the sphere
diameterX|_(number)_ diameter on X axis, overwrites _diameter_ property
diameterY|_(number)_ diameter on Y axis, overwrites _diameter_ property
diameterZ|_(number)_ diameter on Z axis, overwrites _diameter_ property
sideOrientation|_(number)_ side orientation

####Cylinder
Example :
```javascript
var cylinder = BABYLON.Mesh.CreateCylinder("cyl", {diameterBottom: 0, tessellation: 4}, scene);
```
Properties, all optional :

property|value
--------|-----
height|_(number)_ height of the cylinder
diameterTop|_(number)_ diameter of the top cap, can be zero
diameterBottom|_(number)_ diameter of the bottom cap, can't be zero
tessellation|_(number)_ number of radial sides
subdivisions|_(number)_ number of rings
sideOrientation|_(number)_ side orientation

####Plane
Example :
```javascript
var plane = BABYLON.Mesh.CreatePlane("plane", {width: 5}, scene);
```
Properties, all optional :

property|value
--------|-----
size|_(number)_ side size of the plane
width|_(number)_ size of the width
height|_(number)_ size of the height
sideOrientation|_(number)_ side orientation

####Ground
Example :
```javascript
var ground = BABYLON.Mesh.CreateGround("gd", {width: 6, subdivsions: 4}, scene);
```
Properties, all optional :

property|value
--------|-----
width|_(number)_ size of the width
height|_(number)_ size of the height
subdivisions|_(number)_ number of square subdivisions

####Disc
Remembe you can create any kind of regular plane polygon with _CreateDisc()_  
Example :  
```javascript
var disc = BABYLON.Mesh.CreateDisc("disc", {tessellation: 3}, scene); // makes a triangle
```
Properties, all optional :

property|value
--------|-----
radius|_(number)_ the radius of the disc or polygon
tessellation|_(number)_ the number of disc/polygon sides
sideOrientation|_(number)_ side orientation

####Torus
Example :
```javascript
var torus = BABYLON.Mesh.CreateTorus("torus", {thickness: 0.2}, scene);
```
Properties, all optional :

property|value
--------|-----
diameter|_(number)_ diameter of the torus
thickness|_(number)_ thickness of its tube
tessellation|_(number)_ number of segments along the circle
sideOrientation|_(number)_ side orientation

####Torus Knot
Example :
```javascript
var torus = BABYLON.Mesh.CreateTorusKnot("tk", {}, scene);
```
Properties, all optional :

property|value
--------|-----
radius|_(number)_ radius of the torus knot
tube|_(number)_ thickness of its tube
radialSegments|_(number)_ number of radial segments
tubularSegments|_(number)_ number of tubular segments
p|_(number)_ number of torsions
q|_(number)_ number of torsions
sideOrientation|_(number)_ side orientation

###Parametric Shapes
####Lines
You must set at least the _points_ property.  

Example :
```javascript
lines = BABYLON.Mesh.CreateLines("lines", {points: myArray, instance: lines});
// updates the existing instance of lines : doesn't even need the parameter scene
```
Properties :

property|value
--------|-----
points|_(Vector3[])_  array of Vector3, the path of the line **REQUIRED**  
instance|_(LineMesh)_ an instance of a line mesh to be updated

####Dashed Lines
You must set at least the _points_ property.  

Example :
```javascript
dashedLines = BABYLON.Mesh.CreateDashedLines("dl", {points: myArray, instance: dashedLines});
// updates the existing instance of dashedLines : doesn't even need the parameter scene
```
Properties :

property|value
--------|-----
points|_(Vector3[])_  array of Vector3, the path of the line **REQUIRED** 
dashSize|_(number)_  size of the dashes
gapSize|_(number)_  size of the gaps
dashBn|_(number)_  intended number of dashes
instance|_(LineMesh)_ an instance of a line mesh to be updated

_edition in progress_
