# A prophet means what he says
## Embed

Embed another file. Here's the embedded section:
```md
![[Plugins makes Obsidian special for you ]]
```
## Callout
## Link

### External
```md
[This is an external link to genome.gov](https://www.genome.gov/)
```

[This is an external link to genome.gov](https://www.genome.gov/)

### Internal

Obsidian supports the following link formats:
- Wikilink: [[Three laws of motion]]
- Markdown: [Three laws of moation](url)

#### Markdown Link rules

1. Use the "relative path" omitting the protocol | domain name | suffix
2. Any outline heading to be an anchor
3. Escape space to %20 in the uri if there exists

```markdown
[Aim an Anchor](./CMD-Linux#Impressions)
[Aim an Anchor|Anchor2](./CMD-Linux#Summarize%20Bottom)
```

[Aim an Anchor](CMD-Linux.md#Impressions)
[Aim an Anchor|Anchor2](CMD-Linux.md#Summarize%20Bottom)
#### Wiki Link Rules
```markdown
> [!info] How to kink to a heading in a note
> [[Three laws of motion#Second law]]
> Wikilink: [[Embeds]] 

```

> [!info] How to kink to a heading in a note
> [[Three laws of motion#Second law]]
> Wikilink: [[Embeds]] 

```markdown 
> [!info] How to link a block in a note
> adding #^, when type caret (^), select the block from a list of suggestions
```


> [!info] How to link a block in a note
> adding #^, when type caret (^), select the block from a list of suggestions

```markdown
> [!info] How to change the link display text
> vertical bar (|)
> For example, [[Internal links|custom display text]]
```
### Variable
```md
[Runoob][runoob]
[runoob]: http://www.runoob.com/
```

这个链接用 runoob 作为网址变量 [Runoob][runoob]
然后在为变量赋值（网址）
__\*要求保留空行\*__
__\*变量预览不显示\*__

  [runoob]: http://www.runoob.com/

### URL and Email Address

```md
<https://www.codecademy.com/resources/docs>
```
<https://www.codecademy.com/resources/docs>

### Obsidian URI links

Obsidian URI links can be used to open notes in Obsidian either from another Obsidian vault or another program.
```md
[Link to note](obsidian://open?path=D:%2Fpath%2Fto%2Ffile.md)
```

## Task

```md
- [x] #tags, [links](), **formatting** supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [?] this is also a complete item (works with every character)
- [ ] this is an incomplete item
- [ ] tasks can be clicked in Preview to be checked off
```

## Basic Decoration
```markdown

# Heading 1
## Heading 2
###### Heading 6
**Bold**
*Italicized text*
~~Strikethrough text~~
==Hightlight==
> Quote here
___
`programming single line`

\```
block code here
\```

```
