---
ID_PAGE: 25041
PG_TITLE: Database
PG_VERSION: 2.0
---
##new [Database](/classes/Database)(urlToScene, callbackManifestChecked)



Create a new [Database](/classes/Database)
An explanation about how BabylonJs index all its resources can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/Caching-the-resources-in-IndexedDB)




####Parameters
 | Name | Type | Description
---|---|---|---
 | urlToScene | string | The Url to store the scene
 | callbackManifestChecked | (boolean) =&gt; any | The function to execute depending of whether the manifest has been found or not
---

##Members

###static isUASupportingBlobStorage : boolean




default : true



###static parseURL : (url: string) =&gt; string




Returns an absolute url using the given string

@param url The url to parse



###static ReturnFullUrlLocation : (url: string) =&gt; string




Returns the full location string

@param url The url location to complete











##Methods

###checkManifestFile() &rarr; void
Checks the manifest file






###openAsync(successCallback, errorCallback) &rarr; void
Tries to use the offline data if the manifest indicates so





####Parameters
 | Name | Type | Description
---|---|---|---
 | successCallback | any | Function to execute when data is successfuly loaded
 | errorCallback | any | Function to execute if data could not be loaded
---

###loadImageFromDB(url, image) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | The relative url of the image
 | image | HTMLImageElement | The element to put the image into
---
