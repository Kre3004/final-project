import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import TimelineSection from "@/components/timeline-section"
import StatisticsSection from "@/components/statistics-section"
import TestimonialCard from "@/components/testimonial-card"
import ReferencesSection from "@/components/references-section"
import SiteHeader from "@/components/site-header"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/50 z-0">
          <Image
            src="/images/cambodian-famine-hero.png"
            alt="Artistic representation of the Cambodian famine showing suffering and Angkor Wat temple"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-1"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="inline-flex items-center gap-2">
              <div className="bg-red-500 rounded-full p-2">
                <span className="sr-only">Icon</span>
              </div>
              <p className="text-white text-sm md:text-base">Historical Documentation</p>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              THE CAMBODIAN
              <br />
              FAMINE
            </h2>

            <div className="mt-8">
              <p className="text-yellow-500 font-medium">1975-1979</p>
              <p className="text-white">A Historical Analysis</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-8 right-8 z-10 flex items-center gap-4">
          <p className="text-white text-sm">LEARN MORE</p>
          <div className="w-8 h-px bg-white"></div>
          <Link href="#introduction" className="text-white hover:text-yellow-500">
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Learn more</span>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-yellow-500 mb-4">Historical Context</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">THE CAMBODIAN GENOCIDE</h2>

          <div className="prose prose-lg max-w-3xl mx-auto mb-16">
            <p>
              Between 1975 and 1979, Cambodia endured one of the most harrowing periods in its history under the Khmer
              Rouge regime led by Pol Pot. This period saw a catastrophic famine that claimed the lives of an estimated
              1.7 to 2 million Cambodians, representing approximately 25% of the country's population.
            </p>
            <p>
              The Khmer Rouge's rise to power in April 1975 marked the beginning of a brutal social engineering
              experiment aimed at creating an agrarian utopia. The regime's policies led to widespread famine, forced
              labor, and mass executions. Among the most notorious sites of this terror was the S-21 prison (Tuol
              Sleng), where thousands were tortured and executed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Khmer Rouge Card */}
            <div className="bg-yellow-500 p-6">
              <h3 className="text-white text-xl font-semibold mb-6">THE KHMER ROUGE</h3>
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/khmer-rouge-soldiers.png"
                  alt="Khmer Rouge soldiers and child soldiers with weapons"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
              <p className="text-white mt-4">
                The Khmer Rouge sought to eliminate all perceived threats to its vision of a classless, agrarian
                society. Intellectuals, professionals, ethnic minorities, and even former Khmer Rouge members were
                targeted.
              </p>
            </div>

            {/* Famine Card */}
            <div className="bg-red-600 p-6">
              <h3 className="text-white text-xl font-semibold mb-6">THE FAMINE</h3>
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iaOeUKIYOMBAk1HR6CzTxyCKz1z6oj.png"
                  alt="Malnourished Cambodian children holding empty bowls during the famine"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
              <p className="text-white mt-4">
                The famine resulted from the regime's forced collectivization, destruction of infrastructure, and
                neglect of agricultural practices. The Four-Year Plan demanded unattainable rice production quotas,
                leading to widespread starvation.
              </p>
            </div>

            {/* S-21 Prison Card */}
            <div className="bg-gray-800 p-6">
              <h3 className="text-white text-xl font-semibold mb-6">S-21 PRISON</h3>
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/s21-prison-window.png"
                  alt="S-21 Prison (Tuol Sleng) corridor with prisoner"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
              <p className="text-white mt-4">
                S-21, located in Phnom Penh, was originally a high school before being converted into a prison. Between
                14,000 and 17,000 individuals were imprisoned there; only 12 are believed to have survived.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Khmer Rouge Section with Historical Photo */}
      <section id="khmer-rouge" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">THE RISE AND FALL OF THE KHMER ROUGE</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vW1CUPhMYO9RkRYrqjzbQdHxqC2DVw.png"
                alt="Vietnamese soldiers near a Cambodian temple after overthrowing the Khmer Rouge in 1979"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <p className="text-sm text-gray-500 mt-2 italic">
                Vietnamese soldiers with their flag near a Cambodian temple in January 1979, after invading Cambodia and
                overthrowing the Khmer Rouge regime.
              </p>
            </div>
            <div className="prose prose-lg">
              <p>
                The Khmer Rouge, led by Pol Pot, seized power in Cambodia on April 17, 1975, after defeating the
                U.S.-backed government of Lon Nol. They immediately began implementing their radical vision of an
                agrarian utopia, evacuating cities and forcing the population into rural labor camps.
              </p>
              <p>
                Their rule was characterized by extreme brutality, with intellectuals, professionals, ethnic minorities,
                and perceived enemies of the regime systematically eliminated. The regime abolished money, private
                property, religion, and traditional Cambodian culture in their attempt to create a classless society.
              </p>
              <p>
                After nearly four years of terror, the Khmer Rouge regime was overthrown in January 1979 when Vietnamese
                forces invaded Cambodia in response to border conflicts and the humanitarian crisis. As shown in the
                image, Vietnamese troops entered Cambodia and quickly captured Phnom Penh, forcing the Khmer Rouge to
                flee to the Thai border where they continued guerrilla warfare for many years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Causes Section */}
      <section id="causes" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">CAUSES OF THE FAMINE</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Political Factors</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Implementation of radical Maoist-inspired agricultural policies</li>
                <li>Forced collectivization of agriculture</li>
                <li>Abolition of private property and markets</li>
                <li>Prioritization of ideology over practical farming knowledge</li>
                <li>Isolation from international aid and trade</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Agricultural Factors</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Unrealistic production quotas set by the regime</li>
                <li>Replacement of experienced farmers with urban dwellers</li>
                <li>Lack of agricultural equipment and proper irrigation</li>
                <li>Disruption of traditional farming practices</li>
                <li>Diversion of rice production to fund the regime's projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Famine Impact Section with Historical Photo */}
      <section id="human-toll" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">THE HUMAN TOLL</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div>
              <Image
                src="/images/human-toll-mass-grave.png"
                alt="Khmer Rouge soldiers with malnourished children near a mass grave with human remains"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
              <p className="text-sm text-gray-500 mt-2 italic">
                Khmer Rouge soldiers standing with malnourished children near a mass grave. The regime's policies led to
                widespread death from starvation, disease, and execution.
              </p>
            </div>
            <div className="prose prose-lg">
              <p>
                Children were particularly vulnerable during the Cambodian famine. Many were separated from their
                families and forced to work in labor camps despite severe malnutrition. Food was strictly rationed, with
                priority given to Khmer Rouge officials and soldiers.
              </p>
              <p>
                The regime's policies led to widespread malnutrition, with many children receiving only a small portion
                of watery rice porridge each day. Disease spread rapidly among the weakened population, and medical care
                was virtually nonexistent as the regime had executed most doctors and medical professionals.
              </p>
              <p>
                Survivor testimonies describe children being forced to forage for insects, small animals, and wild
                plants to supplement their meager rations, often at the risk of severe punishment if caught.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S-21 Prison Section */}
      <section id="s21-prison" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">S-21 PRISON: A SYMBOL OF BRUTALITY</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div>
              <Image
                src="/images/s21-prisoner-photos.png"
                alt="Prisoner identification photographs from S-21 Prison (Tuol Sleng)"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
              <p className="text-sm text-gray-500 mt-2 italic">
                Prisoner identification photographs from S-21 Prison. The Khmer Rouge meticulously documented their
                victims before torture and execution.
              </p>
            </div>
            <div className="prose prose-lg">
              <p>
                S-21, also known as Tuol Sleng, was a former high school in Phnom Penh converted into a prison and
                interrogation center by the Khmer Rouge. Between 14,000 and 17,000 individuals were detained there; only
                12 are believed to have survived.
              </p>
              <p>
                Prisoners were subjected to severe torture methods, including electric shocks and beatings, to extract
                confessions, many of which were fabricated. The majority were then executed at Choeung Ek, a killing
                field located outside the city.
              </p>
              <p>
                Today, Tuol Sleng is a genocide museum, preserving the haunting mugshots, cells, and tools of torture as
                a stark reminder of the atrocities committed during the Khmer Rouge regime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Survivor Testimonies Section */}
      <section id="testimonies" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">SURVIVOR TESTIMONIES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              name="Chum Mey"
              description="S-21 Survivor"
              testimony="I was arrested in 1978 and taken to S-21. I endured brutal torture, including electric shocks and beatings, leading me to falsely confess to espionage. Despite the trauma, I returned to the prison site years later to share my story and ensure the atrocities were not forgotten."
            />
            <TestimonialCard
              name="Bou Meng"
              description="S-21 Survivor"
              testimony="I was imprisoned in 1976 and tortured for weeks. My survival was due to my skill in painting, which the Khmer Rouge exploited for propaganda purposes. Tragically, my wife was executed, and my children died from starvation in a children's center."
            />
          </div>
        </div>
      </section>

      {/* Necropolitics Section */}
      <section id="starvation" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">STARVATION AS A WEAPON</h2>

          <div className="prose prose-lg max-w-3xl mx-auto">
            <p>
              The Cambodian famine wasn't just a byproduct of misguided agricultural reform—it was an instrument of
              political power. Pol Pot and the Khmer Rouge used famine, like torture at S-21, to discipline the
              population, punish dissent, and create an "ideal" society through elimination.
            </p>
            <p>
              Food was not a right. Life was not a right. Existence was conditional on ideological loyalty and labor
              productivity. In this way, famine became not just something that happened—but something that was made to
              happen.
            </p>
            <h3>How Famine Was Weaponized</h3>
            <ul>
              <li>
                <strong>Forced Evacuations:</strong> Cities were emptied at gunpoint, with over 2 million urban dwellers
                marched into the countryside.
              </li>
              <li>
                <strong>Agrarian Collectivization:</strong> Farms were collectivized; private property and personal
                cooking were banned. All food was controlled by the state.
              </li>
              <li>
                <strong>Starvation as Discipline:</strong> Denial of rice was used to punish disobedience. Those too
                old, young, or sick to work were treated as "useless mouths."
              </li>
              <li>
                <strong>Destruction of Infrastructure:</strong> Hospitals, universities, and transport systems were
                dismantled. There was no relief infrastructure for famines.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section id="aftermath" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">AFTERMATH AND LEGACY</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Refugees and the Diaspora</h3>
              <p className="text-gray-700">
                Following the fall of the Khmer Rouge in 1979, millions of Cambodians fled the country, seeking refuge
                in neighboring nations. The Sa Kaeo refugee camp in Thailand became one of the largest, housing over
                30,000 refugees at its peak. Conditions were dire, with limited medical care and inadequate shelter
                leading to high mortality rates.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">The Road to Justice</h3>
              <p className="text-gray-700">
                In the years following the regime's collapse, efforts were made to bring perpetrators to justice. The
                Extraordinary Chambers in the Courts of Cambodia (ECCC) was established to prosecute senior Khmer Rouge
                leaders. Notably, Kaing Guek Eav, known as Comrade Duch, was convicted for his role in the atrocities at
                S-21.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <ReferencesSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About This Project</h3>
              <p className="text-gray-400">
                This website is dedicated to documenting and preserving the history of the Cambodian famine and genocide
                under the Khmer Rouge regime (1975-1979). The goal is to educate and ensure these events are never
                forgotten.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                For more information or to contribute to this historical documentation project, please contact:
              </p>
              <p className="text-gray-400 mt-2">
                Kareilys Castillo
                <br />
                <a href="mailto:kre.castcg@gmail.com" className="text-red-400 hover:text-red-300">
                  kre.castcg@gmail.com
                </a>
              </p>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <p className="text-center text-gray-500">© 2023 Cambodian Famine Historical Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
