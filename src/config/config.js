let config = {};

config.isClient = false;
config.isServer = false;

Object.defineProperty(config, 'isProd', {
	get: () => {
		if (config.isServer) {
			return !!process.env.IS_PROD;
		} else {
			return (
				location.hostname !== '127.0.0.1' &&
				location.hostname !== 'localhost' &&
				!location.hostname.startsWith('192.168.')
			);
		}
	}
});

config.pingInterval = 2.5;
config.pingTimeout = 10;
config.kickTimeout = 60 * 3; // Kick after 3 idle minutes

/*** Randomness ***/
/*
Generate with:
let values = [];
for (let i = 0; i < 128; i++) {
    values.push(Math.random());
}
console.log(values.toString());
 */
/**
 * This is an array of constant values used to generate consistent data quickly without using seeds. This is used for
 * things like trees on planets. Each array indicates a different set of values to loop through.
 * @type {number[]}
 */
config.randomConsts = [
	[
		0.6413402959602239, 0.3028184639463496, 0.6787375165688607, 0.6776693213095535, 0.3847246589362867,
		0.027397588730660782, 0.7259490302031402, 0.5677868343045951, 0.5976937680863785, 0.12839211045483845,
		0.689201603052324, 0.2188242167636545, 0.09958619582026018, 0.42946762491169377, 0.7595382119882577,
		0.28128165313945197, 0.2998674713378464, 0.5182582756409906, 0.3429676148169738, 0.44308336162020145,
		0.8186347834935419, 0.6098036519343939, 0.22010976836054108, 0.3789298232710543, 0.3991682525938647,
		0.7384182043892029, 0.08171997575752643, 0.8655280484902077, 0.4973084591477881, 0.17019277396594257,
		0.5066278964978523, 0.3331983088464956, 0.36065762849089, 0.11178494218160062, 0.6848831383322707,
		0.6393438643426221, 0.17847290318694564, 0.4490047084483577, 0.5365581938357227, 0.8469239763870686,
		0.12923636082523182, 0.9915312263841627, 0.18241282675758352, 0.643493730434505, 0.07830984821794851,
		0.43688809716433186, 0.048394165938528966, 0.5818226593068818, 0.4953637139753082,
		0.46074098045693446, 0.5729332535361737, 0.30539414698431155, 0.9391105124825241, 0.09388595028195912,
		0.9683550990030667, 0.9005829102627172, 0.3257794775545564, 0.6273744901618035, 0.9513151172632788,
		0.19572816748315036, 0.18439876286781964, 0.4227487351173509, 0.6597378769299747, 0.16569732814732463,
		0.7360093877613811, 0.8992571990680671, 0.42896463318530964, 0.07566554404424242, 0.09906802957300043,
		0.40289317120833523, 0.44785216606097045, 0.6188208472542067, 0.5005305315658966, 0.44133966263500546,
		0.5005051575549044, 0.5886300173244257, 0.12018990689669651, 0.9204503124265837, 0.11048584270603756,
		0.890552958928247, 0.07029702927455683, 0.5124290688699877, 0.24177017469048945, 0.28358142686518883,
		0.20385827607537754, 0.6393247502299588, 0.15794318568156918, 0.06752126287338811, 0.8202316038266086,
		0.676393977627354, 0.42558673527304935, 0.9929114290491228, 0.39625682329301526, 0.8118084558253025,
		0.9313846226633351, 0.32497909298832894, 0.6238389197151089, 0.31019913912951247, 0.821088180215436,
		0.6720448545692104, 0.25383165543286745, 0.13905089162734008, 0.589932047087321, 0.3061075037031802,
		0.6320123587923077, 0.404975912203684, 0.8039038964266259, 0.7635448429325833, 0.9768501538314343,
		0.4286993406097859, 0.2984812055525399, 0.404680792173836, 0.3518793288415587, 0.6223756181947575,
		0.300850029139335, 0.2895408722213919, 0.04566061886120876, 0.35778812593700615, 0.5948430475925759,
		0.9566174981791038, 0.7001136047869223, 0.37378661477881403, 0.028210090692900813, 0.8965451423096198,
		0.4579890639347428, 0.6988072312115261, 0.5232814879868779, 0.24462170167151487
	],
	[
		0.8474171618950996, 0.0176200744944639, 0.008510129929316212, 0.6975100390546751, 0.9536520540655766,
		0.5482433862423919, 0.9374108121666846, 0.46425235821877275, 0.5393489585475619, 0.3669070804331944,
		0.1849129953403248, 0.7988978505823108, 0.2142809495653779, 0.009069514298958303, 0.11282213715857714,
		0.5225768741651686, 0.7316170720086783, 0.4848129992221417, 0.5972613269338518, 0.08021996637516948,
		0.8216111941379036, 0.606769520772946, 0.2535379572694727, 0.653595927006307, 0.5017498911590228,
		0.8922301522001408, 0.2941617830542962, 0.9754738193935086, 0.45504025024835326, 0.9177722235588948,
		0.43990922003537913, 0.051326102538642226, 0.5757051763585268, 0.33390216017312535,
		0.6673808839210835, 0.21026562155759376, 0.0872312213901163, 0.20324245884330439, 0.4691602731915583,
		0.26134777160020906, 0.6744448698575038, 0.4975106303587187, 0.2100522029997991, 0.06219842486753602,
		0.24288971737839282, 0.8685636153485659, 0.47690556340575907, 0.7652232806564445, 0.6310774338615222,
		0.2699988355033871, 0.6065987426778294, 0.5543958801521702, 0.9918575346089615, 0.6849759527353858,
		0.9373326498500201, 0.8836082386583965, 0.8067566006808442, 0.933428286352088, 0.15630469691967708,
		0.007694692734161013, 0.8468189212676454, 0.8333581680271929, 0.9266562093388258, 0.3741894026428565,
		0.6866360020793649, 0.5131473893706218, 0.5544929170136321, 0.9511367049039987, 0.02391663046631276,
		0.48394947169359637, 0.3519847522815365, 0.1575974274257721, 0.5378967624962216, 0.5334995877246558,
		0.9295729482946173, 0.9049432881562396, 0.8136389358414593, 0.4053912743381065, 0.25494644379606535,
		0.3399426384438049, 0.3105136333450791, 0.997178077207312, 0.19960720583345615, 0.061031237586925746,
		0.4516221462866046, 0.8621292747103078, 0.7342500629274424, 0.49303768561871, 0.14386875892546858,
		0.08803243133001248, 0.7017686102389193, 0.9762978107292286, 0.3789656019750147, 0.6528970922088888,
		0.7129431297966202, 0.4307781892616316, 0.9601043126955733, 0.5055827084858748, 0.34995987593150235,
		0.1421092797622483, 0.4017870583760452, 0.7517604511490088, 0.5951519307694033, 0.41351214980131323,
		0.5130883094023855, 0.16413105416044926, 0.22052622902346974, 0.4144332562556352, 0.9995023421115043,
		0.9603316338439671, 0.763699451060031, 0.4875666926948321, 0.09615393140267425, 0.7936846389530079,
		0.8160018497471286, 0.190452654810775, 0.9658323259183741, 0.5285723499943864, 0.8307039474222218,
		0.7436798147197701, 0.8212036590366756, 0.08056223199775059, 0.9868141750648798, 0.9255093355866799,
		0.2317552309127071, 0.7386700590603967, 0.8342035040441838, 0.8688487426129476
	],
	[
		0.7429991401578113, 0.9040018287705649, 0.29438290297444225, 0.5632463232485561, 0.2059485874667566,
		0.8522189026772815, 0.2511639276256763, 0.07284460684010696, 0.7017406089506877, 0.3383583642084176,
		0.27527280422050393, 0.4964085137092955, 0.46211775900753116, 0.17156825375999252,
		0.30517943346908094, 0.86640247781982, 0.6136744132461076, 0.1753820978902969, 0.8206394611139742,
		0.16922562871613822, 0.5628221254628187, 0.5727875464075258, 0.6137243085483084, 0.27116743350443095,
		0.28659211079631386, 0.9664035967766882, 0.14752333685197505, 0.5708962230618833, 0.18069456439624965,
		0.7532766140862994, 0.7328970608068761, 0.40826732719864034, 0.3561988263504472, 0.512243933020609,
		0.34219596295780796, 0.7100365006157305, 0.699129364229595, 0.8820787598410547, 0.8298051455510169,
		0.5631584472803475, 0.9809151559511076, 0.5160172075543243, 0.4294082057888411, 0.025202046422966973,
		0.9921816154161469, 0.21124371553578558, 0.12809703958171625, 0.08347262110589715,
		0.12060846672319103, 0.2405869102379854, 0.45069916980142133, 0.45638284016135433,
		0.45997839457277534, 0.39401288521606537, 0.47724968538031454, 0.6134688292089234, 0.9951846754449989,
		0.391796469461287, 0.04468421667250344, 0.7758731418836833, 0.9754089413180855, 0.9533802542090766,
		0.5276116750909576, 0.21251504636392893, 0.4235635720289652, 0.5048414150549341, 0.02414620286714575,
		0.8740844238120014, 0.6865293564227886, 0.6974280274996767, 0.869269054127719, 0.9934343894442128,
		0.36422416781811906, 0.4962834294684795, 0.28765390569731486, 0.519954288845121, 0.6835864262383722,
		0.5352077950299394, 0.21939952435872145, 0.8806650957346418, 0.32975525629017755, 0.6864332253705572,
		0.9712148355735499, 0.5181398641374182, 0.3977725681941693, 0.5819986531973571, 0.5972908111608821,
		0.20445127232151838, 0.8726011799896705, 0.6280326879361111, 0.1699848546977063, 0.7054034553696085,
		0.6595810794022878, 0.0005108050375470796, 0.037788905308618226, 0.5873779438207714,
		0.22582585522464926, 0.2014247696420044, 0.30759076298664256, 0.05496557516349876, 0.5808259593382219,
		0.19826131032389993, 0.2301091700482647, 0.9843421070439045, 0.06841226493361119, 0.4120636711601797,
		0.3685888024778803, 0.6072359796497633, 0.6268556011561486, 0.7105261449333216, 0.9740641875531015,
		0.00482633931635279, 0.48525399298100913, 0.6803535002992889, 0.8139706994161484, 0.4053265249426312,
		0.47297243654522547, 0.26623318279783836, 0.4607606927651493, 0.9404714393799807, 0.7950949441344388,
		0.38213844274986397, 0.20907230927835663, 0.874216549816843, 0.6238085075591833, 0.04513913058537322,
		0.360654940862581, 0.7629827904048572
	],
	[
		0.5014821600331032, 0.4737240839341339, 0.6662847158283958, 0.0168188604602868, 0.7853266671771386,
		0.6963905169394, 0.03152276456622616, 0.2815615074319491, 0.1314530588746987, 0.2909421130754217,
		0.3519861914218043, 0.14767550535999674, 0.9701808776160312, 0.7934641795258321, 0.43801252388531653,
		0.4296831161661232, 0.6031704305189365, 0.17350995523413704, 0.0644531825675958, 0.8321477078464967,
		0.6180724740349559, 0.029552666356638335, 0.09774521501846234, 0.543138557479593, 0.3599852521330955,
		0.2672406961828311, 0.32669127969346823, 0.22378374103565246, 0.6606987395071602, 0.03141435462478159,
		0.006085321254548637, 0.5607811721434659, 0.07507544708191749, 0.5688744872641931, 0.4310144406742251,
		0.14860776616935722, 0.3372224097987573, 0.25245236551939354, 0.9338674501482145, 0.6543277526734108,
		0.7341461197871504, 0.4369807999165327, 0.6020984886395906, 0.36384133361884907, 0.20698351469764686,
		0.4954930465809799, 0.830343363969297, 0.73122031915807, 0.7036616432034575, 0.4323396752119759,
		0.6548103018497333, 0.24584506656835559, 0.47630877681638406, 0.3622219461147611, 0.09133172966384495,
		0.5981407321893595, 0.3302719991250791, 0.9829631129682037, 0.4287486340866391, 0.664460532009858,
		0.4248556293384631, 0.5196425018497646, 0.49878604341642174, 0.3705462956784813, 0.1814016917766248,
		0.6742298460793703, 0.8675671067863997, 0.2248383737804336, 0.31119000730067103, 0.39573136686712673,
		0.0304697682865418, 0.5903161740887048, 0.7382785472877078, 0.5568444272494144, 0.5218140233410973,
		0.4643257274772832, 0.5215036207623305, 0.7978805597771157, 0.04470690965794333, 0.5324780675405607,
		0.832077114166561, 0.9791086225025536, 0.08204566615719577, 0.0867847188682076, 0.5879676883584841,
		0.3285421984819774, 0.3034586713950531, 0.9327273454029084, 0.4298056676416848, 0.9662316530200339,
		0.18783120697365607, 0.014499629884014764, 0.2120111680055532, 0.5641202136476435, 0.4597762848769067,
		0.728117857295477, 0.9442865471392896, 0.17943798971516722, 0.3690358571010046, 0.40578302461964566,
		0.17929957856170864, 0.8872746705035557, 0.4582171737079004, 0.29811241416521606, 0.7132319365414637,
		0.7283314831748589, 0.8034981173311813, 0.028263918190067905, 0.02248016578691958, 0.3521093060344713,
		0.720556780714795, 0.5217067169912775, 0.41810493117301273, 0.2796357427464997, 0.5264917813758851,
		0.6560938856051337, 0.18697062830748812, 0.8679357338275853, 0.0643066020517471, 0.7389573423049476,
		0.5340647525463096, 0.19774349257836477, 0.6905037220047225, 0.9430740461011082, 0.32566426286035677,
		0.18206010005212447, 0.14304889059462922, 0.08391390630007867
	],
	[
		0.480871551893969, 0.7149606626443883, 0.6294711987498576, 0.28802744985725015, 0.6229132378721074,
		0.038390466892099795, 0.3057856622971391, 0.9333190729901133, 0.4155392894678882, 0.1946630760894883,
		0.25419743713911247, 0.43889935287000337, 0.8789657610246133, 0.8289746520422634, 0.9843416343354987,
		0.607434699940381, 0.6573919865941698, 0.8827782409957685, 0.9229238273007352, 0.3719502261778156,
		0.03242249897175986, 0.8320459923375405, 0.38076038095931186, 0.45907558752590183,
		0.17982004587681621, 0.9720220279704037, 0.23202746309242284, 0.4507713514783447, 0.13626239517755878,
		0.971865261740509, 0.04159187484737026, 0.5421370973172464, 0.6063920234195377, 0.38835553222592933,
		0.9537213549197916, 0.9097987718577274, 0.9598498344568176, 0.7236667197407334, 0.62346579235326,
		0.09199897027141057, 0.1722084059968616, 0.7839415949711612, 0.20553238535872898, 0.6493524582266454,
		0.2437960893877018, 0.9659795323637805, 0.40965121051936393, 0.20341864154501743, 0.6921478318315655,
		0.4406092074153556, 0.35441767767775545, 0.5228935103176033, 0.4474317693055545, 0.8358030261790057,
		0.24678858636325263, 0.21795066423918708, 0.9721258889205913, 0.5286707037072833, 0.4392641948130025,
		0.8339010613473623, 0.34043668782975867, 0.820063390064752, 0.21680643750306317, 0.655789407651844,
		0.30121313073847955, 0.5418326439002061, 0.5171918611901258, 0.7501744291390529, 0.8743641817878216,
		0.7570830127589598, 0.5541830457302661, 0.8040952712749765, 0.795306279498827, 0.7510227916768404,
		0.3144684634108261, 0.6877329500842042, 0.7336545747752465, 0.1785972582572537, 0.6645152757205306,
		0.5838719714299805, 0.42385774922068165, 0.26226409204002543, 0.3700410066722515, 0.1350114577767645,
		0.6852082174378153, 0.7895289954682407, 0.5714655478223283, 0.8006567924692474, 0.5539661993660667,
		0.36972002207132904, 0.7938090541476377, 0.18730882127725335, 0.4181311133414516, 0.6629970723156882,
		0.3949194129038178, 0.61977694827445, 0.7510312143017848, 0.2042679662991871, 0.5642610921139006,
		0.9434474209975086, 0.8050756987793304, 0.8653380854218484, 0.15413760165408608, 0.3091254115139288,
		0.487449589238669, 0.9419453443677546, 0.3051511207055464, 0.6553876669396306, 0.10835531372399942,
		0.9784861264179887, 0.967731012627991, 0.6391483720520303, 0.7568780697179818, 0.7466404421394137,
		0.0956303937716918, 0.5962338161570011, 0.18277446277619158, 0.7835189464721697, 0.39927915564345784,
		0.0895298091687633, 0.801267698461485, 0.6041269236285751, 0.6093431332611379, 0.16053916313016026,
		0.4150287966879149, 0.6459624061791043, 0.6107650252823076, 0.37703732933379563
	],
	[
		0.39966186431120065, 0.51871600423841, 0.3594444739966056, 0.6811943470815855, 0.7846322527967768,
		0.7416621002215027, 0.9626834380645266, 0.9562858649884025, 0.22511812426792877, 0.5197958019618214,
		0.26252031587684677, 0.6704852706630622, 0.6853790579314529, 0.8813478483303046, 0.257983592266557,
		0.6411518156327041, 0.2458698582397949, 0.42632033655798596, 0.11030843157009196, 0.16014141308076413,
		0.39963845520511776, 0.06758176093880386, 0.5267705803739349, 0.9929524088252117, 0.8629497973924418,
		0.09236422352053197, 0.3747766191390387, 0.8791369968366696, 0.4466043489985285, 0.3375494164060171,
		0.9279695794278884, 0.07930964353834669, 0.42229882331531754, 0.7084952140420437, 0.9205041705794543,
		0.13922571478069035, 0.879106035751962, 0.8125444856062662, 0.970381893166768, 0.6830872866810973,
		0.22373599702537228, 0.8507185806149358, 0.22423071893312807, 0.564288535241491, 0.26673531245662674,
		0.35823110693272064, 0.16580127822895374, 0.5978811112954125, 0.5263438332327475, 0.24351356379341427,
		0.48130461699462135, 0.11414699159738562, 0.03211076997538753, 0.3692546572046478, 0.2724789952615889,
		0.7034654743881592, 0.15760824500636605, 0.20057532459886152, 0.6648933759102058, 0.8214114178178462,
		0.7898627423796174, 0.3323732157618988, 0.003485539435267082, 0.7097316900189978, 0.8056147821588509,
		0.02374097161432176, 0.7843456988348447, 0.2883611423994199, 0.8520867957220926, 0.8473677854794228,
		0.12795461437134859, 0.7718554143648544, 0.6673641231306449, 0.03771545455350567, 0.3734924821073067,
		0.9884874333086575, 0.3970022463736784, 0.17039194993966333, 0.9349507316115375, 0.7943396683286201,
		0.12408211948265802, 0.8331645100327894, 0.987106595255989, 0.2942817039517278, 0.47868313616568736,
		0.8689375294100081, 0.3228296438984346, 0.3228269968982129, 0.05083895496608326, 0.1694699133811406,
		0.9945330464951008, 0.15208991201051236, 0.3309166339814891, 0.24596681562129308, 0.4000671506409528,
		0.5800257688515065, 0.43852171299417875, 0.5643477032281476, 0.7010285314996367, 0.9972281270047576,
		0.28535806888506277, 0.6701558126027072, 0.2904950373123558, 0.07179755300768487, 0.7381864897562052,
		0.8185775704174538, 0.3925927054486553, 0.7554306182587625, 0.9295195887702323, 0.3343192170641256,
		0.6123179486930994, 0.5149824347192462, 0.8949986720440801, 0.37605798309259253, 0.20058015418683928,
		0.11283378020491752, 0.24742620252761793, 0.3133620949631586, 0.9732251286641922, 0.07174133364105173,
		0.20841334943074807, 0.5532716106471807, 0.351681946466472, 0.395302306994612, 0.5262637736140847,
		0.08713280463817297, 0.4427212337026798, 0.9720044581061125
	],
	[
		0.234383677830156, 0.5449564145587726, 0.04336807171980239, 0.5129056102424439, 0.47947502650273277,
		0.2639308805610141, 0.006992489134664659, 0.2931998312059547, 0.3054008446228076, 0.7512255598395854,
		0.16965839645056535, 0.5599408032921172, 0.4271851276458256, 0.415719191399502, 0.7196487500918205,
		0.5507730549629946, 0.131381700371759, 0.3058385003194195, 0.541805432324634, 0.9667272836236582,
		0.4502326280130651, 0.041660856254056355, 0.08028513427355422, 0.4850328505481216, 0.6701674137970624,
		0.21918534990192473, 0.36109445505673476, 0.2604190571753551, 0.5790545755591654, 0.5545646145461713,
		0.29268463757316976, 0.24808842037423884, 0.9448258334793738, 0.3680165646020037, 0.08493120803286014,
		0.29939108698280936, 0.2857103196314785, 0.14543663415118746, 0.7791030278931999, 0.9463116280252866,
		0.7621602578794346, 0.5523768340600224, 0.09783706802797831, 0.8038123574518414, 0.010929472363646608,
		0.010756633036905328, 0.42729706485393715, 0.43352449059563414, 0.5138023501581761,
		0.6104663002772222, 0.653683608756594, 0.42844592171651197, 0.002451921883457109, 0.7126956994480751,
		0.6808247080915868, 0.7207910143106755, 0.4410533783759727, 0.6524039423225452, 0.09601776516862448,
		0.07275553212086994, 0.08668471807346245, 0.9671882289192422, 0.9250896789526735, 0.441611597872688,
		0.7384911638417204, 0.6674091353768796, 0.34296589578736114, 0.9045102290792559, 0.30197408800281855,
		0.3209367938823702, 0.9082734536474493, 0.3004638211755837, 0.16893140434294174, 0.6018798024416168,
		0.7439461281588553, 0.7377427103262657, 0.8496239925655338, 0.1970952900134313, 0.9353582205689679,
		0.676366322322389, 0.9113856653375583, 0.24601519224888913, 0.1761765663480095, 0.9815049245935574,
		0.6724236153281176, 0.31275893870891314, 0.5981354773265684, 0.3689659798396807, 0.5689660576504878,
		0.3612757597975442, 0.10254730950504709, 0.2555531841659737, 0.7799002386988672, 0.15672473585892566,
		0.6441569022384503, 0.6870038549741149, 0.9827122615737669, 0.2363942954906435, 0.1271748097593921,
		0.5461047091509763, 0.9970607276232737, 0.14339248160755136, 0.1065846662895209, 0.5207487878800328,
		0.8124188963393113, 0.5280773948936999, 0.8055016813785536, 0.35409045545208206, 0.9647316162614097,
		0.22826190536210111, 0.5111963451574626, 0.7062848327761746, 0.9474557342559597, 0.9627317518227052,
		0.9926490887269561, 0.7094691174506162, 0.7145874525587141, 0.4058290315527613, 0.09359907137676005,
		0.2312966041475295, 0.23454118841894456, 0.29733488413341935, 0.003174969491299695,
		0.4223794066822042, 0.9579180867027353, 0.9947109003906855, 0.46751409066216465, 0.7342409809336481
	],
	[
		0.03336698876913391, 0.6207285156343896, 0.8092737524360192, 0.8934836695543857, 0.5863820893104956,
		0.5425494709846788, 0.14831157785440552, 0.6319954355071236, 0.19753155224413943, 0.947072222303714,
		0.9792139225732848, 0.993040684138103, 0.6977562074245816, 0.2789846096855624, 0.12882488138619208,
		0.4368291395127182, 0.15918466752082172, 0.8614980118224584, 0.34957750518936614, 0.3870323748075477,
		0.010348918315776334, 0.620810270348245, 0.8410957196952515, 0.19020629975843106, 0.538086825234672,
		0.30178631321551674, 0.8914697010409542, 0.2326843265355938, 0.06327961025428319, 0.858947169901825,
		0.24853391267708957, 0.8674084556319144, 0.39383837224527896, 0.19071193357949623, 0.5175001949524165,
		0.8381931177606918, 0.1996566487837752, 0.3102574261012523, 0.20402181565790944, 0.8169171734004008,
		0.6272876300821655, 0.4591139151852799, 0.232813457533682, 0.5330371864307903, 0.814985808908931,
		0.6569484902534584, 0.2187067425642637, 0.9441095759404117, 0.020767964225411495, 0.1742609556027115,
		0.381745805216293, 0.10270534056860448, 0.02218384287290842, 0.8151079560012993, 0.5164237795690831,
		0.8249840565031561, 0.5133964045331298, 0.2287624437826692, 0.28429109593516744, 0.9559443203700742,
		0.8844015249179118, 0.024722332614394604, 0.9446031098908689, 0.6459593482838701, 0.8648814133181197,
		0.7551818454278663, 0.38313335158296935, 0.9590974915911765, 0.40254036110524694, 0.05762548673478429,
		0.7629172659377028, 0.144755504851233, 0.05474831958729687, 0.692796986737743, 0.2259538941299375,
		0.42253853302824296, 0.42576869869334844, 0.5152402517053687, 0.8689788889443955, 0.36620843578251816,
		0.12524925316055424, 0.7684664713460927, 0.5891592404947019, 0.7523762036950374, 0.10122025521966638,
		0.18101177501314636, 0.8973005487125723, 0.12075086430821447, 0.6083092187147761, 0.5473251534285544,
		0.19516250386976064, 0.004982843889805633, 0.2747785482288636, 0.13109768585554993,
		0.4400504117312063, 0.42411311078628877, 0.7338278598847459, 0.31216716590987126, 0.3155208505343543,
		0.5951803337226056, 0.7838770729644713, 0.7909657337316263, 0.745601507388163, 0.5823170991033464,
		0.3023537792118165, 0.10173319061741948, 0.09906776989539678, 0.11816312641765436, 0.7574606245159539,
		0.6537162010642967, 0.9573432260466113, 0.39726982611101036, 0.8197693392268399, 0.07493951553943035,
		0.2041050135491116, 0.18293630816584816, 0.6026022584013391, 0.25835848748413337, 0.00601984866800942,
		0.7379124142621731, 0.9127352629401742, 0.6281481626873935, 0.8679926785302836, 0.5383550460224571,
		0.8937130229144234, 0.3148683370218659, 0.5836111591992907, 0.10358479024198242
	]
];

