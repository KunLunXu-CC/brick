(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[6082],{86082:(e,t,o)=>{"use strict";o.r(t),o.d(t,{conf:()=>r,language:()=>n});var r={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["{","}"]},brackets:[["{","}"],["[","]"],["(",")"],["<",">"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*\\{\\$REGION(\\s\\'.*\\')?\\}"),end:new RegExp("^\\s*\\{\\$ENDREGION\\}")}}},n={defaultToken:"",tokenPostfix:".pascal",ignoreCase:!0,brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],keywords:["absolute","abstract","all","and_then","array","as","asm","attribute","begin","bindable","case","class","const","contains","default","div","else","end","except","exports","external","far","file","finalization","finally","forward","generic","goto","if","implements","import","in","index","inherited","initialization","interrupt","is","label","library","mod","module","name","near","not","object","of","on","only","operator","or_else","otherwise","override","package","packed","pow","private","program","protected","public","published","interface","implementation","qualified","read","record","resident","requires","resourcestring","restricted","segment","set","shl","shr","specialize","stored","then","threadvar","to","try","type","unit","uses","var","view","virtual","dynamic","overload","reintroduce","with","write","xor","true","false","procedure","function","constructor","destructor","property","break","continue","exit","abort","while","do","for","raise","repeat","until"],typeKeywords:["boolean","double","byte","integer","shortint","char","longint","float","string"],operators:["=",">","<","<=",">=","<>",":",":=","and","or","+","-","*","/","@","&","^","%"],symbols:/[=><:@\^&|+\-*\/\^%]+/,tokenizer:{root:[[/[a-zA-Z_][\w]*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/\$[0-9a-fA-F]{1,16}/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/'/,"string","@string"],[/'[^\\']'/,"string"],[/'/,"string.invalid"],[/\#\d+/,"string"]],comment:[[/[^\*\}]+/,"comment"],[/\}/,"comment","@pop"],[/[\{]/,"comment"]],string:[[/[^\\']+/,"string"],[/\\./,"string.escape.invalid"],[/'/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\{/,"comment","@comment"],[/\/\/.*$/,"comment"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9wYXNjYWwvcGFzY2FsLmpzIl0sIm5hbWVzIjpbImNvbmYiLCJ3b3JkUGF0dGVybiIsImNvbW1lbnRzIiwibGluZUNvbW1lbnQiLCJibG9ja0NvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJzdXJyb3VuZGluZ1BhaXJzIiwiZm9sZGluZyIsIm1hcmtlcnMiLCJzdGFydCIsIlJlZ0V4cCIsImVuZCIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4IiwiaWdub3JlQ2FzZSIsInRva2VuIiwia2V5d29yZHMiLCJ0eXBlS2V5d29yZHMiLCJvcGVyYXRvcnMiLCJzeW1ib2xzIiwidG9rZW5pemVyIiwicm9vdCIsImNhc2VzIiwiaW5jbHVkZSIsImNvbW1lbnQiLCJzdHJpbmciLCJicmFja2V0IiwibmV4dCIsIndoaXRlc3BhY2UiXSwibWFwcGluZ3MiOiJ1SUFJTyxJQUFJQSxFQUFPLENBRWRDLFlBQWEscUZBQ2JDLFNBQVUsQ0FDTkMsWUFBYSxLQUNiQyxhQUFjLENBQUMsSUFBSyxNQUV4QkMsU0FBVSxDQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxNQUVWQyxpQkFBa0IsQ0FDZCxDQUFFQyxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE1BRXhCQyxpQkFBa0IsQ0FDZCxDQUFFRixLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE1BRXhCRSxRQUFTLENBQ0xDLFFBQVMsQ0FDTEMsTUFBTyxJQUFJQyxPQUFPLHNDQUNsQkMsSUFBSyxJQUFJRCxPQUFPLDhCQUlqQkUsRUFBVyxDQUNsQkMsYUFBYyxHQUNkQyxhQUFjLFVBQ2RDLFlBQVksRUFDWmIsU0FBVSxDQUNOLENBQUVFLEtBQU0sSUFBS0MsTUFBTyxJQUFLVyxNQUFPLG1CQUNoQyxDQUFFWixLQUFNLElBQUtDLE1BQU8sSUFBS1csTUFBTyxvQkFDaEMsQ0FBRVosS0FBTSxJQUFLQyxNQUFPLElBQUtXLE1BQU8seUJBQ2hDLENBQUVaLEtBQU0sSUFBS0MsTUFBTyxJQUFLVyxNQUFPLG9CQUVwQ0MsU0FBVSxDQUNOLFdBQ0EsV0FDQSxNQUNBLFdBQ0EsUUFDQSxLQUNBLE1BQ0EsWUFDQSxRQUNBLFdBQ0EsT0FDQSxRQUNBLFFBQ0EsV0FDQSxVQUNBLE1BQ0EsT0FDQSxNQUNBLFNBQ0EsVUFDQSxXQUNBLE1BQ0EsT0FDQSxlQUNBLFVBQ0EsVUFDQSxVQUNBLE9BQ0EsS0FDQSxhQUNBLFNBQ0EsS0FDQSxRQUNBLFlBQ0EsaUJBQ0EsWUFDQSxLQUNBLFFBQ0EsVUFDQSxNQUNBLFNBQ0EsT0FDQSxPQUNBLE1BQ0EsU0FDQSxLQUNBLEtBQ0EsT0FDQSxXQUNBLFVBQ0EsWUFDQSxXQUNBLFVBQ0EsU0FDQSxNQUNBLFVBQ0EsVUFDQSxZQUNBLFNBQ0EsWUFDQSxZQUNBLGlCQUNBLFlBQ0EsT0FDQSxTQUNBLFdBQ0EsV0FDQSxpQkFDQSxhQUNBLFVBQ0EsTUFDQSxNQUNBLE1BQ0EsYUFDQSxTQUNBLE9BQ0EsWUFDQSxLQUNBLE1BQ0EsT0FDQSxPQUNBLE9BQ0EsTUFDQSxPQUNBLFVBQ0EsVUFDQSxXQUNBLGNBQ0EsT0FDQSxRQUNBLE1BQ0EsT0FDQSxRQUNBLFlBQ0EsV0FDQSxjQUNBLGFBQ0EsV0FDQSxRQUNBLFdBQ0EsT0FDQSxRQUNBLFFBQ0EsS0FDQSxNQUNBLFFBQ0EsU0FDQSxTQUVKQyxhQUFjLENBQ1YsVUFDQSxTQUNBLE9BQ0EsVUFDQSxXQUNBLE9BQ0EsVUFDQSxRQUNBLFVBRUpDLFVBQVcsQ0FDUCxJQUNBLElBQ0EsSUFDQSxLQUNBLEtBQ0EsS0FDQSxJQUNBLEtBQ0EsTUFDQSxLQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsS0FHSkMsUUFBUyx3QkFFVEMsVUFBVyxDQUNQQyxLQUFNLENBRUYsQ0FDSSxpQkFDQSxDQUNJQyxNQUFPLENBQ0gsWUFBYSxDQUFFUCxNQUFPLGNBQ3RCLFdBQVksZ0JBS3hCLENBQUVRLFFBQVMsZUFFWCxDQUFDLGFBQWMsYUFDZixDQUFDLG1CQUFvQixhQUNyQixDQUNJLFdBQ0EsQ0FDSUQsTUFBTyxDQUNILGFBQWMsWUFDZCxXQUFZLE1BS3hCLENBQUMsMkJBQTRCLGdCQUM3QixDQUFDLHNCQUF1QixjQUN4QixDQUFDLE1BQU8sVUFFUixDQUFDLFFBQVMsYUFFVixDQUFDLGtCQUFtQixrQkFDcEIsQ0FBQyxJQUFLLFNBQVUsV0FFaEIsQ0FBQyxXQUFZLFVBQ2IsQ0FBQyxJQUFLLGtCQUNOLENBQUMsUUFBUyxXQUVkRSxRQUFTLENBQ0wsQ0FBQyxXQUFZLFdBRWIsQ0FBQyxLQUFNLFVBQVcsUUFDbEIsQ0FBQyxPQUFRLFlBRWJDLE9BQVEsQ0FDSixDQUFDLFVBQVcsVUFDWixDQUFDLE1BQU8seUJBQ1IsQ0FBQyxJQUFLLENBQUVWLE1BQU8sZUFBZ0JXLFFBQVMsU0FBVUMsS0FBTSxVQUU1REMsV0FBWSxDQUNSLENBQUMsYUFBYyxTQUNmLENBQUMsS0FBTSxVQUFXLFlBQ2xCLENBQUMsVUFBVyIsImZpbGUiOiJqcy82MDgyLmU1YzljYjdkNGJkZmIwNDJkZTJlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICAvLyB0aGUgZGVmYXVsdCBzZXBhcmF0b3JzIGV4Y2VwdCBgQCRgXHJcbiAgICB3b3JkUGF0dGVybjogLygtP1xcZCpcXC5cXGRcXHcqKXwoW15cXGBcXH5cXCFcXCNcXCVcXF5cXCZcXCpcXChcXClcXC1cXD1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcP1xcc10rKS9nLFxyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsneycsICd9J11cclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddLFxyXG4gICAgICAgIFsnPCcsICc+J11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9LFxyXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqXFxcXHtcXFxcJFJFR0lPTihcXFxcc1xcXFwnLipcXFxcJyk/XFxcXH1cIiksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKlxcXFx7XFxcXCRFTkRSRUdJT05cXFxcfScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5wYXNjYWwnLFxyXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCB0b2tlbjogJ2RlbGltaXRlci5hbmdsZScgfVxyXG4gICAgXSxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgJ2Fic29sdXRlJyxcclxuICAgICAgICAnYWJzdHJhY3QnLFxyXG4gICAgICAgICdhbGwnLFxyXG4gICAgICAgICdhbmRfdGhlbicsXHJcbiAgICAgICAgJ2FycmF5JyxcclxuICAgICAgICAnYXMnLFxyXG4gICAgICAgICdhc20nLFxyXG4gICAgICAgICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICdiZWdpbicsXHJcbiAgICAgICAgJ2JpbmRhYmxlJyxcclxuICAgICAgICAnY2FzZScsXHJcbiAgICAgICAgJ2NsYXNzJyxcclxuICAgICAgICAnY29uc3QnLFxyXG4gICAgICAgICdjb250YWlucycsXHJcbiAgICAgICAgJ2RlZmF1bHQnLFxyXG4gICAgICAgICdkaXYnLFxyXG4gICAgICAgICdlbHNlJyxcclxuICAgICAgICAnZW5kJyxcclxuICAgICAgICAnZXhjZXB0JyxcclxuICAgICAgICAnZXhwb3J0cycsXHJcbiAgICAgICAgJ2V4dGVybmFsJyxcclxuICAgICAgICAnZmFyJyxcclxuICAgICAgICAnZmlsZScsXHJcbiAgICAgICAgJ2ZpbmFsaXphdGlvbicsXHJcbiAgICAgICAgJ2ZpbmFsbHknLFxyXG4gICAgICAgICdmb3J3YXJkJyxcclxuICAgICAgICAnZ2VuZXJpYycsXHJcbiAgICAgICAgJ2dvdG8nLFxyXG4gICAgICAgICdpZicsXHJcbiAgICAgICAgJ2ltcGxlbWVudHMnLFxyXG4gICAgICAgICdpbXBvcnQnLFxyXG4gICAgICAgICdpbicsXHJcbiAgICAgICAgJ2luZGV4JyxcclxuICAgICAgICAnaW5oZXJpdGVkJyxcclxuICAgICAgICAnaW5pdGlhbGl6YXRpb24nLFxyXG4gICAgICAgICdpbnRlcnJ1cHQnLFxyXG4gICAgICAgICdpcycsXHJcbiAgICAgICAgJ2xhYmVsJyxcclxuICAgICAgICAnbGlicmFyeScsXHJcbiAgICAgICAgJ21vZCcsXHJcbiAgICAgICAgJ21vZHVsZScsXHJcbiAgICAgICAgJ25hbWUnLFxyXG4gICAgICAgICduZWFyJyxcclxuICAgICAgICAnbm90JyxcclxuICAgICAgICAnb2JqZWN0JyxcclxuICAgICAgICAnb2YnLFxyXG4gICAgICAgICdvbicsXHJcbiAgICAgICAgJ29ubHknLFxyXG4gICAgICAgICdvcGVyYXRvcicsXHJcbiAgICAgICAgJ29yX2Vsc2UnLFxyXG4gICAgICAgICdvdGhlcndpc2UnLFxyXG4gICAgICAgICdvdmVycmlkZScsXHJcbiAgICAgICAgJ3BhY2thZ2UnLFxyXG4gICAgICAgICdwYWNrZWQnLFxyXG4gICAgICAgICdwb3cnLFxyXG4gICAgICAgICdwcml2YXRlJyxcclxuICAgICAgICAncHJvZ3JhbScsXHJcbiAgICAgICAgJ3Byb3RlY3RlZCcsXHJcbiAgICAgICAgJ3B1YmxpYycsXHJcbiAgICAgICAgJ3B1Ymxpc2hlZCcsXHJcbiAgICAgICAgJ2ludGVyZmFjZScsXHJcbiAgICAgICAgJ2ltcGxlbWVudGF0aW9uJyxcclxuICAgICAgICAncXVhbGlmaWVkJyxcclxuICAgICAgICAncmVhZCcsXHJcbiAgICAgICAgJ3JlY29yZCcsXHJcbiAgICAgICAgJ3Jlc2lkZW50JyxcclxuICAgICAgICAncmVxdWlyZXMnLFxyXG4gICAgICAgICdyZXNvdXJjZXN0cmluZycsXHJcbiAgICAgICAgJ3Jlc3RyaWN0ZWQnLFxyXG4gICAgICAgICdzZWdtZW50JyxcclxuICAgICAgICAnc2V0JyxcclxuICAgICAgICAnc2hsJyxcclxuICAgICAgICAnc2hyJyxcclxuICAgICAgICAnc3BlY2lhbGl6ZScsXHJcbiAgICAgICAgJ3N0b3JlZCcsXHJcbiAgICAgICAgJ3RoZW4nLFxyXG4gICAgICAgICd0aHJlYWR2YXInLFxyXG4gICAgICAgICd0bycsXHJcbiAgICAgICAgJ3RyeScsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd1bml0JyxcclxuICAgICAgICAndXNlcycsXHJcbiAgICAgICAgJ3ZhcicsXHJcbiAgICAgICAgJ3ZpZXcnLFxyXG4gICAgICAgICd2aXJ0dWFsJyxcclxuICAgICAgICAnZHluYW1pYycsXHJcbiAgICAgICAgJ292ZXJsb2FkJyxcclxuICAgICAgICAncmVpbnRyb2R1Y2UnLFxyXG4gICAgICAgICd3aXRoJyxcclxuICAgICAgICAnd3JpdGUnLFxyXG4gICAgICAgICd4b3InLFxyXG4gICAgICAgICd0cnVlJyxcclxuICAgICAgICAnZmFsc2UnLFxyXG4gICAgICAgICdwcm9jZWR1cmUnLFxyXG4gICAgICAgICdmdW5jdGlvbicsXHJcbiAgICAgICAgJ2NvbnN0cnVjdG9yJyxcclxuICAgICAgICAnZGVzdHJ1Y3RvcicsXHJcbiAgICAgICAgJ3Byb3BlcnR5JyxcclxuICAgICAgICAnYnJlYWsnLFxyXG4gICAgICAgICdjb250aW51ZScsXHJcbiAgICAgICAgJ2V4aXQnLFxyXG4gICAgICAgICdhYm9ydCcsXHJcbiAgICAgICAgJ3doaWxlJyxcclxuICAgICAgICAnZG8nLFxyXG4gICAgICAgICdmb3InLFxyXG4gICAgICAgICdyYWlzZScsXHJcbiAgICAgICAgJ3JlcGVhdCcsXHJcbiAgICAgICAgJ3VudGlsJ1xyXG4gICAgXSxcclxuICAgIHR5cGVLZXl3b3JkczogW1xyXG4gICAgICAgICdib29sZWFuJyxcclxuICAgICAgICAnZG91YmxlJyxcclxuICAgICAgICAnYnl0ZScsXHJcbiAgICAgICAgJ2ludGVnZXInLFxyXG4gICAgICAgICdzaG9ydGludCcsXHJcbiAgICAgICAgJ2NoYXInLFxyXG4gICAgICAgICdsb25naW50JyxcclxuICAgICAgICAnZmxvYXQnLFxyXG4gICAgICAgICdzdHJpbmcnXHJcbiAgICBdLFxyXG4gICAgb3BlcmF0b3JzOiBbXHJcbiAgICAgICAgJz0nLFxyXG4gICAgICAgICc+JyxcclxuICAgICAgICAnPCcsXHJcbiAgICAgICAgJzw9JyxcclxuICAgICAgICAnPj0nLFxyXG4gICAgICAgICc8PicsXHJcbiAgICAgICAgJzonLFxyXG4gICAgICAgICc6PScsXHJcbiAgICAgICAgJ2FuZCcsXHJcbiAgICAgICAgJ29yJyxcclxuICAgICAgICAnKycsXHJcbiAgICAgICAgJy0nLFxyXG4gICAgICAgICcqJyxcclxuICAgICAgICAnLycsXHJcbiAgICAgICAgJ0AnLFxyXG4gICAgICAgICcmJyxcclxuICAgICAgICAnXicsXHJcbiAgICAgICAgJyUnXHJcbiAgICBdLFxyXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xyXG4gICAgc3ltYm9sczogL1s9Pjw6QFxcXiZ8K1xcLSpcXC9cXF4lXSsvLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvW2EtekEtWl9dW1xcd10qLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXHJcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbL1s8Pl0oPyFAc3ltYm9scykvLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9Ac3ltYm9scy8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnZGVsaW1pdGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIC8vIG51bWJlcnNcclxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy9cXCRbMC05YS1mQS1GXXsxLDE2fS8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xyXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzXHJcbiAgICAgICAgICAgIFsvJyhbXidcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0BzdHJpbmcnXSxcclxuICAgICAgICAgICAgLy8gY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICBbLydbXlxcXFwnXScvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1xcI1xcZCsvLCAnc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9bXlxcKlxcfV0rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgLy9bL1xcKFxcKi8sICAgICdjb21tZW50JywgJ0BwdXNoJyBdLCAgICAvLyBuZXN0ZWQgY29tbWVudCAgbm90IGFsbG93ZWQgOi0oXHJcbiAgICAgICAgICAgIFsvXFx9LywgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1tcXHtdLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbLycvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXSxcclxuICAgICAgICAgICAgWy9cXHsvLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J11cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=