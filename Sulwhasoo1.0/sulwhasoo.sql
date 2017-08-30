/*
Navicat MySQL Data Transfer

Source Server         : oyh
Source Server Version : 50513
Source Host           : localhost:3306
Source Database       : sulwhasoo

Target Server Type    : MYSQL
Target Server Version : 50513
File Encoding         : 65001

Date: 2017-08-27 13:58:55
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `comment`
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `date` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `gid` int(11) DEFAULT NULL,
  `star` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `title` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`cid`),
  KEY `FK_uid` (`uid`),
  KEY `FK_gid` (`gid`),
  CONSTRAINT `FK_gid` FOREIGN KEY (`gid`) REFERENCES `goodsinfo` (`gid`),
  CONSTRAINT `FK_uid` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO comment VALUES ('2017-08-26 12:51:27.508', '1', '1', null, '润燥精华很好用、瓶子的材质犹如鹅蛋般触感、每次使用屋子里都散发着淡淡的人参味、很好闻、吸收很快、这次买了60ml、觉得买少了、下次果断购入120,ml、代购造假泛滥、所以选择官网、用着放心、另外一点就是、虽然只购入了一瓶润燥但是能从包装上看出产品的用心、大到功效、小到细节、真的给我了另外一种购物体验、喜欢、谢谢', '发自内心的低调的奢华美', '1');
INSERT INTO comment VALUES ('2017-08-26 12:51:27.508', '2', '1', null, '第一次用是因为送的赠品小样，本人皮肤偶尔会起痘痘，一次起痘痘，发现用过以后痘痘有所改善，水乳吸收效果较好，决定以后一直使用，再加上双十一活动，真的挺划算的。', '去火去燥，改善肤质', '2');
INSERT INTO comment VALUES ('2017-08-26 12:51:27.508', '1', '1', null, '双十一购买的送了好多小样，很惊喜，东西很好，自己也有用过七八个品牌的化妆品唯独钟爱雪花秀。', '物有所值', '3');
INSERT INTO comment VALUES ('2017-08-26 12:51:27.508', '2', '1', null, '经朋友推荐，第一次购买使用，精华肌底液帮助保养品的吸收，敏感肌肤也适合。本人额头脸颊干燥，一般最多保持到下午1点就干疼了，用了肌底液，持续到下午4点才稍微有点干，而且脸也不怎红了，很舒服。会一直购买', '加速吸收，持续润肤', '4');
INSERT INTO comment VALUES ('2017-08-26 12:51:27.508', '1', '1', null, '真的好用，感觉皮肤都变好了', '好用', '5');
INSERT INTO comment VALUES ('2017-08-26 12:51:27.508', '2', '1', null, '好用好用好用好用', '好用', '6');
INSERT INTO comment VALUES ('2017-08-26 20:48:10.477', '1', '1', null, '好用到不行', '打call', '7');
INSERT INTO comment VALUES ('2017-08-26 20:48:18.424', '1', '1', null, '好用到不行', '爆灯', '8');
INSERT INTO comment VALUES ('2017-08-26 20:49:35.963', '1', '1', null, '好好好！！！', '好好好', '9');
INSERT INTO comment VALUES ('2017-08-26 20:50:32.409', '2', '1', null, '还会再买还会再买还会再买', '还会再买', '10');
INSERT INTO comment VALUES ('2017-08-26 20:50:50.651', '2', '1', null, '还会再买还会再买还会再买', '买了几次了', '11');
INSERT INTO comment VALUES ('2017-08-26 20:51:59.003', '1', '1', null, '要~要~切克闹', '要', '12');
INSERT INTO comment VALUES ('2017-08-26 20:51:59.003', '1', '4', null, '第一次用是因为送的赠品小样，本人皮肤偶尔会起痘痘，一次起痘痘，发现用过以后痘痘有所改善，水乳吸收效果较好，决定以后一直使用，再加上双十一活动，真的挺划算的', '物有所值', '13');
INSERT INTO comment VALUES ('2017-08-26 22:48:48.707', '1', '4', null, '好用好用~', '好用', '14');
INSERT INTO comment VALUES ('2017-08-26 22:49:42.429', '1', '4', null, '还会再买', '1111', '15');

-- ----------------------------
-- Table structure for `goodsinfo`
-- ----------------------------
DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `gid` int(11) NOT NULL,
  `gname` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pic` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(2000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gml` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gsave` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gsale` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tid` int(11) DEFAULT NULL,
  `genglish` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `effect` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`gid`),
  KEY `FK_tid` (`tid`),
  CONSTRAINT `FK_tid` FOREIGN KEY (`tid`) REFERENCES `goodstype` (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of goodsinfo
-- ----------------------------
INSERT INTO goodsinfo VALUES ('1', '润致焕活肌底精华露', '600', '../../public/image/product_files/star74.png', '在基础护肤的第一步使用，改变传统护肤步骤，蕴含有效的滋盈凝萃复合体™，调节肌肤平衡，是雪花秀的皇牌精华露', '60ml', '2000', '120', '1', 'First Care Activating Serum EX', '蕴含雪花秀品牌哲学的经典产品');
INSERT INTO goodsinfo VALUES ('2', '润致焕活肌底精华露', '780', '../../public/image/product_files/star74.png', '在基础护肤的第一步使用，改变传统护肤步骤，蕴含有效的滋盈凝萃复合体™，调节肌肤平衡，是雪花秀的皇牌精华露', '90ml', '800', '700', '1', 'First Care Activating Serum EX', '蕴含雪花秀品牌哲学的经典产品');
INSERT INTO goodsinfo VALUES ('3', '滋盈生人参焕颜修护霜(滋养型）', '1680', '../../public/image/product_files/1489137462174.png', '50余年的人参研究成果与现代护肤技术的致臻结合，蕴含人参的卓越功效，是雪花秀的“镇牌”抗衰老面霜', '60ml', '1000', '200', '1', 'Concentrated Ginseng Renewing Cream EX', '拥有韩国人参的独创研究成果，生物转化技术');
INSERT INTO goodsinfo VALUES ('4', '滋晶雪肤美白精华露', '1340', '../../public/image/product_files/1489137462174 (1).png', '蕴含源自人参的珍贵成分，改善因内、外部等各种刺激造成的肌肤黯沉粗糙，让肌肤重新焕发自然光彩的精华露', '50ml', '1200', '800', '1', 'Snowise EX Whitening Serum', '呵护因紫外线、红外线和老化等造成的肌肤中的黯沉粗糙，是雪花秀明星美白精华');
INSERT INTO goodsinfo VALUES ('5', '采淡致美气垫粉底液', '400', '../../public/image/product_files/1489137462174 (2).png', '拥有强效遮瑕功能，营造无瑕美肌，展现健康光彩的气垫粉底液', '15g*2', '4008', '3400', '1', 'Perfecting Cushion', '全球销量突破百万的雪花秀明星气垫粉底液');
INSERT INTO goodsinfo VALUES ('6', '与润夜间修复面膜', '380', '../../public/image/product_files/1489137462174 (3).png', '夜间为肌肤补充水分与营养，翌日清晨赋予肌肤润泽的睡眠面膜', '120ml', '2013', '1027', '1', 'Overnight Vitalizing Mask EX', '风靡亚洲的夜间修复睡眠面膜');
INSERT INTO goodsinfo VALUES ('7', '美颜修容亮润露', '600', '../../public/image/product_files/1489137462174 (4).png', '提升前序护肤功效，令肌肤焕发自然光泽的亮润露', '80ml', '1200', '500', '1', 'Luminature Essential Finisher', '提升肌肤亮润度，缔造润泽美肌');
INSERT INTO goodsinfo VALUES ('8', '滋盈生人参紧致修护眼霜', '1200', '../../public/image/product_files/1489137462174 (6).png', '含有人参萃取物，可提升眼周肌肤弹力，并改善皱纹，帮助缔造清晰紧致眼部轮廓的人参眼霜', '25ml', '1000', '700', '1', 'Concentrated Ginseng Renewing Eye Cream', '蕴含人参萃取，帮助缔造紧致眼部肌肤');
INSERT INTO goodsinfo VALUES ('9', '宫中蜜皂', '360', '../../public/image/product_files/1489137462174 (5).png', '蕴含红参成分，经过40天精心熬制的草本配方洁面皂', '70g*2个', '1200', '780', '1', 'Herbal Soap', '带给肌肤丰沛水分，洁面滑爽不紧绷');
INSERT INTO goodsinfo VALUES ('10', '顺行柔和洁颜油', '320', '../../public/image/protection_files/1458883409676.png', null, '260ml', '500', '200', '2', 'Gentle Cleansing Oil', '洁净/角质护理');
INSERT INTO goodsinfo VALUES ('11', '顺行柔和洁面泡沫', '320', '../../public/image/protection_files/1466475494289.png', null, '200ml', '500', '120', '2', 'Gentle Cleansing Foam Ex', '洁净/角质护理');
INSERT INTO goodsinfo VALUES ('12', '宫中蜜皂', '360', '../../public/image/protection_files/1489975923114.png', null, '70g*2个', '1200', '780', '2', 'Herbal Soap', '洁净/角质护理');
INSERT INTO goodsinfo VALUES ('13', '润致焕活肌底精华露', '600', '../../public/image/protection_files/1494924906416 (1).png', null, '60ml', '2000', '120', '2', 'First Care Activating Serum EX', '保湿/光泽');
INSERT INTO goodsinfo VALUES ('14', '润致焕活肌底精华露', '780', '../../public/image/protection_files/1494924906416 (1).png', null, '90ml', '800', '700', '2', 'First Care Activating Serum EX', '保湿/光泽');
INSERT INTO goodsinfo VALUES ('15', '滋盈肌本润颜水', '400', '../../public/image/protection_files/1493208253921.png', null, '125ml', '2000', '200', '2', 'Essential Balancing Water EX', '保湿/光泽');
INSERT INTO goodsinfo VALUES ('16', '滋盈肌本润颜乳', '440', '../../public/image/protection_files/1493288464519.png', null, '125ml', '1000', '180', '2', 'Essential Balancing Emulsion', '保湿/光泽');
INSERT INTO goodsinfo VALUES ('17', '滋盈肌本赋活精华露', '880', '../../public/image/protection_files/1493103541700.png', null, '50ml', '870', '133', '2', 'Essential Revitalizing Serum EX', '保湿/光泽');
INSERT INTO goodsinfo VALUES ('18', '滋盈肌本青春眼霜', '780', '../../public/image/protection_files/1493052789025.png', null, '25ml', '560', '122', '2', 'Essential Rejuvenating Eye Cream EX', '延缓衰老');
INSERT INTO goodsinfo VALUES ('19', '滋盈肌本紧致面霜', '750', '../../public/image/protection_files/1493052729739.png', null, '75ml', '897', '324', '2', 'Essential Firming Cream EX', '延缓衰老');
INSERT INTO goodsinfo VALUES ('20', '滋盈生真本油', '780', '../../public/image/protection_files/1458882984988 (1).png', null, '20ml', '900', '243', '2', 'Concentrated Ginseng Renewing Essential Oil', '延缓衰老');
INSERT INTO goodsinfo VALUES ('21', '滋如珍人参凝时精华露', '950', '../../public/image/protection_files/1492417355749.png', null, '35ml', '800', '121', '2', 'Capsulized Ginseng Fortifying Serum\r\n', '延缓衰老');
INSERT INTO goodsinfo VALUES ('22', '滋如珍人参凝时精华露', '1150', '../../public/image/protection_files/1492417355749.png', null, '50ml', '600', '67', '2', 'Capsulized Ginseng Fortifying Serum', '延缓衰老');
INSERT INTO goodsinfo VALUES ('23', '滋盈生人参紧致修护眼霜', '1200', '../../public/image/protection_files/1493184309391.png', null, '25ml', '700', '300', '2', 'Concentrated Ginseng Renewing Eye Cream', '延缓衰老');
INSERT INTO goodsinfo VALUES ('24', '滋盈生人参焕颜修护霜(盈润型)', '1680', '../../public/image/protection_files/1497315428652.png', null, '60ml', '700', '280', '2', 'Concentrated Ginseng Renewing Cream EX Light', '延缓衰老');
INSERT INTO goodsinfo VALUES ('25', '滋盈生人参焕颜修护霜(滋养型）', '1680', '../../public/image/protection_files/1499135689221.png', null, '60ml', '700', '135', '2', 'Concentrated Ginseng Renewing Cream EX', '延缓衰老');
INSERT INTO goodsinfo VALUES ('26', '臻秀修护活颜水', '700', '../../public/image/protection_files/1499740457053.png', null, '125ml', '1000', '320', '2', 'Timetreasure Renovating Water EX', '延缓衰老');
INSERT INTO goodsinfo VALUES ('27', '臻秀修护活颜乳', '760', '../../public/image/protection_files/1458883185317.png', null, '125ml', '1000', '430', '2', 'Timetreasure Renovating Emulsion EX', '延缓衰老');
INSERT INTO goodsinfo VALUES ('28', '臻秀修护活颜精华露', '2180', '../../public/image/protection_files/1458883226268.png', null, '50ml', '1000', '531', '2', 'Timetreasure Renovating Serum EX', '延缓衰老');
INSERT INTO goodsinfo VALUES ('29', '臻秀修护多效眼霜', '1980', '../../public/image/protection_files/1492749936889.png', null, '25ml', '1000', '243', '2', 'Timetreasure Renovating Eye Cream EX', '延缓衰老');
INSERT INTO goodsinfo VALUES ('30', '致美润白气垫粉底液 SPF30+/PA+++', '450', '../../public/image/protection_files/1493051010435.png', null, '30g(15g*2)', '2000', '1700', '3', 'Perfecting Cushion Brightening', null);
INSERT INTO goodsinfo VALUES ('31', '采淡致美气垫粉底液', '400', '../../public/image/protection_files/1493259199108.png', null, '15g*2', '1800', '1500', '3', 'Perfecting Cushion', null);
INSERT INTO goodsinfo VALUES ('32', '肌本护唇膏', '220', '../../public/image/protection_files/1481776734994.png', null, '15g', '400', '210', '3', 'Essential Lip Care', null);
INSERT INTO goodsinfo VALUES ('33', '采淡柔滑底霜', '350', '../../public/image/protection_files/1493184691262.png', null, '30ml', '700', '230', '3', 'Evenfair Smoothing Makeup Base', null);
INSERT INTO goodsinfo VALUES ('34', '采淡柔滑粉底液', '350', '../../public/image/protection_files/1458885655280.png', null, '30ml', '700', '421', '3', 'Evenfair Smoothing Foundation', null);
INSERT INTO goodsinfo VALUES ('35', '采淡致美修瑕膏', '360', '../../public/image/protection_files/-1.png', null, '11g', '800', '629', '3', 'Evenfair Perfecting Cream Compact', null);
INSERT INTO goodsinfo VALUES ('36', '采淡柔滑粉饼', '380', '../../public/image/protection_files/1487138246670.png', null, '10g', '900', '560', '3', 'Evenfair Smoothing Powder Foundation\r\nEvenfair Smoothing Powder Foundation\r\nEvenfair Smoothing Powder Foundation', null);
INSERT INTO goodsinfo VALUES ('37', '滋晶美白精华修容霜', '380', '../../public/image/protection_files/1493123610668.png', null, '30ml', '200', '87', '3', 'Snowise Whitening Essence BB', null);
INSERT INTO goodsinfo VALUES ('38', '滋晶美白防晒粉饼', '410', '../../public/image/protection_files/1487138214184.png', null, '9g', '900', '354', '3', 'Snowise Whitening UV Compact', null);
INSERT INTO goodsinfo VALUES ('39', '丝斓多效粉饼', '980', '../../public/image/protection_files/1458885901598.png', null, '10g', '1000', '540', '3', 'ShineClassic Multi Powder Compact', null);
INSERT INTO goodsinfo VALUES ('40', '肌本柔润护唇膏', '290', '../../public/image/protection_files/1493055317905.png', null, '3g', '500', '209', '3', 'Essential Lip Serum Stick', null);
INSERT INTO goodsinfo VALUES ('41', '莹彩腮红', '460', '../../public/image/protection_files/1493172348376.png', null, '10g', '700', '241', '3', 'Radiance Blusher', null);
INSERT INTO goodsinfo VALUES ('42', '精致无瑕遮瑕膏', '320', '../../public/image/protection_files/1493188540670.png', null, '5g', '1000', '765', '3', 'Essential Concealer Stick\r\nEssential Concealer Stick\r\nEssential Concealer Stick', null);
INSERT INTO goodsinfo VALUES ('43', '彩妆平衡焕肤精华乳SPF25/PA++', '430', '../../public/image/protection_files/1493207937188.png', null, '35ml', '1500', '524', '3', 'Makeup Balancer', null);
INSERT INTO goodsinfo VALUES ('44', '雪花秀丝斓修容粉饼', '1280', '../../public/image/protection_files/1493207344263.png', null, '10g*2', '1000', '310', '3', 'Shineclassic Powder Compact', null);
INSERT INTO goodsinfo VALUES ('45', '男士本润面霜', '650', '../../public/image/protection_files/1493219361756.png', null, '40ml', '600', '324', '4', 'Age defying Cream', '抗皱');
INSERT INTO goodsinfo VALUES ('46', '男士本润精华露', '520', '../../public/image/protection_files/-1 (1).png', null, '120ml', '600', '547', '4', 'Inner Charging Suerum', '美白');
INSERT INTO goodsinfo VALUES ('47', '男士本润乳液', '370', '../../public/image/protection_files/1493304104932.png', null, '90ml', '600', '290', '4', 'Skin Reinforcing Emulsion', '基础护理');
INSERT INTO goodsinfo VALUES ('48', '男士精养防晒霜', '290', '../../public/image/protection_files/-1 (2).png', null, '50ml', '800', '760', '4', 'Sun Cream for Men', '防紫外线');
INSERT INTO goodsinfo VALUES ('49', '男士清爽洁面乳', '240', '../../public/image/protection_files/1493207204385.png', null, '150ml', '800', '660', '4', 'Refreshing Cleansing Foam', '角质护理');
INSERT INTO goodsinfo VALUES ('50', '滋盈肌本护肤礼盒', '840', '../../public/image/protection_files/下载.jpg', null, null, '100', '50', '5', 'sulwhasoo', null);
INSERT INTO goodsinfo VALUES ('51', '盈润致选礼盒', '2280', '../../public/image/protection_files/下载.jpg', null, null, null, null, '5', 'sulwhasoo', null);
INSERT INTO goodsinfo VALUES ('52', '臻秀挚颜礼盒', '1460', '../../public/image/protection_files/下载.jpg', null, null, null, null, '5', 'sulwhasoo', null);
INSERT INTO goodsinfo VALUES ('53', '明星肌本护肤礼盒', '1440', '../../public/image/protection_files/下载.jpg', null, null, null, null, '5', 'sulwhasoo', null);
INSERT INTO goodsinfo VALUES ('54', '男士致选礼盒', '760', '../../public/image/protection_files/下载.jpg', null, null, null, null, '5', 'sulwhasoo', null);
INSERT INTO goodsinfo VALUES ('55', '明星靓妆美肤礼盒', '1290', '../../public/image/protection_files/下载.jpg', null, null, null, null, '5', 'sulwhasoo', null);
INSERT INTO goodsinfo VALUES ('56', '玉璨净爽面膜', '280', '../../public/image/protection_files/下载.jpg', null, '150ml', null, null, '5', 'sulwhasoo', null);

-- ----------------------------
-- Table structure for `goodstype`
-- ----------------------------
DROP TABLE IF EXISTS `goodstype`;
CREATE TABLE `goodstype` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `tname` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of goodstype
-- ----------------------------
INSERT INTO goodstype VALUES ('1', '明星单品', '1');
INSERT INTO goodstype VALUES ('2', '护肤产品', '1');
INSERT INTO goodstype VALUES ('3', '彩妆', '1');
INSERT INTO goodstype VALUES ('4', '男士', '1');
INSERT INTO goodstype VALUES ('5', '礼盒', '1');

-- ----------------------------
-- Table structure for `orderitem`
-- ----------------------------
DROP TABLE IF EXISTS `orderitem`;
CREATE TABLE `orderitem` (
  `uid` int(11) DEFAULT NULL,
  `oid` int(11) NOT NULL AUTO_INCREMENT,
  `sid` int(11) DEFAULT NULL,
  `date` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `obuy` int(11) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  PRIMARY KEY (`oid`),
  KEY `FK_sid` (`sid`),
  CONSTRAINT `FK_sid` FOREIGN KEY (`sid`) REFERENCES `shopcar` (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of orderitem
-- ----------------------------
INSERT INTO orderitem VALUES ('1', '15', '2', 'Fri Aug 24 2017 15:11:35 GMT+0800 (中国标准时间)', '380', '1', '2');
INSERT INTO orderitem VALUES ('1', '16', '2', 'Fri Aug 25 2017 15:11:35 GMT+0800 (中国标准时间)', '380', '1', '2');
INSERT INTO orderitem VALUES ('2', '17', '4', 'Fri Aug 25 2017 15:11:35 GMT+0800 (中国标准时间)', '1340', '1', '2');
INSERT INTO orderitem VALUES ('1', '18', '7', 'Fri Aug 25 2017 15:11:35 GMT+0800 (中国标准时间)', '360', '1', '1');
INSERT INTO orderitem VALUES ('2', '19', '8', '2017-08-26 10:17:57.753', '600', '1', '1');
INSERT INTO orderitem VALUES ('1', '20', '9', '2017-08-26 10:58:50.260', '600', '1', '2');
INSERT INTO orderitem VALUES ('1', '21', '9', '2017-08-26 10:59:41.173', '600', '1', '1');
INSERT INTO orderitem VALUES ('1', '22', '9', '2017-08-26 11:02:51.638', '600', '1', '1');
INSERT INTO orderitem VALUES ('1', '23', '10', '2017-08-26 11:26:18.304', '1200', '1', '2');
INSERT INTO orderitem VALUES ('1', '24', '11', '2017-08-26 11:28:39.559', '1200', '1', '2');
INSERT INTO orderitem VALUES ('2', '25', '12', '2017-08-26 11:30:53.277', '400', '1', '2');
INSERT INTO orderitem VALUES ('2', '26', '13', 'Sat Aug 26 2017 11:35:09 GMT+0800 (中国标准时间)', '600', '1', '0');
INSERT INTO orderitem VALUES ('1', '27', '14', 'Sat Aug 26 2017 11:44:21 GMT+0800 (中国标准时间)', '400', '1', '2');
INSERT INTO orderitem VALUES ('1', '28', '15', 'Sat Aug 26 2017 12:36:55 GMT+0800 (中国标准时间)', '600', '1', '2');
INSERT INTO orderitem VALUES ('1', '29', '16', 'Sat Aug 26 2017 12:44:45 GMT+0800 (中国标准时间)', '360', '1', '2');
INSERT INTO orderitem VALUES ('1', '30', '16', 'Sat Aug 26 2017 12:45:04 GMT+0800 (中国标准时间)', '360', '1', '2');
INSERT INTO orderitem VALUES ('1', '31', '17', 'Sat Aug 26 2017 12:45:04 GMT+0800 (中国标准时间)', '400', '1', '2');
INSERT INTO orderitem VALUES ('1', '32', '18', '2017-08-26 12:51:27.508', '600', '1', '2');
INSERT INTO orderitem VALUES ('1', '33', '19', '2017-08-26 15:28:42.495', '880', '1', '2');
INSERT INTO orderitem VALUES ('1', '34', '20', '2017-08-26 15:31:45.028', '2180', '1', '2');
INSERT INTO orderitem VALUES ('1', '35', '21', 'Sat Aug 26 2017 15:58:50 GMT+0800 (中国标准时间)', '220', '1', '1');
INSERT INTO orderitem VALUES ('1', '36', '22', '2017-08-26 16:02:32.827', '370', '1', '2');
INSERT INTO orderitem VALUES ('1', '37', '23', 'Sat Aug 26 2017 16:02:39 GMT+0800 (中国标准时间)', '370', '1', '1');
INSERT INTO orderitem VALUES ('1', '38', '24', '2017-08-26 16:15:11.671', '400', '1', '1');
INSERT INTO orderitem VALUES ('1', '39', '25', 'Sat Aug 26 2017 17:41:48 GMT+0800 (中国标准时间)', '280', '1', '1');
INSERT INTO orderitem VALUES ('1', '40', '26', 'Sat Aug 26 2017 17:54:01 GMT+0800 (中国标准时间)', '1680', '1', '1');
INSERT INTO orderitem VALUES ('1', '41', '27', 'Sat Aug 26 2017 21:21:33 GMT+0800 (中国标准时间)', '600', '1', '1');
INSERT INTO orderitem VALUES ('1', '42', '28', 'Sun Aug 27 2017 10:14:14 GMT+0800 (中国标准时间)', '1340', '1', '1');

-- ----------------------------
-- Table structure for `shopcar`
-- ----------------------------
DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE `shopcar` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `gid` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  PRIMARY KEY (`sid`),
  KEY `FK_c_gid` (`gid`),
  KEY `FK_u_uid` (`uid`),
  CONSTRAINT `FK_c_gid` FOREIGN KEY (`gid`) REFERENCES `goodsinfo` (`gid`),
  CONSTRAINT `FK_u_uid` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of shopcar
-- ----------------------------
INSERT INTO shopcar VALUES ('2', '6', '1', '0');
INSERT INTO shopcar VALUES ('4', '4', '1', '0');
INSERT INTO shopcar VALUES ('7', '9', '1', '0');
INSERT INTO shopcar VALUES ('8', '1', '2', '0');
INSERT INTO shopcar VALUES ('9', '1', '1', '0');
INSERT INTO shopcar VALUES ('10', '8', '1', '0');
INSERT INTO shopcar VALUES ('11', '8', '1', '0');
INSERT INTO shopcar VALUES ('12', '5', '2', '0');
INSERT INTO shopcar VALUES ('13', '7', '2', '1');
INSERT INTO shopcar VALUES ('14', '5', '1', '0');
INSERT INTO shopcar VALUES ('15', '7', '1', '0');
INSERT INTO shopcar VALUES ('16', '9', '1', '0');
INSERT INTO shopcar VALUES ('17', '5', '1', '0');
INSERT INTO shopcar VALUES ('18', '1', '1', '0');
INSERT INTO shopcar VALUES ('19', '17', '1', '0');
INSERT INTO shopcar VALUES ('20', '28', '1', '0');
INSERT INTO shopcar VALUES ('21', '32', '1', '0');
INSERT INTO shopcar VALUES ('22', '47', '1', '0');
INSERT INTO shopcar VALUES ('23', '47', '1', '0');
INSERT INTO shopcar VALUES ('24', '5', '1', '0');
INSERT INTO shopcar VALUES ('25', '56', '1', '0');
INSERT INTO shopcar VALUES ('26', '25', '1', '0');
INSERT INTO shopcar VALUES ('27', '1', '1', '0');
INSERT INTO shopcar VALUES ('28', '4', '1', '0');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `phonenum` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `pwd` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `sex` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `birth` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO user VALUES ('1', '欧阳洪', '15343336641', '331375439@qq.com', '123456', '女', '2017-08-01');
INSERT INTO user VALUES ('2', '冯超', '12345678910', '123@qq.com', '123456', '女', '2017-08-02');
