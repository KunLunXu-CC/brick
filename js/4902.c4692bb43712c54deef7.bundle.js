(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[4902],{4902:(e,t,n)=>{"use strict";n.r(t),n.d(t,{conf:()=>a,language:()=>o});var i=n(89587),a={comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["<",">"]],autoClosingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],surroundingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],onEnterRules:[{beforeText:new RegExp("<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$","i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:i.Mj.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),action:{indentAction:i.Mj.IndentAction.Indent}}]},o={defaultToken:"",tokenPostfix:".xml",ignoreCase:!0,qualifiedName:/(?:[\w\.\-]+:)?[\w\.\-]+/,tokenizer:{root:[[/[^<&]+/,""],{include:"@whitespace"},[/(<)(@qualifiedName)/,[{token:"delimiter"},{token:"tag",next:"@tag"}]],[/(<\/)(@qualifiedName)(\s*)(>)/,[{token:"delimiter"},{token:"tag"},"",{token:"delimiter"}]],[/(<\?)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/(<\!)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/<\!\[CDATA\[/,{token:"delimiter.cdata",next:"@cdata"}],[/&\w+;/,"string.escape"]],cdata:[[/[^\]]+/,""],[/\]\]>/,{token:"delimiter.cdata",next:"@pop"}],[/\]/,""]],tag:[[/[ \t\r\n]+/,""],[/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,["attribute.name","","attribute.value"]],[/@qualifiedName/,"attribute.name"],[/\?>/,{token:"delimiter",next:"@pop"}],[/(\/)(>)/,[{token:"tag"},{token:"delimiter",next:"@pop"}]],[/>/,{token:"delimiter",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/<!--/,{token:"comment",next:"@comment"}]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,{token:"comment",next:"@pop"}],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy94bWwveG1sLmpzIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImJsb2NrQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsInN1cnJvdW5kaW5nUGFpcnMiLCJvbkVudGVyUnVsZXMiLCJiZWZvcmVUZXh0IiwiUmVnRXhwIiwiYWZ0ZXJUZXh0IiwiYWN0aW9uIiwiaW5kZW50QWN0aW9uIiwibGFuZ3VhZ2UiLCJkZWZhdWx0VG9rZW4iLCJ0b2tlblBvc3RmaXgiLCJpZ25vcmVDYXNlIiwicXVhbGlmaWVkTmFtZSIsInRva2VuaXplciIsInJvb3QiLCJpbmNsdWRlIiwidG9rZW4iLCJuZXh0IiwiY2RhdGEiLCJ0YWciLCJ3aGl0ZXNwYWNlIiwiY29tbWVudCJdLCJtYXBwaW5ncyI6InFKQUtXQSxFQUFPLENBQ2RDLFNBQVUsQ0FDTkMsYUFBYyxDQUFDLFVBQVEsV0FFM0JDLFNBQVUsQ0FBQyxDQUFDLElBQUssTUFDakJDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE1BRXhCQyxpQkFBa0IsQ0FDZCxDQUFFRixLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxNQUV4QkUsYUFBYyxDQUNWLENBQ0lDLFdBQVksSUFBSUMsT0FBTyw4Q0FBK0MsS0FDdEVDLFVBQVcsZ0NBQ1hDLE9BQVEsQ0FDSkMsYUFBYyxrQ0FHdEIsQ0FDSUosV0FBWSxJQUFJQyxPQUFPLHNDQUF1QyxLQUM5REUsT0FBUSxDQUFFQyxhQUFjLDZCQUl6QkMsRUFBVyxDQUNsQkMsYUFBYyxHQUNkQyxhQUFjLE9BQ2RDLFlBQVksRUFFWkMsY0FBZSwyQkFDZkMsVUFBVyxDQUNQQyxLQUFNLENBQ0YsQ0FBQyxTQUFVLElBQ1gsQ0FBRUMsUUFBUyxlQUVYLENBQUMsc0JBQXVCLENBQUMsQ0FBRUMsTUFBTyxhQUFlLENBQUVBLE1BQU8sTUFBT0MsS0FBTSxVQUV2RSxDQUNJLGdDQUNBLENBQUMsQ0FBRUQsTUFBTyxhQUFlLENBQUVBLE1BQU8sT0FBUyxHQUFJLENBQUVBLE1BQU8sZUFHNUQsQ0FBQyx3QkFBeUIsQ0FBQyxDQUFFQSxNQUFPLGFBQWUsQ0FBRUEsTUFBTyxVQUFXQyxLQUFNLFVBRTdFLENBQUMsd0JBQXlCLENBQUMsQ0FBRUQsTUFBTyxhQUFlLENBQUVBLE1BQU8sVUFBV0MsS0FBTSxVQUU3RSxDQUFDLGVBQWdCLENBQUVELE1BQU8sa0JBQW1CQyxLQUFNLFdBQ25ELENBQUMsUUFBUyxrQkFFZEMsTUFBTyxDQUNILENBQUMsU0FBVSxJQUNYLENBQUMsUUFBUyxDQUFFRixNQUFPLGtCQUFtQkMsS0FBTSxTQUM1QyxDQUFDLEtBQU0sS0FFWEUsSUFBSyxDQUNELENBQUMsYUFBYyxJQUNmLENBQ0ksNkNBQ0EsQ0FBQyxpQkFBa0IsR0FBSSxvQkFFM0IsQ0FDSSwrREFDQSxDQUFDLGlCQUFrQixHQUFJLG9CQUUzQixDQUNJLDZDQUNBLENBQUMsaUJBQWtCLEdBQUksb0JBRTNCLENBQUMsaUJBQWtCLGtCQUNuQixDQUFDLE1BQU8sQ0FBRUgsTUFBTyxZQUFhQyxLQUFNLFNBQ3BDLENBQUMsVUFBVyxDQUFDLENBQUVELE1BQU8sT0FBUyxDQUFFQSxNQUFPLFlBQWFDLEtBQU0sVUFDM0QsQ0FBQyxJQUFLLENBQUVELE1BQU8sWUFBYUMsS0FBTSxVQUV0Q0csV0FBWSxDQUNSLENBQUMsYUFBYyxJQUNmLENBQUMsT0FBUSxDQUFFSixNQUFPLFVBQVdDLEtBQU0sY0FFdkNJLFFBQVMsQ0FDTCxDQUFDLFVBQVcsbUJBQ1osQ0FBQyxNQUFPLENBQUVMLE1BQU8sVUFBV0MsS0FBTSxTQUNsQyxDQUFDLE9BQVEsMkJBQ1QsQ0FBQyxRQUFTIiwiZmlsZSI6ImpzLzQ5MDIuYzQ2OTJiYjQzNzEyYzU0ZGVlZjcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJy4uL2ZpbGxlcnMvbW9uYWNvLWVkaXRvci1jb3JlLmpzJztcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnPCEtLScsICctLT4nXVxyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbWyc8JywgJz4nXV0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cclxuICAgIF0sXHJcbiAgICBvbkVudGVyUnVsZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IG5ldyBSZWdFeHAoXCI8KFtfOlxcXFx3XVtfOlxcXFx3LS5cXFxcZF0qKShbXi8+XSooPyEvKT4pW148XSokXCIsICdpJyksXHJcbiAgICAgICAgICAgIGFmdGVyVGV4dDogL148XFwvKFtfOlxcd11bXzpcXHctLlxcZF0qKVxccyo+JC9pLFxyXG4gICAgICAgICAgICBhY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIGluZGVudEFjdGlvbjogbGFuZ3VhZ2VzLkluZGVudEFjdGlvbi5JbmRlbnRPdXRkZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmVmb3JlVGV4dDogbmV3IFJlZ0V4cChcIjwoXFxcXHdbXFxcXHdcXFxcZF0qKShbXi8+XSooPyEvKT4pW148XSokXCIsICdpJyksXHJcbiAgICAgICAgICAgIGFjdGlvbjogeyBpbmRlbnRBY3Rpb246IGxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50IH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnhtbCcsXHJcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxyXG4gICAgLy8gVXNlZnVsIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgIHF1YWxpZmllZE5hbWU6IC8oPzpbXFx3XFwuXFwtXSs6KT9bXFx3XFwuXFwtXSsvLFxyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICBbL1tePCZdKy8sICcnXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIC8vIFN0YW5kYXJkIG9wZW5pbmcgdGFnXHJcbiAgICAgICAgICAgIFsvKDwpKEBxdWFsaWZpZWROYW1lKS8sIFt7IHRva2VuOiAnZGVsaW1pdGVyJyB9LCB7IHRva2VuOiAndGFnJywgbmV4dDogJ0B0YWcnIH1dXSxcclxuICAgICAgICAgICAgLy8gU3RhbmRhcmQgY2xvc2luZyB0YWdcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLyg8XFwvKShAcXVhbGlmaWVkTmFtZSkoXFxzKikoPikvLFxyXG4gICAgICAgICAgICAgICAgW3sgdG9rZW46ICdkZWxpbWl0ZXInIH0sIHsgdG9rZW46ICd0YWcnIH0sICcnLCB7IHRva2VuOiAnZGVsaW1pdGVyJyB9XVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyBNZXRhIHRhZ3MgLSBpbnN0cnVjdGlvblxyXG4gICAgICAgICAgICBbLyg8XFw/KShAcXVhbGlmaWVkTmFtZSkvLCBbeyB0b2tlbjogJ2RlbGltaXRlcicgfSwgeyB0b2tlbjogJ21ldGF0YWcnLCBuZXh0OiAnQHRhZycgfV1dLFxyXG4gICAgICAgICAgICAvLyBNZXRhIHRhZ3MgLSBkZWNsYXJhdGlvblxyXG4gICAgICAgICAgICBbLyg8XFwhKShAcXVhbGlmaWVkTmFtZSkvLCBbeyB0b2tlbjogJ2RlbGltaXRlcicgfSwgeyB0b2tlbjogJ21ldGF0YWcnLCBuZXh0OiAnQHRhZycgfV1dLFxyXG4gICAgICAgICAgICAvLyBDREFUQVxyXG4gICAgICAgICAgICBbLzxcXCFcXFtDREFUQVxcWy8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuY2RhdGEnLCBuZXh0OiAnQGNkYXRhJyB9XSxcclxuICAgICAgICAgICAgWy8mXFx3KzsvLCAnc3RyaW5nLmVzY2FwZSddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjZGF0YTogW1xyXG4gICAgICAgICAgICBbL1teXFxdXSsvLCAnJ10sXHJcbiAgICAgICAgICAgIFsvXFxdXFxdPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuY2RhdGEnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsvXFxdLywgJyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YWc6IFtcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvKEBxdWFsaWZpZWROYW1lKShcXHMqPVxccyopKFwiW15cIl0qXCJ8J1teJ10qJykvLFxyXG4gICAgICAgICAgICAgICAgWydhdHRyaWJ1dGUubmFtZScsICcnLCAnYXR0cmlidXRlLnZhbHVlJ11cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLyhAcXVhbGlmaWVkTmFtZSkoXFxzKj1cXHMqKShcIlteXCI+P1xcL10qfCdbXic+P1xcL10qKSg/PVtcXD9cXC9dXFw+KS8sXHJcbiAgICAgICAgICAgICAgICBbJ2F0dHJpYnV0ZS5uYW1lJywgJycsICdhdHRyaWJ1dGUudmFsdWUnXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvKEBxdWFsaWZpZWROYW1lKShcXHMqPVxccyopKFwiW15cIj5dKnwnW14nPl0qKS8sXHJcbiAgICAgICAgICAgICAgICBbJ2F0dHJpYnV0ZS5uYW1lJywgJycsICdhdHRyaWJ1dGUudmFsdWUnXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbL0BxdWFsaWZpZWROYW1lLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXHJcbiAgICAgICAgICAgIFsvXFw/Pi8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsvKFxcLykoPikvLCBbeyB0b2tlbjogJ3RhZycgfSwgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XV0sXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxyXG4gICAgICAgICAgICBbLzwhLS0vLCB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAY29tbWVudCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9bXjxcXC1dKy8sICdjb21tZW50LmNvbnRlbnQnXSxcclxuICAgICAgICAgICAgWy8tLT4vLCB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy88IS0tLywgJ2NvbW1lbnQuY29udGVudC5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvWzxcXC1dLywgJ2NvbW1lbnQuY29udGVudCddXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9