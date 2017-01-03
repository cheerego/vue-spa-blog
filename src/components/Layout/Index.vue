<template>
  <div  class="container">
    <div id="particlesJS"></div>
    <Card></Card>
  </div>
</template>
<script>
  import Card from '../Partials/Card.vue'
  export default{
    name: "",
    data(){
      return {
      }
    },
    mounted(){
      particlesJS('particlesJS',{
        "particles": {
          "number": {
            "value": 40,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 10,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 80,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 300,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 12,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 800,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 800,
              "size": 80,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      } );
    },
    methods: {
    },
    components: {
      Card
    }
  };
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  #particlesJS{
    width: 100%;
    top:0;
    left:0;
    position: fixed;
    height: 100%;
  }
  .container{
    overflow-y: hidden;
    height: 100%;
    width: 100%;
    background-color:#52697f;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items:center;
  }
</style>
