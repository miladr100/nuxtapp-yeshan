import './styles.scss'

export const YToolbar = {
  name: 'YToolbar',
  data: () => ({
    title: 'Yeshan',
    buttonMenus: ['Title1', 'Title2', 'Title3'],
  }),
  render(h) {
    return (
      <div>
        <v-toolbar outlined rounded class="y-toolbar">
          <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>

          <v-toolbar-title>{this.title}</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items class="hidden-sm-and-down">
            {this.buttonMenus.map((item) => (
              <v-btn text>{item}</v-btn>
            ))}
          </v-toolbar-items>

          <v-btn icon>
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </v-toolbar>
      </div>
    )
  },
}

export default YToolbar
