---
ID_PAGE: 6698
PG_TITLE: Analyser
PG_VERSION: 2.1
---
##new [Analyser](page.php?p=6698)(scene)




####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=6662) | 
---

##Members

###SMOOTHING : number




###FFT_SIZE : number




###BARGRAPHAMPLITUDE : number




###DEBUGCANVASPOS : {x: number; y: number; }




###DEBUGCANVASSIZE : {width: number; height: number; }









##Methods

###getFrequencyBinCount() &rarr; number




###getByteFrequencyData() &rarr; Uint8Array




###getByteTimeDomainData() &rarr; Uint8Array




###getFloatFrequencyData() &rarr; Uint8Array




###drawDebugCanvas() &rarr; void




###stopDebugCanvas() &rarr; void




###connectAudioNodes(inputAudioNode, outputAudioNode) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | inputAudioNode | AudioNode | 
 | outputAudioNode | AudioNode | 
---

###dispose() &rarr; void

