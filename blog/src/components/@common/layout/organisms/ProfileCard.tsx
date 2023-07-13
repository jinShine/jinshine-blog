import { ProfileCardLayout } from '../atoms/ProfileCardLayout'
import { ProfileContent } from '../molecules/body/ProfileContent'

export function ProfileCard({ isMobile }: { isMobile: boolean }) {
  return (
    <ProfileCardLayout>
      <ProfileContent isMobile={isMobile} />
    </ProfileCardLayout>
  )
}
