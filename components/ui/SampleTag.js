/**
 * Visual marker for placeholder/sample content that must be replaced with
 * real data before launch. Pair with a code comment at the data source.
 * Remove instances of <SampleTag /> once real content is in place.
 */
export default function SampleTag({ dark = false, label = "Sample content" }) {
  return (
    <span className={dark ? "sample-tag sample-tag--dark" : "sample-tag"} title="Placeholder — replace with real data before launch">
      {label}
    </span>
  )
}
