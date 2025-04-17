export default function TimelineSection() {
  return (
    <section id="timeline" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center mb-4">Historical Chronology</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">TIMELINE OF EVENTS</h2>

        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-red-600 pl-6 space-y-10">
            <div>
              <h3 className="text-xl font-bold">April 17, 1975</h3>
              <p className="text-gray-700 mt-2">
                The Khmer Rouge, led by Pol Pot, captures Phnom Penh and begins the forced evacuation of cities. Urban
                dwellers are relocated to rural areas to work on collective farms, marking the beginning of what would
                become known as "Year Zero."
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">1975-1976</h3>
              <p className="text-gray-700 mt-2">
                Implementation of radical agricultural policies, including the abolition of private property and
                currency. Unrealistic production quotas are set while experienced farmers are replaced by inexperienced
                urban dwellers, leading to dramatic drops in food production.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">1976-1978</h3>
              <p className="text-gray-700 mt-2">
                Widespread famine develops as agricultural production collapses. Food is distributed unequally, with
                priority given to Khmer Rouge officials and soldiers. Civilians are forced to work 12-14 hour days on
                minimal food rations, leading to widespread malnutrition and starvation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">January 7, 1979</h3>
              <p className="text-gray-700 mt-2">
                Vietnamese forces capture Phnom Penh, ending the Khmer Rouge regime. By this time, an estimated 1-2
                million Cambodians (approximately 25% of the population) had died from starvation, disease, overwork,
                and execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
