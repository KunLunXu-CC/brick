(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{771:function(e,t,n){"use strict";n.r(t),n.d(t,"conf",(function(){return r})),n.d(t,"language",(function(){return s}));var r={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\$\-\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{blockComment:["###","###"],lineComment:"#"},folding:{markers:{start:new RegExp("^\\s*#region\\b"),end:new RegExp("^\\s*#endregion\\b")}}},s={defaultToken:"",ignoreCase:!1,tokenPostfix:".mips",regEx:/\/(?!\/\/)(?:[^\/\\]|\\.)*\/[igm]*/,keywords:[".data",".text","syscall","trap","add","addu","addi","addiu","and","andi","div","divu","mult","multu","nor","or","ori","sll","slv","sra","srav","srl","srlv","sub","subu","xor","xori","lhi","lho","lhi","llo","slt","slti","sltu","sltiu","beq","bgtz","blez","bne","j","jal","jalr","jr","lb","lbu","lh","lhu","lw","li","la","sb","sh","sw","mfhi","mflo","mthi","mtlo","move"],symbols:/[\.,\:]+/,escapes:/\\(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/\$[a-zA-Z_]\w*/,"variable.predefined"],[/[.a-zA-Z_]\w*/,{cases:{this:"variable.predefined","@keywords":{token:"keyword.$0"},"@default":""}}],[/[ \t\r\n]+/,""],[/#.*$/,"comment"],["///",{token:"regexp",next:"@hereregexp"}],[/^(\s*)(@regEx)/,["","regexp"]],[/(\,)(\s*)(@regEx)/,["delimiter","","regexp"]],[/(\:)(\s*)(@regEx)/,["delimiter","","regexp"]],[/@symbols/,"delimiter"],[/\d+[eE]([\-+]?\d+)?/,"number.float"],[/\d+\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/0[0-7]+(?!\d)/,"number.octal"],[/\d+/,"number"],[/[,.]/,"delimiter"],[/"""/,"string",'@herestring."""'],[/'''/,"string","@herestring.'''"],[/"/,{cases:{"@eos":"string","@default":{token:"string",next:'@string."'}}}],[/'/,{cases:{"@eos":"string","@default":{token:"string",next:"@string.'"}}}]],string:[[/[^"'\#\\]+/,"string"],[/@escapes/,"string.escape"],[/\./,"string.escape.invalid"],[/\./,"string.escape.invalid"],[/#{/,{cases:{'$S2=="':{token:"string",next:"root.interpolatedstring"},"@default":"string"}}],[/["']/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":"string"}}],[/#/,"string"]],herestring:[[/("""|''')/,{cases:{"$1==$S2":{token:"string",next:"@pop"},"@default":"string"}}],[/[^#\\'"]+/,"string"],[/['"]+/,"string"],[/@escapes/,"string.escape"],[/\./,"string.escape.invalid"],[/#{/,{token:"string.quote",next:"root.interpolatedstring"}],[/#/,"string"]],comment:[[/[^#]+/,"comment"],[/#/,"comment"]],hereregexp:[[/[^\\\/#]+/,"regexp"],[/\\./,"regexp"],[/#.*$/,"comment"],["///[igm]*",{token:"regexp",next:"@pop"}],[/\//,"regexp"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL21pcHMvbWlwcy5qcyJdLCJuYW1lcyI6WyJjb25mIiwid29yZFBhdHRlcm4iLCJjb21tZW50cyIsImJsb2NrQ29tbWVudCIsImxpbmVDb21tZW50IiwiZm9sZGluZyIsIm1hcmtlcnMiLCJzdGFydCIsIlJlZ0V4cCIsImVuZCIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwiaWdub3JlQ2FzZSIsInRva2VuUG9zdGZpeCIsInJlZ0V4Iiwia2V5d29yZHMiLCJzeW1ib2xzIiwiZXNjYXBlcyIsInRva2VuaXplciIsInJvb3QiLCJjYXNlcyIsInRva2VuIiwibmV4dCIsInN0cmluZyIsImhlcmVzdHJpbmciLCJjb21tZW50IiwiaGVyZXJlZ2V4cCJdLCJtYXBwaW5ncyI6IjJGQUFBLHFGQUtPLElBQUlBLEVBQU8sQ0FDZEMsWUFBYSx3RkFDYkMsU0FBVSxDQUNOQyxhQUFjLENBQUMsTUFBTyxPQUN0QkMsWUFBYSxLQUVqQkMsUUFBUyxDQUNMQyxRQUFTLENBQ0xDLE1BQU8sSUFBSUMsT0FBTyxtQkFDbEJDLElBQUssSUFBSUQsT0FBTyx5QkFJakJFLEVBQVcsQ0FDbEJDLGFBQWMsR0FDZEMsWUFBWSxFQUNaQyxhQUFjLFFBQ2RDLE1BQU8scUNBQ1BDLFNBQVUsQ0FDTixRQUFTLFFBQVMsVUFBVyxPQUM3QixNQUFPLE9BQVEsT0FBUSxRQUFTLE1BQU8sT0FDdkMsTUFBTyxPQUFRLE9BQVEsUUFBUyxNQUFPLEtBQU0sTUFDN0MsTUFBTyxNQUFPLE1BQU8sT0FBUSxNQUFPLE9BQ3BDLE1BQU8sT0FBUSxNQUFPLE9BQVEsTUFBTyxNQUNyQyxNQUFPLE1BQU8sTUFBTyxPQUFRLE9BQVEsUUFDckMsTUFBTyxPQUFRLE9BQVEsTUFBTyxJQUFLLE1BQU8sT0FBUSxLQUNsRCxLQUFNLE1BQU8sS0FBTSxNQUFPLEtBQU0sS0FBTSxLQUN0QyxLQUFNLEtBQU0sS0FBTSxPQUFRLE9BQVEsT0FBUSxPQUFRLFFBR3REQyxRQUFTLFdBQ1RDLFFBQVMseUVBRVRDLFVBQVcsQ0FDUEMsS0FBTSxDQUVGLENBQUMsaUJBQWtCLHVCQUNuQixDQUFDLGdCQUFpQixDQUNWQyxNQUFPLENBQ0gsS0FBUSxzQkFDUixZQUFhLENBQUVDLE1BQU8sY0FDdEIsV0FBWSxNQUl4QixDQUFDLGFBQWMsSUFFZixDQUFDLE9BQVEsV0FFVCxDQUFDLE1BQU8sQ0FBRUEsTUFBTyxTQUFVQyxLQUFNLGdCQUNqQyxDQUFDLGlCQUFrQixDQUFDLEdBQUksV0FDeEIsQ0FBQyxvQkFBcUIsQ0FBQyxZQUFhLEdBQUksV0FDeEMsQ0FBQyxvQkFBcUIsQ0FBQyxZQUFhLEdBQUksV0FFeEMsQ0FBQyxXQUFZLGFBRWIsQ0FBQyxzQkFBdUIsZ0JBQ3hCLENBQUMsMkJBQTRCLGdCQUM3QixDQUFDLG9CQUFxQixjQUN0QixDQUFDLGdCQUFpQixnQkFDbEIsQ0FBQyxNQUFPLFVBRVIsQ0FBQyxPQUFRLGFBRVQsQ0FBQyxNQUFPLFNBQVUsbUJBQ2xCLENBQUMsTUFBTyxTQUFVLG1CQUNsQixDQUFDLElBQUssQ0FDRUYsTUFBTyxDQUNILE9BQVEsU0FDUixXQUFZLENBQUVDLE1BQU8sU0FBVUMsS0FBTSxnQkFHakQsQ0FBQyxJQUFLLENBQ0VGLE1BQU8sQ0FDSCxPQUFRLFNBQ1IsV0FBWSxDQUFFQyxNQUFPLFNBQVVDLEtBQU0saUJBSXJEQyxPQUFRLENBQ0osQ0FBQyxhQUFjLFVBQ2YsQ0FBQyxXQUFZLGlCQUNiLENBQUMsS0FBTSx5QkFDUCxDQUFDLEtBQU0seUJBQ1AsQ0FBQyxLQUFNLENBQ0NILE1BQU8sQ0FDSCxTQUFVLENBQUVDLE1BQU8sU0FBVUMsS0FBTSwyQkFDbkMsV0FBWSxZQUd4QixDQUFDLE9BQVEsQ0FDREYsTUFBTyxDQUNILFVBQVcsQ0FBRUMsTUFBTyxTQUFVQyxLQUFNLFFBQ3BDLFdBQVksWUFHeEIsQ0FBQyxJQUFLLFdBRVZFLFdBQVksQ0FDUixDQUFDLFlBQWEsQ0FDTkosTUFBTyxDQUNILFVBQVcsQ0FBRUMsTUFBTyxTQUFVQyxLQUFNLFFBQ3BDLFdBQVksWUFHeEIsQ0FBQyxZQUFhLFVBQ2QsQ0FBQyxRQUFTLFVBQ1YsQ0FBQyxXQUFZLGlCQUNiLENBQUMsS0FBTSx5QkFDUCxDQUFDLEtBQU0sQ0FBRUQsTUFBTyxlQUFnQkMsS0FBTSw0QkFDdEMsQ0FBQyxJQUFLLFdBRVZHLFFBQVMsQ0FDTCxDQUFDLFFBQVMsV0FDVixDQUFDLElBQUssWUFFVkMsV0FBWSxDQUNSLENBQUMsWUFBYSxVQUNkLENBQUMsTUFBTyxVQUNSLENBQUMsT0FBUSxXQUNULENBQUMsWUFBYSxDQUFFTCxNQUFPLFNBQVVDLEtBQU0sU0FDdkMsQ0FBQyxLQUFNIiwiZmlsZSI6ImpzLzI4Ljg5ZjY5MTk3MjEyMTE5NzlhNDQ2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcIyVcXF5cXCZcXCpcXChcXClcXD1cXCRcXC1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcP1xcc10rKS9nLFxyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnIyMjJywgJyMjIyddLFxyXG4gICAgICAgIGxpbmVDb21tZW50OiAnIydcclxuICAgIH0sXHJcbiAgICBmb2xkaW5nOiB7XHJcbiAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cChcIl5cXFxccyojcmVnaW9uXFxcXGJcIiksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyojZW5kcmVnaW9uXFxcXGJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgaWdub3JlQ2FzZTogZmFsc2UsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcubWlwcycsXHJcbiAgICByZWdFeDogL1xcLyg/IVxcL1xcLykoPzpbXlxcL1xcXFxdfFxcXFwuKSpcXC9baWdtXSovLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICAnLmRhdGEnLCAnLnRleHQnLCAnc3lzY2FsbCcsICd0cmFwJyxcclxuICAgICAgICAnYWRkJywgJ2FkZHUnLCAnYWRkaScsICdhZGRpdScsICdhbmQnLCAnYW5kaScsXHJcbiAgICAgICAgJ2RpdicsICdkaXZ1JywgJ211bHQnLCAnbXVsdHUnLCAnbm9yJywgJ29yJywgJ29yaScsXHJcbiAgICAgICAgJ3NsbCcsICdzbHYnLCAnc3JhJywgJ3NyYXYnLCAnc3JsJywgJ3NybHYnLFxyXG4gICAgICAgICdzdWInLCAnc3VidScsICd4b3InLCAneG9yaScsICdsaGknLCAnbGhvJyxcclxuICAgICAgICAnbGhpJywgJ2xsbycsICdzbHQnLCAnc2x0aScsICdzbHR1JywgJ3NsdGl1JyxcclxuICAgICAgICAnYmVxJywgJ2JndHonLCAnYmxleicsICdibmUnLCAnaicsICdqYWwnLCAnamFscicsICdqcicsXHJcbiAgICAgICAgJ2xiJywgJ2xidScsICdsaCcsICdsaHUnLCAnbHcnLCAnbGknLCAnbGEnLFxyXG4gICAgICAgICdzYicsICdzaCcsICdzdycsICdtZmhpJywgJ21mbG8nLCAnbXRoaScsICdtdGxvJywgJ21vdmUnLFxyXG4gICAgXSxcclxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgIHN5bWJvbHM6IC9bXFwuLFxcOl0rLyxcclxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInJF18eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xyXG4gICAgICAgICAgICBbL1xcJFthLXpBLVpfXVxcdyovLCAndmFyaWFibGUucHJlZGVmaW5lZCddLFxyXG4gICAgICAgICAgICBbL1suYS16QS1aX11cXHcqLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aGlzJzogJ3ZhcmlhYmxlLnByZWRlZmluZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxyXG4gICAgICAgICAgICAvLyBDb21tZW50c1xyXG4gICAgICAgICAgICBbLyMuKiQvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICAvLyByZWd1bGFyIGV4cHJlc3Npb25zXHJcbiAgICAgICAgICAgIFsnLy8vJywgeyB0b2tlbjogJ3JlZ2V4cCcsIG5leHQ6ICdAaGVyZXJlZ2V4cCcgfV0sXHJcbiAgICAgICAgICAgIFsvXihcXHMqKShAcmVnRXgpLywgWycnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICBbLyhcXCwpKFxccyopKEByZWdFeCkvLCBbJ2RlbGltaXRlcicsICcnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICBbLyhcXDopKFxccyopKEByZWdFeCkvLCBbJ2RlbGltaXRlcicsICcnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzXHJcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIC8vIG51bWJlcnNcclxuICAgICAgICAgICAgWy9cXGQrW2VFXShbXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbL1xcZCtcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl0rLywgJ251bWJlci5oZXgnXSxcclxuICAgICAgICAgICAgWy8wWzAtN10rKD8hXFxkKS8sICdudW1iZXIub2N0YWwnXSxcclxuICAgICAgICAgICAgWy9cXGQrLywgJ251bWJlciddLFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXI6IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXHJcbiAgICAgICAgICAgIFsvWywuXS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgLy8gc3RyaW5nczpcclxuICAgICAgICAgICAgWy9cIlwiXCIvLCAnc3RyaW5nJywgJ0BoZXJlc3RyaW5nLlwiXCJcIiddLFxyXG4gICAgICAgICAgICBbLycnJy8sICdzdHJpbmcnLCAnQGhlcmVzdHJpbmcuXFwnXFwnXFwnJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAc3RyaW5nLlwiJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvJy8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0BzdHJpbmcuXFwnJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlwiJ1xcI1xcXFxdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1xcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy8jey8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1cIic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAncm9vdC5pbnRlcnBvbGF0ZWRzdHJpbmcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvW1wiJ10vLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvIy8sICdzdHJpbmcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaGVyZXN0cmluZzogW1xyXG4gICAgICAgICAgICBbLyhcIlwiXCJ8JycnKS8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJDE9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy9bXiNcXFxcJ1wiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvWydcIl0rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvI3svLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ3Jvb3QuaW50ZXJwb2xhdGVkc3RyaW5nJyB9XSxcclxuICAgICAgICAgICAgWy8jLywgJ3N0cmluZyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvW14jXSsvLCAnY29tbWVudCcsXSxcclxuICAgICAgICAgICAgWy8jLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGhlcmVyZWdleHA6IFtcclxuICAgICAgICAgICAgWy9bXlxcXFxcXC8jXSsvLCAncmVnZXhwJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAncmVnZXhwJ10sXHJcbiAgICAgICAgICAgIFsvIy4qJC8sICdjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsnLy8vW2lnbV0qJywgeyB0b2tlbjogJ3JlZ2V4cCcsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy9cXC8vLCAncmVnZXhwJ10sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=