/*** Map ***/
config.mapSize = 30000;
config.mapRadius = config.mapSize / 2;
config.viewDistanceY = 1600;
config.viewDistanceX = config.viewDistanceY * 2.5;
config.viewportHeight = config.viewDistanceY * 0.9;

config.debugLayer = false;

/*** Planets ***/
config.centerPlanetRadius = 3200;
config.centerPlanetAtmosphereSize = 600;
config.centerPlanetResourceMap = 15000;
config.centerPlanetResourceGenRate = 100;

config.planetCount = 36;
config.minPlanetRadius = 750;
config.maxPlanetRadius = 2600;
config.minPlanetAtmosphereSize = 300;
config.planetTotalResourceMaxMin = 2500;
config.planetTotalResourceMaxMax = 10000;
config.planetTotalRegenRateMin = 12;
config.planetTotalRegenRateMax = 60;

config.wormholes = {
	20: 1.85,
	25: 0.4,
	30: 1.5,
	34: 0.05
};

/*** Bots ***/
config.botCount = 20;

/*** Players ***/
config.maxPlayers = 50;
config.maxPlayersHard = 60;
config.playerDeathScoreLoss = 0.1;

config.playerNamePrefixes = [
	'Spaceman',
	'Pilot',
	'Astronaut',
	'Cosmonaut',
	'Rocketeer',
	'Trooper',
	'Captain'
];
config.playerDamagePerVelocity = 1 / 16000;
config.playerAcceleration = 1500;
config.playerSprintingAcceleration = 3500;
config.playerMaxVelocity = 500;
config.playerMaxSprintVelocity = 700;
config.playerDrag = 3.5;
config.sprintTime = 3.0;

