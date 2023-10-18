<template lang="html">
  <div id="announcement-bar" :class="[{ 'is-hidden': isHidden }]">
    <div class="wrapper">
      <div class="container">
        <!-- Slider component -->
        <Slider :slider-items="sliderItems" :type="'text-slider'" :from="'announcement'" />
      </div>

      <button class="close" @click="isHidden = true, $emit('hide')">
        <span />
        <span />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: false,
      sliderItems: [
        {
          acf: {
            quote: 'Optional announcement bar lorem ipsum dolor sit amet 1'
          }
        },
        {
          acf: {
            quote: 'Optional announcement bar lorem ipsum dolor sit amet 2'
          }
        },
        {
          acf: {
            quote: 'Optional announcement bar lorem ipsum dolor sit amet 3'
          }
        },
        {
          acf: {
            quote: 'Optional announcement bar lorem ipsum dolor sit amet 4'
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#announcement-bar {
  position: relative;
  height: 80px;
  overflow: hidden;
  background-color: $big-blue-default;
  transition: height 0.4s ease-in-out;
  @include mobile {
    height: 92px;
    padding: 0 15px;
  }
  &.is-hidden {
    height: 0;
  }

  .wrapper {
    position: relative;
    height: 80px;
    @include mobile {
      height: 92px;
    }
  }

  .container {
    @apply flex items-center justify-center;
    height: 100%;
  }

  p {
    color: $white;
    @include mobile {
      padding-right: 85px;
    }
  }

  .close {
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    width: 23px;
    height: 23px;
    @include mobile {
      right: 8px;
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 23px;
      height: 4px;
      background-color: $white;
      transform-origin: center;
      transition: transform 0.2s ease-in-out;

      &:nth-child(1) {
        transform: translate(-50%, -50%) rotate(-45deg);
      }

      &:nth-child(2) {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
}
</style>