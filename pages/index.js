import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */

      /* BACKGROUND */
      .background {
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background: radial-gradient(
          ellipse at bottom,
          #1b2735 0%,
          #090a0f 100%
        );
      }
      .background .stars1 {
        width: 1px;
        height: 1px;
        box-shadow: 1450px 1365px #fff, 1333px 1548px #fff, 778px 46px #fff,
          107px 1525px #fff, 1788px 1978px #fff, 1240px 442px #fff,
          80px 1421px #fff, 1023px 193px #fff, 1490px 965px #fff,
          1298px 844px #fff, 1236px 386px #fff, 868px 1399px #fff,
          883px 1728px #fff, 1010px 240px #fff, 57px 1216px #fff,
          85px 566px #fff, 249px 981px #fff, 590px 127px #fff, 382px 456px #fff,
          1576px 1519px #fff, 1983px 1077px #fff, 1731px 1591px #fff,
          824px 697px #fff, 1469px 1724px #fff, 395px 149px #fff,
          829px 173px #fff, 1452px 342px #fff, 1732px 1279px #fff,
          223px 10px #fff, 1191px 1383px #fff, 1515px 1018px #fff,
          1955px 268px #fff, 1650px 549px #fff, 277px 118px #fff,
          206px 216px #fff, 6px 1836px #fff, 1036px 444px #fff,
          1225px 1235px #fff, 1409px 1437px #fff, 488px 1282px #fff,
          1207px 1375px #fff, 712px 1152px #fff, 6px 1462px #fff,
          133px 739px #fff, 1127px 372px #fff, 44px 618px #fff,
          141px 1351px #fff, 428px 1126px #fff, 1056px 277px #fff,
          687px 521px #fff, 1743px 1024px #fff, 247px 1901px #fff,
          290px 1585px #fff, 998px 1425px #fff, 1052px 1662px #fff,
          1706px 574px #fff, 607px 924px #fff, 1024px 1153px #fff,
          757px 1195px #fff, 1582px 714px #fff, 1109px 711px #fff,
          1824px 1318px #fff, 841px 762px #fff, 1676px 191px #fff,
          1440px 148px #fff, 825px 1228px #fff, 1875px 887px #fff,
          127px 119px #fff, 234px 587px #fff, 990px 1486px #fff,
          667px 1821px #fff, 733px 384px #fff, 921px 740px #fff,
          778px 210px #fff, 14px 1761px #fff, 490px 1409px #fff,
          1825px 1498px #fff, 683px 1306px #fff, 1354px 1690px #fff,
          493px 69px #fff, 635px 644px #fff, 315px 1067px #fff,
          240px 1329px #fff, 1251px 1948px #fff, 1885px 1293px #fff,
          1200px 408px #fff, 1207px 1069px #fff, 1445px 716px #fff,
          1664px 1635px #fff, 1625px 1172px #fff, 1215px 1971px #fff,
          396px 533px #fff, 1468px 85px #fff, 1893px 407px #fff,
          1780px 13px #fff, 1866px 376px #fff, 97px 505px #fff, 460px 969px #fff,
          1938px 607px #fff, 1847px 285px #fff, 1094px 1179px #fff,
          330px 1201px #fff, 885px 473px #fff, 1426px 1525px #fff,
          994px 7px #fff, 695px 566px #fff, 784px 466px #fff, 1266px 1960px #fff,
          1226px 335px #fff, 1641px 1173px #fff, 937px 10px #fff,
          1965px 780px #fff, 1557px 562px #fff, 261px 657px #fff,
          152px 442px #fff, 1642px 549px #fff, 1180px 1574px #fff,
          1464px 1997px #fff, 1736px 1101px #fff, 701px 525px #fff,
          1141px 1461px #fff, 408px 1374px #fff, 1800px 99px #fff,
          1045px 174px #fff, 368px 1400px #fff, 24px 1300px #fff,
          1315px 1241px #fff, 1834px 679px #fff, 1863px 1185px #fff,
          1848px 251px #fff, 1775px 796px #fff, 1817px 90px #fff,
          1542px 1393px #fff, 188px 785px #fff, 493px 1570px #fff,
          52px 799px #fff, 1786px 1369px #fff, 326px 1860px #fff,
          1330px 789px #fff, 1379px 919px #fff, 653px 854px #fff,
          1668px 1011px #fff, 979px 379px #fff, 1768px 369px #fff,
          1377px 1561px #fff, 1438px 1872px #fff, 765px 400px #fff,
          1221px 925px #fff, 1292px 1146px #fff, 1162px 1736px #fff,
          857px 1695px #fff, 621px 789px #fff, 111px 834px #fff,
          383px 697px #fff, 1980px 1668px #fff, 1953px 1220px #fff,
          101px 1790px #fff, 1540px 928px #fff, 380px 1862px #fff,
          357px 240px #fff, 1416px 642px #fff, 1950px 364px #fff,
          734px 1841px #fff, 34px 1747px #fff, 464px 648px #fff,
          61px 1012px #fff, 358px 1414px #fff, 938px 458px #fff,
          876px 1249px #fff, 65px 1144px #fff, 259px 1994px #fff,
          1419px 890px #fff, 736px 1097px #fff, 893px 1964px #fff,
          705px 1880px #fff, 593px 501px #fff, 109px 1044px #fff,
          728px 1962px #fff, 577px 153px #fff, 1384px 922px #fff,
          1841px 1716px #fff, 842px 410px #fff, 1784px 1974px #fff,
          512px 1460px #fff, 787px 1575px #fff, 141px 1943px #fff,
          1705px 1328px #fff, 221px 449px #fff, 856px 1068px #fff,
          633px 1535px #fff, 1430px 670px #fff, 1485px 993px #fff,
          10px 1781px #fff, 246px 749px #fff, 1874px 932px #fff,
          1653px 483px #fff, 90px 588px #fff, 1244px 449px #fff,
          485px 1178px #fff, 1430px 1394px #fff, 1216px 929px #fff,
          1384px 1578px #fff, 1105px 328px #fff, 372px 1550px #fff,
          1668px 66px #fff, 73px 551px #fff, 402px 841px #fff, 290px 765px #fff,
          1152px 461px #fff, 488px 1166px #fff, 1840px 663px #fff,
          1136px 1112px #fff, 1089px 622px #fff, 1844px 70px #fff,
          861px 815px #fff, 588px 1258px #fff, 1629px 992px #fff,
          1906px 1843px #fff, 254px 1259px #fff, 849px 9px #fff,
          1114px 1466px #fff, 927px 794px #fff, 865px 1358px #fff,
          1141px 494px #fff, 1111px 26px #fff, 549px 1947px #fff,
          236px 462px #fff, 672px 280px #fff, 34px 1393px #fff,
          368px 1859px #fff, 614px 567px #fff, 1788px 1079px #fff,
          484px 838px #fff, 1501px 686px #fff, 6px 1028px #fff,
          516px 1816px #fff, 682px 1812px #fff, 1079px 912px #fff,
          1019px 1545px #fff, 906px 1418px #fff, 1569px 1224px #fff,
          186px 1546px #fff, 1151px 794px #fff, 1877px 1954px #fff,
          1640px 990px #fff, 598px 1419px #fff, 749px 1978px #fff,
          568px 1705px #fff, 515px 1354px #fff, 1510px 107px #fff,
          1328px 658px #fff, 1082px 1072px #fff, 396px 949px #fff,
          1074px 1618px #fff, 1980px 308px #fff, 886px 233px #fff,
          1446px 1922px #fff, 566px 173px #fff, 413px 1467px #fff,
          1693px 927px #fff, 1249px 953px #fff, 362px 1250px #fff,
          55px 759px #fff, 1017px 447px #fff, 559px 1197px #fff,
          1892px 1759px #fff, 1305px 547px #fff, 1859px 424px #fff,
          93px 656px #fff, 993px 290px #fff, 1937px 1262px #fff,
          1087px 1933px #fff, 236px 623px #fff, 1075px 1951px #fff,
          327px 1108px #fff, 785px 1435px #fff, 1442px 106px #fff,
          773px 954px #fff, 538px 652px #fff, 1396px 791px #fff,
          633px 1591px #fff, 1571px 349px #fff, 917px 1409px #fff,
          1748px 598px #fff, 702px 221px #fff, 307px 584px #fff,
          1927px 744px #fff, 893px 1696px #fff, 1193px 659px #fff,
          1411px 587px #fff, 1952px 1232px #fff, 55px 869px #fff,
          503px 319px #fff, 495px 1678px #fff, 1056px 1191px #fff,
          1394px 1389px #fff, 1841px 517px #fff, 1523px 1112px #fff,
          390px 1587px #fff, 1903px 865px #fff, 1240px 161px #fff,
          1254px 1122px #fff, 1347px 997px #fff, 1825px 193px #fff,
          644px 164px #fff, 551px 890px #fff, 210px 928px #fff,
          1571px 201px #fff, 91px 1554px #fff, 1656px 1277px #fff,
          871px 1178px #fff, 1426px 916px #fff, 1193px 33px #fff,
          170px 631px #fff, 1639px 455px #fff, 437px 901px #fff,
          1645px 1149px #fff, 451px 1083px #fff, 394px 890px #fff,
          578px 1770px #fff, 1798px 1075px #fff, 601px 751px #fff,
          707px 637px #fff, 410px 556px #fff, 1585px 1488px #fff,
          1110px 1058px #fff, 759px 123px #fff, 26px 1705px #fff,
          176px 59px #fff, 56px 91px #fff, 1080px 905px #fff, 412px 1196px #fff,
          865px 804px #fff, 1417px 28px #fff, 1386px 1867px #fff,
          1801px 689px #fff, 694px 536px #fff, 607px 1994px #fff,
          738px 776px #fff, 1291px 1373px #fff, 256px 476px #fff,
          1796px 1695px #fff, 1679px 733px #fff, 879px 1036px #fff,
          849px 1800px #fff, 1189px 112px #fff, 769px 572px #fff,
          877px 1628px #fff, 819px 1333px #fff, 1535px 702px #fff,
          159px 613px #fff, 327px 1225px #fff, 908px 1899px #fff,
          1960px 958px #fff, 1019px 99px #fff, 469px 25px #fff,
          417px 1891px #fff, 1534px 1755px #fff, 668px 254px #fff,
          120px 1163px #fff, 1837px 501px #fff, 1172px 40px #fff,
          1674px 454px #fff, 1784px 1111px #fff, 1369px 177px #fff,
          1436px 451px #fff, 1456px 357px #fff, 1597px 926px #fff,
          499px 906px #fff, 1785px 1627px #fff, 634px 1064px #fff,
          1034px 1606px #fff, 1324px 1295px #fff, 1879px 581px #fff,
          1257px 908px #fff, 232px 788px #fff, 1574px 1435px #fff,
          1439px 864px #fff, 1709px 978px #fff, 1334px 1890px #fff,
          1212px 1718px #fff, 1583px 828px #fff, 1007px 745px #fff,
          692px 225px #fff, 1263px 1270px #fff, 29px 1684px #fff,
          651px 1540px #fff, 41px 1986px #fff, 1239px 837px #fff,
          1592px 1895px #fff, 1945px 1086px #fff, 1537px 1908px #fff,
          1333px 1553px #fff, 321px 823px #fff, 1555px 518px #fff,
          1259px 1056px #fff, 534px 183px #fff, 202px 1751px #fff,
          1018px 1746px #fff, 217px 1775px #fff, 602px 768px #fff,
          1184px 192px #fff, 1810px 1885px #fff, 47px 129px #fff,
          836px 491px #fff, 1863px 371px #fff, 96px 877px #fff,
          894px 1415px #fff, 1015px 1495px #fff, 1580px 1209px #fff,
          567px 1175px #fff, 1073px 448px #fff, 56px 780px #fff,
          1129px 1931px #fff, 792px 1812px #fff, 610px 714px #fff,
          523px 613px #fff, 1377px 1022px #fff, 1046px 1273px #fff,
          936px 538px #fff, 908px 660px #fff, 669px 1734px #fff,
          1264px 803px #fff, 171px 840px #fff, 1696px 1340px #fff,
          287px 1825px #fff, 594px 799px #fff, 119px 1556px #fff,
          556px 1111px #fff, 1120px 485px #fff, 70px 1404px #fff,
          1467px 647px #fff, 885px 202px #fff, 1310px 1894px #fff,
          685px 1223px #fff, 1974px 1970px #fff, 1327px 1044px #fff,
          634px 747px #fff, 658px 108px #fff, 460px 303px #fff,
          586px 1202px #fff, 478px 1858px #fff, 890px 569px #fff,
          299px 622px #fff, 1138px 955px #fff, 270px 2px #fff, 1835px 150px #fff,
          851px 700px #fff, 342px 1809px #fff, 550px 1917px #fff,
          1749px 773px #fff, 310px 1866px #fff, 1415px 1740px #fff,
          1895px 843px #fff, 452px 927px #fff, 1576px 1633px #fff,
          545px 183px #fff, 1988px 23px #fff, 248px 1818px #fff,
          1178px 345px #fff, 1206px 494px #fff, 1639px 882px #fff,
          847px 302px #fff, 992px 495px #fff, 960px 1358px #fff,
          1156px 1797px #fff, 413px 540px #fff, 1979px 1487px #fff,
          1664px 1586px #fff, 823px 135px #fff, 937px 583px #fff,
          964px 1276px #fff, 1969px 1687px #fff, 146px 428px #fff,
          779px 1492px #fff, 6px 318px #fff, 1695px 1922px #fff,
          625px 295px #fff, 1303px 1330px #fff, 434px 1077px #fff,
          1777px 1436px #fff, 89px 1921px #fff, 860px 1650px #fff,
          1928px 941px #fff, 1229px 1199px #fff, 1819px 1600px #fff,
          482px 1405px #fff, 1934px 171px #fff, 74px 1015px #fff,
          1554px 1660px #fff, 1917px 904px #fff, 1825px 1441px #fff,
          101px 1057px #fff, 689px 1919px #fff, 1915px 448px #fff,
          1710px 1462px #fff, 965px 467px #fff, 451px 501px #fff,
          1617px 1484px #fff, 1695px 231px #fff, 1335px 884px #fff,
          192px 772px #fff, 565px 518px #fff, 339px 1552px #fff, 245px 55px #fff,
          384px 1143px #fff, 1206px 458px #fff, 367px 1889px #fff,
          1882px 151px #fff, 333px 887px #fff, 1876px 964px #fff,
          1936px 1962px #fff, 1033px 111px #fff, 578px 964px #fff,
          1656px 651px #fff, 876px 1299px #fff, 1052px 1293px #fff,
          1181px 1919px #fff, 576px 305px #fff, 858px 675px #fff,
          1328px 1189px #fff, 1505px 1835px #fff, 974px 1694px #fff,
          1625px 644px #fff, 1332px 1384px #fff, 582px 1507px #fff,
          1617px 1645px #fff, 625px 639px #fff, 475px 62px #fff,
          1246px 1018px #fff, 708px 1821px #fff, 1605px 1196px #fff,
          80px 1930px #fff, 708px 22px #fff, 28px 1782px #fff, 1695px 954px #fff,
          1230px 797px #fff, 1893px 44px #fff, 1067px 1595px #fff,
          948px 1428px #fff, 1800px 1576px #fff, 1199px 1466px #fff,
          1008px 256px #fff, 1008px 991px #fff, 1786px 885px #fff,
          1261px 1925px #fff, 563px 1495px #fff, 1265px 665px #fff,
          29px 148px #fff, 1106px 563px #fff, 106px 82px #fff,
          1995px 1714px #fff, 1320px 1920px #fff, 759px 786px #fff,
          1567px 715px #fff, 717px 1233px #fff, 1793px 235px #fff,
          1255px 364px #fff, 440px 1518px #fff, 1334px 945px #fff,
          103px 655px #fff, 1835px 267px #fff, 1720px 1879px #fff,
          1558px 931px #fff, 1559px 471px #fff, 358px 425px #fff,
          532px 1952px #fff, 852px 1131px #fff, 1978px 1119px #fff,
          1873px 1998px #fff, 1791px 1414px #fff, 282px 493px #fff,
          1090px 1762px #fff, 1173px 654px #fff, 1695px 1902px #fff,
          914px 1361px #fff, 139px 1061px #fff, 608px 849px #fff,
          984px 1085px #fff, 346px 1179px #fff, 598px 1035px #fff,
          1420px 893px #fff, 800px 694px #fff, 984px 632px #fff,
          1669px 1000px #fff, 125px 1636px #fff, 1150px 156px #fff,
          1922px 1586px #fff, 382px 1136px #fff, 148px 1328px #fff,
          742px 1726px #fff, 683px 574px #fff, 1146px 517px #fff,
          1531px 1233px #fff, 1729px 487px #fff, 1249px 1001px #fff,
          1328px 1788px #fff, 1627px 1326px #fff, 1282px 545px #fff,
          1526px 768px #fff, 1085px 1370px #fff, 951px 83px #fff,
          506px 1365px #fff, 621px 1944px #fff, 1322px 777px #fff,
          1781px 230px #fff, 1723px 411px #fff, 1136px 815px #fff,
          1222px 1140px #fff, 1587px 1160px #fff, 1342px 1326px #fff,
          1430px 212px #fff, 1620px 1098px #fff, 842px 398px #fff,
          1413px 974px #fff, 1025px 297px #fff, 1334px 1017px #fff,
          1381px 1747px #fff, 438px 557px #fff, 1563px 300px #fff,
          1713px 663px #fff, 1061px 164px #fff, 710px 1233px #fff,
          1396px 1487px #fff, 149px 630px #fff, 285px 77px #fff,
          115px 672px #fff, 633px 1821px #fff, 461px 1483px #fff,
          1933px 1793px #fff, 1164px 890px #fff, 1538px 1261px #fff,
          918px 1539px #fff, 1398px 1974px #fff, 85px 185px #fff,
          319px 1265px #fff, 1329px 363px #fff, 1795px 1822px #fff,
          779px 1793px #fff, 958px 1100px #fff, 531px 678px #fff,
          1295px 1206px #fff, 687px 787px #fff, 1094px 412px #fff,
          1177px 980px #fff, 1002px 928px #fff, 749px 1786px #fff,
          1198px 1401px #fff, 569px 302px #fff, 1863px 1627px #fff,
          1563px 1043px #fff, 1723px 1252px #fff, 568px 1669px #fff,
          171px 1292px #fff, 1399px 341px #fff, 1899px 762px #fff,
          1506px 1185px #fff, 176px 13px #fff, 1081px 460px #fff,
          1651px 685px #fff, 379px 1491px #fff, 839px 241px #fff,
          1670px 1932px #fff, 1736px 518px #fff, 327px 1300px #fff,
          1374px 1110px #fff, 1401px 1937px #fff, 315px 1622px #fff,
          1789px 1787px #fff, 1971px 1480px #fff, 227px 1663px #fff,
          1326px 575px #fff, 1494px 1819px #fff, 432px 1894px #fff,
          1254px 875px #fff, 400px 477px #fff, 1822px 1266px #fff,
          1486px 284px #fff, 804px 621px #fff, 18px 487px #fff, 15px 1893px #fff,
          153px 1000px #fff, 548px 1400px #fff, 667px 289px #fff,
          337px 968px #fff, 1717px 1276px #fff, 395px 349px #fff,
          434px 837px #fff, 434px 111px #fff, 1816px 1988px #fff,
          170px 1929px #fff, 1591px 197px #fff, 179px 1961px #fff,
          915px 890px #fff, 483px 860px #fff, 490px 1731px #fff, 855px 32px #fff,
          1861px 1949px #fff, 1220px 1427px #fff, 1848px 1216px #fff;
        animation: animStar 50s linear infinite;
      }
      .background .stars2 {
        width: 2px;
        height: 2px;
        box-shadow: 1792px 429px #fff, 773px 722px #fff, 537px 1762px #fff,
          1337px 530px #fff, 958px 1418px #fff, 592px 1060px #fff,
          1769px 439px #fff, 1891px 344px #fff, 240px 1494px #fff,
          1479px 706px #fff, 1361px 1981px #fff, 581px 1572px #fff,
          950px 1623px #fff, 1132px 1285px #fff, 1250px 1793px #fff,
          234px 1878px #fff, 81px 664px #fff, 1538px 1592px #fff,
          1303px 491px #fff, 1711px 966px #fff, 1316px 1247px #fff,
          1156px 1696px #fff, 1473px 88px #fff, 1368px 1128px #fff,
          225px 1977px #fff, 1849px 723px #fff, 1816px 775px #fff,
          1916px 312px #fff, 130px 425px #fff, 330px 938px #fff,
          904px 1293px #fff, 1806px 895px #fff, 204px 781px #fff,
          280px 1208px #fff, 1837px 187px #fff, 352px 787px #fff,
          1085px 1402px #fff, 765px 1120px #fff, 1866px 1660px #fff,
          1462px 430px #fff, 1470px 1138px #fff, 267px 1117px #fff,
          1294px 859px #fff, 620px 183px #fff, 1816px 104px #fff,
          1385px 117px #fff, 1440px 219px #fff, 12px 549px #fff,
          1413px 1728px #fff, 380px 1067px #fff, 56px 232px #fff,
          835px 883px #fff, 298px 1609px #fff, 1731px 1306px #fff,
          1734px 351px #fff, 1881px 1670px #fff, 354px 1711px #fff,
          1438px 1538px #fff, 466px 294px #fff, 746px 1618px #fff,
          1721px 537px #fff, 151px 1192px #fff, 548px 249px #fff,
          781px 139px #fff, 855px 541px #fff, 507px 974px #fff, 547px 919px #fff,
          1743px 1429px #fff, 78px 809px #fff, 1057px 1241px #fff,
          1438px 1356px #fff, 178px 1742px #fff, 1817px 1430px #fff,
          1012px 1187px #fff, 200px 426px #fff, 655px 1987px #fff,
          927px 138px #fff, 807px 1264px #fff, 77px 130px #fff,
          1940px 1673px #fff, 675px 1697px #fff, 936px 1765px #fff,
          1242px 859px #fff, 1422px 1578px #fff, 1471px 708px #fff,
          1893px 1911px #fff, 1744px 1989px #fff, 1207px 389px #fff,
          574px 1345px #fff, 1014px 1385px #fff, 326px 1317px #fff,
          91px 1184px #fff, 1311px 836px #fff, 1502px 581px #fff,
          1203px 1056px #fff, 772px 1017px #fff, 1929px 1129px #fff,
          332px 1219px #fff, 1006px 266px #fff, 1662px 640px #fff,
          1897px 1180px #fff, 1579px 884px #fff, 554px 95px #fff,
          482px 1785px #fff, 676px 73px #fff, 1233px 1008px #fff,
          511px 1342px #fff, 1559px 1737px #fff, 1324px 976px #fff,
          257px 1436px #fff, 1429px 1452px #fff, 816px 206px #fff,
          229px 1416px #fff, 1090px 194px #fff, 852px 1057px #fff,
          1284px 1466px #fff, 1269px 1762px #fff, 113px 119px #fff,
          194px 686px #fff, 1986px 404px #fff, 472px 752px #fff,
          627px 1277px #fff, 1558px 1583px #fff, 156px 135px #fff,
          1772px 1954px #fff, 1650px 1625px #fff, 197px 796px #fff,
          1602px 982px #fff, 1635px 1573px #fff, 16px 993px #fff,
          146px 431px #fff, 1930px 1280px #fff, 755px 1712px #fff,
          1967px 1667px #fff, 1119px 611px #fff, 1089px 947px #fff,
          1837px 588px #fff, 229px 1011px #fff, 82px 850px #fff,
          231px 1258px #fff, 1228px 842px #fff, 1348px 1021px #fff,
          1214px 1253px #fff, 839px 176px #fff, 703px 1208px #fff,
          175px 1973px #fff, 1876px 460px #fff, 1286px 1727px #fff,
          1023px 1283px #fff, 1142px 223px #fff, 1568px 1003px #fff,
          536px 606px #fff, 1068px 858px #fff, 1432px 1585px #fff,
          63px 528px #fff, 190px 691px #fff, 1250px 305px #fff,
          979px 1392px #fff, 1723px 1800px #fff, 399px 1390px #fff,
          205px 108px #fff, 788px 1657px #fff, 1472px 1594px #fff,
          1109px 264px #fff, 506px 438px #fff, 177px 1763px #fff,
          1451px 1831px #fff, 999px 777px #fff, 689px 783px #fff,
          1905px 1233px #fff, 1383px 702px #fff, 895px 1866px #fff,
          1365px 1525px #fff, 224px 436px #fff, 1193px 1146px #fff,
          556px 1892px #fff, 949px 525px #fff, 827px 689px #fff,
          81px 1456px #fff, 405px 813px #fff, 1380px 363px #fff,
          994px 1263px #fff, 1061px 1007px #fff, 125px 1229px #fff,
          1798px 702px #fff, 68px 1978px #fff, 288px 1563px #fff,
          477px 1015px #fff, 1921px 1546px #fff, 752px 1034px #fff,
          917px 362px #fff, 1170px 1688px #fff, 1564px 706px #fff,
          1851px 1216px #fff, 110px 349px #fff, 1489px 880px #fff,
          1420px 1301px #fff, 503px 81px #fff, 434px 1397px #fff,
          53px 963px #fff;
        animation: animStar 100s linear infinite;
      }
      .background .stars3 {
        width: 3px;
        height: 3px;
        box-shadow: 331px 1122px #fff, 1983px 84px #fff, 1626px 582px #fff,
          520px 1560px #fff, 976px 1292px #fff, 810px 907px #fff,
          1044px 1350px #fff, 625px 685px #fff, 53px 416px #fff,
          546px 849px #fff, 1093px 873px #fff, 1885px 1951px #fff,
          1156px 262px #fff, 733px 97px #fff, 641px 1819px #fff,
          1530px 367px #fff, 819px 1124px #fff, 540px 550px #fff,
          823px 850px #fff, 1636px 800px #fff, 1387px 563px #fff,
          379px 1449px #fff, 1308px 1233px #fff, 295px 1512px #fff,
          102px 1957px #fff, 1113px 1788px #fff, 1180px 454px #fff,
          21px 146px #fff, 580px 1676px #fff, 899px 1461px #fff,
          1398px 42px #fff, 182px 209px #fff, 1266px 1562px #fff,
          1939px 451px #fff, 1703px 50px #fff, 144px 315px #fff,
          455px 121px #fff, 751px 1823px #fff, 297px 1258px #fff,
          1674px 475px #fff, 1885px 1241px #fff, 160px 125px #fff,
          262px 322px #fff, 1107px 911px #fff, 1217px 145px #fff,
          1387px 1028px #fff, 646px 1681px #fff, 1969px 1417px #fff,
          1754px 890px #fff, 1339px 412px #fff, 1062px 585px #fff,
          365px 225px #fff, 1388px 1845px #fff, 383px 250px #fff,
          1057px 457px #fff, 1153px 1978px #fff, 1689px 1084px #fff,
          1855px 1630px #fff, 1250px 425px #fff, 1033px 1638px #fff,
          1684px 253px #fff, 58px 1901px #fff, 1281px 856px #fff,
          518px 1893px #fff, 1250px 835px #fff, 862px 1834px #fff,
          63px 1978px #fff, 1981px 226px #fff, 825px 883px #fff,
          723px 196px #fff, 997px 106px #fff, 1317px 1553px #fff,
          1879px 835px #fff, 1830px 1046px #fff, 872px 98px #fff,
          1722px 78px #fff, 886px 486px #fff, 1752px 646px #fff,
          74px 1594px #fff, 251px 183px #fff, 1767px 1373px #fff,
          1504px 489px #fff, 339px 693px #fff, 1437px 1169px #fff,
          1312px 995px #fff, 1669px 928px #fff, 346px 935px #fff,
          1921px 1826px #fff, 1429px 776px #fff, 458px 899px #fff,
          1880px 945px #fff, 319px 1204px #fff, 366px 164px #fff,
          1512px 1817px #fff, 852px 1330px #fff, 10px 34px #fff,
          16px 1171px #fff, 1373px 74px #fff, 1042px 1448px #fff,
          1955px 742px #fff;
        animation: animStar 150s linear infinite;
      }
      .background :is(.stars1, .stars2, .stars3):after {
        content: "";
        position: absolute;
        top: 2000px;
      }
      .background .stars1:after {
        width: 1px;
        height: 1px;
        box-shadow: 1450px 1365px #fff, 1333px 1548px #fff, 778px 46px #fff,
          107px 1525px #fff, 1788px 1978px #fff, 1240px 442px #fff,
          80px 1421px #fff, 1023px 193px #fff, 1490px 965px #fff,
          1298px 844px #fff, 1236px 386px #fff, 868px 1399px #fff,
          883px 1728px #fff, 1010px 240px #fff, 57px 1216px #fff,
          85px 566px #fff, 249px 981px #fff, 590px 127px #fff, 382px 456px #fff,
          1576px 1519px #fff, 1983px 1077px #fff, 1731px 1591px #fff,
          824px 697px #fff, 1469px 1724px #fff, 395px 149px #fff,
          829px 173px #fff, 1452px 342px #fff, 1732px 1279px #fff,
          223px 10px #fff, 1191px 1383px #fff, 1515px 1018px #fff,
          1955px 268px #fff, 1650px 549px #fff, 277px 118px #fff,
          206px 216px #fff, 6px 1836px #fff, 1036px 444px #fff,
          1225px 1235px #fff, 1409px 1437px #fff, 488px 1282px #fff,
          1207px 1375px #fff, 712px 1152px #fff, 6px 1462px #fff,
          133px 739px #fff, 1127px 372px #fff, 44px 618px #fff,
          141px 1351px #fff, 428px 1126px #fff, 1056px 277px #fff,
          687px 521px #fff, 1743px 1024px #fff, 247px 1901px #fff,
          290px 1585px #fff, 998px 1425px #fff, 1052px 1662px #fff,
          1706px 574px #fff, 607px 924px #fff, 1024px 1153px #fff,
          757px 1195px #fff, 1582px 714px #fff, 1109px 711px #fff,
          1824px 1318px #fff, 841px 762px #fff, 1676px 191px #fff,
          1440px 148px #fff, 825px 1228px #fff, 1875px 887px #fff,
          127px 119px #fff, 234px 587px #fff, 990px 1486px #fff,
          667px 1821px #fff, 733px 384px #fff, 921px 740px #fff,
          778px 210px #fff, 14px 1761px #fff, 490px 1409px #fff,
          1825px 1498px #fff, 683px 1306px #fff, 1354px 1690px #fff,
          493px 69px #fff, 635px 644px #fff, 315px 1067px #fff,
          240px 1329px #fff, 1251px 1948px #fff, 1885px 1293px #fff,
          1200px 408px #fff, 1207px 1069px #fff, 1445px 716px #fff,
          1664px 1635px #fff, 1625px 1172px #fff, 1215px 1971px #fff,
          396px 533px #fff, 1468px 85px #fff, 1893px 407px #fff,
          1780px 13px #fff, 1866px 376px #fff, 97px 505px #fff, 460px 969px #fff,
          1938px 607px #fff, 1847px 285px #fff, 1094px 1179px #fff,
          330px 1201px #fff, 885px 473px #fff, 1426px 1525px #fff,
          994px 7px #fff, 695px 566px #fff, 784px 466px #fff, 1266px 1960px #fff,
          1226px 335px #fff, 1641px 1173px #fff, 937px 10px #fff,
          1965px 780px #fff, 1557px 562px #fff, 261px 657px #fff,
          152px 442px #fff, 1642px 549px #fff, 1180px 1574px #fff,
          1464px 1997px #fff, 1736px 1101px #fff, 701px 525px #fff,
          1141px 1461px #fff, 408px 1374px #fff, 1800px 99px #fff,
          1045px 174px #fff, 368px 1400px #fff, 24px 1300px #fff,
          1315px 1241px #fff, 1834px 679px #fff, 1863px 1185px #fff,
          1848px 251px #fff, 1775px 796px #fff, 1817px 90px #fff,
          1542px 1393px #fff, 188px 785px #fff, 493px 1570px #fff,
          52px 799px #fff, 1786px 1369px #fff, 326px 1860px #fff,
          1330px 789px #fff, 1379px 919px #fff, 653px 854px #fff,
          1668px 1011px #fff, 979px 379px #fff, 1768px 369px #fff,
          1377px 1561px #fff, 1438px 1872px #fff, 765px 400px #fff,
          1221px 925px #fff, 1292px 1146px #fff, 1162px 1736px #fff,
          857px 1695px #fff, 621px 789px #fff, 111px 834px #fff,
          383px 697px #fff, 1980px 1668px #fff, 1953px 1220px #fff,
          101px 1790px #fff, 1540px 928px #fff, 380px 1862px #fff,
          357px 240px #fff, 1416px 642px #fff, 1950px 364px #fff,
          734px 1841px #fff, 34px 1747px #fff, 464px 648px #fff,
          61px 1012px #fff, 358px 1414px #fff, 938px 458px #fff,
          876px 1249px #fff, 65px 1144px #fff, 259px 1994px #fff,
          1419px 890px #fff, 736px 1097px #fff, 893px 1964px #fff,
          705px 1880px #fff, 593px 501px #fff, 109px 1044px #fff,
          728px 1962px #fff, 577px 153px #fff, 1384px 922px #fff,
          1841px 1716px #fff, 842px 410px #fff, 1784px 1974px #fff,
          512px 1460px #fff, 787px 1575px #fff, 141px 1943px #fff,
          1705px 1328px #fff, 221px 449px #fff, 856px 1068px #fff,
          633px 1535px #fff, 1430px 670px #fff, 1485px 993px #fff,
          10px 1781px #fff, 246px 749px #fff, 1874px 932px #fff,
          1653px 483px #fff, 90px 588px #fff, 1244px 449px #fff,
          485px 1178px #fff, 1430px 1394px #fff, 1216px 929px #fff,
          1384px 1578px #fff, 1105px 328px #fff, 372px 1550px #fff,
          1668px 66px #fff, 73px 551px #fff, 402px 841px #fff, 290px 765px #fff,
          1152px 461px #fff, 488px 1166px #fff, 1840px 663px #fff,
          1136px 1112px #fff, 1089px 622px #fff, 1844px 70px #fff,
          861px 815px #fff, 588px 1258px #fff, 1629px 992px #fff,
          1906px 1843px #fff, 254px 1259px #fff, 849px 9px #fff,
          1114px 1466px #fff, 927px 794px #fff, 865px 1358px #fff,
          1141px 494px #fff, 1111px 26px #fff, 549px 1947px #fff,
          236px 462px #fff, 672px 280px #fff, 34px 1393px #fff,
          368px 1859px #fff, 614px 567px #fff, 1788px 1079px #fff,
          484px 838px #fff, 1501px 686px #fff, 6px 1028px #fff,
          516px 1816px #fff, 682px 1812px #fff, 1079px 912px #fff,
          1019px 1545px #fff, 906px 1418px #fff, 1569px 1224px #fff,
          186px 1546px #fff, 1151px 794px #fff, 1877px 1954px #fff,
          1640px 990px #fff, 598px 1419px #fff, 749px 1978px #fff,
          568px 1705px #fff, 515px 1354px #fff, 1510px 107px #fff,
          1328px 658px #fff, 1082px 1072px #fff, 396px 949px #fff,
          1074px 1618px #fff, 1980px 308px #fff, 886px 233px #fff,
          1446px 1922px #fff, 566px 173px #fff, 413px 1467px #fff,
          1693px 927px #fff, 1249px 953px #fff, 362px 1250px #fff,
          55px 759px #fff, 1017px 447px #fff, 559px 1197px #fff,
          1892px 1759px #fff, 1305px 547px #fff, 1859px 424px #fff,
          93px 656px #fff, 993px 290px #fff, 1937px 1262px #fff,
          1087px 1933px #fff, 236px 623px #fff, 1075px 1951px #fff,
          327px 1108px #fff, 785px 1435px #fff, 1442px 106px #fff,
          773px 954px #fff, 538px 652px #fff, 1396px 791px #fff,
          633px 1591px #fff, 1571px 349px #fff, 917px 1409px #fff,
          1748px 598px #fff, 702px 221px #fff, 307px 584px #fff,
          1927px 744px #fff, 893px 1696px #fff, 1193px 659px #fff,
          1411px 587px #fff, 1952px 1232px #fff, 55px 869px #fff,
          503px 319px #fff, 495px 1678px #fff, 1056px 1191px #fff,
          1394px 1389px #fff, 1841px 517px #fff, 1523px 1112px #fff,
          390px 1587px #fff, 1903px 865px #fff, 1240px 161px #fff,
          1254px 1122px #fff, 1347px 997px #fff, 1825px 193px #fff,
          644px 164px #fff, 551px 890px #fff, 210px 928px #fff,
          1571px 201px #fff, 91px 1554px #fff, 1656px 1277px #fff,
          871px 1178px #fff, 1426px 916px #fff, 1193px 33px #fff,
          170px 631px #fff, 1639px 455px #fff, 437px 901px #fff,
          1645px 1149px #fff, 451px 1083px #fff, 394px 890px #fff,
          578px 1770px #fff, 1798px 1075px #fff, 601px 751px #fff,
          707px 637px #fff, 410px 556px #fff, 1585px 1488px #fff,
          1110px 1058px #fff, 759px 123px #fff, 26px 1705px #fff,
          176px 59px #fff, 56px 91px #fff, 1080px 905px #fff, 412px 1196px #fff,
          865px 804px #fff, 1417px 28px #fff, 1386px 1867px #fff,
          1801px 689px #fff, 694px 536px #fff, 607px 1994px #fff,
          738px 776px #fff, 1291px 1373px #fff, 256px 476px #fff,
          1796px 1695px #fff, 1679px 733px #fff, 879px 1036px #fff,
          849px 1800px #fff, 1189px 112px #fff, 769px 572px #fff,
          877px 1628px #fff, 819px 1333px #fff, 1535px 702px #fff,
          159px 613px #fff, 327px 1225px #fff, 908px 1899px #fff,
          1960px 958px #fff, 1019px 99px #fff, 469px 25px #fff,
          417px 1891px #fff, 1534px 1755px #fff, 668px 254px #fff,
          120px 1163px #fff, 1837px 501px #fff, 1172px 40px #fff,
          1674px 454px #fff, 1784px 1111px #fff, 1369px 177px #fff,
          1436px 451px #fff, 1456px 357px #fff, 1597px 926px #fff,
          499px 906px #fff, 1785px 1627px #fff, 634px 1064px #fff,
          1034px 1606px #fff, 1324px 1295px #fff, 1879px 581px #fff,
          1257px 908px #fff, 232px 788px #fff, 1574px 1435px #fff,
          1439px 864px #fff, 1709px 978px #fff, 1334px 1890px #fff,
          1212px 1718px #fff, 1583px 828px #fff, 1007px 745px #fff,
          692px 225px #fff, 1263px 1270px #fff, 29px 1684px #fff,
          651px 1540px #fff, 41px 1986px #fff, 1239px 837px #fff,
          1592px 1895px #fff, 1945px 1086px #fff, 1537px 1908px #fff,
          1333px 1553px #fff, 321px 823px #fff, 1555px 518px #fff,
          1259px 1056px #fff, 534px 183px #fff, 202px 1751px #fff,
          1018px 1746px #fff, 217px 1775px #fff, 602px 768px #fff,
          1184px 192px #fff, 1810px 1885px #fff, 47px 129px #fff,
          836px 491px #fff, 1863px 371px #fff, 96px 877px #fff,
          894px 1415px #fff, 1015px 1495px #fff, 1580px 1209px #fff,
          567px 1175px #fff, 1073px 448px #fff, 56px 780px #fff,
          1129px 1931px #fff, 792px 1812px #fff, 610px 714px #fff,
          523px 613px #fff, 1377px 1022px #fff, 1046px 1273px #fff,
          936px 538px #fff, 908px 660px #fff, 669px 1734px #fff,
          1264px 803px #fff, 171px 840px #fff, 1696px 1340px #fff,
          287px 1825px #fff, 594px 799px #fff, 119px 1556px #fff,
          556px 1111px #fff, 1120px 485px #fff, 70px 1404px #fff,
          1467px 647px #fff, 885px 202px #fff, 1310px 1894px #fff,
          685px 1223px #fff, 1974px 1970px #fff, 1327px 1044px #fff,
          634px 747px #fff, 658px 108px #fff, 460px 303px #fff,
          586px 1202px #fff, 478px 1858px #fff, 890px 569px #fff,
          299px 622px #fff, 1138px 955px #fff, 270px 2px #fff, 1835px 150px #fff,
          851px 700px #fff, 342px 1809px #fff, 550px 1917px #fff,
          1749px 773px #fff, 310px 1866px #fff, 1415px 1740px #fff,
          1895px 843px #fff, 452px 927px #fff, 1576px 1633px #fff,
          545px 183px #fff, 1988px 23px #fff, 248px 1818px #fff,
          1178px 345px #fff, 1206px 494px #fff, 1639px 882px #fff,
          847px 302px #fff, 992px 495px #fff, 960px 1358px #fff,
          1156px 1797px #fff, 413px 540px #fff, 1979px 1487px #fff,
          1664px 1586px #fff, 823px 135px #fff, 937px 583px #fff,
          964px 1276px #fff, 1969px 1687px #fff, 146px 428px #fff,
          779px 1492px #fff, 6px 318px #fff, 1695px 1922px #fff,
          625px 295px #fff, 1303px 1330px #fff, 434px 1077px #fff,
          1777px 1436px #fff, 89px 1921px #fff, 860px 1650px #fff,
          1928px 941px #fff, 1229px 1199px #fff, 1819px 1600px #fff,
          482px 1405px #fff, 1934px 171px #fff, 74px 1015px #fff,
          1554px 1660px #fff, 1917px 904px #fff, 1825px 1441px #fff,
          101px 1057px #fff, 689px 1919px #fff, 1915px 448px #fff,
          1710px 1462px #fff, 965px 467px #fff, 451px 501px #fff,
          1617px 1484px #fff, 1695px 231px #fff, 1335px 884px #fff,
          192px 772px #fff, 565px 518px #fff, 339px 1552px #fff, 245px 55px #fff,
          384px 1143px #fff, 1206px 458px #fff, 367px 1889px #fff,
          1882px 151px #fff, 333px 887px #fff, 1876px 964px #fff,
          1936px 1962px #fff, 1033px 111px #fff, 578px 964px #fff,
          1656px 651px #fff, 876px 1299px #fff, 1052px 1293px #fff,
          1181px 1919px #fff, 576px 305px #fff, 858px 675px #fff,
          1328px 1189px #fff, 1505px 1835px #fff, 974px 1694px #fff,
          1625px 644px #fff, 1332px 1384px #fff, 582px 1507px #fff,
          1617px 1645px #fff, 625px 639px #fff, 475px 62px #fff,
          1246px 1018px #fff, 708px 1821px #fff, 1605px 1196px #fff,
          80px 1930px #fff, 708px 22px #fff, 28px 1782px #fff, 1695px 954px #fff,
          1230px 797px #fff, 1893px 44px #fff, 1067px 1595px #fff,
          948px 1428px #fff, 1800px 1576px #fff, 1199px 1466px #fff,
          1008px 256px #fff, 1008px 991px #fff, 1786px 885px #fff,
          1261px 1925px #fff, 563px 1495px #fff, 1265px 665px #fff,
          29px 148px #fff, 1106px 563px #fff, 106px 82px #fff,
          1995px 1714px #fff, 1320px 1920px #fff, 759px 786px #fff,
          1567px 715px #fff, 717px 1233px #fff, 1793px 235px #fff,
          1255px 364px #fff, 440px 1518px #fff, 1334px 945px #fff,
          103px 655px #fff, 1835px 267px #fff, 1720px 1879px #fff,
          1558px 931px #fff, 1559px 471px #fff, 358px 425px #fff,
          532px 1952px #fff, 852px 1131px #fff, 1978px 1119px #fff,
          1873px 1998px #fff, 1791px 1414px #fff, 282px 493px #fff,
          1090px 1762px #fff, 1173px 654px #fff, 1695px 1902px #fff,
          914px 1361px #fff, 139px 1061px #fff, 608px 849px #fff,
          984px 1085px #fff, 346px 1179px #fff, 598px 1035px #fff,
          1420px 893px #fff, 800px 694px #fff, 984px 632px #fff,
          1669px 1000px #fff, 125px 1636px #fff, 1150px 156px #fff,
          1922px 1586px #fff, 382px 1136px #fff, 148px 1328px #fff,
          742px 1726px #fff, 683px 574px #fff, 1146px 517px #fff,
          1531px 1233px #fff, 1729px 487px #fff, 1249px 1001px #fff,
          1328px 1788px #fff, 1627px 1326px #fff, 1282px 545px #fff,
          1526px 768px #fff, 1085px 1370px #fff, 951px 83px #fff,
          506px 1365px #fff, 621px 1944px #fff, 1322px 777px #fff,
          1781px 230px #fff, 1723px 411px #fff, 1136px 815px #fff,
          1222px 1140px #fff, 1587px 1160px #fff, 1342px 1326px #fff,
          1430px 212px #fff, 1620px 1098px #fff, 842px 398px #fff,
          1413px 974px #fff, 1025px 297px #fff, 1334px 1017px #fff,
          1381px 1747px #fff, 438px 557px #fff, 1563px 300px #fff,
          1713px 663px #fff, 1061px 164px #fff, 710px 1233px #fff,
          1396px 1487px #fff, 149px 630px #fff, 285px 77px #fff,
          115px 672px #fff, 633px 1821px #fff, 461px 1483px #fff,
          1933px 1793px #fff, 1164px 890px #fff, 1538px 1261px #fff,
          918px 1539px #fff, 1398px 1974px #fff, 85px 185px #fff,
          319px 1265px #fff, 1329px 363px #fff, 1795px 1822px #fff,
          779px 1793px #fff, 958px 1100px #fff, 531px 678px #fff,
          1295px 1206px #fff, 687px 787px #fff, 1094px 412px #fff,
          1177px 980px #fff, 1002px 928px #fff, 749px 1786px #fff,
          1198px 1401px #fff, 569px 302px #fff, 1863px 1627px #fff,
          1563px 1043px #fff, 1723px 1252px #fff, 568px 1669px #fff,
          171px 1292px #fff, 1399px 341px #fff, 1899px 762px #fff,
          1506px 1185px #fff, 176px 13px #fff, 1081px 460px #fff,
          1651px 685px #fff, 379px 1491px #fff, 839px 241px #fff,
          1670px 1932px #fff, 1736px 518px #fff, 327px 1300px #fff,
          1374px 1110px #fff, 1401px 1937px #fff, 315px 1622px #fff,
          1789px 1787px #fff, 1971px 1480px #fff, 227px 1663px #fff,
          1326px 575px #fff, 1494px 1819px #fff, 432px 1894px #fff,
          1254px 875px #fff, 400px 477px #fff, 1822px 1266px #fff,
          1486px 284px #fff, 804px 621px #fff, 18px 487px #fff, 15px 1893px #fff,
          153px 1000px #fff, 548px 1400px #fff, 667px 289px #fff,
          337px 968px #fff, 1717px 1276px #fff, 395px 349px #fff,
          434px 837px #fff, 434px 111px #fff, 1816px 1988px #fff,
          170px 1929px #fff, 1591px 197px #fff, 179px 1961px #fff,
          915px 890px #fff, 483px 860px #fff, 490px 1731px #fff, 855px 32px #fff,
          1861px 1949px #fff, 1220px 1427px #fff, 1848px 1216px #fff;
      }
      .background .stars2:after {
        width: 2px;
        height: 2px;
        box-shadow: 1792px 429px #fff, 773px 722px #fff, 537px 1762px #fff,
          1337px 530px #fff, 958px 1418px #fff, 592px 1060px #fff,
          1769px 439px #fff, 1891px 344px #fff, 240px 1494px #fff,
          1479px 706px #fff, 1361px 1981px #fff, 581px 1572px #fff,
          950px 1623px #fff, 1132px 1285px #fff, 1250px 1793px #fff,
          234px 1878px #fff, 81px 664px #fff, 1538px 1592px #fff,
          1303px 491px #fff, 1711px 966px #fff, 1316px 1247px #fff,
          1156px 1696px #fff, 1473px 88px #fff, 1368px 1128px #fff,
          225px 1977px #fff, 1849px 723px #fff, 1816px 775px #fff,
          1916px 312px #fff, 130px 425px #fff, 330px 938px #fff,
          904px 1293px #fff, 1806px 895px #fff, 204px 781px #fff,
          280px 1208px #fff, 1837px 187px #fff, 352px 787px #fff,
          1085px 1402px #fff, 765px 1120px #fff, 1866px 1660px #fff,
          1462px 430px #fff, 1470px 1138px #fff, 267px 1117px #fff,
          1294px 859px #fff, 620px 183px #fff, 1816px 104px #fff,
          1385px 117px #fff, 1440px 219px #fff, 12px 549px #fff,
          1413px 1728px #fff, 380px 1067px #fff, 56px 232px #fff,
          835px 883px #fff, 298px 1609px #fff, 1731px 1306px #fff,
          1734px 351px #fff, 1881px 1670px #fff, 354px 1711px #fff,
          1438px 1538px #fff, 466px 294px #fff, 746px 1618px #fff,
          1721px 537px #fff, 151px 1192px #fff, 548px 249px #fff,
          781px 139px #fff, 855px 541px #fff, 507px 974px #fff, 547px 919px #fff,
          1743px 1429px #fff, 78px 809px #fff, 1057px 1241px #fff,
          1438px 1356px #fff, 178px 1742px #fff, 1817px 1430px #fff,
          1012px 1187px #fff, 200px 426px #fff, 655px 1987px #fff,
          927px 138px #fff, 807px 1264px #fff, 77px 130px #fff,
          1940px 1673px #fff, 675px 1697px #fff, 936px 1765px #fff,
          1242px 859px #fff, 1422px 1578px #fff, 1471px 708px #fff,
          1893px 1911px #fff, 1744px 1989px #fff, 1207px 389px #fff,
          574px 1345px #fff, 1014px 1385px #fff, 326px 1317px #fff,
          91px 1184px #fff, 1311px 836px #fff, 1502px 581px #fff,
          1203px 1056px #fff, 772px 1017px #fff, 1929px 1129px #fff,
          332px 1219px #fff, 1006px 266px #fff, 1662px 640px #fff,
          1897px 1180px #fff, 1579px 884px #fff, 554px 95px #fff,
          482px 1785px #fff, 676px 73px #fff, 1233px 1008px #fff,
          511px 1342px #fff, 1559px 1737px #fff, 1324px 976px #fff,
          257px 1436px #fff, 1429px 1452px #fff, 816px 206px #fff,
          229px 1416px #fff, 1090px 194px #fff, 852px 1057px #fff,
          1284px 1466px #fff, 1269px 1762px #fff, 113px 119px #fff,
          194px 686px #fff, 1986px 404px #fff, 472px 752px #fff,
          627px 1277px #fff, 1558px 1583px #fff, 156px 135px #fff,
          1772px 1954px #fff, 1650px 1625px #fff, 197px 796px #fff,
          1602px 982px #fff, 1635px 1573px #fff, 16px 993px #fff,
          146px 431px #fff, 1930px 1280px #fff, 755px 1712px #fff,
          1967px 1667px #fff, 1119px 611px #fff, 1089px 947px #fff,
          1837px 588px #fff, 229px 1011px #fff, 82px 850px #fff,
          231px 1258px #fff, 1228px 842px #fff, 1348px 1021px #fff,
          1214px 1253px #fff, 839px 176px #fff, 703px 1208px #fff,
          175px 1973px #fff, 1876px 460px #fff, 1286px 1727px #fff,
          1023px 1283px #fff, 1142px 223px #fff, 1568px 1003px #fff,
          536px 606px #fff, 1068px 858px #fff, 1432px 1585px #fff,
          63px 528px #fff, 190px 691px #fff, 1250px 305px #fff,
          979px 1392px #fff, 1723px 1800px #fff, 399px 1390px #fff,
          205px 108px #fff, 788px 1657px #fff, 1472px 1594px #fff,
          1109px 264px #fff, 506px 438px #fff, 177px 1763px #fff,
          1451px 1831px #fff, 999px 777px #fff, 689px 783px #fff,
          1905px 1233px #fff, 1383px 702px #fff, 895px 1866px #fff,
          1365px 1525px #fff, 224px 436px #fff, 1193px 1146px #fff,
          556px 1892px #fff, 949px 525px #fff, 827px 689px #fff,
          81px 1456px #fff, 405px 813px #fff, 1380px 363px #fff,
          994px 1263px #fff, 1061px 1007px #fff, 125px 1229px #fff,
          1798px 702px #fff, 68px 1978px #fff, 288px 1563px #fff,
          477px 1015px #fff, 1921px 1546px #fff, 752px 1034px #fff,
          917px 362px #fff, 1170px 1688px #fff, 1564px 706px #fff,
          1851px 1216px #fff, 110px 349px #fff, 1489px 880px #fff,
          1420px 1301px #fff, 503px 81px #fff, 434px 1397px #fff,
          53px 963px #fff;
      }
      .background .stars3:after {
        width: 3px;
        height: 3px;
        box-shadow: 331px 1122px #fff, 1983px 84px #fff, 1626px 582px #fff,
          520px 1560px #fff, 976px 1292px #fff, 810px 907px #fff,
          1044px 1350px #fff, 625px 685px #fff, 53px 416px #fff,
          546px 849px #fff, 1093px 873px #fff, 1885px 1951px #fff,
          1156px 262px #fff, 733px 97px #fff, 641px 1819px #fff,
          1530px 367px #fff, 819px 1124px #fff, 540px 550px #fff,
          823px 850px #fff, 1636px 800px #fff, 1387px 563px #fff,
          379px 1449px #fff, 1308px 1233px #fff, 295px 1512px #fff,
          102px 1957px #fff, 1113px 1788px #fff, 1180px 454px #fff,
          21px 146px #fff, 580px 1676px #fff, 899px 1461px #fff,
          1398px 42px #fff, 182px 209px #fff, 1266px 1562px #fff,
          1939px 451px #fff, 1703px 50px #fff, 144px 315px #fff,
          455px 121px #fff, 751px 1823px #fff, 297px 1258px #fff,
          1674px 475px #fff, 1885px 1241px #fff, 160px 125px #fff,
          262px 322px #fff, 1107px 911px #fff, 1217px 145px #fff,
          1387px 1028px #fff, 646px 1681px #fff, 1969px 1417px #fff,
          1754px 890px #fff, 1339px 412px #fff, 1062px 585px #fff,
          365px 225px #fff, 1388px 1845px #fff, 383px 250px #fff,
          1057px 457px #fff, 1153px 1978px #fff, 1689px 1084px #fff,
          1855px 1630px #fff, 1250px 425px #fff, 1033px 1638px #fff,
          1684px 253px #fff, 58px 1901px #fff, 1281px 856px #fff,
          518px 1893px #fff, 1250px 835px #fff, 862px 1834px #fff,
          63px 1978px #fff, 1981px 226px #fff, 825px 883px #fff,
          723px 196px #fff, 997px 106px #fff, 1317px 1553px #fff,
          1879px 835px #fff, 1830px 1046px #fff, 872px 98px #fff,
          1722px 78px #fff, 886px 486px #fff, 1752px 646px #fff,
          74px 1594px #fff, 251px 183px #fff, 1767px 1373px #fff,
          1504px 489px #fff, 339px 693px #fff, 1437px 1169px #fff,
          1312px 995px #fff, 1669px 928px #fff, 346px 935px #fff,
          1921px 1826px #fff, 1429px 776px #fff, 458px 899px #fff,
          1880px 945px #fff, 319px 1204px #fff, 366px 164px #fff,
          1512px 1817px #fff, 852px 1330px #fff, 10px 34px #fff,
          16px 1171px #fff, 1373px 74px #fff, 1042px 1448px #fff,
          1955px 742px #fff;
      }
      @keyframes animStar {
        from {
          transform: translateY(0px);
        }
        to {
          transform: translateY(-2000px);
        }
      }
    `}</style>
  );
}

function Titulo(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

export default function PaginaInicial() {
  const username = "samuelCupertino";

  return (
    <>
      <div class="background">
        <div class="stars1"></div>
        <div class="stars2"></div>
        <div class="stars3"></div>
      </div>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700]+"cc",
            border: "2px solid "+appConfig.theme.colors.primary[900],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
