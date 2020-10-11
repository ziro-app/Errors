/**
 *      **************************************************
 *      **************************************************
 *      **** CÓDIGO GERADO AUTOMATICAMENTE, NÃO EDITE ****
 *      **************************************************
 *      **************************************************
 */
import { ZiroPromptFullData, ZiroWaitingFullData } from "./src";

export * from "./src";

type HTTPInfoStatus = 100 | 101 | 102 | 103;
type HTTPSuccessStatus = 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226;
type HTTPRedirectStatus = 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308;
type HTTPClientErrorStatus =
	| 400
	| 401
	| 402
	| 403
	| 404
	| 405
	| 406
	| 407
	| 408
	| 409
	| 410
	| 411
	| 412
	| 413
	| 414
	| 415
	| 416
	| 417
	| 418
	| 421
	| 422
	| 423
	| 424
	| 425
	| 426
	| 428
	| 429
	| 431
	| 451;
type HTTPServerErrorStatus = 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;

type HTTPErrorStatus = HTTPClientErrorStatus | HTTPServerErrorStatus;
/**
 * ZIRO
 */
export type ZiroCodes = CatalogCodes | NextCodeCodes | ZoopCodes;
/**
 * CATALOG
 */
export type CatalogCodes = AntifraudeCodes | PayCodes;
/**
 * ANTIFRAUDE
 */
export type AntifraudeCodes = RegisterCardCodes | FullOCRCodes | BiometryCodes | CommonAntifraudeCodes;
/**
 * REGISTERCARD
 */
export type RegisterCardCodes = RegisterCardPromptCodes | RegisterCardWaitingCodes;

export type RegisterCardPromptCodes =
	| "0000"
	| "0001"
	| "0002"
	| "0003"
	| "0004"
	| "0005"
	| "0006"
	| "0007"
	| "0008"
	| "0009"
	| "0010"
	| "0011"
	| "0012"
	| "0013"
	| "0014"
	| "0015"
	| "0016"
	| "0017"
	| "0018"
	| "0019";
export type RegisterCardPromptData<C extends RegisterCardPromptCodes> = ZiroPromptFullData<C>;

export type RegisterCardWaitingCodes = "0020" | "0021" | "0022" | "0023" | "0024";
export type RegisterCardWaitingData<C extends RegisterCardWaitingCodes> = ZiroWaitingFullData<C>;
/**
 * FULLOCR
 */
export type FullOCRCodes = FullOCRPromptCodes | FullOCRWaitingCodes;

export type FullOCRPromptCodes =
	| "0025"
	| "0026"
	| "0027"
	| "0028"
	| "0029"
	| "0030"
	| "0031"
	| "0032"
	| "0033"
	| "0034"
	| "0035"
	| "0036"
	| "0037"
	| "0038"
	| "0039"
	| "0040"
	| "0041"
	| "0042"
	| "0043"
	| "0044";
export type FullOCRPromptData<C extends FullOCRPromptCodes> = ZiroPromptFullData<C>;

export type FullOCRWaitingCodes = "0045" | "0046" | "0047" | "0048" | "0049";
export type FullOCRWaitingData<C extends FullOCRWaitingCodes> = ZiroWaitingFullData<C>;
/**
 * BIOMETRY
 */
export type BiometryCodes = BiometryPromptCodes | BiometryWaitingCodes;

export type BiometryPromptCodes =
	| "0050"
	| "0051"
	| "0052"
	| "0053"
	| "0054"
	| "0055"
	| "0056"
	| "0057"
	| "0058"
	| "0059"
	| "0060"
	| "0061"
	| "0062"
	| "0063"
	| "0064"
	| "0065"
	| "0066"
	| "0067"
	| "0068"
	| "0069";
export type BiometryPromptData<C extends BiometryPromptCodes> = ZiroPromptFullData<C>;

export type BiometryWaitingCodes = "0070" | "0071" | "0072" | "0073" | "0074";
export type BiometryWaitingData<C extends BiometryWaitingCodes> = ZiroWaitingFullData<C>;
/**
 * COMMONANTIFRAUDE
 */
export type CommonAntifraudeCodes = CommonAntifraudePromptCodes | CommonAntifraudeWaitingCodes;

export type CommonAntifraudePromptCodes =
	| "0075"
	| "0076"
	| "0077"
	| "0078"
	| "0079"
	| "0080"
	| "0081"
	| "0082"
	| "0083"
	| "0084"
	| "0085"
	| "0086"
	| "0087"
	| "0088"
	| "0089"
	| "0090"
	| "0091"
	| "0092"
	| "0093"
	| "0094";
export type CommonAntifraudePromptData<C extends CommonAntifraudePromptCodes> = ZiroPromptFullData<C>;

export type CommonAntifraudeWaitingCodes = "0095" | "0096" | "0097" | "0098" | "0099";
export type CommonAntifraudeWaitingData<C extends CommonAntifraudeWaitingCodes> = ZiroWaitingFullData<C>;
/**
 * PAY
 */
