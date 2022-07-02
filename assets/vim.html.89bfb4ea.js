import{_ as i,o as n,c as e,a as l}from"./app.a1a51de6.js";const s={},d=l(`<h1 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> VIM</h1><p>vundle \u642D\u5EFA\u5F88\u65B9\u4FBF</p><ol><li><p>git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/Vundle.vim</p></li><li><p>\u4FEE\u6539 .vimrc</p></li><li><p>\u6253\u5F00vim\u5728\u5E95\u884C\u6A21\u5F0F\u4E0B\u8F93\u5165 BundleInstall</p></li><li><p>\u5982\u679C\u8FD8\u9700\u8981\u5176\u4ED6\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528 BundleSearch \u8FDB\u884C\u5728\u7EBF\u67E5\u627E\u63D2\u4EF6</p></li></ol><h2 id="\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u5185\u5BB9</h2><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">filetype off
syntax on
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
&quot; \u52A0\u8F7D\u63D2\u4EF6
Plugin &#39;VundleVim/Vundle.vim&#39;
Plugin &#39;scrooloose/nerdtree&#39;
Plugin &#39;vim-airline/vim-airline&#39;
Plugin &#39;fatih/vim-go&#39;
Plugin &#39;vim-airline/vim-airline-themes&#39;
Plugin &#39;michaelHL/awesome-vim-colorschemes&#39;
Plugin &#39;Tagbar&#39;
Plugin &#39;Tabular&#39;
call vundle#end()
filetype plugin indent on     &quot; required

&quot; \u6253\u5F00\u81EA\u52A8\u5B9A\u4F4D\u5230\u6700\u540E\u7F16\u8F91\u7684\u4F4D\u7F6E, \u9700\u8981\u786E\u8BA4.viminfo\u5F53\u524D\u7528\u6237\u53EF\u5199
if has(&quot;autocmd&quot;)
    au BufReadPost * if line(&quot;&#39;\\&quot;&quot;) &gt; 1 &amp;&amp; line(&quot;&#39;\\&quot;&quot;) &lt;= line(&quot;$&quot;) | exe &quot;normal! g&#39;\\&quot;&quot; | endif
endif

&quot; \u5FEB\u6377\u952E
map &lt;C-h&gt; &lt;C-w&gt;&lt;C-h&gt;
map &lt;C-j&gt; &lt;C-w&gt;&lt;C-j&gt;
map &lt;C-l&gt; &lt;C-w&gt;&lt;C-l&gt;
map &lt;C-k&gt; &lt;C-w&gt;&lt;C-k&gt;

&quot;&lt;F2&gt;\u8BBE\u7F6E\u662F\u5426\u663E\u793A\u884C\u53F7
nnoremap &lt;silent&gt; &lt;F2&gt; :set number!&lt;CR&gt;
&quot;\u7A7A\u683C\u6253\u5F00\u5173\u95ED\u6298\u53E0
nnoremap &lt;space&gt; @=((foldclosed(line(&#39;.&#39;)) &lt; 0) ? &#39;zc&#39; : &#39;zo&#39;)&lt;CR&gt;
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u5DF2\u7ECF\u5C06 bash profile\uFF0Cvimrc \u7B49\u5B58\u653E\u5728 github \u79C1\u6709\u4ED3\u5E93\u4E2D\uFF0C\u6240\u4EE5\u4E0A\u8FF0\u914D\u7F6E\u5185\u5BB9\u8F83\u5C11\u3002</p><p>\u6709\u95EE\u9898\u7684\u540C\u5B66\uFF0C\u53EF\u4EE5\u968F\u65F6\u8054\u7CFB</p>`,7),t=[d];function a(v,u){return n(),e("div",null,t)}var m=i(s,[["render",a],["__file","vim.html.vue"]]);export{m as default};
