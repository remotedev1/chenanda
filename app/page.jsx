// import { getBillboard } from "@/actions/get-billboard";
// import { getBrands } from "@/actions/get-brands";
// import { Testimonials } from "@/components/frontend/Testimonials";
// import Billboard from "@/components/frontend/homepage/billboard";
// import BrandList from "@/components/frontend/homepage/brands";
// import CategoryList from "@/components/frontend/homepage/categories";
// import ClienteleList from "@/components/frontend/homepage/clientele";
// import OurServices from "@/components/frontend/homepage/our-services";
// import { PartnerProgram } from "@/components/frontend/homepage/partner-program";
// import { WhyChooseUs } from "@/components/frontend/homepage/why-choose-us";
// import ProductCarousel from "@/components/frontend/product-carousel";

import About from "@/components/frontend/homepage/About";
import Gallery from "@/components/frontend/homepage/Gallery";
import Hero from "@/components/frontend/homepage/Hero";

export const revalidate = 0;

export default async function Home() {
  // const billboard = await getBillboard();
  // const brands = await getBrands();

  return (
    <main className="flex   overflow-hidden  flex-col items-center justify-between  text-black">
      <div className="flex w-full flex-col">
        {/* <WelcomeScreen /> */}
        <Hero />
        <About />
        <Gallery />
      </div>
    </main>
  );
}
