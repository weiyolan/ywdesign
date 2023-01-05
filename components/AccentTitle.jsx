export default function AccentTitle ({small, text}) {
  return (
    <h3 className={`text-accent font-semibold text-[0.6rem] sm:text-xs lg:text-sm'} mb-4`}>
      {text.toUpperCase()}
    </h3>)
}
