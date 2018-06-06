﻿/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2014 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/


var externalObjectName = "PlugPlugExternalObject";
var lib = new ExternalObject( "lib:" + externalObjectName );

function dispatchTransportEvent(eventObj)
{
	//
	// send event to CEP
	//
    var event = new CSXSEvent();
    event.type = eventObj.type;
    event.data = eventObj.type;
    event.dispatch();
    
    return eventObj.type;
}
