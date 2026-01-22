import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './LegalPage.module.css';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Terms of Use
        </motion.h1>
      </div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.container}>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you,
            whether personally or on behalf of an entity ("you") and Loungebird ("we," "us" or "our"),
            concerning your access to and use of our mobile application (the "Application"). You agree
            that by accessing the Application, you have read, understood, and agree to be bound by all
            of these Terms and Conditions Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND
            CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE APPLICATION AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
          </p>

          <p>
            Supplemental terms and conditions or documents that may be posted on the Application from
            time to time are hereby expressly incorporated herein by reference. We reserve the right,
            in our sole discretion, to make changes or modifications to these Terms and Conditions at
            any time and for any reason. We will alert you about any changes by updating the "Last
            updated" date of these Terms and Conditions and you waive any right to receive specific
            notice of each such change. It is your responsibility to periodically review these Terms
            and Conditions to stay informed of updates. You will be subject to, and will be deemed to
            have been made aware of and to have accepted, the changes in any revised Terms and
            Conditions by your continued use of the Application after the date such revised Terms are
            posted.
          </p>

          <p>
            The information provided on the Application is not intended for distribution to or use by
            any person or entity in any jurisdiction or country where such distribution or use would
            be contrary to law or regulation or which would subject us to any registration requirement
            within such jurisdiction or country. Accordingly, those persons who choose to access the
            Application from other locations do so on their own initiative and are solely responsible
            for compliance with local laws, if and to the extent local laws are applicable.
          </p>

          <h2>Affiliation Disclaimer</h2>
          <p>
            Loungebird is not affiliated, associated, endorsed by, or in any way officially connected
            with British Airways, any of its subsidiaries or its affiliates. All product and company
            names are the registered trademarks of their original owners. The use of any trade name or
            trademark is for identification and reference purposes only and does not imply any
            association with the trademark holder of their product brand.
          </p>

          <h2>New Features and Modifications to Terms of Service</h2>
          <p>
            We may from time to time introduce new features to the service or modify or delete
            existing features. We will post any new or modified features when they become available,
            as well as any new or modified terms of this Agreement. Any new or modified terms will
            become effective for your use of the service upon the earlier of your use of a new or
            modified feature to which the new or modified term relates.
          </p>

          <h2>Corrections</h2>
          <p>
            There may be information on the Application that contains typographical errors,
            inaccuracies, or omissions that may relate to the Application, including descriptions,
            pricing, availability, and various other information. We reserve the right to correct any
            errors, inaccuracies, or omissions and to change or update the information on the
            Application at any time, without prior notice.
          </p>

          <h2>Term and Termination</h2>
          <p>
            These Terms of Use shall remain in full force and effect while you use the Application.
            WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN
            OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE
            (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON,
            INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT
            CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE
            YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR
            INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
          </p>
          <p>
            If we terminate or suspend your account for any reason, you are prohibited from
            registering and creating a new account under your name, a fake or borrowed name, or the
            name of any third party, even if you may be acting on behalf of the third party. In
            addition to terminating or suspending your account, we reserve the right to take
            appropriate legal action, including without limitation pursuing civil, criminal, and
            injunctive redress.
          </p>

          <h2>Disclaimer</h2>
          <p>
            THE APPLICATION IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE
            OF THE APPLICATION SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY
            LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE APPLICATION
            AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO
            WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE APPLICATION'S
            CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THIS APPLICATION AND WE WILL ASSUME NO
            LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND
            MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING
            FROM YOUR ACCESS TO AND USE OF THE APPLICATION, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF
            OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION
            STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
            APPLICATION, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO
            OR THROUGH THE APPLICATION BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY
            CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE
            USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE APPLICATION.
            WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE
            ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE APPLICATION, ANY HYPERLINKED WEBSITE,
            OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE
            WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN
            YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A
            PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST
            JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
          </p>

          <h2>Miscellaneous</h2>
          <p>
            These Terms of Use and any policies or operating rules posted by us on the Application
            constitute the entire agreement and understanding between you and us. Our failure to
            exercise or enforce any right or provision of these Terms of Use shall not operate as a
            waiver of such right or provision. These Terms of Use operate to the fullest extent
            permissible by law. We may assign any or all of our rights and obligations to others at
            any time. We shall not be responsible or liable for any loss, damage, delay, or failure to
            act caused by any cause beyond our reasonable control. If any provision or part of a
            provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that
            provision or part of the provision is deemed severable from these Terms of Use and does
            not affect the validity and enforceability of any remaining provisions. There is no joint
            venture, partnership, employment or agency relationship created between you and us as a
            result of these Terms of Use or use of the Site. You agree that these Terms of Use will
            not be construed against us by virtue of having drafted them. You hereby waive any and all
            defenses you may have based on the electronic form of these Terms of Use and the lack of
            signing by the parties hereto to execute these Terms of Use.
          </p>

          <h2>Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Application or to receive further
            information regarding use of the Application, please contact us at:{' '}
            <a href="mailto:info@loungebird.app">info@loungebird.app</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
