(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{793:function(e,n,o){"use strict";o.r(n),o.d(n,"conf",(function(){return t})),o.d(n,"language",(function(){return s}));var t={comments:{lineComment:";",blockComment:["#|","|#"]},brackets:[["(",")"],["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}]},s={defaultToken:"",ignoreCase:!0,tokenPostfix:".scheme",brackets:[{open:"(",close:")",token:"delimiter.parenthesis"},{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"}],keywords:["case","do","let","loop","if","else","when","cons","car","cdr","cond","lambda","lambda*","syntax-rules","format","set!","quote","eval","append","list","list?","member?","load"],constants:["#t","#f"],operators:["eq?","eqv?","equal?","and","or","not","null?"],tokenizer:{root:[[/#[xXoObB][0-9a-fA-F]+/,"number.hex"],[/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?/,"number.float"],[/(?:\b(?:(define|define-syntax|define-macro))\b)(\s+)((?:\w|\-|\!|\?)*)/,["keyword","white","variable"]],{include:"@whitespace"},{include:"@strings"},[/[a-zA-Z_#][a-zA-Z0-9_\-\?\!\*]*/,{cases:{"@keywords":"keyword","@constants":"constant","@operators":"operators","@default":"identifier"}}]],comment:[[/[^\|#]+/,"comment"],[/#\|/,"comment","@push"],[/\|#/,"comment","@pop"],[/[\|#]/,"comment"]],whitespace:[[/[ \t\r\n]+/,"white"],[/#\|/,"comment","@comment"],[/;.*$/,"comment"]],strings:[[/"$/,"string","@popall"],[/"(?=.)/,"string","@multiLineString"]],multiLineString:[[/[^\\"]+$/,"string","@popall"],[/[^\\"]+/,"string"],[/\\./,"string.escape"],[/"/,"string","@popall"],[/\\$/,"string"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3NjaGVtZS9zY2hlbWUuanMiXSwibmFtZXMiOlsiY29uZiIsImNvbW1lbnRzIiwibGluZUNvbW1lbnQiLCJibG9ja0NvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJzdXJyb3VuZGluZ1BhaXJzIiwibGFuZ3VhZ2UiLCJkZWZhdWx0VG9rZW4iLCJpZ25vcmVDYXNlIiwidG9rZW5Qb3N0Zml4IiwidG9rZW4iLCJrZXl3b3JkcyIsImNvbnN0YW50cyIsIm9wZXJhdG9ycyIsInRva2VuaXplciIsInJvb3QiLCJpbmNsdWRlIiwiY2FzZXMiLCJjb21tZW50Iiwid2hpdGVzcGFjZSIsInN0cmluZ3MiLCJtdWx0aUxpbmVTdHJpbmciXSwibWFwcGluZ3MiOiIyRkFBQSxxRkFLTyxJQUFJQSxFQUFPLENBQ2RDLFNBQVUsQ0FDTkMsWUFBYSxJQUNiQyxhQUFjLENBQUMsS0FBTSxPQUV6QkMsU0FBVSxDQUFDLENBQUMsSUFBSyxLQUFNLENBQUMsSUFBSyxLQUFNLENBQUMsSUFBSyxNQUN6Q0MsaUJBQWtCLENBQ2QsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE1BRXhCQyxpQkFBa0IsQ0FDZCxDQUFFRixLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sT0FHakJFLEVBQVcsQ0FDbEJDLGFBQWMsR0FDZEMsWUFBWSxFQUNaQyxhQUFjLFVBQ2RSLFNBQVUsQ0FDTixDQUFFRSxLQUFNLElBQUtDLE1BQU8sSUFBS00sTUFBTyx5QkFDaEMsQ0FBRVAsS0FBTSxJQUFLQyxNQUFPLElBQUtNLE1BQU8sbUJBQ2hDLENBQUVQLEtBQU0sSUFBS0MsTUFBTyxJQUFLTSxNQUFPLHFCQUVwQ0MsU0FBVSxDQUNOLE9BQ0EsS0FDQSxNQUNBLE9BQ0EsS0FDQSxPQUNBLE9BQ0EsT0FDQSxNQUNBLE1BQ0EsT0FDQSxTQUNBLFVBQ0EsZUFDQSxTQUNBLE9BQ0EsUUFDQSxPQUNBLFNBQ0EsT0FDQSxRQUNBLFVBQ0EsUUFFSkMsVUFBVyxDQUFDLEtBQU0sTUFDbEJDLFVBQVcsQ0FBQyxNQUFPLE9BQVEsU0FBVSxNQUFPLEtBQU0sTUFBTyxTQUN6REMsVUFBVyxDQUNQQyxLQUFNLENBQ0YsQ0FBQyx3QkFBeUIsY0FDMUIsQ0FBQywyQ0FBNEMsZ0JBQzdDLENBQ0kseUVBQ0EsQ0FBQyxVQUFXLFFBQVMsYUFFekIsQ0FBRUMsUUFBUyxlQUNYLENBQUVBLFFBQVMsWUFDWCxDQUNJLGtDQUNBLENBQ0lDLE1BQU8sQ0FDSCxZQUFhLFVBQ2IsYUFBYyxXQUNkLGFBQWMsWUFDZCxXQUFZLGlCQUs1QkMsUUFBUyxDQUNMLENBQUMsVUFBVyxXQUNaLENBQUMsTUFBTyxVQUFXLFNBQ25CLENBQUMsTUFBTyxVQUFXLFFBQ25CLENBQUMsUUFBUyxZQUVkQyxXQUFZLENBQ1IsQ0FBQyxhQUFjLFNBQ2YsQ0FBQyxNQUFPLFVBQVcsWUFDbkIsQ0FBQyxPQUFRLFlBRWJDLFFBQVMsQ0FDTCxDQUFDLEtBQU0sU0FBVSxXQUNqQixDQUFDLFNBQVUsU0FBVSxxQkFFekJDLGdCQUFpQixDQUNiLENBQUMsV0FBWSxTQUFVLFdBQ3ZCLENBQUMsVUFBVyxVQUNaLENBQUMsTUFBTyxpQkFDUixDQUFDLElBQUssU0FBVSxXQUNoQixDQUFDLE1BQU8iLCJmaWxlIjoianMvNTAuODlmNjkxOTcyMTIxMTk3OWE0NDYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJzsnLFxyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycjfCcsICd8IyddLFxyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbWycoJywgJyknXSwgWyd7JywgJ30nXSwgWydbJywgJ10nXV0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICBdLFxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIGlnbm9yZUNhc2U6IHRydWUsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcuc2NoZW1lJyxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9LFxyXG4gICAgXSxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgJ2Nhc2UnLFxyXG4gICAgICAgICdkbycsXHJcbiAgICAgICAgJ2xldCcsXHJcbiAgICAgICAgJ2xvb3AnLFxyXG4gICAgICAgICdpZicsXHJcbiAgICAgICAgJ2Vsc2UnLFxyXG4gICAgICAgICd3aGVuJyxcclxuICAgICAgICAnY29ucycsXHJcbiAgICAgICAgJ2NhcicsXHJcbiAgICAgICAgJ2NkcicsXHJcbiAgICAgICAgJ2NvbmQnLFxyXG4gICAgICAgICdsYW1iZGEnLFxyXG4gICAgICAgICdsYW1iZGEqJyxcclxuICAgICAgICAnc3ludGF4LXJ1bGVzJyxcclxuICAgICAgICAnZm9ybWF0JyxcclxuICAgICAgICAnc2V0IScsXHJcbiAgICAgICAgJ3F1b3RlJyxcclxuICAgICAgICAnZXZhbCcsXHJcbiAgICAgICAgJ2FwcGVuZCcsXHJcbiAgICAgICAgJ2xpc3QnLFxyXG4gICAgICAgICdsaXN0PycsXHJcbiAgICAgICAgJ21lbWJlcj8nLFxyXG4gICAgICAgICdsb2FkJyxcclxuICAgIF0sXHJcbiAgICBjb25zdGFudHM6IFsnI3QnLCAnI2YnXSxcclxuICAgIG9wZXJhdG9yczogWydlcT8nLCAnZXF2PycsICdlcXVhbD8nLCAnYW5kJywgJ29yJywgJ25vdCcsICdudWxsPyddLFxyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICBbLyNbeFhvT2JCXVswLTlhLWZBLUZdKy8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvWystXT9cXGQrKD86KD86XFwuXFxkKik/KD86W2VFXVsrLV0/XFxkKyk/KT8vLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8oPzpcXGIoPzooZGVmaW5lfGRlZmluZS1zeW50YXh8ZGVmaW5lLW1hY3JvKSlcXGIpKFxccyspKCg/Olxcd3xcXC18XFwhfFxcPykqKS8sXHJcbiAgICAgICAgICAgICAgICBbJ2tleXdvcmQnLCAnd2hpdGUnLCAndmFyaWFibGUnXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvW2EtekEtWl8jXVthLXpBLVowLTlfXFwtXFw/XFwhXFwqXSovLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAY29uc3RhbnRzJzogJ2NvbnN0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3JzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1teXFx8I10rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy8jXFx8LywgJ2NvbW1lbnQnLCAnQHB1c2gnXSxcclxuICAgICAgICAgICAgWy9cXHwjLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1tcXHwjXS8sICdjb21tZW50J10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICd3aGl0ZSddLFxyXG4gICAgICAgICAgICBbLyNcXHwvLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbLzsuKiQvLCAnY29tbWVudCddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nczogW1xyXG4gICAgICAgICAgICBbL1wiJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbL1wiKD89LikvLCAnc3RyaW5nJywgJ0BtdWx0aUxpbmVTdHJpbmcnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG11bHRpTGluZVN0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teXFxcXFwiXSskLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcclxuICAgICAgICAgICAgWy9cXFxcJC8sICdzdHJpbmcnXVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9