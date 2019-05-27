import * as React from 'react'

const SvgCard = (props: any) => (
  <svg viewBox="0 0 36 36" {...props}>
    <path d="M34 30H2V6h32zM6 26h24V10H6z" />
    <circle cx={12.8} cy={15.21} r={3.21} />
    <path d="M15.6 19.2H10a2 2 0 0 0-2 2V24h9.6v-2.8a2 2 0 0 0-2-2zM28 17h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
  </svg>
)

export default SvgCard
