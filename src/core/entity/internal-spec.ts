export function getInternalSpec() {
    return internalSpec
}

export const internalSpec = {
    "provider": "Boomtown",
    "description": "Enables user to sync information between boomtown and other systems",
    "metadata": {
    },
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
        "internalSpecVersion": "1.0.0",
        "notesFile": "releaseNotes.html",
        "releaseDate": "2022-03-23T06:33:07Z"
    },
    "availableVersion": [
        "1.0.0"
    ]
};
