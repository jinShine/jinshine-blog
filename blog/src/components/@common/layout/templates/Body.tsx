import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { BodyLayout } from '../atoms/body/Layout'
import { MainInnerLayout } from '../atoms/body/main/InnerLayout'
import { MainLayout } from '../atoms/body/main/Layout'
import { SidebarLeftInnerLayout } from '../atoms/body/sidebarLeft/InnerLayout'
import { SidebarLeftLayout } from '../atoms/body/sidebarLeft/Layout'
import { CategoryList } from '../organisms/CategoryList'
import { ContactCard } from '../organisms/ContactCard'
import { ProfileCard } from '../organisms/ProfileCard'

export default function Body({ children }: { children: ReactNode }) {
  const router = useRouter()
  const isSidebarLeftHidden = router.asPath.includes('/posts')

  return (
    <BodyLayout isSidebarLeftHidden={isSidebarLeftHidden}>
      {isSidebarLeftHidden ? (
        <MainLayout isSidebarLeftHidden={true}>{children}</MainLayout>
      ) : (
        <>
          <SidebarLeftLayout>
            <SidebarLeftInnerLayout>
              <ProfileCard isMobile={false} />
              <ContactCard />
              <CategoryList isMobile={false} />
            </SidebarLeftInnerLayout>
          </SidebarLeftLayout>
          <MainLayout isSidebarLeftHidden={false}>
            <MainInnerLayout>
              <ProfileCard isMobile={true} />
              <CategoryList isMobile={true} />
            </MainInnerLayout>
            {children}
          </MainLayout>
        </>
      )}
    </BodyLayout>
  )
}
