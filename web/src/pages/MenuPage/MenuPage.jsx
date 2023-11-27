import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AnimatedTitle from 'src/components/AnimatedTitle/AnimatedTitle'
import DrinkCard from 'src/components/DrinkCard/DrinkCard'
import MenuItem from 'src/components/MenuItem/MenuItem'
import PageTop from 'src/components/PageTop/PageTop'
import Particles from 'src/components/Particles/Particles'

import drink from '../../../public/coup.svg'
import ice from '../../../public/ice.svg'
import island from '../../../public/island.svg'
import long from '../../../public/long.svg'
import mart from '../../../public/mart.svg'
import mojito from '../../../public/mojito.svg'
import porn from '../../../public/porn.svg'
import slush from '../../../public/slush.svg'
import tart from '../../../public/tart.svg'

const MenuPage = () => {
  const food = [
    ['🍅', 340, 10],
    ['🍊', 20, 40],
    ['🍋', 60, 90],
    ['🍐', 80, 120],
    ['🍏', 100, 140],
    ['🫐', 205, 245],
    ['🍆', 260, 290],
    ['🍇', 290, 320],
  ]

  const list = {
    name: 'Sex on the beach',
    blurb: `Imagine a vibrant, sun-kissed paradise in a glass, where waves
  of tantalizing flavors collide to create the ultimate beachside
  escape. The Sex on the Beach cocktail is a tropical masterpiece
  that will transport your taste buds to a world of pure delight.`,
    ingrediants: ['alc 1', 'alc 2', 'alc 3', 'alc 4'],
  }
  return (
    <div>
      <div className="mt-12 ">
        <PageTop
          title={'Our Cocktail Menu'}
          content={
            'Check out our Cocktail menu, Keep an eye out we add new cocktails every week'
          }
        />
        <Particles className="absolute inset-0 z-10 w-screen" />
      </div>
      <div className="mb-12 grid w-screen grid-cols-1 justify-items-center gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <DrinkCard
          icon={drink}
          hueA={260}
          hueB={290}
          title={'BAHAMA MAMA'}
          ingrediantsList={[
            'Coconut Rum',
            'White Rum',
            'Pineapple Juice',
            'Orange Juice',
            'Grenadine',
          ]}
        />
        <DrinkCard
          icon={tart}
          hueA={260}
          hueB={290}
          title={`BEE'S KNEE'S`}
          ingrediantsList={[
            'Gin',
            'Passion Fruit Liquor',
            'Fresh Lime Juice',
            'Local Organic Honey',
          ]}
        />
        <DrinkCard
          icon={drink}
          hueA={260}
          hueB={290}
          title={'ZOMBIE'}
          ingrediantsList={[
            'Three Rums',
            'Fresh Lime Juice',
            'Pineapple Juice',
            'Grenadine',
          ]}
        />
        <DrinkCard
          icon={ice}
          hueA={260}
          hueB={290}
          title={'BLUE LAGOON'}
          ingrediantsList={[
            'Vodka',
            'Blue Curacao',
            'Fresh Lime Juice',
            'House Syrup',
            '7up Top',
          ]}
        />
        <DrinkCard
          icon={mart}
          hueA={260}
          hueB={290}
          title={'MARGARITA'}
          ingrediantsList={[
            'Tequila',
            'Cointreau',
            'House Syrup',
            'Fresh Lime Juice',
            'Fruit uree Top',
          ]}
        />
        <DrinkCard
          icon={porn}
          hueA={260}
          hueB={290}
          title={'PORNSTAR MARTINI'}
          ingrediantsList={[
            'Vanilla Vodka',
            'Passion Fruit Liquor',
            'Fresh Lime Juice',
            'Passion Fruit Puree',
            'Pineapple Juice',
            'Prosecco Top',
          ]}
        />
        <DrinkCard
          icon={drink}
          hueA={260}
          hueB={290}
          title={'SEX ON THE BEACH'}
          ingrediantsList={[
            'Vodka',
            'Peach Schnapps',
            'Orange Juice',
            'Cranberry Juice',
          ]}
        />
        <DrinkCard
          icon={long}
          hueA={260}
          hueB={290}
          title={'DAQUIRI'}
          ingrediantsList={[
            'White Rum',
            'Fresh Lime Juice',
            'Fruit Puree Of Choice',
          ]}
        />
        <DrinkCard
          icon={porn}
          hueA={260}
          hueB={290}
          title={'COSMOPOLITAN'}
          ingrediantsList={[
            'Vodka',
            'Orange Liquor',
            'Fresh Lime Juice',
            'Cranberry Juice',
          ]}
        />
        <DrinkCard
          icon={long}
          hueA={260}
          hueB={290}
          title={'LONG ISLAND ICE TEA'}
          ingrediantsList={[
            'Vodka',
            'Gin',
            'Tequila',
            'Rum',
            'Orange Liquor',
            'Sweet & Sour Mix',
            'Cola Top',
          ]}
        />
        <DrinkCard
          icon={mojito}
          hueA={260}
          hueB={290}
          title={'MOJITO'}
          ingrediantsList={[
            'Rum of Choice',
            'Mint',
            'Fresh Lime Juice',
            'House Syrup',
            'Soda Top',
          ]}
        />
        <DrinkCard
          icon={drink}
          hueA={260}
          hueB={290}
          title={'BARRACKS BLUE-WOO'}
          ingrediantsList={[
            'Raspberry Rum',
            'Blue Curacao',
            'Fresh Lemon Juice',
            'Cranberry Juice',
            '7up top',
          ]}
        />
        <DrinkCard
          icon={tart}
          hueA={260}
          hueB={290}
          title={'WHISKEY SOUR'}
          ingrediantsList={[
            'Slane Whiskey',
            'Fresh Lemon Juice',
            'Biters',
            'House Syrup',
            'Whites',
          ]}
        />
        <DrinkCard
          icon={slush}
          hueA={260}
          hueB={290}
          title={'APPLETINI-WEENIE'}
          ingrediantsList={['Vodka', 'Apple Slush', 'Fresh Lime Juice']}
        />
        <DrinkCard
          icon={tart}
          hueA={260}
          hueB={290}
          title={'MELON SOUR'}
          ingrediantsList={[
            'Midori',
            'Fresh Lemon Jjuice',
            'House Syrup',
            'Whites',
          ]}
        />
        <DrinkCard
          icon={slush}
          hueA={260}
          hueB={290}
          title={'NEBULA'}
          ingrediantsList={[
            'Raspberry Rum',
            'Fresh Lime Juice',
            'Blue Raspberry Slush',
          ]}
        />
        <DrinkCard
          icon={tart}
          hueA={260}
          hueB={290}
          title={'AMARETTO SOUR'}
          ingrediantsList={[
            'Disaronno',
            'Fresh Lemon Juice',
            'Bitters',
            'House Syrup',
            'Whites',
          ]}
        />
        <DrinkCard
          icon={slush}
          hueA={260}
          hueB={290}
          title={'CAPTAIN MARVEL'}
          ingrediantsList={[
            'Vodka',
            'Peach Schnapps',
            'Fresh Lemon Juice',
            'Blue Raspberry Slush',
          ]}
        />
        <DrinkCard
          icon={tart}
          hueA={260}
          hueB={290}
          title={'SOUR BARBIE'}
          ingrediantsList={[
            'Pink Gin',
            'Fresh Lemon Jjuice',
            'House Syrup',
            '7up Top',
            'Strawberry Puree',
          ]}
        />
        <DrinkCard
          icon={slush}
          hueA={260}
          hueB={290}
          title={'SLUSH DAQUIRI'}
          ingrediantsList={['5 Flavours Of Slush', 'Rum', 'Fresh Lime Juice']}
        />
        <DrinkCard
          icon={drink}
          hueA={260}
          hueB={290}
          title={'PASSIONATE ONE'}
          ingrediantsList={[
            'Mango Vodka',
            'Passion Fruit Slush',
            'Fresh Lime Juice',
          ]}
        />
      </div>

      {/* <MenuItem name={"Bahama Mama"} blurb={`Imagine a vibrant, sun-kissed paradise in a glass, where waves
  of tantalizing flavors collide to create the ultimate beachside
  escape. The Sex on the Beach cocktail is a tropical masterpiece
  that will transport your taste buds to a world of pure delight.`} ingrediants={["Coconut Rum", "White Rum", "Pineapple Juice", "Orange Juice","Grenadine"]} />
      <MenuItem name={"Bee's Knee's"} blurb={"hellow"} ingrediants={["Gin", "Passion Fruit Liquor", "Fresh Lime Juice", "Local Organic Honey"]} />
      <MenuItem name={"Zombie"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Blue Lagoon"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Margarita"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Porn Star Martini"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Sex On The Beach"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Daquiri"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Cosmopolitan"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Long Island Iced Tea"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Mojito"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Barracks Blue-Woo"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Whiskey Sour"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Melon Sour"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Amaretto Sour"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Sour Barbie"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Appletini-Weenie"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Nebula"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Captain Marvel"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Slush Daquiri"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} />
      <MenuItem name={"Passionate One"} blurb={"blurb"} ingrediants={["alc 1", "alc 2", "alc 3", "alc 4"]} /> */}
    </div>
  )
}

export default MenuPage
