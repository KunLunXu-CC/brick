(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[3585],{23585:(e,n,t)=>{"use strict";t.r(n),t.d(n,{conf:()=>r,language:()=>o});var r={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{offSide:!0}},o={tokenPostfix:".yaml",brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.square",open:"[",close:"]"}],keywords:["true","True","TRUE","false","False","FALSE","null","Null","Null","~"],numberInteger:/(?:0|[+-]?[0-9]+)/,numberFloat:/(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,numberOctal:/0o[0-7]+/,numberHex:/0x[0-9a-fA-F]+/,numberInfinity:/[+-]?\.(?:inf|Inf|INF)/,numberNaN:/\.(?:nan|Nan|NAN)/,numberDate:/\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,escapes:/\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,tokenizer:{root:[{include:"@whitespace"},{include:"@comment"},[/%[^ ]+.*$/,"meta.directive"],[/---/,"operators.directivesEnd"],[/\.{3}/,"operators.documentEnd"],[/[-?:](?= )/,"operators"],{include:"@anchor"},{include:"@tagHandle"},{include:"@flowCollections"},{include:"@blockStyle"},[/@numberInteger(?![ \t]*\S+)/,"number"],[/@numberFloat(?![ \t]*\S+)/,"number.float"],[/@numberOctal(?![ \t]*\S+)/,"number.octal"],[/@numberHex(?![ \t]*\S+)/,"number.hex"],[/@numberInfinity(?![ \t]*\S+)/,"number.infinity"],[/@numberNaN(?![ \t]*\S+)/,"number.nan"],[/@numberDate(?![ \t]*\S+)/,"number.date"],[/(".*?"|'.*?'|.*?)([ \t]*)(:)( |$)/,["type","white","operators","white"]],{include:"@flowScalars"},[/[^#]+/,{cases:{"@keywords":"keyword","@default":"string"}}]],object:[{include:"@whitespace"},{include:"@comment"},[/\}/,"@brackets","@pop"],[/,/,"delimiter.comma"],[/:(?= )/,"operators"],[/(?:".*?"|'.*?'|[^,\{\[]+?)(?=: )/,"type"],{include:"@flowCollections"},{include:"@flowScalars"},{include:"@tagHandle"},{include:"@anchor"},{include:"@flowNumber"},[/[^\},]+/,{cases:{"@keywords":"keyword","@default":"string"}}]],array:[{include:"@whitespace"},{include:"@comment"},[/\]/,"@brackets","@pop"],[/,/,"delimiter.comma"],{include:"@flowCollections"},{include:"@flowScalars"},{include:"@tagHandle"},{include:"@anchor"},{include:"@flowNumber"},[/[^\],]+/,{cases:{"@keywords":"keyword","@default":"string"}}]],multiString:[[/^( +).+$/,"string","@multiStringContinued.$1"]],multiStringContinued:[[/^( *).+$/,{cases:{"$1==$S2":"string","@default":{token:"@rematch",next:"@popall"}}}]],whitespace:[[/[ \t\r\n]+/,"white"]],comment:[[/#.*$/,"comment"]],flowCollections:[[/\[/,"@brackets","@array"],[/\{/,"@brackets","@object"]],flowScalars:[[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/'[^']*'/,"string"],[/"/,"string","@doubleQuotedString"]],doubleQuotedString:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],blockStyle:[[/[>|][0-9]*[+-]?$/,"operators","@multiString"]],flowNumber:[[/@numberInteger(?=[ \t]*[,\]\}])/,"number"],[/@numberFloat(?=[ \t]*[,\]\}])/,"number.float"],[/@numberOctal(?=[ \t]*[,\]\}])/,"number.octal"],[/@numberHex(?=[ \t]*[,\]\}])/,"number.hex"],[/@numberInfinity(?=[ \t]*[,\]\}])/,"number.infinity"],[/@numberNaN(?=[ \t]*[,\]\}])/,"number.nan"],[/@numberDate(?=[ \t]*[,\]\}])/,"number.date"]],tagHandle:[[/\![^ ]*/,"tag"]],anchor:[[/[&*][^ ]+/,"namespace"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy95YW1sL3lhbWwuanMiXSwibmFtZXMiOlsiY29uZiIsImNvbW1lbnRzIiwibGluZUNvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJzdXJyb3VuZGluZ1BhaXJzIiwiZm9sZGluZyIsIm9mZlNpZGUiLCJsYW5ndWFnZSIsInRva2VuUG9zdGZpeCIsInRva2VuIiwia2V5d29yZHMiLCJudW1iZXJJbnRlZ2VyIiwibnVtYmVyRmxvYXQiLCJudW1iZXJPY3RhbCIsIm51bWJlckhleCIsIm51bWJlckluZmluaXR5IiwibnVtYmVyTmFOIiwibnVtYmVyRGF0ZSIsImVzY2FwZXMiLCJ0b2tlbml6ZXIiLCJyb290IiwiaW5jbHVkZSIsImNhc2VzIiwib2JqZWN0IiwiYXJyYXkiLCJtdWx0aVN0cmluZyIsIm11bHRpU3RyaW5nQ29udGludWVkIiwibmV4dCIsIndoaXRlc3BhY2UiLCJjb21tZW50IiwiZmxvd0NvbGxlY3Rpb25zIiwiZmxvd1NjYWxhcnMiLCJkb3VibGVRdW90ZWRTdHJpbmciLCJibG9ja1N0eWxlIiwiZmxvd051bWJlciIsInRhZ0hhbmRsZSIsImFuY2hvciJdLCJtYXBwaW5ncyI6InVJQUFPLElBQUlBLEVBQU8sQ0FDZEMsU0FBVSxDQUNOQyxZQUFhLEtBRWpCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sTUFFeEJDLGlCQUFrQixDQUNkLENBQUVGLEtBQU0sSUFB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LENBQUMsbUNBQW9DLG1CQUNyQyxDQUFDLDhCQUErQixjQUNoQyxDQUFDLCtCQUFnQyxnQkFFckNDLFVBQVcsQ0FBQyxDQUFDLFVBQVcsUUFDeEJDLE9BQVEsQ0FBQyxDQUFDLFlBQWEiLCJmaWxlIjoianMvMzU4NS5jNDY5MmJiNDM3MTJjNTRkZWVmNy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnIydcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cclxuICAgIF0sXHJcbiAgICBmb2xkaW5nOiB7XHJcbiAgICAgICAgb2ZmU2lkZTogdHJ1ZVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnlhbWwnLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScsIG9wZW46ICdbJywgY2xvc2U6ICddJyB9XHJcbiAgICBdLFxyXG4gICAga2V5d29yZHM6IFsndHJ1ZScsICdUcnVlJywgJ1RSVUUnLCAnZmFsc2UnLCAnRmFsc2UnLCAnRkFMU0UnLCAnbnVsbCcsICdOdWxsJywgJ051bGwnLCAnfiddLFxyXG4gICAgbnVtYmVySW50ZWdlcjogLyg/OjB8WystXT9bMC05XSspLyxcclxuICAgIG51bWJlckZsb2F0OiAvKD86MHxbKy1dP1swLTldKykoPzpcXC5bMC05XSspPyg/OmVbLStdWzEtOV1bMC05XSopPy8sXHJcbiAgICBudW1iZXJPY3RhbDogLzBvWzAtN10rLyxcclxuICAgIG51bWJlckhleDogLzB4WzAtOWEtZkEtRl0rLyxcclxuICAgIG51bWJlckluZmluaXR5OiAvWystXT9cXC4oPzppbmZ8SW5mfElORikvLFxyXG4gICAgbnVtYmVyTmFOOiAvXFwuKD86bmFufE5hbnxOQU4pLyxcclxuICAgIG51bWJlckRhdGU6IC9cXGR7NH0tXFxkXFxkLVxcZFxcZChbVHQgXVxcZFxcZDpcXGRcXGQ6XFxkXFxkKFxcLlxcZCspPygoID9bKy1dXFxkXFxkPyg6XFxkXFxkKT8pfFopPyk/LyxcclxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2J0bmZyXFxcXFwiJ118WzAtN11bMC03XT98WzAtM11bMC03XXsyfSkvLFxyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnQnIH0sXHJcbiAgICAgICAgICAgIC8vIERpcmVjdGl2ZVxyXG4gICAgICAgICAgICBbLyVbXiBdKy4qJC8sICdtZXRhLmRpcmVjdGl2ZSddLFxyXG4gICAgICAgICAgICAvLyBEb2N1bWVudCBNYXJrZXJzXHJcbiAgICAgICAgICAgIFsvLS0tLywgJ29wZXJhdG9ycy5kaXJlY3RpdmVzRW5kJ10sXHJcbiAgICAgICAgICAgIFsvXFwuezN9LywgJ29wZXJhdG9ycy5kb2N1bWVudEVuZCddLFxyXG4gICAgICAgICAgICAvLyBCbG9jayBTdHJ1Y3R1cmUgSW5kaWNhdG9yc1xyXG4gICAgICAgICAgICBbL1stPzpdKD89ICkvLCAnb3BlcmF0b3JzJ10sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BhbmNob3InIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0YWdIYW5kbGUnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmbG93Q29sbGVjdGlvbnMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BibG9ja1N0eWxlJyB9LFxyXG4gICAgICAgICAgICAvLyBOdW1iZXJzXHJcbiAgICAgICAgICAgIFsvQG51bWJlckludGVnZXIoPyFbIFxcdF0qXFxTKykvLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIFsvQG51bWJlckZsb2F0KD8hWyBcXHRdKlxcUyspLywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbL0BudW1iZXJPY3RhbCg/IVsgXFx0XSpcXFMrKS8sICdudW1iZXIub2N0YWwnXSxcclxuICAgICAgICAgICAgWy9AbnVtYmVySGV4KD8hWyBcXHRdKlxcUyspLywgJ251bWJlci5oZXgnXSxcclxuICAgICAgICAgICAgWy9AbnVtYmVySW5maW5pdHkoPyFbIFxcdF0qXFxTKykvLCAnbnVtYmVyLmluZmluaXR5J10sXHJcbiAgICAgICAgICAgIFsvQG51bWJlck5hTig/IVsgXFx0XSpcXFMrKS8sICdudW1iZXIubmFuJ10sXHJcbiAgICAgICAgICAgIFsvQG51bWJlckRhdGUoPyFbIFxcdF0qXFxTKykvLCAnbnVtYmVyLmRhdGUnXSxcclxuICAgICAgICAgICAgLy8gS2V5OlZhbHVlIHBhaXJcclxuICAgICAgICAgICAgWy8oXCIuKj9cInwnLio/J3wuKj8pKFsgXFx0XSopKDopKCB8JCkvLCBbJ3R5cGUnLCAnd2hpdGUnLCAnb3BlcmF0b3JzJywgJ3doaXRlJ11dLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZmxvd1NjYWxhcnMnIH0sXHJcbiAgICAgICAgICAgIC8vIFN0cmluZyBub2Rlc1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvW14jXSsvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBGbG93IENvbGxlY3Rpb246IEZsb3cgTWFwcGluZ1xyXG4gICAgICAgIG9iamVjdDogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnQnIH0sXHJcbiAgICAgICAgICAgIC8vIEZsb3cgTWFwcGluZyB0ZXJtaW5hdGlvblxyXG4gICAgICAgICAgICBbL1xcfS8sICdAYnJhY2tldHMnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICAvLyBGbG93IE1hcHBpbmcgZGVsaW1pdGVyXHJcbiAgICAgICAgICAgIFsvLC8sICdkZWxpbWl0ZXIuY29tbWEnXSxcclxuICAgICAgICAgICAgLy8gRmxvdyBNYXBwaW5nIEtleTpWYWx1ZSBkZWxpbWl0ZXJcclxuICAgICAgICAgICAgWy86KD89ICkvLCAnb3BlcmF0b3JzJ10sXHJcbiAgICAgICAgICAgIC8vIEZsb3cgTWFwcGluZyBLZXk6VmFsdWUga2V5XHJcbiAgICAgICAgICAgIFsvKD86XCIuKj9cInwnLio/J3xbXixcXHtcXFtdKz8pKD89OiApLywgJ3R5cGUnXSxcclxuICAgICAgICAgICAgLy8gU3RhcnQgRmxvdyBTdHlsZVxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZmxvd0NvbGxlY3Rpb25zJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZmxvd1NjYWxhcnMnIH0sXHJcbiAgICAgICAgICAgIC8vIFNjYWxhciBEYXRhIHR5cGVzXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0YWdIYW5kbGUnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BhbmNob3InIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmbG93TnVtYmVyJyB9LFxyXG4gICAgICAgICAgICAvLyBPdGhlciB2YWx1ZSAoa2V5d29yZCBvciBzdHJpbmcpXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9bXlxcfSxdKy8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIEZsb3cgQ29sbGVjdGlvbjogRmxvdyBTZXF1ZW5jZVxyXG4gICAgICAgIGFycmF5OiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudCcgfSxcclxuICAgICAgICAgICAgLy8gRmxvdyBTZXF1ZW5jZSB0ZXJtaW5hdGlvblxyXG4gICAgICAgICAgICBbL1xcXS8sICdAYnJhY2tldHMnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICAvLyBGbG93IFNlcXVlbmNlIGRlbGltaXRlclxyXG4gICAgICAgICAgICBbLywvLCAnZGVsaW1pdGVyLmNvbW1hJ10sXHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IEZsb3cgU3R5bGVcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZsb3dDb2xsZWN0aW9ucycgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZsb3dTY2FsYXJzJyB9LFxyXG4gICAgICAgICAgICAvLyBTY2FsYXIgRGF0YSB0eXBlc1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGFnSGFuZGxlJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAYW5jaG9yJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZmxvd051bWJlcicgfSxcclxuICAgICAgICAgICAgLy8gT3RoZXIgdmFsdWUgKGtleXdvcmQgb3Igc3RyaW5nKVxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvW15cXF0sXSsvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBGaXJzdCBsaW5lIG9mIGEgQmxvY2sgU3R5bGVcclxuICAgICAgICBtdWx0aVN0cmluZzogW1svXiggKykuKyQvLCAnc3RyaW5nJywgJ0BtdWx0aVN0cmluZ0NvbnRpbnVlZC4kMSddXSxcclxuICAgICAgICAvLyBGdXJ0aGVyIGxpbmVzIG9mIGEgQmxvY2sgU3R5bGVcclxuICAgICAgICAvLyAgIFdvcmthcm91bmQgZm9yIGluZGVudGF0aW9uIGRldGVjdGlvblxyXG4gICAgICAgIG11bHRpU3RyaW5nQ29udGludWVkOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9eKCAqKS4rJC8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyQxPT0kUzInOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3BhbGwnIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXV0sXHJcbiAgICAgICAgLy8gT25seSBsaW5lIGNvbW1lbnRzXHJcbiAgICAgICAgY29tbWVudDogW1svIy4qJC8sICdjb21tZW50J11dLFxyXG4gICAgICAgIC8vIFN0YXJ0IEZsb3cgQ29sbGVjdGlvbnNcclxuICAgICAgICBmbG93Q29sbGVjdGlvbnM6IFtcclxuICAgICAgICAgICAgWy9cXFsvLCAnQGJyYWNrZXRzJywgJ0BhcnJheSddLFxyXG4gICAgICAgICAgICBbL1xcey8sICdAYnJhY2tldHMnLCAnQG9iamVjdCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBTdGFydCBGbG93IFNjYWxhcnMgKHF1b3RlZCBzdHJpbmdzKVxyXG4gICAgICAgIGZsb3dTY2FsYXJzOiBbXHJcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXidcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbLydbXiddKicvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bkb3VibGVRdW90ZWRTdHJpbmcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZG91YmxlUXVvdGVkU3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bwb3AnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gU3RhcnQgQmxvY2sgU2NhbGFyXHJcbiAgICAgICAgYmxvY2tTdHlsZTogW1svWz58XVswLTldKlsrLV0/JC8sICdvcGVyYXRvcnMnLCAnQG11bHRpU3RyaW5nJ11dLFxyXG4gICAgICAgIC8vIE51bWJlcnMgaW4gRmxvdyBDb2xsZWN0aW9ucyAodGVybWluYXRlIHdpdGggLF19KVxyXG4gICAgICAgIGZsb3dOdW1iZXI6IFtcclxuICAgICAgICAgICAgWy9AbnVtYmVySW50ZWdlcig/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlciddLFxyXG4gICAgICAgICAgICBbL0BudW1iZXJGbG9hdCg/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbL0BudW1iZXJPY3RhbCg/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlci5vY3RhbCddLFxyXG4gICAgICAgICAgICBbL0BudW1iZXJIZXgoPz1bIFxcdF0qWyxcXF1cXH1dKS8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvQG51bWJlckluZmluaXR5KD89WyBcXHRdKlssXFxdXFx9XSkvLCAnbnVtYmVyLmluZmluaXR5J10sXHJcbiAgICAgICAgICAgIFsvQG51bWJlck5hTig/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlci5uYW4nXSxcclxuICAgICAgICAgICAgWy9AbnVtYmVyRGF0ZSg/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlci5kYXRlJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHRhZ0hhbmRsZTogW1svXFwhW14gXSovLCAndGFnJ11dLFxyXG4gICAgICAgIGFuY2hvcjogW1svWyYqXVteIF0rLywgJ25hbWVzcGFjZSddXVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9