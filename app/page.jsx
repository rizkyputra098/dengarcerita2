import Hero from "@/components/HOME/Hero";
import Isu from "@/components/HOME/Isu";
import Kartu from "@/components/HOME/Kartu";
import Pertolongan from "@/components/HOME/Pertolongan";
import Cerita from "@/components/HOME/Cerita";
import Umpanbali from "@/components/HOME/Umpanbali";
export default function Home() {
  return (
    <main>
      <Hero />
      <Kartu />
      <Isu />
      <Pertolongan />
      <Cerita />
      <Umpanbali />
    </main>
  );
}
