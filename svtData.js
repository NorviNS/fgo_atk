﻿sortByElmentNo(master.mstSvt);
function svtDataTable(e) {
    var n = ["", "0000ff", "ff0000", "00ff00"], p = " A B C D E EX ? ? ".split(" "), l = "  + ++ ? +++ ? ? \uff1f \uff0d".split(" "), q = [[2E3, "\u795e\u6027"], [2001, "\u4eba\u578b"], [2002, "\u9f8d"], [2004, "\u7f85\u99ac"], [2005, "\u731b\u7378"], [2007, "\u963f\u723e\u6258\u8389\u4e9e\u81c9"], [2008, "\u88ab\u300c\u5929\u5730\u4e56\u96e2\u958b\u8f9f\u4e4b\u661f\u300d\u6240\u524b"], [2009, "\u9a0e\u4e58"], [2010, "\u4e9e\u745f"], [2011, "\u88ab\u300c\u4eba\u985e\u795e\u8a71\u30fb\u96f7\u96fb\u964d\u81e8\u300d\u6240\u524b"], [2012,
        "\u611b\u4eba"], [2018, "\u6b7b\u9748\u8207\u60e1\u9b54"], [2019, "\u9b54\u6027"], [2037, "\u88ab\u300c\u795e\u79d8\u6bba\u3057\u300d\u6240\u524b"]], a, k;
    for (k in master.mstSvt)if (master.mstSvt[k].id == e)break;
    for (var m in master.mstSvtLimit)if (master.mstSvtLimit[m].svtId == e)break;
    for (var t in master.mstSvtLimit)if (master.mstSvtLimit[t].svtId == e && master.mstSvtLimit[t].limitCount == master.mstSvt[k].limitMax)break;
    var c = "", c = "<tr><td rowspan=7 align=center style='width:25%;height:300px;'>", c = 5 == master.mstSvt[k].type ||
    9 == master.mstSvt[k].type || 99 == master.mstSvt[k].type ? c + ("<img src=common/images/Servant/" + e + "_status_servant_2.png onerror=\"javascript:this.style='display:none'\" width=256 height=256 />") : c + ("<div class='slide'><div><img src=common/images/Servant/" + e + "_status_servant_1.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div><div><img src=common/images/Servant/" + e + "_status_servant_2.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div><div><img src=common/images/Servant/" +
        e + "_status_servant_3.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div></div>"), c = c + ("</td><th style='width:10%;'><b>\u7de8\u865f</b></th><th style='width:10%;'><b>\u661f\u6578</b></th><th colspan=2 style='width:35%;'><b>\u540d\u7a31</b></th><th style='width:15%;'><b>\u8077\u968e</b></th><th style='width:10%;'><b>\u5206\u985e</b></th></tr><tr align=\"center\"><td>No." + master.mstSvt[k].collectionNo + '</td><td class="star">');
    for (a = 0; a < master.mstSvtLimit[m].rarity; a++)c += "\u2605";
    if (master.mstSvtLimit[m].rarity != master.mstSvtLimit[t].rarity)for (c += "<br>", a = 0; a < master.mstSvtLimit[t].rarity; a++)c += "\u2605";
    0 == master.mstSvtLimit[m].rarity && (c += "\uff0d");
    c += "</td><td colspan=2>";
    c = (a = findSvtNameZh(master.mstSvt[k].id)) && !document.getElementById("isJpTxt").checked ? c + ("<div class=ruby>" + master.mstSvt[k].ruby + "</div>" + a) : c + master.mstSvt[k].name;
    c += "</td>";
    document.title = findSvtNameZh2(e) + " - Servant\u8cc7\u6599\u67e5\u8a62";
    for (a = 0; a < mstClass.length; a++)if (mstClass[a].id == master.mstSvt[k].classId) {
        c +=
            "<td>" + mstClass[a].name + "</td>";
        break
    }
    c += "<td>" + "\uff1f\u4eba\u5929\u5730\u661f\u7378".split("")[master.mstSvt[k].attri] + "</td></tr><tr><th><b>HP</b></th><th><b>ATK</b></th><th style='width:10%;'><b>\u7e6a\u5e2b</b></th><th style='width:10%;'><b>CV</b></th><th><b>\u5c6c\u6027</b></th><th><b>\u6027\u5225</b></th></tr><tr align=\"center\"><td>" + master.mstSvtLimit[m].hpBase + " / " + master.mstSvtLimit[m].hpMax;
    if (master.mstSvtLimit[m].hpBase != master.mstSvtLimit[t].hpBase || master.mstSvtLimit[m].hpMax != master.mstSvtLimit[t].hpMax) c +=
        "<br>" + master.mstSvtLimit[t].hpBase + " / " + master.mstSvtLimit[t].hpMax;
    c += "</td><td>" + master.mstSvtLimit[m].atkBase + " / " + master.mstSvtLimit[m].atkMax;
    if (master.mstSvtLimit[m].atkBase != master.mstSvtLimit[t].atkBase || master.mstSvtLimit[m].atkMax != master.mstSvtLimit[t].atkMax) c += "<br>" + master.mstSvtLimit[t].atkBase + " / " + master.mstSvtLimit[t].atkMax;
    c += "</td><td>";
    if (-1 != master.mstSvt[k].illustratorId)for (a = 0; a < master.mstIllustrator.length; a++) {
        if (master.mstIllustrator[a].id == master.mstSvt[k].illustratorId) {
            c += "<a href='illustrator.html#" +
                master.mstSvt[k].illustratorId + "'>" + master.mstIllustrator[a].name.replace(/\(/g, "<br>(") + "</a>";
            break
        }
    } else c += "\uff1f\uff1f\uff1f";
    c += "</td><td>";
    if (-1 != master.mstSvt[k].cvId)for (a = 0; a < master.mstCv.length; a++) {
        if (master.mstCv[a].id == master.mstSvt[k].cvId) {
            c += "<a href='cv.html#" + master.mstSvt[k].cvId + "'>" + master.mstCv[a].name.replace(/\uff06/g, "<br>\uff06<br>") + "</a>";
            break
        }
    } else c += "\uff1f\uff1f\uff1f";
    var c = c + "</td>" + ("<td>" + " \u4e2d\u7acb \u6df7\u6c8c \u79e9\u5e8f ? ? \u4e2d\u7acb".split(" ")[master.mstSvtLimit[m].policy] +
        "\u30fb" + " \u5584 \u60e1 ? \u72c2 \u4e2d\u5eb8 ? \u82b1\u5ac1 \u590f".split(" ")[master.mstSvtLimit[m].personality] + "</td><td>" + ["", "\u7537\u6027", "\u5973\u6027", "\u7121"][master.mstSvt[k].genderType] + "</td></tr>"), u = [];
    for (a in master.mstSvt[k].individuality)for (var b in q)master.mstSvt[k].individuality[a] == q[b][0] && u.push(q[b][1]);
    c += "<tr><th>\u7279\u6027</th><td colspan=5 align=center>" + u + "</td></tr>";
    document.getElementById("svtNrmlData").innerHTML = c;
    q = '<tr><th rowspan=2><b>\u6307\u4ee4\u5361</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th rowspan=2><b>\u96b1\u85cf\u6578\u503c</b></th><th><b>\u661f\u661f\u767c\u751f\u7387</b></th><th><b>\u88ab\u5373\u6b7b\u7387</b></th><th><b>\u661f\u661f\u5206\u914d\u6bd4\u91cd</b></th><th rowspan=2><b>NP\u7372\u5f97\u7387</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th><b>\u5bf6\u5177</b></th><th><b>\u9632\u79a6</b></th></tr><tr align="center">';
    for (b = 1; 4 >= b; b++) {
        q += "<td>";
        for (a = c = 0; a < master.mstSvt[k].cardIds.length; a++)master.mstSvt[k].cardIds[a] == b && c++;
        4 != b && (q += c + "\u5f35");
        for (a = 0; a < master.mstSvtCard.length; a++)master.mstSvtCard[a].svtId == master.mstSvt[k].id && master.mstSvtCard[a].cardId == b && (4 != b && (q += " \u5404"), q += master.mstSvtCard[a].normalDamage.length + "Hit", 1 < master.mstSvtCard[a].normalDamage.length && (q += "s"));
        q += "</td>"
    }
    q += "<td>" + master.mstSvt[k].starRate / 10 + "%</td><td>" + master.mstSvt[k].deathRate / 10 + "%</td><td>" + master.mstSvtLimit[m].criticalWeight +
        "</td><td>";
    for (a = 0; a < master.mstTreasureDeviceLv.length; a++)if (Math.floor(master.mstTreasureDeviceLv[a].treaureDeviceId / 100) == Math.floor(master.mstSvt[k].id / 100) || (master.mstSvt[k].id == 9935400 && master.mstTreasureDeviceLv[a].treaureDeviceId == 400)) {
        q += master.mstTreasureDeviceLv[a].tdPointA / 100 + "%</td><td>" + master.mstTreasureDeviceLv[a].tdPointB / 100 + "%</td><td>" + master.mstTreasureDeviceLv[a].tdPointQ / 100 + "%</td><td>" + master.mstTreasureDeviceLv[a].tdPointEx / 100 + "%</td><td>" + master.mstTreasureDeviceLv[a].tdPoint / 100 + "%</td><td>" + master.mstTreasureDeviceLv[a].tdPointDef / 100 + "%";
        break
    }
    q +=
        "</td></tr>";
    document.getElementById("svtCtrlData").innerHTML = q;
    c = q = "";
    u = 1;
    for (a = 0; a < master.mstSvtSkill.length; a++)if (master.mstSvtSkill[a].svtId == master.mstSvt[k].id) {
        u++;
        for (b = 0; b < master.mstSkill.length; b++)if (master.mstSvtSkill[a].skillId == master.mstSkill[b].id) {
            c += "<td><img src=common/images/SkillIcon/SkillIcon_" + master.mstSkill[b].iconId + ".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td><b>" + master.mstSkill[b].name + "</b></td>";
            break
        }
        for (b = 0; b <
        master.mstSkillLv.length; b++)master.mstSvtSkill[a].skillId == master.mstSkillLv[b].skillId && 1 == master.mstSkillLv[b].lv && (c += "<td colspan=5>\u51b7\u537b" + master.mstSkillLv[b].chargeTurn + "\u56de\u5408</td>");
        c += "<td colspan=5>";
        -1 == master.mstSvtSkill[a].condLimitCount ? c += "\u6d3b\u52d5" : (0 == master.mstSvtSkill[a].condLimitCount && 0 == master.mstSvtSkill[a].condQuestId && 0 == master.mstSvtSkill[a].condLv && (c += "\u521d\u671f"), 0 != master.mstSvtSkill[a].condLimitCount && (c += "\u9748\u57fa\u518d\u81e8\u7b2c" + master.mstSvtSkill[a].condLimitCount +
                "\u968e\u6bb5<br>"), 0 != master.mstSvtSkill[a].condLv && (c += "Lv." + master.mstSvtSkill[a].condLv + "<br>"), 0 != master.mstSvtSkill[a].condQuestId && (c += "\u901a\u904e\u95dc\u5361 " + questRea(master.mstSvtSkill[a].condQuestId) + "<br>"));
        var c = c + "</td></tr>", h = [];
        for (b = 0; b < skDetail.length; b++)if (master.mstSvtSkill[a].skillId == skDetail[b][0]) {
            h = skDetail[b].slice(0);
            break
        }
        if (document.getElementById("isJpTxt").checked || !h[1])for (b = 0; b < master.mstSkillDetail.length; b++)if (master.mstSvtSkill[a].skillId == master.mstSkillDetail[b].id) {
            h[1] =
                master.mstSkillDetail[b].detail;
            break
        }
        var f = [];
        document.getElementById("isJpTxt").checked ? f[0] = h[1].slice(0) : (h[1] = h[1].replace(/ \uff0b |\u3000\uff0b\u3000/g, "\uff0b"), h[1] = h[1].replace(/\uff06/g, "\uff06\u2517"), f = h[1].split(/\uff06|\uff0b/));
        for (var u = u + f.length, d = 0; d < f.length; d++) {
            f[d].search(/\{0\}|Lv/);
            f[d] = f[d].replace(/\{0\}/g, "Lv.");
            f[d] = f[d].replace(/\[Lv.]/g, '<font color="#CC00CC ">[Lv.]</font>');
            f[d] = f[d].replace(/\u3010/g, '<font color="#006400 ">\u3010');
            f[d] = f[d].replace(/\u3011/g, "\u3011</font>");
            f[d] = f[d].replace(/\n/g, "<br>");
            if (document.getElementById("isJpTxt").checked) c += "<tr><td colspan=12>" + f[d] + "</td>"; else if (c += "<tr><td colspan=2>" + f[d] + "</td>", h[2 + d] && 1 < h[2 + d].split("/").length - 1) {
                var v = [], v = h[2 + d].split(/\//);
                for (b in v)c += "<td align=center style='width:50px'>" + v[b] + "</td>"
            } else c += "<td colspan=10>", c = h[2 + d] ? c + ("\u3000" + h[2 + d].replace(/\//g, " / ")) : "undefined" !== typeof h[2 + d] && 0 == h[2 + d].length ? c + "\u3000---" : c + "\u3000\u5f85\u88dc";
            c += "</td></tr>"
        }
    }
    0 < c.length && (q += "<tr><th style='width:60px' rowspan=" +
        u + "><b>\u4fdd\u6709\u6280\u80fd</b></th><th colspan=2 style='width:300px'>\u6280\u80fd</th><th colspan=5 style='width:250px'>\u51b7\u537b\u6642\u9593(Lv.6\u8207Lv.10\u5404\u6e1b\u5c111\u56de\u5408)</th><th colspan=5 style='width:250px'>\u958b\u653e\u689d\u4ef6</th></tr><tr>" + c + "");
    if (0 != master.mstSvt[k].classPassive.length) {
        c = "";
        for (a = u = 0; a < master.mstSvt[k].classPassive.length; a++) {
            u++;
            for (b = 0; b < master.mstSkill.length; b++)if (master.mstSvt[k].classPassive[a] == master.mstSkill[b].id) {
                c += "<td style='width:55px'><img src=common/images/SkillIcon/SkillIcon_" +
                    master.mstSkill[b].iconId + ".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td><b>" + master.mstSkill[b].name + "</b></td>";
                break
            }
            h = [];
            for (b = 0; b < skDetail.length; b++)if (master.mstSvt[k].classPassive[a] == skDetail[b][0]) {
                h = skDetail[b].slice(0);
                break
            }
            if (document.getElementById("isJpTxt").checked || !h[1])for (b = 0; b < master.mstSkillDetail.length; b++)if (master.mstSvt[k].classPassive[a] == master.mstSkillDetail[b].id) {
                h[1] = master.mstSkillDetail[b].detail;
                break
            }
            f = [];
            document.getElementById("isJpTxt").checked ?
                f[0] = h[1].slice(0) : (h[1] = h[1].replace(/ \uff0b |\u3000\uff0b\u3000/g, "\uff0b"), h[1] = h[1].replace(/\uff06/g, "\uff06\u2517"), f = h[1].split(/\uff06|\uff0b|\+/));
            c += "<td colspan=10>";
            for (d = 0; d < f.length; d++)if (f[d].search(/\{0\}|Lv/), f[d] = f[d].replace(/\{0\}/g, "Lv."), f[d] = f[d].replace(/\[Lv.]/g, '<font color="#CC00CC ">[Lv.]</font>'), f[d] = f[d].replace(/\u3010/g, '<font color="#006400 ">\u3010'), f[d] = f[d].replace(/\u3011/g, "\u3011</font>"), f[d] = f[d].replace(/\n/g, "<br>"), document.getElementById("isJpTxt").checked) c +=
                f[d]; else if (0 != d && (c += "<br>"), c += f[d], h[2 + d] && 1 < h[2 + d].split("/").length - 1)for (b in c += f[d] + "\uff1a", v = [], v = h[2 + d].split(/\//), v)c += v[b]; else c = h[2 + d] ? c + ("\uff1a" + h[2 + d].replace(/\//g, " / ")) : "undefined" !== typeof h[2 + d] && 0 == h[2 + d].length ? c + "" : c + "\uff1a\u5f85\u88dc";
            c += "</td></tr>"
        }
        q += "<tr><th rowspan=" + master.mstSvt[k].classPassive.length + "><b>\u8077\u968e\u6280\u80fd</b></th>" + c + ""
    }
    c = "";
    u = 0;
    for (b in master.mstSvtTreasureDevice)if (master.mstSvtTreasureDevice[b].svtId == master.mstSvt[k].id && 100 != master.mstSvtTreasureDevice[b].treasureDeviceId)for (a =
                                                                                                                                                                             0; a < master.mstTreasureDevice.length; a++)if (master.mstTreasureDevice[a].id == master.mstSvtTreasureDevice[b].treasureDeviceId) {
        u += 2;
        c += "<th colspan=2 style='width:300px'><b>\u540d\u7a31</b></th><th colspan=2 style='width:100px'><b>\u7b49\u7d1a</b></th><th colspan=2 style='width:100px'><b>\u7a2e\u985e</b></th><th colspan=4 style='width:200px'><b>\u89e3\u653e\u95dc\u5361</b></th><th colspan=2 style='width:100px'>\u653b\u64ca\u6b21\u6578</th></tr>";
        c += '<tr align="center"><td colspan=2><div class=ruby>' + master.mstTreasureDevice[a].ruby + "</div>";
        c += '<b><font color="#' + n[master.mstSvtTreasureDevice[b].cardId] +
            '">' + master.mstTreasureDevice[a].name + "</font></b></td><td colspan=2>" + master.mstTreasureDevice[a].rank + "</td><td colspan=2>" + master.mstTreasureDevice[a].typeText.replace(/\u5bfe/g, "\u5c0d").replace(/\u5b9d/g, "\u5bf6").replace(/\u5263/g, "\u528d").replace(/\u60aa/g, "\u60e1").replace(/\u5965/g, "\u5967").replace(/\u30bb\u30a4\u30d0\u30fc/g, "Saber").replace(/\u7adc/g, "\u9f8d") + "</td><td colspan=4>";
        c = 98 == master.mstSvtTreasureDevice[b].num ? c + "NPC\u9650\u5b9a" : 0 == master.mstSvtTreasureDevice[b].condQuestId &&
            0 == master.mstSvtTreasureDevice[b].condLv && 0 == master.mstSvtTreasureDevice[b].condFriendshipRank ? c + "\u521d\u671f" : null != findName(master.mstQuest, master.mstSvtTreasureDevice[b].condQuestId) ? c + questRea(master.mstSvtTreasureDevice[b].condQuestId) : 0 != master.mstSvtTreasureDevice[b].condLv ? c + ("Lv." + master.mstSvtTreasureDevice[b].condLv + "\u89e3\u653e") : 0 != master.mstSvtTreasureDevice[b].condFriendshipRank ? c + ("\u7d46\u7b49\u7d1a" + master.mstSvtTreasureDevice[b].condFriendshipRank + "\u89e3\u653e") : c + "\u672a\u958b\u653e";
        c += "</td>";
        h = [];
        for (d in tdDetail)if (master.mstTreasureDevice[a].id == tdDetail[d][0]) {
            h = tdDetail[d].slice(0);
            break
        }
        if (document.getElementById("isJpTxt").checked || !h[1])for (d in master.mstTreasureDeviceDetail)if (master.mstTreasureDevice[a].id == master.mstTreasureDeviceDetail[d].id) {
            h[1] = master.mstTreasureDeviceDetail[d].detail;
            break
        }
        c += "<td colspan=2>";
        -1 == h[1].search(/\u653b\u64ca[^\u529b]|\u653b\u6483[^\u529b]/) ? c += "\uff0d" : (c = 0 < master.mstSvtTreasureDevice[b].damage.length ? c + master.mstSvtTreasureDevice[b].damage.length :
                c + "1", c += "Hit", 1 < master.mstSvtTreasureDevice[b].damage.length && (c += "s"));
        c += "</td></tr>";
        f = [];
        document.getElementById("isJpTxt").checked ? f[0] = h[1].slice(0) : (h[1] = h[1].replace(/ \uff0b |\u3000\uff0b\u3000/g, "\uff0b"), h[1] = h[1].replace(/\uff06/g, "\uff06\u2517"), f = h[1].split(/\uff06|\uff0b/));
        u += f.length;
        for (d = 0; d < f.length; d++) {
            f[d].search(/\{0\}|Lv/);
            f[d].search(/<O|<\u30aa/);
            f[d] = f[d].replace(/\{0\}/g, "Lv.");
            f[d] = f[d].replace(/<O/g, '<font color="#CC6600"><br>< O');
            f[d] = f[d].replace(/<\u30aa/g, '<font color="#CC6600"><\u30aa');
            f[d] = f[d].replace(/P>/g, "P></font>");
            f[d] = f[d].replace(/\u30d7>/g, "\u30d7></font>");
            f[d] = f[d].replace(/\u3010/g, '<font color="#006400 ">\u3010');
            f[d] = f[d].replace(/\u3011/g, "\u3011</font>");
            f[d] = f[d].replace(/\[Lv.]/g, '<font color="#CC00CC ">[Lv.]</font>');
            f[d] = f[d].replace(/\n/g, "<br>");
            if (document.getElementById("isJpTxt").checked) c += "<td colspan=12>" + f[d] + "</td>"; else if (0 != d && (c += "<tr>"), c += "<td colspan=2>" + f[d] + "</td>", h[2 + d] && 1 < h[2 + d].split("/").length - 1)for (g in v = [], v = h[2 + d].split(/\//), v)c +=
                "<td align=center colspan=2>" + v[g] + "</td>"; else c += "<td colspan=10>", c = h[2 + d] ? c + ("\u3000" + h[2 + d]) : "undefined" !== typeof h[2 + d] && 0 == h[2 + d].length ? c + "\u3000---" : c + "\u3000\u5f85\u88dc";
            c += "</td></tr>"
        }
        break
    }
    q += "<tr><th rowspan=" + u + " style='width:60px'><b>\u5bf6\u5177</b></th>" + c + "";
    document.getElementById("svtSkTdData").innerHTML = q;
    b = "";
    b = "<tr><th rowspan=2 style='width:250px'>\u80fd\u529b\u503c</th><th style='width:80px'>\u7b4b\u529b</th><th style='width:80px'>\u8010\u4e45</th><th style='width:80px'>\u654f\u6377</th><th style='width:80px'>\u9b54\u529b</th><th style='width:80px'>\u5e78\u904b</th><th style='width:80px'>\u5bf6\u5177</th></tr><tr align=\"center\"><td>" +
        p[Math.floor(master.mstSvtLimit[m].power / 10)] + l[master.mstSvtLimit[m].power % 10] + "</td><td>" + p[Math.floor(master.mstSvtLimit[m].defense / 10)] + l[master.mstSvtLimit[m].defense % 10] + "</td><td>" + p[Math.floor(master.mstSvtLimit[m].agility / 10)] + l[master.mstSvtLimit[m].agility % 10] + "</td><td>" + p[Math.floor(master.mstSvtLimit[m].magic / 10)] + l[master.mstSvtLimit[m].magic % 10] + "</td><td>" + p[Math.floor(master.mstSvtLimit[m].luck / 10)] + l[master.mstSvtLimit[m].luck % 10] + "</td><td>" + p[Math.floor(master.mstSvtLimit[m].treasureDevice /
            10)] + l[master.mstSvtLimit[m].treasureDevice % 10] + "</td></tr>";
    if (master.mstSvt[k].friendshipId != 1000) {
        p = findSvtFs(master.mstSvt[k].id);
        l = 5;
        n = [];
        if (p != master.mstSvt[k].friendshipId || 10 == master.mstSvt[k].maxFriendshipRank) l = 10;
        b += "<tr><th rowspan=" + 2 * l / 5 + ">\u7d46\u9ede\u6578<br>(\u7d2f\u7a4d)</th><th>Lv.1</th><th>Lv.2</th><th>Lv.3</th><th>Lv.4</th><th>Lv.5</th><th>";
        10 == l && (b += "\u5c08\u5c6c\u79ae\u88dd");
        b += '</th></tr><tr align="center">';
        for (a in master.mstFriendship)master.mstFriendship[a].id == p && 10 > master.mstFriendship[a].rank && (n[master.mstFriendship[a].rank] =
            master.mstFriendship[a].friendship);
        for (a = 0; 5 > a; a++)b = 0 == a ? b + ("<td>" + n[a] + "</td>") : b + ("<td>" + (n[a] - n[a - 1]) + "<br>(" + n[a] + ")</td>");
        if (10 == l)for (var r in bondCE) {
            if (bondCE[r][1] == master.mstSvt[k].id) {
                b += "<td rowspan=3>";
                b += svtFace(bondCE[r][0]);
                b += "</td></tr>";
                break
            }
        } else b += "<td></td></tr>";
        if (10 == l) {
            b += '<tr><th>Lv.6</th><th>Lv.7</th><th>Lv.8</th><th>Lv.9</th><th>Lv.10</th></tr><tr align="center">';
            for (a = 5; 10 > a; a++)b += "<td>" + (n[a] - n[a - 1]) + "<br>(" + n[a] + ")</td>";
            b += "</tr>"
        }
    }
    for (a = 0; a < master.mstSvtComment.length; a++)r =
        "", master.mstSvt[k].id == master.mstSvtComment[a].svtId && (b += "<tr><th width=150>", 0 == master.mstSvtComment[a].condValue ? b += "<b>\u89d2\u8272\u8a73\u7d30</b>" : 6 > master.mstSvtComment[a].condValue ? b += "<b>\u7d46\u7b49\u7d1a" + master.mstSvtComment[a].condValue + "</b>" : 1 == master.mstSvtComment[a].condType && (b += "<b>\u901a\u904e\u95dc\u5361</b><br>" + questRea(master.mstSvtComment[a].condValue)), b += "</th>", r = 0 == master.mstSvtComment[a].condValue % 2 ? ' bgcolor=" #ECF2F3"' : "", b += "<td colspan=6" + r + ">" + master.mstSvtComment[a].comment.replace(/\n/g,
            "<br>"), b += "</td></tr>");
    document.getElementById("svtInfoData").innerHTML = b;
    p = "";
    p = "<tr><th rowspan=4><b>\u9748\u57fa\u518d\u81e8</b></th>";
    for (l = 0; 4 > l; l++) {
        r = "";
        0 == l % 2 && (r = ' bgcolor=" #ECF2F3"');
        0 != l && (p += "<tr>");
        p += "<td width=80 " + r + ">\u7b2c" + (l + 1) + "\u968e\u6bb5</td><td width=450" + r + ">";
        for (a = 0; a < master.mstCombineLimit.length; a++)if (master.mstCombineLimit[a].id == master.mstSvt[k].id && master.mstCombineLimit[a].svtLimit == l) {
            for (b = 0; b < master.mstCombineLimit[a].itemIds.length; b++)p += "<a href='item_drop.html#" +
                master.mstCombineLimit[a].itemIds[b] + "'><img src='common/images/icon/items/" + master.mstCombineLimit[a].itemIds[b] + ".png' title='" + findItemName(master.mstCombineLimit[a].itemIds[b]) + "' onerror=\"javascript:this.src='common/images/icon/items/0.png'\" class='itemM' /></a>x" + master.mstCombineLimit[a].itemNums[b] + "\u3000";
            p += addCommas(master.mstCombineLimit[a].qp) + "QP"
        }
        p += "</td></tr>"
    }
    p += "<tr><th rowspan=9><b>\u6280\u80fd\u5f37\u5316</b></th>";
    for (a = l = 0; a < master.mstCombineSkill.length; a++)if (r = "", 0 == a %
        2 && (r = ' bgcolor=" #ECF2F3"'), master.mstCombineSkill[a].id == master.mstSvt[k].id) {
        1 != master.mstCombineSkill[a].skillLv && (p += "<tr>");
        p += "<td" + r + ">Lv." + master.mstCombineSkill[a].skillLv + "\u2192Lv." + (master.mstCombineSkill[a].skillLv + 1) + "</td><td" + r + ">";
        for (b = 0; b < master.mstCombineSkill[a].itemIds.length; b++)p += "<a href='item_drop.html#" + master.mstCombineSkill[a].itemIds[b] + "'><img src='common/images/icon/items/" + master.mstCombineSkill[a].itemIds[b] + ".png' title='" + findItemName(master.mstCombineSkill[a].itemIds[b]) +
            "' onerror=\"javascript:this.src='common/images/icon/items/0.png'\" class='itemM' /></a>x" + master.mstCombineSkill[a].itemNums[b] + "\u3000";
        p += addCommas(master.mstCombineSkill[a].qp) + "QP</td></tr>";
        l++
    }
    0 == l && (p += "<td colspan=2>\u7121</td></tr>");
    document.getElementById("svtCmbnData").innerHTML = p;
    document.getElementById("svtImgData").innerHTML = "";
    document.getElementById("svtImgData").innerHTML = "<tr><td><img src=common/images/Servant/" + e + "_card_servant_1.png onerror=\"this.style.display = 'none'\"></img><img src=common/images/Servant/" +
        e + "_card_servant_2.png onerror=\"this.style.display = 'none'\"></img><img src=common/images/Servant/" + e + "_card_servant_3.png onerror=\"this.style.display = 'none'\"></img><br><img src=common/images/CharaGraph/" + e + "a.png onerror=\"this.style.display = 'none'\" style='max-width:100%;'></img><br><img src=common/images/CharaGraph/" + e + "b.png onerror=\"this.style.display = 'none'\" style='max-width:100%;'></img><br><img src=common/images/CharaGraph/" + e + "c.png onerror=\"this.style.display = 'none'\" style='max-width:100%;'></img></td></tr>";
    e = "";
    if (master.mstSvtLimit[m].hpBase != master.mstSvtLimit[t].hpBase || master.mstSvtLimit[m].hpMax != master.mstSvtLimit[t].hpMax || master.mstSvtLimit[m].atkBase != master.mstSvtLimit[t].atkBase || master.mstSvtLimit[m].atkMax != master.mstSvtLimit[t].atkMax) m = t;
    if (99 == master.mstSvt[k].type) $("#chart_div").css("display", "none"); else for ($("#chart_div").css("display", "block"), e = "<tr><th>\u7b49\u7d1a</th><th>ATK</th><th>HP</th><th>\u4e0a\u5347\u5e45\u5ea6</th></tr>", a = 0; 100 > a; a++)for (l = 0; l < master.mstSvtExp.length; l++)if (master.mstSvt[k].expType ==
        master.mstSvtExp[l].type && master.mstSvtExp[l].lv == a + 1) {
        r = "";
        1 == master.mstSvtExp[l].lv % 2 && (r = ' bgcolor=" #ECF2F3"');
        e += '<tr align="center"><td' + r + ">Lv." + master.mstSvtExp[l].lv + "</td><td" + r + ">" + Math.floor(master.mstSvtLimit[m].atkBase + (master.mstSvtLimit[m].atkMax - master.mstSvtLimit[m].atkBase) * master.mstSvtExp[l].curve / 1E3) + "</td><td" + r + ">" + Math.floor(master.mstSvtLimit[m].hpBase + (master.mstSvtLimit[m].hpMax - master.mstSvtLimit[m].hpBase) * master.mstSvtExp[l].curve / 1E3) + "</td><td" + r + ">" + (master.mstSvtExp[l].curve -
            master.mstSvtExp[l - 1].curve) / 10 + "%</td></tr>";
        break
    }
    document.getElementById("svtLvData").innerHTML = e;
    $(function () {
        $(".slide").slick({
            dots: !0,
            infinite: !0,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: !0,
            autoplay: !0,
            autoplaySpeed: 2E3
        })
    })
}
function classidChange() {
    var e;
    for (e = svtid.options.length - 1; 0 <= e; e--)svtid.remove(e);
    if (0 == classid.value)for (e = 0; e < master.mstSvt.length; e++) {
        if (1 == master.mstSvt[e].type || 2 == master.mstSvt[e].type || 5 == master.mstSvt[e].type || 9 == master.mstSvt[e].type || 99 == master.mstSvt[e].type) {
            var n = findSvtNameZh(master.mstSvt[e].id);
            n ? svtid.options.add(new Option("No." + master.mstSvt[e].collectionNo + " " + n, master.mstSvt[e].id)) : svtid.options.add(new Option("No." + master.mstSvt[e].collectionNo + " " + master.mstSvt[e].name,
                    master.mstSvt[e].id))
        }
    } else for (e = 0; e < master.mstSvt.length; e++)master.mstSvt[e].classId != classid.value || 1 != master.mstSvt[e].type && 2 != master.mstSvt[e].type && 5 != master.mstSvt[e].type && 9 != master.mstSvt[e].type && 99 != master.mstSvt[e].type || ((n = findSvtNameZh(master.mstSvt[e].id)) ? svtid.options.add(new Option("No." + master.mstSvt[e].collectionNo + " " + n, master.mstSvt[e].id)) : svtid.options.add(new Option("No." + master.mstSvt[e].collectionNo + " " + master.mstSvt[e].name, master.mstSvt[e].id)));
    0 != classid.value && svtlocation(svtid[0].value)
}
function svtidset() {
    classidChange();
    svtlocation(svtid[0].value)
}
function svtidChange() {
    var e;
    for (e = svtlv.options.length - 1; 0 <= e; e--)svtlv.remove(e);
    for (e in master.mstSvt)if (master.mstSvt[e].id == svtid.value) {
        for (e = 100; 0 < e; e--)svtlv.options.add(new Option("Lv." + e, e));
        break
    }
    svtlvChange();
    svtDataTable(svtid.value);
    drawChart()
}
function svtlocation(e) {
    e = "";
    for (var n in master.mstSvt)if (master.mstSvt[n].id == svtid.value) {
        e = 0 != master.mstSvt[n].collectionNo ? e + ("?no=" + master.mstSvt[n].collectionNo) : e + ("?id=" + master.mstSvt[n].id);
        break
    }
    "file:" == location.protocol ? changeURL(location.protocol + "//" + location.pathname + e) : changeURL(location.protocol + "//" + location.hostname + location.pathname + e);
    svtidChange()
}
function svtlvChange() {
    var e, n = 0, p = 0, l = 0, q = 0;
    for (e in master.mstSvtLimit)master.mstSvtLimit[e].svtId == svtid.value && (n = master.mstSvtLimit[e].hpBase, p = master.mstSvtLimit[e].hpMax, l = master.mstSvtLimit[e].atkBase, q = master.mstSvtLimit[e].atkMax);
    for (var a in master.mstSvt)if (master.mstSvt[a].id == svtid.value) {
        for (var k in master.mstSvtExp)if (atk.value = l, hp.value = n, four(), master.mstSvt[a].expType == master.mstSvtExp[k].type && master.mstSvtExp[k].lv == svtlv.value) {
            atk.value = Math.floor(l + (q - l) * master.mstSvtExp[k].curve /
                1E3);
            hp.value = Math.floor(n + (p - n) * master.mstSvtExp[k].curve / 1E3);
            four();
            break
        }
        break
    }
}
function four() {
    hpp.value = parseInt(hp.value) + 990;
    atkp.value = parseInt(atk.value) + 990
}
function urlId() {
    $("#classid").val(0);
    classidChange();
    var e = "1", n = "";
    getUrl("no") && (e = getUrl("no"));
    getUrl("id") && (n = getUrl("id"));
    if (e) {
        if (0 != n.length)for (i in master.mstSvt) {
            if ((1 == master.mstSvt[i].type || 2 == master.mstSvt[i].type || 5 == master.mstSvt[i].type || 9 == master.mstSvt[i].type || 99 == master.mstSvt[i].type) && n == master.mstSvt[i].id) {
                $("#svtid").val(master.mstSvt[i].id);
                break
            }
        } else for (i in master.mstSvt)if ((1 == master.mstSvt[i].type || 2 == master.mstSvt[i].type || 5 == master.mstSvt[i].type || 9 == master.mstSvt[i].type ||
            99 == master.mstSvt[i].type) && e == master.mstSvt[i].collectionNo) {
            $("#svtid").val(master.mstSvt[i].id);
            break
        }
        i == master.mstSvt.length - 1 && $("#svtid").val(800100)
    }
    svtidChange()
};