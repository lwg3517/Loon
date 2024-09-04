#!name=qimao
#!desc=qimao
#!icon=https://github.com/Toperlock/Quantumult/raw/main/icon/Doraemon/Doraemon-1030.png

[Rewrite]
^https:\/\/api-gw\.wtzw\.com\/welf\/app\/v1\/task\/red-packet$ - reject-dict

[Script]
http-response ^https?:\/\/(api-\w+|xiaoshuo)\.wtzw\.com\/api\/v\d\/ script-path=https://raw.githubusercontent.com/wf021325/qx/master/js/qimao.js, requires-body=true, timeout=60, tag=qimao

[MITM]
hostname = *.wtzw.com