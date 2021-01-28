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
http-request https?:\/\/.*\.iqiyi\.com\/.*authcookie= script-path=https://ghproxy.com/https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js

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

[Remote Rewrite]

[Script]
# 破解Emby客户端，不使用可注释
http-response ^https?:\/\/mb3admin.com\/admin\/service\/registration\/validateDevice requires-body=1,max-size=0, script-path=https://ghproxy.com/https://raw.githubusercontent.com/rartv/SurgeScript/main/EmbyPremiere/EmbyPremiere.js,tag=EmbyPremiere

[MITM]
# 破解Emby证书，不使用可注释
skip-server-cert-verify = false
enable = false
ca-p12 = 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
ca-passphrase = 16VH8WV4
hostname = mb3admin.com

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
static=♻️ 自动选择, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Auto.png
static=🔰 节点选择, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Proxy.png
static=🌍 国外媒体, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/GlobalMedia.png
static=🌏 国内媒体, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/DomesticMedia.png
static=Ⓜ️ 微软服务, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Microsoft.png
static=Ⓜ️ 微软云盘, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Microsoft.png
static=📲 电报信息, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Telegram.png
static=📲 电报消息, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Telegram.png
static=🍎 苹果服务, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Apple.png
static=📢 谷歌FCM, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Google.png
static=🎯 全球直连, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Direct.png
static=🛑 全球拦截, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Advertising.png
static=⛔ 全球拦截, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Advertising.png
static=🐟 漏网之鱼, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Final.png
static=🛑 广告拦截, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Reject.png
static=⛔ 应用拦截, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Reject.png
static=🍃 应用净化, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Magic.png
static=🆎 AdBlock, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Advertising.png
static=🆎 隐私防护, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Hijacking.png
static=🎮 游戏平台, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Game.png
static=🎮 游戏模式, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Game.png
static=🧩 微软服务, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Microsoft.png
static=📲 聊天软件, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Telegram.png
static=📺 巴哈姆特, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Bahamut.png
static=📹 油管视频, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/YouTube.png
static=▶ YouTube, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/YouTube.png
static=📹 YouTube, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/YouTube.png
static=🎥 NETFLIX, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Netflix.png
static=🎥 奈飞视频, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Netflix.png
static=🎥 奈飞节点, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Netflix_Letter.png
static=🎵 TikTok, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/TikTok.png
static=🎬 Prime, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Prime_Video.png
static=👪 DisneyPlus, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Disney+.png
static=🎬 HBO, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/HBO.png
static=🎬 Spotify, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Spotify.png
static=🎶 网易音乐, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Netease_Music.png
static=⛩ 日韩媒体, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/ForeignMedia.png
static=🌏 港台媒体, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/ForeignMedia.png
static=📺 哔哩哔哩, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/bilibili.png
static=📺 哔哩哔哩&爱奇艺, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/iQIYI&bilibili.png
static=🌏 出海媒体, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/ForeignMedia.png
static=📡 Emby, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Emby.png
static=🇧🇹 BT&PT, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Direct.png
static=🇺🇳 国外网站, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/United_States_Map.png
static=🇨🇳 国内网站, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/China_Map.png
static=🚀 节点选择, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Proxy.png
static=🚀 手动切换, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Rocket.png
static=♻️ 手动切换, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Rocket.png
static=🎯 总模式, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Airport.png
static=♻️ 延迟最低, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Auto.png
static=Ⓜ️ 延迟最低, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Auto.png
static=🔯 故障转移, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Round_Robin.png
static=Ⓜ️ 故障切换, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Round_Robin.png
static=🔮 负载均衡, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Bypass.png
static=Ⓜ️ 负载均衡, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Bypass.png
static=🇭🇰 香港节点, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Hong_Kong.png
static=🇯🇵 日本节点, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Japan.png
static=🇺🇲 美国节点, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/United_States.png
static=🇨🇳 台湾节点, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Taiwan.png
static=🇸🇬 狮城节点, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Singapore.png
static=🇰🇷 韩国节点, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Korea.png
static=🌍 其他地区, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/United_Nations.png
static=♻️ IEPL节点, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/skullssr/Qure/master/IconSet/IEPL.png
static=♻️ IPLC节点, direct, img-url=https://ghproxy.com/https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/IPLC.png

[server_remote]

[filter_remote]

[rewrite_remote]
# 破解Emby客户端，不使用可注释
https://ghproxy.com/https://raw.githubusercontent.com/echoops/limitless/main/QuantumultX/Rewrite/emby.qxrewrite, tag=Emby Premiere, update-interval=86400, enabled=true

[server_local]

[filter_local]

[rewrite_local]

[mitm]
# 破解Emby证书，不使用可注释
passphrase = 4E837BF6
p12 = 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

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
