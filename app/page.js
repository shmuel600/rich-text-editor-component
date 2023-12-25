import RichTextEditorHe from './components/RichTextEditorHe'
import RichTextEditor from './components/Editor'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <RichTextEditor />
    </main>
  )
}
