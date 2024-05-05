import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/home/footer";
import { Services } from "@/components/home/services";
import { Submenu } from "@/components/home/submenu";
import { getDataHome, getSubMenu } from '@/utils/actions/get-data'
import { HomeProps } from "@/utils/home.type";
import { SubMenuProps } from "@/utils/menu.type";
import { Phone } from 'lucide-react'

export default async function Home() {
  const { object }: HomeProps = await getDataHome()
  const { objects }: SubMenuProps = await getSubMenu()
  // console.log(JSON.stringify(data, null, 2))    

  return (
    <main>
      {objects.length > 0 && <Submenu objects={objects} />}

      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#fff" />}
      />

      <Container>
        <Services
          about={object.metadata.about}
          services={object.metadata.services}
        />
        <Footer
          contact={object.metadata.contact}
          cta_button={object.metadata.cta_button}
        />
      </Container>
    </main>
  );
}
