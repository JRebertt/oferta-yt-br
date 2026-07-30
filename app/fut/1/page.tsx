import { readFileSync } from 'fs'
import { join } from 'path'

export default function Fut1() {
  const htmlPath = join(process.cwd(), 'public', 'fut', '1.html')
  const html = readFileSync(htmlPath, 'utf-8')

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}
