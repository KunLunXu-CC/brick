(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{768:function(e,t,n){"use strict";n.r(t),n.d(t,"conf",(function(){return i})),n.d(t,"language",(function(){return r}));var i={wordPattern:/(#?-?\d*\.\d\w*%?)|([@#!.:]?[\w-?]+%?)|[@#!.]/g,comments:{blockComment:["/*","*/"],lineComment:"//"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]},{open:"'",close:"'",notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),end:new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")}}},r={defaultToken:"",tokenPostfix:".less",identifier:"-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",identifierPlus:"-?-?([a-zA-Z:.]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-:.]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.bracket"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],tokenizer:{root:[{include:"@nestedJSBegin"},["[ \\t\\r\\n]+",""],{include:"@comments"},{include:"@keyword"},{include:"@strings"},{include:"@numbers"},["[*_]?[a-zA-Z\\-\\s]+(?=:.*(;|(\\\\$)))","attribute.name","@attribute"],["url(\\-prefix)?\\(",{token:"tag",next:"@urldeclaration"}],["[{}()\\[\\]]","@brackets"],["[,:;]","delimiter"],["#@identifierPlus","tag.id"],["&","tag"],["\\.@identifierPlus(?=\\()","tag.class","@attribute"],["\\.@identifierPlus","tag.class"],["@identifierPlus","tag"],{include:"@operators"},["@(@identifier(?=[:,\\)]))","variable","@attribute"],["@(@identifier)","variable"],["@","key","@atRules"]],nestedJSBegin:[["``","delimiter.backtick"],["`",{token:"delimiter.backtick",next:"@nestedJSEnd",nextEmbedded:"text/javascript"}]],nestedJSEnd:[["`",{token:"delimiter.backtick",next:"@pop",nextEmbedded:"@pop"}]],operators:[["[<>=\\+\\-\\*\\/\\^\\|\\~]","operator"]],keyword:[["(@[\\s]*import|![\\s]*important|true|false|when|iscolor|isnumber|isstring|iskeyword|isurl|ispixel|ispercentage|isem|hue|saturation|lightness|alpha|lighten|darken|saturate|desaturate|fadein|fadeout|fade|spin|mix|round|ceil|floor|percentage)\\b","keyword"]],urldeclaration:[{include:"@strings"},["[^)\r\n]+","string"],["\\)",{token:"tag",next:"@pop"}]],attribute:[{include:"@nestedJSBegin"},{include:"@comments"},{include:"@strings"},{include:"@numbers"},{include:"@keyword"},["[a-zA-Z\\-]+(?=\\()","attribute.value","@attribute"],[">","operator","@pop"],["@identifier","attribute.value"],{include:"@operators"},["@(@identifier)","variable"],["[)\\}]","@brackets","@pop"],["[{}()\\[\\]>]","@brackets"],["[;]","delimiter","@pop"],["[,=:]","delimiter"],["\\s",""],[".","attribute.value"]],comments:[["\\/\\*","comment","@comment"],["\\/\\/+.*","comment"]],comment:[["\\*\\/","comment","@pop"],[".","comment"]],numbers:[["(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?",{token:"attribute.value.number",next:"@units"}],["#[0-9a-fA-F_]+(?!\\w)","attribute.value.hex"]],units:[["(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?","attribute.value.unit","@pop"]],strings:[['~?"',{token:"string.delimiter",next:"@stringsEndDoubleQuote"}],["~?'",{token:"string.delimiter",next:"@stringsEndQuote"}]],stringsEndDoubleQuote:[['\\\\"',"string"],['"',{token:"string.delimiter",next:"@popall"}],[".","string"]],stringsEndQuote:[["\\\\'","string"],["'",{token:"string.delimiter",next:"@popall"}],[".","string"]],atRules:[{include:"@comments"},{include:"@strings"},["[()]","delimiter"],["[\\{;]","delimiter","@pop"],[".","key"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2xlc3MvbGVzcy5qcyJdLCJuYW1lcyI6WyJjb25mIiwid29yZFBhdHRlcm4iLCJjb21tZW50cyIsImJsb2NrQ29tbWVudCIsImxpbmVDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwibm90SW4iLCJzdXJyb3VuZGluZ1BhaXJzIiwiZm9sZGluZyIsIm1hcmtlcnMiLCJzdGFydCIsIlJlZ0V4cCIsImVuZCIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4IiwiaWRlbnRpZmllciIsImlkZW50aWZpZXJQbHVzIiwidG9rZW4iLCJ0b2tlbml6ZXIiLCJyb290IiwiaW5jbHVkZSIsIm5leHQiLCJuZXN0ZWRKU0JlZ2luIiwibmV4dEVtYmVkZGVkIiwibmVzdGVkSlNFbmQiLCJvcGVyYXRvcnMiLCJrZXl3b3JkIiwidXJsZGVjbGFyYXRpb24iLCJhdHRyaWJ1dGUiLCJjb21tZW50IiwibnVtYmVycyIsInVuaXRzIiwic3RyaW5ncyIsInN0cmluZ3NFbmREb3VibGVRdW90ZSIsInN0cmluZ3NFbmRRdW90ZSIsImF0UnVsZXMiXSwibWFwcGluZ3MiOiIyRkFBQSxxRkFLTyxJQUFJQSxFQUFPLENBQ2RDLFlBQWEsaURBQ2JDLFNBQVUsQ0FDTkMsYUFBYyxDQUFDLEtBQU0sTUFDckJDLFlBQWEsTUFFakJDLFNBQVUsQ0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssTUFFVkMsaUJBQWtCLENBQ2QsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxTQUFVLFlBQzNDLENBQUVGLEtBQU0sSUFBS0MsTUFBTyxJQUFLQyxNQUFPLENBQUMsU0FBVSxZQUMzQyxDQUFFRixLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxDQUFDLFNBQVUsWUFD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QUFvQkksS0FBTSxzQkFFaERZLHNCQUF1QixDQUNuQixDQUFDLFFBQVMsVUFDVixDQUFDLElBQUssQ0FBRWhCLE1BQU8sbUJBQW9CSSxLQUFNLFlBQ3pDLENBQUMsSUFBSyxXQUVWYSxnQkFBaUIsQ0FDYixDQUFDLFFBQVUsVUFDWCxDQUFDLElBQU0sQ0FBRWpCLE1BQU8sbUJBQW9CSSxLQUFNLFlBQzFDLENBQUMsSUFBSyxXQUVWYyxRQUFTLENBQ0wsQ0FBRWYsUUFBUyxhQUNYLENBQUVBLFFBQVMsWUFDWCxDQUFDLE9BQVEsYUFDVCxDQUFDLFNBQVUsWUFBYSxRQUN4QixDQUFDLElBQUsiLCJmaWxlIjoianMvMjUuYWIwNWQwNTQwYjdhZjZlNWUwODIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgd29yZFBhdHRlcm46IC8oIz8tP1xcZCpcXC5cXGRcXHcqJT8pfChbQCMhLjpdP1tcXHctP10rJT8pfFtAIyEuXS9nLFxyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXSxcclxuICAgICAgICBsaW5lQ29tbWVudDogJy8vJ1xyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7JywgJ30nXSxcclxuICAgICAgICBbJ1snLCAnXSddLFxyXG4gICAgICAgIFsnKCcsICcpJ10sXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKlxcXFwvXFxcXCpcXFxccyojcmVnaW9uXFxcXGJcXFxccyooLio/KVxcXFxzKlxcXFwqXFxcXC9cIiksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccypcXFxcL1xcXFwqXFxcXHMqI2VuZHJlZ2lvblxcXFxiLipcXFxcKlxcXFwvXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5sZXNzJyxcclxuICAgIGlkZW50aWZpZXI6ICctPy0/KFthLXpBLVpdfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKShbXFxcXHdcXFxcLV18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKicsXHJcbiAgICBpZGVudGlmaWVyUGx1czogJy0/LT8oW2EtekEtWjouXXwoXFxcXFxcXFwoKFswLTlhLWZBLUZdezEsNn1cXFxccz8pfFteWzAtOWEtZkEtRl0pKSkoW1xcXFx3XFxcXC06Ll18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKicsXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XHJcbiAgICBdLFxyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbmVzdGVkSlNCZWdpbicgfSxcclxuICAgICAgICAgICAgWydbIFxcXFx0XFxcXHJcXFxcbl0rJywgJyddLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BrZXl3b3JkJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXHJcbiAgICAgICAgICAgIFsnWypfXT9bYS16QS1aXFxcXC1cXFxcc10rKD89Oi4qKDt8KFxcXFxcXFxcJCkpKScsICdhdHRyaWJ1dGUubmFtZScsICdAYXR0cmlidXRlJ10sXHJcbiAgICAgICAgICAgIFsndXJsKFxcXFwtcHJlZml4KT9cXFxcKCcsIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHVybGRlY2xhcmF0aW9uJyB9XSxcclxuICAgICAgICAgICAgWydbe30oKVxcXFxbXFxcXF1dJywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbJ1ssOjtdJywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbJyNAaWRlbnRpZmllclBsdXMnLCAndGFnLmlkJ10sXHJcbiAgICAgICAgICAgIFsnJicsICd0YWcnXSxcclxuICAgICAgICAgICAgWydcXFxcLkBpZGVudGlmaWVyUGx1cyg/PVxcXFwoKScsICd0YWcuY2xhc3MnLCAnQGF0dHJpYnV0ZSddLFxyXG4gICAgICAgICAgICBbJ1xcXFwuQGlkZW50aWZpZXJQbHVzJywgJ3RhZy5jbGFzcyddLFxyXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyUGx1cycsICd0YWcnXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG9wZXJhdG9ycycgfSxcclxuICAgICAgICAgICAgWydAKEBpZGVudGlmaWVyKD89WzosXFxcXCldKSknLCAndmFyaWFibGUnLCAnQGF0dHJpYnV0ZSddLFxyXG4gICAgICAgICAgICBbJ0AoQGlkZW50aWZpZXIpJywgJ3ZhcmlhYmxlJ10sXHJcbiAgICAgICAgICAgIFsnQCcsICdrZXknLCAnQGF0UnVsZXMnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbmVzdGVkSlNCZWdpbjogW1xyXG4gICAgICAgICAgICBbJ2BgJywgJ2RlbGltaXRlci5iYWNrdGljayddLFxyXG4gICAgICAgICAgICBbJ2AnLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJhY2t0aWNrJywgbmV4dDogJ0BuZXN0ZWRKU0VuZCcsIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBuZXN0ZWRKU0VuZDogW1xyXG4gICAgICAgICAgICBbJ2AnLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJhY2t0aWNrJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgICAgICBbJ1s8Pj1cXFxcK1xcXFwtXFxcXCpcXFxcL1xcXFxeXFxcXHxcXFxcfl0nLCAnb3BlcmF0b3InXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAga2V5d29yZDogW1xyXG4gICAgICAgICAgICBbJyhAW1xcXFxzXSppbXBvcnR8IVtcXFxcc10qaW1wb3J0YW50fHRydWV8ZmFsc2V8d2hlbnxpc2NvbG9yfGlzbnVtYmVyfGlzc3RyaW5nfGlza2V5d29yZHxpc3VybHxpc3BpeGVsfGlzcGVyY2VudGFnZXxpc2VtfGh1ZXxzYXR1cmF0aW9ufGxpZ2h0bmVzc3xhbHBoYXxsaWdodGVufGRhcmtlbnxzYXR1cmF0ZXxkZXNhdHVyYXRlfGZhZGVpbnxmYWRlb3V0fGZhZGV8c3BpbnxtaXh8cm91bmR8Y2VpbHxmbG9vcnxwZXJjZW50YWdlKVxcXFxiJywgJ2tleXdvcmQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdXJsZGVjbGFyYXRpb246IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXHJcbiAgICAgICAgICAgIFsnW14pXFxyXFxuXSsnLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAndGFnJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYXR0cmlidXRlOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BuZXN0ZWRKU0JlZ2luJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbnVtYmVycycgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGtleXdvcmQnIH0sXHJcbiAgICAgICAgICAgIFsnW2EtekEtWlxcXFwtXSsoPz1cXFxcKCknLCAnYXR0cmlidXRlLnZhbHVlJywgJ0BhdHRyaWJ1dGUnXSxcclxuICAgICAgICAgICAgWyc+JywgJ29wZXJhdG9yJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWydAaWRlbnRpZmllcicsICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG9wZXJhdG9ycycgfSxcclxuICAgICAgICAgICAgWydAKEBpZGVudGlmaWVyKScsICd2YXJpYWJsZSddLFxyXG4gICAgICAgICAgICBbJ1spXFxcXH1dJywgJ0BicmFja2V0cycsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsnW3t9KClcXFxcW1xcXFxdPl0nLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsnWztdJywgJ2RlbGltaXRlcicsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsnWyw9Ol0nLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsnXFxcXHMnLCAnJ10sXHJcbiAgICAgICAgICAgIFsnLicsICdhdHRyaWJ1dGUudmFsdWUnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudHM6IFtcclxuICAgICAgICAgICAgWydcXFxcL1xcXFwqJywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcclxuICAgICAgICAgICAgWydcXFxcL1xcXFwvKy4qJywgJ2NvbW1lbnQnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWydcXFxcKlxcXFwvJywgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbJy4nLCAnY29tbWVudCddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbnVtYmVyczogW1xyXG4gICAgICAgICAgICBbJyhcXFxcZCpcXFxcLik/XFxcXGQrKFtlRV1bXFxcXC0rXT9cXFxcZCspPycsIHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUubnVtYmVyJywgbmV4dDogJ0B1bml0cycgfV0sXHJcbiAgICAgICAgICAgIFsnI1swLTlhLWZBLUZfXSsoPyFcXFxcdyknLCAnYXR0cmlidXRlLnZhbHVlLmhleCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICB1bml0czogW1xyXG4gICAgICAgICAgICBbJyhlbXxleHxjaHxyZW18dm1pbnx2bWF4fHZ3fHZofHZtfGNtfG1tfGlufHB4fHB0fHBjfGRlZ3xncmFkfHJhZHx0dXJufHN8bXN8SHp8a0h6fCUpPycsICdhdHRyaWJ1dGUudmFsdWUudW5pdCcsICdAcG9wJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ3M6IFtcclxuICAgICAgICAgICAgWyd+P1wiJywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHN0cmluZ3NFbmREb3VibGVRdW90ZScgfV0sXHJcbiAgICAgICAgICAgIFsnfj9cXCcnLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltaXRlcicsIG5leHQ6ICdAc3RyaW5nc0VuZFF1b3RlJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nc0VuZERvdWJsZVF1b3RlOiBbXHJcbiAgICAgICAgICAgIFsnXFxcXFxcXFxcIicsICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWydcIicsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3BhbGwnIH1dLFxyXG4gICAgICAgICAgICBbJy4nLCAnc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ3NFbmRRdW90ZTogW1xyXG4gICAgICAgICAgICBbJ1xcXFxcXFxcXFwnJywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbJ1xcJycsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3BhbGwnIH1dLFxyXG4gICAgICAgICAgICBbJy4nLCAnc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGF0UnVsZXM6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgWydbKCldJywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbJ1tcXFxceztdJywgJ2RlbGltaXRlcicsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsnLicsICdrZXknXVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==