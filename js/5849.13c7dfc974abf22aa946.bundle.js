(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[5849],{25849:(e,s,o)=>{"use strict";o.r(s),o.d(s,{conf:()=>n,language:()=>l});var n={brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}]},l={defaultToken:"",tokenPostfix:".dockerfile",variable:/\${?[\w]+}?/,tokenizer:{root:[{include:"@whitespace"},{include:"@comment"},[/(ONBUILD)(\s+)/,["keyword",""]],[/(ENV)(\s+)([\w]+)/,["keyword","",{token:"variable",next:"@arguments"}]],[/(FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|ARG|VOLUME|LABEL|USER|WORKDIR|COPY|CMD|STOPSIGNAL|SHELL|HEALTHCHECK|ENTRYPOINT)/,{token:"keyword",next:"@arguments"}]],arguments:[{include:"@whitespace"},{include:"@strings"},[/(@variable)/,{cases:{"@eos":{token:"variable",next:"@popall"},"@default":"variable"}}],[/\\/,{cases:{"@eos":"","@default":""}}],[/./,{cases:{"@eos":{token:"",next:"@popall"},"@default":""}}]],whitespace:[[/\s+/,{cases:{"@eos":{token:"",next:"@popall"},"@default":""}}]],comment:[[/(^#.*$)/,"comment","@popall"]],strings:[[/\\'$/,"","@popall"],[/\\'/,""],[/'$/,"string","@popall"],[/'/,"string","@stringBody"],[/"$/,"string","@popall"],[/"/,"string","@dblStringBody"]],stringBody:[[/[^\\\$']/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}],[/\\./,"string.escape"],[/'$/,"string","@popall"],[/'/,"string","@pop"],[/(@variable)/,"variable"],[/\\$/,"string"],[/$/,"string","@popall"]],dblStringBody:[[/[^\\\$"]/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}],[/\\./,"string.escape"],[/"$/,"string","@popall"],[/"/,"string","@pop"],[/(@variable)/,"variable"],[/\\$/,"string"],[/$/,"string","@popall"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9kb2NrZXJmaWxlL2RvY2tlcmZpbGUuanMiXSwibmFtZXMiOlsiY29uZiIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsInN1cnJvdW5kaW5nUGFpcnMiLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsInRva2VuUG9zdGZpeCIsInZhcmlhYmxlIiwidG9rZW5pemVyIiwicm9vdCIsImluY2x1ZGUiLCJ0b2tlbiIsIm5leHQiLCJhcmd1bWVudHMiLCJjYXNlcyIsIndoaXRlc3BhY2UiLCJjb21tZW50Iiwic3RyaW5ncyIsInN0cmluZ0JvZHkiLCJkYmxTdHJpbmdCb2R5Il0sIm1hcHBpbmdzIjoidUlBSU8sSUFBSUEsRUFBTyxDQUNkQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sTUFFeEJDLGlCQUFrQixDQUNkLENBQUVGLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sT0FHakJFLEVBQVcsQ0FDbEJDLGFBQWMsR0FDZEMsYUFBYyxjQUNkQyxTQUFVLGNBQ1ZDLFVBQVcsQ0FDUEMsS0FBTSxDQUNGLENBQUVDLFFBQVMsZUFDWCxDQUFFQSxRQUFTLFlBQ1gsQ0FBQyxpQkFBa0IsQ0FBQyxVQUFXLEtBQy9CLENBQUMsb0JBQXFCLENBQUMsVUFBVyxHQUFJLENBQUVDLE1BQU8sV0FBWUMsS0FBTSxnQkFDakUsQ0FDSSxzSEFDQSxDQUFFRCxNQUFPLFVBQVdDLEtBQU0sZ0JBR2xDQyxVQUFXLENBQ1AsQ0FBRUgsUUFBUyxlQUNYLENBQUVBLFFBQVMsWUFDWCxDQUNJLGNBQ0EsQ0FDSUksTUFBTyxDQUNILE9BQVEsQ0FBRUgsTUFBTyxXQUFZQyxLQUFNLFdBQ25DLFdBQVksY0FJeEIsQ0FDSSxLQUNBLENBQ0lFLE1BQU8sQ0FDSCxPQUFRLEdBQ1IsV0FBWSxNQUl4QixDQUNJLElBQ0EsQ0FDSUEsTUFBTyxDQUNILE9BQVEsQ0FBRUgsTUFBTyxHQUFJQyxLQUFNLFdBQzNCLFdBQVksT0FNNUJHLFdBQVksQ0FDUixDQUNJLE1BQ0EsQ0FDSUQsTUFBTyxDQUNILE9BQVEsQ0FBRUgsTUFBTyxHQUFJQyxLQUFNLFdBQzNCLFdBQVksT0FLNUJJLFFBQVMsQ0FBQyxDQUFDLFVBQVcsVUFBVyxZQUVqQ0MsUUFBUyxDQUNMLENBQUMsT0FBUSxHQUFJLFdBQ2IsQ0FBQyxNQUFPLElBQ1IsQ0FBQyxLQUFNLFNBQVUsV0FDakIsQ0FBQyxJQUFLLFNBQVUsZUFDaEIsQ0FBQyxLQUFNLFNBQVUsV0FDakIsQ0FBQyxJQUFLLFNBQVUsbUJBRXBCQyxXQUFZLENBQ1IsQ0FDSSxXQUNBLENBQ0lKLE1BQU8sQ0FDSCxPQUFRLENBQUVILE1BQU8sU0FBVUMsS0FBTSxXQUNqQyxXQUFZLFlBSXhCLENBQUMsTUFBTyxpQkFDUixDQUFDLEtBQU0sU0FBVSxXQUNqQixDQUFDLElBQUssU0FBVSxRQUNoQixDQUFDLGNBQWUsWUFDaEIsQ0FBQyxNQUFPLFVBQ1IsQ0FBQyxJQUFLLFNBQVUsWUFFcEJPLGNBQWUsQ0FDWCxDQUNJLFdBQ0EsQ0FDSUwsTUFBTyxDQUNILE9BQVEsQ0FBRUgsTUFBTyxTQUFVQyxLQUFNLFdBQ2pDLFdBQVksWUFJeEIsQ0FBQyxNQUFPLGlCQUNSLENBQUMsS0FBTSxTQUFVLFdBQ2pCLENBQUMsSUFBSyxTQUFVLFFBQ2hCLENBQUMsY0FBZSxZQUNoQixDQUFDLE1BQU8sVUFDUixDQUFDLElBQUssU0FBVSIsImZpbGUiOiJqcy81ODQ5LjEzYzdkZmM5NzRhYmYyMmFhOTQ2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cclxuICAgIF1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcuZG9ja2VyZmlsZScsXHJcbiAgICB2YXJpYWJsZTogL1xcJHs/W1xcd10rfT8vLFxyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnQnIH0sXHJcbiAgICAgICAgICAgIFsvKE9OQlVJTEQpKFxccyspLywgWydrZXl3b3JkJywgJyddXSxcclxuICAgICAgICAgICAgWy8oRU5WKShcXHMrKShbXFx3XSspLywgWydrZXl3b3JkJywgJycsIHsgdG9rZW46ICd2YXJpYWJsZScsIG5leHQ6ICdAYXJndW1lbnRzJyB9XV0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8oRlJPTXxNQUlOVEFJTkVSfFJVTnxFWFBPU0V8RU5WfEFERHxBUkd8Vk9MVU1FfExBQkVMfFVTRVJ8V09SS0RJUnxDT1BZfENNRHxTVE9QU0lHTkFMfFNIRUxMfEhFQUxUSENIRUNLfEVOVFJZUE9JTlQpLyxcclxuICAgICAgICAgICAgICAgIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0Bhcmd1bWVudHMnIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYXJndW1lbnRzOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLyhAdmFyaWFibGUpLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICd2YXJpYWJsZScsIG5leHQ6ICdAcG9wYWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAndmFyaWFibGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvXFxcXC8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8uLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcGFsbCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIERlYWwgd2l0aCB3aGl0ZSBzcGFjZSwgaW5jbHVkaW5nIGNvbW1lbnRzXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvXFxzKy8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3BhbGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbWy8oXiMuKiQpLywgJ2NvbW1lbnQnLCAnQHBvcGFsbCddXSxcclxuICAgICAgICAvLyBSZWNvZ25pemUgc3RyaW5ncywgaW5jbHVkaW5nIHRob3NlIGJyb2tlbiBhY3Jvc3MgbGluZXMgd2l0aCBcXCAoYnV0IG5vdCB3aXRob3V0KVxyXG4gICAgICAgIHN0cmluZ3M6IFtcclxuICAgICAgICAgICAgWy9cXFxcJyQvLCAnJywgJ0Bwb3BhbGwnXSxcclxuICAgICAgICAgICAgWy9cXFxcJy8sICcnXSxcclxuICAgICAgICAgICAgWy8nJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0BzdHJpbmdCb2R5J10sXHJcbiAgICAgICAgICAgIFsvXCIkLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BkYmxTdHJpbmdCb2R5J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ0JvZHk6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL1teXFxcXFxcJCddLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcGFsbCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbLyckLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbLyhAdmFyaWFibGUpLywgJ3ZhcmlhYmxlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXCQvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYmxTdHJpbmdCb2R5OiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9bXlxcXFxcXCRcIl0vLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wYWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXCIkLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy8oQHZhcmlhYmxlKS8sICd2YXJpYWJsZSddLFxyXG4gICAgICAgICAgICBbL1xcXFwkLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbLyQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==