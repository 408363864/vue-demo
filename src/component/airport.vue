<template>
  <div>
    airport组件
    <div v-if="bizLocs.length > 0"  class="airport-wrap">
    	<p v-for="item in bizLocs" @click="evtClick(item)" >
    		<span :style="item.cd == stncd ? {color: 'red'} : ''">{{item.name}}</span>
    	</p>
    </div>
  </div>
</template>

<script type="text/javascript">
import {querybizlocations} from '../model/model'
export default {
	props: ['stncd'],
  data () {
    return {
      bizLocs: []
    }
  },
  created() {
  	querybizlocations({pttype: 33}).then((res = {}) => {
      console.log(res)
  		this.bizLocs = res.bizLocs || [];
  	}).catch((err) => {
  		console.log(err)
  	});
  },
  methods: {
  	evtClick(item){
  		this.$emit('airportSelected', item);
  	}
  }
}
</script>

<style>
	.airport-wrap{
		height: 300px;
		overflow-y: auto;
	}
</style>
