import { NotionRenderer } from "react-notion-x"
import { ExtendedRecordMap } from "notion-types"
import styles from "./post-viewer.module.css"

type Props = {
  recordMap: ExtendedRecordMap
}

export default function PostViewer({ recordMap }: Props) {
  // import styles from "./post-viewer.module.css" 여기서 스타일링
  return <NotionRenderer className={styles.wrapper} recordMap={recordMap} />
}
