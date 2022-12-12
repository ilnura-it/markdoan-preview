$(window).onload(defaultView());
function defaultView (){
   const defaultText =`
# H1 HEADING  HELLO 

## H2 sub-heading

**Important Bold Text**

[Free Code Camp](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)


List to do:

  * apples
  * oranges
  * banana


List to Buy:

  1. apples
  2. oranges
  3. banana


  > Aldous Huxley, Brave New World


  ![This is an image](https://www.nicepng.com/png/full/146-1466677_snapchat-ghost-by-cocomishelle-small-size-please-transparent.png)


  <dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\` Inline Code is here \`

  \`\`\`
   A code block!
  \`\`\`
`
$('#editor').val(defaultText);
document.querySelector("#preview").innerHTML = marked.parse(defaultText);
}

function previewFunc(){ 
   $('#preview').html(marked.parse($('#editor').val()));
 }


marked.setOptions({
   renderer: new marked.Renderer(),
   highlight: function(code, lang) {
     const hljs = require('highlight.js');
     const language = hljs.getLanguage(lang) ? lang : 'plaintext';
     return hljs.highlight(code, { language }).value;
   },
   langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
   pedantic: false,
   gfm: true,
   breaks: false,
   sanitize: false,
   smartLists: true,
   smartypants: false,
   xhtml: false
 });






 


