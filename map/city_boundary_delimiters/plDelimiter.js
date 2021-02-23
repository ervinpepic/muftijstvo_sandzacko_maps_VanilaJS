var plavDelimiter = [
    { lng: 19.7722148895264, lat: 42.5932121276855 },
    { lng: 19.7727947235107, lat: 42.5934181213379 },
    { lng: 19.7851676940918, lat: 42.5969848632813 },
    { lng: 19.7904872894287, lat: 42.5992050170898 },
    { lng: 19.7940616607666, lat: 42.6013488769531 },
    { lng: 19.7969512939454, lat: 42.6036453247071 },
    { lng: 19.8010215759278, lat: 42.6080169677734 },
    { lng: 19.8045082092286, lat: 42.6130599975587 },
    { lng: 19.809783935547, lat: 42.6220893859864 },
    { lng: 19.816234588623, lat: 42.6310005187988 },
    { lng: 19.8377437591554, lat: 42.6534194946289 },
    { lng: 19.8429222106934, lat: 42.6571998596192 },
    { lng: 19.8525466918945, lat: 42.6622962951661 },
    { lng: 19.8755569458009, lat: 42.6725311279297 },
    { lng: 19.8876705169678, lat: 42.6774024963379 },
    { lng: 19.9013977050781, lat: 42.6834411621095 },
    { lng: 19.9057598114014, lat: 42.6846580505372 },
    { lng: 19.9104347229004, lat: 42.6852722167969 },
    { lng: 19.9174690246581, lat: 42.6854743957521 },
    { lng: 19.9351234436036, lat: 42.6853065490722 },
    { lng: 19.9580593109131, lat: 42.6846389770507 },
    { lng: 19.9731655120851, lat: 42.6858673095704 },
    { lng: 19.9727325439453, lat: 42.6862945556642 },
    { lng: 19.9726428985596, lat: 42.6873435974122 },
    { lng: 19.9729633331299, lat: 42.6878471374512 },
    { lng: 19.9746036529542, lat: 42.6904144287109 },
    { lng: 19.9831619262696, lat: 42.6975326538087 },
    { lng: 19.9868144989014, lat: 42.6992073059083 },
    { lng: 19.9893054962159, lat: 42.6992073059083 },
    { lng: 19.9893817901611, lat: 42.6991310119629 },
    { lng: 19.9932441711426, lat: 42.6951866149903 },
    { lng: 20.0037593841553, lat: 42.6872634887696 },
    { lng: 20.0144081115723, lat: 42.6808395385742 },
    { lng: 20.0224418640137, lat: 42.6769752502441 },
    { lng: 20.0362663269044, lat: 42.6712608337403 },
    { lng: 20.0398540496827, lat: 42.669303894043 },
    { lng: 20.0448246002198, lat: 42.6656494140626 },
    { lng: 20.0520515441895, lat: 42.6588439941407 },
    { lng: 20.0575370788574, lat: 42.6548233032228 },
    { lng: 20.0715904235839, lat: 42.6461143493653 },
    { lng: 20.06325340271, lat: 42.6398735046388 },
    { lng: 20.0556030273439, lat: 42.6332626342774 },
    { lng: 20.0377464294434, lat: 42.6126670837402 },
    { lng: 20.0338497161866, lat: 42.6069335937501 },
    { lng: 20.0330753326416, lat: 42.6025581359863 },
    { lng: 20.0339641571045, lat: 42.599708557129 },
    { lng: 20.0365791320801, lat: 42.5943832397462 },
    { lng: 20.0394935607911, lat: 42.5864486694336 },
    { lng: 20.0462589263917, lat: 42.5776939392091 },
    { lng: 20.0469303131103, lat: 42.5747261047363 },
    { lng: 20.0457382202148, lat: 42.5712890625001 },
    { lng: 20.0388107299805, lat: 42.5617866516114 },
    { lng: 20.0339088439942, lat: 42.551212310791 },
    { lng: 20.0332679748535, lat: 42.5503120422363 },
    { lng: 20.0331096649169, lat: 42.5483169555664 },
    { lng: 20.0259456634522, lat: 42.5454902648925 },
    { lng: 20.0245456695557, lat: 42.5449371337891 },
    { lng: 20.0138797760011, lat: 42.5384750366212 },
    { lng: 20.0106315612794, lat: 42.5351982116699 },
    { lng: 20.008358001709, lat: 42.5281295776368 },
    { lng: 20.0039978027344, lat: 42.5170783996581 },
    { lng: 20.000982284546, lat: 42.5142059326172 },
    { lng: 19.998010635376, lat: 42.5113716125488 },
    { lng: 19.9979400634766, lat: 42.5113029479982 },
    { lng: 19.9937305450439, lat: 42.511875152588 },
    { lng: 19.9923343658448, lat: 42.5120697021484 },
    { lng: 19.9902400970459, lat: 42.5123558044434 },
    { lng: 19.9884090423585, lat: 42.512622833252 },
    { lng: 19.9786853790283, lat: 42.5154762268067 },
    { lng: 19.9735260009766, lat: 42.5151443481446 },
    { lng: 19.968547821045, lat: 42.5132904052735 },
    { lng: 19.9621086120605, lat: 42.5115318298341 },
    { lng: 19.9574699401857, lat: 42.5102691650392 },
    { lng: 19.9498558044435, lat: 42.5128631591797 },
    { lng: 19.9421539306642, lat: 42.516227722168 },
    { lng: 19.9412021636963, lat: 42.5168228149414 },
    { lng: 19.9370803833008, lat: 42.5193748474121 },
    { lng: 19.9299907684327, lat: 42.5177574157715 },
    { lng: 19.906286239624, lat: 42.5073928833009 },
    { lng: 19.8980808258057, lat: 42.5022430419923 },
    { lng: 19.8965854644777, lat: 42.4975204467773 },
    { lng: 19.89656829834, lat: 42.4972915649415 },
    { lng: 19.8962097167968, lat: 42.492115020752 },
    { lng: 19.8956604003906, lat: 42.4903869628907 },
    { lng: 19.8950920104981, lat: 42.4885711669922 },
    { lng: 19.8902149200439, lat: 42.4859466552734 },
    { lng: 19.8861713409424, lat: 42.4891586303711 },
    { lng: 19.882719039917, lat: 42.4928131103516 },
    { lng: 19.8813762664795, lat: 42.4942321777345 },
    { lng: 19.8799457550049, lat: 42.4942970275879 },
    { lng: 19.8740558624268, lat: 42.4945373535156 },
    { lng: 19.8720855712891, lat: 42.4936332702637 },
    { lng: 19.8706817626953, lat: 42.490577697754 },
    { lng: 19.8704490661622, lat: 42.4900703430176 },
    { lng: 19.8698921203614, lat: 42.4861869812012 },
    { lng: 19.8685741424561, lat: 42.4843711853028 },
    { lng: 19.8681144714355, lat: 42.4837532043457 },
    { lng: 19.8584957122803, lat: 42.4815979003907 },
    { lng: 19.8562469482422, lat: 42.4814529418946 },
    { lng: 19.8551044464111, lat: 42.4813766479492 },
    { lng: 19.8543643951417, lat: 42.481330871582 },
    { lng: 19.8518352508545, lat: 42.4807777404786 },
    { lng: 19.8494052886963, lat: 42.4801177978517 },
    { lng: 19.8462963104249, lat: 42.4792671203614 },
    { lng: 19.8418560028076, lat: 42.4784240722657 },
    { lng: 19.8401966094971, lat: 42.4781112670898 },
    { lng: 19.8353271484376, lat: 42.4754753112794 },
    { lng: 19.8345794677736, lat: 42.4731216430664 },
    { lng: 19.8326072692871, lat: 42.4697456359864 },
    { lng: 19.8320045471193, lat: 42.4687118530275 },
    { lng: 19.8284587860107, lat: 42.4680328369141 },
    { lng: 19.8272743225098, lat: 42.4678077697755 },
    { lng: 19.8259143829346, lat: 42.4675521850587 },
    { lng: 19.8230323791505, lat: 42.4684829711915 },
    { lng: 19.8199520111085, lat: 42.4694709777833 },
    { lng: 19.805004119873, lat: 42.476589202881 },
    { lng: 19.7922344207764, lat: 42.4831275939941 },
    { lng: 19.7916584014893, lat: 42.4834213256836 },
    { lng: 19.7913799285889, lat: 42.4837074279785 },
    { lng: 19.7904281616212, lat: 42.484676361084 },
    { lng: 19.7845115661622, lat: 42.4906616210937 },
    { lng: 19.7795162200928, lat: 42.4972648620605 },
    { lng: 19.7740631103516, lat: 42.4992256164551 },
    { lng: 19.7737579345703, lat: 42.4993820190431 },
    { lng: 19.7673816680908, lat: 42.5026435852051 },
    { lng: 19.7661304473878, lat: 42.504135131836 },
    { lng: 19.7630977630616, lat: 42.507755279541 },
    { lng: 19.7627143859864, lat: 42.5107955932618 },
    { lng: 19.7605152130127, lat: 42.5199012756349 },
    { lng: 19.7543907165527, lat: 42.5272064208985 },
    { lng: 19.7503337860108, lat: 42.5346374511719 },
    { lng: 19.7486591339111, lat: 42.5395431518555 },
    { lng: 19.7457237243653, lat: 42.5462799072266 },
    { lng: 19.74387550354, lat: 42.5499382019043 },
    { lng: 19.7436504364014, lat: 42.5503845214844 },
    { lng: 19.7454185485841, lat: 42.552806854248 },
    { lng: 19.7473239898682, lat: 42.5583267211915 },
    { lng: 19.7540664672853, lat: 42.56685256958 },
    { lng: 19.7512722015381, lat: 42.5724487304689 },
    { lng: 19.7508907318116, lat: 42.5755004882814 },
    { lng: 19.7504062652588, lat: 42.5793266296387 },
    { lng: 19.7535839080811, lat: 42.5829963684083 },
    { lng: 19.7608604431153, lat: 42.5873184204103 },
    { lng: 19.7691802978515, lat: 42.5874900817871 },
    { lng: 19.7727508544923, lat: 42.5881004333497 },
    { lng: 19.7733993530273, lat: 42.5912246704102 },
    { lng: 19.7722148895264, lat: 42.5932121276855 },
  ];