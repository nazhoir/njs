import { SectionInstitutions } from "./section-institutions";
import { SectionOne } from "./section-one";
import { SectionThree } from "./section-three";
import { SectionTwou } from "./section-twou";

export default function Home() {
  return (
    <main className="container mx-auto">
      <SectionOne />
      <SectionInstitutions />
      <SectionTwou />
      <SectionThree />
    </main>
  );
}
