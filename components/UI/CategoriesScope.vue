<template>
  <div class="categories-scope absolute">
    <div :class="'  cs-scope-img cs-scope-img'+uniqueId+' absolute'">
      <div class="scope-text-box">
        <div class="font-semibold uppercase text-p-all mb-mobile-x-sm">
          Scope
        </div>
        <ul class="scope-list lg:text-p-all leading-p-all">
          <li
            v-for="(item, index) in scope"
            :key="index"
            v-html="item.name" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesScope',
  props: ['scope', 'uniqueId']
};
</script>

<style lang="scss" scoped>

.categories-scope {
  width: 200px;
  height: 200px;
  left: 40px;
  top: 40px;
  overflow: hidden;
  font-size: 14px;

  @include tablet {
    height: 220px;
  }
  @include xlarge {
    left: 60px;
    top: 60px;
    width: 273px;
    height: 300px;
  }

  .cs-scope-img {
    background-image: url('/images/case-study-scope-shape.png');
    padding: 20px;
    width: 200px;
    height: 210px;
    left: 0;
    background-size: cover;
    color: #fff;
    top: 0;

    @include xlarge {
      width: 273px;
      height: 300px;
      padding: 40.5px 44.5px;
    }
  }
}

.scope-list {
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;

  @include xlarge {
    -webkit-line-clamp: 6;
  }
}
@-webkit-keyframes fadeInList {
  0% {
    opacity: 0;
    top: 20px;
  }
  //75% {
  //  opacity: 0.5;
  //  top: 0;
  //}
  100% {
    opacity: 1;
    top: 0;
  }
}
.case-study:hover .categories-scope .cs-scope-img .scope-list li {
  animation: translate-top-in 0.4s, easeInOutQuint cubic-bezier(0.83, 0, 0.17, 1);
  transform: translateY(-20px);
}

$total-items: 4; //number of elements
$delay: 0.2s; //delay between elements

// Set delay per List Item
@for $i from 1 through $total-items {
  $delay: $delay+0.15s;

  .case-study:hover .categories-scope .cs-scope-img .scope-list li:nth-child(#{$i}) {
    animation-delay: $delay;
    animation: translate-top-out $delay, easeInOutQuint cubic-bezier(0.83, 0, 0.17, 1);
    transform:translateY(0);
  }
}

</style>