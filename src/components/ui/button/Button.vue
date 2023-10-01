<script setup>
import { buttonVariants } from '.'
import { cn } from '@/lib/utils'

const props = defineProps({
  variant: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'default'
  },
  as: {
    type: String,
    default: 'button'
  }
})
</script>

<template>
  <component :is="as" :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')">
    <slot />
  </component>
</template>
