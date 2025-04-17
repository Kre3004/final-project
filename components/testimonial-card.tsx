import Image from "next/image"

interface TestimonialCardProps {
  name: string
  description: string
  testimony: string
}

export default function TestimonialCard({ name, description, testimony }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src="/placeholder.svg?height=100&width=100"
            alt={name}
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>
      <blockquote className="italic text-gray-700 border-l-4 border-red-600 pl-4">"{testimony}"</blockquote>
    </div>
  )
}