export type PayCodes = ChooseCardCodes | CommonPayCodes | CheckoutCodes | PreviewCodes;
/**
 * CHOOSECARD
 */
export type ChooseCardCodes = ChooseCardPromptCodes | ChooseCardWaitingCodes;

export type ChooseCardPromptCodes =
	| "0100"
	| "0101"
	| "0102"
	| "0103"
	| "0104"
	| "0105"
	| "0106"
	| "0107"
	| "0108"
	| "0109"
	| "0110"
	| "0111"
	| "0112"
	| "0113"
	| "0114"
	| "0115"
	| "0116"
	| "0117"
	| "0118"
	| "0119";
export type ChooseCardPromptData<C extends ChooseCardPromptCodes> = ZiroPromptFullData<C>;

export type ChooseCardWaitingCodes = "0120" | "0121" | "0122" | "0123" | "0124";
export type ChooseCardWaitingData<C extends ChooseCardWaitingCodes> = ZiroWaitingFullData<C>;
/**
 * COMMONPAY
 */
export type CommonPayCodes = CommonPayPromptCodes | CommonPayWaitingCodes;

export type CommonPayPromptCodes =
	| "0125"
	| "0126"
	| "0127"
	| "0128"
	| "0129"
	| "0130"
	| "0131"
	| "0132"
	| "0133"
	| "0134"
	| "0135"
	| "0136"
	| "0137"
	| "0138"
	| "0139"
	| "0140"
	| "0141"
	| "0142"
	| "0143"
	| "0144";
export type CommonPayPromptData<C extends CommonPayPromptCodes> = ZiroPromptFullData<C>;

export type CommonPayWaitingCodes = "0145" | "0146" | "0147" | "0148" | "0149";
export type CommonPayWaitingData<C extends CommonPayWaitingCodes> = ZiroWaitingFullData<C>;
/**
 * CHECKOUT
 */
export type CheckoutCodes = CheckoutPromptCodes | CheckoutWaitingCodes;

export type CheckoutPromptCodes =
	| "0150"
	| "0151"
	| "0152"
	| "0153"
	| "0154"
	| "0155"
	| "0156"
	| "0157"
	| "0158"
	| "0159"
	| "0160"
	| "0161"
	| "0162"
	| "0163"
	| "0164"
	| "0165"
	| "0166"
	| "0167"
	| "0168"
	| "0169";
export type CheckoutPromptData<C extends CheckoutPromptCodes> = ZiroPromptFullData<C>;

export type CheckoutWaitingCodes = "0170" | "0171" | "0172" | "0173" | "0174";
export type CheckoutWaitingData<C extends CheckoutWaitingCodes> = ZiroWaitingFullData<C>;
/**
 * PREVIEW
 */
export type PreviewCodes = PreviewPromptCodes | PreviewWaitingCodes;

export type PreviewPromptCodes =
	| "0175"
	| "0176"
	| "0177"
	| "0178"
	| "0179"
	| "0180"
	| "0181"
	| "0182"
	| "0183"
	| "0184"
	| "0185"
	| "0186"
	| "0187"
	| "0188"
	| "0189"
	| "0190"
	| "0191"
	| "0192"
	| "0193"
	| "0194";
export type PreviewPromptData<C extends PreviewPromptCodes> = ZiroPromptFullData<C>;

export type PreviewWaitingCodes = "0195" | "0196" | "0197" | "0198" | "0199";
export type PreviewWaitingData<C extends PreviewWaitingCodes> = ZiroWaitingFullData<C>;
/**
 * NEXTCODE
 */
export type NextCodeCodes = NextCodePromptCodes;

export type NextCodePromptCodes =
	| "1000"
	| "1001"
	| "1002"
	| "1003"
	| "1004"
	| "1005"
	| "1006"
	| "1007"
	| "1008"
	| "1009"
	| "1010"
	| "1011"
	| "1012"
	| "1013"
	| "1014"
	| "1015"
	| "1016"
	| "1017"
	| "1018"
	| "1019"
	| "1020"
	| "1021"
	| "1022"
	| "1023"
	| "1024"
	| "1025"
	| "1026"
	| "1027"
	| "1028"
	| "1029"
	| "1030"
	| "1031"
	| "1032"
	| "1033"
	| "1034"
	| "1035"
	| "1036"
	| "1037"
	| "1038"
	| "1039"
	| "1040"
	| "1041"
	| "1042"
	| "1043"
	| "1044"
	| "1045"
	| "1046"
	| "1047"
	| "1048"
	| "1049"
	| "1050"
	| "1051"
	| "1052"
	| "1053"
	| "1054"
	| "1055"
	| "1056"
	| "1057"
	| "1058"
	| "1059"
	| "1060"
	| "1061"
	| "1062"
	| "1063"
	| "1064"
	| "1065"
	| "1066"
	| "1067"
	| "1068"
	| "1069"
	| "1070"
	| "1071"
	| "1072"
	| "1073"
	| "1074"
	| "1075"
	| "1076"
	| "1077"
	| "1078"
	| "1079"
	| "1080"
	| "1081"
	| "1082"
	| "1083"
	| "1084"
	| "1085"
	| "1086"
	| "1087"
	| "1088"
	| "1089"
	| "1090"
	| "1091"
	| "1092"
	| "1093"
	| "1094"
	| "1095"
	| "1096"
	| "1097"
	| "1098"
	| "1099"
	| "1100";