config.maxScreenShake = 40;
config.maxScreenShakeReduced = 10;

config.energyLossOnDeath = 0.05;
config.ammoLossOnDeath = 0.25;
config.resourceLossOnDead = 0.5;

config.adBlockReward = 750;
config.discordReward = 1000;

config.ships = [
	{ id: 'ship-0' },
	{ id: 'ship-1' },
	{ id: 'ship-2' },
	{ id: 'ship-instagram', fireDistance: 1.2, reward: 'instagram' },
	{ id: 'ship-twitch', reward: 'twitch' },
	{ id: 'ship-twitter', fireDistance: 1.2, reward: 'twitter' },
	{ id: 'alien', reward: 'adblock' }
];
config.shipFills = [
	{ value: '#ffffff' },
	{ value: '#7e7e7e' },
	{ value: '#212121' },
	{ value: '#E54D69' },
	{ value: '#FD9F4D' },
	{ value: '#57D1FF' },
	{ value: '#3BD793' },
	{ value: '#F547BB' },
	{ value: '#EFED69' }
];
config.shipForId = function (id) {
	return config.ships[this.shipIndexForId(id)];
};
config.shipIndexForId = function (id) {
	return config.ships.findIndex(s => s.id === id);
};

config.flatColors = [
	// From: https://flatuicolors.com/
	'#55efc4',
	'#81ecec',
	'#74b9ff',
	'#a29bfe',
	'#ffeaa7',
	'#fab1a0',
	'#ff7675',
	'#fd79a8',
	'#00b894',
	'#00cec9',
	'#0984e3',
	'#6c5ce7',
	'#fdcb6e',
	'#e17055',
	'#d63031',
	'#e84393'
];

