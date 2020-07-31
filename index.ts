export * from "./src"
import { ZiroPromptFullData, ZiroWaitingFullData } from "./src"

/**
 * CODES
 */
export type Codes = CatalogCodes
/**
 * CATALOG                              0XXX
 */
export type CatalogCodes = AntifraudeCodes
/**
 * ANTIFRAUDE                           00XX
 */
export type AntifraudeCodes = RegisterCardCodes|UploadDocumentCodes|UploadSelfieCodes|CommonAntifraudeCodes
/**
 * REGISTER CARD                        0000 - 0024
 */
//Prompt
export type RegisterCardPromptCodes = "0000"|"0001"|"0002"|"0003"|"0004"|"0005"|"0006"|"0007"|"0008"|"0009"|"0010"|"0011"|"0012"|"0013"|"0014"|"0015"|"0016"|"0017"|"0018"|"0019"
export type RegisterCardPromptData<C extends RegisterCardPromptCodes> = ZiroPromptFullData<C,{}>
//Waiting
export type RegisterCardWaitingCodes = "0020"|"0021"|"0022"|"0023"|"0024"
export type RegisterCardWaitingData<C extends RegisterCardWaitingCodes> = ZiroWaitingFullData<C,{}>
//All
export type RegisterCardCodes = RegisterCardPromptCodes|RegisterCardWaitingCodes
/**
 * UPLOAD DOCUMENT                      0025 - 0049
 */
//Prompt
export type UploadDocumentPromptCodes = "0025"|"0026"|"0027"|"0028"|"0029"|"0030"|"0031"|"0032"|"0033"|"0034"|"0035"|"0036"|"0037"|"0038"|"0039"|"0040"|"0041"|"0042"|"0043"|"0044"
export type UploadDocumentPromptData<C extends UploadDocumentPromptCodes> = ZiroPromptFullData<C,{}>
//Waiting
export type UploadDocumentWaitingCodes = "0045"|"0046"|"0047"|"0048"|"0049"
export type UploadDocumentWaitingData<C extends UploadDocumentWaitingCodes> = ZiroWaitingFullData<C,{}>
//All
export type UploadDocumentCodes = UploadDocumentPromptCodes|UploadDocumentWaitingCodes
/**
 * UPLOAD SELFIE                        0050 - 0074
 */
//Prompt
export type UploadSelfiePromptCodes = "0050"|"0051"|"0052"|"0053"|"0054"|"0055"|"0056"|"0057"|"0058"|"0059"|"0060"|"0061"|"0062"|"0063"|"0064"|"0065"|"0066"|"0067"|"0068"|"0068"|"0069"
export type UploadSelfiePromptData<C extends UploadSelfiePromptCodes> = ZiroPromptFullData<C,{}>
//Waiting
export type UploadSelfieWaitingCodes = "0070"|"0071"|"0072"|"0073"|"0074"
export type UploadSelfieWaitingData<C extends UploadSelfieWaitingCodes> = ZiroWaitingFullData<C,{}>
//All
export type UploadSelfieCodes = UploadSelfiePromptCodes|UploadSelfieWaitingCodes
/**
 * COMMON ANTIFRAUDE                    0075 - 0099
 */
//Prompt
export type CommonAntifraudePromptCodes = "0075"|"0076"|"0077"|"0078"|"0079"|"0080"|"0081"|"0082"|"0083"|"0084"|"0085"|"0086"|"0087"|"0088"|"0089"|"0090"|"0091"|"0092"|"0093"|"0094"
export type CommonAntifraudePromptData<C extends CommonAntifraudePromptCodes> = ZiroPromptFullData<C,{}>
//Waiting
export type CommonAntifraudeWaitingCodes = "0095"|"0096"|"0097"|"0098"|"0099"
export type CommonAntifraudeWaitingData<C extends CommonAntifraudeWaitingCodes> = ZiroWaitingFullData<C,{}>
//All
export type CommonAntifraudeCodes = CommonAntifraudePromptCodes|CommonAntifraudeWaitingCodes