export type NextCodePromptData<C extends NextCodePromptCodes, Status extends HTTPErrorStatus> = ZiroPromptFullData<
	C,
	{ status: Status }
>;
/**
 * ZOOP
 */
export type ZoopCodes = ZoopPromptCodes | RedePromptCodes;

export type ZoopPromptCodes =
	| "2000"
	| "2001"
	| "2002"
	| "2003"
	| "2004"
	| "2005"
	| "2006"
	| "2007"
	| "2008"
	| "2009"
	| "2010"
	| "2011"
	| "2012"
	| "2013"
	| "2014"
	| "2015"
	| "2016"
	| "2017"
	| "2018"
	| "2019"
	| "2020"
	| "2021"
	| "2022"
	| "2023"
	| "2024"
	| "2025"
	| "2026"
	| "2027"
	| "2028"
	| "2029"
	| "2030"
	| "2031"
	| "2032"
	| "2033"
	| "2034"
	| "2035"
	| "2036"
	| "2037"
	| "2038"
	| "2039"
	| "2040"
	| "2041"
	| "2042"
	| "2043"
	| "2044"
	| "2045"
	| "2046"
	| "2047"
	| "2048"
	| "2049"
	| "2050"
	| "2051"
	| "2052"
	| "2053"
	| "2054"
	| "2055"
	| "2056"
	| "2057"
	| "2058"
	| "2059"
	| "2060"
	| "2061"
	| "2062"
	| "2063"
	| "2064"
	| "2065"
	| "2066"
	| "2067"
	| "2068"
	| "2069"
	| "2070"
	| "2071"
	| "2072"
	| "2073"
	| "2074"
	| "2075"
	| "2076"
	| "2077"
	| "2078"
	| "2079"
	| "2080"
	| "2081"
	| "2082"
	| "2083"
	| "2084"
	| "2085"
	| "2086"
	| "2087"
	| "2088"
	| "2089"
	| "2090"
	| "2091"
	| "2092"
	| "2093"
	| "2094"
	| "2095"
	| "2096"
	| "2097"
	| "2098"
	| "2099";
export type ZoopPromptData<
	C extends ZoopPromptCodes,
	Status extends HTTPErrorStatus,
	Type extends string,
	Category extends string
> = ZiroPromptFullData<C, { status: Status; type: Type; category: Category }>;

export type RedePromptCodes =
	| "2100"
	| "2101"
	| "2102"
	| "2103"
	| "2104"
	| "2105"
	| "2106"
	| "2107"
	| "2108"
	| "2109"
	| "2110"
	| "2111"
	| "2112"
	| "2113"
	| "2114"
	| "2115"
	| "2116"
	| "2117"
	| "2118"
	| "2119"
	| "2120"
	| "2121"
	| "2122"
	| "2123"
	| "2124"
	| "2125"
	| "2126"
	| "2127"
	| "2128"
	| "2129"
	| "2130"
	| "2131"
	| "2132"
	| "2133"
	| "2134"
	| "2135"
	| "2136"
	| "2137"
	| "2138"
	| "2139"
	| "2140"
	| "2141"
	| "2142"
	| "2143"
	| "2144"
	| "2145"
	| "2146"
	| "2147"
	| "2148"
	| "2149"
	| "2150"
	| "2151"
	| "2152"
	| "2153"
	| "2154"
	| "2155"
	| "2156"
	| "2157"
	| "2158"
	| "2159"
	| "2160"
	| "2161"
	| "2162"
	| "2163"
	| "2164"
	| "2165"
	| "2166"
	| "2167"
	| "2168"
	| "2169"
	| "2170"
	| "2171"
	| "2172"
	| "2173"
	| "2174"
	| "2175"
	| "2176"
	| "2177"
	| "2178"
	| "2179"
	| "2180"
	| "2181"
	| "2182"
	| "2183"
	| "2184"
	| "2185"
	| "2186"
	| "2187"
	| "2188"
	| "2189"
	| "2190"
	| "2191"
	| "2192"
	| "2193"
	| "2194"
	| "2195"
	| "2196"
	| "2197"
	| "2198"
	| "2199";
export type RedePromptData<C extends RedePromptCodes, ResponseCode extends string> = ZiroPromptFullData<
	C,
	{ response_code: ResponseCode }
>;
