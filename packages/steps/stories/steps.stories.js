import Steps from '../'
import Button from '../../button'

export default {
  title: 'LgSteps',
  component: Steps
}

export const Step = () => ({
  components: { Steps, Button },
  template: `<div>
    <steps :count="count" :active="active" />
    <button @click="next">下一步</button>
  </div>`,
  data() {
    return {
      count: 4,
      active: 0,
    };
  },
  methods: {
    next() {
      this.active++;
    },
  },
})