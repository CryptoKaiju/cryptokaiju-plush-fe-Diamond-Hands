import AboutIcon1 from "../assets/png/About Icon 1.png"
import AboutIcon2 from "../assets/png/About Icon 2.png"
import AboutIcon3 from "../assets/png/About Icon 3.png"
import AboutIcon4 from "../assets/png/About Icon 4.png"
import AboutIcon5 from "../assets/png/About Icon 5.png"
import AboutIcon6 from "../assets/png/About Icon 6.png"

const About: React.FC = () => {
  return (
    <div id="about" className="grid justify-items-center items-center gap-6 md:gap-8 lg:gap-10">
      <div className="font-extrabold text-black uppercase text-[2rem] md:text-[2.5rem] lg:text-[3rem] mt-24">150 Spooky New Kaiju!!</div>
      <div className="grid w-4/5 lg:w-3/5 text-center text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] gap-6 md:gap-8 lg:gap-10">
        <p>Seriously limited and only available until 2nd November! To purchase, simply mint and wait for your transaction to confirm, you'll then be redirected to a form to enter your shipping information.</p>

      </div>
      <div className="grid grid-cols-3 xl:flex gap-6 md:gap-10 lg:gap-16 m-10 justify-items-center">
        <img src={AboutIcon1} alt="About Icon 1" width="168px" />
        <img src={AboutIcon4} alt="About Icon 4" width="168px" />
        <img src={AboutIcon2} alt="About Icon 2" width="168px" />
        <img src={AboutIcon5} alt="About Icon 5" width="168px" />
        <img src={AboutIcon3} alt="About Icon 3" width="168px" />
        <img src={AboutIcon6} alt="About Icon 6" width="168px" />
      </div>
    </div>
  )
}

export default About