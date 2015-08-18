---
ID_PAGE: 25236
PG_TITLE: Color3
PG_VERSION: 2.1
TAGS:
    - Objects
---
##Description

class [Color3](/classes/2.2-alpha/Color3)



##Constructor

##new [Color3](/classes/2.2-alpha/Color3)(r, g, b)

Creates a new RGB [Color3](/classes/2.2-alpha/Color3)

####Parameters
 | Name | Type | Description
---|---|---|---
optional | r | number | 
optional | g | number | 
optional | b | number | 

##Members

###r : number

red value

###g : number

green value

###b : number

blue value

##Methods

###toString() &rarr; string

Returns a string representation of the color
###toArray(array, index) &rarr; [Color3](/classes/2.2-alpha/Color3)

Fills an array from a given index with the color's RGB values

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
optional | index | number | 

###toColor4(alpha) &rarr; [Color4](/classes/2.2-alpha/Color4)

Return a [Color4](/classes/2.2-alpha/Color4) object

####Parameters
 | Name | Type | Description
---|---|---|---
optional | alpha | number | 

###asArray() &rarr; number[]

Returns an array representation of the color
###toLuminance() &rarr; number

Returns the luminance of the color
###multiply(otherColor) &rarr; [Color3](/classes/2.2-alpha/Color3)

Multiplies two [Color3](/classes/2.2-alpha/Color3) and returns the result

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.2-alpha/Color3) | 

###multiplyToRef(otherColor, result) &rarr; [Color3](/classes/2.2-alpha/Color3)

Multiplies two [Color3](/classes/2.2-alpha/Color3) into an existing Color

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.2-alpha/Color3) | 
 | result | [Color3](/classes/2.2-alpha/Color3) | 

###equals(otherColor) &rarr; boolean

Tests if two [Color3](/classes/2.2-alpha/Color3) have the same rgb values

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.2-alpha/Color3) | 

###equalsFloats(r, g, b) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | 
 | g | number | 
 | b | number | 

###scale(scale) &rarr; [Color3](/classes/2.2-alpha/Color3)

Scales a [Color3](/classes/2.2-alpha/Color3) : multiply red, green and blue values by the given number

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 

###scaleToRef(scale, result) &rarr; [Color3](/classes/2.2-alpha/Color3)

Scale a [Color3](/classes/2.2-alpha/Color3) into an existing Color

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 
 | result | [Color3](/classes/2.2-alpha/Color3) | 

###add(otherColor) &rarr; [Color3](/classes/2.2-alpha/Color3)

Adds another color and returns the result

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.2-alpha/Color3) | 

###addToRef(otherColor, result) &rarr; [Color3](/classes/2.2-alpha/Color3)

Adds another color and store the result in the color given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.2-alpha/Color3) | 
 | result | [Color3](/classes/2.2-alpha/Color3) | 

###subtract(otherColor) &rarr; [Color3](/classes/2.2-alpha/Color3)

Substracts another color and returns the result

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.2-alpha/Color3) | 

###subtractToRef(otherColor, result) &rarr; [Color3](/classes/2.2-alpha/Color3)

Substracts another color and store the result in the given color

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.2-alpha/Color3) | 
 | result | [Color3](/classes/2.2-alpha/Color3) | 

###clone() &rarr; [Color3](/classes/2.2-alpha/Color3)

Create a clone of a [Color3](/classes/2.2-alpha/Color3)
###copyFrom(source) &rarr; [Color3](/classes/2.2-alpha/Color3)

Copies a [Color3](/classes/2.2-alpha/Color3)

####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Color3](/classes/2.2-alpha/Color3) | 

###copyFromFloats(r, g, b) &rarr; [Color3](/classes/2.2-alpha/Color3)

Copies a color from numbers

####Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | 
 | g | number | 
 | b | number | 

###toHexString() &rarr; string


###static FromHexString(hex) &rarr; [Color3](/classes/2.2-alpha/Color3)



####Parameters
 | Name | Type | Description
---|---|---|---
 | hex | string | 

###static FromArray(array, offset) &rarr; [Color3](/classes/2.2-alpha/Color3)

Creates a new [Color3](/classes/2.2-alpha/Color3) from an array

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
optional | offset | number | 

###static FromInts(r, g, b) &rarr; [Color3](/classes/2.2-alpha/Color3)

Creates a new [Color3](/classes/2.2-alpha/Color3) from a set of integers. Values must be between 0 and 255

####Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | 
 | g | number | 
 | b | number | 

###static Lerp(start, end, amount) &rarr; [Color3](/classes/2.2-alpha/Color3)

Linear interpolation of a color

####Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Color3](/classes/2.2-alpha/Color3) | 
 | end | [Color3](/classes/2.2-alpha/Color3) | 
 | amount | number | 

###static Red() &rarr; [Color3](/classes/2.2-alpha/Color3)

Red color
###static Green() &rarr; [Color3](/classes/2.2-alpha/Color3)

Green color
###static Blue() &rarr; [Color3](/classes/2.2-alpha/Color3)

Blue color
###static Black() &rarr; [Color3](/classes/2.2-alpha/Color3)

Black color
###static White() &rarr; [Color3](/classes/2.2-alpha/Color3)

White color
###static Purple() &rarr; [Color3](/classes/2.2-alpha/Color3)

Purple color
###static Magenta() &rarr; [Color3](/classes/2.2-alpha/Color3)

Magenta color
###static Yellow() &rarr; [Color3](/classes/2.2-alpha/Color3)

Yellow color
###static Gray() &rarr; [Color3](/classes/2.2-alpha/Color3)


