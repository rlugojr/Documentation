---
ID_PAGE: 25237
PG_TITLE: Color4
PG_VERSION: 2.1
TAGS:
    - Objects
---
##Description

class [Color4](/classes/2.2-alpha/Color4)



##Constructor

##new [Color4](/classes/2.2-alpha/Color4)(r, g, b, a)

Creates a new RGBA [Color4](/classes/2.2-alpha/Color4)

####Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | 
 | g | number | 
 | b | number | 
 | a | number | 

##Members

###r : number

The red value

###g : number

The green value

###b : number

The blue value

###a : number

The alpha value

##Methods

###addInPlace(right) &rarr; [Color4](/classes/2.2-alpha/Color4)

Adds another [Color4](/classes/2.2-alpha/Color4)

####Parameters
 | Name | Type | Description
---|---|---|---
 | right | any | 

###asArray() &rarr; number[]

Returns an array representation of the color
###toArray(array, index) &rarr; [Color4](/classes/2.2-alpha/Color4)

Fills an array from a given index with the color's values

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
optional | index | number | 

###add(right) &rarr; [Color4](/classes/2.2-alpha/Color4)

Adds another color and returns the result

####Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/2.2-alpha/Color4) | 

###subtract(right) &rarr; [Color4](/classes/2.2-alpha/Color4)

Substracts another color and returns the result

####Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/2.2-alpha/Color4) | 

###subtractToRef(right, result) &rarr; [Color4](/classes/2.2-alpha/Color4)

Substracts another color into a third color

####Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/2.2-alpha/Color4) | 
 | result | [Color4](/classes/2.2-alpha/Color4) | 

###scale(scale) &rarr; [Color4](/classes/2.2-alpha/Color4)

Scales a [Color4](/classes/2.2-alpha/Color4)

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 

###scaleToRef(scale, result) &rarr; [Color4](/classes/2.2-alpha/Color4)

Scales a [Color4](/classes/2.2-alpha/Color4) into an existing [Color4](/classes/2.2-alpha/Color4)

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 
 | result | [Color4](/classes/2.2-alpha/Color4) | 

###toString() &rarr; string

Returns a string representation of the color
###clone() &rarr; [Color4](/classes/2.2-alpha/Color4)

Clones the color into a new [Color4](/classes/2.2-alpha/Color4)
###copyFrom(source) &rarr; [Color4](/classes/2.2-alpha/Color4)



####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Color4](/classes/2.2-alpha/Color4) | 

###toHexString() &rarr; string


###static FromHexString(hex) &rarr; [Color4](/classes/2.2-alpha/Color4)



####Parameters
 | Name | Type | Description
---|---|---|---
 | hex | string | 

###static Lerp(left, right, amount) &rarr; [Color4](/classes/2.2-alpha/Color4)

Linear interpolation of a color 4

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Color4](/classes/2.2-alpha/Color4) | 
 | right | [Color4](/classes/2.2-alpha/Color4) | 
 | amount | number | 

###static LerpToRef(left, right, amount, result) &rarr; void

Linear interpolation of a color 4 into an existing [Color4](/classes/2.2-alpha/Color4)

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Color4](/classes/2.2-alpha/Color4) | 
 | right | [Color4](/classes/2.2-alpha/Color4) | 
 | amount | number | 
 | result | [Color4](/classes/2.2-alpha/Color4) | 

###static FromArray(array, offset) &rarr; [Color4](/classes/2.2-alpha/Color4)

Creates new [Color4](/classes/2.2-alpha/Color4) from the given array

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
optional | offset | number | 

###static FromInts(r, g, b, a) &rarr; [Color4](/classes/2.2-alpha/Color4)



####Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | 
 | g | number | 
 | b | number | 
 | a | number | 

