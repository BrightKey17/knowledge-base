## Lookahead and Lookbehind Zero-Length Assertions

Lookahead and lookbehind, collectively called "lookaround", are zero-length assertions just like the start and end of line, and start and end of word anchors explained earlier in this tutorial. The difference is that lookaround actually matches characters, but then gives up the match, returning only the result: match or no match. That is why they are called "assertions". They do not consume characters in the string, but only assert whether a match is possible or not. Lookaround allows you to create regular expressions that are impossible to create without them, or that would get very lonwinded without them.

## Positive and Negative Lookahead
---
Negative lookahead is indispensable if you want to match something not followed by something else. When explaining character classes, this tutorial explained why you cannot use a negated character class to match a ==q== not followed by a ==u==. Negative lookahead provides the solution: q(?!u). The negative lookahead construct is the pair of parentheses, with the opening parenthesis followed by a question mark and exclamation point., Inside the lookahead, we have the trivial regex u.

Positive lookahead works just the same. ==q(?=u)== matches a q that followed by a u, without making the u part of the match. The positive lookahead construct is a pair of parentheses,  with the opening parenthesis followed by a question mark and an equalssign.

You can use any regular expression inside the lookahead (but not lookbehind, as explained below). Any valid regular expression can be used inside the lookahead. If it contains **capturing groups** then those groups will capture as normal and backreferences to them will work normally, even outside the lookahead. The lookahead itself is not a capturing group. It is not included in the count towards numbering the backreferences. If  you want to store the match of the regex inside a lookahead, you have to put capturing parentheses around the regex inside the lookahead, like this: (?=(regex)). The other way around will work, because the lookahead will already have discarded the regex match by the time the capturing group is to store its match.

'Negative lookbehind': (?<!  ) which is
saying "What's before this is not..."
