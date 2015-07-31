---
ID_PAGE: 6752
PG_TITLE: Vector4
PG_VERSION: 2.1
TAGS:
    - Objects
---
##new [Vector4](page.php?p=6752)(x, y, z, w)




####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | w | number | 
---

##Members

###x : number




###y : number




###z : number




###w : number









##Methods

###toString() &rarr; string




###asArray() &rarr; number[]




###toArray(array, index) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
optional | index | number | 
---

###addInPlace(otherVector) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](page.php?p=6752) | 
---

###add(otherVector) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](page.php?p=6752) | 
---

###addToRef(otherVector, result) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](page.php?p=6752) | 
 | result | [Vector4](page.php?p=6752) | 
---

###subtractInPlace(otherVector) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](page.php?p=6752) | 
---

###subtract(otherVector) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](page.php?p=6752) | 
---

###subtractToRef(otherVector, result) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](page.php?p=6752) | 
 | result | [Vector4](page.php?p=6752) | 
---

###subtractFromFloats(x, y, z, w) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | w | number | 
---

###subtractFromFloatsToRef(x, y, z, w, result) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | w | number | 
 | result | [Vector4](page.php?p=6752) | 
---

###negate() &rarr; [Vector4](page.php?p=6752)




###scaleInPlace(scale) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 
---

###scale(scale) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 
---

###scaleToRef(scale, result) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 
 | result | [Vector4](page.php?p=6752) | 
---

###equals(otherVector) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](page.php?p=6752) | 
---

###equalsWithEpsilon(otherVector) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](page.php?p=6752) | 
---

###equalsToFloats(x, y, z, w) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | w | number | 
---

###multiplyInPlace(otherVector) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](page.php?p=6752) | 
---

###multiply(otherVector) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](page.php?p=6752) | 
---

###multiplyToRef(otherVector, result) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](page.php?p=6752) | 
 | result | [Vector4](page.php?p=6752) | 
---

###multiplyByFloats(x, y, z, w) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | w | number | 
---

###divide(otherVector) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](page.php?p=6752) | 
---

###divideToRef(otherVector, result) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](page.php?p=6752) | 
 | result | [Vector4](page.php?p=6752) | 
---

###MinimizeInPlace(other) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Vector4](page.php?p=6752) | 
---

###MaximizeInPlace(other) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Vector4](page.php?p=6752) | 
---

###length() &rarr; number




###lengthSquared() &rarr; number




###normalize() &rarr; [Vector4](page.php?p=6752)




###clone() &rarr; [Vector4](page.php?p=6752)




###copyFrom(source) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector4](page.php?p=6752) | 
---

###copyFromFloats(x, y, z, w) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | w | number | 
---

###static FromArray(array, offset) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
optional | offset | number | 
---

###static FromArrayToRef(array, offset, result) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
 | offset | number | 
 | result | [Vector4](page.php?p=6752) | 
---

###static FromFloatArrayToRef(array, offset, result) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array | 
 | offset | number | 
 | result | [Vector4](page.php?p=6752) | 
---

###static FromFloatsToRef(x, y, z, w, result) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | w | number | 
 | result | [Vector4](page.php?p=6752) | 
---

###static Zero() &rarr; [Vector4](page.php?p=6752)




###static Normalize(vector) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector4](page.php?p=6752) | 
---

###static NormalizeToRef(vector, result) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector4](page.php?p=6752) | 
 | result | [Vector4](page.php?p=6752) | 
---

###static Minimize(left, right) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector4](page.php?p=6752) | 
 | right | [Vector4](page.php?p=6752) | 
---

###static Maximize(left, right) &rarr; [Vector4](page.php?p=6752)



####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector4](page.php?p=6752) | 
 | right | [Vector4](page.php?p=6752) | 
---

###static Distance(value1, value2) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector4](page.php?p=6752) | 
 | value2 | [Vector4](page.php?p=6752) | 
---

###static DistanceSquared(value1, value2) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector4](page.php?p=6752) | 
 | value2 | [Vector4](page.php?p=6752) | 
---

###static Center(value1, value2) &rarr; [Vector4](page.php?p=6752)

####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector4](page.php?p=6752) | 
 | value2 | [Vector4](page.php?p=6752) | 
---