config.quantize01 = { min: 0, max: 1, bits: 7 };
config.maxRadius = config.centerPlanetRadius;
config.minimapPositionBits = 7;
config.minimapRadiusBits = 7;
config.minimapMaxRadius = config.maxRadius; // There can't be a larger entity than the center planet

// https://www.desmos.com/calculator/sxti4a3hi3
config.rankTarget = 70000; // How many points you need to have the rank of `rankScale`
config.rankScale = 11; // Level at which the `rankTarget` will give you
config.rankExponential = 2.4;

config.pointRewardTypes = {
	ASTEROID_LARGE: 0,
	ASTEROID_SMALL: 1,
	PLAYER_KILL: 2,
	FACTORY: 3,
	CITY: 4
};

config.pointRewards = {
	ASTEROID_LARGE: 16,
	ASTEROID_SMALL: 8,
	BOT_KILL: 150,
	CITY_PER_SECOND: 2
};

config.notificationTypes = {
	PLAYER_KILL: 0,
	DEATH: 1,
	STRUCTURE_DESTROYED: 2,
	STRUCTURE_PLACE_CONFLICT: 3,
	CANT_AFFORD: 4,
	JUST_STOP: 5,
	TOO_MANY_STRUCTURES: 6,
	RANK_UP: 7
};

