"use strict";(self.webpackChunkel_furnia=self.webpackChunkel_furnia||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"osu-searcher-guides","metadata":{"permalink":"/blog/osu-searcher-guides","editUrl":"https://github.com/syzomnia-el/el-furnia/edit/main/blog/osu-searcher-guides.md","source":"@site/blog/osu-searcher-guides.md","title":"osu!searcher \u4f7f\u7528\u6559\u7a0b","description":"osu!searcher \u662f\u4e00\u4e2a\u4e3a osu! \u5f00\u53d1\u7684\u672c\u5730\u8c31\u9762\u67e5\u627e\u5de5\u5177\uff0c\u65e0\u9700\u542f\u52a8 osu! \u5373\u53ef\u5feb\u901f\u67e5\u627e\u5df2\u4e0b\u8f7d\u7684\u8c31\u9762\u3002","date":"2022-08-08T00:00:00.000Z","formattedDate":"2022\u5e748\u67088\u65e5","tags":[{"label":"\u5de5\u5177","permalink":"/blog/tags/\u5de5\u5177"},{"label":"osu!","permalink":"/blog/tags/osu"},{"label":"Python","permalink":"/blog/tags/python"}],"hasTruncateMarker":true,"authors":[{"name":"Syzomnia El","title":"El Furnia \u6240\u6709\u8005","url":"https://syzomnia-el.github.io","imageURL":"https://s2.loli.net/2022/09/01/yAC4vVKehGoLHfu.webp","key":"el"}],"frontMatter":{"slug":"osu-searcher-guides","title":"osu!searcher \u4f7f\u7528\u6559\u7a0b","authors":"el","date":"2022-08-08T00:00:00.000Z","tags":["\u5de5\u5177","osu!","Python"]}},"content":"osu!searcher \u662f\u4e00\u4e2a\u4e3a [osu!](https://osu.ppy.sh) \u5f00\u53d1\u7684\u672c\u5730\u8c31\u9762\u67e5\u627e\u5de5\u5177\uff0c\u65e0\u9700\u542f\u52a8 osu! \u5373\u53ef\u5feb\u901f\u67e5\u627e\u5df2\u4e0b\u8f7d\u7684\u8c31\u9762\u3002\\n\\n## \u529f\u80fd\\n\\n- [x] \u67e5\u770b\u672c\u5730\u8c31\u9762\\n\\n- [x] \u6309\u5173\u952e\u5b57\u7b5b\u9009\u8c31\u9762\\n\\n- [x] \u68c0\u67e5\u91cd\u590d\u7684\u8c31\u9762\\n\\n- [ ] \u5bf9\u7279\u5b9a\u6761\u4ef6\uff0c\u5982\u8c31\u9762\u7f16\u53f7\u3001\u6b4c\u540d\u3001\u827a\u672f\u5bb6\u3001\u8c31\u5e08\u7b49\uff0c\u6309\u5173\u952e\u5b57\u7b5b\u9009\u8c31\u9762\\n\\n\x3c!--truncate--\x3e\\n\\n## \u8981\u6c42\\n\\n- [Python 3.7](https://www.python.org/downloads) \u6216\u66f4\u9ad8\u7248\u672c\\n\\n## \u4e0b\u8f7d\\n\\n\u4f60\u53ef\u4ee5\u4ece\u4f4d\u4e8e Github \u7684\u9879\u76ee\u4ed3\u5e93\u4e2d\u4e0b\u8f7d osu!searcher \u7684\u6e90\u4ee3\u7801\u3002  \\n\u9879\u76ee\u5730\u5740\uff1ahttps://github.com/syzomnia-el/osu-searcher\\n\\n- \u4f60\u53ef\u4ee5\u4f7f\u7528 git \u5c06\u9879\u76ee\u4ed3\u5e93\u590d\u5236\u5230\u672c\u5730\uff1a\\n  ```bash\\n  git clone https://github.com/syzomnia-el/osu-searcher\\n  ```\\n- \u4e5f\u53ef\u4ee5\u901a\u8fc7\u4e0b\u8f7d\u538b\u7f29\u5305\u6765\u83b7\u53d6\u3002\\n\\n## \u4f7f\u7528\\n\\n1. \u6253\u5f00 osu!searcher \u7684\u6240\u5728\u76ee\u5f55\u3002\\n2. \u8fd0\u884c `startup.cmd`\uff08\u6216 `startup.sh`\uff09\u811a\u672c\u3002\\n3. \u9996\u6b21\u4f7f\u7528\u65f6\uff0c\u9700\u8981\u5148\u8f93\u5165\u8c31\u9762\u6240\u5728\u6587\u4ef6\u5939\u7684\u7edd\u5bf9\u8def\u5f84\u3002\\n\\n## \u547d\u4ee4\\n\\n| \u547d\u4ee4                   | \u63cf\u8ff0              |\\n|----------------------|-----------------|\\n| check                | \u68c0\u67e5\u91cd\u590d\u7684\u8c31\u9762         |\\n| exit                 | \u9000\u51fa osu!searcher |\\n| find &lt;keyword&gt; | \u6309\u5173\u952e\u8bcd\u7b5b\u9009\u8c31\u9762        |\\n| flush                | \u5237\u65b0\u8c31\u9762\u4fe1\u606f\u7f13\u5b58        |\\n| list                 | \u67e5\u770b\u6240\u6709\u672c\u5730\u8c31\u9762        |\\n| path                 | \u4fee\u6539\u8c31\u9762\u5b58\u50a8\u8def\u5f84        |\\n\\n## \u8bb8\u53ef\u8bc1\\n\\nosu!searcher \u57fa\u4e8e [MIT License](https://opensource.org/licenses/MIT)\\n\u6388\u4e88\u8bb8\u53ef\u3002\u8be6\u60c5\u8bf7\u89c1[\u8bb8\u53ef\u8bc1](https://github.com/syzomnia-el/osu-searcher/blob/main/LICENSE)\u3002"}]}')}}]);