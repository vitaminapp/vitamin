import From from '@/component/from'
import Header from '@/component/header'
import Table from '@/component/table'

const components = [From, Header, Table]

const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install
