(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[7131],{47131:(e,n,t)=>{"use strict";t.r(n),t.d(n,{conf:()=>o,language:()=>r});var o={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"'",close:"'"},{open:"'''",close:"'''"}],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"'",close:"'",notIn:["string","comment"]},{open:"'''",close:"'''",notIn:["string","comment"]}],autoCloseBefore:":.,=}])' \n\t",indentationRules:{increaseIndentPattern:new RegExp("^((?!\\/\\/).)*(\\{[^}\"'`]*|\\([^)\"'`]*|\\[[^\\]\"'`]*)$"),decreaseIndentPattern:new RegExp("^((?!.*?\\/\\*).*\\*/)?\\s*[\\}\\]].*$")}},r={defaultToken:"",tokenPostfix:".bicep",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"}],symbols:/[=><!~?:&|+\-*/^%]+/,keywords:["targetScope","resource","module","param","var","output","for","in","if","existing"],namedLiterals:["true","false","null"],escapes:"\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|'|\\${)",tokenizer:{root:[{include:"@expression"},{include:"@whitespace"}],stringVerbatim:[{regex:"(|'|'')[^']",action:{token:"string"}},{regex:"'''",action:{token:"string.quote",next:"@pop"}}],stringLiteral:[{regex:"\\${",action:{token:"delimiter.bracket",next:"@bracketCounting"}},{regex:"[^\\\\'$]+",action:{token:"string"}},{regex:"@escapes",action:{token:"string.escape"}},{regex:"\\\\.",action:{token:"string.escape.invalid"}},{regex:"'",action:{token:"string",next:"@pop"}}],bracketCounting:[{regex:"{",action:{token:"delimiter.bracket",next:"@bracketCounting"}},{regex:"}",action:{token:"delimiter.bracket",next:"@pop"}},{include:"expression"}],comment:[{regex:"[^\\*]+",action:{token:"comment"}},{regex:"\\*\\/",action:{token:"comment",next:"@pop"}},{regex:"[\\/*]",action:{token:"comment"}}],whitespace:[{regex:"[ \\t\\r\\n]"},{regex:"\\/\\*",action:{token:"comment",next:"@comment"}},{regex:"\\/\\/.*$",action:{token:"comment"}}],expression:[{regex:"'''",action:{token:"string.quote",next:"@stringVerbatim"}},{regex:"'",action:{token:"string.quote",next:"@stringLiteral"}},{regex:"[0-9]+",action:{token:"number"}},{regex:"\\b[_a-zA-Z][_a-zA-Z0-9]*\\b",action:{cases:{"@keywords":{token:"keyword"},"@namedLiterals":{token:"keyword"},"@default":{token:"identifier"}}}}]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9iaWNlcC9iaWNlcC5qcyJdLCJuYW1lcyI6WyJjb25mIiwiY29tbWVudHMiLCJsaW5lQ29tbWVudCIsImJsb2NrQ29tbWVudCIsImJyYWNrZXRzIiwic3Vycm91bmRpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsImF1dG9DbG9zaW5nUGFpcnMiLCJub3RJbiIsImF1dG9DbG9zZUJlZm9yZSIsImluZGVudGF0aW9uUnVsZXMiLCJpbmNyZWFzZUluZGVudFBhdHRlcm4iLCJSZWdFeHAiLCJkZWNyZWFzZUluZGVudFBhdHRlcm4iLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsInRva2VuUG9zdGZpeCIsInRva2VuIiwic3ltYm9scyIsImtleXdvcmRzIiwibmFtZWRMaXRlcmFscyIsImVzY2FwZXMiLCJ0b2tlbml6ZXIiLCJyb290IiwiaW5jbHVkZSIsInN0cmluZ1ZlcmJhdGltIiwicmVnZXgiLCJhY3Rpb24iLCJuZXh0Iiwic3RyaW5nTGl0ZXJhbCIsImJyYWNrZXRDb3VudGluZyIsImNvbW1lbnQiLCJ3aGl0ZXNwYWNlIiwiZXhwcmVzc2lvbiIsImNhc2VzIl0sIm1hcHBpbmdzIjoidUlBRUEsSUFtQldBLEVBQU8sQ0FDZEMsU0FBVSxDQUNOQyxZQUFhLEtBQ2JDLGFBQWMsQ0FBQyxLQUFNLE9BRXpCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLE1BQU9DLE1BQU8sUUFFMUJDLGlCQUFrQixDQUNkLENBQUVGLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxJQUFLRSxNQUFPLENBQUMsU0FBVSxZQUMzQyxDQUFFSCxLQUFNLE1BQU9DLE1BQU8sTUFBT0UsTUFBTyxDQUFDLFNBQVUsYUFFbkRDLGdCQUFpQixnQkFDakJDLGlCQUFrQixDQUNkQyxzQkFBdUIsSUFBSUMsT0FBTyw4REFDbENDLHNCQUF1QixJQUFJRCxPQUFPLDRDQUcvQkUsRUFBVyxDQUNsQkMsYUFBYyxHQUNkQyxhQUFjLFNBQ2RiLFNBQVUsQ0FDTixDQUFFRSxLQUFNLElBQUtDLE1BQU8sSUFBS1csTUFBTyxtQkFDaEMsQ0FBRVosS0FBTSxJQUFLQyxNQUFPLElBQUtXLE1BQU8sb0JBQ2hDLENBQUVaLEtBQU0sSUFBS0MsTUFBTyxJQUFLVyxNQUFPLDBCQUVwQ0MsUUFBUyxzQkFDVEMsU0F0RFcsQ0FDWCxjQUNBLFdBQ0EsU0FDQSxRQUNBLE1BQ0EsU0FDQSxNQUNBLEtBQ0EsS0FDQSxZQTZDQUMsY0EzQ2dCLENBQUMsT0FBUSxRQUFTLFFBNENsQ0MsUUFBUywwQ0FDVEMsVUFBVyxDQUNQQyxLQUFNLENBQUMsQ0FBRUMsUUFBUyxlQUFpQixDQUFFQSxRQUFTLGdCQUM5Q0MsZUFBZ0IsQ0FDWixDQUFFQyxNQUFPLGNBQWVDLE9BQVEsQ0FBRVYsTUFBTyxXQUN6QyxDQUFFUyxNQUFPLE1BQU9DLE9BQVEsQ0FBRVYsTUFBTyxlQUFnQlcsS0FBTSxVQUUzREMsY0FBZSxDQUNYLENBQUVILE1BQU8sT0FBUUMsT0FBUSxDQUFFVixNQUFPLG9CQUFxQlcsS0FBTSxxQkFDN0QsQ0FBRUYsTUFBTyxhQUFjQyxPQUFRLENBQUVWLE1BQU8sV0FDeEMsQ0FBRVMsTUFBTyxXQUFZQyxPQUFRLENBQUVWLE1BQU8sa0JBQ3RDLENBQUVTLE1BQU8sUUFBU0MsT0FBUSxDQUFFVixNQUFPLDBCQUNuQyxDQUFFUyxNQUFPLElBQUtDLE9BQVEsQ0FBRVYsTUFBTyxTQUFVVyxLQUFNLFVBRW5ERSxnQkFBaUIsQ0FDYixDQUFFSixNQUFPLElBQUtDLE9BQVEsQ0FBRVYsTUFBTyxvQkFBcUJXLEtBQU0scUJBQzFELENBQUVGLE1BQU8sSUFBS0MsT0FBUSxDQUFFVixNQUFPLG9CQUFxQlcsS0FBTSxTQUMxRCxDQUFFSixRQUFTLGVBRWZPLFFBQVMsQ0FDTCxDQUFFTCxNQUFPLFVBQVdDLE9BQVEsQ0FBRVYsTUFBTyxZQUNyQyxDQUFFUyxNQUFPLFNBQVVDLE9BQVEsQ0FBRVYsTUFBTyxVQUFXVyxLQUFNLFNBQ3JELENBQUVGLE1BQU8sU0FBVUMsT0FBUSxDQUFFVixNQUFPLGFBRXhDZSxXQUFZLENBQ1IsQ0FBRU4sTUFwRUssZ0JBcUVQLENBQUVBLE1BQU8sU0FBVUMsT0FBUSxDQUFFVixNQUFPLFVBQVdXLEtBQU0sYUFDckQsQ0FBRUYsTUFBTyxZQUFhQyxPQUFRLENBQUVWLE1BQU8sYUFFM0NnQixXQUFZLENBQ1IsQ0FBRVAsTUFBTyxNQUFPQyxPQUFRLENBQUVWLE1BQU8sZUFBZ0JXLEtBQU0sb0JBQ3ZELENBQUVGLE1BQU8sSUFBS0MsT0FBUSxDQUFFVixNQUFPLGVBQWdCVyxLQUFNLG1CQUNyRCxDQUFFRixNQTFFTyxTQTBFZ0JDLE9BQVEsQ0FBRVYsTUFBTyxXQUMxQyxDQUNJUyxNQTlGdUIsK0JBK0Z2QkMsT0FBUSxDQUNKTyxNQUFPLENBQ0gsWUFBYSxDQUFFakIsTUFBTyxXQUN0QixpQkFBa0IsQ0FBRUEsTUFBTyxXQUMzQixXQUFZLENBQUVBLE1BQU8iLCJmaWxlIjoianMvNzEzMS4xM2M3ZGZjOTc0YWJmMjJhYTk0Ni5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG52YXIgYm91bmRlZCA9IGZ1bmN0aW9uICh0ZXh0KSB7IHJldHVybiBcIlxcXFxiXCIgKyB0ZXh0ICsgXCJcXFxcYlwiOyB9O1xyXG52YXIgaWRlbnRpZmllclN0YXJ0ID0gJ1tfYS16QS1aXSc7XHJcbnZhciBpZGVudGlmaWVyQ29udGludWUgPSAnW19hLXpBLVowLTldJztcclxudmFyIGlkZW50aWZpZXIgPSBib3VuZGVkKFwiXCIgKyBpZGVudGlmaWVyU3RhcnQgKyBpZGVudGlmaWVyQ29udGludWUgKyBcIipcIik7XHJcbnZhciBrZXl3b3JkcyA9IFtcclxuICAgICd0YXJnZXRTY29wZScsXHJcbiAgICAncmVzb3VyY2UnLFxyXG4gICAgJ21vZHVsZScsXHJcbiAgICAncGFyYW0nLFxyXG4gICAgJ3ZhcicsXHJcbiAgICAnb3V0cHV0JyxcclxuICAgICdmb3InLFxyXG4gICAgJ2luJyxcclxuICAgICdpZicsXHJcbiAgICAnZXhpc3RpbmcnXHJcbl07XHJcbnZhciBuYW1lZExpdGVyYWxzID0gWyd0cnVlJywgJ2ZhbHNlJywgJ251bGwnXTtcclxudmFyIG5vbkNvbW1lbnRXcyA9IFwiWyBcXFxcdFxcXFxyXFxcXG5dXCI7XHJcbnZhciBudW1lcmljTGl0ZXJhbCA9IFwiWzAtOV0rXCI7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ11cclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxyXG4gICAgICAgIHsgb3BlbjogXCInJydcIiwgY2xvc2U6IFwiJycnXCIgfVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46IFwiJycnXCIsIGNsb3NlOiBcIicnJ1wiLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH1cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2VCZWZvcmU6IFwiOi4sPX1dKScgXFxuXFx0XCIsXHJcbiAgICBpbmRlbnRhdGlvblJ1bGVzOiB7XHJcbiAgICAgICAgaW5jcmVhc2VJbmRlbnRQYXR0ZXJuOiBuZXcgUmVnRXhwKCdeKCg/IVxcXFwvXFxcXC8pLikqKFxcXFx7W159XCJcXCdgXSp8XFxcXChbXilcIlxcJ2BdKnxcXFxcW1teXFxcXF1cIlxcJ2BdKikkJyksXHJcbiAgICAgICAgZGVjcmVhc2VJbmRlbnRQYXR0ZXJuOiBuZXcgUmVnRXhwKCdeKCg/IS4qP1xcXFwvXFxcXCopLipcXFxcKi8pP1xcXFxzKltcXFxcfVxcXFxdXS4qJCcpXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmJpY2VwJyxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9XHJcbiAgICBdLFxyXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKi9eJV0rLyxcclxuICAgIGtleXdvcmRzOiBrZXl3b3JkcyxcclxuICAgIG5hbWVkTGl0ZXJhbHM6IG5hbWVkTGl0ZXJhbHMsXHJcbiAgICBlc2NhcGVzOiBcIlxcXFxcXFxcKHV7WzAtOUEtRmEtZl0rfXxufHJ8dHxcXFxcXFxcXHwnfFxcXFwkeylcIixcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFt7IGluY2x1ZGU6ICdAZXhwcmVzc2lvbicgfSwgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH1dLFxyXG4gICAgICAgIHN0cmluZ1ZlcmJhdGltOiBbXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IFwiKHwnfCcnKVteJ11cIiwgYWN0aW9uOiB7IHRva2VuOiAnc3RyaW5nJyB9IH0sXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IFwiJycnXCIsIGFjdGlvbjogeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9IH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ0xpdGVyYWw6IFtcclxuICAgICAgICAgICAgeyByZWdleDogXCJcXFxcJHtcIiwgYWN0aW9uOiB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQGJyYWNrZXRDb3VudGluZycgfSB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiBcIlteXFxcXFxcXFwnJF0rXCIsIGFjdGlvbjogeyB0b2tlbjogJ3N0cmluZycgfSB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiAnQGVzY2FwZXMnLCBhY3Rpb246IHsgdG9rZW46ICdzdHJpbmcuZXNjYXBlJyB9IH0sXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IFwiXFxcXFxcXFwuXCIsIGFjdGlvbjogeyB0b2tlbjogJ3N0cmluZy5lc2NhcGUuaW52YWxpZCcgfSB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiBcIidcIiwgYWN0aW9uOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0gfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYnJhY2tldENvdW50aW5nOiBbXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IFwie1wiLCBhY3Rpb246IHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG5leHQ6ICdAYnJhY2tldENvdW50aW5nJyB9IH0sXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IFwifVwiLCBhY3Rpb246IHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG5leHQ6ICdAcG9wJyB9IH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ2V4cHJlc3Npb24nIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgeyByZWdleDogXCJbXlxcXFwqXStcIiwgYWN0aW9uOiB7IHRva2VuOiAnY29tbWVudCcgfSB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiBcIlxcXFwqXFxcXC9cIiwgYWN0aW9uOiB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAcG9wJyB9IH0sXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IFwiW1xcXFwvKl1cIiwgYWN0aW9uOiB7IHRva2VuOiAnY29tbWVudCcgfSB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IG5vbkNvbW1lbnRXcyB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiBcIlxcXFwvXFxcXCpcIiwgYWN0aW9uOiB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAY29tbWVudCcgfSB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiBcIlxcXFwvXFxcXC8uKiRcIiwgYWN0aW9uOiB7IHRva2VuOiAnY29tbWVudCcgfSB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBleHByZXNzaW9uOiBbXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IFwiJycnXCIsIGFjdGlvbjogeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAc3RyaW5nVmVyYmF0aW0nIH0gfSxcclxuICAgICAgICAgICAgeyByZWdleDogXCInXCIsIGFjdGlvbjogeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAc3RyaW5nTGl0ZXJhbCcgfSB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiBudW1lcmljTGl0ZXJhbCwgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyJyB9IH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiBpZGVudGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG5hbWVkTGl0ZXJhbHMnOiB7IHRva2VuOiAna2V5d29yZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ2lkZW50aWZpZXInIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=