<template>
  <header class="navbar" ref="navbar" :class="{ fixed: navbarFixed }"
    @mouseenter="toggleNavBarBg(true)"
    @mouseleave="toggleNavBarBg(false)">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <router-link :to="$localePath" class="home-link">
      <img class="logo" v-if="$themeConfig.logo" :src="$withBase($themeConfig.logo)" :alt="$siteTitle">
      <span ref="siteName" class="site-name" v-if="$siteTitle">{{ $siteTitle }}</span>
    </router-link>

    <div class="links" :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}">

      <!-- 日夜模式转换 -->
      <DayAndNight title="切换模式" />

      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
      <SearchBox v-else-if="$themeConfig.search !== false && $frontmatter.search !== false" />
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton'
import NavLinks from '@theme/components/NavLinks'
import DayAndNight from '@theme/components/Mode/DayAndNight'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, DayAndNight },

  data() {
    return {
      navbarFixed: false,
      isHome: true,
      linksWrapMaxWidth: null
    }
  },

  watch: {
    $route: {
      handler(to, from) {
        if (to.path == "/") {
          this.isHome = true;
          this.navbarFixed = false;
          return;
        }
        this.isHome = false;
        this.navbarFixed = true;
      },
      immediate: true,
    },
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING -
          (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
    window.addEventListener("scroll", this.throttle(this.handleNavbarBg), false)
  },

  computed: {
    algolia() {
      return this.$themeLocaleConfig.algolia || this.$themeConfig.algolia || {}
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },

  methods: {
    throttle(func, delay) {
      let timer = null
      let startTime = Date.now()

      return function () {
        const curTime = Date.now()
        const remaining = delay - (curTime - startTime)
        const context = this
        const args = arguments

        clearTimeout(timer)
        if (remaining <= 0) {
          func.apply(context, args)
          startTime = Date.now()
        } else {
          timer = setTimeout(func, remaining)
        }
      }
    },
    toggleNavBarBg(isFocus) {
      if (this.$refs.navbar.classList.contains("fixed")) return;
      if (isFocus) this.$refs.navbar.classList.add("focus");
      else this.$refs.navbar.classList.remove("focus");
    },
    handleNavbarBg() {
      if (!this.isHome) return;
      this.navbarFixed = window.pageYOffset > window.innerHeight - 60;
    },
  }
}

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem;
$navbar-horizontal-padding = 1.5rem;

.navbar {
  padding: $navbar-vertical-padding $navbar-horizontal-padding;
  line-height: $navbarHeight - 1.4rem;
  box-shadow: var(--box-shadow);
  background: var(--background-color);

  a, span, img {
    display: inline-block;
  }

  .logo {
    height: $navbarHeight - 1.4rem;
    min-width: $navbarHeight - 1.4rem;
    margin-right: 0.8rem;
    vertical-align: top;
    border-radius: 50%;
  }

  .site-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color);
    position: relative;
  }

  .links {
    padding-left: 1.5rem;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    right: $navbar-horizontal-padding;
    top: $navbar-vertical-padding;
    display: flex;
    background-color: var(--background-color);

    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    padding-left: 4rem;

    .can-hide {
      display: none;
    }

    .links {
      padding-left: 0.2rem;
    }
  }
}
</style>
