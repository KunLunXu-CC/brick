(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[2060],{32060:(e,o,n)=>{"use strict";n.r(o),n.d(o,{conf:()=>t,language:()=>s});var t={comments:{lineComment:";",blockComment:["#|","|#"]},brackets:[["(",")"],["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}]},s={defaultToken:"",ignoreCase:!0,tokenPostfix:".scheme",brackets:[{open:"(",close:")",token:"delimiter.parenthesis"},{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"}],keywords:["case","do","let","loop","if","else","when","cons","car","cdr","cond","lambda","lambda*","syntax-rules","format","set!","quote","eval","append","list","list?","member?","load"],constants:["#t","#f"],operators:["eq?","eqv?","equal?","and","or","not","null?"],tokenizer:{root:[[/#[xXoObB][0-9a-fA-F]+/,"number.hex"],[/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?/,"number.float"],[/(?:\b(?:(define|define-syntax|define-macro))\b)(\s+)((?:\w|\-|\!|\?)*)/,["keyword","white","variable"]],{include:"@whitespace"},{include:"@strings"},[/[a-zA-Z_#][a-zA-Z0-9_\-\?\!\*]*/,{cases:{"@keywords":"keyword","@constants":"constant","@operators":"operators","@default":"identifier"}}]],comment:[[/[^\|#]+/,"comment"],[/#\|/,"comment","@push"],[/\|#/,"comment","@pop"],[/[\|#]/,"comment"]],whitespace:[[/[ \t\r\n]+/,"white"],[/#\|/,"comment","@comment"],[/;.*$/,"comment"]],strings:[[/"$/,"string","@popall"],[/"(?=.)/,"string","@multiLineString"]],multiLineString:[[/[^\\"]+$/,"string","@popall"],[/[^\\"]+/,"string"],[/\\./,"string.escape"],[/"/,"string","@popall"],[/\\$/,"string"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9zY2hlbWUvc2NoZW1lLmpzIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwiYmxvY2tDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwic3Vycm91bmRpbmdQYWlycyIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwiaWdub3JlQ2FzZSIsInRva2VuUG9zdGZpeCIsInRva2VuIiwia2V5d29yZHMiLCJjb25zdGFudHMiLCJvcGVyYXRvcnMiLCJ0b2tlbml6ZXIiLCJyb290IiwiaW5jbHVkZSIsImNhc2VzIiwiY29tbWVudCIsIndoaXRlc3BhY2UiLCJzdHJpbmdzIiwibXVsdGlMaW5lU3RyaW5nIl0sIm1hcHBpbmdzIjoidUlBSU8sSUFBSUEsRUFBTyxDQUNkQyxTQUFVLENBQ05DLFlBQWEsSUFDYkMsYUFBYyxDQUFDLEtBQU0sT0FFekJDLFNBQVUsQ0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssTUFFVkMsaUJBQWtCLENBQ2QsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE1BRXhCQyxpQkFBa0IsQ0FDZCxDQUFFRixLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sT0FHakJFLEVBQVcsQ0FDbEJDLGFBQWMsR0FDZEMsWUFBWSxFQUNaQyxhQUFjLFVBQ2RSLFNBQVUsQ0FDTixDQUFFRSxLQUFNLElBQUtDLE1BQU8sSUFBS00sTUFBTyx5QkFDaEMsQ0FBRVAsS0FBTSxJQUFLQyxNQUFPLElBQUtNLE1BQU8sbUJBQ2hDLENBQUVQLEtBQU0sSUFBS0MsTUFBTyxJQUFLTSxNQUFPLHFCQUVwQ0MsU0FBVSxDQUNOLE9BQ0EsS0FDQSxNQUNBLE9BQ0EsS0FDQSxPQUNBLE9BQ0EsT0FDQSxNQUNBLE1BQ0EsT0FDQSxTQUNBLFVBQ0EsZUFDQSxTQUNBLE9BQ0EsUUFDQSxPQUNBLFNBQ0EsT0FDQSxRQUNBLFVBQ0EsUUFFSkMsVUFBVyxDQUFDLEtBQU0sTUFDbEJDLFVBQVcsQ0FBQyxNQUFPLE9BQVEsU0FBVSxNQUFPLEtBQU0sTUFBTyxTQUN6REMsVUFBVyxDQUNQQyxLQUFNLENBQ0YsQ0FBQyx3QkFBeUIsY0FDMUIsQ0FBQywyQ0FBNEMsZ0JBQzdDLENBQ0kseUVBQ0EsQ0FBQyxVQUFXLFFBQVMsYUFFekIsQ0FBRUMsUUFBUyxlQUNYLENBQUVBLFFBQVMsWUFDWCxDQUNJLGtDQUNBLENBQ0lDLE1BQU8sQ0FDSCxZQUFhLFVBQ2IsYUFBYyxXQUNkLGFBQWMsWUFDZCxXQUFZLGlCQUs1QkMsUUFBUyxDQUNMLENBQUMsVUFBVyxXQUNaLENBQUMsTUFBTyxVQUFXLFNBQ25CLENBQUMsTUFBTyxVQUFXLFFBQ25CLENBQUMsUUFBUyxZQUVkQyxXQUFZLENBQ1IsQ0FBQyxhQUFjLFNBQ2YsQ0FBQyxNQUFPLFVBQVcsWUFDbkIsQ0FBQyxPQUFRLFlBRWJDLFFBQVMsQ0FDTCxDQUFDLEtBQU0sU0FBVSxXQUNqQixDQUFDLFNBQVUsU0FBVSxxQkFFekJDLGdCQUFpQixDQUNiLENBQUMsV0FBWSxTQUFVLFdBQ3ZCLENBQUMsVUFBVyxVQUNaLENBQUMsTUFBTyxpQkFDUixDQUFDLElBQUssU0FBVSxXQUNoQixDQUFDLE1BQU8iLCJmaWxlIjoianMvMjA2MC5jNDY5MmJiNDM3MTJjNTRkZWVmNy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJzsnLFxyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycjfCcsICd8IyddXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJygnLCAnKSddLFxyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9XHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcclxuICAgIHRva2VuUG9zdGZpeDogJy5zY2hlbWUnLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH1cclxuICAgIF0sXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdjYXNlJyxcclxuICAgICAgICAnZG8nLFxyXG4gICAgICAgICdsZXQnLFxyXG4gICAgICAgICdsb29wJyxcclxuICAgICAgICAnaWYnLFxyXG4gICAgICAgICdlbHNlJyxcclxuICAgICAgICAnd2hlbicsXHJcbiAgICAgICAgJ2NvbnMnLFxyXG4gICAgICAgICdjYXInLFxyXG4gICAgICAgICdjZHInLFxyXG4gICAgICAgICdjb25kJyxcclxuICAgICAgICAnbGFtYmRhJyxcclxuICAgICAgICAnbGFtYmRhKicsXHJcbiAgICAgICAgJ3N5bnRheC1ydWxlcycsXHJcbiAgICAgICAgJ2Zvcm1hdCcsXHJcbiAgICAgICAgJ3NldCEnLFxyXG4gICAgICAgICdxdW90ZScsXHJcbiAgICAgICAgJ2V2YWwnLFxyXG4gICAgICAgICdhcHBlbmQnLFxyXG4gICAgICAgICdsaXN0JyxcclxuICAgICAgICAnbGlzdD8nLFxyXG4gICAgICAgICdtZW1iZXI/JyxcclxuICAgICAgICAnbG9hZCdcclxuICAgIF0sXHJcbiAgICBjb25zdGFudHM6IFsnI3QnLCAnI2YnXSxcclxuICAgIG9wZXJhdG9yczogWydlcT8nLCAnZXF2PycsICdlcXVhbD8nLCAnYW5kJywgJ29yJywgJ25vdCcsICdudWxsPyddLFxyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICBbLyNbeFhvT2JCXVswLTlhLWZBLUZdKy8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvWystXT9cXGQrKD86KD86XFwuXFxkKik/KD86W2VFXVsrLV0/XFxkKyk/KT8vLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8oPzpcXGIoPzooZGVmaW5lfGRlZmluZS1zeW50YXh8ZGVmaW5lLW1hY3JvKSlcXGIpKFxccyspKCg/Olxcd3xcXC18XFwhfFxcPykqKS8sXHJcbiAgICAgICAgICAgICAgICBbJ2tleXdvcmQnLCAnd2hpdGUnLCAndmFyaWFibGUnXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9bYS16QS1aXyNdW2EtekEtWjAtOV9cXC1cXD9cXCFcXCpdKi8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Bjb25zdGFudHMnOiAnY29uc3RhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdvcGVyYXRvcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9bXlxcfCNdKy8sICdjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvI1xcfC8sICdjb21tZW50JywgJ0BwdXNoJ10sXHJcbiAgICAgICAgICAgIFsvXFx8Iy8sICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9bXFx8I10vLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICd3aGl0ZSddLFxyXG4gICAgICAgICAgICBbLyNcXHwvLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbLzsuKiQvLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdzOiBbXHJcbiAgICAgICAgICAgIFsvXCIkLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvXCIoPz0uKS8sICdzdHJpbmcnLCAnQG11bHRpTGluZVN0cmluZyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBtdWx0aUxpbmVTdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlxcXFxcIl0rJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXCQvLCAnc3RyaW5nJ11cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=