export default function AccentTitle ({small, text}) {
  return (
    <div className={`text-accent select-none font-semibold text-xs lg:text-sm' mb-4`}>
      {text.toUpperCase()}
    </div>)
}
