(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[4129],{84129:(e,s,o)=>{"use strict";o.r(s),o.d(s,{conf:()=>t,language:()=>n});var t={comments:{lineComment:"REM"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],surroundingPairs:[{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],folding:{markers:{start:new RegExp("^\\s*(::\\s*|REM\\s+)#region"),end:new RegExp("^\\s*(::\\s*|REM\\s+)#endregion")}}},n={defaultToken:"",ignoreCase:!0,tokenPostfix:".bat",brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"}],keywords:/call|defined|echo|errorlevel|exist|for|goto|if|pause|set|shift|start|title|not|pushd|popd/,symbols:/[=><!~?&|+\-*\/\^;\.,]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/^(\s*)(rem(?:\s.*|))$/,["","comment"]],[/(\@?)(@keywords)(?!\w)/,[{token:"keyword"},{token:"keyword.$2"}]],[/[ \t\r\n]+/,""],[/setlocal(?!\w)/,"keyword.tag-setlocal"],[/endlocal(?!\w)/,"keyword.tag-setlocal"],[/[a-zA-Z_]\w*/,""],[/:\w*/,"metatag"],[/%[^%]+%/,"variable"],[/%%[\w]+(?!\w)/,"variable"],[/[{}()\[\]]/,"@brackets"],[/@symbols/,"delimiter"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/"/,"string",'@string."'],[/'/,"string","@string.'"]],string:[[/[^\\"'%]+/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/%[\w ]+%/,"variable"],[/%%[\w]+(?!\w)/,"variable"],[/["']/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":"string"}}],[/$/,"string","@popall"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9iYXQvYmF0LmpzIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwic3Vycm91bmRpbmdQYWlycyIsImZvbGRpbmciLCJtYXJrZXJzIiwic3RhcnQiLCJSZWdFeHAiLCJlbmQiLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsImlnbm9yZUNhc2UiLCJ0b2tlblBvc3RmaXgiLCJ0b2tlbiIsImtleXdvcmRzIiwic3ltYm9scyIsImVzY2FwZXMiLCJ0b2tlbml6ZXIiLCJyb290Iiwic3RyaW5nIiwiY2FzZXMiLCJuZXh0Il0sIm1hcHBpbmdzIjoidUlBSU8sSUFBSUEsRUFBTyxDQUNkQyxTQUFVLENBQ05DLFlBQWEsT0FFakJDLFNBQVUsQ0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssTUFFVkMsaUJBQWtCLENBQ2QsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE1BRXhCQyxpQkFBa0IsQ0FDZCxDQUFFRixLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxNQUV4QkUsUUFBUyxDQUNMQyxRQUFTLENBQ0xDLE1BQU8sSUFBSUMsT0FBTyxnQ0FDbEJDLElBQUssSUFBSUQsT0FBTyxzQ0FJakJFLEVBQVcsQ0FDbEJDLGFBQWMsR0FDZEMsWUFBWSxFQUNaQyxhQUFjLE9BQ2RiLFNBQVUsQ0FDTixDQUFFYyxNQUFPLG9CQUFxQlosS0FBTSxJQUFLQyxNQUFPLEtBQ2hELENBQUVXLE1BQU8sd0JBQXlCWixLQUFNLElBQUtDLE1BQU8sS0FDcEQsQ0FBRVcsTUFBTyxtQkFBb0JaLEtBQU0sSUFBS0MsTUFBTyxNQUVuRFksU0FBVSw0RkFFVkMsUUFBUywwQkFDVEMsUUFBUyx3RUFFVEMsVUFBVyxDQUNQQyxLQUFNLENBQ0YsQ0FBQyx3QkFBeUIsQ0FBQyxHQUFJLFlBQy9CLENBQUMseUJBQTBCLENBQUMsQ0FBRUwsTUFBTyxXQUFhLENBQUVBLE1BQU8sZ0JBRTNELENBQUMsYUFBYyxJQUVmLENBQUMsaUJBQWtCLHdCQUNuQixDQUFDLGlCQUFrQix3QkFFbkIsQ0FBQyxlQUFnQixJQUVqQixDQUFDLE9BQVEsV0FFVCxDQUFDLFVBQVcsWUFDWixDQUFDLGdCQUFpQixZQUVsQixDQUFDLGFBQWMsYUFDZixDQUFDLFdBQVksYUFFYixDQUFDLDJCQUE0QixnQkFDN0IsQ0FBQyxnQ0FBaUMsY0FDbEMsQ0FBQyxNQUFPLFVBRVIsQ0FBQyxRQUFTLGFBRVYsQ0FBQyxJQUFLLFNBQVUsYUFDaEIsQ0FBQyxJQUFLLFNBQVUsY0FFcEJNLE9BQVEsQ0FDSixDQUNJLFlBQ0EsQ0FDSUMsTUFBTyxDQUNILE9BQVEsQ0FBRVAsTUFBTyxTQUFVUSxLQUFNLFdBQ2pDLFdBQVksWUFJeEIsQ0FBQyxXQUFZLGlCQUNiLENBQUMsTUFBTyx5QkFDUixDQUFDLFdBQVksWUFDYixDQUFDLGdCQUFpQixZQUNsQixDQUNJLE9BQ0EsQ0FDSUQsTUFBTyxDQUNILFVBQVcsQ0FBRVAsTUFBTyxTQUFVUSxLQUFNLFFBQ3BDLFdBQVksWUFJeEIsQ0FBQyxJQUFLLFNBQVUiLCJmaWxlIjoianMvNDEyOS5jNDY5MmJiNDM3MTJjNTRkZWVmNy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJ1JFTSdcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfVxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9XHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoJ15cXFxccyooOjpcXFxccyp8UkVNXFxcXHMrKSNyZWdpb24nKSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqKDo6XFxcXHMqfFJFTVxcXFxzKykjZW5kcmVnaW9uJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcclxuICAgIHRva2VuUG9zdGZpeDogJy5iYXQnLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfVxyXG4gICAgXSxcclxuICAgIGtleXdvcmRzOiAvY2FsbHxkZWZpbmVkfGVjaG98ZXJyb3JsZXZlbHxleGlzdHxmb3J8Z290b3xpZnxwYXVzZXxzZXR8c2hpZnR8c3RhcnR8dGl0bGV8bm90fHB1c2hkfHBvcGQvLFxyXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xyXG4gICAgc3ltYm9sczogL1s9Pjwhfj8mfCtcXC0qXFwvXFxeO1xcLixdKy8sXHJcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIFsvXihcXHMqKShyZW0oPzpcXHMuKnwpKSQvLCBbJycsICdjb21tZW50J11dLFxyXG4gICAgICAgICAgICBbLyhcXEA/KShAa2V5d29yZHMpKD8hXFx3KS8sIFt7IHRva2VuOiAna2V5d29yZCcgfSwgeyB0b2tlbjogJ2tleXdvcmQuJDInIH1dXSxcclxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXHJcbiAgICAgICAgICAgIC8vIGJsb2Nrc1xyXG4gICAgICAgICAgICBbL3NldGxvY2FsKD8hXFx3KS8sICdrZXl3b3JkLnRhZy1zZXRsb2NhbCddLFxyXG4gICAgICAgICAgICBbL2VuZGxvY2FsKD8hXFx3KS8sICdrZXl3b3JkLnRhZy1zZXRsb2NhbCddLFxyXG4gICAgICAgICAgICAvLyB3b3Jkc1xyXG4gICAgICAgICAgICBbL1thLXpBLVpfXVxcdyovLCAnJ10sXHJcbiAgICAgICAgICAgIC8vIGxhYmVsc1xyXG4gICAgICAgICAgICBbLzpcXHcqLywgJ21ldGF0YWcnXSxcclxuICAgICAgICAgICAgLy8gdmFyaWFibGVzXHJcbiAgICAgICAgICAgIFsvJVteJV0rJS8sICd2YXJpYWJsZSddLFxyXG4gICAgICAgICAgICBbLyUlW1xcd10rKD8hXFx3KS8sICd2YXJpYWJsZSddLFxyXG4gICAgICAgICAgICAvLyBwdW5jdHVhdGlvbnNcclxuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIC8vIG51bWJlcnNcclxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZfXSpbMC05YS1mQS1GXS8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgLy8gcHVuY3R1YXRpb246IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXHJcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIC8vIHN0cmluZ3M6XHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BzdHJpbmcuXCInXSxcclxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsIFwiQHN0cmluZy4nXCJdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmc6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL1teXFxcXFwiJyVdKy8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3BhbGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy8lW1xcdyBdKyUvLCAndmFyaWFibGUnXSxcclxuICAgICAgICAgICAgWy8lJVtcXHddKyg/IVxcdykvLCAndmFyaWFibGUnXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL1tcIiddLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsvJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9