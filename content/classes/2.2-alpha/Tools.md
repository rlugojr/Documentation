---
ID_PAGE: 25335
PG_TITLE: Tools
PG_VERSION: 2.1
TAGS:
    - Tools
---
##Description

class [Tools](/classes/2.2-alpha/Tools)



##Members

###static BaseUrl : string



###static errorsCount : number



###static OnNewCacheEntry : (entry: string) =&gt; void



###static NoneLogLevel : number



###static MessageLogLevel : number



###static WarningLogLevel : number



###static ErrorLogLevel : number



###static AllLogLevel : number



###static Log : (message: string) =&gt; void



###static Warn : (message: string) =&gt; void



###static Error : (message: string) =&gt; void



###static LogCache : string



###static LogLevels : number



###static PerformanceNoneLogLevel : number



###static PerformanceUserMarkLogLevel : number



###static PerformanceConsoleLogLevel : number



###static PerformanceLogLevel : number



###static StartPerformanceCounter : (counterName: string, condition: boolean) =&gt; void



###static EndPerformanceCounter : (counterName: string, condition: boolean) =&gt; void



###static Now : number



##Methods

###static ToHex(i) &rarr; string



####Parameters
 | Name | Type | Description
---|---|---|---
 | i | number | 

###static SetImmediate(action) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | action | () =&gt; void | 

###static IsExponantOfTwo(value) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 

###static GetExponantOfTwo(value, max) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 
 | max | number | 

###static GetFilename(path) &rarr; string

Gets the filename from a complete path name

####Parameters
 | Name | Type | Description
---|---|---|---
 | path | string | 

###static GetDOMTextContent(element) &rarr; string

Returns the DOM text content of the given element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | 

###static ToDegrees(angle) &rarr; number

Converts an angle in radian to degrees

####Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 

###static ToRadians(angle) &rarr; number

Converts an angle in degrees to radian

####Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 

###static ExtractMinAndMaxIndexed(positions, indices, indexStart, indexCount) &rarr; { minimum: [Vector3](/classes/2.2-alpha/Vector3),  maximum: [Vector3](/classes/2.2-alpha/Vector3) }



####Parameters
 | Name | Type | Description
---|---|---|---
 | positions | number[] | 
 | indices | number[] | 
 | indexStart | number | 
 | indexCount | number | 

###static ExtractMinAndMax(positions, start, count) &rarr; { minimum: [Vector3](/classes/2.2-alpha/Vector3),  maximum: [Vector3](/classes/2.2-alpha/Vector3) }



####Parameters
 | Name | Type | Description
---|---|---|---
 | positions | number[] | 
 | start | number | 
 | count | number | 

###static MakeArray(obj, allowsNullUndefined) &rarr; Array&lt;any&gt;

Make an array

####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | 
optional | allowsNullUndefined | boolean | 

###static GetPointerPrefix() &rarr; string

Returns the pointer prefix Checks if hand.js is referenced in this project or if the browser natively supports pointer events.
###static QueueNewFrame(func) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | func | any | 

###static RequestFullscreen(element) &rarr; void

Request to get the fullscreen

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | any | 

###static ExitFullscreen() &rarr; void

Exit fullscreen
###static CleanUrl(url) &rarr; string

Execute regex, and replace &quot;#&quot; to &quot;%23&quot; and return the new url.

####Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 

###static LoadImage(url, onload, onerror, database) &rarr; HTMLImageElement

Load the image described by its URL. Check first if this image is in the indexeDB if the parameter {database} is specified.

####Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 
 | onload | any | 
 | onerror | any | 
 | database | any | 

###static LoadFile(url, callback, progressCallBack, database, useArrayBuffer, onError) &rarr; void

Load the file given by its URL. Check first if this file is in the indexeDB if the parameter {database} is specified.
This file is loaded via an ajax call otherwise.

####Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 
 | callback | (data: any) =&gt; void | 
optional | progressCallBack | () =&gt; void | 
optional | database | any | 
optional | useArrayBuffer | boolean | 
optional | onError | () =&gt; void | 

###static ReadFileAsDataURL(fileToLoad, callback, progressCallback) &rarr; void

Read the given file as data url

####Parameters
 | Name | Type | Description
---|---|---|---
 | fileToLoad | any | 
 | callback | any | 
 | progressCallback | any | 

###static ReadFile(fileToLoad, callback, progressCallBack, useArrayBuffer) &rarr; void

Read the given file

####Parameters
 | Name | Type | Description
---|---|---|---
 | fileToLoad | any | 
 | callback | any | 
 | progressCallBack | any | 
optional | useArrayBuffer | boolean | 

###static Clamp(value, min, max) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 
optional | min | number | 
optional | max | number | 

###static Sign(value) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 

###static Format(value, decimals) &rarr; string



####Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 
optional | decimals | number | 

###static CheckExtends(v, min, max) &rarr; void

Check extends

####Parameters
 | Name | Type | Description
---|---|---|---
 | v | [Vector3](/classes/2.2-alpha/Vector3) | 
 | min | [Vector3](/classes/2.2-alpha/Vector3) | 
 | max | [Vector3](/classes/2.2-alpha/Vector3) | 

###static WithinEpsilon(a, b, epsilon) &rarr; boolean

Returns true if the difference between the two parameter is within epsilon.
If yes, the two parameters can be considered equals.

####Parameters
 | Name | Type | Description
---|---|---|---
 | a | number | 
 | b | number | 
optional | epsilon | number | 

###static DeepCopy(source, destination, doNotCopyList, mustCopyList) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | source | any | 
 | destination | any | 
optional | doNotCopyList | string[] | 
optional | mustCopyList | string[] | 

###static IsEmpty(obj) &rarr; boolean

Returns true if the given array is empty, false otherwise

####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | 

###static RegisterTopRootEvents(events) &rarr; void

;

####Parameters
 | Name | Type | Description
---|---|---|---
 | events | { name: string,  handler: EventListener }[] | 

###static UnregisterTopRootEvents(events) &rarr; void

;

####Parameters
 | Name | Type | Description
---|---|---|---
 | events | { name: string,  handler: EventListener }[] | 

###static DumpFramebuffer(width, height, engine) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
 | engine | [Engine](/classes/2.2-alpha/Engine) | 

###static CreateScreenshot(engine, camera, size) &rarr; void

Take a screenshot

####Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/2.2-alpha/Engine) | 
 | camera | [Camera](/classes/2.2-alpha/Camera) | 
 | size | any | 

###static ValidateXHRData(xhr, dataType) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | xhr | XMLHttpRequest | 
optional | dataType | number | 

###static ClearLogCache() &rarr; void


###static GetFps() &rarr; number


