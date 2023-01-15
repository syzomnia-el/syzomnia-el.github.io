"use strict";(self.webpackChunkel_furnia=self.webpackChunkel_furnia||[]).push([[477],{10:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2022/09/27/differences-between-pre-plus-and-post-plus","metadata":{"permalink":"/blog/2022/09/27/differences-between-pre-plus-and-post-plus","editUrl":"https://github.com/syzomnia-el/el-furnia/edit/main/blog/2022-09-27-differences-between-pre-plus-and-post-plus.md","source":"@site/blog/2022-09-27-differences-between-pre-plus-and-post-plus.md","title":"++i \u4e0e i++ \u7684\u533a\u522b","description":"++i \u4e0e i++ \u4e24\u8005\u6709\u4f55\u533a\u522b\uff1f","date":"2022-09-27T00:00:00.000Z","formattedDate":"2022\u5e749\u670827\u65e5","tags":[{"label":"\u8bed\u6cd5\u7ec6\u8282","permalink":"/blog/tags/\u8bed\u6cd5\u7ec6\u8282"}],"hasTruncateMarker":true,"authors":[{"name":"Syzomnia El","title":"El Furnia \u6240\u6709\u8005","url":"https://syzomnia-el.github.io","imageURL":"https://s2.loli.net/2022/09/01/yAC4vVKehGoLHfu.webp","key":"el"}],"frontMatter":{"title":"++i \u4e0e i++ \u7684\u533a\u522b","authors":"el","tags":["\u8bed\u6cd5\u7ec6\u8282"]}},"content":"`++i` \u4e0e `i++` \u4e24\u8005\u6709\u4f55\u533a\u522b\uff1f\\n\\n\u5728\u6559\u5b66\u4e2d\uff0c\u8001\u5e08\u901a\u5e38\u5c06\u5176\u63cf\u8ff0\u4e3a\\n> `++i`\uff1a\u5148\u81ea\u589e\uff0c\u540e\u8d4b\u503c\\n>\\n> `i++`\uff1a\u5148\u8d4b\u503c\uff0c\u540e\u81ea\u589e\\n\\n\u4f46\u4e8b\u5b9e\u5e76\u4e0d\u662f\u50cf\u770b\u4e0a\u53bb\u90a3\u6837\u7b80\u5355\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u95ee\u9898\u63cf\u8ff0\\n\\n\u4ee5\u4e0b\u9762\u7684\u4ee3\u7801\u4e3a\u4f8b\uff1a\\n\\n```cpp\\nint i = 0;\\n++i;\\ncout << i << endl;\\n\\nint j = 0;\\nj++;\\ncout << j << endl;\\n\\nint k = 0;\\ncout << ++k << endl;\\n\\nint l = 0;\\ncout << l++ << endl;\\n```\\n\\n\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff1a\\n\\n```cpp\\n1\\n1\\n1\\n0\\n```\\n\\n\u4f3c\u4e4e\u5b8c\u5168\u7b26\u5408\u3002\u4f46\u5982\u679c\u5c06\u4ee3\u7801\u6539\u6210\u4e0b\u9762\u8fd9\u6837\uff0c\u7ed3\u679c\u4f1a\u662f\u4ec0\u4e48\uff1f\\n\\n```cpp\\nint i = 0;\\ni = ++i;\\ncout << i << endl;\\n\\nint j = 0;\\nj = j++;\\ncout << j << endl;\\n```\\n\\n\u6b63\u786e\u7b54\u6848\u662f\uff1a\\n\\n```cpp\\n1\\n0\\n```\\n\\n\u662f\u5426\u4e0e\u4f60\u9884\u671f\u7684\u7ed3\u679c\u4e0d\u592a\u4e00\u81f4\uff1f\u662f\u7684\uff0c\u8fd9\u5c31\u662f\u5173\u952e\u3002\\n\\n## \u5206\u6790\\n\\n\u4ece\u4e0a\u9762\u7684\u4f8b\u5b50\u6211\u4eec\u770b\u51fa\uff0c`i++` \u5e76\u975e\u7b80\u5355\u7684\u300c\u5148\u8d4b\u503c\uff0c\u540e\u81ea\u589e\u300d\u3002\\n\\n\u4e8b\u5b9e\u4e0a\uff0c\u7528 x86-64 gcc 12.2 \u7f16\u8bd1\u540e\uff0c\u67e5\u770b\u7f16\u8bd1\u6210\u7684\u6c47\u7f16\u4ee3\u7801\u53ef\u77e5\uff0c`i++` \u521b\u5efa\u4e86\u4e00\u4e2a\u4e2d\u95f4\u53d8\u91cf\uff0c\u5b9e\u9645\u53c2\u4e0e\u8d4b\u503c\u7684\u662f\u8fd9\u4e2a\u4e2d\u95f4\u53d8\u91cf\uff0c\u5373\\n\\n```cpp\\ni = i++;\\n```\\n\\n\u5f97\u5230\u5982\u4e0b\u6c47\u7f16\u4ee3\u7801\uff1a\\n\\n```assembly\\nmov eax, DWORD PTR [rbp-4]\\nlea edx, [rax+1]\\nmov DWORD PTR [rbp-4], edx\\nmov DWORD PTR [rbp-4], eax\\n```\\n\\n\u53ef\u4ee5\u89c6\u4f5c\\n\\n```cpp\\nint tmp1 = i;\\nint tmp2 = i + 1;\\ni = tmp2\\ni = tmp1;\\n```\\n\\n\u800c `++i` \u5219\u4e0d\u540c\uff0c\u5b83\u4f1a\u5bf9\u539f\u503c\u76f4\u63a5\u8fdb\u884c\u64cd\u4f5c\uff0c\u5373\\n\\n```cpp\\ni = ++i;\\n```\\n\\n\u5f97\u5230\u5982\u4e0b\u6c47\u7f16\u4ee3\u7801\uff1a\\n\\n```assembly\\nadd DWORD PTR [rbp-4], 1\\n```\\n\\n\u53ef\u4ee5\u89c6\u4f5c\\n\\n```cpp\\ni = i + 1;\\n```\\n\\n\u8fd9\u5c31\u89e3\u91ca\u4e86\u524d\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u4e3a\u4ec0\u4e48  `i = ++i` \u7684\u7ed3\u679c\u4e3a  `1`\uff0c\u4f46 `i = i++` \u7684\u7ed3\u679c\u5374\u4e3a `0`\u3002\\n\\n## \u8865\u5145\\n\\n\u5f53\u76f4\u63a5\u5355\u72ec\u4f7f\u7528\u65f6\uff0c\u5373\\n\\n```cpp\\ni++;\\n```\\n\\n\u6216\\n\\n```cpp\\n++i;\\n```\\n\\n\u5c06\u5f97\u5230\u5982\u4e0b\u6c47\u7f16\u4ee3\u7801\uff1a\\n\\n```assembly\\nadd DWORD PTR [rbp-4], 1\\n```\\n\\n\u6b64\u65f6\u7ecf\u7f16\u8bd1\u5668\u4f18\u5316\uff0c\u4e24\u8005\u5e76\u65e0\u5dee\u522b\u3002"}]}')}}]);