export default {
  name: 'layout-default',
  render(h) {
    return (
      <div>
        <client-only>
          <Nuxt />
        </client-only>
      </div>
    )
  },
}
