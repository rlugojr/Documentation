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
Options :
property|value
--------|-----
size|_(number)_ size of each box side
height|_(number)_ height size, overwrites _size_ property
width|_(number)_ width size, overwrites _size_ property
length|_(number)_ length size,  overwrites _size_ property 
faceColors|_(Color4[])_ array of 6 _Color4_, one per box face
faceUV|_(Vector4[])_ array of 6 _Vector4_, one per box face

####Sphere

####Cylinder

###Parametric Shapes

_edition in progress_