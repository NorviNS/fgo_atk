sortByElmentNo(master.mstSvt);
function svtDataTable(d) {
    var p = ["", "0000ff", "ff0000", "00ff00"], r = " A B C D E EX ? ? ".split(" "), m = "  + ++ ? +++ ? ? \uff1f \uff0d".split(" "), e = [[2E3, "\u795e\u6027"], [2001, "\u4eba\u578b"], [2002, "\u9f8d"], [2004, "\u7f85\u99ac"], [2005, "\u731b\u7378"], [2007, "\u963f\u723e\u6258\u8389\u4e9e\u81c9"], [2008, "\u88ab\u300c\u5929\u5730\u4e56\u96e2\u958b\u8f9f\u4e4b\u661f\u300d\u6240\u524b"], [2009, "\u9a0e\u4e58"], [2010, "\u4e9e\u745f"], [2011, "\u88ab\u300c\u4eba\u985e\u795e\u8a71\u30fb\u96f7\u96fb\u964d\u81e8\u300d\u6240\u524b"], [2012,
        "\u611b\u4eba"], [2018, "\u6b7b\u9748\u8207\u60e1\u9b54"], [2019, "\u9b54\u6027"], [2037, "\u88ab\u300c\u795e\u79d8\u6bba\u3057\u300d\u6240\u524b"]], a, l;
    for (l in master.mstSvt)if (master.mstSvt[l].id == d)break;
    for (var n in master.mstSvtLimit)if (master.mstSvtLimit[n].svtId == d)break;
    for (var u in master.mstSvtLimit)if (master.mstSvtLimit[u].svtId == d && master.mstSvtLimit[u].limitCount == master.mstSvt[l].limitMax)break;
    var k = "", k = "<tr><td rowspan=7 align=center style='width:25%;height:300px;'>", k = 5 == master.mstSvt[l].type ||
    9 == master.mstSvt[l].type || 99 == master.mstSvt[l].type ? k + ("<img src=common/images/Servant/" + d + "_status_servant_2.png onerror=\"javascript:this.style='display:none'\" width=256 height=256 />") : k + ("<div class='slide'><div><img src=common/images/Servant/" + d + "_status_servant_1.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div><div><img src=common/images/Servant/" + d + "_status_servant_2.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div><div><img src=common/images/Servant/" +
        d + "_status_servant_3.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div></div>"), k = k + ("</td><th style='width:10%;'><b>\u7de8\u865f</b></th><th style='width:10%;'><b>\u661f\u6578</b></th><th colspan=2 style='width:35%;'><b>\u540d\u7a31</b></th><th style='width:15%;'><b>\u8077\u968e</b></th><th style='width:10%;'><b>\u5206\u985e</b></th></tr><tr align=\"center\"><td>No." + master.mstSvt[l].collectionNo + '</td><td class="star">');
    for (a = 0; a < master.mstSvtLimit[n].rarity; a++)k += "\u2605";
    if (master.mstSvtLimit[n].rarity != master.mstSvtLimit[u].rarity)for (k += "<br>", a = 0; a < master.mstSvtLimit[u].rarity; a++)k += "\u2605";
    0 == master.mstSvtLimit[n].rarity && (k += "\uff0d");
    k += "</td><td colspan=2>";
    k = (a = findSvtNameZh(master.mstSvt[l].id)) && !document.getElementById("isJpTxt").checked ? k + ("<div class=ruby>" + master.mstSvt[l].ruby + "</div>" + a) : k + master.mstSvt[l].name;
    k += "</td>";
    document.title = findSvtNameZh2(d) + " - Servant\u8cc7\u6599\u67e5\u8a62";
    for (a = 0; a < mstClass.length; a++)if (mstClass[a].id == master.mstSvt[l].classId) {
        k +=
            "<td>" + mstClass[a].name + "</td>";
        break
    }
    k += "<td>" + "\uff1f\u4eba\u5929\u5730\u661f\u7378".split("")[master.mstSvt[l].attri] + "</td></tr><tr><th><b>HP</b></th><th><b>ATK</b></th><th style='width:10%;'><b>\u7e6a\u5e2b</b></th><th style='width:10%;'><b>CV</b></th><th><b>\u5c6c\u6027</b></th><th><b>\u6027\u5225</b></th></tr><tr align=\"center\"><td>" + master.mstSvtLimit[n].hpBase + " / " + master.mstSvtLimit[n].hpMax;
    if (master.mstSvtLimit[n].hpBase != master.mstSvtLimit[u].hpBase || master.mstSvtLimit[n].hpMax != master.mstSvtLimit[u].hpMax) k +=
        "<br>" + master.mstSvtLimit[u].hpBase + " / " + master.mstSvtLimit[u].hpMax;
    k += "</td><td>" + master.mstSvtLimit[n].atkBase + " / " + master.mstSvtLimit[n].atkMax;
    if (master.mstSvtLimit[n].atkBase != master.mstSvtLimit[u].atkBase || master.mstSvtLimit[n].atkMax != master.mstSvtLimit[u].atkMax) k += "<br>" + master.mstSvtLimit[u].atkBase + " / " + master.mstSvtLimit[u].atkMax;
    k += "</td><td>";
    if (-1 != master.mstSvt[l].illustratorId)for (a = 0; a < master.mstIllustrator.length; a++) {
        if (master.mstIllustrator[a].id == master.mstSvt[l].illustratorId) {
            k +=
                "<a href='illustrator.html#" + master.mstSvt[l].illustratorId + "'>" + master.mstIllustrator[a].name.replace(/\(/g, "<br>(") + "</a>";
            break
        }
    } else k += "\uff1f\uff1f\uff1f";
    k += "</td><td>";
    if (-1 != master.mstSvt[l].cvId)for (a = 0; a < master.mstCv.length; a++) {
        if (master.mstCv[a].id == master.mstSvt[l].cvId) {
            k += "<a href='cv.html#" + master.mstSvt[l].cvId + "'>" + master.mstCv[a].name.replace(/\uff06/g, "<br>\uff06<br>") + "</a>";
            break
        }
    } else k += "\uff1f\uff1f\uff1f";
    var k = k + "</td>" + ("<td>" + " \u4e2d\u7acb \u6df7\u6c8c \u79e9\u5e8f ? ? \u4e2d\u7acb".split(" ")[master.mstSvtLimit[n].policy] +
        "\u30fb" + " \u5584 \u60e1 ? \u72c2 \u4e2d\u5eb8 ? \u82b1\u5ac1 \u590f".split(" ")[master.mstSvtLimit[n].personality] + "</td><td>" + ["", "\u7537\u6027", "\u5973\u6027", "\u7121"][master.mstSvt[l].genderType] + "</td></tr>"), q = [];
    for (a in master.mstSvt[l].individuality)for (var b in e)master.mstSvt[l].individuality[a] == e[b][0] && q.push(e[b][1]);
    k += "<tr><th>\u7279\u6027</th><td colspan=5 align=center>" + q + "</td></tr>";
    document.getElementById("svtNrmlData").innerHTML = k;
    e = '<tr><th rowspan=2><b>\u6307\u4ee4\u5361</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th rowspan=2><b>\u96b1\u85cf\u6578\u503c</b></th><th><b>\u661f\u661f\u767c\u751f\u7387</b></th><th><b>\u88ab\u5373\u6b7b\u7387</b></th><th><b>\u661f\u661f\u5206\u914d\u6bd4\u91cd</b></th><th rowspan=2><b>NP\u7372\u5f97\u7387</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th><b>\u5bf6\u5177</b></th><th><b>\u9632\u79a6</b></th></tr><tr align="center">';
    for (b = 1; 4 >= b; b++) {
        e += "<td>";
        for (a = k = 0; a < master.mstSvt[l].cardIds.length; a++)master.mstSvt[l].cardIds[a] == b && k++;
        4 != b && (e += k + "\u5f35");
        for (a = 0; a < master.mstSvtCard.length; a++)master.mstSvtCard[a].svtId == master.mstSvt[l].id && master.mstSvtCard[a].cardId == b && (4 != b && (e += " \u5404"), e += master.mstSvtCard[a].normalDamage.length + "Hit", 1 < master.mstSvtCard[a].normalDamage.length && (e += "s"));
        e += "</td>"
    }
    e += "<td>" + master.mstSvt[l].starRate / 10 + "%</td><td>" + master.mstSvt[l].deathRate / 10 + "%</td><td>" + master.mstSvtLimit[n].criticalWeight +
        "</td>";
    k = [];
    for (q = 0; 6 > q; q++)k[q] = [];
    for (var v in master.mstSvtTreasureDevice)if (master.mstSvtTreasureDevice[v].svtId == master.mstSvt[l].id && 100 != master.mstSvtTreasureDevice[v].treasureDeviceId)for (a in master.mstTreasureDeviceLv)if (master.mstTreasureDeviceLv[a].treaureDeviceId == master.mstSvtTreasureDevice[v].treasureDeviceId)for (var h = [master.mstTreasureDeviceLv[a].tdPoint, master.mstTreasureDeviceLv[a].tdPointB, master.mstTreasureDeviceLv[a].tdPointQ, master.mstTreasureDeviceLv[a].tdPointEx, master.mstTreasureDeviceLv[a].tdPoint,
        master.mstTreasureDeviceLv[a].tdPointDef], q = 0; 6 > q; q++)0 != k[q].length && k[q][k[q].length - 1] == h[q] || k[q].push(h[q]);
    for (q = 0; 6 > q; q++)e += "<td>" + npArray(k[q]) + "</td>";
    e += "</tr>";
    document.getElementById("svtCtrlData").innerHTML = e;
    e = v = "";
    k = 1;
    for (a = 0; a < master.mstSvtSkill.length; a++)if (master.mstSvtSkill[a].svtId == master.mstSvt[l].id) {
        k++;
        for (b = 0; b < master.mstSkill.length; b++)if (master.mstSvtSkill[a].skillId == master.mstSkill[b].id) {
            e += "<td><img src=common/images/SkillIcon/SkillIcon_" + master.mstSkill[b].iconId +
                ".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td><b>" + master.mstSkill[b].name + "</b></td>";
            break
        }
        for (b = 0; b < master.mstSkillLv.length; b++)master.mstSvtSkill[a].skillId == master.mstSkillLv[b].skillId && 1 == master.mstSkillLv[b].lv && (e += "<td colspan=5>\u51b7\u537b" + master.mstSkillLv[b].chargeTurn + "\u56de\u5408</td>");
        e += "<td colspan=5>";
        -1 == master.mstSvtSkill[a].condLimitCount ? e += "\u6d3b\u52d5" : (0 == master.mstSvtSkill[a].condLimitCount && 0 == master.mstSvtSkill[a].condQuestId &&
            0 == master.mstSvtSkill[a].condLv && (e += "\u521d\u671f"), 0 != master.mstSvtSkill[a].condLimitCount && (e += "\u9748\u57fa\u518d\u81e8\u7b2c" + master.mstSvtSkill[a].condLimitCount + "\u968e\u6bb5<br>"), 0 != master.mstSvtSkill[a].condLv && (e += "Lv." + master.mstSvtSkill[a].condLv + "<br>"), 0 != master.mstSvtSkill[a].condQuestId && (e += "\u901a\u904e\u95dc\u5361 " + questRea(master.mstSvtSkill[a].condQuestId) + "<br>"));
        e += "</td></tr>";
        h = [];
        for (b = 0; b < skDetail.length; b++)if (master.mstSvtSkill[a].skillId == skDetail[b][0]) {
            h = skDetail[b].slice(0);
            break
        }
        if (document.getElementById("isJpTxt").checked || !h[1])for (b = 0; b < master.mstSkillDetail.length; b++)if (master.mstSvtSkill[a].skillId == master.mstSkillDetail[b].id) {
            h[1] = master.mstSkillDetail[b].detail;
            break
        }
        var f = [];
        document.getElementById("isJpTxt").checked ? f[0] = h[1].slice(0) : (h[1] = h[1].replace(/ \uff0b |\u3000\uff0b\u3000/g, "\uff0b"), h[1] = h[1].replace(/\uff06/g, "\uff06\u2517"), f = h[1].split(/\uff06|\uff0b/));
        for (var k = k + f.length, c = 0; c < f.length; c++) {
            f[c].search(/\{0\}|Lv/);
            f[c] = f[c].replace(/\{0\}/g,
                "Lv.");
            f[c] = f[c].replace(/\[Lv.]/g, '<font color="#CC00CC ">[Lv.]</font>');
            f[c] = f[c].replace(/\u3010/g, '<font color="#006400 ">\u3010');
            f[c] = f[c].replace(/\u3011/g, "\u3011</font>");
            f[c] = f[c].replace(/\n/g, "<br>");
            if (document.getElementById("isJpTxt").checked) e += "<tr><td colspan=12>" + f[c] + "</td>"; else if (e += "<tr><td colspan=2>" + f[c] + "</td>", h[2 + c] && 1 < h[2 + c].split("/").length - 1)for (b in q = [], q = h[2 + c].split(/\//), q)e += "<td align=center style='width:50px'>" + q[b] + "</td>"; else e += "<td colspan=10>", e = h[2 +
            c] ? e + ("\u3000" + h[2 + c].replace(/\//g, " / ")) : "undefined" !== typeof h[2 + c] && 0 == h[2 + c].length ? e + "\u3000---" : e + "\u3000\u5f85\u88dc";
            e += "</td></tr>"
        }
    }
    0 < e.length && (v += "<tr><th style='width:60px' rowspan=" + k + "><b>\u4fdd\u6709\u6280\u80fd</b></th><th colspan=2 style='width:300px'>\u6280\u80fd</th><th colspan=5 style='width:250px'>\u51b7\u537b\u6642\u9593(Lv.6\u8207Lv.10\u5404\u6e1b\u5c111\u56de\u5408)</th><th colspan=5 style='width:250px'>\u958b\u653e\u689d\u4ef6</th></tr><tr>" + e + "");
    if (0 != master.mstSvt[l].classPassive.length) {
        e =
            "";
        for (a = k = 0; a < master.mstSvt[l].classPassive.length; a++) {
            k++;
            for (b = 0; b < master.mstSkill.length; b++)if (master.mstSvt[l].classPassive[a] == master.mstSkill[b].id) {
                e += "<td style='width:55px'><img src=common/images/SkillIcon/SkillIcon_" + master.mstSkill[b].iconId + ".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td><b>" + master.mstSkill[b].name + "</b></td>";
                break
            }
            h = [];
            for (b = 0; b < skDetail.length; b++)if (master.mstSvt[l].classPassive[a] == skDetail[b][0]) {
                h = skDetail[b].slice(0);
                break
            }
            if (document.getElementById("isJpTxt").checked || !h[1])for (b = 0; b < master.mstSkillDetail.length; b++)if (master.mstSvt[l].classPassive[a] == master.mstSkillDetail[b].id) {
                h[1] = master.mstSkillDetail[b].detail;
                break
            }
            f = [];
            document.getElementById("isJpTxt").checked ? f[0] = h[1].slice(0) : (h[1] = h[1].replace(/ \uff0b |\u3000\uff0b\u3000/g, "\uff0b"), h[1] = h[1].replace(/\uff06/g, "\uff06\u2517"), f = h[1].split(/\uff06|\uff0b|\+/));
            e += "<td colspan=10>";
            for (c = 0; c < f.length; c++)if (f[c].search(/\{0\}|Lv/), f[c] = f[c].replace(/\{0\}/g,
                    "Lv."), f[c] = f[c].replace(/\[Lv.]/g, '<font color="#CC00CC ">[Lv.]</font>'), f[c] = f[c].replace(/\u3010/g, '<font color="#006400 ">\u3010'), f[c] = f[c].replace(/\u3011/g, "\u3011</font>"), f[c] = f[c].replace(/\n/g, "<br>"), document.getElementById("isJpTxt").checked) e += f[c]; else if (0 != c && (e += "<br>"), e += f[c], h[2 + c] && 1 < h[2 + c].split("/").length - 1)for (b in e += f[c] + "\uff1a", q = [], q = h[2 + c].split(/\//), q)e += q[b]; else e = h[2 + c] ? e + ("\uff1a" + h[2 + c].replace(/\//g, " / ")) : "undefined" !== typeof h[2 + c] && 0 == h[2 + c].length ? e + "" :
                    e + "\uff1a\u5f85\u88dc";
            e += "</td></tr>"
        }
        v += "<tr><th rowspan=" + master.mstSvt[l].classPassive.length + "><b>\u8077\u968e\u6280\u80fd</b></th>" + e + ""
    }
    e = "";
    k = 0;
    for (b in master.mstSvtTreasureDevice)if (master.mstSvtTreasureDevice[b].svtId == master.mstSvt[l].id && 100 != master.mstSvtTreasureDevice[b].treasureDeviceId)for (a = 0; a < master.mstTreasureDevice.length; a++)if (master.mstTreasureDevice[a].id == master.mstSvtTreasureDevice[b].treasureDeviceId) {
        k += 2;
        e += "<th colspan=2 style='width:300px'><b>\u540d\u7a31</b></th><th colspan=2 style='width:100px'><b>\u7b49\u7d1a</b></th><th colspan=2 style='width:100px'><b>\u7a2e\u985e</b></th><th colspan=4 style='width:200px'><b>\u89e3\u653e\u95dc\u5361</b></th><th colspan=2 style='width:100px'>\u653b\u64ca\u6b21\u6578</th></tr>";
        e += '<tr align="center"><td colspan=2><div class=ruby>' + master.mstTreasureDevice[a].ruby + "</div>";
        e += '<b><font color="#' + p[master.mstSvtTreasureDevice[b].cardId] + '">' + master.mstTreasureDevice[a].name + "</font></b></td><td colspan=2>" + master.mstTreasureDevice[a].rank + "</td><td colspan=2>" + master.mstTreasureDevice[a].typeText.replace(/\uff0f/g, "\uff0f<br>").replace(/\u5bfe/g, "\u5c0d").replace(/\u5b9d/g, "\u5bf6").replace(/\u5263/g, "\u528d").replace(/\u60aa/g, "\u60e1").replace(/\u5965/g, "\u5967").replace(/\u30bb\u30a4\u30d0\u30fc/g,
                "Saber").replace(/\u7adc/g, "\u9f8d") + "</td><td colspan=4>";
        e = 98 == master.mstSvtTreasureDevice[b].num ? e + "NPC\u9650\u5b9a" : 0 == master.mstSvtTreasureDevice[b].condQuestId && 0 == master.mstSvtTreasureDevice[b].condLv && 0 == master.mstSvtTreasureDevice[b].condFriendshipRank ? e + "\u521d\u671f" : null != findName(master.mstQuest, master.mstSvtTreasureDevice[b].condQuestId) ? e + questRea(master.mstSvtTreasureDevice[b].condQuestId) : 0 != master.mstSvtTreasureDevice[b].condLv ? e + ("Lv." + master.mstSvtTreasureDevice[b].condLv + "\u89e3\u653e") :
                        0 != master.mstSvtTreasureDevice[b].condFriendshipRank ? e + ("\u7d46\u7b49\u7d1a" + master.mstSvtTreasureDevice[b].condFriendshipRank + "\u89e3\u653e") : e + "\u672a\u958b\u653e";
        e += "</td>";
        h = [];
        for (c in tdDetail)if (master.mstTreasureDevice[a].id == tdDetail[c][0]) {
            h = tdDetail[c].slice(0);
            break
        }
        if (document.getElementById("isJpTxt").checked || !h[1])for (c in master.mstTreasureDeviceDetail)if (master.mstTreasureDevice[a].id == master.mstTreasureDeviceDetail[c].id) {
            h[1] = master.mstTreasureDeviceDetail[c].detail;
            break
        }
        e +=
            "<td colspan=2>";
        -1 == h[1].search(/\u653b\u64ca[^\u529b]|\u653b\u6483[^\u529b]/) ? e += "\uff0d" : (e = 0 < master.mstSvtTreasureDevice[b].damage.length ? e + master.mstSvtTreasureDevice[b].damage.length : e + "1", e += "Hit", 1 < master.mstSvtTreasureDevice[b].damage.length && (e += "s"));
        e += "</td></tr>";
        f = [];
        document.getElementById("isJpTxt").checked ? f[0] = h[1].slice(0) : (h[1] = h[1].replace(/ \uff0b |\u3000\uff0b\u3000/g, "\uff0b"), h[1] = h[1].replace(/\uff06/g, "\uff06\u2517"), f = h[1].split(/\uff06|\uff0b/));
        k += f.length;
        for (c = 0; c <
        f.length; c++) {
            f[c].search(/\{0\}|Lv/);
            f[c].search(/<O|<\u30aa/);
            f[c] = f[c].replace(/\{0\}/g, "Lv.");
            f[c] = f[c].replace(/<O/g, '<font color="#CC6600"><br>< O');
            f[c] = f[c].replace(/<\u30aa/g, '<font color="#CC6600"><\u30aa');
            f[c] = f[c].replace(/P>/g, "P></font>");
            f[c] = f[c].replace(/\u30d7>/g, "\u30d7></font>");
            f[c] = f[c].replace(/\u3010/g, '<font color="#006400 ">\u3010');
            f[c] = f[c].replace(/\u3011/g, "\u3011</font>");
            f[c] = f[c].replace(/\[Lv.]/g, '<font color="#CC00CC ">[Lv.]</font>');
            f[c] = f[c].replace(/\n/g, "<br>");
            if (document.getElementById("isJpTxt").checked) e += "<td colspan=12>" + f[c] + "</td>"; else if (0 != c && (e += "<tr>"), e += "<td colspan=2>" + f[c] + "</td>", h[2 + c] && 1 < h[2 + c].split("/").length - 1)for (g in q = [], q = h[2 + c].split(/\//), q)e += "<td align=center colspan=2>" + q[g] + "</td>"; else e += "<td colspan=10>", e = h[2 + c] ? e + ("\u3000" + h[2 + c]) : "undefined" !== typeof h[2 + c] && 0 == h[2 + c].length ? e + "\u3000---" : e + "\u3000\u5f85\u88dc";
            e += "</td></tr>"
        }
        break
    }
    v += "<tr><th rowspan=" + k + " style='width:60px'><b>\u5bf6\u5177</b></th>" + e + "";
    document.getElementById("svtSkTdData").innerHTML =
        v;
    b = "";
    b = "<tr><th rowspan=2 style='width:250px'>\u80fd\u529b\u503c</th><th style='width:80px'>\u7b4b\u529b</th><th style='width:80px'>\u8010\u4e45</th><th style='width:80px'>\u654f\u6377</th><th style='width:80px'>\u9b54\u529b</th><th style='width:80px'>\u5e78\u904b</th><th style='width:80px'>\u5bf6\u5177</th></tr><tr align=\"center\"><td>" + r[Math.floor(master.mstSvtLimit[n].power / 10)] + m[master.mstSvtLimit[n].power % 10] + "</td><td>" + r[Math.floor(master.mstSvtLimit[n].defense / 10)] + m[master.mstSvtLimit[n].defense %
        10] + "</td><td>" + r[Math.floor(master.mstSvtLimit[n].agility / 10)] + m[master.mstSvtLimit[n].agility % 10] + "</td><td>" + r[Math.floor(master.mstSvtLimit[n].magic / 10)] + m[master.mstSvtLimit[n].magic % 10] + "</td><td>" + r[Math.floor(master.mstSvtLimit[n].luck / 10)] + m[master.mstSvtLimit[n].luck % 10] + "</td><td>" + r[Math.floor(master.mstSvtLimit[n].treasureDevice / 10)] + m[master.mstSvtLimit[n].treasureDevice % 10] + "</td></tr>";
    if (1E3 != master.mstSvt[l].friendshipId) {
        r = findSvtFs(master.mstSvt[l].id);
        m = 5;
        p = [];
        if (r != master.mstSvt[l].friendshipId ||
            10 == master.mstSvt[l].maxFriendshipRank) m = 10;
        b += "<tr><th rowspan=" + 2 * m / 5 + ">\u7d46\u9ede\u6578<br>(\u7d2f\u7a4d)</th><th>Lv.1</th><th>Lv.2</th><th>Lv.3</th><th>Lv.4</th><th>Lv.5</th><th>";
        10 == m && (b += "\u5c08\u5c6c\u79ae\u88dd");
        b += '</th></tr><tr align="center">';
        for (a in master.mstFriendship)master.mstFriendship[a].id == r && 10 > master.mstFriendship[a].rank && (p[master.mstFriendship[a].rank] = master.mstFriendship[a].friendship);
        for (a = 0; 5 > a; a++)b = 0 == a ? b + ("<td>" + p[a] + "</td>") : b + ("<td>" + (p[a] - p[a - 1]) + "<br>(" +
            p[a] + ")</td>");
        if (10 == m)for (var t in bondCE) {
            if (bondCE[t][1] == master.mstSvt[l].id) {
                b += "<td rowspan=3>";
                b += svtFace(bondCE[t][0]);
                b += "</td></tr>";
                break
            }
        } else b += "<td></td></tr>";
        if (10 == m) {
            b += '<tr><th>Lv.6</th><th>Lv.7</th><th>Lv.8</th><th>Lv.9</th><th>Lv.10</th></tr><tr align="center">';
            for (a = 5; 10 > a; a++)b += "<td>" + (p[a] - p[a - 1]) + "<br>(" + p[a] + ")</td>";
            b += "</tr>"
        }
    }
    for (a = 0; a < master.mstSvtComment.length; a++)if (t = "", master.mstSvt[l].id == master.mstSvtComment[a].svtId) {
        b += "<tr><th width=150>";
        0 == master.mstSvtComment[a].condValue ?
            b += "<b>\u89d2\u8272\u8a73\u7d30</b>" : 6 > master.mstSvtComment[a].condValue ? b += "<b>\u7d46\u7b49\u7d1a" + master.mstSvtComment[a].condValue + "</b>" : 1 == master.mstSvtComment[a].condType && (b += "<b>\u901a\u904e\u95dc\u5361</b><br>" + questRea(master.mstSvtComment[a].condValue));
        b += "</th>";
        t = 0 == master.mstSvtComment[a].condValue % 2 ? ' bgcolor=" #ECF2F3"' : "";
        b += "<td colspan=6" + t + ">";
        t = null;
        if (null == t || document.getElementById("isJpTxt").checked) t = master.mstSvtComment[a].comment;
        b += t.replace(/\n/g, "<br>").replace(/<br>$/,
                "<br><br>") + "</td></tr>"
    }
    document.getElementById("svtInfoData").innerHTML = b;
    r = "";
    r = "<tr><th rowspan=4><b>\u9748\u57fa\u518d\u81e8</b></th>";
    for (m = 0; 4 > m; m++) {
        t = "";
        0 == m % 2 && (t = ' bgcolor=" #ECF2F3"');
        0 != m && (r += "<tr>");
        r += "<td width=80 " + t + ">\u7b2c" + (m + 1) + "\u968e\u6bb5</td><td width=450" + t + ">";
        for (a = 0; a < master.mstCombineLimit.length; a++)if (master.mstCombineLimit[a].id == master.mstSvt[l].id && master.mstCombineLimit[a].svtLimit == m) {
            for (b = 0; b < master.mstCombineLimit[a].itemIds.length; b++)r += "<a href='item_drop.html#" +
                master.mstCombineLimit[a].itemIds[b] + "'><img src='common/images/icon/items/" + master.mstCombineLimit[a].itemIds[b] + ".png' title='" + findItemName(master.mstCombineLimit[a].itemIds[b]) + "' onerror=\"javascript:this.src='common/images/icon/items/0.png'\" class='itemM' /></a>x" + master.mstCombineLimit[a].itemNums[b] + "\u3000";
            r += addCommas(master.mstCombineLimit[a].qp) + "QP"
        }
        r += "</td></tr>"
    }
    r += "<tr><th rowspan=9><b>\u6280\u80fd\u5f37\u5316</b></th>";
    for (a = m = 0; a < master.mstCombineSkill.length; a++)if (t = "", 0 == a %
        2 && (t = ' bgcolor=" #ECF2F3"'), master.mstCombineSkill[a].id == master.mstSvt[l].id) {
        1 != master.mstCombineSkill[a].skillLv && (r += "<tr>");
        r += "<td" + t + ">Lv." + master.mstCombineSkill[a].skillLv + "\u2192Lv." + (master.mstCombineSkill[a].skillLv + 1) + "</td><td" + t + ">";
        for (b = 0; b < master.mstCombineSkill[a].itemIds.length; b++)r += "<a href='item_drop.html#" + master.mstCombineSkill[a].itemIds[b] + "'><img src='common/images/icon/items/" + master.mstCombineSkill[a].itemIds[b] + ".png' title='" + findItemName(master.mstCombineSkill[a].itemIds[b]) +
            "' onerror=\"javascript:this.src='common/images/icon/items/0.png'\" class='itemM' /></a>x" + master.mstCombineSkill[a].itemNums[b] + "\u3000";
        r += addCommas(master.mstCombineSkill[a].qp) + "QP</td></tr>";
        m++
    }
    0 == m && (r += "<td colspan=2>\u7121</td></tr>");
    document.getElementById("svtCmbnData").innerHTML = r;
    document.getElementById("svtImgData").innerHTML = "";
    document.getElementById("svtImgData").innerHTML = "<tr><td><img src=common/images/Servant/" + d + "_card_servant_1.png onerror=\"this.style.display = 'none'\"></img><img src=common/images/Servant/" +
        d + "_card_servant_2.png onerror=\"this.style.display = 'none'\"></img><img src=common/images/Servant/" + d + "_card_servant_3.png onerror=\"this.style.display = 'none'\"></img><br><img src=common/images/CharaGraph/" + d + "a.png onerror=\"this.style.display = 'none'\" style='max-width:100%;'></img><br><img src=common/images/CharaGraph/" + d + "b.png onerror=\"this.style.display = 'none'\" style='max-width:100%;'></img><br><img src=common/images/CharaGraph/" + d + "c.png onerror=\"this.style.display = 'none'\" style='max-width:100%;'></img></td></tr>";
    d = "";
    if (master.mstSvtLimit[n].hpBase != master.mstSvtLimit[u].hpBase || master.mstSvtLimit[n].hpMax != master.mstSvtLimit[u].hpMax || master.mstSvtLimit[n].atkBase != master.mstSvtLimit[u].atkBase || master.mstSvtLimit[n].atkMax != master.mstSvtLimit[u].atkMax) n = u;
    if (99 == master.mstSvt[l].type) $("#chart_div").css("display", "none"); else for ($("#chart_div").css("display", "block"), d = "<tr><th>\u7b49\u7d1a</th><th>ATK</th><th>HP</th><th>\u4e0a\u5347\u5e45\u5ea6</th></tr>", a = 0; 100 > a; a++)for (m = 0; m < master.mstSvtExp.length; m++)if (master.mstSvt[l].expType ==
        master.mstSvtExp[m].type && master.mstSvtExp[m].lv == a + 1) {
        t = "";
        1 == master.mstSvtExp[m].lv % 2 && (t = ' bgcolor=" #ECF2F3"');
        d += '<tr align="center"><td' + t + ">Lv." + master.mstSvtExp[m].lv + "</td><td" + t + ">" + Math.floor(master.mstSvtLimit[n].atkBase + (master.mstSvtLimit[n].atkMax - master.mstSvtLimit[n].atkBase) * master.mstSvtExp[m].curve / 1E3) + "</td><td" + t + ">" + Math.floor(master.mstSvtLimit[n].hpBase + (master.mstSvtLimit[n].hpMax - master.mstSvtLimit[n].hpBase) * master.mstSvtExp[m].curve / 1E3) + "</td><td" + t + ">" + (master.mstSvtExp[m].curve -
            master.mstSvtExp[m - 1].curve) / 10 + "%</td></tr>";
        break
    }
    document.getElementById("svtLvData").innerHTML = d;
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
    var d;
    for (d = svtid.options.length - 1; 0 <= d; d--)svtid.remove(d);
    if (0 == classid.value)for (d = 0; d < master.mstSvt.length; d++) {
        if (1 == master.mstSvt[d].type || 2 == master.mstSvt[d].type || 5 == master.mstSvt[d].type || 9 == master.mstSvt[d].type || 99 == master.mstSvt[d].type) {
            var p = findSvtNameZh(master.mstSvt[d].id);
            p ? svtid.options.add(new Option("No." + master.mstSvt[d].collectionNo + " " + p, master.mstSvt[d].id)) : svtid.options.add(new Option("No." + master.mstSvt[d].collectionNo + " " + master.mstSvt[d].name,
                    master.mstSvt[d].id))
        }
    } else for (d = 0; d < master.mstSvt.length; d++)master.mstSvt[d].classId != classid.value || 1 != master.mstSvt[d].type && 2 != master.mstSvt[d].type && 5 != master.mstSvt[d].type && 9 != master.mstSvt[d].type && 99 != master.mstSvt[d].type || ((p = findSvtNameZh(master.mstSvt[d].id)) ? svtid.options.add(new Option("No." + master.mstSvt[d].collectionNo + " " + p, master.mstSvt[d].id)) : svtid.options.add(new Option("No." + master.mstSvt[d].collectionNo + " " + master.mstSvt[d].name, master.mstSvt[d].id)));
    0 != classid.value && svtlocation(svtid[0].value)
}
function svtidset() {
    classidChange();
    svtlocation(svtid[0].value)
}
function svtidChange() {
    var d;
    for (d = svtlv.options.length - 1; 0 <= d; d--)svtlv.remove(d);
    for (d in master.mstSvt)if (master.mstSvt[d].id == svtid.value) {
        for (d = 100; 0 < d; d--)svtlv.options.add(new Option("Lv." + d, d));
        break
    }
    svtlvChange();
    svtDataTable(svtid.value);
    drawChart()
}
function svtlocation(d) {
    d = "";
    for (var p in master.mstSvt)if (master.mstSvt[p].id == svtid.value) {
        d = 0 != master.mstSvt[p].collectionNo ? d + ("?no=" + master.mstSvt[p].collectionNo) : d + ("?id=" + master.mstSvt[p].id);
        break
    }
    "file:" == location.protocol ? changeURL(location.protocol + "//" + location.pathname + d) : changeURL(location.protocol + "//" + location.hostname + location.pathname + d);
    svtidChange()
}
function svtlvChange() {
    var d, p = 0, r = 0, m = 0, e = 0;
    for (d in master.mstSvtLimit)master.mstSvtLimit[d].svtId == svtid.value && (p = master.mstSvtLimit[d].hpBase, r = master.mstSvtLimit[d].hpMax, m = master.mstSvtLimit[d].atkBase, e = master.mstSvtLimit[d].atkMax);
    for (var a in master.mstSvt)if (master.mstSvt[a].id == svtid.value) {
        for (var l in master.mstSvtExp)if (atk.value = m, hp.value = p, four(), master.mstSvt[a].expType == master.mstSvtExp[l].type && master.mstSvtExp[l].lv == svtlv.value) {
            atk.value = Math.floor(m + (e - m) * master.mstSvtExp[l].curve /
                1E3);
            hp.value = Math.floor(p + (r - p) * master.mstSvtExp[l].curve / 1E3);
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
function npArray(d) {
    var p = "", r;
    for (r in d)p += d[r] / 100 + "%<br>";
    return p
}
function urlId() {
    $("#classid").val(0);
    classidChange();
    var d = "1", p = "";
    getUrl("no") && (d = getUrl("no"));
    getUrl("id") && (p = getUrl("id"));
    if (d) {
        if (0 != p.length)for (i in master.mstSvt) {
            if ((1 == master.mstSvt[i].type || 2 == master.mstSvt[i].type || 5 == master.mstSvt[i].type || 9 == master.mstSvt[i].type || 99 == master.mstSvt[i].type) && p == master.mstSvt[i].id) {
                $("#svtid").val(master.mstSvt[i].id);
                break
            }
        } else for (i in master.mstSvt)if ((1 == master.mstSvt[i].type || 2 == master.mstSvt[i].type || 5 == master.mstSvt[i].type || 9 == master.mstSvt[i].type ||
            99 == master.mstSvt[i].type) && d == master.mstSvt[i].collectionNo) {
            $("#svtid").val(master.mstSvt[i].id);
            break
        }
        i == master.mstSvt.length - 1 && $("#svtid").val(800100)
    }
    svtidChange()
};