import "./About.css";
import Tilt from "react-parallax-tilt";
import directorImage from "../../assets/images/hakim-bhuiyan.jpg";
import { Helmet } from "react-helmet";
import DivTitle from "../../components/shared/divTitle/DivTitle";
import WelcomeAnim from "../../components/shared/animations/WelcomeAnim";
import WhatWeDoAnim from "../../components/shared/animations/WhatWeDoAnim";
import EvolutionAnim from "../../components/shared/animations/EvolutionAnim";
import ActAnim from "../../components/shared/animations/ActAnim";
import MissionAnim from "../../components/shared/animations/MissionAnim";
import StrategyAnim from "../../components/shared/animations/StrategyAnim";
import ManagementAnim from "../../components/shared/animations/ManagementAnim";
import Container from "../../components/shared/Container";

const About = () => {
  return (
    <Container>
      <Helmet>
        <title>D&H Fashions Ltd. | About</title>
      </Helmet>
        <div>
          {DivTitle("Welcome to D&H Fashions", "Embracing New Beginnings")}
          <div className="flex flex-col-reverse lg:flex-row gap-4 justify-center items-center">
            <div className="basis-1/2 text-black space-y-2">
              <p>
                As D&H-A true clothing company, we want to help to shape a
                successful future: through partnership with our suppliers,
                customers, intelligent solutions, reliability, trust and
                cooperation.
              </p>
              <p>
                The world is facing enormous challenges: population growth,
                increasing urbanizations, ever- scarcer resources, severe
                recession, and increasing environmental stress. The clothing
                industry can and must help to master these tasks. As a clothing
                company D&H is committed to play a key role wherever we operate.
              </p>
              <p>
                Both local and global competition is getting stronger in terms
                of speed and performance - for us and for our suppliers,
                customers. Cost efficiency without sacrificing quality, speed
                and innovations are what it takes to be successful in the
                market.
              </p>
              <p>
                To meet these demands, we need a distinctive identity, a clearly
                defined orientation, and binding principles to follow in our
                everyday working lives.
              </p>
              <p>
                Who we are, what we do, how do we act and where are we heading?
                In the following section, we share the answers to these
                questions with our employees, our business partners and all
                interested parties.
              </p>
            </div>
            <div className="basis-1/2">
              <WelcomeAnim />
            </div>
          </div>
        </div>
        <div>
          {DivTitle("What we do", "Creating Impact through Purposeful Actions")}
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center py-0">
            <div className="basis-1/2">
              <WhatWeDoAnim />
            </div>
            <div className="basis-1/2 text-black space-y-2">
              <p>
                We do clothing import, export and wholesale business. A basic
                requirement for profitable growth of our business is to earn a
                premium on our cost of capital. It's what keeps us attractive to
                investors, and in turn open up opportunities to reinforce our
                leadership position.
              </p>
              <p>
                We want to understand our customers' as well as we understand
                our own: Only then, can we help our customers to be win. And we
                must recognize what our customers need tomorrow- in order to
                develop innovative products and intelligent solutions in
                partnership with them to increase their comfort.
              </p>
              <p>
                To achieve that, we need to form the best team in industry:
                committed and qualified employees, who together make D&H's
                success. By combining economic success with environmental
                protection and social responsibility, we ensure sustainable
                development. That is our contribution to a better future for us
                and coming generations.
              </p>
            </div>
          </div>
        </div>
        <div>
          {DivTitle("Where we are", "Mapping Our Journey")}
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center py-0">
            <div className="basis-1/2 text-black space-y-2">
              <p>
                Two energetic, self-motivated young professionals established a
                clothing company in UK named D&H Fashions Ltd.
                (www.dnhfashions.com) in 2010 specializing in import, export and
                wholesale catering UK and European Market.
              </p>
              <p>
                One of the principal partners, Md. Abdul Hakim Bhuiyan a Cost &
                Management Accountant who held senior finance roles with BASF
                Bangladesh Ltd., (a sister concern of BASF AG Germany) has been
                involved in Supply Chain and Commercial Operations since 1988.
                He decided to start a business.
              </p>
              <p>
                Mr. Bhuiyan, always felt there are scope for clothing business
                from Bangladesh, the 2 nd largest exporter in the world.
              </p>
            </div>
            <div className="basis-1/2">
              <EvolutionAnim />
            </div>
          </div>
        </div>
        <div>
          {DivTitle("Who we are", "Defining Identity and Values")}
          <div className="lg:flex justify-between gap-4 md:gap-8 space-y-2">
            <div className="basis-1/2">
              <ul className="list-disc pl-4 lg:pl-8">
                <li>
                  We, the D&H Fashions Ltd, is a UK based importer, exporter,
                  wholesaler and buying agent of Ready Made Garments (Cloths)
                  established in the year 2010. Our product ranges from kids to
                  men and women of all ages. Types includes shirts, trousers,
                  sweaters, jackets, t-shirts, polo shirts, leggings. Fabrics
                  are mostly cotton but poly-cotton and synthetic fibers are
                  also used.
                </li>
                <li>Our journey started from 2010.</li>
                <li>
                  Our employees are the key to success. Their passion,
                  pioneering spirit and professionalism have helped us to
                  expand.
                </li>
                <li>
                  Each individual employee in every functional area and in every
                  position helps to write our success story. We work together as
                  a team to shape a successful future.
                </li>
              </ul>
            </div>
            <div>
              <div>
                <p className="font-bold">In brief:</p>
                <ol className="list-decimal ml-12">
                  <li>
                    Name of the Company:{" "}
                    <span className="font-bold">D&H Fashions Ltd</span>
                  </li>
                  <li>
                    Address of this company : 36 Fowler Road, Hainault Business
                    Park, Ilford, IG6 3UT
                  </li>
                  <li>Head office : As above</li>
                  <li>
                    Legal Status : A private company limited by shares
                    Registered with companies house, United Kingdom.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-6 justify-between items-center my-8 md:my-12">
            <div className="basis-1/2 text-black">
              <div>
                <h2 className="text-xl font-bold">
                  Md. Abdul Hakim Bhuiyan, M. Com, MBA, FCMA, MCFC, BSCM
                </h2>
                <p className="text-lg font-semibold italic text-gray-700 mb-4">
                  Director
                </p>
                <p>
                  Mr. Bhuiyan is a highly successful personality all the way his
                  career. He is educated from both home and abroad having double
                  post-graduation (M.Com & MBA) degrees in finance & MBA, Dhaka
                  University (IBA). He is a Fellow Cost & Management Accountant
                  (FCMA). His foreign education includes CPIM from Accenture,
                  USA, CFC from USA and various training from abroad in Finance,
                  Accounts and Supply Chain area. A widely traveled man covering
                  Far-East and Europe having 20 years of service experience in
                  the field of finance & accounts in private, public and
                  multinational company.
                </p>
                <p>
                  Mr. Bhuiyan had acted as a lecturer, question setter and paper
                  examiner of ICMAB, and many other universities in Bangladesh.
                  Also wrote several articles on several topics published in
                  different professional journals including ICMAB Journal, Dhaka
                  University Studies-C on Budget, strategic management,
                  materials management etc. Also wrote a lesson notes on
                  International Business, published by ICMAB. Previously he
                  wrote a book on Production Technology for the student of
                  ICMAB.
                </p>
              </div>
            </div>
            <div>
              <Tilt>
                <img
                  className="director-image w-[350px] rounded-lg h-[400px] object-cover object-center"
                  src={directorImage}
                  alt="director of d&h hakim bhuiyan"
                />
              </Tilt>
            </div>
          </div>
        </div>
        <div>
          {DivTitle("how we act", "Efficiency and Effectiveness")}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            <div className="basis-1/2">
              <ActAnim />
            </div>
            <div className="basis-1/2 text-black space-y-3">
              <p>
                Our D&H brand expresses what our customers, shareholders,
                society and other partners can expect from us. We symbolize this
                with our trade logo: D&H stands for our sincerity, dedication,
                tradition and strengths.
              </p>
              <p>
                We invest our expertise and all our passion in keeping that
                promise. Thereby, our actions are guided by a binding value
                system. Our values and Principles form the basis for D&H’s
                corporate actions and set standards for each individual
                employee. Our leadership compass guides and inform D&H managers
                in their interactions with their teams. To this, all our
                managers clearly express their commitment.
              </p>
              <p>
                We lead the way in a professional manner, passionately,
                innovatively according to our values and principles.
              </p>
            </div>
          </div>
          <div className="lg:flex gap-4 md:gap-8 space-y-2">
            <div className="basis-1/2 my-8 lg:my-0">
              <h4 className="md:text-xl font-semibold text-gray-800 mb-2">
                Our values and Principles
              </h4>
              <ul className="list-disc pl-3 lg:pl-5 space-y-2">
                <li>Sustainable profitable performance</li>
                <li>Innovation for the comfort of our customers</li>
                <li>Safety, health and environmental Responsibility</li>
                <li>Personal and professional competence</li>
                <li>Mutual respect and Open dialogue</li>
                <li>Integrity</li>
              </ul>
            </div>
            <div className="my-8 lg:my-0">
              <h4 className="md:text-xl font-semibold text-gray-800 mb-2">
                Our leadership compass
              </h4>
              <ul className="list-disc pl-3 lg:pl-5 space-y-2">
                <li>
                  Providing for clarity and demonstrate a sense of reality
                </li>
                <li>Promoting and demonstrating enthusiasm and inspiration</li>
                <li>Being a role model for performance and speed</li>
                <li>Demonstrating strategic and operational leadership</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {DivTitle("mission", "Guiding Purpose and Vision")}
          <div className="flex flex-col-reverse lg:flex-row gap-4 justify-center items-center">
            <div className="basis-1/2 text-black space-y-2">
              <p>
                To run a clothing company in a socially responsible manner
                exploring new and innovative scope and ideas. Also to create,
                earn, grow and remain with a sustainable development and to
                broaden the scope over time by developing, enhancing and
                professionally manage business as an alternative form of
                environment friendly, economic and convenient clothing for mass
                people and discharge social responsibilities.
              </p>
            </div>
            <div className="basis-1/2">
              <MissionAnim />
            </div>
          </div>
        </div>
        <div>
          {DivTitle("strategy", "Unleashing Competitive Advantage")}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-center">
            <StrategyAnim />
            <p className="basis-1/2 text-black space-y-2">
              The main strategies of the company is to bring quality cloth,
              create high value of the company, utilize innovative ideas of
              management, ensure participatory management style, maintain high
              ethical standard, pay more importance on the customers/clients,
              employees & their creativity and mankind.
            </p>
          </div>
        </div>
        <div>
          {DivTitle(
            "Management",
            "Best Practices for an Effective Organization"
          )}
          <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-8 lg:gap-12 justify-between items-center">
            <p className="basis-1/2 text-black space-y-2">
              Success of any undertaking is highly dependent on its efficient
              management. Efficient management is also dependent on a very good
              leader. Without having professionally competent leader and/or
              management system, it is proved that no organization can sustain
              over time. The company is organized its resources keeping in mind
              the necessity of its efficient management and diversified
              functional areas like, management, marketing, financial management
              and technical management etc. The overall management of the
              company is vested on Board of Directors consisting of a group of
              young, energetic, self-motivated, highly educated/experienced
              professionals with high ambition to rise/grow. Operational
              management is vested to appointed people with vast experience in
              clothing, worked in national, multinational and government
              organizations and will appoint people as and when required. Proper
              training with appropriate financial package has been provided with
              a view to create an environment for participatory management to
              explore and use innovative ideas.
            </p>
            <div className="basis-1/2">
              <ManagementAnim />
            </div>
          </div>
        </div>
    </Container>
  );
};

export default About;
