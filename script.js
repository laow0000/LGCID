
const clients = {
  "DE001_CVS":    { name: "DE001_CVS",  ID: "9517201",  Mpid: "1203", status:"ACTIVE",  schedule: "Run [EVERY] day of the month @ [02:30]", notes:  "", timestamp:  ""},
  "MF001_InternalQAMF":    { name: "MF001_InternalQAMF",  ID: "8224024",  Mpid: "913",  status:"ACTIVE",  schedule: "Run [EVERY] day of the month @ [02:30]", notes:  "", timestamp:  ""},
  "MF003_InternalVRx":    { name: "MF003_InternalVRx",  ID: "8224024",  Mpid: "1033", status:"SUSPENDED", schedule: "Run [EVERY] day of the month @ [02:30]", notes:  "", timestamp:  ""},
  "MF001_Envision":    { name: "MF001_Envision",  ID: "9516851",  Mpid: "964",  status:"ACTIVE",  schedule: "Run [EVERY] day of the month @ [05:30]", notes:  "", timestamp:  ""},
  "MF001_Kroger":    { name: "MF001_Kroger",  ID: "9517251",  Mpid: "1144", status:"ACTIVE",  schedule: "Run [EVERY] day of the month @ [06:00]", notes:  "", timestamp:  ""},
  "MF001_Walgreens":    { name: "MF001_Walgreens",  ID: "9517371",  Mpid: "1204", status:"ACTIVE",  schedule: "Run [EVERY] day of the month @ [06:10]", notes:  "", timestamp:  ""},
  "MF001_Humana":    { name: "MF001_Humana",  ID: "21460469", Mpid: "1675", status:"ACTIVE",  schedule: "Run [EVERY] day of the month @ [06:15]", notes:  "", timestamp:  ""},
  "MF001_Maxor":    { name: "MF001_Maxor",  ID: "21031009", Mpid: "1435", status:"ACTIVE",  schedule: "Run [EVERY] day of the month @ [10:30]", notes:  "", timestamp:  ""},
  "MF001_Abarca":    { name: "MF001_Abarca",  ID: "9517631",  Mpid: "924",  status:"ACTIVE",  schedule: "Run [EVERY] day of the month @ [15:00]", notes:  "", timestamp:  ""},
  "MF001_Walmart":    { name: "MF001_Walmart",  ID: "9516171",  Mpid: "1194", status:"ACTIVE",  schedule: "Run [EVERY] day of the month @ [15:30]", notes:  "", timestamp:  ""},
  "DE001_RiteAid":    { name: "DE001_RiteAid",  ID: "9518021",  Mpid: "1394", status:"ACTIVE",  schedule: "Run [EVERY] day of the month @ [17:15]", notes:  "", timestamp:  ""},
  "MF008_StandardMF":    { name: "MF008_StandardMF",  ID: "8224024",  Mpid: "1455", status:"ACTIVE",  schedule: "Run [EVERY] day of the month @ [17:15]", notes:  "", timestamp:  ""},
  "MF001_Kaiser":    { name: "MF001_Kaiser",  ID: "9517571",  Mpid: "1244", status:"ACTIVE",  schedule: "Run [EVERY] day of the month @ [21:00]", notes:  "", timestamp:  ""},
  "MF001_Gainwell":    { name: "MF001_Gainwell",  ID: "21506829", Mpid: "1821", status:"ACTIVE",  schedule: "Run [EVERY] day of the month @ [23:30]", notes:  "", timestamp:  ""},
  "DE001_CMS_Sparksoft":    { name: "DE001_CMS_Sparksoft",  ID: "9465984",  Mpid: "2001", status:"SUSPENDED", schedule: "Run every [MON, TUE, WED, THU, FRI, SAT] of the month @ [05:50]",  notes:  "", timestamp:  ""},
  "DE001_Tista":    { name: "DE001_Tista",  ID: "9738351",  Mpid: "884",  status:"SUSPENDED", schedule: "Run every [MON, TUE, WED, THU, FRI, SAT] of the month @ [05:50]",  notes:  "", timestamp:  ""},
  "DE001_Caremark":    { name: "DE001_Caremark",  ID: "9516791",  Mpid: "1173", status:"ACTIVE",  schedule: "Run every [MON, TUE, WED, THU, FRI] of the month @ [03:45]", notes:  "", timestamp:  ""},
  "MF001_UHC":    { name: "MF001_UHC",  ID: "21030539", Mpid: "1263", status:"ACTIVE",  schedule: "Run every [MON, TUE, WED, THU, FRI] of the month @ [04:30]", notes:  "", timestamp:  ""},
  "MF004_Internal_API":    { name: "MF004_Internal_API",  ID: "8224024",  Mpid: "1053", status:"SUSPENDED", schedule: "Run every [MON, TUE, WED, THU, FRI] of the month @ [12:00]", notes:  "", timestamp:  ""},
  "MF002_Acadia":    { name: "MF002_Acadia",  ID: "6537125",  Mpid: "1374", status:"SUSPENDED", schedule: "Run every [MON, TUE, WED, THU, SUN] of the month @ [10:50]", notes:  "", timestamp:  ""},
  "MF001_DST":    { name: "MF001_DST",  ID: "6543545",  Mpid: "1705", status:"ACTIVE",  schedule: "Run every [MOkeyN, TUE, WED, THU, SUN] of the month @ [20:00]",  notes:  "", timestamp:  ""},
  "DE001_Sun":    { name: "DE001_Sun",  ID: "6590175",  Mpid: "1094", status:"SUSPENDED", schedule: "Run every [MON, WED] of the month @ [21:00]",  notes:  "", timestamp:  ""},
  "MF002_Komodo":    { name: "MF002_Komodo",  ID: "9515561",  Mpid: "1234", status:"ACTIVE",  schedule: "Run every [MON] of the month @ [01:15]", notes:  "", timestamp:  ""},
  "MF001_Komodo":    { name: "MF001_Komodo",  ID: "9515561",  Mpid: "1224", status:"ACTIVE",  schedule: "Run every [MON] of the month @ [04:00]", notes:  "", timestamp:  ""},
  "MF001_myMatrixx":    { name: "MF001_myMatrixx",  ID: "9516421",  Mpid: "1024", status:"SUSPENDED", schedule: "Run every [MON] of the month @ [04:00]", notes:  "", timestamp:  ""},
  "MF001_Rx30":    { name: "MF001_Rx30",  ID: "9517281",  Mpid: "774",  status:"SUSPENDED", schedule: "Run every [MON] of the month @ [04:30]", notes:  "", timestamp:  ""},
  "MF001_PharmPix":    { name: "MF001_PharmPix",  ID: "7373805",  Mpid: "1213", status:"SUSPENDED", schedule: "Run every [MON] of the month @ [16:00]", notes:  "", timestamp:  ""},
  "MF001_ERx":    { name: "MF001_ERx",  ID: "9249471",  Mpid: "914",  status:"ACTIVE",  schedule: "Run every [MON] of the month @ [16:20]", notes:  "", timestamp:  ""},
  "DE001_SDMedicaid":    { name: "DE001_SDMedicaid",  ID: "9516151",  Mpid: "934",  status:"ACTIVE",  schedule: "Run every [MON] of the month @ [16:30]", notes:  "", timestamp:  ""},
  "MF001_QS1":    { name: "MF001_QS1",  ID: "9518041",  Mpid: "1274", status:"ACTIVE",  schedule: "Run every [MON] of the month @ [16:40]", notes:  "", timestamp:  ""},
  "DE001_Assertio":    { name: "DE001_Assertio",  ID: "9518091",  Mpid: "1755", status:"ACTIVE",  schedule: "Run every [MON] of the month @ [17:30]", notes:  "", timestamp:  ""},
  "MF001_Appriss":    { name: "MF001_Appriss",  ID: "20985859", Mpid: "904",  status:"ACTIVE",  schedule: "Run every [MON] of the month @ [23:10]", notes:  "", timestamp:  ""},
  "MF001_DaVita":    { name: "MF001_DaVita",  ID: "9515491",  Mpid: "1014", status:"ACTIVE",  schedule: "Run every [1st TUE] of the month @ [16:10]", notes:  "", timestamp:  ""},
  "MF001_Magellan":    { name: "MF001_Magellan",  ID: "9515641",  Mpid: "1294", status:"ACTIVE",  schedule: "Run every [TUE] of the month @ [07:10]", notes:  "", timestamp:  ""},
  "MF001_Digital_Harbor":    { name: "MF001_Digital_Harbor",  ID: "9515441",  Mpid: "1004", status:"SUSPENDED", schedule: "Run every [TUE] of the month @ [09:50]", notes:  "", timestamp:  ""},
  "MF001_CapitalRx":    { name: "MF001_CapitalRx",  ID: "21209929", Mpid: "1525", status:"ACTIVE",  schedule: "Run every [TUE] of the month @ [15:15]", notes:  "", timestamp:  ""},
  "MF001_MedImpact":    { name: "MF001_MedImpact",  ID: "9517291",  Mpid: "1364", status:"ACTIVE",  schedule: "Run every [TUE] of the month @ [16:00]", notes:  "", timestamp:  ""},
  "MF001_Pharmaceutical_Technologies_Inc":    { name: "MF001_Pharmaceutical_Technologies_Inc",  ID: "9517411",  Mpid: "1044", status:"SUSPENDED", schedule: "Run every [TUE] of the month @ [16:10]", notes:  "", timestamp:  ""},
  "MF001_Prime":    { name: "MF001_Prime",  ID: "9517431",  Mpid: "894",  status:"ACTIVE",  schedule: "Run every [TUE] of the month @ [16:10]", notes:  "", timestamp:  ""},
  "MF001_Blink":    { name: "MF001_Blink",  ID: "20912459", Mpid: "954",  status:"ACTIVE",  schedule: "Run every [TUE] of the month @ [16:20]", notes:  "", timestamp:  ""},
  "MF001_ND_HS":    { name: "MF001_ND_HS",  ID: "9515371",  Mpid: "1034", status:"SUSPENDED", schedule: "Run every [TUE] of the month @ [16:30]", notes:  "", timestamp:  ""},
  "MF001_Speedscript":    { name: "MF001_Speedscript",  ID: "9517881",  Mpid: "814",  status:"ACTIVE",  schedule: "Run every [TUE] of the month @ [16:50]", notes:  "", timestamp:  ""},
  "MF001_US_Script":    { name: "MF001_US_Script",  ID: "9517441",  Mpid: "1104", status:"ACTIVE",  schedule: "Run every [TUE] of the month @ [17:00]", notes:  "", timestamp:  ""},
  "MF001_OptumUHG":    { name: "MF001_OptumUHG",  ID: "7515794",  Mpid: "1043", status:"SUSPENDED", schedule: "Run every [TUE] of the month @ [17:20]", notes:  "", timestamp:  ""},
  "MF001_Alere":    { name: "MF001_Alere",  ID: "9516411",  Mpid: "1384", status:"SUSPENDED", schedule: "Run every [TUE] of the month @ [17:30]", notes:  "", timestamp:  ""},
  "MF001_Truven":    { name: "MF001_Truven",  ID: "20988809", Mpid: "1243", status:"SUSPENDED", schedule: "Run every [TUE] of the month @ [17:30]", notes:  "", timestamp:  ""},
  "MF001_VHC":    { name: "MF001_VHC",  ID: "8916114",  Mpid: "1595", status:"ACTIVE",  schedule: "Run every [1st WED] of the month @ [06:00]", notes:  "", timestamp:  ""},
  "MF001_AdvisoryBoard":    { name: "MF001_AdvisoryBoard",  ID: "9516901",  Mpid: "963",  status:"ACTIVE",  schedule: "Run every [1st WED] of the month @ [15:30]", notes:  "", timestamp:  ""},
  "MF002_AdvisoryBoard":    { name: "MF002_AdvisoryBoard",  ID: "9516901",  Mpid: "973",  status:"ACTIVE",  schedule: "Run every [1st WED] of the month @ [15:35]", notes:  "", timestamp:  ""},
  "MF001_HealthGrades":    { name: "MF001_HealthGrades",  ID: "9518031",  Mpid: "983",  status:"ACTIVE",  schedule: "Run every [1st WED] of the month @ [15:40]", notes:  "", timestamp:  ""},
  "MF001_MarketWare":    { name: "MF001_MarketWare",  ID: "21045789", Mpid: "1861", status:"ACTIVE",  schedule: "Run every [1st WED] of the month @ [15:40]", notes:  "", timestamp:  ""},
  "MF002_HealthGrades":    { name: "MF002_HealthGrades",  ID: "9518031",  Mpid: "993",  status:"ACTIVE",  schedule: "Run every [1st WED] of the month @ [15:45]", notes:  "", timestamp:  ""},
  "MF003_HealthGrades":    { name: "MF003_HealthGrades",  ID: "9518031",  Mpid: "1003", status:"ACTIVE",  schedule: "Run every [1st WED] of the month @ [15:50]", notes:  "", timestamp:  ""},
  "MF001_WellSpan":    { name: "MF001_WellSpan",  ID: "9515401",  Mpid: "1023", status:"SUSPENDED", schedule: "Run every [1st WED] of the month @ [16:00]", notes:  "", timestamp:  ""},
  "MF001_TeaLeaves":    { name: "MF001_TeaLeaves",  ID: "9517651",  Mpid: "1013", status:"SUSPENDED", schedule: "Run every [2nd WED] of the month @ [15:55]", notes:  "", timestamp:  ""},
  "DE001_HEB":    { name: "DE001_HEB",  ID: "9414824",  Mpid: "1991", status:"SUSPENDED", schedule: "Run every [2nd WED] of the month @ [20:00]", notes:  "", timestamp:  ""},
  "MF002_InternalMarketView":    { name: "MF002_InternalMarketView",  ID: "8224024",  Mpid: "1063", status:"ACTIVE",  schedule: "Run every [WED] of the month @ [11:10]", notes:  "", timestamp:  ""},
  "MF001_CoverMyMeds.full":    { name: "MF001_CoverMyMeds.full",  ID: "21045739", Mpid: "1485", status:"ACTIVE",  schedule: "Run every [WED] of the month @ [11:20]", notes:  "", timestamp:  ""},
  "MF001_Navitus":    { name: "MF001_Navitus",  ID: "9517531",  Mpid: "1354", status:"ACTIVE",  schedule: "Run every [WED] of the month @ [16:00]", notes:  "", timestamp:  ""},
  "MF001_Omnicare":    { name: "MF001_Omnicare",  ID: "9517421",  Mpid: "1084", status:"SUSPENDED", schedule: "Run every [WED] of the month @ [16:10]", notes:  "", timestamp:  ""},
  "MF006_InternalPMV":    { name: "MF006_InternalPMV",  ID: "8224024",  Mpid: "1163", status:"ACTIVE",  schedule: "Run every [WED] of the month @ [16:25]", notes:  "", timestamp:  ""},
  "MF001_InternalMN_MF":    { name: "MF001_InternalMN_MF",  ID: "21014219", Mpid: "1153", status:"ACTIVE",  schedule: "Run every [WED] of the month @ [21:15]", notes:  "", timestamp:  ""},
  "MF001_Summacare":    { name: "MF001_Summacare",  ID: "9515911",  Mpid: "844",  status:"ACTIVE",  schedule: "Run every [THU] of the month @ [04:00]", notes:  "", timestamp:  ""},
  "MF001_Surescripts":    { name: "MF001_Surescripts",  ID: "9249801",  Mpid: "1725", status:"ACTIVE",  schedule: "Run every [THU] of the month @ [10:39]", notes:  "", timestamp:  ""},
  "MF009_InternalQAMF":    { name: "MF009_InternalQAMF",  ID: "8224024",  Mpid: "1353", status:"SUSPENDED", schedule: "Run every [THU] of the month @ [14:12]", notes:  "", timestamp:  ""},
  "MF003_CypressCare":    { name: "MF003_CypressCare",  ID: "9515461",  Mpid: "1414", status:"SUSPENDED", schedule: "Run every [THU] of the month @ [16:20]", notes:  "", timestamp:  ""},
  "MF001_Xerox":    { name: "MF001_Xerox",  ID: "9515761",  Mpid: "853",  status:"SUSPENDED", schedule: "Run every [THU] of the month @ [17:10]", notes:  "", timestamp:  ""},
  "MF001_Catamaran":    { name: "MF001_Catamaran",  ID: "9515461",  Mpid: "834",  status:"SUSPENDED", schedule: "Run every [THU] of the month @ [21:00]", notes:  "", timestamp:  ""},
  "MF001_HealtheSystems.both":    { name: "MF001_HealtheSystems.both",  ID: "9515941",  Mpid: "843",  status:"ACTIVE",  schedule: "Run every [THU] of the month @ [22:30]", notes:  "", timestamp:  ""},
  "MF001_PDMI":    { name: "MF001_PDMI",  ID: "9517761",  Mpid: "1334", status:"ACTIVE",  schedule: "Run every [THU] of the month @ [23:45]", notes:  "", timestamp:  ""},
  "MF001_Mallinckrodt":    { name: "MF001_Mallinckrodt",  ID: "9517301",  Mpid: "1304", status:"SUSPENDED", schedule: "Run every [FRI] of the month @ [00:45]", notes:  "", timestamp:  ""},
  "MF001_RxAdvance":    { name: "MF001_RxAdvance",  ID: "20988359", Mpid: "1264", status:"ACTIVE",  schedule: "Run every [FRI] of the month @ [01:15]", notes:  "", timestamp:  ""},
  "MF001_ProCareRx":    { name: "MF001_ProCareRx",  ID: "20996819", Mpid: "1114", status:"ACTIVE",  schedule: "Run every [FRI] of the month @ [01:30]", notes:  "", timestamp:  ""},
  "MF001_DHA":    { name: "MF001_DHA",  ID: "21532119", Mpid: "1891", status:"ACTIVE",  schedule: "Run every [FRI] of the month @ [04:10]", notes:  "", timestamp:  ""},
  "MF002_Kroger":    { name: "MF002_Kroger",  ID: "9517251",  Mpid: "1134", status:"ACTIVE",  schedule: "Run every [FRI] of the month @ [04:50]", notes:  "", timestamp:  ""},
  "MF001_ExpressScripts":    { name: "MF001_ExpressScripts",  ID: "9516691",  Mpid: "1214", status:"SUSPENDED", schedule: "Run every [FRI] of the month @ [05:00]", notes:  "", timestamp:  ""},
  "DE001_RazorMetrics":    { name: "DE001_RazorMetrics",  ID: "21552419", Mpid: "1981", status:"SUSPENDED", schedule: "Run every [FRI] of the month @ [06:15]", notes:  "", timestamp:  ""},
  "MF006_Caremark":    { name: "MF006_Caremark",  ID: "9516791",  Mpid: "1775", status:"ACTIVE",  schedule: "Run every [FRI] of the month @ [11:00]", notes:  "", timestamp:  ""},
  "DE001_BostonScientific":    { name: "DE001_BostonScientific",  ID: "9517121",  Mpid: "1143", status:"ACTIVE",  schedule: "Run every [2nd SAT] of the month @ [07:25]", notes:  "", timestamp:  ""},
  "DE001_PillPack":    { name: "DE001_PillPack",  ID: "7602725",  Mpid: "1406", status:"ACTIVE",  schedule: "Run every [SUN] of the month @ [02:30]", notes:  "", timestamp:  ""},
  "MF001_PharMerica":    { name: "MF001_PharMerica",  ID: "9516391",  Mpid: "1344", status:"ACTIVE",  schedule: "Run every [SUN] of the month @ [16:00]", notes:  "", timestamp:  ""},
  "MF002_Kaiser":    { name: "MF002_Kaiser",  ID: "9517571",  Mpid: "1254", status:"ACTIVE",  schedule: "Run every [SUN] of the month @ [16:10]", notes:  "", timestamp:  ""},
  "DE002_CMS_Sparksoft":    { name: "DE002_CMS_Sparksoft",  ID: "9465984",  Mpid: "2011", status:"SUSPENDED", schedule: "Run every [SUN] of the month @ [17:20]", notes:  "", timestamp:  ""},
  "DE002_Tista":    { name: "DE002_Tista",  ID: "9738351",  Mpid: "874",  status:"SUSPENDED", schedule: "Run every [SUN] of the month @ [17:20]", notes:  "", timestamp:  ""},
  "DE001_Covidien":    { name: "DE001_Covidien",  ID: "6882064",  Mpid: "1284", status:"SUSPENDED", schedule: "Run every [SUN] of the month @ [22:00]", notes:  "", timestamp:  ""},
  "MF001_PBDRx":    { name: "MF001_PBDRx",  ID: "9517241",  Mpid: "1074", status:"ACTIVE",  schedule: "Run every [SUN] of the month @ [22:30]", notes:  "", timestamp:  ""},
  "MF001_ColumbiaUniv":    { name: "MF001_ColumbiaUniv",  ID: "21052419", Mpid: "1971", status:"SUSPENDED", schedule: "Run the [1st] of the month @ [00:00]", notes:  "", timestamp:  ""},
  "MF001_MIHIN_Velatura":    { name: "MF001_MIHIN_Velatura",  ID: "21030279", Mpid: "1425", status:"SUSPENDED", schedule: "Run the [1st] of the month @ [14:10]", notes:  "", timestamp:  ""},
  "MF001_PerSpecta":    { name: "MF001_PerSpecta",  ID: "7661055",  Mpid: "1363", status:"ACTIVE",  schedule: "Run the [2nd] of the month @ [14:53]", notes:  "", timestamp:  ""},
  "MF001_ActiveHealth":    { name: "MF001_ActiveHealth",  ID: "9517481",  Mpid: "944",  status:"ACTIVE",  schedule: "Run the [2nd] of the month @ [22:05]", notes:  "", timestamp:  ""},
  "DE001_Jazz":    { name: "DE001_Jazz",  ID: "9517381",  Mpid: "1103", status:"SUSPENDED", schedule: "Run the [2nd] of the month @ [23:25]", notes:  "", timestamp:  ""},
  "MF001_TelaDocHealth":    { name: "MF001_TelaDocHealth",  ID: "21050939", Mpid: "1465", status:"SUSPENDED", schedule: "Run the [3rd] of the month @ [16:53]", notes:  "", timestamp:  ""},
  "MF001_LehighValley":    { name: "MF001_LehighValley",  ID: "21457469", Mpid: "1665", status:"ACTIVE",  schedule: "Run the [4th] of the month @ [20:00]", notes:  "", timestamp:  ""},
  "DE001_Sentara":    { name: "DE001_Sentara",  ID: "9064844",  Mpid: "1851", status:"ACTIVE",  schedule: "Run the [5th] of the month @ [11:00]", notes:  "", timestamp:  ""},
  "MF001_RYTEI":    { name: "MF001_RYTEI",  ID: "21517469", Mpid: "1871", status:"SUSPENDED", schedule: "Run the [5th] of the month @ [11:00]", notes:  "", timestamp:  ""},
  "MF001_RYTER":    { name: "MF001_RYTER",  ID: "21517479", Mpid: "1881", status:"SUSPENDED", schedule: "Run the [5th] of the month @ [11:00]", notes:  "", timestamp:  ""},
  "DE001_Acadia":    { name: "DE001_Acadia",  ID: "6537125",  Mpid: "1093", status:"SUSPENDED", schedule: "Run the [5th] of the month @ [15:55]", notes:  "", timestamp:  ""},
  "MF001_PerformRx":    { name: "MF001_PerformRx",  ID: "9517471",  Mpid: "804",  status:"ACTIVE",  schedule: "Run the [7th] of the month @ [22:05]", notes:  "", timestamp:  ""},
  "DE001_OSUWexnerMC":    { name: "DE001_OSUWexnerMC",  ID: "9465274",  Mpid: "52", status:"ACTIVE",  schedule: "Run the [9th] of the month @ [16:15]", notes:  "", timestamp:  ""},
  "MF001_DMD":    { name: "MF001_DMD",  ID: "9516681",  Mpid: "1314", status:"SUSPENDED", schedule: "Run the [12th] of the month @ [22:05]",  notes:  "", timestamp:  ""},
  "MF001_CVS":    { name: "MF001_CVS",  ID: "9517201",  Mpid: "1223", status:"ACTIVE",  schedule: "Run the [13th] of the month @ [22:05]",  notes:  "", timestamp:  ""},
  "MF001_AtlanticHealth":    { name: "MF001_AtlanticHealth",  ID: "20985939", Mpid: "1323", status:"ACTIVE",  schedule: "Run the [14th] of the month @ [15:15]",  notes:  "", timestamp:  ""},
  "MF001_AtlanticHealth":    { name: "MF001_AtlanticHealth",  ID: "20985939", Mpid: "1475", status:"SUSPENDED", schedule: "Run the [14th] of the month @ [15:15]",  notes:  "", timestamp:  ""},
  "MF001_MercyHealth":    { name: "MF001_MercyHealth",  ID: "22104122", Mpid: "5049", status:"ACTIVE",  schedule: "Run the [14th] of the month @ [23:30]",  notes:  "", timestamp:  ""},
  "MF001_BCBSA":    { name: "MF001_BCBSA",  ID: "9517821",  Mpid: "794",  status:"SUSPENDED", schedule: "Run the [15th] of the month @ [01:30]",  notes:  "", timestamp:  ""},
  "MF001_ArmadaHealth":    { name: "MF001_ArmadaHealth",  ID: "21005889", Mpid: "1404", status:"SUSPENDED", schedule: "Run the [15th] of the month @ [01:40]",  notes:  "", timestamp:  ""},
  "DE001_MiddlesexHospital":    { name: "DE001_MiddlesexHospital",  ID: "21472409", Mpid: "1735", status:"ACTIVE",  schedule: "Run the [16th] of the month @ [10:30]",  notes:  "", timestamp:  ""},
  "MF001_SymphonyHealth":    { name: "MF001_SymphonyHealth",  ID: "9517361",  Mpid: "1436", status:"ACTIVE",  schedule: "Run the [17th] of the month @ [05:00]",  notes:  "", timestamp:  ""},
  "DE001_CuraScript":    { name: "DE001_CuraScript",  ID: "21486019", Mpid: "1841", status:"ACTIVE",  schedule: "Run the [17th] of the month @ [19:45]",  notes:  "", timestamp:  ""},
  "MF001_Baylor":    { name: "MF001_Baylor",  ID: "9516521",  Mpid: "984",  status:"SUSPENDED", schedule: "Run the [17th] of the month @ [22:05]",  notes:  "", timestamp:  ""},
  "MF002_Caremark":    { name: "MF002_Caremark",  ID: "9516791",  Mpid: "1765", status:"ACTIVE",  schedule: "Run the [20th] of the month @ [12:30]",  notes:  "", timestamp:  ""},
  "MF012_PharmacyDQ":    { name: "MF012_PharmacyDQ",  ID: "8224024",  Mpid: "1941", status:"ACTIVE",  schedule: "Run the [20th] of the month @ [15:15]",  notes:  "", timestamp:  ""},
  "DE001_Walgreens":    { name: "DE001_Walgreens",  ID: "9517371",  Mpid: "1416", status:"SUSPENDED", schedule: "Run the [20th] of the month @ [16:00]",  notes:  "", timestamp:  ""},
  "MF001_McKesson":    { name: "MF001_McKesson",  ID: "9516451",  Mpid: "1253", status:"SUSPENDED", schedule: "Run the [21st] of the month @ [01:00]",  notes:  "", timestamp:  ""},
  "MF001_PinnacleHealth":    { name: "MF001_PinnacleHealth",  ID: "9515821",  Mpid: "764",  status:"SUSPENDED", schedule: "Run the [21st] of the month @ [10:20]",  notes:  "", timestamp:  ""},
  "MF002_SymphonyHealth":    { name: "MF002_SymphonyHealth",  ID: "9517361",  Mpid: "1183", status:"SUSPENDED", schedule: "Run the [21st] of the month @ [22:05]",  notes:  "", timestamp:  ""},
  "MF010_socioMF":    { name: "MF010_socioMF",  ID: "8224024",  Mpid: "1415", status:"ACTIVE",  schedule: "Run the [22nd] of the month @ [16:15]",  notes:  "", timestamp:  ""},
  "DE001_UVermont":    { name: "DE001_UVermont",  ID: "21036329", Mpid: "1343", status:"SUSPENDED", schedule: "Run the [22nd] of the month @ [18:15]",  notes:  "", timestamp:  ""},
  "MF002_Baylor":    { name: "MF002_Baylor",  ID: "9516521",  Mpid: "994",  status:"SUSPENDED", schedule: "Run the [24th] of the month @ [23:05]",  notes:  "", timestamp:  ""},
  "MF001_Cigna":    { name: "MF001_Cigna",  ID: "9516881",  Mpid: "1324", status:"ACTIVE",  schedule: "Run the [27th] of the month @ [11:32]",  notes:  "", timestamp:  ""},
  "MF001_Privia":    { name: "MF001_Privia",  ID: "9516011",  Mpid: "1124", status:"SUSPENDED", schedule: "Run the [28th, 29th, 30th, 31st] of the month @ [02:45]",  notes:  "", timestamp:  ""},
  "MF001_Northside":    { name: "MF001_Northside",  ID: "9516071",  Mpid: "1184", status:"SUSPENDED", schedule: "Run the [28th, 29th, 30th, 31st] of the month @ [02:55]",  notes:  "", timestamp:  ""},
  "MF001_PurpleLab":    { name: "MF001_PurpleLab",  ID: "9057334",  Mpid: "1715", status:"ACTIVE",  schedule: "Run the [28th, 29th, 30th, 31st] of the month @ [21:00]",  notes:  "", timestamp:  ""},
  "MF001_PsychHub":    { name: "MF001_PsychHub",  ID: "21461379", Mpid: "1685", status:"SUSPENDED", schedule: "Run the [28th] of the month @ [20:00]",  notes:  "", timestamp:  ""},
  "MF001_AMHS":    { name: "MF001_AMHS",  ID: "21496699", Mpid: "1781", status:"ACTIVE",  schedule: "Run the [28th] of the month @ [23:00]",  notes:  "", timestamp:  ""}
};
let currentClientKey = null;
function searchClient() {
const input = document.getElementById("nameInput").value.trim().toLowerCase();
const result = document.getElementById("result");
result.innerHTML = "";
const matches = [];
for (let key in clients) {
const client = clients[key];
// Search by ID or name (partial, case-insensitive)
if (
  client.ID.toLowerCase().includes(input) ||
  client.name.toLowerCase().includes(input)
) {
  matches.push({ key, client });
}
}
if (matches.length === 0) { 
result.innerHTML = `<span style="color:red">Client not found.</span>`;
clearForm();
return;
}
if (matches.length === 1) {
showClient(matches[0].key);
} else {
result.innerHTML = `<strong>Multiple matches:</strong><ul>`;
matches.forEach(({ key, client }) => {
  result.innerHTML += `
    <li>
      <button class="match-btn" onclick="showClient('${key}')">
        ID: ${client.ID}, Name: ${client.name}
      </button>
    </li>`;
});
result.innerHTML += `</ul>`;
clearForm();
}
}
function showClient(key) {
currentClientKey = key;
const client = clients[key];
document.getElementById("result").innerHTML = `
<strong>Name:</strong> ${client.name}<br>
<strong>ID:</strong> ${client.ID}<br>
<strong>Mid:</strong> ${client.Mid}<br>
<strong>Status:</strong> ${client.status}<br>
<strong>Schedule:</strong> ${client.schedule}<br>
<strong>Notes:</strong> ${client.notes || "None"}<br>
<span id="noteTimestamp">${client.timestamp ? "Last updated: " + client.timestamp : ""}</span>
`;
document.getElementById("notes").value = client.notes;
}
function saveNote() {
if (!currentClientKey) return alert("Select a client first.");
const client = clients[currentClientKey];
const note = document.getElementById("notes").value.trim();
if (!confirm("Save this note?")) {
// revert to last note/s
document.getElementById("notes").value = client.notes;
return;
}
const time = new Date().toLocaleString();
client.notes = note;
client.timestamp = time;
document.getElementById("noteTimestamp").textContent = "Last updated: " + time;
alert("Note saved!");
}
function deleteNote() {
if (!currentClientKey || !clients[currentClientKey].notes) return alert("No note to delete.");
if (confirm("Delete this note?")) {
clients[currentClientKey].notes = "";
clients[currentClientKey].timestamp = "";
document.getElementById("notes").value = "";
document.getElementById("noteTimestamp").textContent = "";
document.getElementById("result").innerHTML += "<br><em>Note deleted.</em>";
}
}
document.getElementById("nameInput").addEventListener("keypress", function (e) {
if (e.key === "Enter") searchClient();
});
function clearForm() {
document.getElementById("notes").value = "";
document.getElementById("noteTimestamp").textContent = "";
}
