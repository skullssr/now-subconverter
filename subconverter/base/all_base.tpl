{% if request.target == "clash" or request.target == "clashr" %}

port: {{ default(global.clash.http_port, "7890") }}
socks-port: {{ default(global.clash.socks_port, "7891") }}
allow-lan: {{ default(global.clash.allow_lan, "true") }}
mode: Rule
log-level: {{ default(global.clash.log_level, "info") }}
external-controller: :9090
{% if default(request.clash.dns, "") == "1" %}
dns:
  enabled: true
  listen: 1053
{% endif %}
{% if local.clash.new_field_name == "true" %}
proxies: ~
proxy-groups: ~
rules: ~
{% else %}
Proxy: ~
Proxy Group: ~
Rule: ~
{% endif %}

{% endif %}
{% if request.target == "surge" %}

[General]
loglevel = notify
bypass-system = true
skip-proxy = 127.0.0.1,192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,100.64.0.0/10,localhost,*.local,e.crashlytics.com,captive.apple.com,::ffff:0:0:0:0/1,::ffff:128:0:0:0/1
#DNS设置或根据自己网络情况进行相应设置
bypass-tun = 192.168.0.0/16,10.0.0.0/8,172.16.0.0/12
dns-server = 119.29.29.29,223.5.5.5

[Script]
http-request https?:\/\/.*\.iqiyi\.com\/.*authcookie= script-path=https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js

{% endif %}
{% if request.target == "loon" %}

[General]
skip-proxy = 192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,localhost,*.local,e.crashlynatics.com
bypass-tun = 10.0.0.0/8,100.64.0.0/10,127.0.0.0/8,169.254.0.0/16,172.16.0.0/12,192.0.0.0/24,192.0.2.0/24,192.88.99.0/24,192.168.0.0/16,198.18.0.0/15,198.51.100.0/24,203.0.113.0/24,224.0.0.0/4,255.255.255.255/32
dns-server = system,119.29.29.29,223.5.5.5
allow-udp-proxy = false
host = 127.0.0.1

[Proxy]

[Remote Proxy]

[Proxy Group]

[Rule]

[Remote Rule]

[URL Rewrite]
#enable = true
#^https?:\/\/(www.)?(g|google)\.cn https://www.google.com 302
hostname = mb3admin.com
# > Emby解锁播放权限
^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) url script-echo-response https://raw.githubusercontent.com/echoops/cookies/main/Script/emby.js
# ---(By KleinerSource)---

[Remote Rewrite]
#https://raw.githubusercontent.com/Loon0x00/LoonExampleConfig/master/Rewrite/AutoRewrite_Example.list,auto

[MITM]
#hostname = *.example.com,*.sample.com
#enable = true
#skip-server-cert-verify = true
#ca-p12 =
#ca-passphrase =

{% endif %}
{% if request.target == "quan" %}

[SERVER]

[SOURCE]

[BACKUP-SERVER]

[SUSPEND-SSID]

[POLICY]

[DNS]
1.1.1.1

[REWRITE]

[URL-REJECTION]

[TCP]

[GLOBAL]

[HOST]

[STATE]
STATE,AUTO

[MITM]

{% endif %}
{% if request.target == "quanx" %}

[general]
excluded_routes=192.168.0.0/16, 172.16.0.0/12, 100.64.0.0/10, 10.0.0.0/8
geo_location_checker=http://ip-api.com/json/?lang=zh-CN, https://github.com/KOP-XIAO/QuantumultX/raw/master/Scripts/IP_API.js
network_check_url=http://www.baidu.com/
server_check_url=http://www.gstatic.com/generate_204

[dns]
server=119.29.29.29
server=223.5.5.5
server=1.0.0.1
server=8.8.8.8

