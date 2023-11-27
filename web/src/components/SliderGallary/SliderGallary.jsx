import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import barracks1 from '../../../public/barracks-carlow_0670.jpg'
import barracks2 from '../../../public/barracks-carlow_0676.jpg'
import barracks3 from '../../../public/barracks-carlow_0685.jpg'
import barracks4 from '../../../public/barracks-carlow_0688.jpg'
import barracks5 from '../../../public/barracks-carlow_0689.jpg'
import barracks6 from '../../../public/barracks-carlow_0690.jpg'
import barracks7 from '../../../public/barracks-carlow_0693.jpg'
import barracks8 from '../../../public/barracks-carlow_0696.jpg'
import barracks9 from '../../../public/barracks-carlow_0699.jpg'
import barracks10 from '../../../public/barracks-carlow_0701.jpg'

const content = [{
  image: barracks1,
  title: "Main Bar",
  description:"Carlow"
},
{
  image: barracks2,
  title: "Main Bar",
  description:"Carlow"
},{
  image: barracks3,
  title: "Main Bar",
  description:"Carlow"
},{
  image: barracks4,
  title: "Main Bar",
  description:"Carlow"
},{
  image: barracks5,
  title: "Main Bar",
  description:"Carlow"
},{
  image: barracks6,
  title: "Main Bar",
  description:"Carlow"
},{
  image: barracks7,
  title: "Main Bar",
  description:"Carlow"
},{
  image: barracks8,
  title: "Main Bar",
  description:"Carlow"
},{
  image: barracks9,
  title: "Main Bar",
  description:"Carlow"
},{
  image: barracks10,
  title: "Main Bar",
  description:"Carlow"
}]
const SliderGallary = () => {
  return (
    <div className="py-12">
      <Slider autoplay={3000}>
	{content.map((item, index) => (
		<div
			key={index}
      style={{ background: `url('${item.image}') no-repeat center center`,width:'100%',height:"100%" }}
      className="object-cover"
		>
			<div className="flex w-full flex-col items-center">
				<h1>{item.title}</h1>

			</div>
		</div>
	))}
</Slider>
    </div>
  )
}

export default SliderGallary
