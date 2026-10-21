// src/components/effects/Effects.tsx
import CustomCursor from './CustomCursor'
import PageTransition from './PageTransition'

/** Site-wide effects that live outside any one page. */
export default function Effects() {
  return (
    <>
      <CustomCursor />
      <PageTransition />
    </>
  )
}