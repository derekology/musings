<template>
    <div id="mobile-menu" class="d-md-none">
        <b-offcanvas class="bg-dark" id="mobile-offcanvas" v-model="offcanvasShow" title="Newest Posts" placement="bottom">
            <nav class="overflow-scroll">
                <PostFeed />
            </nav>
        </b-offcanvas>
        <div class="navbar bg-dark trim-top fixed-bottom w-100 p-3 justify-content-between bottom-0">
            <material-icon class="material-icon" name="menu" v-on:click="click()"
                v-show="!offcanvasShow" />
            <material-icon class="material-icon" name="close" v-on:click="click()"
                v-show="offcanvasShow" />
            <div class="header-logo">
                <router-link to="/" class="nav-link" aria-current="page">
                    <HorizontalLogo />
                </router-link>
            </div>
            <div style="width: 24px;"></div>
        </div>
    </div>
    <div id="desktop-menu"
        class="d-none d-md-flex flex-column flex-shrink-0 text-white bg-dark trim-left position-fixed vh-100 justify-content-between">
        <div class="header-logo mx-auto px-2 pt-4 pb-3">
            <router-link to="/" class="nav-link" aria-current="page">
                <HorizontalLogo />
            </router-link>
        </div>
        <nav class="overflow-scroll">
            <PostFeed class="px-3" />
        </nav>
        <div class="horizontal-menu sticky-bottom">
            <hr class="mb-0" />
            <HorizontalMenu />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HorizontalLogo from '@/components/global/LogoHorizontal.vue';
import PostFeed from '@/components/nav/PostFeed.vue';
import HorizontalMenu from '@/components/nav/HorizontalMenu.vue';

export default defineComponent({
    name: 'SiteNav',

    components: {
        HorizontalLogo,
        PostFeed,
        HorizontalMenu,
    },

    setup() {
        /**
         * Set up Bootstrap offcanvas.
         */
        const offcanvasShow = ref(false)
        const click = (): void => {
            offcanvasShow.value = !offcanvasShow.value;
        }

        return {
            offcanvasShow,
            click
        }
    }
})
</script>

<style scoped>
.navbar {
    height: 75px;
    z-index: 9999;
}

.material-icon {
    color: var(--color-heading);
}

#desktop-menu {
    width: 230px;
}

#mobile-menu .header-logo svg {
    height: 35px;
}

#desktop-menu .header-logo {
    width: 190px;
}

nav::-webkit-scrollbar,
#post-feed::-webkit-scrollbar {
    display: none;
}

nav,
#post-feed {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
