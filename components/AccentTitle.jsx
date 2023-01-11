export default function AccentTitle ({small, text}) {
  return (
    <h3 className={`text-accent select-none font-semibold text-xs lg:text-sm' mb-4`}>
      {text.toUpperCase()}
    </h3>)
}
