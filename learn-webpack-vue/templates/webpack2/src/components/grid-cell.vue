<template>
  <!--<router-link :class="itemIdx && cellClass || 'grid-cell'"-->
  <a class="grid-cell"
     :class="this.itemIdx ? 'cell-' + this.itemIdx : ''"
     :href="href">
    <slot>
      <div class="ico-box" :class="iconBg ? 'isBg': ''"
        :style="iconStyle">
        <slot name="icon"></slot>
        <i v-if="item.icon" :class="item.icon ||'icon-shop-o'"></i>
        <img v-if="item.img" :src="item.img" :alt="item.title">

        <slot name="special-tag"></slot>
      </div>
      <div class="view-title" v-text="title"></div>
    </slot>

  </a>
</template>

<script>
  export default {
    name: 'grid-cell',

    props: {
      to: [String, Object],
      title: String,
      cellClass: String,
      itemIdx: Number,
      iconBg: String,
      iconColor: String
    },

    data () {
      return {
        iconStyle: {
          backgroundColor: this.iconBg,
          color: this.iconColor
        }
      }
    },

    computed: {
      href () {
        if (this.to && !this.added && this.$router) {
          const resolved = this.$router.match(this.to);
          if (!resolved.matched.length) return this.to;

          this.$nextTick(() => {
            this.added = true;
            this.$el.addEventListener('click', this.handleClick);
          });
          return resolved.path;
        }
        return this.to;
      }
    },

    methods: {
      handleClick ($event) {
        $event.preventDefault();
        this.$router.push(this.href);
      }
    }
  }
</script>
