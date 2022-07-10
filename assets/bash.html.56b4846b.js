import{_ as e,o as a,c as s,a as i}from"./app.bd93003a.js";const n={},r=i(`<h1 id="bash" tabindex="-1"><a class="header-anchor" href="#bash" aria-hidden="true">#</a> Bash</h1><h2 id="profile-\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#profile-\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> Profile \u6267\u884C\u987A\u5E8F</h2><p>\u767B\u5F55 Linux \u65F6\uFF0C\u9996\u5148\u542F\u52A8 /etc/profile \u6587\u4EF6\uFF0C\u7136\u540E\u518D\u542F\u52A8\u7528\u6237\u76EE\u5F55\u4E0B\u7684 ~/.bash_profile\u3001 ~/.bash_login\u6216 ~/.profile\u6587\u4EF6\u4E2D\u7684\u5176\u4E2D\u4E00\u4E2A, \u4E00\u822C\u8FD8\u4F1A\u6267\u884C ~/.bashrc\u6587\u4EF6\u3002</p><p>~/.bash_logout\uFF0C\u6BCF\u6B21\u9000\u51FA\u7CFB\u7EDF\u6216\u9000\u51FAbash shell\u65F6,\u6267\u884C\u8BE5\u6587\u4EF6\u3002</p><p>\u2757\uFE0F\u6CE8\u610F: \u90E8\u5206\u7CFB\u7EDF\u53EA\u8BFB\u53D6~/.bashrc (\u4E0D\u8BFB\u53D6 ~/.bash_prfoile), \u5982 BusyBox</p><h2 id="bash-\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#bash-\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> Bash \u73AF\u5883\u53D8\u91CF</h2><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;"># \u516C\u5171
$LOGNAME: \u767B\u5F55\u7528\u6237\u540D
$HOME: \u5F53\u524D\u7528\u6237\u5BB6\u76EE\u5F55
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">export PS1=&quot;[\\u@\\H \\W]\\\\$ &quot;
export HISTTIMEFORMAT=&quot;%F %T \`whoami\` &quot;
export TMOUT=600    # 600 \u79D2\u5185\u7528\u6237\u65E0\u64CD\u4F5C\u5C31\u5B57\u6BB5\u65AD\u5F00\u7EC8\u7AEF
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u522B\u540D" aria-hidden="true">#</a> \u5E38\u7528\u522B\u540D</h2><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">alias ipsort=&quot;sort -t&quot;.&quot; -k1,1n  -k2,2n  -k3,3n  -k4,4n&quot;
alias ipsortr=&quot;sort -t&quot;.&quot; -k1,1nr -k2,2nr -k3,3nr -k4,4nr&quot;
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">date +&quot;%s&quot;      # uninx timestamp
date -d @1548987653     # linux, unix timestamp \u8F6C &quot;Fri Feb  1 10:20:53 CST 2019&quot;
sudo date -d 1548987653 # mac, unix timestamp \u8F6C &quot;Fri Feb  1 10:20:53 CST 2019&quot;
jq  # Command-line JSON processor, Download from https://github.com/stedolan/jq
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=[r];function l(t,o){return a(),s("div",null,d)}var u=e(n,[["render",l],["__file","bash.html.vue"]]);export{u as default};