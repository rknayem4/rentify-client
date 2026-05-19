import Banner from "@/Components/Banner";
import ExperienceSection from "@/Components/ExperienceSection";
import ReviewsSection from "@/Components/ReviewsSection";
import TopCars from "@/Components/TopCars";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopCars></TopCars>
      <ExperienceSection></ExperienceSection>
      <ReviewsSection></ReviewsSection>
    </div>
  );
}
