import From from '@/component/from'
import Header from '@/component/header'
const components = [From, Header]

const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install
