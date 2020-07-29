export * from  "./ZiroMessage"
export * from "./ZiroPromptMessage"
export * from "./ZiroWaitingMessage"

export * from "./catalogo"

/**
 * CODES
 * 
 * CATALOG                              - 0XXX
 *      
 *      - ANTIFRAUDE                    - 00XX
 *
 *          - REGISTER CARD             - 0001 - 0025
 *              - PROMPT                - 0001 - 0015
 *              - WAITING               - 0016 - 0025
 *
 *           - UPLOAD DOCUMENT          - 0026 - 0050
 *              - PROMPT                - 0026 - 0040
 *              - WAITING               - 0041 - 0050
 * 
 *          - UPLOAD SELFIE             - 0051 - 0075
 *              - PROMPT                - 0051 - 0065
 *              - WAITING               - 0066 - 0075
 * 
 *          - COMMON                    - 0076 - 0099
 *              - PROMPT                - 0076 - 0090
 *              - WAITING               - 0091 - 0099
 *          
 */