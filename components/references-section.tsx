import Link from "next/link"

export default function ReferencesSection() {
  const references = [
    {
      author: "United States Holocaust Memorial Museum",
      year: "n.d.",
      title: "S-21: Tuol Sleng Prison",
      url: "https://www.ushmm.org/genocide-prevention/countries/cambodia/case-study/violence/s-21/",
    },
    {
      author: "BBC News",
      year: "2015, June 11",
      title: "How two men survived a prison where 12,000 were killed",
      url: "https://www.bbc.com/news/magazine-33096971",
    },
    {
      author: "The Phnom Penh Post",
      year: "2011, January 4",
      title: "More than 200 survived S-21 prison: report",
      url: "https://www.phnompenhpost.com/national/more-200-survived-s-21-prison-report",
    },
    {
      author: "Yale University Cambodian Genocide Program",
      year: "1997",
      title: "Report of the Cambodian Genocide Program, 1994–1997",
      url: "https://macmillan.yale.edu/gsp/report-cambodian-genocide-program-1994-1997",
    },
    {
      author: "The Guardian",
      year: "2020, September 2",
      title: "Comrade Duch, Khmer Rouge chief executioner, dies in Cambodia",
      url: "https://www.theguardian.com/world/2020/sep/02/comrade-duch-khmer-rouge-dies-cambodia",
    },
    {
      author: "Time Magazine",
      year: "1979, November 12",
      title: "Starvation in Cambodia",
      url: "https://content.time.com/time/covers/0,16641,19791112,00.html",
    },
    {
      author: "Tyner, J. A.",
      year: "2017",
      title: "Famine in Cambodia: Geopolitics, Biopolitics, and the Annihilation of a People",
      note: "(Referenced via class lecture and slides.)",
    },
    {
      author: "Mbembe, A.",
      year: "2003",
      title: "Necropolitics. Public Culture, 15(1), 11–40",
      note: "(Referenced via class discussion and analysis.)",
    },
    {
      author: "CyberCambodia",
      year: "n.d.",
      title: "Yimsut, R. The Tonle Sap Massacre: A Survivor's Story",
      url: "https://www.cybercambodia.com/dachs/stories/rahim.html",
    },
    {
      author: "Extraordinary Chambers in the Courts of Cambodia (ECCC)",
      year: "n.d.",
      title: "Prosecution of Senior Khmer Rouge Leaders",
      url: "https://www.eccc.gov.kh",
    },
    {
      author: "HUMN 4900",
      year: "April 2025",
      title: "Famine & Genocide Course Pack and Lecture Materials – Dr. V",
      note: "(Course materials)",
    },
  ]

  return (
    <section id="references" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">REFERENCES</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
          <ul className="space-y-4">
            {references.map((ref, index) => (
              <li key={index} className="text-sm text-gray-700">
                {ref.author} ({ref.year}). <em>{ref.title}</em>.{" "}
                {ref.url ? (
                  <Link
                    href={ref.url}
                    className="text-red-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Retrieved from {ref.url}
                  </Link>
                ) : (
                  ref.note
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
