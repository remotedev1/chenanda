import About from "@/components/frontend/homepage/About";
import Achievement from "@/components/frontend/homepage/Achievement";
import Achievers from "@/components/frontend/homepage/Achievers";
import ContactUs from "@/components/frontend/homepage/ContactUs";
import Hero from "@/components/frontend/homepage/Hero";

export const revalidate = 0;

export default async function Home() {
  // const billboard = await getBillboard();
  // const brands = await getBrands();

  return (
    <main className="flex   overflow-hidden  flex-col items-center justify-between  text-black">
      <div className="flex w-full flex-col">
        <Hero />
        <About />
        <Achievers />
        <Achievement />
        <ContactUs />
      </div>
    </main>
  );
}