/*** Structures ***/
config.structureConstructionTime = 2.0;

config.mineAndFactoryTransferOnDeath = 0.75;

/*** Asteroids ***/
config.asteroidCount = 400;
config.asteroidShapes = [
	[
		[-0.4, -1],
		[0.05, -0.6],
		[0.5, -1],
		[1, -0.6],
		[0.7, 0],
		[1, 0.4],
		[0.3, 1],
		[-0.55, 1],
		[-1, 0.65],
		[-1, -0.6],
		[-0.4, -1]
	],
	[
		[-0.82, -0.62],
		[-0.36, -1],
		[0.09, -0.62],
		[0.36, -1],
		[1, -0.62],
		[0.36, -0.24],
		[1, 0.24],
		[0.36, 1],
		[-0.36, 0.71],
		[-0.55, 0.9],
		[-1, 0.43],
		[-0.73, -0.05],
		[-0.82, -0.62]
	],
	[
		[-0.4, -1],
		[-1, -0.5],
		[-0.7, 0],
		[-1, 0.5],
		[-0.5, 1],
		[-0.3, 0.8],
		[0.4, 1],
		[1, 0.25],
		[0.4, -0.25],
		[1, -0.5],
		[0.5, -1],
		[0.05, -0.7],
		[-0.4, -1]
	],
	[
		[-0.4, -1],
		[-1, -0.5],
		[-0.7, 0],
		[-1, 0.5],
		[-0.5, 1],
		[-0.3, 0.8],
		[0.4, 1],
		[1, 0.25],
		[0.4, -0.25],
		[1, -0.5],
		[0.5, -1],
		[0.05, -0.7],
		[-0.4, -1]
	]
];
config.asteroidMinResources = 10;
config.asteroidSmallMaxResources = 100;
config.asteroidLargeMaxResources = 400;
config.maxAsteroidRotateSpeed = Math.PI * 0.75;

