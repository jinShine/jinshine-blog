import { CONFIG } from 'config'
import dynamic from 'next/dynamic'
import { TNotionPost } from 'src/common/libraries/notion/types'

const UtterancesComponent = dynamic(
  () => {
    return import('src/components/Utterances')
  },
  { ssr: false },
)

type CommentBoxProps = {
  postData: TNotionPost | null | undefined
}

export default function CommentBox(props: CommentBoxProps) {
  return (
    <>
      {CONFIG.utterances.enable && (
        <UtterancesComponent issueTerm={props.postData?.id ?? ''} />
      )}
    </>
  )
}
