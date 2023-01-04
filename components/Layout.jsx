export default function Layout({children}) {
  return (
    <div className={`xl:max-w-6xl mx-auto px-12 visible`}>
      {children}
    </div>
  )
}
