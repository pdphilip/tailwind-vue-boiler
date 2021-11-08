import { createApp, provide, reactive, ref } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Popover, TransitionRoot, PopoverButton, TransitionChild, PopoverPanel } from '@headlessui/vue'
import * as solidIcons from '@heroicons/vue/solid'
import * as outlineIcons from '@heroicons/vue/outline'

//https://headlessui.dev/

//https://heroicons.com/   <---- Icons

const app = createApp({
    components: {
        'app-disclosure': Disclosure,
        'app-disclosure-button': DisclosureButton,
        'app-disclosure-panel': DisclosurePanel,
        'app-menu': Menu,
        'app-menu-button': MenuButton,
        'app-menu-item': MenuItem,
        'app-menu-items': MenuItems,
        'app-popover': Popover,
        'app-popover-panel': PopoverPanel,
        'app-popover-button': PopoverButton,
        'app-transition-root': TransitionRoot,
        'app-transition-child': TransitionChild,


    },
    setup()
    {

    },

})

for (const [key, value] of Object.entries(outlineIcons)) {
    app.component(key, value)
}

app.mount('#app');