[policy]
static=♻️ 自动选择, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Auto.png
static=🔰 节点选择, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Proxy.png
static=🌍 国外媒体, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/GlobalMedia.png
static=🌏 国内媒体, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/DomesticMedia.png
static=Ⓜ️ 微软服务, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Microsoft.png
static=Ⓜ️ 微软云盘, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Microsoft.png
static=📲 电报信息, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Telegram.png
static=📲 电报消息, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Telegram.png
static=🍎 苹果服务, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Apple.png
static=📢 谷歌FCM, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Google.png
static=🎯 全球直连, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Direct.png
static=🛑 全球拦截, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Advertising.png
static=🐟 漏网之鱼, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Final.png
static=🛑 广告拦截, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Reject.png
static=⛔ 应用拦截, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Reject.png
static=🍃 应用净化, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Magic.png
static=🆎 AdBlock, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Advertising.png
static=🆎 隐私防护, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Hijacking.png
static=🎮 游戏平台, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Game.png
static=🎮 游戏模式, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Game.png
static=🧩 微软服务, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Microsoft.png
static=📲 聊天软件, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Telegram.png
static=📺 巴哈姆特, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Bahamut.png
static=📹 油管视频, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/YouTube.png
static=▶ YouTube, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/YouTube.png
static=📹 YouTube, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/YouTube.png
static=🎥 NETFLIX, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Netflix.png
static=🎥 奈飞视频, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Netflix.png
static=🎥 奈飞节点, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Netflix_Letter.png
static=🎵 TikTok, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/TikTok.png
static=🎬 Prime, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Prime_Video.png
static=👪 DisneyPlus, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Disney+.png
static=🎬 HBO, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/HBO.png
static=🎬 Spotify, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Spotify.png
static=🎶 网易音乐, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Netease_Music.png
static=⛩ 日韩媒体, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/ForeignMedia.png
static=🌏 港台媒体, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/ForeignMedia.png
static=📺 哔哩哔哩, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/bilibili.png
static=📺 哔哩哔哩&爱奇艺, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/iQIYI&bilibili.png
static=🌏 出海媒体, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/ForeignMedia.png
static=📡 Emby, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Emby.png
static=🇧🇹 BT&PT, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Direct.png
static=🇺🇳 国外网站, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/United_States_Map.png
static=🇨🇳 国内网站, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/China_Map.png
static=🚀 节点选择, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Proxy.png
static=🚀 手动切换, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Rocket.png
static=♻️ 手动切换, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Rocket.png
static=🎯 总模式, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Airport.png
static=♻️ 延迟最低, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Auto.png
static=Ⓜ️ 延迟最低, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Auto.png
static=🔯 故障转移, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Round_Robin.png
static=Ⓜ️ 故障切换, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Round_Robin.png
static=🔮 负载均衡, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Bypass.png
static=Ⓜ️ 负载均衡, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Bypass.png
static=🇭🇰 香港节点, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Hong_Kong.png
static=🇯🇵 日本节点, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Japan.png
static=🇺🇲 美国节点, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/United_States.png
static=🇨🇳 台湾节点, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Taiwan.png
static=🇸🇬 狮城节点, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Singapore.png
static=🇰🇷 韩国节点, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Korea.png
static=🌍 其他地区, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/United_Nations.png
static=♻️ IEPL节点, direct, img-url=https://raw.githubusercontent.com/skullssr/Qure/master/IconSet/IEPL.png
static=♻️ IPLC节点, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/IPLC.png

[server_remote]

[filter_remote]

[rewrite_remote]
# 破解Emby客户端，不使用可注释
https://raw.githubusercontent.com/echoops/limitless/main/QuantumultX/Rewrite/emby.qxrewrite, tag=Emby Premiere, update-interval=86400, enabled=true

[server_local]

[filter_local]

[rewrite_local]

[mitm]

{% endif %}
{% if request.target == "mellow" %}

[Endpoint]
DIRECT, builtin, freedom, domainStrategy=UseIP
REJECT, builtin, blackhole
Dns-Out, builtin, dns

[Routing]
domainStrategy = IPIfNonMatch

[Dns]
hijack = Dns-Out
clientIp = 114.114.114.114

[DnsServer]
localhost
223.5.5.5
8.8.8.8, 53, Remote
8.8.4.4

[DnsRule]
DOMAIN-KEYWORD, geosite:geolocation-!cn, Remote
DOMAIN-SUFFIX, google.com, Remote

[DnsHost]
doubleclick.net = 127.0.0.1

[Log]
loglevel = warning

{% endif %}
{% if request.target == "surfboard" %}

[General]
loglevel = notify
interface = 127.0.0.1
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local
ipv6 = false
dns-server = system, 223.5.5.5
exclude-simple-hostnames = true
enhanced-mode-by-rule = true
{% endif %}
{% if request.target == "sssub" %}
{
  "route": "bypass-lan-china",
  "remote_dns": "dns.google",
  "ipv6": false,
  "metered": false,
  "proxy_apps": {
    "enabled": false,
    "bypass": true,
    "android_list": [
      "com.eg.android.AlipayGphone",
      "com.wudaokou.hippo",
      "com.zhihu.android"
    ]
  },
  "udpdns": false
}

{% endif %}
