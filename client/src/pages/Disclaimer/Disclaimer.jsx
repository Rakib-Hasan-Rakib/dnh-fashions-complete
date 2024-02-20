import { Helmet } from "react-helmet";
import SectionTitle from "../../components/shared/sectionTitle/SectionTitle";
import Container from "../../components/shared/Container";

const Disclaimer = () => {
  return (
    <Container>
      <Helmet>
        <title>D&H Fashions Ltd. | Disclaimer</title>
      </Helmet>
        {SectionTitle("Disclaimer & policy", "Terms & Conditions")}
        <div className="space-y-2 mb-6 md:mb-10">
          <p className="basis-1/2">
            <span className="disclaimer-header">1. Introduction</span> : This
            disclaimer governs use of our website by you and by using our
            website, you accept this disclaimer in full else, you must not use
            our website.
          </p>
          <p>
            <span className="disclaimer-header">2. Credit</span>: This document
            was created by D&H Fashions Ltd.
          </p>
          <p className="basis-1/2">
            <span className="disclaimer-header">
              3. Intellectual property rights
            </span>
            : We own the intellectual property rights in the website and
            material on the website.
          </p>
          <div className="basis-1/2">
            <p>
              <span className="disclaimer-header">
                4. Licence to use website
              </span>
              : You may visit, view, download and print pages from the website
              for your own personal use, subject to the restrictions below
              except as stated in the question no. 7 under FAQ; You must not:
            </p>
            <ol className="list-decimal ml-4">
              <li>
                re-produce or republish material from this website to another
                website;
              </li>
              <li>
                give, sell, rent (text/information) material from the website;
              </li>
              <li>
                re-produce, copy, duplicate any material on our website for a
                commercial purpose;
              </li>
              <li>edit or otherwise modify any material on the website;</li>
              <li>
                sale or re-sale goods with label on it that were originally made
                for chainstores or on- line retailers are supplied under strict
                condition that all labels and tags are removed before resale and
                that no reference to the original storegroup is made when
                offered for sale. This is the responsibility of the purchaser of
                goods whose name or company appears on the sales invoice ;
              </li>
            </ol>
          </div>
          <p>
            <span className="disclaimer-header">
              5. Limitation and exclusion of warranties and liability
            </span>{" "}
            : Whilst we endeavour to ensure that the information on this website
            is correct, we do not warrant its completeness or accuracy; nor do
            we commit to ensuring that the website remains available or that the
            material on the website is kept up to date. To the maximum extent
            permitted by applicable law, we exclude all representations,
            warranties and conditions relating to this website and the use of
            this website (including, without limitation, any warranties implied
            by law in respect of satisfactory quality, fitness for purpose
            and/or the use of reasonable care and skill). Nothing in this
            disclaimer will:
          </p>
          <ol className="list-decimal ml-4">
            <li>
              limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li>
              limit any of our or your liabilities in any way that is not
              permitted under applicable law;
            </li>
            <li>
              exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ol>
          <p>
            <span className="disclaimer-header">6. Variation</span>: From time
            to time, we may revise this disclaimer with effect from the date of
            the publication of the revised disclaimer on our website.
          </p>
          <p>
            <span className="disclaimer-header">7. Entire agreement</span>
            Subject to the third paragraph of Section [5], this disclaimer,
            together with our terms and conditions constitutes the entire
            agreement between you and us in relation to your use of our website
            and supersedes all previous agreements in respect of your use of our
            website.
          </p>
          <p>
            <span className="disclaimer-header">8.Law and jurisdiction </span>:
            This disclaimer will be governed by and construed in accordance with
            English law, and jurisdiction of the courts of England and Wales.
          </p>
          <p>
            <span className="disclaimer-header">
              9. Registration & authorisations
            </span>
            : Our domain www.dnhfashions.com is registered in our name. Our VAT
            number is GB 993967734
          </p>
          <p>
            <span>Our details</span>: The full name of our company is D&H
            Fashions Ltd; We are registered in England and Wales under
            registration number 07288005; Our registered address is 36 Fowler
            Road, Hainault Business Park, Ilford, IG6 3UT, UK. You can contact
            us by email to sales@dnhfashions.com.
          </p>
      </div>
    </Container>
  );
};

export default Disclaimer;
