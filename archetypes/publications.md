---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
authors: []
journal: ""
doi: ""
link: ""
abstract: ""
tags: []
---

## Resumo

{{ .Params.abstract }}

## Citação

**Autores:** {{ delimit .Params.authors ", " }}
**Revista:** {{ .Params.journal }}
**DOI:** {{ .Params.doi }}

[Acessar publicação]({{ .Params.link }})
