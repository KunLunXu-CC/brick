(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[854],{60854:(e,t,r)=>{"use strict";r.r(t),r.d(t,{conf:()=>s,language:()=>n});var s={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\$\-\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{blockComment:["###","###"],lineComment:"#"},folding:{markers:{start:new RegExp("^\\s*#region\\b"),end:new RegExp("^\\s*#endregion\\b")}}},n={defaultToken:"",ignoreCase:!1,tokenPostfix:".mips",regEx:/\/(?!\/\/)(?:[^\/\\]|\\.)*\/[igm]*/,keywords:[".data",".text","syscall","trap","add","addu","addi","addiu","and","andi","div","divu","mult","multu","nor","or","ori","sll","slv","sra","srav","srl","srlv","sub","subu","xor","xori","lhi","lho","lhi","llo","slt","slti","sltu","sltiu","beq","bgtz","blez","bne","j","jal","jalr","jr","lb","lbu","lh","lhu","lw","li","la","sb","sh","sw","mfhi","mflo","mthi","mtlo","move"],symbols:/[\.,\:]+/,escapes:/\\(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/\$[a-zA-Z_]\w*/,"variable.predefined"],[/[.a-zA-Z_]\w*/,{cases:{this:"variable.predefined","@keywords":{token:"keyword.$0"},"@default":""}}],[/[ \t\r\n]+/,""],[/#.*$/,"comment"],["///",{token:"regexp",next:"@hereregexp"}],[/^(\s*)(@regEx)/,["","regexp"]],[/(\,)(\s*)(@regEx)/,["delimiter","","regexp"]],[/(\:)(\s*)(@regEx)/,["delimiter","","regexp"]],[/@symbols/,"delimiter"],[/\d+[eE]([\-+]?\d+)?/,"number.float"],[/\d+\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/0[0-7]+(?!\d)/,"number.octal"],[/\d+/,"number"],[/[,.]/,"delimiter"],[/"""/,"string",'@herestring."""'],[/'''/,"string","@herestring.'''"],[/"/,{cases:{"@eos":"string","@default":{token:"string",next:'@string."'}}}],[/'/,{cases:{"@eos":"string","@default":{token:"string",next:"@string.'"}}}]],string:[[/[^"'\#\\]+/,"string"],[/@escapes/,"string.escape"],[/\./,"string.escape.invalid"],[/\./,"string.escape.invalid"],[/#{/,{cases:{'$S2=="':{token:"string",next:"root.interpolatedstring"},"@default":"string"}}],[/["']/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":"string"}}],[/#/,"string"]],herestring:[[/("""|''')/,{cases:{"$1==$S2":{token:"string",next:"@pop"},"@default":"string"}}],[/[^#\\'"]+/,"string"],[/['"]+/,"string"],[/@escapes/,"string.escape"],[/\./,"string.escape.invalid"],[/#{/,{token:"string.quote",next:"root.interpolatedstring"}],[/#/,"string"]],comment:[[/[^#]+/,"comment"],[/#/,"comment"]],hereregexp:[[/[^\\\/#]+/,"regexp"],[/\\./,"regexp"],[/#.*$/,"comment"],["///[igm]*",{token:"regexp",next:"@pop"}],[/\//,"regexp"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9taXBzL21pcHMuanMiXSwibmFtZXMiOlsiY29uZiIsIndvcmRQYXR0ZXJuIiwiY29tbWVudHMiLCJibG9ja0NvbW1lbnQiLCJsaW5lQ29tbWVudCIsImZvbGRpbmciLCJtYXJrZXJzIiwic3RhcnQiLCJSZWdFeHAiLCJlbmQiLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsImlnbm9yZUNhc2UiLCJ0b2tlblBvc3RmaXgiLCJyZWdFeCIsImtleXdvcmRzIiwic3ltYm9scyIsImVzY2FwZXMiLCJ0b2tlbml6ZXIiLCJyb290IiwiY2FzZXMiLCJ0aGlzIiwidG9rZW4iLCJuZXh0Iiwic3RyaW5nIiwiaGVyZXN0cmluZyIsImNvbW1lbnQiLCJoZXJlcmVnZXhwIl0sIm1hcHBpbmdzIjoic0lBSU8sSUFBSUEsRUFBTyxDQUNkQyxZQUFhLHdGQUNiQyxTQUFVLENBQ05DLGFBQWMsQ0FBQyxNQUFPLE9BQ3RCQyxZQUFhLEtBRWpCQyxRQUFTLENBQ0xDLFFBQVMsQ0FDTEMsTUFBTyxJQUFJQyxPQUFPLG1CQUNsQkMsSUFBSyxJQUFJRCxPQUFPLHlCQUlqQkUsRUFBVyxDQUNsQkMsYUFBYyxHQUNkQyxZQUFZLEVBQ1pDLGFBQWMsUUFDZEMsTUFBTyxxQ0FDUEMsU0FBVSxDQUNOLFFBQ0EsUUFDQSxVQUNBLE9BQ0EsTUFDQSxPQUNBLE9BQ0EsUUFDQSxNQUNBLE9BQ0EsTUFDQSxPQUNBLE9BQ0EsUUFDQSxNQUNBLEtBQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxPQUNBLE1BQ0EsT0FDQSxNQUNBLE9BQ0EsTUFDQSxPQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxPQUNBLE9BQ0EsUUFDQSxNQUNBLE9BQ0EsT0FDQSxNQUNBLElBQ0EsTUFDQSxPQUNBLEtBQ0EsS0FDQSxNQUNBLEtBQ0EsTUFDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxPQUNBLE9BQ0EsT0FDQSxPQUNBLFFBR0pDLFFBQVMsV0FDVEMsUUFBUyx5RUFFVEMsVUFBVyxDQUNQQyxLQUFNLENBRUYsQ0FBQyxpQkFBa0IsdUJBQ25CLENBQ0ksZ0JBQ0EsQ0FDSUMsTUFBTyxDQUNIQyxLQUFNLHNCQUNOLFlBQWEsQ0FBRUMsTUFBTyxjQUN0QixXQUFZLE1BS3hCLENBQUMsYUFBYyxJQUVmLENBQUMsT0FBUSxXQUVULENBQUMsTUFBTyxDQUFFQSxNQUFPLFNBQVVDLEtBQU0sZ0JBQ2pDLENBQUMsaUJBQWtCLENBQUMsR0FBSSxXQUN4QixDQUFDLG9CQUFxQixDQUFDLFlBQWEsR0FBSSxXQUN4QyxDQUFDLG9CQUFxQixDQUFDLFlBQWEsR0FBSSxXQUV4QyxDQUFDLFdBQVksYUFFYixDQUFDLHNCQUF1QixnQkFDeEIsQ0FBQywyQkFBNEIsZ0JBQzdCLENBQUMsb0JBQXFCLGNBQ3RCLENBQUMsZ0JBQWlCLGdCQUNsQixDQUFDLE1BQU8sVUFFUixDQUFDLE9BQVEsYUFFVCxDQUFDLE1BQU8sU0FBVSxtQkFDbEIsQ0FBQyxNQUFPLFNBQVUsbUJBQ2xCLENBQ0ksSUFDQSxDQUNJSCxNQUFPLENBQ0gsT0FBUSxTQUNSLFdBQVksQ0FBRUUsTUFBTyxTQUFVQyxLQUFNLGdCQUlqRCxDQUNJLElBQ0EsQ0FDSUgsTUFBTyxDQUNILE9BQVEsU0FDUixXQUFZLENBQUVFLE1BQU8sU0FBVUMsS0FBTSxpQkFLckRDLE9BQVEsQ0FDSixDQUFDLGFBQWMsVUFDZixDQUFDLFdBQVksaUJBQ2IsQ0FBQyxLQUFNLHlCQUNQLENBQUMsS0FBTSx5QkFDUCxDQUNJLEtBQ0EsQ0FDSUosTUFBTyxDQUNILFNBQVUsQ0FDTkUsTUFBTyxTQUNQQyxLQUFNLDJCQUVWLFdBQVksWUFJeEIsQ0FDSSxPQUNBLENBQ0lILE1BQU8sQ0FDSCxVQUFXLENBQUVFLE1BQU8sU0FBVUMsS0FBTSxRQUNwQyxXQUFZLFlBSXhCLENBQUMsSUFBSyxXQUVWRSxXQUFZLENBQ1IsQ0FDSSxZQUNBLENBQ0lMLE1BQU8sQ0FDSCxVQUFXLENBQUVFLE1BQU8sU0FBVUMsS0FBTSxRQUNwQyxXQUFZLFlBSXhCLENBQUMsWUFBYSxVQUNkLENBQUMsUUFBUyxVQUNWLENBQUMsV0FBWSxpQkFDYixDQUFDLEtBQU0seUJBQ1AsQ0FBQyxLQUFNLENBQUVELE1BQU8sZUFBZ0JDLEtBQU0sNEJBQ3RDLENBQUMsSUFBSyxXQUVWRyxRQUFTLENBQ0wsQ0FBQyxRQUFTLFdBQ1YsQ0FBQyxJQUFLLFlBRVZDLFdBQVksQ0FDUixDQUFDLFlBQWEsVUFDZCxDQUFDLE1BQU8sVUFDUixDQUFDLE9BQVEsV0FDVCxDQUFDLFlBQWEsQ0FBRUwsTUFBTyxTQUFVQyxLQUFNLFNBQ3ZDLENBQUMsS0FBTSIsImZpbGUiOiJqcy84NTQuZDE2NTM1ZGY0M2IwMTI5YjkwNjUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcIyVcXF5cXCZcXCpcXChcXClcXD1cXCRcXC1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcP1xcc10rKS9nLFxyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnIyMjJywgJyMjIyddLFxyXG4gICAgICAgIGxpbmVDb21tZW50OiAnIydcclxuICAgIH0sXHJcbiAgICBmb2xkaW5nOiB7XHJcbiAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKiNyZWdpb25cXFxcYicpLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ15cXFxccyojZW5kcmVnaW9uXFxcXGInKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICBpZ25vcmVDYXNlOiBmYWxzZSxcclxuICAgIHRva2VuUG9zdGZpeDogJy5taXBzJyxcclxuICAgIHJlZ0V4OiAvXFwvKD8hXFwvXFwvKSg/OlteXFwvXFxcXF18XFxcXC4pKlxcL1tpZ21dKi8sXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICcuZGF0YScsXHJcbiAgICAgICAgJy50ZXh0JyxcclxuICAgICAgICAnc3lzY2FsbCcsXHJcbiAgICAgICAgJ3RyYXAnLFxyXG4gICAgICAgICdhZGQnLFxyXG4gICAgICAgICdhZGR1JyxcclxuICAgICAgICAnYWRkaScsXHJcbiAgICAgICAgJ2FkZGl1JyxcclxuICAgICAgICAnYW5kJyxcclxuICAgICAgICAnYW5kaScsXHJcbiAgICAgICAgJ2RpdicsXHJcbiAgICAgICAgJ2RpdnUnLFxyXG4gICAgICAgICdtdWx0JyxcclxuICAgICAgICAnbXVsdHUnLFxyXG4gICAgICAgICdub3InLFxyXG4gICAgICAgICdvcicsXHJcbiAgICAgICAgJ29yaScsXHJcbiAgICAgICAgJ3NsbCcsXHJcbiAgICAgICAgJ3NsdicsXHJcbiAgICAgICAgJ3NyYScsXHJcbiAgICAgICAgJ3NyYXYnLFxyXG4gICAgICAgICdzcmwnLFxyXG4gICAgICAgICdzcmx2JyxcclxuICAgICAgICAnc3ViJyxcclxuICAgICAgICAnc3VidScsXHJcbiAgICAgICAgJ3hvcicsXHJcbiAgICAgICAgJ3hvcmknLFxyXG4gICAgICAgICdsaGknLFxyXG4gICAgICAgICdsaG8nLFxyXG4gICAgICAgICdsaGknLFxyXG4gICAgICAgICdsbG8nLFxyXG4gICAgICAgICdzbHQnLFxyXG4gICAgICAgICdzbHRpJyxcclxuICAgICAgICAnc2x0dScsXHJcbiAgICAgICAgJ3NsdGl1JyxcclxuICAgICAgICAnYmVxJyxcclxuICAgICAgICAnYmd0eicsXHJcbiAgICAgICAgJ2JsZXonLFxyXG4gICAgICAgICdibmUnLFxyXG4gICAgICAgICdqJyxcclxuICAgICAgICAnamFsJyxcclxuICAgICAgICAnamFscicsXHJcbiAgICAgICAgJ2pyJyxcclxuICAgICAgICAnbGInLFxyXG4gICAgICAgICdsYnUnLFxyXG4gICAgICAgICdsaCcsXHJcbiAgICAgICAgJ2xodScsXHJcbiAgICAgICAgJ2x3JyxcclxuICAgICAgICAnbGknLFxyXG4gICAgICAgICdsYScsXHJcbiAgICAgICAgJ3NiJyxcclxuICAgICAgICAnc2gnLFxyXG4gICAgICAgICdzdycsXHJcbiAgICAgICAgJ21maGknLFxyXG4gICAgICAgICdtZmxvJyxcclxuICAgICAgICAnbXRoaScsXHJcbiAgICAgICAgJ210bG8nLFxyXG4gICAgICAgICdtb3ZlJ1xyXG4gICAgXSxcclxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgIHN5bWJvbHM6IC9bXFwuLFxcOl0rLyxcclxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInJF18eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xyXG4gICAgICAgICAgICBbL1xcJFthLXpBLVpfXVxcdyovLCAndmFyaWFibGUucHJlZGVmaW5lZCddLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvWy5hLXpBLVpfXVxcdyovLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXM6ICd2YXJpYWJsZS5wcmVkZWZpbmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXHJcbiAgICAgICAgICAgIC8vIENvbW1lbnRzXHJcbiAgICAgICAgICAgIFsvIy4qJC8sICdjb21tZW50J10sXHJcbiAgICAgICAgICAgIC8vIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgICAgICAgICAgWycvLy8nLCB7IHRva2VuOiAncmVnZXhwJywgbmV4dDogJ0BoZXJlcmVnZXhwJyB9XSxcclxuICAgICAgICAgICAgWy9eKFxccyopKEByZWdFeCkvLCBbJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIFsvKFxcLCkoXFxzKikoQHJlZ0V4KS8sIFsnZGVsaW1pdGVyJywgJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIFsvKFxcOikoXFxzKikoQHJlZ0V4KS8sIFsnZGVsaW1pdGVyJywgJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnNcclxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgLy8gbnVtYmVyc1xyXG4gICAgICAgICAgICBbL1xcZCtbZUVdKFtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvXFxkK1xcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSsvLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgICAgICBbLzBbMC03XSsoPyFcXGQpLywgJ251bWJlci5vY3RhbCddLFxyXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcclxuICAgICAgICAgICAgWy9bLC5dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzOlxyXG4gICAgICAgICAgICBbL1wiXCJcIi8sICdzdHJpbmcnLCAnQGhlcmVzdHJpbmcuXCJcIlwiJ10sXHJcbiAgICAgICAgICAgIFsvJycnLywgJ3N0cmluZycsIFwiQGhlcmVzdHJpbmcuJycnXCJdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvXCIvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHN0cmluZy5cIicgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLycvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiBcIkBzdHJpbmcuJ1wiIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teXCInXFwjXFxcXF0rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvI3svLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckUzI9PVwiJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ3Jvb3QuaW50ZXJwb2xhdGVkc3RyaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL1tcIiddLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsvIy8sICdzdHJpbmcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaGVyZXN0cmluZzogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvKFwiXCJcInwnJycpLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJDE9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsvW14jXFxcXCdcIl0rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL1snXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbLyN7LywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdyb290LmludGVycG9sYXRlZHN0cmluZycgfV0sXHJcbiAgICAgICAgICAgIFsvIy8sICdzdHJpbmcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1teI10rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy8jLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaGVyZXJlZ2V4cDogW1xyXG4gICAgICAgICAgICBbL1teXFxcXFxcLyNdKy8sICdyZWdleHAnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdyZWdleHAnXSxcclxuICAgICAgICAgICAgWy8jLiokLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWycvLy9baWdtXSonLCB7IHRva2VuOiAncmVnZXhwJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbL1xcLy8sICdyZWdleHAnXVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==