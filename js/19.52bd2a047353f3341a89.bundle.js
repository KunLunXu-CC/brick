(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{910:function(e,n,t){"use strict";t.r(n),t.d(n,"conf",(function(){return o})),t.d(n,"language",(function(){return s}));var o={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"""',close:'"""',notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"""',close:'"""'},{open:'"',close:'"'}],folding:{offSide:!0}},s={defaultToken:"invalid",tokenPostfix:".gql",keywords:["null","true","false","query","mutation","subscription","extend","schema","directive","scalar","type","interface","union","enum","input","implements","fragment","on"],typeKeywords:["Int","Float","String","Boolean","ID"],directiveLocations:["SCHEMA","SCALAR","OBJECT","FIELD_DEFINITION","ARGUMENT_DEFINITION","INTERFACE","UNION","ENUM","ENUM_VALUE","INPUT_OBJECT","INPUT_FIELD_DEFINITION","QUERY","MUTATION","SUBSCRIPTION","FIELD","FRAGMENT_DEFINITION","FRAGMENT_SPREAD","INLINE_FRAGMENT","VARIABLE_DEFINITION"],operators:["=","!","?",":","&","|"],symbols:/[=!?:&|]+/,escapes:/\\(?:["\\\/bfnrt]|u[0-9A-Fa-f]{4})/,tokenizer:{root:[[/[a-z_][\w$]*/,{cases:{"@keywords":"keyword","@default":"key.identifier"}}],[/[$][\w$]*/,{cases:{"@keywords":"keyword","@default":"argument.identifier"}}],[/[A-Z][\w\$]*/,{cases:{"@typeKeywords":"keyword","@default":"type.identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/@\s*[a-zA-Z_\$][\w\$]*/,{token:"annotation",log:"annotation token: $0"}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/"""/,{token:"string",next:"@mlstring",nextEmbedded:"markdown"}],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}]],mlstring:[[/[^"]+/,"string"],['"""',{token:"string",next:"@pop",nextEmbedded:"@pop"}]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/#.*$/,"comment"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2dyYXBocWwvZ3JhcGhxbC5qcyJdLCJuYW1lcyI6WyJjb25mIiwiY29tbWVudHMiLCJsaW5lQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsIm5vdEluIiwic3Vycm91bmRpbmdQYWlycyIsImZvbGRpbmciLCJvZmZTaWRlIiwibGFuZ3VhZ2UiLCJkZWZhdWx0VG9rZW4iLCJ0b2tlblBvc3RmaXgiLCJrZXl3b3JkcyIsInR5cGVLZXl3b3JkcyIsImRpcmVjdGl2ZUxvY2F0aW9ucyIsIm9wZXJhdG9ycyIsInN5bWJvbHMiLCJlc2NhcGVzIiwidG9rZW5pemVyIiwicm9vdCIsImNhc2VzIiwiaW5jbHVkZSIsInRva2VuIiwibG9nIiwibmV4dCIsIm5leHRFbWJlZGRlZCIsImJyYWNrZXQiLCJtbHN0cmluZyIsInN0cmluZyIsIndoaXRlc3BhY2UiXSwibWFwcGluZ3MiOiIyRkFBQSxxRkFLTyxJQUFJQSxFQUFPLENBQ2RDLFNBQVUsQ0FDTkMsWUFBYSxLQUVqQkMsU0FBVSxDQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxNQUVWQyxpQkFBa0IsQ0FDZCxDQUFFQyxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLE1BQU9DLE1BQU8sTUFBT0MsTUFBTyxDQUFDLFNBQVUsWUFDL0MsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxTQUFVLGFBRS9DQyxpQkFBa0IsQ0FDZCxDQUFFSCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLE1BQU9DLE1BQU8sT0FDdEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE1BRXhCRyxRQUFTLENBQ0xDLFNBQVMsSUFHTkMsRUFBVyxDQUVsQkMsYUFBYyxVQUNkQyxhQUFjLE9BQ2RDLFNBQVUsQ0FDTixPQUFRLE9BQVEsUUFDaEIsUUFBUyxXQUFZLGVBQ3JCLFNBQVUsU0FBVSxZQUNwQixTQUFVLE9BQVEsWUFBYSxRQUFTLE9BQVEsUUFBUyxhQUN6RCxXQUFZLE1BRWhCQyxhQUFjLENBQUMsTUFBTyxRQUFTLFNBQVUsVUFBVyxNQUNwREMsbUJBQW9CLENBQ2hCLFNBQVUsU0FBVSxTQUFVLG1CQUFvQixzQkFDbEQsWUFBYSxRQUFTLE9BQVEsYUFBYyxlQUFnQix5QkFDNUQsUUFBUyxXQUFZLGVBQWdCLFFBQVMsc0JBQzlDLGtCQUFtQixrQkFBbUIsdUJBRTFDQyxVQUFXLENBQUMsSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLEtBRXJDQyxRQUFTLFlBRVRDLFFBQVMscUNBRVRDLFVBQVcsQ0FDUEMsS0FBTSxDQUVGLENBQ0ksZUFDQSxDQUNJQyxNQUFPLENBQ0gsWUFBYSxVQUNiLFdBQVksb0JBS3hCLENBQ0ksWUFDQSxDQUNJQSxNQUFPLENBQ0gsWUFBYSxVQUNiLFdBQVkseUJBS3hCLENBQ0ksZUFDQSxDQUNJQSxNQUFPLENBQ0gsZ0JBQWlCLFVBQ2pCLFdBQVkscUJBS3hCLENBQUVDLFFBQVMsZUFFWCxDQUFDLGFBQWMsYUFDZixDQUNJLFdBQ0EsQ0FBRUQsTUFBTyxDQUFFLGFBQWMsV0FBWSxXQUFZLE1BS3JELENBQ0kseUJBQ0EsQ0FBRUUsTUFBTyxhQUFjQyxJQUFLLHlCQUdoQyxDQUFDLDJCQUE0QixnQkFDN0IsQ0FBQyxvQkFBcUIsY0FDdEIsQ0FBQyxNQUFPLFVBRVIsQ0FBQyxRQUFTLGFBQ1YsQ0FBQyxNQUNHLENBQUVELE1BQU8sU0FBVUUsS0FBTSxZQUFhQyxhQUFjLGFBR3hELENBQUMsa0JBQW1CLGtCQUNwQixDQUFDLElBQUssQ0FBRUgsTUFBTyxlQUFnQkksUUFBUyxRQUFTRixLQUFNLGFBRTNERyxTQUFVLENBQ04sQ0FBQyxRQUFTLFVBQ1YsQ0FBQyxNQUFPLENBQUVMLE1BQU8sU0FBVUUsS0FBTSxPQUFRQyxhQUFjLFVBRTNERyxPQUFRLENBQ0osQ0FBQyxVQUFXLFVBQ1osQ0FBQyxXQUFZLGlCQUNiLENBQUMsTUFBTyx5QkFDUixDQUFDLElBQUssQ0FBRU4sTUFBTyxlQUFnQkksUUFBUyxTQUFVRixLQUFNLFVBRTVESyxXQUFZLENBQUMsQ0FBQyxhQUFjLElBQUssQ0FBQyxPQUFRIiwiZmlsZSI6ImpzLzE5LjUyYmQyYTA0NzM1M2YzMzQxYTg5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcjJ1xyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7JywgJ30nXSxcclxuICAgICAgICBbJ1snLCAnXSddLFxyXG4gICAgICAgIFsnKCcsICcpJ11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCJcIlwiJywgY2xvc2U6ICdcIlwiXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIlwiXCInLCBjbG9zZTogJ1wiXCJcIicgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG9mZlNpZGU6IHRydWVcclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIC8vIFNldCBkZWZhdWx0VG9rZW4gdG8gaW52YWxpZCB0byBzZWUgd2hhdCB5b3UgZG8gbm90IHRva2VuaXplIHlldFxyXG4gICAgZGVmYXVsdFRva2VuOiAnaW52YWxpZCcsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcuZ3FsJyxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgJ251bGwnLCAndHJ1ZScsICdmYWxzZScsXHJcbiAgICAgICAgJ3F1ZXJ5JywgJ211dGF0aW9uJywgJ3N1YnNjcmlwdGlvbicsXHJcbiAgICAgICAgJ2V4dGVuZCcsICdzY2hlbWEnLCAnZGlyZWN0aXZlJyxcclxuICAgICAgICAnc2NhbGFyJywgJ3R5cGUnLCAnaW50ZXJmYWNlJywgJ3VuaW9uJywgJ2VudW0nLCAnaW5wdXQnLCAnaW1wbGVtZW50cycsXHJcbiAgICAgICAgJ2ZyYWdtZW50JywgJ29uJyxcclxuICAgIF0sXHJcbiAgICB0eXBlS2V5d29yZHM6IFsnSW50JywgJ0Zsb2F0JywgJ1N0cmluZycsICdCb29sZWFuJywgJ0lEJ10sXHJcbiAgICBkaXJlY3RpdmVMb2NhdGlvbnM6IFtcclxuICAgICAgICAnU0NIRU1BJywgJ1NDQUxBUicsICdPQkpFQ1QnLCAnRklFTERfREVGSU5JVElPTicsICdBUkdVTUVOVF9ERUZJTklUSU9OJyxcclxuICAgICAgICAnSU5URVJGQUNFJywgJ1VOSU9OJywgJ0VOVU0nLCAnRU5VTV9WQUxVRScsICdJTlBVVF9PQkpFQ1QnLCAnSU5QVVRfRklFTERfREVGSU5JVElPTicsXHJcbiAgICAgICAgJ1FVRVJZJywgJ01VVEFUSU9OJywgJ1NVQlNDUklQVElPTicsICdGSUVMRCcsICdGUkFHTUVOVF9ERUZJTklUSU9OJyxcclxuICAgICAgICAnRlJBR01FTlRfU1BSRUFEJywgJ0lOTElORV9GUkFHTUVOVCcsICdWQVJJQUJMRV9ERUZJTklUSU9OJyxcclxuICAgIF0sXHJcbiAgICBvcGVyYXRvcnM6IFsnPScsICchJywgJz8nLCAnOicsICcmJywgJ3wnXSxcclxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgIHN5bWJvbHM6IC9bPSE/OiZ8XSsvLFxyXG4gICAgLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vZ3JhcGhxbC9kcmFmdC8jc2VjLVN0cmluZy1WYWx1ZVxyXG4gICAgZXNjYXBlczogL1xcXFwoPzpbXCJcXFxcXFwvYmZucnRdfHVbMC05QS1GYS1mXXs0fSkvLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIGZpZWxkcyBhbmQgYXJndW1lbnQgbmFtZXNcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL1thLXpfXVtcXHckXSovLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdrZXkuaWRlbnRpZmllcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIC8vIGlkZW50aWZ5IHR5cGVkIGlucHV0IHZhcmlhYmxlc1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvWyRdW1xcdyRdKi8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2FyZ3VtZW50LmlkZW50aWZpZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyB0byBzaG93IGNsYXNzIG5hbWVzIG5pY2VseVxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvW0EtWl1bXFx3XFwkXSovLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAdHlwZUtleXdvcmRzJzogJ2tleXdvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAndHlwZS5pZGVudGlmaWVyJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXHJcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvQHN5bWJvbHMvLFxyXG4gICAgICAgICAgICAgICAgeyBjYXNlczogeyAnQG9wZXJhdG9ycyc6ICdvcGVyYXRvcicsICdAZGVmYXVsdCc6ICcnIH0gfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gQCBhbm5vdGF0aW9ucy5cclxuICAgICAgICAgICAgLy8gQXMgYW4gZXhhbXBsZSwgd2UgZW1pdCBhIGRlYnVnZ2luZyBsb2cgbWVzc2FnZSBvbiB0aGVzZSB0b2tlbnMuXHJcbiAgICAgICAgICAgIC8vIE5vdGU6IG1lc3NhZ2UgYXJlIHN1cHJlc3NlZCBkdXJpbmcgdGhlIGZpcnN0IGxvYWQgLS0gY2hhbmdlIHNvbWUgbGluZXMgdG8gc2VlIHRoZW0uXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9AXFxzKlthLXpBLVpfXFwkXVtcXHdcXCRdKi8sXHJcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAnYW5ub3RhdGlvbicsIGxvZzogJ2Fubm90YXRpb24gdG9rZW46ICQwJyB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyBudW1iZXJzXHJcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSsvLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcclxuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy9cIlwiXCIvLFxyXG4gICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAbWxzdHJpbmcnLCBuZXh0RW1iZWRkZWQ6ICdtYXJrZG93bicgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzXHJcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0BzdHJpbmcnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbWxzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlwiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsnXCJcIlwiJywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbWy9bIFxcdFxcclxcbl0rLywgJyddLCBbLyMuKiQvLCAnY29tbWVudCddXSxcclxuICAgIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=