const coins = [
  // "BTCUSDT",
  // "ETHUSDT",
  // "SOLUSDT",
  // "1000BONKUSDT",
  // "1000PEPEUSDT",
  // "DOGEUSDT",
  // "BNBUSDT",
  // "XRPUSDT",
  // "WIFUSDT",
  // "TONUSDT",
  "ONDOUSDT",
  "LINKUSDT",
  "RNDRUSDT",
  "NEARUSDT",
  "NOTUSDT",
  "ENAUSDT",
  "LTCUSDT",
  "AVAXUSDT",
  "ARBUSDT",
  "FTMUSDT",
  "ADAUSDT",
  "INJUSDT",
  "TRBUSDT",
  "1000FLOKIUSDT",
  "ORDIUSDT",
  "DOTUSDT",
  "MATICUSDT",
  "BCHUSDT",
  "OPUSDT",
  "SHIB1000USDT",
  "SUIUSDT",
  "BRETTUSDT",
  "STRKUSDT",
  "FILUSDT",
  "PEOPLEUSDT",
  "ETCUSDT",
  "WLDUSDT",
  "APTUSDT",
  "ATOMUSDT",
  "TIAUSDT",
  "GALAUSDT",
  "KASUSDT",
  "POPCATUSDT",
  "LDOUSDT",
  "STXUSDT",
  "BENDOGUSDT",
  "SEIUSDT",
  "WUSDT",
  "TAOUSDT",
  "ARUSDT",
  "PYTHUSDT",
  "DYDXUSDT",
  "ICPUSDT",
  "JASMYUSDT",
  "PENDLEUSDT",
  "RUNEUSDT",
  "HIGHUSDT",
  "SLERFUSDT",
  "ENSUSDT",
  "UNIUSDT",
  "JUPUSDT",
  "TOKENUSDT",
  "1000000MOGUSDT",
  "MNTUSDT",
  "DEGENUSDT",
  "AGIUSDT",
  "10000LADYSUSDT",
  "BOMEUSDT",
  "MEWUSDT",
  "CHZUSDT",
  "AEVOUSDT",
  "APEUSDT",
  "BLZUSDT",
  "MKRUSDT",
  "GRTUSDT",
  "BLURUSDT",
  "MYROUSDT",
  "MANTAUSDT",
  "JTOUSDT",
  "HBARUSDT",
  "SANDUSDT",
  "AAVEUSDT",
  "ETHFIUSDT",
  "BIGTIMEUSDT",
  "TAIKOUSDT",
  "BBUSDT",
  "WAVESUSDT",
  "AXSUSDT",
  "1000TURBOUSDT",
  "EOSUSDT",
  "LPTUSDT",
  "CRVUSDT",
  "TRXUSDT",
  "GMTUSDT",
  "1000BEERUSDT",
  "ALGOUSDT",
  "VETUSDT",
  "XAIUSDT",
  "MEMEUSDT",
  "XLMUSDT",
  "ZETAUSDT",
  "KNCUSDT",
  "CAKEUSDT",
  "1000RATSUSDT",
  "MAVIAUSDT",
  "IMXUSDT",
  "DOGUSDT",
  "FOXYUSDT",
  "XMRUSDT",
  "BEAMUSDT",
  "TRUUSDT",
  "LFTUSDT",
  "CYBERUSDT",
  "ANKRUSDT",
  "SUSHIUSDT",
  "DUSKUSDT",
  "ENJUSDT",
  "CFXUSDT",
  "SNXUSDT",
  "AUCTIONUSDT",
  "ARKMUSDT",
  "THETAUSDT",
  "COREUSDT",
  "MERLUSDT",
  "PENGUSDT",
  "LAIUSDT",
  "COTIUSDT",
  "TWTUSDT",
  "STORJUSDT",
  "ROSEUSDT",
  "GMXUSDT",
  "MINAUSDT",
  "DYMUSDT",
  "C98USDT",
  "RVNUSDT",
  "CROUSDT",
  "API3USDT",
  "1INCHUSDT",
  "POLYXUSDT",
  "EGLDUSDT",
  "ZILUSDT",
  "ILVUSDT",
  "QTUMUSDT",
  "TNSRUSDT",
  "SUPERUSDT",
  "MASKUSDT",
  "AXLUSDT",
  "KSMUSDT",
  "ZRXUSDT",
  "MANAUSDT",
  "YGGUSDT",
  "1000IQ50USDT",
  "ALICEUSDT",
  "STGUSDT",
  "10000WENUSDT",
  "10000SATSUSDT",
  "PORTALUSDT",
  "MOVRUSDT",
  "IOTXUSDT",
  "LEVERUSDT",
  "COMPUSDT",
  "GLMUSDT",
  "OMUSDT",
  "BNXUSDT",
  "IOTAUSDT",
  "PIXELUSDT",
  "PAXGUSDT",
  "FXSUSDT",
  "UMAUSDT",
  "BAKEUSDT",
  "LINAUSDT",
  "NEOUSDT",
  "ZECUSDT",
  "DASHUSDT",
  "WOOUSDT",
  "VANRYUSDT",
  "ALTUSDT",
  "CKBUSDT",
  "FLOWUSDT",
  "SILLYUSDT",
  "USDCUSDT",
  "PUNDUUSDT",
  "ASTRUSDT",
  "BICOUSDT",
  "FRONTUSDT",
  "SPECUSDT",
  "KAVAUSDT",
  "AUDIOUSDT",
  "SFPUSDT",
  "ANTUSDT",
  "IDUSDT",
  "SAGAUSDT",
  "AIUSDT",
  "ZENUSDT",
  "VRAUSDT",
  "1000LUNCUSDT",
  "ONEUSDT",
  "ZEUSUSDT",
  "HNTUSDT",
  "METISUSDT",
  "QNTUSDT",
  "YFIUSDT",
  "PERPUSDT",
  "XEMUSDT",
  "RONUSDT",
  "NFPUSDT",
  "UNFIUSDT",
  "LRCUSDT",
  "KLAYUSDT",
  "HFTUSDT",
  "XTZUSDT",
  "GALUSDT",
  "ONTUSDT",
  "LUNA2USDT",
  "OMGUSDT",
  "IOSTUSDT",
  "USTCUSDT",
  "CANTOUSDT",
  "RDNTUSDT",
  "HOOKUSDT",
  "SSVUSDT",
  "BELUSDT",
  "RSS3USDT",
  "RSRUSDT",
  "LOOMUSDT",
  "CELRUSDT",
  "DODOUSDT",
  "OMNIUSDT",
  "CELOUSDT",
  "FLRUSDT",
  "VGXUSDT",
  "ICXUSDT",
  "FITFIUSDT",
  "ETHWUSDT",
  "XVGUSDT",
  "NTRNUSDT",
  "NYANUSDT",
  "SPELLUSDT",
  "FLMUSDT",
  "BSVUSDT",
  "HOTUSDT",
  "MAGICUSDT",
  "GLMRUSDT",
  "LQTYUSDT",
  "VELOUSDT",
  "CHRUSDT",
  "HIFIUSDT",
  "MTLUSDT",
  "JOEUSDT",
  "FTNUSDT",
  "GASUSDT",
  "CTKUSDT",
  "SCUSDT",
  "SLPUSDT",
  "REZUSDT",
  "ZKFUSDT",
  "10000STARLUSDT",
  "CTSIUSDT",
  "ACEUSDT",
  "ARKUSDT",
  "KDAUSDT",
  "1CATUSDT",
  "DRIFTUSDT",
  "SNTUSDT",
  "XCHUSDT",
  "BALUSDT",
  "MAVUSDT",
  "GTCUSDT",
  "XVSUSDT",
  "BADGERUSDT",
  "BATUSDT",
  "RENUSDT",
  "ALPHAUSDT",
  "OGNUSDT",
  "SAFEUSDT",
  "PROMUSDT",
  "XRDUSDT",
  "LITUSDT",
  "ORNUSDT",
  "STMXUSDT",
  "OXTUSDT",
  "SXPUSDT",
  "RLCUSDT",
  "BONDUSDT",
  "RIFUSDT",
  "FIREUSDT",
  "CVCUSDT",
  "CVXUSDT",
  "ORBSUSDT",
  "DGBUSDT",
  "PHBUSDT",
  "SKLUSDT",
  "ACHUSDT",
  "EDUUSDT",
  "CETUSUSDT",
  "AGLDUSDT",
  "AKROUSDT",
  "MDTUSDT",
  "NMRUSDT",
  "MONUSDT",
  "MASAUSDT",
  "XNOUSDT",
  "ARPAUSDT",
  "SCRTUSDT",
  "RPLUSDT",
  "AMBUSDT",
  "BOBAUSDT",
  "1000BTTUSDT",
  "LSKUSDT",
  "CTCUSDT",
  "TUSDT",
  "BANDUSDT",
  "MBOXUSDT",
  "10000COQUSDT",
  "ONGUSDT",
  "QIUSDT",
  "BNTUSDT",
  "MYRIAUSDT",
  "TOMIUSDT",
  "FUNUSDT",
  "JSTUSDT",
  "REEFUSDT",
  "ATAUSDT",
  "10000000AIDOGEUSDT",
  "PHAUSDT",
  "POWRUSDT",
  "OSMOUSDT",
  "ZBCNUSDT",
  "DAOUSDT",
  "MOBILEUSDT",
  "STEEMUSDT",
  "LOOKSUSDT",
  "COMBOUSDT",
  "OGUSDT",
  "TLMUSDT",
  "LTOUSDT",
  "MAPOUSDT",
  "1000XECUSDT",
  "FORTHUSDT",
  "WAXPUSDT",
  "GFTUSDT",
  "DATAUSDT",
  "KEYUSDT",
  "ORCAUSDT",
  "RADUSDT",
  "REQUSDT",
  "BSWUSDT",
  "ALPACAUSDT",
  "AERGOUSDT",
  "IDEXUSDT",
  "RAREUSDT",
  "MBLUSDT",
  "VTHOUSDT",
  "GODSUSDT",
  "DENTUSDT",
  "SUNUSDT",
  "NKNUSDT",
  "XCNUSDT",
  "GNOUSDT",
  "COSUSDT",
  "SWEATUSDT",
  "SCAUSDT",
  "RAYDIUMUSDT",
  "DARUSDT",
  "STPTUSDT",
  "10000NFTUSDT",
  "COVALUSDT",
  "CEEKUSDT",
  "PONKEUSDT",
  "ETHBTCUSDT",
];

export default coins;