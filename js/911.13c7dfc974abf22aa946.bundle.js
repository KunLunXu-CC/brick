(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[911],{20911:(e,n,o)=>{"use strict";o.r(n),o.d(n,{conf:()=>s,language:()=>t});var s={comments:{lineComment:"--",blockComment:["--[[","]]"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}]},t={defaultToken:"",tokenPostfix:".lua",keywords:["and","break","do","else","elseif","end","false","for","function","goto","if","in","local","nil","not","or","repeat","return","then","true","until","while"],brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.array",open:"[",close:"]"},{token:"delimiter.parenthesis",open:"(",close:")"}],operators:["+","-","*","/","%","^","#","==","~=","<=",">=","<",">","=",";",":",",",".","..","..."],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/[a-zA-Z_]\w*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/(,)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/,["delimiter","","key","","delimiter"]],[/({)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/,["@brackets","","key","","delimiter"]],[/[{}()\[\]]/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,"number.hex"],[/\d+?/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string",'@string."'],[/'/,"string","@string.'"]],whitespace:[[/[ \t\r\n]+/,""],[/--\[([=]*)\[/,"comment","@comment.$1"],[/--.*$/,"comment"]],comment:[[/[^\]]+/,"comment"],[/\]([=]*)\]/,{cases:{"$1==$S2":{token:"comment",next:"@pop"},"@default":"comment"}}],[/./,"comment"]],string:[[/[^\\"']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/["']/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":"string"}}]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9sdWEvbHVhLmpzIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwiYmxvY2tDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwic3Vycm91bmRpbmdQYWlycyIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4Iiwia2V5d29yZHMiLCJ0b2tlbiIsIm9wZXJhdG9ycyIsInN5bWJvbHMiLCJlc2NhcGVzIiwidG9rZW5pemVyIiwicm9vdCIsImNhc2VzIiwiaW5jbHVkZSIsIndoaXRlc3BhY2UiLCJjb21tZW50IiwibmV4dCIsInN0cmluZyJdLCJtYXBwaW5ncyI6InNJQUlPLElBQUlBLEVBQU8sQ0FDZEMsU0FBVSxDQUNOQyxZQUFhLEtBQ2JDLGFBQWMsQ0FBQyxPQUFRLE9BRTNCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sTUFFeEJDLGlCQUFrQixDQUNkLENBQUVGLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sT0FHakJFLEVBQVcsQ0FDbEJDLGFBQWMsR0FDZEMsYUFBYyxPQUNkQyxTQUFVLENBQ04sTUFDQSxRQUNBLEtBQ0EsT0FDQSxTQUNBLE1BQ0EsUUFDQSxNQUNBLFdBQ0EsT0FDQSxLQUNBLEtBQ0EsUUFDQSxNQUNBLE1BQ0EsS0FDQSxTQUNBLFNBQ0EsT0FDQSxPQUNBLFFBQ0EsU0FFSlIsU0FBVSxDQUNOLENBQUVTLE1BQU8sb0JBQXFCUCxLQUFNLElBQUtDLE1BQU8sS0FDaEQsQ0FBRU0sTUFBTyxrQkFBbUJQLEtBQU0sSUFBS0MsTUFBTyxLQUM5QyxDQUFFTSxNQUFPLHdCQUF5QlAsS0FBTSxJQUFLQyxNQUFPLE1BRXhETyxVQUFXLENBQ1AsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsS0FDQSxPQUdKQyxRQUFTLHdCQUNUQyxRQUFTLHdFQUVUQyxVQUFXLENBQ1BDLEtBQU0sQ0FFRixDQUNJLGVBQ0EsQ0FDSUMsTUFBTyxDQUNILFlBQWEsQ0FBRU4sTUFBTyxjQUN0QixXQUFZLGdCQUt4QixDQUFFTyxRQUFTLGVBRVgsQ0FBQyxzQ0FBdUMsQ0FBQyxZQUFhLEdBQUksTUFBTyxHQUFJLGNBQ3JFLENBQUMsc0NBQXVDLENBQUMsWUFBYSxHQUFJLE1BQU8sR0FBSSxjQUVyRSxDQUFDLGFBQWMsYUFDZixDQUNJLFdBQ0EsQ0FDSUQsTUFBTyxDQUNILGFBQWMsWUFDZCxXQUFZLE1BS3hCLENBQUMsMkJBQTRCLGdCQUM3QixDQUFDLGdDQUFpQyxjQUNsQyxDQUFDLE9BQVEsVUFFVCxDQUFDLFFBQVMsYUFFVixDQUFDLGtCQUFtQixrQkFDcEIsQ0FBQyxrQkFBbUIsa0JBQ3BCLENBQUMsSUFBSyxTQUFVLGFBQ2hCLENBQUMsSUFBSyxTQUFVLGNBRXBCRSxXQUFZLENBQ1IsQ0FBQyxhQUFjLElBQ2YsQ0FBQyxlQUFnQixVQUFXLGVBQzVCLENBQUMsUUFBUyxZQUVkQyxRQUFTLENBQ0wsQ0FBQyxTQUFVLFdBQ1gsQ0FDSSxhQUNBLENBQ0lILE1BQU8sQ0FDSCxVQUFXLENBQUVOLE1BQU8sVUFBV1UsS0FBTSxRQUNyQyxXQUFZLGFBSXhCLENBQUMsSUFBSyxZQUVWQyxPQUFRLENBQ0osQ0FBQyxXQUFZLFVBQ2IsQ0FBQyxXQUFZLGlCQUNiLENBQUMsTUFBTyx5QkFDUixDQUNJLE9BQ0EsQ0FDSUwsTUFBTyxDQUNILFVBQVcsQ0FBRU4sTUFBTyxTQUFVVSxLQUFNLFFBQ3BDLFdBQVkiLCJmaWxlIjoianMvOTExLjEzYzdkZmM5NzRhYmYyMmFhOTQ2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnLS0nLFxyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWyctLVtbJywgJ11dJ11cclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cclxuICAgIF1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcubHVhJyxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgJ2FuZCcsXHJcbiAgICAgICAgJ2JyZWFrJyxcclxuICAgICAgICAnZG8nLFxyXG4gICAgICAgICdlbHNlJyxcclxuICAgICAgICAnZWxzZWlmJyxcclxuICAgICAgICAnZW5kJyxcclxuICAgICAgICAnZmFsc2UnLFxyXG4gICAgICAgICdmb3InLFxyXG4gICAgICAgICdmdW5jdGlvbicsXHJcbiAgICAgICAgJ2dvdG8nLFxyXG4gICAgICAgICdpZicsXHJcbiAgICAgICAgJ2luJyxcclxuICAgICAgICAnbG9jYWwnLFxyXG4gICAgICAgICduaWwnLFxyXG4gICAgICAgICdub3QnLFxyXG4gICAgICAgICdvcicsXHJcbiAgICAgICAgJ3JlcGVhdCcsXHJcbiAgICAgICAgJ3JldHVybicsXHJcbiAgICAgICAgJ3RoZW4nLFxyXG4gICAgICAgICd0cnVlJyxcclxuICAgICAgICAndW50aWwnLFxyXG4gICAgICAgICd3aGlsZSdcclxuICAgIF0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYXJyYXknLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH1cclxuICAgIF0sXHJcbiAgICBvcGVyYXRvcnM6IFtcclxuICAgICAgICAnKycsXHJcbiAgICAgICAgJy0nLFxyXG4gICAgICAgICcqJyxcclxuICAgICAgICAnLycsXHJcbiAgICAgICAgJyUnLFxyXG4gICAgICAgICdeJyxcclxuICAgICAgICAnIycsXHJcbiAgICAgICAgJz09JyxcclxuICAgICAgICAnfj0nLFxyXG4gICAgICAgICc8PScsXHJcbiAgICAgICAgJz49JyxcclxuICAgICAgICAnPCcsXHJcbiAgICAgICAgJz4nLFxyXG4gICAgICAgICc9JyxcclxuICAgICAgICAnOycsXHJcbiAgICAgICAgJzonLFxyXG4gICAgICAgICcsJyxcclxuICAgICAgICAnLicsXHJcbiAgICAgICAgJy4uJyxcclxuICAgICAgICAnLi4uJ1xyXG4gICAgXSxcclxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXSsvLFxyXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcclxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL1thLXpBLVpfXVxcdyovLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICAvLyBrZXlzXHJcbiAgICAgICAgICAgIFsvKCwpKFxccyopKFthLXpBLVpfXVxcdyopKFxccyopKDopKD8hOikvLCBbJ2RlbGltaXRlcicsICcnLCAna2V5JywgJycsICdkZWxpbWl0ZXInXV0sXHJcbiAgICAgICAgICAgIFsvKHspKFxccyopKFthLXpBLVpfXVxcdyopKFxccyopKDopKD8hOikvLCBbJ0BicmFja2V0cycsICcnLCAna2V5JywgJycsICdkZWxpbWl0ZXInXV0sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xyXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL0BzeW1ib2xzLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdkZWxpbWl0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gbnVtYmVyc1xyXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl9dKlswLTlhLWZBLUZdLywgJ251bWJlci5oZXgnXSxcclxuICAgICAgICAgICAgWy9cXGQrPy8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xyXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzOiByZWNvdmVyIG9uIG5vbi10ZXJtaW5hdGVkIHN0cmluZ3NcclxuICAgICAgICAgICAgWy9cIihbXlwiXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy8nKFteJ1xcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BzdHJpbmcuXCInXSxcclxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsIFwiQHN0cmluZy4nXCJdXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcclxuICAgICAgICAgICAgWy8tLVxcWyhbPV0qKVxcWy8sICdjb21tZW50JywgJ0Bjb21tZW50LiQxJ10sXHJcbiAgICAgICAgICAgIFsvLS0uKiQvLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvW15cXF1dKy8sICdjb21tZW50J10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9cXF0oWz1dKilcXF0vLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckMT09JFMyJzogeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQHBvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2NvbW1lbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlxcXFxcIiddKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9bXCInXS8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9