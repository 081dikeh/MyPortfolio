// src/components/common/RollText.tsx
/** Text that rolls up and is replaced by a copy when its parent `.group` is hovered or focused. */
export default function RollText({ children }: { children: string }) {
  return (
    <span className='roll'>
      <span data-text={children}>{children}</span>
    </span>
  )
}