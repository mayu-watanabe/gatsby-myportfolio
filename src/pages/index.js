import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SocialLink from "../components/socialLink"
import * as Style from "../styles/style.module.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <section className={Style.index}>
      <div className={Style.index__container}>
        <div className={Style.index__title}>urania.</div>
      </div>
    </section>
    
    <section className={Style.about}>
      <div className={Style.about__container}>
        <div
          className={Style.about__name}
          data-sal="fade"
          data-sal-duration="2000"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-threshold="1"
        >
          <p className={Style.about__name__name}>MAYU WATANABE</p>
          <p className={Style.about__name__ocupation}>web developer</p>
        </div>
        <div
          className={Style.about__text}
          data-sal="fade"
          data-sal-duration="2000"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-threshold="1"
        >
          <p className={Style.about__text__title}>等身大のものづくりをめざして</p>
          <p>めまぐるしいテクノロジーの発展の中で、<br/>本当に必要としている人のもとへ適切なサービスは届いているのか。<br/>不特定多数の誰かではなく、目の前の誰かに必要とされるものを、<br/>共に作り、共に成長していきたいと思う。</p>
        </div>
        <div
          className={Style.about__link}
          data-sal="fade"
          data-sal-duration="2000"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-threshold="1"
        >
          <SocialLink />
        </div>
      </div>
    </section>

    <section className={Style.service}>
      <div className={Style.service__container}>
      </div>
      <div className={Style.service__container__mobile}>
        <div
          className={Style.service__title}
          data-sal="fade"
          data-sal-duration="2000"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-threshold="1"
        >
            service.
        </div>
        <div className={Style.service__element}>
          <div
            className={Style.service__element__title__design}
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-threshold="1"
          >
            <p>design</p>
          </div>
          <p
            className={Style.service__element__text__design}
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-threshold="1"
          >
            使いやすさや、見やすさを意識したレスポンシブデザインの作成・コーディング。ミニマムなデザインが得意です。ちょっとしたライティング経験もありますので、差し込む文章の作成も可能です。お気軽にご相談ください。
          </p>
        </div>
        <div className={Style.service__element}>
          <div
            className={Style.service__element__title__backend}
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-threshold="0.5"
          >
            <p>backend</p>
          </div>
          <p
            className={Style.service__element__text__backend}
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-threshold="0.5"
          >
            PHPをメインに大規模なECサイトの開発に携わり、決済や物流に関わる機能開発、DB設計、API連携などの開発を行ってきました。これまでの経験を生かし、今後はさらに技術の幅を広げていきたいと思っております。
          </p>
        </div>
      </div>
    </section>

    <section className={Style.experience}>
      <div className={Style.experience__container}>
        <span
          className={Style.experience__title}
          data-sal="fade"
          data-sal-duration="2000"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-threshold="1"
        >
          skill & experience.
        </span>
        <div
          className={Style.experience__career}
          data-sal="fade"
          data-sal-duration="2000"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-threshold="1"
        >
          <div className={Style.experience__career__year}>
            <li>2019.3</li>
            <li>2019.4</li>
            <li>current</li>
          </div>
          <span className={Style.experience__career__line}></span>
          <div className={Style.experience__career__content}>
            <li>Bachelor of Arts in Economics</li>
            <li>started working as Web Engineer</li>
          </div>
        </div>
        <div className={Style.experience__skills}>
          <div
            className={Style.experience__skills__element}
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-threshold="1"
          >
            <p className={Style.experience__skills__title}>frontend</p>
            <div className={Style.experience__skills__line}></div>
            <p className={Style.experience__skills__text}>HTML, CSS/SCSS, Javascript</p>
            <p className={Style.experience__skills__subtitle}>FW/others</p>
            <p className={Style.experience__skills__text}>Vue.js, Nuxt.js, knockout.js, jQuery, bootstrap</p>
          </div>
          <div
            className={Style.experience__skills__element}
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-threshold="1"
          >
            <p className={Style.experience__skills__title}>backend</p>
            <div className={Style.experience__skills__line}></div>
            <p className={Style.experience__skills__text}>PHP</p>
            <p className={Style.experience__skills__subtitle}>FW/others</p>
            <p className={Style.experience__skills__text}>Laravel, CakePHP, Symfony, MySQL, Redis,<br/>Docker, Vagrant, Apache</p>
          </div>
        </div>

        {/* SP START */}
        <div className={Style.experience__career__mobile}>
          <div
            className={Style.experience__title__mobile}
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-threshold="1"
          >
            skill.
          </div>
          <div className={Style.experience__skills__mobile}>
            <div
              className={Style.experience__skills__element}
              data-sal="fade"
              data-sal-duration="2000"
              data-sal-delay="100"
              data-sal-easing="ease"
              data-sal-threshold="1"
            >
            <p className={Style.experience__skills__title}>frontend</p>
            <div className={Style.experience__skills__line}></div>
            <p className={Style.experience__skills__text}>HTML, CSS/SCSS, Javascript</p>
            <p className={Style.experience__skills__subtitle}>FW/others</p>
            <p className={Style.experience__skills__text}>Vue.js, Nuxt.js, knockout.js, jQuery, bootstrap</p>
          </div>
            <div
              className={Style.experience__skills__element}
              data-sal="fade"
              data-sal-duration="2000"
              data-sal-delay="100"
              data-sal-easing="ease"
              data-sal-threshold="1"
            >
            <p className={Style.experience__skills__title}>backend</p>
            <div className={Style.experience__skills__line}></div>
            <p className={Style.experience__skills__text}>PHP</p>
            <p className={Style.experience__skills__subtitle}>FW/others</p>
            <p className={Style.experience__skills__text}>Laravel, CakePHP, Symfony, MySQL, Redis,<br/>Docker, Vagrant, Apache</p>
          </div>
          </div>
          <div
            className={Style.experience__title__mobile}
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-threshold="1"
          >
            experience.
          </div>
          <div
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-threshold="1"
          >
            <li>
              <span className={Style.experience__career__mobile__year}>2019.3</span>
              <span className={Style.experience__career__mobile__content}>Bachelor of Arts in Economics</span>
            </li>
            <li>
              <span className={Style.experience__career__mobile__year}>2019.4</span>
              <span className={Style.experience__career__mobile__content}>started working as Web Engineer</span>
            </li>
            <li>
              <span className={Style.experience__career__mobile__year}>current</span>
            </li>
          </div>
        </div>
        {/* SP END */}
      </div>
    </section>

    <section className={Style.projects}>
      <div className={Style.projects__container}>
        <div
          className={Style.projects__title}
          data-sal="fade"
          data-sal-duration="2000"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-threshold="1"
        >
          projects.
        </div>
        <div className="images">

        </div>
      </div>
    </section>
    
    <section className={Style.contact}>
      <div className={Style.contact__container}>
        <div
          className={Style.contact__title}
          data-sal="fade"
          data-sal-duration="2000"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-threshold="1"
        >
          contact.
          <p className={Style.contact__mail}>mayuwatanabe.work@gmail.com</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
