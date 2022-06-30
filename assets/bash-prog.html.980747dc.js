import{_ as i,r as t,o as r,c as o,b as e,d as s,e as a,a as d}from"./app.c1deff29.js";const l={},c=e("h1",{id:"bash-programming",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bash-programming","aria-hidden":"true"},"#"),a(" Bash Programming")],-1),h=e("h2",{id:"\u5B66\u4E60\u5730\u5740",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B66\u4E60\u5730\u5740","aria-hidden":"true"},"#"),a(" \u5B66\u4E60\u5730\u5740")],-1),u={href:"http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html",target:"_blank",rel:"noopener noreferrer"},m=a("BASH Programming - Introduction HOW-TO"),p=e("h2",{id:"\u7F16\u7A0B\u89C4\u8303",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7F16\u7A0B\u89C4\u8303","aria-hidden":"true"},"#"),a(" \u7F16\u7A0B\u89C4\u8303")],-1),v={href:"https://google.github.io/styleguide/shell.xml",target:"_blank",rel:"noopener noreferrer"},_=a("Google Shell Code Style"),b=d(`<h2 id="\u4E00\u4E9B-debug-\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B-debug-\u6280\u5DE7" aria-hidden="true">#</a> \u4E00\u4E9B Debug \u6280\u5DE7</h2><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">set -x
set -e
export PS4=&#39;+\${BASH_SOURCE}:\${LINENO}:\${FUNCNAME[0]}: &#39;
echo &quot;Today is $(date %Y-%m-%d)&quot;
set +x
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF4\u660E\uFF1A PS4 The value of this parameter is expanded as with PS1 and the value is printed before each command bash displays during an execution trace. The first character of PS4 is replicated multiple times, as neces-sary, to indicate multiple levels of indirection. The default is \u201D+ \u201D.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u65E5\u5FD7\u8F93\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">_log() {
    if [ &quot;$_DEBUG&quot; == &quot;true&quot; ]; then
        echo 1&gt;&amp;2 &quot;$@&quot;
    fi
}

</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,4);function g(f,x){const n=t("ExternalLinkIcon");return r(),o("div",null,[c,h,e("p",null,[e("a",u,[m,s(n)])]),p,e("p",null,[e("a",v,[_,s(n)])]),b])}var k=i(l,[["render",g],["__file","bash-prog.html.vue"]]);export{k as default};
