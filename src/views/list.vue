<template>
  <div>
    list页面<br>
    <router-link to="index">to index</router-link><br>
    <div v-if="searchParam.cid" v-for="(item, key) in searchParam">
    	{{key | changeText}}: <span v-html="changeCnm(item)"></span>
    </div>
    <div v-if="selectedAirport.cd">
      已选择的机场为: {{selectedAirport.name}}
    </div>
    <Airport v-on:airportSelected="evtSelectedAirport" :stncd=" stncd || searchParam.stncd"></Airport>
  </div>
</template>

<script>
import {changeColor} from '../filters/index'
import Airport from '../component/airport'
export default {
	props: ['searchParam'],
	components: {Airport},
  data () {
    return {
      selectedAirport: {},
      stncd: ""
    }
  },
  methods: {
  	changeCnm(value) {
  		return changeColor(value);
  	},
    evtSelectedAirport(item){
      this.selectedAirport = item;
      this.stncd = item.cd;
    }
  }

}
</script>

