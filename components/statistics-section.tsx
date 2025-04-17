export default function StatisticsSection() {
  return (
    <section id="statistics" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">KEY STATISTICS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-5xl font-bold text-red-600 mb-2">1.7-2M</p>
            <p className="text-gray-700">Estimated Deaths During the Famine</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-red-600 mb-2">25%</p>
            <p className="text-gray-700">Approximate Percentage of Population Lost</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-red-600 mb-2">14,000+</p>
            <p className="text-gray-700">Prisoners at S-21 (Tuol Sleng)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <div className="text-center">
            <p className="text-5xl font-bold text-red-600 mb-2">5,000+</p>
            <p className="text-gray-700">Mass Grave Sites Identified</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-red-600 mb-2">3.8 Years</p>
            <p className="text-gray-700">Duration of the Khmer Rouge Regime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
