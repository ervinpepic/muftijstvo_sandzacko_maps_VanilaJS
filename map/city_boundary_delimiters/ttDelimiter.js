var tutinDelimiter = [
    { lng: 20.5086841583253, lat: 42.8681831359864 },
    { lng: 20.4994506835939, lat: 42.8662643432617 },
    { lng: 20.4913635253906, lat: 42.864086151123 },
    { lng: 20.4861831665039, lat: 42.8618507385254 },
    { lng: 20.4790554046631, lat: 42.8575172424318 },
    { lng: 20.4769134521485, lat: 42.8567008972169 },
    { lng: 20.4745998382569, lat: 42.8561096191406 },
    { lng: 20.4715137481689, lat: 42.8556289672852 },
    { lng: 20.4620780944824, lat: 42.8545455932618 },
    { lng: 20.4520511627197, lat: 42.8522338867189 },
    { lng: 20.448247909546, lat: 42.8507728576661 },
    { lng: 20.4443607330323, lat: 42.8487701416016 },
    { lng: 20.4356517791749, lat: 42.8421325683595 },
    { lng: 20.4287395477295, lat: 42.8385391235353 },
    { lng: 20.4241771697998, lat: 42.8357200622559 },
    { lng: 20.4206714630128, lat: 42.8329353332519 },
    { lng: 20.4152297973633, lat: 42.8271980285646 },
    { lng: 20.4122352600097, lat: 42.824462890625 },
    { lng: 20.4061889648439, lat: 42.8210029602051 },
    { lng: 20.4037685394287, lat: 42.8199272155763 },
    { lng: 20.4012355804443, lat: 42.8191528320312 },
    { lng: 20.3983936309815, lat: 42.8188362121582 },
    { lng: 20.3955173492432, lat: 42.8190307617188 },
    { lng: 20.393533706665, lat: 42.8194618225098 },
    { lng: 20.3888111114503, lat: 42.8210067749023 },
    { lng: 20.3794326782227, lat: 42.8258552551271 },
    { lng: 20.3721866607666, lat: 42.8301277160645 },
    { lng: 20.370080947876, lat: 42.8309364318848 },
    { lng: 20.3678131103516, lat: 42.8315048217773 },
    { lng: 20.3647956848145, lat: 42.8318901062012 },
    { lng: 20.3617153167726, lat: 42.8319625854493 },
    { lng: 20.3586769104004, lat: 42.8317604064943 },
    { lng: 20.3557968139649, lat: 42.831226348877 },
    { lng: 20.349479675293, lat: 42.8291397094727 },
    { lng: 20.3442955017091, lat: 42.8280754089356 },
    { lng: 20.3375453948975, lat: 42.8275184631348 },
    { lng: 20.3137474060059, lat: 42.8262405395508 },
    { lng: 20.3136100769044, lat: 42.8312644958496 },
    { lng: 20.3106288909912, lat: 42.8474540710449 },
    { lng: 20.3109321594239, lat: 42.8520584106446 },
    { lng: 20.3167552947998, lat: 42.8702926635743 },
    { lng: 20.3176479339601, lat: 42.8780899047852 },
    { lng: 20.3173236846924, lat: 42.88187789917 },
    { lng: 20.3163509368896, lat: 42.8854179382324 },
    { lng: 20.3147830963135, lat: 42.8881149291993 },
    { lng: 20.3130321502686, lat: 42.8898162841798 },
    { lng: 20.3107738494874, lat: 42.8912048339843 },
    { lng: 20.2951602935792, lat: 42.8963890075685 },
    { lng: 20.2763652801514, lat: 42.9035911560059 },
    { lng: 20.2540283203124, lat: 42.9097328186036 },
    { lng: 20.2355785369874, lat: 42.9132957458496 },
    { lng: 20.2294235229492, lat: 42.9148750305176 },
    { lng: 20.2029476165772, lat: 42.9252204895021 },
    { lng: 20.1860122680665, lat: 42.9310836791992 },
    { lng: 20.1672725677491, lat: 42.9402732849122 },
    { lng: 20.1572608947754, lat: 42.944118499756 },
    { lng: 20.1320476531984, lat: 42.9556350708009 },
    { lng: 20.1230297088624, lat: 42.9591484069825 },
    { lng: 20.1215019226075, lat: 42.9599723815918 },
    { lng: 20.1205520629883, lat: 42.9604835510255 },
    { lng: 20.1124057769775, lat: 42.9666824340821 },
    { lng: 20.1094398498536, lat: 42.9677658081055 },
    { lng: 20.1062374114991, lat: 42.9675445556641 },
    { lng: 20.1031303405762, lat: 42.9661865234375 },
    { lng: 20.0924205780029, lat: 42.9561233520508 },
    { lng: 20.0877399444581, lat: 42.9535522460939 },
    { lng: 20.0851249694824, lat: 42.9528236389161 },
    { lng: 20.0814571380616, lat: 42.9526214599609 },
    { lng: 20.0774497985841, lat: 42.953411102295 },
    { lng: 20.0738716125488, lat: 42.9551162719727 },
    { lng: 20.071153640747, lat: 42.9574394226075 },
    { lng: 20.0661602020264, lat: 42.9636344909668 },
    { lng: 20.0611438751221, lat: 42.9678497314454 },
    { lng: 20.0428142547609, lat: 42.9797859191896 },
    { lng: 20.0346508026123, lat: 42.984275817871 },
    { lng: 20.0337238311769, lat: 42.9851417541503 },
    { lng: 20.0374908447267, lat: 42.9916229248047 },
    { lng: 20.0424537658691, lat: 42.999252319336 },
    { lng: 20.0436058044434, lat: 43.0015487670899 },
    { lng: 20.0443859100342, lat: 43.0039176940919 },
    { lng: 20.0458679199219, lat: 43.0125350952148 },
    { lng: 20.0469551086427, lat: 43.0151710510254 },
    { lng: 20.0487651824951, lat: 43.0174140930176 },
    { lng: 20.0583972930908, lat: 43.0256423950196 },
    { lng: 20.0601673126221, lat: 43.0278816223145 },
    { lng: 20.061185836792, lat: 43.0303916931152 },
    { lng: 20.0623874664306, lat: 43.0384635925294 },
    { lng: 20.0630989074708, lat: 43.0410652160645 },
    { lng: 20.0691299438477, lat: 43.0529479980468 },
    { lng: 20.0712356567383, lat: 43.0559768676759 },
    { lng: 20.0752315521241, lat: 43.0597610473634 },
    { lng: 20.0763931274415, lat: 43.0612297058107 },
    { lng: 20.0801792144775, lat: 43.0683097839355 },
    { lng: 20.0839920043946, lat: 43.0734176635742 },
    { lng: 20.0904808044434, lat: 43.0805206298829 },
    { lng: 20.0957202911378, lat: 43.0856552124024 },
    { lng: 20.0979213714601, lat: 43.0873527526857 },
    { lng: 20.100486755371, lat: 43.0887985229492 },
    { lng: 20.1026210784913, lat: 43.0896797180176 },
    { lng: 20.1110763549805, lat: 43.0923347473144 },
    { lng: 20.1171741485596, lat: 43.094753265381 },
    { lng: 20.1203136444092, lat: 43.095729827881 },
    { lng: 20.1249866485596, lat: 43.0963973999025 },
    { lng: 20.1279373168946, lat: 43.0962905883789 },
    { lng: 20.1338768005372, lat: 43.0953750610352 },
    { lng: 20.1365985870361, lat: 43.0954322814941 },
    { lng: 20.1384181976318, lat: 43.0958061218262 },
    { lng: 20.1402969360353, lat: 43.096477508545 },
    { lng: 20.141887664795, lat: 43.0974197387695 },
    { lng: 20.1430568695069, lat: 43.0986557006837 },
    { lng: 20.143798828125, lat: 43.1001129150391 },
    { lng: 20.1441593170167, lat: 43.1021423339845 },
    { lng: 20.1439685821534, lat: 43.1042594909669 },
    { lng: 20.1432304382325, lat: 43.1063423156739 },
    { lng: 20.1400165557861, lat: 43.1108551025391 },
    { lng: 20.1388854980469, lat: 43.1130409240723 },
    { lng: 20.1388893127443, lat: 43.1148986816407 },
    { lng: 20.1399421691895, lat: 43.1167755126954 },
    { lng: 20.1417140960694, lat: 43.1185493469239 },
    { lng: 20.1436386108398, lat: 43.120044708252 },
    { lng: 20.151252746582, lat: 43.1246490478517 },
    { lng: 20.1530323028564, lat: 43.1262893676758 },
    { lng: 20.1559562683105, lat: 43.1299629211426 },
    { lng: 20.1578674316407, lat: 43.1319046020507 },
    { lng: 20.1656455993652, lat: 43.1392250061036 },
    { lng: 20.167631149292, lat: 43.1404075622559 },
    { lng: 20.169361114502, lat: 43.1408462524415 },
    { lng: 20.1712760925294, lat: 43.1409454345704 },
    { lng: 20.1827125549317, lat: 43.1399612426758 },
    { lng: 20.1947917938234, lat: 43.1396293640136 },
    { lng: 20.2068748474121, lat: 43.1396369934081 },
    { lng: 20.2107772827148, lat: 43.1398429870605 },
    { lng: 20.2145080566407, lat: 43.1403274536133 },
    { lng: 20.2189407348633, lat: 43.1416511535645 },
    { lng: 20.22434425354, lat: 43.1444854736329 },
    { lng: 20.2264251708984, lat: 43.1453590393066 },
    { lng: 20.2361221313477, lat: 43.1484756469728 },
    { lng: 20.2439594268798, lat: 43.1517677307129 },
    { lng: 20.2463207244874, lat: 43.1524734497071 },
    { lng: 20.2520885467529, lat: 43.1534500122071 },
    { lng: 20.2653026580811, lat: 43.154525756836 },
    { lng: 20.2821159362794, lat: 43.1568984985351 },
    { lng: 20.2896385192871, lat: 43.1467590332032 },
    { lng: 20.2928009033203, lat: 43.1378860473633 },
    { lng: 20.2940483093262, lat: 43.1361732482911 },
    { lng: 20.2993907928467, lat: 43.132640838623 },
    { lng: 20.3070487976075, lat: 43.1263771057129 },
    { lng: 20.3112869262695, lat: 43.1225891113281 },
    { lng: 20.3156051635743, lat: 43.1181678771973 },
    { lng: 20.3187294006349, lat: 43.1154937744142 },
    { lng: 20.3257942199708, lat: 43.1112899780275 },
    { lng: 20.3290023803711, lat: 43.1089973449708 },
    { lng: 20.3300647735596, lat: 43.1076469421387 },
    { lng: 20.3307037353515, lat: 43.1061744689942 },
    { lng: 20.3309173583984, lat: 43.1042251586915 },
    { lng: 20.3306274414063, lat: 43.0994110107422 },
    { lng: 20.331220626831, lat: 43.0974044799805 },
    { lng: 20.3325500488282, lat: 43.0953941345215 },
    { lng: 20.3343448638917, lat: 43.0934600830079 },
    { lng: 20.3415279388427, lat: 43.0865859985352 },
    { lng: 20.345531463623, lat: 43.0836982727052 },
    { lng: 20.3547725677491, lat: 43.0785942077636 },
    { lng: 20.3592834472657, lat: 43.0755805969238 },
    { lng: 20.3632621765137, lat: 43.0723190307618 },
    { lng: 20.3678798675537, lat: 43.0668678283692 },
    { lng: 20.3697052001954, lat: 43.0652999877931 },
    { lng: 20.3713665008545, lat: 43.0644340515138 },
    { lng: 20.3771057128906, lat: 43.0625762939454 },
    { lng: 20.3809127807617, lat: 43.0620231628418 },
    { lng: 20.3927307128906, lat: 43.06111907959 },
    { lng: 20.3948001861573, lat: 43.0606918334962 },
    { lng: 20.3966083526611, lat: 43.0600242614747 },
    { lng: 20.3985595703126, lat: 43.0586242675782 },
    { lng: 20.4042835235596, lat: 43.0513725280762 },
    { lng: 20.4053840637207, lat: 43.0494956970215 },
    { lng: 20.4059925079346, lat: 43.0473937988282 },
    { lng: 20.4060611724855, lat: 43.0452461242676 },
    { lng: 20.4056034088135, lat: 43.0431327819824 },
    { lng: 20.4048233032227, lat: 43.0415420532227 },
    { lng: 20.4036769866944, lat: 43.0400733947753 },
    { lng: 20.3937187194825, lat: 43.0320625305175 },
    { lng: 20.3920135498047, lat: 43.030345916748 },
    { lng: 20.3911075592042, lat: 43.0285682678224 },
    { lng: 20.3910999298096, lat: 43.0277099609376 },
    { lng: 20.3920269012452, lat: 43.0258102416993 },
    { lng: 20.3938179016114, lat: 43.0239257812501 },
    { lng: 20.4034671783447, lat: 43.0163459777833 },
    { lng: 20.4096717834473, lat: 43.0106315612794 },
    { lng: 20.4174995422364, lat: 43.0055885314941 },
    { lng: 20.4282417297364, lat: 42.9962348937988 },
    { lng: 20.4303741455079, lat: 42.9948692321777 },
    { lng: 20.4322376251221, lat: 42.9942092895508 },
    { lng: 20.4343299865724, lat: 42.9937820434571 },
    { lng: 20.4379749298096, lat: 42.9934234619142 },
    { lng: 20.4418163299562, lat: 42.9933166503907 },
    { lng: 20.4495677947999, lat: 42.9936599731445 },
    { lng: 20.4532527923585, lat: 42.9942207336426 },
    { lng: 20.45530128479, lat: 42.9947357177736 },
    { lng: 20.4616298675538, lat: 42.9968528747559 },
    { lng: 20.4652690887452, lat: 42.9976387023926 },
    { lng: 20.4729347229004, lat: 42.9987373352051 },
    { lng: 20.4765148162843, lat: 42.9995613098145 },
    { lng: 20.4819946289062, lat: 43.0016441345215 },
    { lng: 20.4845867156982, lat: 43.0022544860841 },
    { lng: 20.4874153137207, lat: 43.0020751953125 },
    { lng: 20.4890575408936, lat: 43.0015335083008 },
    { lng: 20.490364074707, lat: 43.0007133483887 },
    { lng: 20.4911460876466, lat: 42.9996223449708 },
    { lng: 20.491346359253, lat: 42.9983673095704 },
    { lng: 20.490613937378, lat: 42.996379852295 },
    { lng: 20.4884109497071, lat: 42.9921607971193 },
    { lng: 20.4884223937989, lat: 42.9902725219727 },
    { lng: 20.4894542694092, lat: 42.9880676269532 },
    { lng: 20.4925155639649, lat: 42.9835166931153 },
    { lng: 20.4934310913086, lat: 42.9810523986817 },
    { lng: 20.4939193725587, lat: 42.9784317016602 },
    { lng: 20.4941730499269, lat: 42.9729118347169 },
    { lng: 20.4936351776124, lat: 42.9671783447266 },
    { lng: 20.4928741455078, lat: 42.9643096923828 },
    { lng: 20.4894371032716, lat: 42.9557609558105 },
    { lng: 20.4809074401855, lat: 42.9508743286134 },
    { lng: 20.4749202728272, lat: 42.9470520019532 },
    { lng: 20.4659996032716, lat: 42.9408874511719 },
    { lng: 20.460994720459, lat: 42.9367065429688 },
    { lng: 20.4591960906984, lat: 42.9344406127931 },
    { lng: 20.4581985473633, lat: 42.9320716857911 },
    { lng: 20.456455230713, lat: 42.9246788024902 },
    { lng: 20.4551277160646, lat: 42.921745300293 },
    { lng: 20.4542560577393, lat: 42.9203453063965 },
    { lng: 20.4511394500734, lat: 42.9165802001953 },
    { lng: 20.4504947662355, lat: 42.9147491455079 },
    { lng: 20.4505081176758, lat: 42.9128608703613 },
    { lng: 20.4512023925782, lat: 42.9110679626465 },
    { lng: 20.4522552490234, lat: 42.9097862243653 },
    { lng: 20.4577484130859, lat: 42.9042167663575 },
    { lng: 20.464719772339, lat: 42.8999404907228 },
    { lng: 20.4661140441895, lat: 42.8986206054689 },
    { lng: 20.4694118499756, lat: 42.8937988281251 },
    { lng: 20.4722270965576, lat: 42.8882446289063 },
    { lng: 20.4732284545898, lat: 42.8866958618165 },
    { lng: 20.4745121002198, lat: 42.8852806091309 },
    { lng: 20.4768714904786, lat: 42.8835830688477 },
    { lng: 20.4833507537842, lat: 42.880096435547 },
    { lng: 20.4865055084229, lat: 42.8780097961426 },
    { lng: 20.4893455505371, lat: 42.8767013549804 },
    { lng: 20.4973659515381, lat: 42.8740196228028 },
    { lng: 20.5008354187012, lat: 42.8725204467773 },
    { lng: 20.5086841583253, lat: 42.8681831359864 },
  ];