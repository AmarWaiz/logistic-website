import { Fragment } from 'react'

/** Renders a string containing manual `\n` line breaks as `<br/>`-separated lines. */
export function renderMultiline(text: string) {
  return text.split('\n').map((line, i, arr) => (
    <Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </Fragment>
  ))
}

/** Splits a `\n\n`-separated block of text into paragraph strings. */
export function splitParagraphs(text: string): string[] {
  return text.split('\n\n').filter(Boolean)
}
