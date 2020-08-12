export * from "./src"
import { ZiroPromptFullData, ZiroWaitingFullData } from "./src"

type HTTPInfoStatus         = 100|101|102|103
type HTTPSuccessStatus      = 200|201|202|203|204|205|206|207|208|226
type HTTPRedirectStatus     = 300|301|302|303|304|305|306|307|308
type HTTPClientErrorStatus  = 400|401|402|403|404|405|406|407|408|409|410|411|412|413|414|415|416|417|418|421|422|423|424|425|426|428|429|431|451
type HTTPServerErrorStatus  = 500|501|502|503|504|505|506|507|508|510|511

type HTTPErrorStatus = HTTPClientErrorStatus|HTTPServerErrorStatus

/**
 * CODES
 */
export type Codes = CatalogCodes|NextCodeCodes
/**
 * CATALOG                              0XXX
 */
export type CatalogCodes = AntifraudeCodes
/**
 * ANTIFRAUDE                           00XX
 */
export type AntifraudeCodes = RegisterCardCodes|FullOCRCodes|BiometryCodes|CommonAntifraudeCodes
/**
 * REGISTER CARD                        0000 - 0024
 */
//Prompt
export type RegisterCardPromptCodes = "0000"|"0001"|"0002"|"0003"|"0004"|"0005"|"0006"|"0007"|"0008"|"0009"|"0010"|"0011"|"0012"|"0013"|"0014"|"0015"|"0016"|"0017"|"0018"|"0019"
export type RegisterCardPromptData<C extends RegisterCardPromptCodes> = ZiroPromptFullData<C>
//Waiting
export type RegisterCardWaitingCodes = "0020"|"0021"|"0022"|"0023"|"0024"
export type RegisterCardWaitingData<C extends RegisterCardWaitingCodes> = ZiroWaitingFullData<C>
//All
export type RegisterCardCodes = RegisterCardPromptCodes|RegisterCardWaitingCodes
/**
 * FULL OCR                      0025 - 0049
 */
//Prompt
export type FullOCRPromptCodes = "0025"|"0026"|"0027"|"0028"|"0029"|"0030"|"0031"|"0032"|"0033"|"0034"|"0035"|"0036"|"0037"|"0038"|"0039"|"0040"|"0041"|"0042"|"0043"|"0044"
export type FullOCRPromptData<C extends FullOCRPromptCodes> = ZiroPromptFullData<C>
//Waiting
export type FullOCRWaitingCodes = "0045"|"0046"|"0047"|"0048"|"0049"
export type FullOCRWaitingData<C extends FullOCRWaitingCodes> = ZiroWaitingFullData<C>
//All
export type FullOCRCodes = FullOCRPromptCodes|FullOCRWaitingCodes
/**
 * BIOMETRY                        0050 - 0074
 */
//Prompt
export type BiometryPromptCodes = "0050"|"0051"|"0052"|"0053"|"0054"|"0055"|"0056"|"0057"|"0058"|"0059"|"0060"|"0061"|"0062"|"0063"|"0064"|"0065"|"0066"|"0067"|"0068"|"0068"|"0069"
export type BiometryPromptData<C extends BiometryPromptCodes> = ZiroPromptFullData<C>
//Waiting
export type BiometryWaitingCodes = "0070"|"0071"|"0072"|"0073"|"0074"
export type BiometryWaitingData<C extends BiometryWaitingCodes> = ZiroWaitingFullData<C>
//All
export type BiometryCodes = BiometryPromptCodes|BiometryWaitingCodes
/**
 * COMMON ANTIFRAUDE                    0075 - 0099
 */
//Prompt
export type CommonAntifraudePromptCodes = "0075"|"0076"|"0077"|"0078"|"0079"|"0080"|"0081"|"0082"|"0083"|"0084"|"0085"|"0086"|"0087"|"0088"|"0089"|"0090"|"0091"|"0092"|"0093"|"0094"
export type CommonAntifraudePromptData<C extends CommonAntifraudePromptCodes> = ZiroPromptFullData<C>
//Waiting
export type CommonAntifraudeWaitingCodes = "0095"|"0096"|"0097"|"0098"|"0099"
export type CommonAntifraudeWaitingData<C extends CommonAntifraudeWaitingCodes> = ZiroWaitingFullData<C>
//All
export type CommonAntifraudeCodes = CommonAntifraudePromptCodes|CommonAntifraudeWaitingCodes
/**
 * NEXTCODE                             01XX
 */
//Prompt
export type NextCodePromptCodes = "0100"|"0101"|"0102"|"0103"|"0104"|"0105"|"0106"|"0107"|"0108"|"0109"|"0110"
export type NextCodePromptData<C extends NextCodePromptCodes,H extends HTTPErrorStatus> = ZiroPromptFullData<C,{ status: H }>
//Waiting
////////////////////////////////
//All
export type NextCodeCodes = NextCodePromptCodes
/**
 * ZOOP                                 02XX
 */
//Prompt
export type ZoopPromptCodes = "0200"|"0201"|"0202"|"0203"|"0204"|"0205"|"0206"|"0207"
export type ZoopPromptData<C extends ZoopPromptCodes,H extends HTTPErrorStatus> = ZiroPromptFullData<C,{ status: H }>