/*** Walls ***/
config.minWallConnectRadius = 200;
config.maxWallConnectRadius = 600;
config.connectedWallCount = 2; // How many walls to try to connect to

/*** Messages ***/
// Messages from client -> server
config.clientMessages = {
	INIT: 14,
	JOIN: 0,
	INPUT: 1,
	SWITCH_WEAPON: 3,
	PURCHASE_STRUCTURE: 5,
	MESSAGE: 6,
	PING: 7,
	CREATE_ALLIANCE: 8,
	LEAVE_ALLIANCE: 9,
	JOIN_ALLIANCE: 10,
	KICK_MEMBER: 11,
	RESOLVE_JOIN_REQUEST: 13,
	STRUCTURE_ACTION: 12,
	CHOOSE_UPGRADE: 15
	// Next is 16
};

// Messages from server -> client
config.serverMessages = {
	PRE_INIT: 0,
	INIT: 13,
	UPDATE: 1,
	LEADERBOARD: 2,
	MINIMAP: 3,
	WEAPONS: 4,
	STRUCTURES: 14,
	TEXT_POPUP: 5,
	MESSAGE: 6,
	PING: 7,
	NOTIFICATION: 8,
	ALLIANCE_LIST: 9,
	ALLIANCE_DATA: 10,
	ALLIANCE_JOIN_REQUEST: 12,
	RESOURCES: 11,
	UPGRADE_OPTIONS: 15
	// Next is 16
};

config.activeMenu = {
	INFO: 0,
	FRIENDS: 1,
	ACCOUNT: 2
};

/*** Vignette ***/
config.defaultVignette = [0, 0, 0, 0.3];
config.defaultVIgnetteDistance = 0.2;
config.lowHealthVignette = [100, 0, 0, 0.7]; // 0.7 alpha, since 0.3 alpha is added in the heart rate
config.lowHealthVignetteDistance = 0.9;
config.killVignette = [255, 255, 255, 0.2];
config.killVignetteDistance = 0.5;

module.exports = config;
