(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[8906],{38906:(e,s,t)=>{"use strict";t.r(s),t.d(s,{conf:()=>o,language:()=>r});var o={comments:{blockComment:["(*","*)"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"[",close:"]"},{open:"{",close:"}"},{open:"(",close:")"},{open:"(*",close:"*)"},{open:"<*",close:"*>"},{open:"'",close:"'",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]}]},r={defaultToken:"",tokenPostfix:".m3",brackets:[{token:"delimiter.curly",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"}],keywords:["AND","ANY","ARRAY","AS","BEGIN","BITS","BRANDED","BY","CASE","CONST","DIV","DO","ELSE","ELSIF","END","EVAL","EXCEPT","EXCEPTION","EXIT","EXPORTS","FINALLY","FOR","FROM","GENERIC","IF","IMPORT","IN","INTERFACE","LOCK","LOOP","METHODS","MOD","MODULE","NOT","OBJECT","OF","OR","OVERRIDES","PROCEDURE","RAISE","RAISES","READONLY","RECORD","REF","REPEAT","RETURN","REVEAL","SET","THEN","TO","TRY","TYPE","TYPECASE","UNSAFE","UNTIL","UNTRACED","VALUE","VAR","WHILE","WITH"],reservedConstNames:["ABS","ADR","ADRSIZE","BITSIZE","BYTESIZE","CEILING","DEC","DISPOSE","FALSE","FIRST","FLOAT","FLOOR","INC","ISTYPE","LAST","LOOPHOLE","MAX","MIN","NARROW","NEW","NIL","NUMBER","ORD","ROUND","SUBARRAY","TRUE","TRUNC","TYPECODE","VAL"],reservedTypeNames:["ADDRESS","ANY","BOOLEAN","CARDINAL","CHAR","EXTENDED","INTEGER","LONGCARD","LONGINT","LONGREAL","MUTEX","NULL","REAL","REFANY","ROOT","TEXT"],operators:["+","-","*","/","&","^","."],relations:["=","#","<","<=",">",">=","<:",":"],delimiters:["|","..","=>",",",";",":="],symbols:/[>=<#.,:;+\-*/&^]+/,escapes:/\\(?:[\\fnrt"']|[0-7]{3})/,tokenizer:{root:[[/_\w*/,"invalid"],[/[a-zA-Z][a-zA-Z0-9_]*/,{cases:{"@keywords":{token:"keyword.$0"},"@reservedConstNames":{token:"constant.reserved.$0"},"@reservedTypeNames":{token:"type.reserved.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[0-9]+\.[0-9]+(?:[DdEeXx][\+\-]?[0-9]+)?/,"number.float"],[/[0-9]+(?:\_[0-9a-fA-F]+)?L?/,"number"],[/@symbols/,{cases:{"@operators":"operators","@relations":"operators","@delimiters":"delimiter","@default":"invalid"}}],[/'[^\\']'/,"string.char"],[/(')(@escapes)(')/,["string.char","string.escape","string.char"]],[/'/,"invalid"],[/"([^"\\]|\\.)*$/,"invalid"],[/"/,"string.text","@text"]],text:[[/[^\\"]+/,"string.text"],[/@escapes/,"string.escape"],[/\\./,"invalid"],[/"/,"string.text","@pop"]],comment:[[/\(\*/,"comment","@push"],[/\*\)/,"comment","@pop"],[/./,"comment"]],pragma:[[/<\*/,"keyword.pragma","@push"],[/\*>/,"keyword.pragma","@pop"],[/./,"keyword.pragma"]],whitespace:[[/[ \t\r\n]+/,"white"],[/\(\*/,"comment","@comment"],[/<\*/,"keyword.pragma","@pragma"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9tMy9tMy5qcyJdLCJuYW1lcyI6WyJjb25mIiwiY29tbWVudHMiLCJibG9ja0NvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJub3RJbiIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4IiwidG9rZW4iLCJrZXl3b3JkcyIsInJlc2VydmVkQ29uc3ROYW1lcyIsInJlc2VydmVkVHlwZU5hbWVzIiwib3BlcmF0b3JzIiwicmVsYXRpb25zIiwiZGVsaW1pdGVycyIsInN5bWJvbHMiLCJlc2NhcGVzIiwidG9rZW5pemVyIiwicm9vdCIsImNhc2VzIiwiaW5jbHVkZSIsInRleHQiLCJjb21tZW50IiwicHJhZ21hIiwid2hpdGVzcGFjZSJdLCJtYXBwaW5ncyI6InVJQUlPLElBQUlBLEVBQU8sQ0FDZEMsU0FBVSxDQUNOQyxhQUFjLENBQUMsS0FBTSxPQUV6QkMsU0FBVSxDQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxNQUVWQyxpQkFBa0IsQ0FDZCxDQUFFQyxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLEtBQU1DLE1BQU8sTUFDckIsQ0FBRUQsS0FBTSxLQUFNQyxNQUFPLE1BQ3JCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxJQUFLQyxNQUFPLENBQUMsU0FBVSxZQUMzQyxDQUFFRixLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxDQUFDLFNBQVUsY0FHeENDLEVBQVcsQ0FDbEJDLGFBQWMsR0FDZEMsYUFBYyxNQUNkUCxTQUFVLENBQ04sQ0FBRVEsTUFBTyxrQkFBbUJOLEtBQU0sSUFBS0MsTUFBTyxLQUM5QyxDQUFFSyxNQUFPLHdCQUF5Qk4sS0FBTSxJQUFLQyxNQUFPLEtBQ3BELENBQUVLLE1BQU8sbUJBQW9CTixLQUFNLElBQUtDLE1BQU8sTUFFbkRNLFNBQVUsQ0FDTixNQUNBLE1BQ0EsUUFDQSxLQUNBLFFBQ0EsT0FDQSxVQUNBLEtBQ0EsT0FDQSxRQUNBLE1BQ0EsS0FDQSxPQUNBLFFBQ0EsTUFDQSxPQUNBLFNBQ0EsWUFDQSxPQUNBLFVBQ0EsVUFDQSxNQUNBLE9BQ0EsVUFDQSxLQUNBLFNBQ0EsS0FDQSxZQUNBLE9BQ0EsT0FDQSxVQUNBLE1BQ0EsU0FDQSxNQUNBLFNBQ0EsS0FDQSxLQUNBLFlBQ0EsWUFDQSxRQUNBLFNBQ0EsV0FDQSxTQUNBLE1BQ0EsU0FDQSxTQUNBLFNBQ0EsTUFDQSxPQUNBLEtBQ0EsTUFDQSxPQUNBLFdBQ0EsU0FDQSxRQUNBLFdBQ0EsUUFDQSxNQUNBLFFBQ0EsUUFFSkMsbUJBQW9CLENBQ2hCLE1BQ0EsTUFDQSxVQUNBLFVBQ0EsV0FDQSxVQUNBLE1BQ0EsVUFDQSxRQUNBLFFBQ0EsUUFDQSxRQUNBLE1BQ0EsU0FDQSxPQUNBLFdBQ0EsTUFDQSxNQUNBLFNBQ0EsTUFDQSxNQUNBLFNBQ0EsTUFDQSxRQUNBLFdBQ0EsT0FDQSxRQUNBLFdBQ0EsT0FFSkMsa0JBQW1CLENBQ2YsVUFDQSxNQUNBLFVBQ0EsV0FDQSxPQUNBLFdBQ0EsVUFDQSxXQUNBLFVBQ0EsV0FDQSxRQUNBLE9BQ0EsT0FDQSxTQUNBLE9BQ0EsUUFFSkMsVUFBVyxDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLEtBQzFDQyxVQUFXLENBQUMsSUFBSyxJQUFLLElBQUssS0FBTSxJQUFLLEtBQU0sS0FBTSxLQUNsREMsV0FBWSxDQUFDLElBQUssS0FBTSxLQUFNLElBQUssSUFBSyxNQUN4Q0MsUUFBUyxxQkFDVEMsUUFBUyw0QkFDVEMsVUFBVyxDQUNQQyxLQUFNLENBRUYsQ0FBQyxPQUFRLFdBQ1QsQ0FDSSx3QkFDQSxDQUNJQyxNQUFPLENBQ0gsWUFBYSxDQUFFWCxNQUFPLGNBQ3RCLHNCQUF1QixDQUFFQSxNQUFPLHdCQUNoQyxxQkFBc0IsQ0FBRUEsTUFBTyxvQkFDL0IsV0FBWSxnQkFLeEIsQ0FBRVksUUFBUyxlQUNYLENBQUMsYUFBYyxhQUVmLENBQUMsMkNBQTRDLGdCQUM3QyxDQUFDLDhCQUErQixVQUVoQyxDQUNJLFdBQ0EsQ0FDSUQsTUFBTyxDQUNILGFBQWMsWUFDZCxhQUFjLFlBQ2QsY0FBZSxZQUNmLFdBQVksYUFLeEIsQ0FBQyxXQUFZLGVBQ2IsQ0FBQyxtQkFBb0IsQ0FBQyxjQUFlLGdCQUFpQixnQkFDdEQsQ0FBQyxJQUFLLFdBRU4sQ0FBQyxrQkFBbUIsV0FDcEIsQ0FBQyxJQUFLLGNBQWUsVUFFekJFLEtBQU0sQ0FDRixDQUFDLFVBQVcsZUFDWixDQUFDLFdBQVksaUJBQ2IsQ0FBQyxNQUFPLFdBQ1IsQ0FBQyxJQUFLLGNBQWUsU0FFekJDLFFBQVMsQ0FDTCxDQUFDLE9BQVEsVUFBVyxTQUNwQixDQUFDLE9BQVEsVUFBVyxRQUNwQixDQUFDLElBQUssWUFFVkMsT0FBUSxDQUNKLENBQUMsTUFBTyxpQkFBa0IsU0FDMUIsQ0FBQyxNQUFPLGlCQUFrQixRQUMxQixDQUFDLElBQUssbUJBRVZDLFdBQVksQ0FDUixDQUFDLGFBQWMsU0FDZixDQUFDLE9BQVEsVUFBVyxZQUNwQixDQUFDLE1BQU8saUJBQWtCIiwiZmlsZSI6ImpzLzg5MDYuYzQ2OTJiYjQzNzEyYzU0ZGVlZjcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJygqJywgJyopJ11cclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygqJywgY2xvc2U6ICcqKScgfSxcclxuICAgICAgICB7IG9wZW46ICc8KicsIGNsb3NlOiAnKj4nIH0sXHJcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9XHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLm0zJyxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScsIG9wZW46ICdbJywgY2xvc2U6ICddJyB9XHJcbiAgICBdLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICAnQU5EJyxcclxuICAgICAgICAnQU5ZJyxcclxuICAgICAgICAnQVJSQVknLFxyXG4gICAgICAgICdBUycsXHJcbiAgICAgICAgJ0JFR0lOJyxcclxuICAgICAgICAnQklUUycsXHJcbiAgICAgICAgJ0JSQU5ERUQnLFxyXG4gICAgICAgICdCWScsXHJcbiAgICAgICAgJ0NBU0UnLFxyXG4gICAgICAgICdDT05TVCcsXHJcbiAgICAgICAgJ0RJVicsXHJcbiAgICAgICAgJ0RPJyxcclxuICAgICAgICAnRUxTRScsXHJcbiAgICAgICAgJ0VMU0lGJyxcclxuICAgICAgICAnRU5EJyxcclxuICAgICAgICAnRVZBTCcsXHJcbiAgICAgICAgJ0VYQ0VQVCcsXHJcbiAgICAgICAgJ0VYQ0VQVElPTicsXHJcbiAgICAgICAgJ0VYSVQnLFxyXG4gICAgICAgICdFWFBPUlRTJyxcclxuICAgICAgICAnRklOQUxMWScsXHJcbiAgICAgICAgJ0ZPUicsXHJcbiAgICAgICAgJ0ZST00nLFxyXG4gICAgICAgICdHRU5FUklDJyxcclxuICAgICAgICAnSUYnLFxyXG4gICAgICAgICdJTVBPUlQnLFxyXG4gICAgICAgICdJTicsXHJcbiAgICAgICAgJ0lOVEVSRkFDRScsXHJcbiAgICAgICAgJ0xPQ0snLFxyXG4gICAgICAgICdMT09QJyxcclxuICAgICAgICAnTUVUSE9EUycsXHJcbiAgICAgICAgJ01PRCcsXHJcbiAgICAgICAgJ01PRFVMRScsXHJcbiAgICAgICAgJ05PVCcsXHJcbiAgICAgICAgJ09CSkVDVCcsXHJcbiAgICAgICAgJ09GJyxcclxuICAgICAgICAnT1InLFxyXG4gICAgICAgICdPVkVSUklERVMnLFxyXG4gICAgICAgICdQUk9DRURVUkUnLFxyXG4gICAgICAgICdSQUlTRScsXHJcbiAgICAgICAgJ1JBSVNFUycsXHJcbiAgICAgICAgJ1JFQURPTkxZJyxcclxuICAgICAgICAnUkVDT1JEJyxcclxuICAgICAgICAnUkVGJyxcclxuICAgICAgICAnUkVQRUFUJyxcclxuICAgICAgICAnUkVUVVJOJyxcclxuICAgICAgICAnUkVWRUFMJyxcclxuICAgICAgICAnU0VUJyxcclxuICAgICAgICAnVEhFTicsXHJcbiAgICAgICAgJ1RPJyxcclxuICAgICAgICAnVFJZJyxcclxuICAgICAgICAnVFlQRScsXHJcbiAgICAgICAgJ1RZUEVDQVNFJyxcclxuICAgICAgICAnVU5TQUZFJyxcclxuICAgICAgICAnVU5USUwnLFxyXG4gICAgICAgICdVTlRSQUNFRCcsXHJcbiAgICAgICAgJ1ZBTFVFJyxcclxuICAgICAgICAnVkFSJyxcclxuICAgICAgICAnV0hJTEUnLFxyXG4gICAgICAgICdXSVRIJ1xyXG4gICAgXSxcclxuICAgIHJlc2VydmVkQ29uc3ROYW1lczogW1xyXG4gICAgICAgICdBQlMnLFxyXG4gICAgICAgICdBRFInLFxyXG4gICAgICAgICdBRFJTSVpFJyxcclxuICAgICAgICAnQklUU0laRScsXHJcbiAgICAgICAgJ0JZVEVTSVpFJyxcclxuICAgICAgICAnQ0VJTElORycsXHJcbiAgICAgICAgJ0RFQycsXHJcbiAgICAgICAgJ0RJU1BPU0UnLFxyXG4gICAgICAgICdGQUxTRScsXHJcbiAgICAgICAgJ0ZJUlNUJyxcclxuICAgICAgICAnRkxPQVQnLFxyXG4gICAgICAgICdGTE9PUicsXHJcbiAgICAgICAgJ0lOQycsXHJcbiAgICAgICAgJ0lTVFlQRScsXHJcbiAgICAgICAgJ0xBU1QnLFxyXG4gICAgICAgICdMT09QSE9MRScsXHJcbiAgICAgICAgJ01BWCcsXHJcbiAgICAgICAgJ01JTicsXHJcbiAgICAgICAgJ05BUlJPVycsXHJcbiAgICAgICAgJ05FVycsXHJcbiAgICAgICAgJ05JTCcsXHJcbiAgICAgICAgJ05VTUJFUicsXHJcbiAgICAgICAgJ09SRCcsXHJcbiAgICAgICAgJ1JPVU5EJyxcclxuICAgICAgICAnU1VCQVJSQVknLFxyXG4gICAgICAgICdUUlVFJyxcclxuICAgICAgICAnVFJVTkMnLFxyXG4gICAgICAgICdUWVBFQ09ERScsXHJcbiAgICAgICAgJ1ZBTCdcclxuICAgIF0sXHJcbiAgICByZXNlcnZlZFR5cGVOYW1lczogW1xyXG4gICAgICAgICdBRERSRVNTJyxcclxuICAgICAgICAnQU5ZJyxcclxuICAgICAgICAnQk9PTEVBTicsXHJcbiAgICAgICAgJ0NBUkRJTkFMJyxcclxuICAgICAgICAnQ0hBUicsXHJcbiAgICAgICAgJ0VYVEVOREVEJyxcclxuICAgICAgICAnSU5URUdFUicsXHJcbiAgICAgICAgJ0xPTkdDQVJEJyxcclxuICAgICAgICAnTE9OR0lOVCcsXHJcbiAgICAgICAgJ0xPTkdSRUFMJyxcclxuICAgICAgICAnTVVURVgnLFxyXG4gICAgICAgICdOVUxMJyxcclxuICAgICAgICAnUkVBTCcsXHJcbiAgICAgICAgJ1JFRkFOWScsXHJcbiAgICAgICAgJ1JPT1QnLFxyXG4gICAgICAgICdURVhUJ1xyXG4gICAgXSxcclxuICAgIG9wZXJhdG9yczogWycrJywgJy0nLCAnKicsICcvJywgJyYnLCAnXicsICcuJ10sXHJcbiAgICByZWxhdGlvbnM6IFsnPScsICcjJywgJzwnLCAnPD0nLCAnPicsICc+PScsICc8OicsICc6J10sXHJcbiAgICBkZWxpbWl0ZXJzOiBbJ3wnLCAnLi4nLCAnPT4nLCAnLCcsICc7JywgJzo9J10sXHJcbiAgICBzeW1ib2xzOiAvWz49PCMuLDo7K1xcLSovJl5dKy8sXHJcbiAgICBlc2NhcGVzOiAvXFxcXCg/OltcXFxcZm5ydFwiJ118WzAtN117M30pLyxcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgLy8gSWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXHJcbiAgICAgICAgICAgIFsvX1xcdyovLCAnaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvW2EtekEtWl1bYS16QS1aMC05X10qLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAcmVzZXJ2ZWRDb25zdE5hbWVzJzogeyB0b2tlbjogJ2NvbnN0YW50LnJlc2VydmVkLiQwJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQHJlc2VydmVkVHlwZU5hbWVzJzogeyB0b2tlbjogJ3R5cGUucmVzZXJ2ZWQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gV2hpdGVzcGFjZVxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIC8vIEludGVnZXItIGFuZCByZWFsIGxpdGVyYWxzXHJcbiAgICAgICAgICAgIFsvWzAtOV0rXFwuWzAtOV0rKD86W0RkRWVYeF1bXFwrXFwtXT9bMC05XSspPy8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy9bMC05XSsoPzpcXF9bMC05YS1mQS1GXSspP0w/LywgJ251bWJlciddLFxyXG4gICAgICAgICAgICAvLyBPcGVyYXRvcnMsIHJlbGF0aW9ucywgYW5kIGRlbGltaXRlcnNcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL0BzeW1ib2xzLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdvcGVyYXRvcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQHJlbGF0aW9ucyc6ICdvcGVyYXRvcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlbGltaXRlcnMnOiAnZGVsaW1pdGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2ludmFsaWQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyBDaGFyYWN0ZXIgbGl0ZXJhbHNcclxuICAgICAgICAgICAgWy8nW15cXFxcJ10nLywgJ3N0cmluZy5jaGFyJ10sXHJcbiAgICAgICAgICAgIFsvKCcpKEBlc2NhcGVzKSgnKS8sIFsnc3RyaW5nLmNoYXInLCAnc3RyaW5nLmVzY2FwZScsICdzdHJpbmcuY2hhciddXSxcclxuICAgICAgICAgICAgWy8nLywgJ2ludmFsaWQnXSxcclxuICAgICAgICAgICAgLy8gVGV4dCBsaXRlcmFsc1xyXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdpbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nLnRleHQnLCAnQHRleHQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGV4dDogW1xyXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nLnRleHQnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZy50ZXh0JywgJ0Bwb3AnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1xcKFxcKi8sICdjb21tZW50JywgJ0BwdXNoJ10sXHJcbiAgICAgICAgICAgIFsvXFwqXFwpLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwcmFnbWE6IFtcclxuICAgICAgICAgICAgWy88XFwqLywgJ2tleXdvcmQucHJhZ21hJywgJ0BwdXNoJ10sXHJcbiAgICAgICAgICAgIFsvXFwqPi8sICdrZXl3b3JkLnByYWdtYScsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvLi8sICdrZXl3b3JkLnByYWdtYSddXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICd3aGl0ZSddLFxyXG4gICAgICAgICAgICBbL1xcKFxcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvPFxcKi8sICdrZXl3b3JkLnByYWdtYScsICdAcHJhZ21hJ11cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=