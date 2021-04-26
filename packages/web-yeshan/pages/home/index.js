import { YToolbar, YFooter } from '../../ui-components'

import imgHome from '../../static/home_image.jpg'

import './styles.scss'

export default {
  name: 'Home',
  data: () => ({}),
  mounted() {},
  methods: {},
  render(h) {
    return (
      <v-app>
        <YToolbar pageTitle="Yeshan" />
        <v-card>
          <v-img src={imgHome} height="450" class="grey darken-4">
            <p class="carrousel__description-top">Invista no seu negócio</p>
            <h2 class="carrousel__description-bottom">
              Com os profissionais que estão mudando o mundo
            </h2>
            <h1 class="text-center carrousel__title">Yeshan</h1>

            <v-btn
              class="carrousel__button-solutions"
              depressed
              x-large
              color="error"
            >
              Nossas Soluções
            </v-btn>

            <v-btn class="carrousel__button-works" text x-large color="white">
              -> Como funciona?
            </v-btn>
          </v-img>
        </v-card>
        <YFooter />
      </v-app>
    )
  },
}
