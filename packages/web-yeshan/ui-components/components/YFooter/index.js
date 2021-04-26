import './styles.scss'

export const YFooter = {
  name: 'YFooter',
  functional: true,
  props: {
    icons: {
      type: Array,
      default: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    },
  },
  render(h, { props }) {
    const { icons } = props

    const getFullYear = () => {
      return new Date().getFullYear()
    }

    return (
      <v-footer dark padless>
        <v-card flat tile class="red lighten-2 white--text text-center">
          <v-card-text>
            {icons.map((icon) => (
              <v-btn
                v-for="icon in icons"
                key={icon}
                class="mx-4 white--text"
                icon
              >
                <v-icon size="24px">{icon}</v-icon>
              </v-btn>
            ))}
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
            Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
            accumsan id ultrices nunc. Sed at orci sed massa consectetur
            dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
            Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {getFullYear()} — <strong>Yeshan</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    )
  },
}

export default YFooter
