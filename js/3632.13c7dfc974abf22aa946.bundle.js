(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[3632],{48534:(e,t,s)=>{"use strict";s.r(t),s.d(t,{conf:()=>r,language:()=>o});var r={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}]},o={defaultToken:"",tokenPostfix:".hcl",keywords:["var","local","path","for_each","any","string","number","bool","true","false","null","if ","else ","endif ","for ","in","endfor"],operators:["=",">=","<=","==","!=","+","-","*","/","%","&&","||","!","<",">","?","...",":"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,terraformFunctions:/(abs|ceil|floor|log|max|min|pow|signum|chomp|format|formatlist|indent|join|lower|regex|regexall|replace|split|strrev|substr|title|trimspace|upper|chunklist|coalesce|coalescelist|compact|concat|contains|distinct|element|flatten|index|keys|length|list|lookup|map|matchkeys|merge|range|reverse|setintersection|setproduct|setunion|slice|sort|transpose|values|zipmap|base64decode|base64encode|base64gzip|csvdecode|jsondecode|jsonencode|urlencode|yamldecode|yamlencode|abspath|dirname|pathexpand|basename|file|fileexists|fileset|filebase64|templatefile|formatdate|timeadd|timestamp|base64sha256|base64sha512|bcrypt|filebase64sha256|filebase64sha512|filemd5|filemd1|filesha256|filesha512|md5|rsadecrypt|sha1|sha256|sha512|uuid|uuidv5|cidrhost|cidrnetmask|cidrsubnet|tobool|tolist|tomap|tonumber|toset|tostring)/,terraformMainBlocks:/(module|data|terraform|resource|provider|variable|output|locals)/,tokenizer:{root:[[/^@terraformMainBlocks([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)(\{)/,["type","","string","","string","","@brackets"]],[/(\w+[ \t]+)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)(\{)/,["identifier","","string","","string","","@brackets"]],[/(\w+[ \t]+)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)([\w-]+|"[\w-]+"|)(=)(\{)/,["identifier","","string","","operator","","@brackets"]],{include:"@terraform"}],terraform:[[/@terraformFunctions(\()/,["type","@brackets"]],[/[a-zA-Z_]\w*-*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"variable"}}],{include:"@whitespace"},{include:"@heredoc"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/\d*\d+[eE]([\-+]?\d+)?/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/\d[\d']*/,"number"],[/\d/,"number"],[/[;,.]/,"delimiter"],[/"/,"string","@string"],[/'/,"invalid"]],heredoc:[[/<<[-]*\s*["]?([\w\-]+)["]?/,{token:"string.heredoc.delimiter",next:"@heredocBody.$1"}]],heredocBody:[[/([\w\-]+)$/,{cases:{"$1==$S2":[{token:"string.heredoc.delimiter",next:"@popall"}],"@default":"string.heredoc"}}],[/./,"string.heredoc"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"],[/#.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],string:[[/\$\{/,{token:"delimiter",next:"@stringExpression"}],[/[^\\"\$]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@popall"]],stringInsideExpression:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],stringExpression:[[/\}/,{token:"delimiter",next:"@pop"}],[/"/,"string","@stringInsideExpression"],{include:"@terraform"}]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9oY2wvaGNsLmpzIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwiYmxvY2tDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwibm90SW4iLCJzdXJyb3VuZGluZ1BhaXJzIiwibGFuZ3VhZ2UiLCJkZWZhdWx0VG9rZW4iLCJ0b2tlblBvc3RmaXgiLCJrZXl3b3JkcyIsIm9wZXJhdG9ycyIsInN5bWJvbHMiLCJlc2NhcGVzIiwidGVycmFmb3JtRnVuY3Rpb25zIiwidGVycmFmb3JtTWFpbkJsb2NrcyIsInRva2VuaXplciIsInJvb3QiLCJpbmNsdWRlIiwidGVycmFmb3JtIiwiY2FzZXMiLCJ0b2tlbiIsImhlcmVkb2MiLCJuZXh0IiwiaGVyZWRvY0JvZHkiLCJ3aGl0ZXNwYWNlIiwiY29tbWVudCIsInN0cmluZyIsInN0cmluZ0luc2lkZUV4cHJlc3Npb24iLCJzdHJpbmdFeHByZXNzaW9uIl0sIm1hcHBpbmdzIjoidUlBSU8sSUFBSUEsRUFBTyxDQUNkQyxTQUFVLENBQ05DLFlBQWEsS0FDYkMsYUFBYyxDQUFDLEtBQU0sT0FFekJDLFNBQVUsQ0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssTUFFVkMsaUJBQWtCLENBQ2QsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxZQUVyQ0MsaUJBQWtCLENBQ2QsQ0FBRUgsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE9BR2pCRyxFQUFXLENBQ2xCQyxhQUFjLEdBQ2RDLGFBQWMsT0FDZEMsU0FBVSxDQUNOLE1BQ0EsUUFDQSxPQUNBLFdBQ0EsTUFDQSxTQUNBLFNBQ0EsT0FDQSxPQUNBLFFBQ0EsT0FDQSxNQUNBLFFBQ0EsU0FDQSxPQUNBLEtBQ0EsVUFFSkMsVUFBVyxDQUNQLElBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsS0FDQSxLQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsTUFDQSxLQUVKQyxRQUFTLHdCQUNUQyxRQUFTLHdFQUNUQyxtQkFBb0Isc3lCQUNwQkMsb0JBQXFCLG1FQUNyQkMsVUFBVyxDQUNQQyxLQUFNLENBRUYsQ0FDSSx3RkFDQSxDQUFDLE9BQVEsR0FBSSxTQUFVLEdBQUksU0FBVSxHQUFJLGNBRzdDLENBQ0ksOEVBQ0EsQ0FBQyxhQUFjLEdBQUksU0FBVSxHQUFJLFNBQVUsR0FBSSxjQUduRCxDQUNJLHlFQUNBLENBQUMsYUFBYyxHQUFJLFNBQVUsR0FBSSxXQUFZLEdBQUksY0FHckQsQ0FBRUMsUUFBUyxlQUVmQyxVQUFXLENBRVAsQ0FBQywwQkFBMkIsQ0FBQyxPQUFRLGNBRXJDLENBQ0ksaUJBQ0EsQ0FDSUMsTUFBTyxDQUNILFlBQWEsQ0FBRUMsTUFBTyxjQUN0QixXQUFZLGNBSXhCLENBQUVILFFBQVMsZUFDWCxDQUFFQSxRQUFTLFlBRVgsQ0FBQyxhQUFjLGFBQ2YsQ0FBQyxtQkFBb0IsYUFDckIsQ0FDSSxXQUNBLENBQ0lFLE1BQU8sQ0FDSCxhQUFjLFdBQ2QsV0FBWSxNQUt4QixDQUFDLHlCQUEwQixnQkFDM0IsQ0FBQywyQkFBNEIsZ0JBQzdCLENBQUMsV0FBWSxVQUNiLENBQUMsS0FBTSxVQUNQLENBQUMsUUFBUyxhQUVWLENBQUMsSUFBSyxTQUFVLFdBQ2hCLENBQUMsSUFBSyxZQUVWRSxRQUFTLENBQ0wsQ0FDSSw2QkFDQSxDQUFFRCxNQUFPLDJCQUE0QkUsS0FBTSxxQkFHbkRDLFlBQWEsQ0FDVCxDQUNJLGFBQ0EsQ0FDSUosTUFBTyxDQUNILFVBQVcsQ0FDUCxDQUNJQyxNQUFPLDJCQUNQRSxLQUFNLFlBR2QsV0FBWSxvQkFJeEIsQ0FBQyxJQUFLLG1CQUVWRSxXQUFZLENBQ1IsQ0FBQyxhQUFjLElBQ2YsQ0FBQyxPQUFRLFVBQVcsWUFDcEIsQ0FBQyxVQUFXLFdBQ1osQ0FBQyxPQUFRLFlBRWJDLFFBQVMsQ0FDTCxDQUFDLFVBQVcsV0FDWixDQUFDLE9BQVEsVUFBVyxRQUNwQixDQUFDLFFBQVMsWUFFZEMsT0FBUSxDQUNKLENBQUMsT0FBUSxDQUFFTixNQUFPLFlBQWFFLEtBQU0sc0JBQ3JDLENBQUMsWUFBYSxVQUNkLENBQUMsV0FBWSxpQkFDYixDQUFDLE1BQU8seUJBQ1IsQ0FBQyxJQUFLLFNBQVUsWUFFcEJLLHVCQUF3QixDQUNwQixDQUFDLFVBQVcsVUFDWixDQUFDLFdBQVksaUJBQ2IsQ0FBQyxNQUFPLHlCQUNSLENBQUMsSUFBSyxTQUFVLFNBRXBCQyxpQkFBa0IsQ0FDZCxDQUFDLEtBQU0sQ0FBRVIsTUFBTyxZQUFhRSxLQUFNLFNBQ25DLENBQUMsSUFBSyxTQUFVLDJCQUNoQixDQUFFTCxRQUFTIiwiZmlsZSI6ImpzLzM2MzIuMTNjN2RmYzk3NGFiZjIyYWE5NDYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ11cclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZyddIH1cclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9XHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmhjbCcsXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICd2YXInLFxyXG4gICAgICAgICdsb2NhbCcsXHJcbiAgICAgICAgJ3BhdGgnLFxyXG4gICAgICAgICdmb3JfZWFjaCcsXHJcbiAgICAgICAgJ2FueScsXHJcbiAgICAgICAgJ3N0cmluZycsXHJcbiAgICAgICAgJ251bWJlcicsXHJcbiAgICAgICAgJ2Jvb2wnLFxyXG4gICAgICAgICd0cnVlJyxcclxuICAgICAgICAnZmFsc2UnLFxyXG4gICAgICAgICdudWxsJyxcclxuICAgICAgICAnaWYgJyxcclxuICAgICAgICAnZWxzZSAnLFxyXG4gICAgICAgICdlbmRpZiAnLFxyXG4gICAgICAgICdmb3IgJyxcclxuICAgICAgICAnaW4nLFxyXG4gICAgICAgICdlbmRmb3InXHJcbiAgICBdLFxyXG4gICAgb3BlcmF0b3JzOiBbXHJcbiAgICAgICAgJz0nLFxyXG4gICAgICAgICc+PScsXHJcbiAgICAgICAgJzw9JyxcclxuICAgICAgICAnPT0nLFxyXG4gICAgICAgICchPScsXHJcbiAgICAgICAgJysnLFxyXG4gICAgICAgICctJyxcclxuICAgICAgICAnKicsXHJcbiAgICAgICAgJy8nLFxyXG4gICAgICAgICclJyxcclxuICAgICAgICAnJiYnLFxyXG4gICAgICAgICd8fCcsXHJcbiAgICAgICAgJyEnLFxyXG4gICAgICAgICc8JyxcclxuICAgICAgICAnPicsXHJcbiAgICAgICAgJz8nLFxyXG4gICAgICAgICcuLi4nLFxyXG4gICAgICAgICc6J1xyXG4gICAgXSxcclxuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXSsvLFxyXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcclxuICAgIHRlcnJhZm9ybUZ1bmN0aW9uczogLyhhYnN8Y2VpbHxmbG9vcnxsb2d8bWF4fG1pbnxwb3d8c2lnbnVtfGNob21wfGZvcm1hdHxmb3JtYXRsaXN0fGluZGVudHxqb2lufGxvd2VyfHJlZ2V4fHJlZ2V4YWxsfHJlcGxhY2V8c3BsaXR8c3RycmV2fHN1YnN0cnx0aXRsZXx0cmltc3BhY2V8dXBwZXJ8Y2h1bmtsaXN0fGNvYWxlc2NlfGNvYWxlc2NlbGlzdHxjb21wYWN0fGNvbmNhdHxjb250YWluc3xkaXN0aW5jdHxlbGVtZW50fGZsYXR0ZW58aW5kZXh8a2V5c3xsZW5ndGh8bGlzdHxsb29rdXB8bWFwfG1hdGNoa2V5c3xtZXJnZXxyYW5nZXxyZXZlcnNlfHNldGludGVyc2VjdGlvbnxzZXRwcm9kdWN0fHNldHVuaW9ufHNsaWNlfHNvcnR8dHJhbnNwb3NlfHZhbHVlc3x6aXBtYXB8YmFzZTY0ZGVjb2RlfGJhc2U2NGVuY29kZXxiYXNlNjRnemlwfGNzdmRlY29kZXxqc29uZGVjb2RlfGpzb25lbmNvZGV8dXJsZW5jb2RlfHlhbWxkZWNvZGV8eWFtbGVuY29kZXxhYnNwYXRofGRpcm5hbWV8cGF0aGV4cGFuZHxiYXNlbmFtZXxmaWxlfGZpbGVleGlzdHN8ZmlsZXNldHxmaWxlYmFzZTY0fHRlbXBsYXRlZmlsZXxmb3JtYXRkYXRlfHRpbWVhZGR8dGltZXN0YW1wfGJhc2U2NHNoYTI1NnxiYXNlNjRzaGE1MTJ8YmNyeXB0fGZpbGViYXNlNjRzaGEyNTZ8ZmlsZWJhc2U2NHNoYTUxMnxmaWxlbWQ1fGZpbGVtZDF8ZmlsZXNoYTI1NnxmaWxlc2hhNTEyfG1kNXxyc2FkZWNyeXB0fHNoYTF8c2hhMjU2fHNoYTUxMnx1dWlkfHV1aWR2NXxjaWRyaG9zdHxjaWRybmV0bWFza3xjaWRyc3VibmV0fHRvYm9vbHx0b2xpc3R8dG9tYXB8dG9udW1iZXJ8dG9zZXR8dG9zdHJpbmcpLyxcclxuICAgIHRlcnJhZm9ybU1haW5CbG9ja3M6IC8obW9kdWxlfGRhdGF8dGVycmFmb3JtfHJlc291cmNlfHByb3ZpZGVyfHZhcmlhYmxlfG91dHB1dHxsb2NhbHMpLyxcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IG1haW4gYmxvY2tzXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9eQHRlcnJhZm9ybU1haW5CbG9ja3MoWyBcXHRdKikoW1xcdy1dK3xcIltcXHctXStcInwpKFsgXFx0XSopKFtcXHctXSt8XCJbXFx3LV0rXCJ8KShbIFxcdF0qKShcXHspLyxcclxuICAgICAgICAgICAgICAgIFsndHlwZScsICcnLCAnc3RyaW5nJywgJycsICdzdHJpbmcnLCAnJywgJ0BicmFja2V0cyddXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIC8vIGhpZ2hsaWdodCBhbGwgdGhlIHJlbWFpbmluZyBibG9ja3NcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLyhcXHcrWyBcXHRdKykoWyBcXHRdKikoW1xcdy1dK3xcIltcXHctXStcInwpKFsgXFx0XSopKFtcXHctXSt8XCJbXFx3LV0rXCJ8KShbIFxcdF0qKShcXHspLyxcclxuICAgICAgICAgICAgICAgIFsnaWRlbnRpZmllcicsICcnLCAnc3RyaW5nJywgJycsICdzdHJpbmcnLCAnJywgJ0BicmFja2V0cyddXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIC8vIGhpZ2hsaWdodCBibG9ja1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvKFxcdytbIFxcdF0rKShbIFxcdF0qKShbXFx3LV0rfFwiW1xcdy1dK1wifCkoWyBcXHRdKikoW1xcdy1dK3xcIltcXHctXStcInwpKD0pKFxceykvLFxyXG4gICAgICAgICAgICAgICAgWydpZGVudGlmaWVyJywgJycsICdzdHJpbmcnLCAnJywgJ29wZXJhdG9yJywgJycsICdAYnJhY2tldHMnXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyB0ZXJyYWZvcm0gZ2VuZXJhbCBoaWdobGlnaHQgLSBzaGFyZWQgd2l0aCBleHByZXNzaW9uc1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVycmFmb3JtJyB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB0ZXJyYWZvcm06IFtcclxuICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IHRlcnJhZm9ybSBmdW5jdGlvbnNcclxuICAgICAgICAgICAgWy9AdGVycmFmb3JtRnVuY3Rpb25zKFxcKCkvLCBbJ3R5cGUnLCAnQGJyYWNrZXRzJ11dLFxyXG4gICAgICAgICAgICAvLyBhbGwgb3RoZXIgd29yZHMgYXJlIHZhcmlhYmxlcyBvciBrZXl3b3Jkc1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvW2EtekEtWl9dXFx3Ki0qLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICd2YXJpYWJsZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAaGVyZWRvYycgfSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXHJcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbL1s8Pl0oPyFAc3ltYm9scykvLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9Ac3ltYm9scy8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gbnVtYmVyc1xyXG4gICAgICAgICAgICBbL1xcZCpcXGQrW2VFXShbXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbL1xcZFtcXGQnXSovLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIFsvXFxkLywgJ251bWJlciddLFxyXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy8nLywgJ2ludmFsaWQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaGVyZWRvYzogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvPDxbLV0qXFxzKltcIl0/KFtcXHdcXC1dKylbXCJdPy8sXHJcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nLmhlcmVkb2MuZGVsaW1pdGVyJywgbmV4dDogJ0BoZXJlZG9jQm9keS4kMScgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBoZXJlZG9jQm9keTogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvKFtcXHdcXC1dKykkLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJDE9PSRTMic6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZy5oZXJlZG9jLmRlbGltaXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Bwb3BhbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcuaGVyZWRvYydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsvLi8sICdzdHJpbmcuaGVyZWRvYyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcclxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvIy4qJC8sICdjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9bXlxcLypdKy8sICdjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZzogW1xyXG4gICAgICAgICAgICBbL1xcJFxcey8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHN0cmluZ0V4cHJlc3Npb24nIH1dLFxyXG4gICAgICAgICAgICBbL1teXFxcXFwiXFwkXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAcG9wYWxsJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ0luc2lkZUV4cHJlc3Npb246IFtcclxuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdFeHByZXNzaW9uOiBbXHJcbiAgICAgICAgICAgIFsvXFx9LywgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZ0luc2lkZUV4cHJlc3Npb24nXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcnJhZm9ybScgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==