# Use InternalSpec
How can we add internalSpec for connector?

## Introduction
The goal of InternalSpec is to define how the application interfaces with the Boomtown platform.

## Internal Specification 

### InternalSpec Json
Each key in InternalSpec is corresponds to an entity. Each property provides a direct way of specifying what should be the possible name/value for entity.

Key | Value | Description
------------ | ------------- | ------------- 
**provider** | should be a string value for connector | Used to unique identify in connector
**description** | should be a string value for connector description | Used to describe connector
**metadata** | contains primary information of the connector | Used to find metadata for connector
**components** | components lists the Boomtown platform touch points this connector supports| All available endpoints with details
**features** | contains list of provided features | All available features with details
**assets** | contains connector images/icon/files paths | All available assets with details
**releaseInfo** | contains current release details | Deployed release with details
**availableVersion** | contains available connector versions | Available versions for connector

Here is an example of its use:
```
{
  "provider": "Boomtown",
  "description": "Enables user to sync information between boomtown and other systems",
  "metadata": {},
  "components": {
    "cases-ui": {
      "label": "Case UI",
      "url": "https://url",
      "styles": {},
      "context": {
        "caseId": {
          "type": "string",
          "object": "issues",
          "property": "id"
        }
      }
    },
    "config":{
      "label": "config",
      "url": "https://url",
    }
  },
  "features": [
    {
      "label": "Cases",
      "dataFlow": "upstream",
      "icon": "cases-icon"
    }
  ],
  "assets": [
    {
      "label": "default-feature-icon",
      "path": "https://storage-url",
      "types": "image"
    }
  ],
  "releaseInfo": {
    "internalSpecVersion": "1.0",
    "notesFile": "releaseNotes.html",
    "releaseDate": "2022-03-23T06:33:07Z"
  },
  "availableVersion": [
    "1.0.0"
  ]
}
```

### metadata
Metadata contains the configuration key/values for the container. 

Key | Value | Description
------------ | ------------- | ------------- 

Here is an example of its use:
```
"metadata": {
    
}
```
### components
Component contains all available endpoints with label, endpoint url along with context entity for connector. 

Key | Value | Description
------------ | ------------- | ------------- 
**cases-ui** | cases-ui contains entity for case-ui endpoint | Endpoint details
**config** | config contains all configurations | Configuration details

Here is an example of its use:
```
"components": {
    "cases-ui": {
      "label": "UI",
      "url": "https://url",
      "styles": {},
      "context": {
        "caseId": {
          "type": "string",
          "object": "issues",
          "property": "id"
        }
      }
    },
    "config":{
      "label": "config",
      "url": "https://url",
    }
}
```

### cases-ui
Cases-ui is a sample entity for case UI and its contains all available endpoints with label, endpoint url along with context entity for connector. 

Key | Value | Description
------------ | ------------- | ------------- 
**label** | label should be a string value for endpoint | Case UI name
**url** | url should be a string value as URL | api endpoint URL
**context** | context contains the request entity | Entity for api endpoint request

Here is an example of its use:
```
"cases-ui": {
    "label": "Case UI",
    "url": "https://url",
    "styles": {},
    "context": {
      "caseId": {
        "type": "string",
        "object": "issues",
        "property": "id"
      }
    }
}
```

### config
Config is a sample entity for configuration and its contains all available endpoints with label, endpoint url along with context entity for connector. 

Key | Value | Description
------------ | ------------- | ------------- 
**label** | label should be a string value for endpoint | Config name
**url** | url should be a string value as URL | api endpoint URL

Here is an example of its use:
```
"config":{
    "label": "config",
    "url": "https://url",
}
```

### context
Key | Value | Description
------------ | ------------- | ------------- 
**caseId** | caseId entity contains the property metadata | Property metadata

Here is an example of its use:
```
"context": {
    "caseId": {
      "type": "string",
      "object": "issues",
      "property": "id"
    }
}

```

### features
Features contains all endpoints features along with label, endpoint dataflow and icons url. 

Key | Value | Description
------------ | ------------- | ------------- 
**label** | label should be a string value for feature name | Feature name
**dataFlow** | dataFlow should be a string value for data sync direction | Data sync direction
**icon** | icon should be a string value for assets unique identifier | Assets label

Here is an example of its use:
```
"features": [
    {
      "label": "Cases",
      "dataFlow": "upstream",
      "icon": "cases-icon"
    }
]
```

### assets
Assets include collections of label, path and types. 

Key | Value | Description
------------ | ------------- | ------------- 
**label** | label should be a string value for name | Used to unique identify in assets
**path** | path should be a always the https url | Used to store assets container path
**types** | types should be a declare a type of assets | Used to store the assets type for reference use

Here is an example:
```
"assets": [
    {
      "label": "default-feature-icon",
      "path": "https://storage-url",
      "types": "image"
    }
]
```

### releaseInfo
ReleaseInfo include all information related to latest stable connector version. 

Key | Value | Description
------------ | ------------- | ------------- 
**internalSpecVersion** | internalSpecVersion should be a string value for version | Used to unique identify in assets
**notesFile** | notesFile should be a always the https url | Used to store assets container path
**releaseDate** | releaseDate should be a release date | Release date information

Here is an example of its use:
```
"releaseInfo": {
    "internalSpecVersion": "1.0.0",
    "notesFile": "releaseNotes.html",
    "releaseDate": "2022-03-23T06:33:07Z"
}
```

### availableVersion
availableVersion contains all versions which are te part of released version.

Key | Value | Description
------------ | ------------- | ------------- 
**1.0.0** | version is a string value | Available version contains all supported versions

Here is an example of its use:
```
"availableVersion": [
  "1.0.0"
]
```

[Back To Index](../index.md)
