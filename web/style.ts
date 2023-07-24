import { HighlightStyle } from "../common/deps.ts";
import { tagHighlighter, tags as t } from "./deps.ts";
import * as ct from "../common/markdown_parser/customtags.ts";
import { MDExt } from "../common/markdown_parser/markdown_ext.ts";

export default function highlightStyles(mdExtension: MDExt[]) {
  tagHighlighter;
  return HighlightStyle.define([
    { tag: t.heading1, class: "sb-h1" },
    { tag: t.heading2, class: "sb-h2" },
    { tag: t.heading3, class: "sb-h3" },
    { tag: t.link, class: "sb-link" },
    { tag: t.meta, class: "sb-meta" },
    { tag: t.quote, class: "sb-quote" },
    { tag: t.monospace, class: "sb-code" },
    { tag: t.url, class: "sb-url" },
    { tag: ct.WikiLinkTag, class: "sb-wiki-link" },
    { tag: ct.WikiLinkPageTag, class: "sb-wiki-link-page" },
    { tag: ct.CommandLinkTag, class: "sb-command-link" },
    { tag: ct.CommandLinkNameTag, class: "sb-command-link-name" },
    { tag: ct.AttributeTag, class: "sb-frontmatter" },
    { tag: ct.AttributeNameTag, class: "sb-atom" },
    { tag: ct.TaskTag, class: "sb-task" },
    { tag: ct.TaskMarkerTag, class: "sb-task-marker" },
    { tag: ct.CodeInfoTag, class: "sb-code-info" },
    { tag: ct.CommentTag, class: "sb-comment" },
    { tag: ct.CommentMarkerTag, class: "sb-comment-marker" },
    { tag: ct.Highlight, class: "sb-highlight" },
    { tag: t.emphasis, class: "sb-emphasis" },
    { tag: t.strong, class: "sb-strong" },
    { tag: t.atom, class: "sb-atom" },
    { tag: t.bool, class: "sb-bool" },
    { tag: t.url, class: "sb-url" },
    { tag: t.inserted, class: "sb-inserted" },
    { tag: t.deleted, class: "sb-deleted" },
    { tag: t.literal, class: "sb-literal" },
    { tag: t.keyword, class: "sb-keyword" },
    { tag: t.list, class: "sb-list" },
    // { tag: t.def, class: "sb-li" },
    { tag: t.string, class: "sb-string" },
    { tag: t.number, class: "sb-number" },
    { tag: [t.regexp, t.escape, t.special(t.string)], class: "sb-string2" },
    { tag: t.variableName, class: "sb-variableName" },
    { tag: t.typeName, class: "sb-typeName" },
    { tag: t.strikethrough, class: "sb-strikethrough" },
    { tag: t.comment, class: "sb-comment" },
    { tag: t.invalid, class: "sb-invalid" },
    { tag: t.processingInstruction, class: "sb-meta" },
    { tag: t.punctuation, class: "sb-punctuation" },
    { tag: ct.DirectiveTag, class: "sb-directive" },
    { tag: ct.HorizontalRuleTag, class: "sb-hr" },
    ...mdExtension.map((mdExt) => {
      return { tag: mdExt.tag, ...mdExt.styles, class: mdExt.className };
    }),
  ]);
}
