import{_ as e,o as s,c as a,a as t}from"./app.3a594b22.js";const n={},i=t(`<h1 id="systemctl" tabindex="-1"><a class="header-anchor" href="#systemctl" aria-hidden="true">#</a> systemctl</h1><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">systemctl restart airdb-caddywaf-live.service
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">sudo loginctl enable-linger ubuntu
systemctl --user restart airdb-caddywaf-live-sg.service
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[i];function c(r,d){return s(),a("div",null,l)}var u=e(n,[["render",c],["__file","systemd.html.vue"]]);export{u as default};