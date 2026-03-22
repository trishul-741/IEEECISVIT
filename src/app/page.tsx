import HeroCarousel from "@/components/HeroCarousel";
import MessageSection from "@/components/MessageSection";
import SectionTitle from "@/components/SectionTitle";
import LeadershipCard from "@/components/LeadershipCard";
import teamData from "@/data/team.json";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <MessageSection />

      {/* Leadership */}
      <section className="bg-surface py-24 sm:py-32" aria-labelledby="leadership-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Leadership"
            subtitle="Meet Our Visionaries"
            // description="The passionate individuals driving IEEE CIS forward with vision, dedication, and expertise."
            light
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamData.leadership.map((member, index) => (
              <LeadershipCard
                key={member.id}
                name={member.name}
                position={member.position}
                description={member.description}
                photo={member.photo}
                linkedin={member.linkedin}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
